// ─────────────────────────────────────────────────────────────────────
// HIVING FOOD — Enriched data (v2 — gourmand & SEO-ready)
// ─────────────────────────────────────────────────────────────────────

// ── TALENTS — bios, plats signatures, audience, awards
const FOOD_TALENTS = [
  {
    slug: 'drice-cook', photo: '/img/talents/Dricecook%203.jpg', name: 'Drice Cook', firstName: 'Drice',
    role: 'Chef Cuisinier', specialty: 'Cuisine du quotidien · Comfort food',
    handle: '@dricecook', insta: '416K', tiktok: '1.7M', yt: '210K',
    cities: 'Marseille', joined: '2023',
    tagline: "Le copain qui te montre que tu sais cuisiner.",
    bio: "Drice a la voix de votre meilleur pote et la précision d'un chef étoilé. Sa conviction : la cuisine du quotidien, c'est un art à part entière. Quand il poste un poulet rôti, il fait deux millions de vues. Quand il poste une raclette de la flemme, il fait pleurer la France entière.",
    signatures: ['Poulet rôti dimanche', 'Lasagnes du frigo', 'Pâtes 5 min'],
    formats: ['Recettes "frigo vide"', 'Memes cuisine', 'Avis resto'],
    audience: { fr: 86, age: '18-34 (71%)', sex: 'Mixte (51% F / 49% H)' },
    brands: ['Picard', 'Herta', 'Uber Eats'],
    awards: ['TikTok Awards 2024 · Meilleur créateur food FR'],
  },
  {
    slug: 'qistoh', photo: '/img/talents/Qistoh%202.jpg', name: 'Qistoh', firstName: 'Qistoh',
    role: 'Chef Cuisinier', specialty: 'Cuisine du monde · Street food revisitée',
    handle: '@qistoh_', insta: '692K', tiktok: '688K', yt: '124K',
    cities: 'Paris', joined: '2022',
    tagline: "Le globe-trotter du wok parisien.",
    bio: "Qistoh, c'est la cuisine de rue du monde entier dans une seule poêle. De Bangkok à Mexico, de Lagos à Hanoi : chaque vidéo est un voyage olfactif. Sa signature ? Un casting d'épices millimétré et un sens du rythme TikTok inégalable.",
    signatures: ['Bo Bun maison', 'Curry vert thaï', 'Bao bun crispy'],
    formats: ['Recettes 60s', 'Lives "marché"', 'Travel food'],
    audience: { fr: 78, age: '18-34 (62%)', sex: 'Mixte (52% F / 48% H)' },
    brands: ['Metro', 'Tefal', 'Uber Eats'],
    awards: ['Top 50 Food Creators 2025 (TF1)'],
  },
  {
    slug: 'vincent-salur', photo: '/img/talents/Vincent%20Salur%202.jpg', name: 'Vincent Salur', firstName: 'Vincent',
    role: 'Chef Pâtissier', specialty: 'Pâtisserie française · Goûters d\'auteur',
    handle: '@vincentsalur', insta: '482K', tiktok: '458K', yt: '76K',
    cities: 'Paris', joined: '2022',
    tagline: "Le pâtissier qui rend la chantilly désirable.",
    bio: "Vincent rend la pâtisserie française accessible sans la trahir. Pari-Brest, mille-feuille, religieuse : il documente chaque geste avec une lumière qui ferait jalouser un photographe culinaire. Son ASMR de pâte à choux est devenu un genre à lui tout seul.",
    signatures: ['Paris-Brest revisité', 'Tarte au citron meringuée', 'Cookie XXL inside'],
    formats: ['ASMR pâtisserie', 'Recettes signatures', 'Coulisses cuisine'],
    audience: { fr: 72, age: '18-44 (74%)', sex: 'Féminin (67%)' },
    brands: ['Jeff de Bruges', 'Président', 'Feastables'],
    awards: ['Top Chef Pâtisserie · Demi-finaliste 2023'],
  },
    {
    slug: 'killian-franceschi', photo: '/img/talents/Kilian%202.jpg', name: 'Kilian Franceschi', firstName: 'Kilian',
    role: 'Chef Cuisinier', specialty: 'Cuisine française · Bistro moderne',
    handle: '@kilianfranceschi', insta: '427K', tiktok: '136K', yt: '92K',
    cities: 'Lyon', joined: '2022',
    tagline: "La cuisine bistrot, façon prime time.",
    bio: "Formé à L'Auberge du Pont de Collonges, Kilian a quitté la brigade pour ramener le bistrot français sur les feeds. Précision, sauces qui se respectent, et un talent de pédagogue qui rend la blanquette moins intimidante qu'un bowl healthy.",
    signatures: ['Blanquette modernisée', 'Œuf parfait 64°', 'Tartare au couteau'],
    formats: ['Tutos pédago', 'Coulisses chef', 'Battles cuisine'],
    audience: { fr: 81, age: '25-54 (66%)', sex: 'Mixte (44% F / 56% H)' },
    brands: ['Metro', 'Fleury Michon', 'St Moret'],
    awards: ['Lauréat Création Culinaire Bocuse 2023'],
  },
  {
    slug: 'swissfitcook', photo: '/img/talents/Bastien.jpg', name: 'Bastien Horisberger', firstName: 'Bastien',
    role: 'Créateur Food Fit', specialty: 'Recettes fit & gourmandes · Hyperprotéinées',
    handle: '@swiss.fitcook', insta: '402K', tiktok: '261K', yt: '',
    cities: 'Suisse', joined: '2026',
    tagline: "Aussi riches en protéines qu'en bonheur.",
    bio: "Bastien Horisberger transforme les recettes du quotidien en versions fit & gourmandes : hyperprotéinées, faibles en calories, mais sans compromis sur le plaisir. De nouvelles recettes chaque semaine sur Instagram et TikTok, avec une communauté ultra-engagée sur le créneau healthy/sport.",
    signatures: ['Recettes hyperprotéinées', 'Cheat meals fit', 'Snacks low-cal'],
    formats: ['Recettes 60s', 'Cheat meals revisités', 'Macros décodées'],
    audience: { fr: 60, age: '18-34 (66%)', sex: 'Mixte' },
    brands: [],
    awards: [],
    links: { linktree: 'https://linktr.ee/swissfitcook' },
  },
  {
    slug: 'chester-foodies', photo: '/img/talents/Chester%20Foodies%202.jpg', name: 'Chester Foodies', firstName: 'Chester',
    role: 'Créateur Cuisine', specialty: 'Tests resto · Avis food',
    handle: '@chester_foodies', insta: '408K', tiktok: '327K', yt: '88K',
    cities: 'Paris · NYC · Tokyo', joined: '2023',
    tagline: "Le critique food de la génération scrolleuse.",
    bio: "Chester teste tout, partout. Du resto étoilé au kebab du coin, sa note honnête est devenue un repère pour la génération food-curieuse. Quand Chester recommande, les réservations explosent.",
    signatures: ['Resto-tests', 'Top 10 par ville', 'Battles street food'],
    formats: ['Avis resto', 'Travel food', 'Top éditos'],
    audience: { fr: 58, age: '18-34 (76%)', sex: 'Mixte (48% F / 52% H)' },
    brands: ['Uber Eats', 'BMW', 'Metro'],
    awards: ['Webby Award Food 2024'],
  },
    {
    slug: 'julios', photo: '/img/talents/julios.jpg', name: 'Julios', firstName: 'Julios',
    role: 'Chef Cuisinier', specialty: 'Cuisine espagnole · Tapas',
    handle: '@julios.irl', insta: '262K', tiktok: '411K', yt: '42K',
    cities: 'Paris · Madrid', joined: '2024',
    tagline: "Tapas, plancha, et beaucoup d'amour.",
    bio: "Julios, c'est l'Espagne décomplexée. Il cuisine la paella, la tortilla et le pulpo a la gallega comme on cuisine le dimanche en famille : généreusement, sans se prendre au sérieux. Son humour méditerranéen fait des miracles en social.",
    signatures: ['Paella authentique', 'Tortilla parfaite', 'Patatas bravas'],
    formats: ['Recettes en bande', 'Lives plancha', 'Battles tapas'],
    audience: { fr: 71, age: '25-44 (64%)', sex: 'Mixte (47% F / 53% H)' },
    brands: ['Tefal', 'Uber Eats'],
    awards: [],
  },
  {
    slug: 'damien-pichon', photo: '/img/talents/damien.jpeg', name: 'Damien Pichon', firstName: 'Damien',
    role: 'Chef Pâtissier', specialty: 'Pâtisserie minute · Gourmandises',
    handle: '@damienpichon_', insta: '242K', tiktok: '5K', yt: '12K',
    cities: 'Bordeaux', joined: '2023',
    tagline: "La pâtisserie comme respiration quotidienne.",
    bio: "Damien casse le mythe que la pâtisserie demande des heures. Ses recettes minute (cookie en 12 minutes, fondant chocolat en 18) ont une élégance rare et un taux d'engagement parmi les plus hauts de notre roster.",
    signatures: ['Cookie 12 min', 'Fondant minute', 'Brioche express'],
    formats: ['Recettes express', 'Pâtisserie pédago'],
    audience: { fr: 89, age: '18-44 (72%)', sex: 'Féminin (78%)' },
    brands: ['Président', 'Avril'],
    awards: [],
  },
  {
    slug: 'peppe', photo: '/img/talents/peppe%202.jpg', name: 'Peppe', firstName: 'Peppe',
    role: 'Pizzaiolo', specialty: 'Pizza napolitaine authentique',
    handle: '@peppeofficiel', insta: '183K', tiktok: '42K', yt: '22K',
    cities: 'Paris', joined: '2023',
    tagline: "Le pizzaiolo qui a fait plier l'algorithme.",
    bio: "Peppe est le pizzaiolo le plus respecté de Paris. Formé à Naples, il porte les codes de l'AVPN avec rigueur et passion. Sa pâte de 72h fermente à l'écran avec un suspense digne d'une série Netflix.",
    signatures: ['Margherita 72h', 'Marinara classique', 'Diavola fumée'],
    formats: ['Coulisses pizzeria', 'Tutos pâte', 'Lives four'],
    audience: { fr: 77, age: '25-54 (62%)', sex: 'Mixte (45% F / 55% H)' },
    brands: ['Metro', 'Président'],
    awards: ['Champion de France de pizza 2024'],
  },
    {
    slug: 'julia', photo: '/img/talents/julia.jpg', name: 'Julia', firstName: 'Julia',
    role: 'Recettes Gourmandes', specialty: 'Recettes familiales · Comfort food',
    handle: '@julia_lmp12', insta: '133K', tiktok: '49K', yt: '8K',
    cities: 'Lille', joined: '2024',
    tagline: "La cuisine de Mamie, mais en HD.",
    bio: "Julia raconte les recettes de famille comme on raconte des histoires. Son authenticité est son superpower : elle crée des contenus qui touchent les marques et les audiences au cœur. Croissance ×3 en 12 mois.",
    signatures: ['Lasagnes de Mamie', 'Tarte aux pommes du dimanche', 'Hachis parmentier'],
    formats: ['Recettes "souvenirs"', 'Storytelling famille'],
    audience: { fr: 92, age: '25-54 (74%)', sex: 'Féminin (81%)' },
    brands: ['Herta', 'Picard', 'Fleury Michon'],
    awards: [],
  },
  {
    slug: 'chefologue', photo: '/img/talents/Chefologue%203.jpg', name: 'Chefologue', firstName: 'Chefologue',
    role: 'Chef Cuisinier', specialty: 'Cuisine d\'auteur · Gastronomie',
    handle: '@lechefologue', insta: '101K', tiktok: '44K', yt: '18K',
    cities: 'Paris', joined: '2024',
    tagline: "La gastronomie qui ose se montrer.",
    bio: "Chefologue, c'est la gastronomie qui n'a pas peur du social. Cuissons précises, dressages d'étoilés, mais formats accessibles. Idéal pour les marques premium qui cherchent un storytelling chef sérieux mais désirable.",
    signatures: ['Plats étoilés "à la maison"', 'Sauces mères', 'Cuissons pro'],
    formats: ['Tutos haute gastronomie', 'Décodage technique'],
    audience: { fr: 70, age: '25-54 (74%)', sex: 'Mixte (48% F / 52% H)' },
    brands: ['Metro', 'Tefal'],
    awards: [],
  },
  {
    slug: 'flo', photo: '/img/talents/flo.jpg', name: 'Flo', firstName: 'Flo',
    role: 'Créatrice food', specialty: 'Recettes gourmandes · Food lifestyle',
    handle: '@by.floooo', insta: '243K', tiktok: '351K', yt: '',
    cities: 'Paris', joined: '2025',
    tagline: "La gourmandise comme art de vivre.",
    bio: "Flo filme la cuisine comme on tient un journal intime : lumière douce, recettes généreuses et un ton complice qui donne l'impression de cuisiner avec une amie. Un rendez-vous que sa communauté ne manque jamais.",
    signatures: ['Brunchs maison', 'Desserts de saison', 'Recettes cocooning'],
    formats: ['Recettes filmées', 'Vlogs cuisine', 'Formats de saison'],
    audience: { fr: 84, age: '18-34 (68%)', sex: 'Majorité F' },
    brands: [],
    awards: [],
  },
  {
    slug: 'abellini', photo: '/img/talents/abellini.jpg', name: 'Abellini', firstName: 'Abellini',
    role: 'Créateur food', specialty: 'Cuisine généreuse · Recettes accessibles',
    handle: '@abellini__', insta: '134K', tiktok: '164K', yt: '',
    cities: 'Paris', joined: '2025',
    tagline: "La cuisine qui met tout le monde d'accord.",
    bio: "Abellini cuisine comme il parle : vite, bien et avec le sourire. Des recettes accessibles, des assiettes généreuses et une énergie communicative qui donne envie de passer à table.",
    signatures: ['Recettes express', 'Plats à partager', 'Classiques revisités'],
    formats: ['Face caméra', 'Recettes courtes', 'Duos cuisine'],
    audience: { fr: 85, age: '18-34 (72%)', sex: 'Mixte' },
    brands: [],
    awards: [],
  },
  {
    slug: 'dorian-tudeau', photo: '/img/talents/dorian-tudeau.jpg', name: 'Dorian Tudeau', firstName: 'Dorian',
    role: 'Pâtissier', specialty: 'Pâtisserie · Desserts',
    handle: '@lecoindupatissier', insta: '551K', tiktok: '790K', yt: '',
    cities: 'Paris', joined: '2025',
    tagline: "Le coin du pâtissier devenu place publique.",
    bio: "Dorian démocratise la pâtisserie : des gestes précis expliqués simplement et des desserts spectaculaires réalisables à la maison. Son coin du pâtissier est devenu le rendez-vous sucré de centaines de milliers de gourmands.",
    signatures: ['Desserts spectaculaires', 'Gestes de pâtissier', 'Classiques sucrés'],
    formats: ['Tutos pâtisserie', 'Recettes pas à pas', 'Défis sucrés'],
    audience: { fr: 87, age: '18-34 (66%)', sex: 'Mixte' },
    brands: [],
    awards: [],
  },
];

// ── BRANDS
const FOOD_BRANDS = [
  'METRO', 'PRÉSIDENT', 'KORO', 'PICARD', 'FEASTABLES', 'BMW',
  'TEFAL', 'UBER EATS', 'JEFF DE BRUGES', 'FLEURY MICHON',
  'HERTA', 'AVRIL', 'ST MORET', 'JOKER',
];

// ── CAMPAIGNS — enriched
const FOOD_CAMPAIGNS = [
  {
    slug: 'coyote-20-ans', video: '/videos/wall/wall-2.mp4', brand: 'Coyote', sector: 'Tech & navigation',
    title: "Coyote 20 ans : un [gâteau trompe-l'œil] qui a fait [le buzz]",
    excerpt: "Vincent Salur signe un gâteau trompe-l'œil reproduisant le boîtier Coyote Max pour les 20 ans de la marque.",
    plateformes: 'TikTok + Instagram', creators: '1 talent food', durationWeeks: 2,
    year: '2025', featured: false,
    stats: { audience: '1M', interactions: '1,6K', engagement: 'Viral', signature: 'Trompe-l\'œil' },
    challenge: "Faire parler de l'anniversaire de la marque sur les réseaux food/lifestyle, hors target tech historique.",
    approach: "Brief créatif unique avec Vincent Salur : reproduire à l'identique en pâtisserie le boîtier Coyote Max. Tournage studio Hiving, storytelling making-of.",
    result: "1M d'audiences cumulées, contenu cross-shared par les communautés tech et pâtisserie.",
    talents: ['vincent-salur'],
    tone: 'lime',
  },
  {
    slug: 'feastables', video: '/videos/wall/wall-6.mp4', brand: 'Feastables', sector: 'Chocolat',
    title: "Feastables France : un lancement [pop & viral]",
    excerpt: "Lancement français du chocolat MrBeast avec 12 créateurs. Unboxings, recettes pâtissières et défis goût en 6 semaines.",
    plateformes: 'TikTok + YouTube', creators: '12 talents food', durationWeeks: 6,
    year: '2025', featured: true,
    stats: { engagement: '9,2%', impressions: '8,1M', vues: '14,6M', sellout: 'Sold out semaine 2' },
    challenge: "Lancer Feastables sur le marché français avec un buzz massif et structurel.",
    approach: "Casting large mix créateurs food + lifestyle, brief multi-formats (unboxing, recettes, blind tests), seeding influencers le J-7.",
    result: "Sold out sur les 3 hubs France en semaine 2. 14,6M vues cumulées en 6 semaines.",
    talents: ['vincent-salur', 'drice-cook'],
    tone: 'lime',
  },
  {
    slug: 'levis-paris', video: '/videos/wall/wall-7.mp4', brand: 'Levi’s Paris', sector: 'Mode',
    title: "Levi’s × Drice : [une journée habillée] [par la mode] et la food",
    excerpt: "Drice Cook prend le volant d’une journée Levi’s : looks, recettes, lifestyle.",
    plateformes: 'TikTok + Instagram', creators: '1 talent food', durationWeeks: 2,
    year: '2025', featured: false,
    stats: { audience: '1,2M', interactions: '78K', engagement: '6,5%', signature: 'Lifestyle' },
    challenge: "Faire entrer Levi’s dans une journée food crédible, sans forcer le placement.",
    approach: "Concept ‘une journée avec Drice habillé en Levi’s’ : 4 contenus, 1 day-in-the-life vertical.",
    result: "Best-of vu 1,2M fois, +12% trafic Levi’s Paris store finder.",
    talents: ['drice-cook'],
    tone: 'warm',
  },
  {
    slug: 'uber-eats', video: '/videos/wall/wall-4.mp4', brand: 'Uber Eats', sector: 'Food delivery',
    title: "Uber Eats × Vincent : [le lancement] d'un chef [sur la plateforme]",
    excerpt: "Vidéo promotionnelle pour célébrer l'arrivée de Vincent Salur sur Uber Eats : annonce du lancement, mise en avant éditoriale du chef.",
    plateformes: 'YouTube + Instagram', creators: '1 talent food', durationWeeks: 4,
    year: '2025', featured: true,
    stats: { audience: '850K', interactions: '64K', engagement: '7,5%', vues: '+40% chaîne' },
    challenge: "Annoncer l'arrivée d'un chef star sur Uber Eats avec une vidéo qui marque le lancement et donne envie de commander.",
    approach: "Vidéo promotionnelle dédiée au lancement : tournage studio, scénarisation autour de Vincent et de sa carte, mise en avant de l'expérience de commande sur la plateforme.",
    result: "Lancement réussi : large visibilité auprès de la communauté Vincent et des utilisateurs Uber Eats, fort engagement autour de l'annonce.",
    talents: ['vincent-salur'],
    tone: 'lime',
  },
  {
    slug: 'bmw-ix3', video: '/videos/wall/wall-8.mp4', brand: 'BMW', sector: 'Automobile premium',
    title: "BMW iX3 : [moderne, innovante, audacieuse] [avant-gardiste]",
    excerpt: "Brand content premium pour le lancement BMW iX3 : esthétique food x tech, codes éditoriaux haut de gamme.",
    plateformes: 'Instagram + YouTube', creators: '2 talents', durationWeeks: 3,
    year: '2025', featured: false,
    stats: { audience: '2,4M', interactions: '156K', engagement: '6,5%', signature: 'Premium' },
    challenge: "Connecter le luxe automobile au lifestyle food sur des audiences premium.",
    approach: "Direction artistique premium, lumière studio, recettes signature mises en scène.",
    result: "Référence visuelle pour la com BMW France 2026.",
    talents: ['vincent-salur', 'qistoh'],
    tone: 'cream',
  },
  {
    slug: 'tefal', video: '/videos/wall/wall-12.mp4', brand: 'Tefal', sector: 'Électroménager cuisine',
    title: "Tefal : la [poêle culte] revisitée par les chefs",
    excerpt: "Démos cuisine en studio avec 4 chefs sur la nouvelle gamme antiadhésive Ingenio. Reels + YouTube longs.",
    plateformes: 'Instagram Reels + YouTube', creators: '4 talents food', durationWeeks: 5,
    year: '2025', featured: false,
    stats: { engagement: '7,2%', impressions: '1,4M', vues: '2.8M', awareness: '+12%' },
    challenge: "Renouveler le discours produit Tefal en sortant de la pub catalogue.",
    approach: "4 chefs signent 1 recette en studio avec leur poêle Ingenio. Formats Reels + masterclass YouTube 8min.",
    result: "+12 pts d'awareness sur la cible 25-44. CPM divisé par 2 vs benchmark.",
    talents: ['killian-franceschi', 'julios', 'chefologue'],
    tone: 'warm',
  },
  {
    slug: 'galeries-lafayette', video: '/videos/wall/wall-11.mp4', brand: 'Galeries Lafayette', sector: 'Retail premium',
    title: "Galeries Lafayette × Vincent : [Le Gourmet] [signature]",
    excerpt: "Vincent Salur signe son arrivée aux Galeries Lafayette Le Gourmet avec un contenu sur-mesure.",
    plateformes: 'Instagram + TikTok', creators: '1 talent food', durationWeeks: 1,
    year: '2024', featured: false,
    stats: { audience: '480K', interactions: '38K', engagement: '7,9%', signature: 'Brand affinity' },
    challenge: "Activer un partenariat retail premium pour le 4 décembre, journée VIP.",
    approach: "Vidéo signature courte, lumière naturelle, mise en scène produits Galeries Lafayette.",
    result: "Trafic Le Gourmet boosté la semaine de l’activation, contenu réutilisé en in-store.",
    talents: ['vincent-salur'],
    tone: 'warm',
  },
  {
    slug: 'metro', video: '/videos/wall/metro.mp4', brand: 'Metro France', sector: 'Distribution alimentaire B2B',
    title: "Metro x Hiving : l'[influence food] au service des [pros de la restauration]",
    excerpt: "Casting de 4 chefs créateurs pour évangéliser les produits Metro auprès des restaurateurs. Format vertical court + lives marché.",
    plateformes: 'TikTok + Instagram Reels', creators: '4 talents food', durationWeeks: 8,
    year: '2024', featured: true,
    stats: { engagement: '7,8%', impressions: '3,2M', interactions: '245K', traficWeb: '+38%' },
    challenge: "Metro voulait sortir d'un discours catalogue B2B et incarner la plateforme côté \"main du chef\".",
    approach: "Casting de 4 chefs au profil restaurateur+créateur, 12 contenus tournés en studio Hiving, fenêtre de publication coordonnée sur 6 semaines.",
    result: "Engagement moyen 7,8% (vs 2,4% benchmark catégorie). Trafic site Metro Pro +38% sur la période. Coût par vue divisé par 3 vs paid traditionnel.",
    talents: ['killian-franceschi', 'qistoh', 'chefologue', 'peppe'],
    tone: 'lime',
  },
  {
    slug: 'picard', video: '/videos/picard/picard-1.mp4',
    videos: ['/videos/picard/picard-1.mp4', '/videos/picard/picard-2.mp4', '/videos/picard/picard-3.mp4', '/videos/picard/picard-4.mp4', '/videos/picard/picard-5.mp4', '/videos/picard/picard-6.mp4', '/videos/picard/picard-7.mp4', '/videos/picard/picard-8.mp4', '/videos/picard/picard-9.mp4', '/videos/picard/picard-10.mp4', '/videos/picard/picard-11.mp4', '/videos/picard/picard-12.mp4', '/videos/picard/picard-13.mp4', '/videos/picard/picard-14.mp4', '/videos/picard/picard-15.mp4'],
    brand: 'Picard', sector: 'Surgelés premium',
    title: "Picard : quand le [surgelé premium] devient [viral]",
    excerpt: "15 contenus signés par les talents Hiving sur 6 mois : Noël, brunch, apéro, vegan, Airfryer. Toute l'année autour de Picard.",
    plateformes: 'TikTok + Instagram', creators: '6 talents food', durationWeeks: 26,
    year: '2024-2025', featured: true,
    stats: { engagement: '7,9%', impressions: '7,3M', interactions: '580K', ventesPremium: '+41%' },
    challenge: "Repositionner Picard comme une marque de cuisine désirable, hors du tunnel transactionnel surgelé.",
    approach: "Calendrier éditorial 6 mois : 15 contenus thématiques (Noël, brunch, apéro, vegan, Airfryer, dessert). Format vertical, blind tests, recettes signature, transformations créatives.",
    result: "7,3M impressions, 580K interactions, 7,9% engagement moyen, et +41% sur les ventes des produits premium ciblés sur la période.",
    talents: ['drice-cook', 'peppe', 'julios', 'qistoh'],
    tone: 'lime',
  },
];

// ── EXPERTISES
const FOOD_EXPERTISES = [
  { num: '01', title: 'Production [Stage]', desc: '3 studios équipés, tournage et post-production en interne', href: 'studios.html' },
  { num: '02', title: 'Talent [Management]', desc: 'Talents exclusifs, casting sur mesure et suivi de campagnes', href: 'talents.html' },
  { num: '03', title: 'Content [Création]', desc: 'UGC, Reels, TikTok, YouTube, recettes et lives', href: 'campagnes.html' },
  { num: '04', title: 'Stratégie [d\'influence]', desc: 'Conseil, activation marque et pilotage de campagnes food', href: 'agence.html' },
];

// ── PROCESS
const FOOD_PROCESS = [
  { num: '01', step: 'Brief',      time: 'J+0',  desc: "On analyse votre marque, vos objectifs, votre cible. On définit l'angle créatif, le format et les talents les plus pertinents." },
  { num: '02', step: 'Casting',    time: 'J+5',  desc: "Short-list de chefs et créateurs qui incarnent votre univers culinaire. Authenticité, audience et engagement avant tout." },
  { num: '03', step: 'Production', time: 'J+15', desc: "Tournage dans nos studios à Clichy, direction artistique, montage et post-production. Toute la chaîne en interne, zéro friction." },
  { num: '04', step: 'Diffusion',  time: 'Live',  desc: "Publication coordonnée TikTok / Instagram / YouTube. Activation paid si besoin. Reporting de campagne avec lecture business." },
];

// ── WHY HIVING
const FOOD_WHY = [
  { icon: '★', title: 'On maîtrise toute la chaîne',     desc: "Talents, studios, production, diffusion. Du brief à la publication, tout est géré en interne. Aucun intermédiaire, aucune friction." },
  { icon: '⏱', title: 'Studios prêts à tourner',          desc: "3 plateaux équipés à Clichy, disponibles 7j/7. Éclairage, électroménager pro, régie : vous arrivez, on tourne." },
  { icon: '▶', title: 'Des contenus qui convertissent',   desc: "UGC, Reels, TikTok, YouTube, recettes, lives. Des contenus qui donnent faim et qui performent. ROI mesurable." },
  { icon: '▲', title: '100% Food. Rien d\'autre.',        desc: "On ne fait que de la food. Cette spécialisation fait notre force : on connaît les codes, les tendances, les audiences." },
  { icon: '◆', title: 'Talents exclusifs',             desc: "Chefs, pâtissiers, food creators. Un roster unique de créateurs culinaires avec des millions d'abonnés engagés." },
  { icon: '●', title: '+100M de vues générées',           desc: "Des résultats concrets et mesurables. On ne promet pas, on livre. Reporting détaillé sur chaque campagne." },
];

// ── FAQ
const FOOD_FAQ = [
  { q: "Combien coûte une campagne d'influence food ?", a: "Chaque campagne est chiffrée sur mesure : ça dépend du nombre de créateurs, du format (Reel, TikTok, YouTube, UGC, brand content), de la fenêtre paid et de la complexité de production. Briefez-nous sur vos objectifs et votre périmètre, on vous revient avec un devis précis." },
  { q: "Quels créateurs sont en exclusivité chez Hiving Food ?", a: "nos créateurs sont accompagnés en exclusivité : Drice Cook, Qistoh, Vincent Salur, Kilian Franceschi, Bastien Horisberger (Swissfitcook), Chester Foodies, Julios, Damien Pichon, Peppe, Julia, Chefologue, Flo, Abellini et Dorian Tudeau. Voir la page Talents pour le roster complet." },
  { q: "En combien de temps livrez-vous une campagne ?", a: "Le délai dépend du brief : casting des créateurs, complexité de production, exclusivités sectorielles à valider. On vous donne une roadmap précise après le premier échange, et on tient les délais." },
  { q: "Travaillez-vous avec des marques hors France ?", a: "Oui. Nous accompagnons des marques internationales sur leur lancement français (ex : Feastables) ou européen. Nos studios sont à Paris/Clichy, mais nos campagnes peuvent être tournées partout en Europe." },
  { q: "Quels types de contenus produisez-vous ?", a: "TikTok, Instagram Reels, YouTube Shorts, brand content long format, recettes filmées, UGC (User Generated Content), publicités vidéo et photos culinaires. On maîtrise la production de bout en bout, du brief créatif à la publication, dans nos studios à Clichy." },
  { q: "Comment mesurez-vous les performances ?", a: "Reporting de campagne avec engagement organique, vues, reach, CPM, CPV, sentiment audience et, quand le client en a la mesure, impact ventes ou conversion site. On lit toujours le business derrière la metric." },
  { q: "Peut-on louer un studio sans faire appel à vos talents ?", a: "Oui. Nos 3 studios à Clichy sont ouverts à toutes les marques, agences, photographes, vidéastes et créateurs indépendants. Tarifs à la journée : Studio Lifestyle 450 €, Studio Pro 800 €, Studio Famille 1 000 €. Réservation à contact@hivingfood.fr." },
  { q: "Pourquoi choisir Hiving Food plutôt qu'une agence d'influence généraliste ?", a: "Parce qu'on ne fait que de la food. Nos chefs sont nos talents. Nos studios sont conçus pour la cuisine. Notre équipe vit dans la cuisine. Une agence généraliste connaît l'influence ; nous, on connaît la cuisine ET l'influence." },
];

// ── PRICING (new)
const FOOD_PRICING = [
  {
    slug: 'test', name: 'Test & learn', from: 'Sur devis', tag: 'Format compact',
    desc: "Un créateur, quelques contenus, une plateforme. Idéal pour tester le format influence food sur votre marque.",
    features: [
      'Créateur food sélectionné sur mesure',
      'Tournage possible en studio Hiving',
      'Direction artistique alignée',
      'Reporting de campagne',
    ],
    cta: 'Démarrer un test',
  },
  {
    slug: 'campagne', name: 'Campagne signature', from: 'Sur devis', tag: 'Le plus choisi',
    featured: true,
    desc: "Campagne multi-créateurs avec production studio. Format média sur mesure selon les objectifs marque.",
    features: [
      'Plusieurs créateurs food du roster',
      'Production studio Hiving',
      'Direction artistique + storyboard',
      'Activation paid post-publication possible',
      'Reporting de campagne complet',
    ],
    cta: 'Construire ma campagne',
  },
  {
    slug: 'lancement', name: 'Lancement 360°', from: 'Sur devis', tag: 'Multi-formats',
    desc: "Lancement de produit ou campagne 360°. Multi-formats, événementiel, paid. Sur mesure intégral.",
    features: [
      'Roster sur mesure',
      'Multi-formats (vidéo, photo, événement)',
      'Production studio + extérieurs',
      'Live cooking ou pop-up brandé en option',
      'Plan paid international possible',
      'Reporting et lecture business',
    ],
    cta: 'Briefer un lancement',
  },
];

// ── ARTICLES — full content
const FOOD_ARTICLES = [
  {
    slug: 'guide-marketing-influence-food-2026',
    cat: 'STRATÉGIE',
    title: "Guide du Marketing d'Influence Food en 2026",
    excerpt: "Comment réussir votre campagne d'influence culinaire : stratégie, choix des créateurs, formats, budget et KPIs. Le guide de référence en 15 minutes.",
    date: '12 mars 2026', readTime: '15 min', featured: true,
    author: 'Mathieu · CEO Hiving Food',
    sections: [
      { h: "Pourquoi l'influence food a tout changé en 2026", p: "Le food a basculé. Là où il reposait sur quelques figures macro, il s'est recomposé autour de créateurs spécialisés (chefs, pâtissiers, food storytellers) qui produisent des contenus mieux que la plupart des agences créa traditionnelles. C'est un changement structurel : la marque qui veut performer en food doit jouer sur ce terrain-là." },
      { h: "Les 3 leviers à activer", p: "D'abord, le casting. Pas le créateur le plus gros, mais celui dont la cuisine ressemble à votre produit. Ensuite, le format : recettes filmées, UGC, lives : chacun a sa logique de performance. Enfin, la diffusion : trop de marques sous-investissent dans le paid post-publication, alors que c'est là que le ROI se débloque." },
      { h: "Les KPIs qui comptent vraiment", p: "Oubliez les vues brutes. Regardez l'engagement organique (un Reel food sous les 5% est suspect), la qualité des commentaires (\"où on l'achète ?\" vaut 100 ❤️), le CPV paid, et l'uplift store quand vous l'avez. Le vrai succès se mesure sur 90 jours, pas sur le J+1." },
      { h: "Combien ça coûte ?", p: "Le coût d'une campagne food dépend du nombre de créateurs, des formats demandés, de la fenêtre paid et de la complexité de production. Plutôt que des fourchettes génériques, on chiffre chaque brief individuellement : c'est la seule manière d'être honnête avec le client." },
    ],
  },
  {
    slug: 'tarifs-campagne-influence-food-2026',
    cat: 'TARIFS',
    title: "Tarifs d'une campagne d'influence food en 2026",
    excerpt: "Grille tarifaire détaillée par taille de créateur, format et plateforme. Du nano à la celebrity, ROI attendu et conseils de négociation.",
    date: '02 avril 2026', readTime: '10 min',
    author: 'Léa · Head of Talents',
    sections: [
      { h: "Combien coûte un créateur food ?", p: "Le tarif d'un créateur food en France oscille entre 800 € (nano <50K) et 25 000 € (top tier 500K+) pour un Reel + TikTok cross-postés. Les tarifs UGC sans diffusion organique commencent à 400 € le contenu." },
      { h: "Ce qui fait varier le prix", p: "L'exclusivité demandée, la fenêtre de droits paid, le format (live coûte 1.5x), la complexité de production (recette signature vs. unboxing), et le calendrier (Q4 +20%)." },
      { h: "Le bon ratio entre creator fee et production", p: "Sur un budget de 50 000 €, on recommande 60% en rémunération créateur et 40% en production studio + post-prod + paid. Si vous avez moins de 30 000 €, concentrez-vous sur 2 créateurs très ciblés plutôt que sur 5 dilués." },
    ],
  },
  {
    slug: 'top-10-tendances-marketing-food-2026',
    cat: 'TENDANCES',
    title: "Top 10 tendances du marketing food en 2026",
    excerpt: "IA générative, nano-influenceurs, shoppable video, sustainability, live cooking : les 10 leviers food à activer cette année.",
    date: '08 avril 2026', readTime: '12 min',
    author: 'Camille · Strategy Director',
    sections: [
      { h: "1. Le retour du long format", p: "YouTube reprend du terrain. Les recettes 8-12 minutes performent à nouveau, en particulier pour les marques premium qui veulent du storytelling profond." },
      { h: "2. Le nano-créateur de niche", p: "Mieux vaut 5 nano-créateurs ciblés (sans gluten, low carb, vegan, etc.) qu'un macro généraliste. ROI souvent 2-3x supérieur." },
      { h: "3. Live cooking comme rendez-vous brand", p: "Les marques food montent leurs propres rendez-vous lives mensuels avec un chef Hiving. Communauté + ventes attribuables." },
    ],
  },
  {
    slug: 'brief-campagne-influence-food-template',
    cat: 'GUIDE',
    title: "Brief campagne influence food : modèle 2026",
    excerpt: "Le modèle de brief utilisé par Hiving Food avec METRO, Président et Picard. 13 sections clés et checklist finale.",
    date: '15 avril 2026', readTime: '15 min',
    author: 'Mathieu · CEO Hiving Food',
    sections: [
      { h: "Les 13 sections du brief parfait", p: "Contexte marque, audience cible, objectif business mesurable, KPIs, casting souhaité, format, plateforme, contraintes légales, ton de marque, exemples à éviter, calendrier, budget, livrables." },
    ],
  },
  {
    slug: 'comment-choisir-agence-influence-food',
    cat: 'GUIDE',
    title: "Comment choisir son agence d'influence food",
    excerpt: "Les critères essentiels pour sélectionner la bonne agence et maximiser le ROI de vos campagnes culinaires.",
    date: '20 avril 2026', readTime: '10 min',
    author: 'Mathieu · CEO Hiving Food',
    sections: [
      { h: "Spécialiste vs. généraliste", p: "Une agence d'influence généraliste connaît les outils. Une agence food connaît les produits. Sur des sujets aussi sensibles que la cuisson, le pack ou le packaging, la spécialisation paie." },
      { h: "Studios in-house ou pas", p: "Une agence food sans studio dépend des créateurs (chez eux, lumière approximative) ou loue (cher, contrainte). Avoir des studios en propre = qualité garantie + délais courts." },
    ],
  },
  {
    slug: 'influenceur-food-tiktok-2026',
    cat: 'TENDANCES',
    title: "Influenceur food TikTok : tendances 2026",
    excerpt: "Les formats, trends et créateurs qui dominent TikTok food cette année. Ce qui marche vraiment en influence culinaire.",
    date: '25 mars 2026', readTime: '7 min',
    author: 'Léa · Head of Talents',
    sections: [
      { h: "Les formats qui performent", p: "Le tuto 60s + voix off reste le format le plus rentable en CPV. Le \"frigo de la semaine\" explose. Le live cooking devient un rendez-vous." },
    ],
  },
  {
    slug: 'location-studio-cuisine-paris',
    cat: 'STUDIOS',
    title: "Location studio cuisine Paris : le guide complet",
    excerpt: "Tout ce qu'il faut savoir pour louer un studio cuisine professionnel en région parisienne : prix, équipements, conseils.",
    date: '02 mars 2026', readTime: '8 min',
    author: 'Thomas · Head of Production',
    sections: [
      { h: "Combien coûte un studio cuisine à Paris ?", p: "Entre 50 € et 150 € de l'heure selon les équipements. Une journée complète : 500 à 1 500 €. Vérifiez ce qui est inclus (lumière, électroménager, vaisselle)." },
    ],
  },
];

// ── FORMATS
const FOOD_FORMATS = [
  { name: 'Placement de produit', desc: "Intégration naturelle de vos produits dans les contenus de nos créateurs. Recettes, dégustations, unboxings culinaires.", tags: ['Recettes', 'Dégustations', 'Unboxing'] },
  { name: 'Brand [Content]',      desc: "Contenus longs ou courts produits pour vos marques : storytelling, vidéos signature, séries éditoriales premium.", tags: ['Storytelling', 'Série éditoriale', 'Vidéo signature'] },
  { name: 'UGC [authentique]',    desc: "User Generated Content briefé et produit en studio. Visuels & vidéos prêts à activer en social ads.", tags: ['Reels', 'Tiktoks', 'Social ads'] },
  { name: 'Recettes [filmées]',   desc: "Recettes signature filmées en studio par nos chefs, avec votre produit en héros. Format vertical et 16/9.", tags: ['Vertical', 'Horizontal', 'Premium'] },
  { name: 'Live cooking',         desc: "Lives Instagram & TikTok avec un chef Hiving. Démonstrations en direct, Q&A et engagement maximal.", tags: ['Instagram Live', 'TikTok Live', 'Q&A'] },
  { name: 'Spot TV / pré-roll',   desc: "Production complète : casting, tournage, montage, sound design. Format pub diffusable TV & digital.", tags: ['TV', 'YouTube', 'Pre-roll'] },
];

// ── EVENTS — concrete cases
const FOOD_EVENTS = [
  { brand: 'Président', title: "Pop-up fromager · Le Marais", date: 'Sept 2025', desc: "Un pop-up de 4 jours dans le Marais avec dégustations, masterclass live et photo wall. 3 200 visiteurs, une couverture par 47 médias.", tone: 'paper' },
  { brand: 'Feastables', title: "Soirée de lancement · Paris", date: 'Juin 2025', desc: "Soirée VIP de lancement avec 300 invités, sculpture chocolat live et activation TikTok in situ. 2,4M vues UGC.", tone: 'lime' },
  { brand: 'Tefal', title: "Brunch chefs · Showroom Champs", date: 'Mars 2025', desc: "Brunch presse avec 4 chefs Hiving en démo simultanée. 80 journalistes, 14 retombées print, 60 retombées digitales.", tone: 'cream' },
  { brand: 'Metro', title: "Food truck tournée · 5 villes", date: 'Été 2024', desc: "Food truck Metro brandé avec 2 chefs Hiving en tournée 5 villes France. Activation BtoB ciblée pros restauration.", tone: 'warm' },
];

// ── EVENT SERVICES
const FOOD_EVENT_SERVICES = [
  { title: 'Pop-up & expériences',     desc: "Pop-ups food brandés, dégustations, dîners signature. On conçoit l'expérience et on la produit clé en main.", tag: 'Brand experience', icon: '◉' },
  { title: 'Pâtisseries signatures',   desc: "Création de pâtisseries sur-mesure aux couleurs de votre marque. Idéal lancements produit & événements presse.", tag: 'Custom pastries', icon: '✦' },
  { title: 'Traiteur premium',         desc: "Buffets et cocktails dînatoires curatés par nos chefs. De 30 à 800 invités, à Paris ou ailleurs.", tag: 'Premium catering', icon: '✶' },
  { title: 'Food trucks brandés',      desc: "Camions cuisine entièrement habillés à votre identité, déployables sur événements et activations terrain.", tag: 'Event activation', icon: '▲' },
  { title: 'Live cooking shows',       desc: "Démonstrations en live avec un chef Hiving sur scène. Engagement maximal, contenu social bonus.", tag: 'Live cooking', icon: '●' },
  { title: 'Masterclass corporate',    desc: "Ateliers cuisine pour vos équipes ou clients VIP. Animation par un chef, kit à emporter, format hybride possible.", tag: 'B2B', icon: '◆' },
];

// ── TEAM
const FOOD_TEAM = [
  { name: 'Mathieu', role: 'Cofondateur · CEO', tone: 'cream',
    bio: "Ex-stratégie chez Publicis Conseil. Mathieu a fondé Hiving en 2022 après 8 ans à voir des marques food rater leur passage au social. Il pilote la stratégie globale et les comptes flagship." },
  { name: 'Léa', role: 'Cofondatrice · Head of Talents', tone: 'warm',
    bio: "Ancienne booker en agence créa, Léa connaît chaque créateur food français comme sa famille. Elle dirige le pôle talents et s'assure que chaque casting soit chirurgical." },
  { name: 'Thomas', role: 'Head of Production', tone: 'paper',
    bio: "Réalisateur passé par Konbini Food. Thomas dirige nos studios à Clichy et chapeaute toute la production : du brief au montage final." },
  { name: 'Camille', role: 'Strategy Director', tone: 'lime',
    bio: "Stratège data-first ex-Wavemaker. Camille construit les frameworks de mesure de chaque campagne et lit le business derrière chaque KPI." },
];

// ── STUDIOS (kept for studios redirect if needed)
const FOOD_STUDIOS = [];

Object.assign(window, {
  FOOD_TALENTS, FOOD_BRANDS, FOOD_CAMPAIGNS, FOOD_EXPERTISES,
  FOOD_PROCESS, FOOD_WHY, FOOD_FAQ, FOOD_PRICING, FOOD_ARTICLES,
  FOOD_FORMATS, FOOD_EVENTS, FOOD_EVENT_SERVICES, FOOD_TEAM, FOOD_STUDIOS,
});


// ── Stats live : vrais abonnés depuis Supabase (même base que hiving.me, lecture seule) ──
window.FOOD_STATS_READY = (function () {
  var MAP = { 'flo': 'eco-16', 'abellini': 'eco-17', 'julios': 'eco-18', 'chefologue': 'eco-19', 'julia': 'eco-20', 'drice-cook': 'eco-22', 'swissfitcook': 'eco-23', 'chester-foodies': 'eco-24', 'vincent-salur': 'eco-26', 'damien-pichon': 'eco-27', 'peppe': 'eco-30', 'qistoh': 'eco-31', 'dorian-tudeau': 'eco-32', 'killian-franceschi': 'eco-33' };
  function fmt(n) { n = +n; if (!n) return null; if (n >= 1e6) { return (n / 1e6).toFixed(1).replace(/\.0$/, '') + 'M'; } return Math.round(n / 1000) + 'K'; }
  var t0 = setTimeout(function () {}, 0);
  return fetch('https://pmrqrbjxikljlarhkseu.supabase.co/rest/v1/influencers?select=eco_id,current_metrics(platform,followers)', { headers: { apikey: 'sb_publishable_j_kHa-caXfSxkSyeGd-veA_ZdUvNCw8' } })
    .then(function (r) { return r.ok ? r.json() : Promise.reject(r.status); })
    .then(function (rows) {
      var byEco = {};
      rows.forEach(function (row) { var o = {}; (row.current_metrics || []).forEach(function (c) { o[c.platform] = c.followers; }); byEco[row.eco_id] = o; });
      (window.FOOD_TALENTS || []).forEach(function (t) {
        var m = byEco[MAP[t.slug]]; if (!m) return;
        var ig = fmt(m.instagram), tt = fmt(m.tiktok);
        if (ig) t.insta = ig;
        if (tt) t.tiktok = tt;
      });
    })
    .catch(function () { /* indisponible : les chiffres statiques restent affichés */ });
})();


// ── LazyVid : vidéo à chargement différé (ne télécharge qu'à l'approche du viewport) ──
window.LazyVid = function LazyVid(props) {
  var ref = React.useRef(null);
  React.useEffect(function () {
    var v = ref.current;
    if (!v) return;
    if (!('IntersectionObserver' in window)) { v.setAttribute('src', props.src); return; }
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) {
          if (!v.getAttribute('src')) v.setAttribute('src', props.src);
          var p = v.play(); if (p && p.catch) p.catch(function () {});
        } else { v.pause(); }
      });
    }, { rootMargin: '320px' });
    io.observe(v);
    // filet de sécurité : si l'observer ne se déclenche pas (navigateurs exotiques),
    // on charge quand même les vidéos proches du viewport, sans dépendre du rendu
    function near() {
      if (v.getAttribute('src')) return true;
      var r = v.getBoundingClientRect();
      if (r.top < window.innerHeight * 2 && r.bottom > -window.innerHeight) {
        v.setAttribute('src', props.src);
        var p2 = v.play(); if (p2 && p2.catch) p2.catch(function () {});
        return true;
      }
      return false;
    }
    var tries = 0;
    var iv = setInterval(function () { tries++; if (near() || tries > 25) clearInterval(iv); }, 1200);
    var onScroll = function () { if (near()) window.removeEventListener('scroll', onScroll); };
    window.addEventListener('scroll', onScroll, { passive: true });
    return function () { io.disconnect(); clearInterval(iv); window.removeEventListener('scroll', onScroll); };
  }, []);
  var rest = {}; for (var k in props) if (k !== 'src') rest[k] = props[k];
  var base = { ref: ref, preload: 'none', muted: true, loop: true, playsInline: true };
  for (var k2 in rest) base[k2] = rest[k2];
  return React.createElement('video', base);
};
