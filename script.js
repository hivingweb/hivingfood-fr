document.addEventListener('DOMContentLoaded', () => {

    // ========== PRELOADER ==========
    const preloader = document.getElementById('preloader');
    const skipPreloader = sessionStorage.getItem('hivingVisited');

    if (!skipPreloader) {
        document.body.style.overflow = 'hidden';
    }

    // ========== LENIS SMOOTH SCROLL ==========
    let lenis;
    const hasGsap = typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined';

    if (hasGsap) {
        gsap.registerPlugin(ScrollTrigger);
    }

    if (typeof Lenis !== 'undefined') {
        lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        });
        if (!skipPreloader) lenis.stop(); // stop until preloader done
        window.__lenis = lenis; // expose for debugging

        if (hasGsap) {
            // Let GSAP drive Lenis (single RAF loop)
            lenis.on('scroll', ScrollTrigger.update);
            gsap.ticker.add((time) => lenis.raf(time * 1000));
            gsap.ticker.lagSmoothing(0);
        } else {
            // Standalone Lenis RAF
            function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
            requestAnimationFrame(raf);
        }
    }

    const finishPreloader = () => {
        preloader.classList.add('done');
        document.body.style.overflow = '';
        if (lenis) lenis.start();
        setTimeout(() => preloader.remove(), 800);
        sessionStorage.setItem('hivingVisited', '1');
    };

    if (skipPreloader) {
        // Already visited → skip preloader instantly
        preloader.remove();
        document.body.classList.add('skip-preloader');
        if (lenis) lenis.start();
    } else {
        setTimeout(finishPreloader, 1500);
    }

    // ========== VIDEO FALLBACK ==========
    const video = document.getElementById('heroVideo');
    const heroBg = document.querySelector('.hero-bg');
    if (video) {
        const src = video.querySelector('source');
        if (!src || !src.src) {
            video.style.display = 'none';
            if (heroBg) heroBg.classList.add('no-video');
        }
        video.addEventListener('error', () => {
            video.style.display = 'none';
            if (heroBg) heroBg.classList.add('no-video');
        });
    }

    // ========== BURGER MENU ==========
    const burger = document.getElementById('burger');
    const headerNav = document.getElementById('headerNav');
    if (burger && headerNav) {
        burger.addEventListener('click', () => {
            const isOpen = headerNav.classList.toggle('open');
            burger.classList.toggle('active');
            burger.setAttribute('aria-expanded', isOpen);
            document.body.style.overflow = isOpen ? 'hidden' : '';
        });
        headerNav.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                headerNav.classList.remove('open');
                burger.classList.remove('active');
                burger.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            });
        });
    }

    // ========== SPLIT TEXT UTILITY ==========
    function splitChars(text, parent) {
        const trimmed = text.replace(/\s+/g, ' ').trim();
        if (!trimmed) return;
        trimmed.split('').forEach(ch => {
            if (ch === ' ') {
                const sp = document.createElement('span');
                sp.className = 'char-space';
                parent.appendChild(sp);
            } else {
                const span = document.createElement('span');
                span.className = 'char';
                span.textContent = ch;
                parent.appendChild(span);
            }
        });
    }

    function splitTextNode(parent) {
        const nodes = Array.from(parent.childNodes);
        parent.innerHTML = '';
        let needsSpace = false;
        nodes.forEach(node => {
            if (node.nodeType === 3) {
                const raw = node.textContent;
                const collapsed = raw.replace(/\s+/g, ' ');
                // If text starts with space, it's a separator
                if (collapsed.startsWith(' ') && parent.childNodes.length > 0) needsSpace = true;
                const trimmed = collapsed.trim();
                if (!trimmed) { if (raw.match(/\s/)) needsSpace = true; return; }
                if (needsSpace) {
                    const sp = document.createElement('span');
                    sp.className = 'char-space';
                    parent.appendChild(sp);
                    needsSpace = false;
                }
                splitChars(trimmed, parent);
                if (collapsed.endsWith(' ')) needsSpace = true;
            } else if (node.nodeType === 1) {
                if (needsSpace) {
                    const sp = document.createElement('span');
                    sp.className = 'char-space';
                    parent.appendChild(sp);
                    needsSpace = false;
                }
                const wrapper = document.createElement(node.tagName.toLowerCase());
                if (node.className) wrapper.className = node.className;
                if (node.getAttribute('style')) wrapper.setAttribute('style', node.getAttribute('style'));
                Array.from(node.childNodes).forEach(child => wrapper.appendChild(child.cloneNode(true)));
                splitTextNode(wrapper);
                if (wrapper.childNodes.length > 0) parent.appendChild(wrapper);
            }
        });
    }

    function splitText(el) {
        if (el.dataset.split === 'done') return;
        el.classList.add('split-heading');
        const clone = el.cloneNode(true);
        el.innerHTML = '';
        let needsSpace = false;
        Array.from(clone.childNodes).forEach(node => {
            if (node.nodeType === 3) {
                const raw = node.textContent;
                const collapsed = raw.replace(/\s+/g, ' ');
                if (collapsed.startsWith(' ') && el.childNodes.length > 0) needsSpace = true;
                const trimmed = collapsed.trim();
                if (!trimmed) { if (raw.match(/\s/)) needsSpace = true; return; }
                if (needsSpace) {
                    const sp = document.createElement('span');
                    sp.className = 'char-space';
                    el.appendChild(sp);
                    needsSpace = false;
                }
                splitChars(trimmed, el);
                if (collapsed.endsWith(' ')) needsSpace = true;
            } else if (node.nodeType === 1) {
                if (needsSpace) {
                    const sp = document.createElement('span');
                    sp.className = 'char-space';
                    el.appendChild(sp);
                    needsSpace = false;
                }
                const wrapper = document.createElement(node.tagName.toLowerCase());
                if (node.className) wrapper.className = node.className;
                if (node.getAttribute('style')) wrapper.setAttribute('style', node.getAttribute('style'));
                Array.from(node.childNodes).forEach(child => wrapper.appendChild(child.cloneNode(true)));
                splitTextNode(wrapper);
                if (wrapper.childNodes.length > 0) el.appendChild(wrapper);
            }
        });
        el.dataset.split = 'done';
    }

    // ========== GSAP SCROLL ANIMATIONS ==========
    if (hasGsap) {

        // Helper: scroll-triggered reveal (uses fromTo to avoid immediateRender issues)
        function scrollReveal(targets, fromVars, toVars, triggerOpts) {
            gsap.utils.toArray(targets).forEach((el, i) => {
                const from = typeof fromVars === 'function' ? fromVars(el, i) : {...fromVars};
                const to = typeof toVars === 'function' ? toVars(el, i) : {...toVars};
                to.scrollTrigger = {trigger: el, start: 'top 88%', ...triggerOpts};
                gsap.fromTo(el, from, to);
            });
        }

        // --- SPLIT TEXT HEADING REVEALS ---
        const splitSelectors = [
            '.about-title',
            '.services-title',
            '.process-title',
            '.talents-title',
            '.usp-title',
            '.location-title',
            '.faq-title',
            '.contact-title'
        ];

        splitSelectors.forEach(sel => {
            const el = document.querySelector(sel);
            if (!el) return;
            splitText(el);
            const chars = el.querySelectorAll('.char');
            gsap.fromTo(chars,
                { y: 60, opacity: 0, rotateX: -90 },
                {
                    y: 0, opacity: 1, rotateX: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    stagger: 0.02,
                    scrollTrigger: { trigger: el, start: 'top 85%' }
                }
            );
        });

        // Section labels
        scrollReveal('.section-label', {y: 30, opacity: 0}, {y: 0, opacity: 1, duration: 0.8});

        // Paragraphs
        scrollReveal('.about p, .method p, .why-section p',
            {y: 40, opacity: 0}, {y: 0, opacity: 1, duration: 0.8, ease: 'power2.out'});

        // Service rows
        scrollReveal('.service-row',
            {x: -60, opacity: 0},
            (el, i) => ({x: 0, opacity: 1, duration: 0.8, delay: i * 0.1, ease: 'power3.out'}));

        // Method steps
        scrollReveal('.method-step',
            {y: 50, opacity: 0},
            (el, i) => ({y: 0, opacity: 1, duration: 0.7, delay: i * 0.15, ease: 'power2.out'}));

        // Talent cards
        scrollReveal('.talent-card',
            {y: 80, opacity: 0},
            (el, i) => ({y: 0, opacity: 1, duration: 0.7, delay: (i % 3) * 0.15, ease: 'power3.out'}),
            {start: 'top 92%'});



        // Impact counters
        const impactBar = document.querySelector('.impact-bar');
        if (impactBar) {
            gsap.fromTo(impactBar,
                {y: 60, opacity: 0},
                {y: 0, opacity: 1, duration: 1, ease: 'power2.out',
                scrollTrigger: {trigger: impactBar, start: 'top 90%'}});
        }

        // About image — parallax
        const aboutVisual = document.querySelector('.about-visual img');
        if (aboutVisual) {
            gsap.to(aboutVisual, {
                y: -40,
                scrollTrigger: {trigger: '.about-visual', start: 'top bottom', end: 'bottom top', scrub: 1}
            });
        }

        // Hero parallax — content fades on scroll
        gsap.to('.hero-content', {
            y: -80, opacity: 0,
            scrollTrigger: {trigger: '.hero', start: 'top top', end: '60% top', scrub: true}
        });

    } else {
        // Fallback: simple IntersectionObserver
        const reveals = document.querySelectorAll('.reveal-up, .reveal-scale');
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
        reveals.forEach(el => revealObserver.observe(el));
    }

    // ========== COUNTER ANIMATION ==========
    const counters = document.querySelectorAll('.counter');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.target);
                let current = 0;
                const duration = 1200;
                const step = target / (duration / 16);
                const timer = setInterval(() => {
                    current += step;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    el.textContent = Math.round(current);
                }, 16);
                counterObserver.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(el => counterObserver.observe(el));

    // ========== LOAD TALENTS FROM API ==========
    async function loadTalents() {
        const track = document.querySelector('.talents-track');
        if (!track) return;

        try {
            const apiBase = (window.location.port === '3456' ? 'http://127.0.0.1:3457' : '') + '/api';
            const res = await fetch(apiBase + '/talents');
            if (!res.ok) return;
            const talents = await res.json();

            // Update talent count in subtitle
            const sub = document.querySelector('.talents-sub');
            if (sub) sub.textContent = `${talents.length} createurs food exclusifs`;

            // Preserve existing placeholder images before replacing
            const existingImgs = {};
            track.querySelectorAll('.talent').forEach(card => {
                const handle = card.querySelector('.talent-hover span')?.textContent?.replace('@', '');
                const img = card.querySelector('img')?.src;
                if (handle && img) existingImgs[handle] = img;
            });

            track.innerHTML = talents.map((t) => {
                const igFormatted = formatFollowers(t.instagram_followers);
                const ttFormatted = t.tiktok_followers ? formatFollowers(t.tiktok_followers) : null;
                const statsText = ttFormatted
                    ? `${igFormatted} Insta \u00B7 ${ttFormatted} TikTok`
                    : `${igFormatted} Insta`;

                const imgSrc = t.instagram_pp_url || existingImgs[t.instagram_handle] || '';

                return `
                <div class="talent">
                    <div class="talent-img">
                        <img src="${imgSrc}" alt="${t.name}" loading="lazy">
                        <div class="talent-hover"><span>@${t.instagram_handle}</span></div>
                    </div>
                    <h3>${t.name}</h3>
                    <span class="talent-role">${t.role.toUpperCase()}</span>
                    <span class="talent-stats">${statsText}</span>
                </div>`;
            }).join('');

            // Re-init slider after API load
            initTalentSlider();

        } catch (e) {
            // Talents API not available, using static HTML
        }
    }

    function formatFollowers(count) {
        if (count >= 1000000) return (count / 1000000).toFixed(1).replace('.0', '') + 'M';
        if (count >= 100000) return Math.round(count / 1000) + 'K';
        if (count >= 10000) return (count / 1000).toFixed(1).replace('.0', '') + 'K';
        if (count >= 1000) return (count / 1000).toFixed(1).replace('.0', '') + 'K';
        return count.toString();
    }

    // ========== TALENT SLIDER ==========
    const sliderState = { currentIndex: 0, slideTo: null };

    function initTalentSlider() {
        const track = document.querySelector('.talents-track');
        const prevBtn = document.querySelector('.talents-prev');
        const nextBtn = document.querySelector('.talents-next');
        const currentEl = document.querySelector('.talents-current');
        const totalEl = document.querySelector('.talents-total');
        if (!track || !prevBtn || !nextBtn) return;

        const cards = track.querySelectorAll('.talent');
        const total = cards.length;
        sliderState.currentIndex = 0;

        function getCardsPerView() {
            if (window.innerWidth <= 480) return 1;
            if (window.innerWidth <= 768) return 2;
            if (window.innerWidth <= 1024) return 3;
            return 4;
        }

        function getMaxIndex() {
            return Math.max(0, total - getCardsPerView());
        }

        function updateCounter() {
            if (currentEl) currentEl.textContent = String(sliderState.currentIndex + 1).padStart(2, '0');
            if (totalEl) totalEl.textContent = String(total).padStart(2, '0');
        }

        function updateButtons() {
            prevBtn.disabled = sliderState.currentIndex <= 0;
            nextBtn.disabled = sliderState.currentIndex >= getMaxIndex();
        }

        function slideTo(index) {
            const maxIdx = getMaxIndex();
            sliderState.currentIndex = Math.max(0, Math.min(index, maxIdx));

            const card = cards[0];
            if (!card) return;
            const gap = parseFloat(getComputedStyle(track).gap) || 20;
            const offset = sliderState.currentIndex * (card.offsetWidth + gap);

            if (hasGsap) {
                gsap.to(track, {
                    x: -offset,
                    duration: 0.6,
                    ease: 'power3.out'
                });
            } else {
                track.style.transition = 'transform 0.6s cubic-bezier(0.76, 0, 0.24, 1)';
                track.style.transform = `translateX(${-offset}px)`;
            }

            updateCounter();
            updateButtons();
        }

        sliderState.slideTo = slideTo;

        // Clone & replace buttons to remove old listeners
        const newPrev = prevBtn.cloneNode(true);
        const newNext = nextBtn.cloneNode(true);
        prevBtn.parentNode.replaceChild(newPrev, prevBtn);
        nextBtn.parentNode.replaceChild(newNext, nextBtn);

        newPrev.addEventListener('click', () => slideTo(sliderState.currentIndex - 1));
        newNext.addEventListener('click', () => slideTo(sliderState.currentIndex + 1));

        // Touch / drag support
        let startX = 0, dragX = 0, isDragging = false;
        track.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
        }, { passive: true });
        track.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            dragX = e.touches[0].clientX - startX;
        }, { passive: true });
        track.addEventListener('touchend', () => {
            if (!isDragging) return;
            isDragging = false;
            if (Math.abs(dragX) > 50) {
                slideTo(sliderState.currentIndex + (dragX < 0 ? 1 : -1));
            }
            dragX = 0;
        });

        // Reset position to 0
        if (hasGsap) {
            gsap.set(track, { x: 0 });
        } else {
            track.style.transform = 'translateX(0)';
        }
        updateCounter();
        updateButtons();
    }

    // Resize handler (once)
    let sliderResizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(sliderResizeTimer);
        sliderResizeTimer = setTimeout(() => {
            if (sliderState.slideTo) sliderState.slideTo(sliderState.currentIndex);
        }, 200);
    });

    initTalentSlider();
    // loadTalents(); // Disabled — using local photos from img/talents/

    // ========== HEADER SCROLL EFFECT ==========
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }, { passive: true });

    // ========== SMOOTH SCROLL LINKS ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        if (anchor.classList.contains('btn-book')) return;
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const href = anchor.getAttribute('href');
            if (href.length <= 1) return;
            const target = document.querySelector(href);
            if (target) {
                if (lenis) {
                    lenis.scrollTo(target, { offset: -80 });
                } else {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });

    // ========== PROCESS STEPPER ==========
    (function() {
        const fill = document.getElementById('processTrackFill');
        const nodes = document.querySelectorAll('.process-node');
        const labels = document.querySelectorAll('.process-label');
        const cards = document.querySelectorAll('.process-card');
        if (!fill || !nodes.length) return;

        // Compute fill % based on right edge of 25px start
        const trackLeft = 25; // matches CSS left
        function goToStep(idx) {
            // fill width: 0 → node positions (0%, 33.3%, 66.6%, 100%)
            const pct = idx / (nodes.length - 1) * 100;
            fill.style.width = pct + '%';

            nodes.forEach((n, i) => {
                n.classList.remove('active', 'reached');
                if (i < idx) n.classList.add('reached');
                if (i === idx) n.classList.add('active');
            });
            labels.forEach((l, i) => {
                l.classList.remove('active', 'reached');
                if (i < idx) l.classList.add('reached');
                if (i === idx) l.classList.add('active');
            });
            cards.forEach(c => c.classList.remove('active'));
            cards[idx].classList.add('active');
        }

        nodes.forEach(n => n.addEventListener('click', () => goToStep(+n.dataset.step)));
        labels.forEach(l => l.addEventListener('click', () => goToStep(+l.dataset.step)));

        // Auto-advance every 4s
        let current = 0;
        let autoTimer = setInterval(() => {
            current = (current + 1) % nodes.length;
            goToStep(current);
        }, 4000);

        // Reset timer on manual click
        const resetAuto = () => {
            clearInterval(autoTimer);
            autoTimer = setInterval(() => {
                current = (current + 1) % nodes.length;
                goToStep(current);
            }, 4000);
        };
        nodes.forEach(n => n.addEventListener('click', () => { current = +n.dataset.step; resetAuto(); }));
        labels.forEach(l => l.addEventListener('click', () => { current = +l.dataset.step; resetAuto(); }));

        goToStep(0);
    })();

    // ========== CONTACT FORM ==========
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = form.querySelector('.btn-pill');

            // Mapping robuste par position dans le formulaire
            const inputs = form.querySelectorAll('input');
            const textarea = form.querySelector('textarea');
            const data = {
                name: inputs[0]?.value?.trim() || '',
                email: inputs[1]?.value?.trim() || '',
                company: inputs[2]?.value?.trim() || '',
                message: textarea?.value?.trim() || '',
            };

            btn.textContent = 'ENVOI...';
            btn.disabled = true;

            try {
                const apiBase = (window.location.port === '3456' ? 'http://127.0.0.1:3457' : '') + '/api';
                const res = await fetch(apiBase + '/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });
                if (res.ok) {
                    btn.textContent = 'ENVOYE !';
                    form.reset();
                    if (typeof gtag !== 'undefined') gtag('event', 'generate_lead', { event_category: 'Contact', event_label: 'Contact Form' });
                    if (typeof fbq !== 'undefined') fbq('track', 'Lead');
                    setTimeout(() => { btn.textContent = 'Envoyer'; btn.disabled = false; }, 3000);
                } else if (res.status === 429) {
                    btn.textContent = 'TROP DE REQUETES';
                    setTimeout(() => { btn.textContent = 'Envoyer'; btn.disabled = false; }, 5000);
                } else {
                    throw new Error('Server error');
                }
            } catch {
                btn.textContent = 'ERREUR — REESSAYER';
                btn.disabled = false;
                setTimeout(() => { btn.textContent = 'Envoyer'; }, 4000);
            }
        });
    }

    // ========== COOKIE BANNER ==========
    const cookieBanner = document.getElementById('cookieBanner');
    if (cookieBanner && !localStorage.getItem('cookieConsent')) {
        setTimeout(() => cookieBanner.classList.add('visible'), 1500);

        document.getElementById('cookieAccept')?.addEventListener('click', () => {
            localStorage.setItem('cookieConsent', 'accepted');
            cookieBanner.classList.remove('visible');
        });
        document.getElementById('cookieDecline')?.addEventListener('click', () => {
            localStorage.setItem('cookieConsent', 'declined');
            cookieBanner.classList.remove('visible');
        });
    }

    // ========== EASTER EGG — Open/close game overlay (LAZY LOADED) ==========
    (() => {
        const overlay = document.getElementById('gameOverlay');
        const closeBtn = document.getElementById('gameClose');
        const logo = document.querySelector('.header-logo');
        if (!overlay || !logo) return;

        let gameLoaded = false;

        logo.addEventListener('click', async (e) => {
            e.preventDefault();
            overlay.classList.add('open');
            // Lazy load game.js only on first click
            if (!gameLoaded) {
                gameLoaded = true;
                try { await import('./game/game.js'); }
                catch { gameLoaded = false; }
            }
            window.dispatchEvent(new Event('gameOpen'));
        });
        closeBtn.addEventListener('click', () => {
            overlay.classList.remove('open');
            window.dispatchEvent(new Event('gameClose'));
        });
        document.addEventListener('keydown', (e) => {
            if (e.code === 'Escape' && overlay.classList.contains('open')) {
                overlay.classList.remove('open');
                window.dispatchEvent(new Event('gameClose'));
            }
        });
    })();

    // ========== NEWSLETTER FORM ==========
    (() => {
        const form = document.getElementById('newsletterForm');
        const emailInput = document.getElementById('newsletterEmail');
        const feedback = document.getElementById('newsletterFeedback');
        if (!form || !emailInput || !feedback) return;

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = emailInput.value.trim();
            if (!email) return;

            feedback.textContent = 'Envoi...';
            feedback.style.color = '#999';

            try {
                const res = await fetch('/api/newsletter/subscribe', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, source: 'footer' }),
                });
                const data = await res.json();

                if (data.status === 'already_subscribed') {
                    feedback.textContent = 'Vous êtes déjà inscrit(e) !';
                    feedback.style.color = '#c8ff00';
                } else if (res.ok) {
                    feedback.textContent = 'Merci pour votre inscription !';
                    feedback.style.color = '#c8ff00';
                    emailInput.value = '';
                } else {
                    feedback.textContent = data.error || 'Erreur';
                    feedback.style.color = '#ff4444';
                }
            } catch {
                feedback.textContent = 'Erreur réseau';
                feedback.style.color = '#ff4444';
            }
        });
    })();

});

