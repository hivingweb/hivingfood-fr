import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';

(() => {
    const overlay = document.getElementById('gameOverlay');
    const selectScreen = document.getElementById('gameSelect');
    const gameScreen = document.getElementById('gameScreen');
    const gameContainer = document.getElementById('gameContainer');
    const overMsg = document.getElementById('gameOverMsg');
    const scoreEl = document.getElementById('gameScore');
    const highScoreEl = document.getElementById('gameHighScore');
    const finalScoreEl = document.getElementById('gameFinalScore');
    if (!overlay || !gameContainer) return;

    // Loaders
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('https://cdn.jsdelivr.net/npm/three@0.162.0/examples/jsm/libs/draco/');
    const gltfLoader = new GLTFLoader();
    gltfLoader.setDRACOLoader(dracoLoader);

    const CHARACTERS = [
        { id: 'chef-egg', file: 'game/models/chef-egg.glb' },
        { id: 'karate-potato', file: 'game/models/karate-potato.glb' },
        { id: 'businessman', file: 'game/models/businessman.glb' },
        { id: 'gingerbread', file: 'game/models/gingerbread.glb' },
    ];

    const FOODS = ['pizza','burger','donut','waffle','avocado','hotdog','ramen','sushi','carrot','croissant','bread'];

    // State
    let scene, camera, renderer;
    let playerModel;
    let state = 'select'; // select | intro | playing | dead
    let score = 0, highScore = 0;
    let playerY = 0, velocityY = 0, onGround = true;
    let gameSpeed = 6;
    let obstacles = [];
    let spawnTimer = 0;
    let foodCache = {};
    let animId = null;
    let lastTime = 0;
    let previewRenderers = [];

    // Intro animation
    let introTimer = 0;
    const INTRO_DURATION = 1.2; // seconds

    // Visual FX
    let speedLines = [];
    let groundDashes = [];
    let fallingFoods = [];
    let scoreFlash = 0;
    let deathFlash = 0;
    let lastMilestone = 0;

    const GRAVITY = -20;
    const JUMP = 8;
    const PLAYER_X = 2.5;
    const ACCENT = new THREE.Color(0xc8e664);

    // ---- Load & normalize model (wrapped in Group) ----
    function loadModel(path) {
        return new Promise((resolve) => {
            gltfLoader.load(path, (gltf) => {
                const model = gltf.scene;
                const box = new THREE.Box3().setFromObject(model);
                const size = box.getSize(new THREE.Vector3());
                const s = 1.2 / Math.max(size.x, size.y, size.z);
                model.scale.setScalar(s);
                const box2 = new THREE.Box3().setFromObject(model);
                const center = box2.getCenter(new THREE.Vector3());
                model.position.set(-center.x, -box2.min.y, -center.z);
                const group = new THREE.Group();
                group.add(model);
                resolve(group);
            }, undefined, () => resolve(null));
        });
    }

    // ---- Character previews ----
    async function initPreviews() {
        previewRenderers.forEach(r => r.dispose());
        previewRenderers = [];
        for (const el of document.querySelectorAll('.game-char')) {
            const char = CHARACTERS.find(c => c.id === el.dataset.model);
            if (!char) continue;
            const box = el.querySelector('.game-char-preview');
            box.innerHTML = '';
            const s = new THREE.Scene();
            const c = new THREE.PerspectiveCamera(35, 1, 0.1, 50);
            c.position.set(0, 1.2, 4.5);
            c.lookAt(0, 0.8, 0);
            const r = new THREE.WebGLRenderer({ alpha: true, antialias: true });
            r.setSize(90, 90);
            r.setPixelRatio(2);
            box.appendChild(r.domElement);
            previewRenderers.push(r);
            s.add(new THREE.DirectionalLight(0xffffff, 2.5));
            s.add(new THREE.AmbientLight(0xffffff, 1));
            s.children[0].position.set(2, 3, 2);
            const m = await loadModel(char.file);
            if (!m) continue;
            s.add(m);
            (function spin() {
                if (!overlay.classList.contains('open') || state !== 'select') return;
                m.rotation.y += 0.015;
                m.position.y = Math.sin(Date.now() * 0.002) * 0.08;
                r.render(s, c);
                requestAnimationFrame(spin);
            })();
        }
    }

    // ---- Preload foods ----
    function preloadFoods() {
        FOODS.forEach(name => {
            if (foodCache[name]) return;
            loadModel(`game/models/${name}.glb`).then(m => {
                if (m) { m.scale.multiplyScalar(0.65); foodCache[name] = m; }
            });
        });
    }

    // ---- Scene ----
    function createScene() {
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0x111111);

        camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 100);
        camera.position.set(5, 1.5, 16);
        camera.lookAt(5, 0.8, 0);

        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        gameContainer.innerHTML = '';
        gameContainer.appendChild(renderer.domElement);

        // Lights
        const light = new THREE.DirectionalLight(0xffffff, 2);
        light.position.set(3, 8, 5);
        scene.add(light);
        scene.add(new THREE.AmbientLight(0xffffff, 0.7));

        // Ground line (green accent)
        const lineGeo = new THREE.PlaneGeometry(200, 0.05);
        const lineMat = new THREE.MeshBasicMaterial({ color: 0xc8e664 });
        const line = new THREE.Mesh(lineGeo, lineMat);
        line.rotation.x = -Math.PI / 2;
        line.position.y = 0.01;
        scene.add(line);

        // ---- Ground dashes (moving tick marks for speed feel) ----
        groundDashes = [];
        const dashMat = new THREE.MeshBasicMaterial({ color: 0xc8e664, transparent: true, opacity: 0.3 });
        for (let i = 0; i < 20; i++) {
            const dash = new THREE.Mesh(
                new THREE.PlaneGeometry(0.15, 0.02),
                dashMat.clone()
            );
            dash.rotation.x = -Math.PI / 2;
            dash.position.set(-5 + i * 1.5, 0.015, 0);
            scene.add(dash);
            groundDashes.push(dash);
        }

        // ---- Speed lines (horizontal streaks in the air) ----
        speedLines = [];
        const slMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0 });
        for (let i = 0; i < 8; i++) {
            const sl = new THREE.Mesh(
                new THREE.PlaneGeometry(1.5 + Math.random(), 0.01),
                slMat.clone()
            );
            sl.position.set(
                Math.random() * 20 - 5,
                0.5 + Math.random() * 4,
                -1 - Math.random() * 3
            );
            scene.add(sl);
            speedLines.push({ mesh: sl, baseX: sl.position.x, speed: 0.5 + Math.random() * 0.5 });
        }

    }

    // ---- Load player ----
    async function loadPlayer(charId) {
        const char = CHARACTERS.find(c => c.id === charId);
        if (!char) return;
        const model = await loadModel(char.file);
        if (!model) return;
        if (playerModel) scene.remove(playerModel);
        playerModel = model;
        playerModel.rotation.y = Math.PI / 2;
        playerModel.position.set(PLAYER_X, 0, 0);
        scene.add(playerModel);
    }

    // ---- Spawn obstacle on the ground ----
    function spawnObstacle() {
        const keys = Object.keys(foodCache);
        if (!keys.length) return;
        const mesh = foodCache[keys[Math.floor(Math.random() * keys.length)]].clone();
        mesh.position.set(18, 0, 0);
        mesh.rotation.y = Math.random() * Math.PI * 2;
        scene.add(mesh);
        obstacles.push({ mesh });
    }

    // ---- Emoji sprite cache ----
    const EMOJIS = ['🍕','🍔','🍩','🧇','🥑','🌭','🍜','🍣','🥕','🥐','🍞','🍳','🥦','🍅','🌶️','🍋','🧀','🍇','🍌','🫑','🥬','🍎','🥘','🍗'];
    const emojiTextureCache = {};

    function getEmojiTexture(emoji) {
        if (emojiTextureCache[emoji]) return emojiTextureCache[emoji];
        const size = 128;
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');
        ctx.font = `${size * 0.75}px serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(emoji, size / 2, size / 2);
        const tex = new THREE.CanvasTexture(canvas);
        tex.needsUpdate = true;
        emojiTextureCache[emoji] = tex;
        return tex;
    }

    // ---- Spawn falling emoji ----
    function spawnFallingFood() {
        const emoji = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
        const tex = getEmojiTexture(emoji);
        const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, opacity: 0.6 });
        const sprite = new THREE.Sprite(mat);
        const s = 0.3 + Math.random() * 0.4;
        sprite.scale.set(s, s, 1);
        sprite.position.set(
            PLAYER_X - 2 + Math.random() * 16,
            5 + Math.random() * 3,
            -0.2 - Math.random() * 1
        );
        scene.add(sprite);
        fallingFoods.push({
            mesh: sprite,
            vy: -1.5 - Math.random() * 2,
            spin: (Math.random() - 0.5) * 3,
        });
    }

    // ---- INTRO ANIMATION (spin + bounce in) ----
    function introLoop(time) {
        if (state !== 'intro') return;
        animId = requestAnimationFrame(introLoop);

        const dt = Math.min((time - lastTime) / 1000, 0.05);
        lastTime = time;
        if (dt <= 0) return;

        introTimer += dt;
        const t = Math.min(introTimer / INTRO_DURATION, 1);

        if (playerModel) {
            // Ease out cubic
            const ease = 1 - Math.pow(1 - t, 3);
            // Spin: 2 full rotations → land facing right (Math.PI/2)
            playerModel.rotation.y = Math.PI * 4 * ease + Math.PI / 2 * ease;
            // At end, fix to facing right
            if (t >= 1) playerModel.rotation.y = Math.PI / 2;

            // Bounce: start high, land on ground
            const bounceH = (1 - ease) * 3;
            playerModel.position.y = bounceH;

            // Scale pop: start small, overshoot, settle
            const scaleEase = t < 0.7 ? t / 0.7 : 1 + Math.sin((t - 0.7) / 0.3 * Math.PI) * 0.1;
            playerModel.scale.setScalar(scaleEase);
        }

        renderer.render(scene, camera);

        // End intro → start playing
        if (t >= 1) {
            state = 'playing';
            playerModel.scale.setScalar(1);
            lastTime = performance.now();
            animId = requestAnimationFrame(loop);
        }
    }

    // ---- GAME LOOP ----
    function loop(time) {
        if (state !== 'playing') return;
        animId = requestAnimationFrame(loop);

        const dt = Math.min((time - lastTime) / 1000, 0.05);
        lastTime = time;
        if (dt <= 0) return;

        // Speed tiers: big jumps at 10/20/30/40/50
        const tier = score < 10 ? 0 : score < 20 ? 1 : score < 30 ? 2 : score < 40 ? 3 : score < 50 ? 4 : 5;
        const TIER_SPEEDS = [9, 12, 15, 19, 23, 28];
        gameSpeed = TIER_SPEEDS[tier];

        // ---- Player physics ----
        if (!onGround) {
            velocityY += GRAVITY * dt;
            playerY += velocityY * dt;
            if (playerY <= 0) { playerY = 0; velocityY = 0; onGround = true; }
        }

        if (playerModel) {
            const bob = onGround ? Math.abs(Math.sin(time * 0.012)) * 0.05 : 0;
            playerModel.position.y = playerY + bob;
            const tilt = onGround ? 0 : (velocityY > 0 ? 0.15 : -0.1);
            playerModel.rotation.z += (tilt - playerModel.rotation.z) * 0.1;
        }

        // ---- Spawn obstacles ----
        spawnTimer -= dt;
        if (spawnTimer <= 0) {
            spawnObstacle();
            const TIER_GAPS = [2.4, 2.0, 1.6, 1.2, 0.95, 0.75];
            const gap = TIER_GAPS[tier];
            spawnTimer = gap + Math.random() * gap * 0.5;
        }

        // ---- Falling emojis (decorative rain) ----
        if (Math.random() < 0.03 + score * 0.002) spawnFallingFood();
        for (let i = fallingFoods.length - 1; i >= 0; i--) {
            const f = fallingFoods[i];
            f.mesh.position.y += f.vy * dt;
            f.mesh.position.x -= gameSpeed * dt * 0.12;
            f.mesh.material.rotation += f.spin * dt;
            if (f.mesh.position.y < -3) {
                scene.remove(f.mesh);
                fallingFoods.splice(i, 1);
            }
        }

        // ---- Ground dashes movement ----
        for (const dash of groundDashes) {
            dash.position.x -= gameSpeed * dt;
            if (dash.position.x < -6) dash.position.x += 30;
        }

        // ---- Speed lines ----
        const speedFactor = Math.min(score / 20, 1); // ramp up with score
        for (const sl of speedLines) {
            sl.mesh.material.opacity = speedFactor * 0.12;
            sl.mesh.position.x -= gameSpeed * dt * sl.speed;
            if (sl.mesh.position.x < -8) sl.mesh.position.x = 18 + Math.random() * 5;
        }

        // ---- Move obstacles ----
        for (let i = obstacles.length - 1; i >= 0; i--) {
            const o = obstacles[i];
            o.mesh.position.x -= gameSpeed * dt;
            o.mesh.rotation.y += dt * 1.5;

            // Scored!
            if (o.mesh.position.x < PLAYER_X - 2) {
                scene.remove(o.mesh);
                obstacles.splice(i, 1);
                score++;
                scoreEl.textContent = score;

                // Tier change flash (10/20/30/40/50) = big flash, every 5 = small flash
                if (score % 5 === 0 && score !== lastMilestone) {
                    lastMilestone = score;
                    scoreFlash = (score % 10 === 0) ? 1.5 : 1;
                }
                continue;
            }

            // Collision
            const dx = Math.abs(o.mesh.position.x - PLAYER_X);
            const dy = Math.abs(o.mesh.position.y - (playerY + 0.4));
            if (dx < 0.5 && dy < 0.5) { die(); return; }
        }

        // ---- Score flash (green pulse) ----
        if (scoreFlash > 0) {
            scoreFlash -= dt * 3;
            const flashIntensity = Math.max(0, scoreFlash);
            scene.background.copy(new THREE.Color(0x111111).lerp(ACCENT, flashIntensity * 0.15));
            scoreEl.style.transform = `scale(${1 + flashIntensity * 0.5})`;
        } else {
            scene.background.setHex(0x111111);
            scoreEl.style.transform = '';
        }

        // ---- Death flash (red pulse, handled in die()) ----
        if (deathFlash > 0) {
            deathFlash -= dt * 4;
            scene.background.copy(new THREE.Color(0x111111).lerp(new THREE.Color(0xff2222), Math.max(0, deathFlash) * 0.3));
        }

        renderer.render(scene, camera);
    }

    function jump() { if (onGround) { velocityY = JUMP; onGround = false; } }

    function die() {
        state = 'dead';
        deathFlash = 1;
        if (score > highScore) { highScore = score; highScoreEl.textContent = highScore; }
        finalScoreEl.textContent = score;

        // Red flash animation before showing game over
        let flashTime = 0;
        (function flashLoop(t) {
            if (!renderer || state !== 'dead') return; // stop if restarted
            const dt = t ? Math.min((t - (flashLoop.lt || t)) / 1000, 0.05) : 0;
            flashLoop.lt = t;
            flashTime += dt;
            const f = Math.max(0, 1 - flashTime * 3);
            scene.background.copy(new THREE.Color(0x111111).lerp(new THREE.Color(0xff2222), f * 0.4));
            renderer.render(scene, camera);
            if (flashTime < 0.4) requestAnimationFrame(flashLoop);
            else if (state === 'dead') { scene.background.setHex(0x111111); overMsg.style.display = 'flex'; }
        })(0);
    }

    function resetGame() {
        score = 0; gameSpeed = 9; spawnTimer = 2;
        playerY = 0; velocityY = 0; onGround = true;
        scoreFlash = 0; deathFlash = 0; lastMilestone = 0;
        scoreEl.textContent = '0';
        scoreEl.style.transform = '';
        overMsg.style.display = 'none';
        obstacles.forEach(o => scene.remove(o.mesh));
        obstacles = [];
        fallingFoods.forEach(f => scene.remove(f.mesh));
        fallingFoods = [];
        scene.background.setHex(0x111111);
        if (playerModel) { playerModel.position.y = 0; playerModel.rotation.z = 0; playerModel.scale.setScalar(1); }
    }

    // ---- Start ----
    async function startGame(charId) {
        selectScreen.style.display = 'none';
        gameScreen.style.display = 'block';
        createScene();
        preloadFoods();
        await loadPlayer(charId);
        resetGame();

        // Start with intro animation
        state = 'intro';
        introTimer = 0;
        lastTime = performance.now();
        animId = requestAnimationFrame(introLoop);
    }

    // ---- Input ----
    function handleInput(e) {
        if (!overlay.classList.contains('open')) return;
        if (e.type === 'keydown' && e.code !== 'Space' && e.code !== 'ArrowUp') return;
        if (e.type === 'keydown') e.preventDefault();
        if (state === 'playing') jump();
        else if (state === 'dead') {
            resetGame();
            // Replay with intro spin
            state = 'intro';
            introTimer = 0;
            lastTime = performance.now();
            animId = requestAnimationFrame(introLoop);
        }
    }

    document.addEventListener('keydown', handleInput);
    gameContainer.addEventListener('click', (e) => { if (!e.target.closest('.game-close')) handleInput(e); });
    gameContainer.addEventListener('touchstart', (e) => { if (!e.target.closest('.game-close')) { e.preventDefault(); handleInput(e); } }, { passive: false });

    document.querySelectorAll('.game-char').forEach(el => {
        el.addEventListener('click', () => startGame(el.dataset.model));
    });

    window.addEventListener('gameOpen', () => {
        state = 'select';
        selectScreen.style.display = 'flex';
        gameScreen.style.display = 'none';
        overMsg.style.display = 'none';
        initPreviews();
        preloadFoods();
    });

    // ---- Deep dispose helper ----
    function disposeObject(obj) {
        if (!obj) return;
        obj.traverse(child => {
            if (child.geometry) child.geometry.dispose();
            if (child.material) {
                const mats = Array.isArray(child.material) ? child.material : [child.material];
                mats.forEach(m => {
                    if (m.map) m.map.dispose();
                    if (m.normalMap) m.normalMap.dispose();
                    if (m.roughnessMap) m.roughnessMap.dispose();
                    if (m.metalnessMap) m.metalnessMap.dispose();
                    if (m.emissiveMap) m.emissiveMap.dispose();
                    m.dispose();
                });
            }
        });
    }

    window.addEventListener('gameClose', () => {
        state = 'select';
        if (animId) cancelAnimationFrame(animId);

        // Dispose obstacles
        obstacles.forEach(o => { scene?.remove(o.mesh); disposeObject(o.mesh); });
        obstacles = [];

        // Dispose falling emojis
        fallingFoods.forEach(f => { scene?.remove(f.mesh); disposeObject(f.mesh); });
        fallingFoods = [];

        // Dispose speed lines & ground dashes
        speedLines.forEach(sl => { scene?.remove(sl.mesh); disposeObject(sl.mesh); });
        speedLines = [];
        groundDashes.forEach(d => { scene?.remove(d); disposeObject(d); });
        groundDashes = [];

        // Dispose player
        if (playerModel) { scene?.remove(playerModel); disposeObject(playerModel); playerModel = null; }

        // Dispose emoji texture cache
        Object.values(emojiTextureCache).forEach(t => t.dispose());
        Object.keys(emojiTextureCache).forEach(k => delete emojiTextureCache[k]);

        // Dispose food cache
        Object.values(foodCache).forEach(m => disposeObject(m));
        foodCache = {};

        // Dispose preview renderers
        previewRenderers.forEach(r => r.dispose());
        previewRenderers = [];

        // Dispose scene
        if (scene) { disposeObject(scene); scene = null; }

        // Dispose renderer
        if (renderer) { renderer.dispose(); renderer.forceContextLoss(); renderer.domElement = null; renderer = null; }
        camera = null;
    });

    window.addEventListener('resize', () => {
        if (!camera || !renderer) return;
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
})();
