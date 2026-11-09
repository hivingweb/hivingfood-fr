#!/usr/bin/env python3
"""Generate SEO talent pages and sitemap for Hiving Food."""

import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DOMAIN = "https://www.hivingfood.fr"

TALENTS = [
    {"name": "Qistoh", "slug": "qistoh", "img": "qistoh.webp", "role": "Chef Cuisinier", "ig": "qistoh", "tt": "qistoh", "ig_f": "669K", "tt_f": "682K", "bio": "Chef cuisinier et créateur de contenus culinaires, Qistoh est l'un des talents food les plus suivis en France. Ses recettes créatives et ses techniques de chef impressionnent des centaines de milliers de followers sur Instagram et TikTok."},
    {"name": "Romeo San Food", "slug": "romeo-san-food", "img": "romeo.webp", "role": "Chef Cuisinier", "ig": "romeosanfood", "tt": "romeosanfood", "ig_f": "438K", "tt_f": "52K", "bio": "Romeo San Food est un chef cuisinier et créateur food reconnu pour ses recettes gourmandes et ses mises en scène soignées. Son contenu allie technique culinaire et storytelling visuel."},
    {"name": "Killian Franceschi", "slug": "killian-franceschi", "img": "killian.webp", "role": "Chef Cuisinier", "ig": "kilianfranceschi", "tt": "kilianfranceschi", "ig_f": "436K", "tt_f": "131K", "bio": "Killian Franceschi est un jeune chef cuisinier qui partage sa passion pour la gastronomie sur les réseaux sociaux. Ses vidéos de recettes et ses conseils culinaires touchent une large audience."},
    {"name": "Vincent Salur", "slug": "vincent-salur", "img": "vincent-salur.webp", "role": "Chef Pâtissier", "ig": "vincentsalur", "tt": "vincentsalur", "ig_f": "409K", "tt_f": "343K", "bio": "Vincent Salur est un chef pâtissier et créateur food qui sublime la pâtisserie sur les réseaux sociaux. Ses créations visuellement spectaculaires et ses tutoriels accessibles en font un talent incontournable."},
    {"name": "Drice Cook", "slug": "drice-cook", "img": "dricecook.webp", "role": "Chef Cuisinier", "ig": "dricecook", "tt": "dricecook", "ig_f": "390K", "tt_f": "1.6M", "bio": "Drice Cook est le créateur food le plus suivi sur TikTok parmi les talents Hiving, avec plus de 1.6 million d'abonnés. Ses recettes rapides et ses formats innovants captent l'attention de millions de viewers."},
    {"name": "Mohamed Patissier", "slug": "mohamed-patissier", "img": "mohamed.webp", "role": "Chef Pâtissier", "ig": "mohamed_patissier", "tt": "mohamed_patissier", "ig_f": "329K", "tt_f": "318K", "bio": "Mohamed Patissier est un chef pâtissier qui partage son art sur les réseaux sociaux. Ses créations pâtissières et ses techniques impressionnantes en font un talent très apprécié des communautés food."},
    {"name": "Chester Foodies", "slug": "chester-foodies", "img": "chester-foodies.webp", "role": "Créateur Cuisine", "ig": "chester_foodies", "tt": "chester_foodies", "ig_f": "271K", "tt_f": "234K", "bio": "Chester Foodies est un créateur culinaire qui explore les saveurs et les tendances food. Ses formats créatifs et son approche authentique séduisent une communauté engagée sur Instagram et TikTok."},
    {"name": "Damien Pichon", "slug": "damien-pichon", "img": "damien.webp", "role": "Chef Pâtissier", "ig": "damienpichon_", "tt": "damienpichon_", "ig_f": "219K", "tt_f": "4K", "bio": "Damien Pichon est un chef pâtissier reconnu pour ses créations raffinées. Son expertise en pâtisserie et son sens du détail font de ses contenus une référence dans l'univers food."},
    {"name": "Julios", "slug": "julios", "img": "julios.webp", "role": "Chef Cuisinier", "ig": "julios.irl", "tt": "julios.irl", "ig_f": "175K", "tt_f": "301K", "bio": "Julios est un chef cuisinier et créateur food dont les recettes et le style unique captent l'attention sur TikTok et Instagram. Son approche décontractée et créative en fait un talent très apprécié."},
    {"name": "Peppe", "slug": "peppe", "img": "peppe.webp", "role": "Pizzaiolo", "ig": "peppeofficiel", "tt": "peppeofficiel", "ig_f": "171K", "tt_f": "39K", "bio": "Peppe est un pizzaiolo passionné qui partage l'art de la pizza italienne sur les réseaux sociaux. Ses techniques authentiques et ses recettes traditionnelles attirent une communauté fidèle."},
    {"name": "Spicy Noemie", "slug": "spicy-noemie", "img": "spicy-noemie.webp", "role": "Créatrice Culinaire", "ig": "spicynoemie", "tt": "spicynoemie", "ig_f": "143K", "tt_f": "53K", "bio": "Spicy Noemie est une créatrice culinaire qui pimente les réseaux sociaux avec ses recettes audacieuses et ses formats originaux. Son énergie et sa créativité en font une voix unique dans l'univers food."},
    {"name": "Julia", "slug": "julia", "img": "julia.webp", "role": "Recettes Gourmandes", "ig": "julia_lmp12", "tt": "julia_lmp12", "ig_f": "103K", "tt_f": "39K", "bio": "Julia est une créatrice food spécialisée dans les recettes gourmandes et accessibles. Ses contenus chaleureux et ses recettes faciles à reproduire séduisent une communauté grandissante."},
    {"name": "Eliot Pastry", "slug": "eliot-pastry", "img": "eliot.webp", "role": "Créateur Pâtissier", "ig": "eliot.pastry", "tt": "eliot.pastry", "ig_f": "97.5K", "tt_f": "48K", "bio": "Eliot Pastry est un créateur pâtissier qui démystifie la pâtisserie sur les réseaux sociaux. Ses tutoriels clairs et ses recettes innovantes en font un talent montant de la scène food."},
    {"name": "Chefologue", "slug": "chefologue", "img": "chefologue.webp", "role": "Chef Cuisinier", "ig": "chefologue", "tt": "chefologue", "ig_f": "71K", "tt_f": "42K", "bio": "Chefologue est un chef cuisinier et créateur food qui partage son savoir-faire culinaire avec authenticité. Ses recettes et ses conseils de chef trouvent un écho auprès d'une communauté passionnée."},
]

TALENT_TEMPLATE = """<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){{w[l]=w[l]||[];w[l].push({{'gtm.start':
    new Date().getTime(),event:'gtm.js'}});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    }})(window,document,'script','dataLayer','GTM-MRNZZVKC');</script>
    <!-- End Google Tag Manager -->
    <!-- GA4 (fallback — also configure via GTM) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-Z8X5C8SD3C"></script>
    <script>window.dataLayer=window.dataLayer||[];function gtag(){{dataLayer.push(arguments);}}gtag('js',new Date());gtag('config','G-Z8X5C8SD3C');</script>
    <!-- Meta Pixel (fallback — also configure via GTM) -->
    <script>!function(f,b,e,v,n,t,s){{if(f.fbq)return;n=f.fbq=function(){{n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)}};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','26995932726660328');fbq('track','PageView');</script>
    <noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=26995932726660328&ev=PageView&noscript=1"/></noscript>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{name} | Influenceur Food France | Hiving Food</title>
    <meta name="description" content="{name}, {role} et influenceur food chez Hiving Food. {ig_f} abonnés Instagram, {tt_f} abonnés TikTok. Découvrez son profil et ses collaborations.">
    <meta name="keywords" content="{name}, influenceur food, {role}, créateur culinaire, {ig_handle} instagram, {tt_handle} tiktok">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="{domain}/talents/{slug}">

    <meta property="og:type" content="profile">
    <meta property="og:title" content="{name} | Influenceur Food | Hiving Food">
    <meta property="og:description" content="{name}, {role} — {ig_f} Insta, {tt_f} TikTok">
    <meta property="og:url" content="{domain}/talents/{slug}">
    <meta property="og:image" content="{domain}/img/talents/{img}">
    <meta property="og:site_name" content="Hiving Food">
    <meta property="og:locale" content="fr_FR">

    <meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="{name} | Influenceur Food | Hiving">
    <meta name="twitter:description" content="{name}, {role} — {ig_f} Insta, {tt_f} TikTok. Influenceur food exclusif Hiving Food.">
    <meta name="twitter:image" content="{domain}/img/talents/{img}">

    <script type="application/ld+json">
    {{
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "{name}",
        "jobTitle": "{role}",
        "url": "{domain}/talents/{slug}",
        "image": "{domain}/img/talents/{img}",
        "worksFor": {{"@type": "Organization", "name": "Hiving Food", "url": "{domain}"}},
        "sameAs": [
            "https://www.instagram.com/{ig_handle}/",
            "https://www.tiktok.com/@{tt_handle}"
        ],
        "knowsAbout": ["Cuisine", "Food Content Creation", "Social Media"]
    }}
    </script>

    <script type="application/ld+json">
    {{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {{"@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.hivingfood.fr/"}},
            {{"@type": "ListItem", "position": 2, "name": "Influenceurs food", "item": "https://www.hivingfood.fr/influenceurs-food"}},
            {{"@type": "ListItem", "position": 3, "name": "{name}", "item": "https://www.hivingfood.fr/talents/{slug}"}}
        ]
    }}
    </script>

    <link rel="icon" type="image/png" href="/favicon.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/style.css">
    <style>
        .seo-page {{ padding: 140px 60px 80px; max-width: 900px; margin: 0 auto; }}
        .seo-page h1 {{ font-size: clamp(2.5rem, 5vw, 3.5rem); font-weight: 900; margin-bottom: 6px; line-height: 1.1; }}
        .seo-page .talent-role {{ font-size: 1rem; text-transform: uppercase; letter-spacing: 0.12em; color: var(--accent); font-weight: 600; margin-bottom: 30px; }}
        .seo-page h2 {{ font-size: 1.4rem; font-weight: 700; margin-top: 50px; margin-bottom: 16px; }}
        .seo-page h2 em {{ color: var(--accent); }}
        .seo-page p {{ font-size: 1rem; color: var(--gray-light); line-height: 1.85; margin-bottom: 16px; }}
        .seo-page a.accent {{ color: var(--accent); text-decoration: underline; text-underline-offset: 3px; }}
        .seo-breadcrumb {{ font-size: 0.85rem; color: var(--gray); margin-bottom: 30px; }}
        .seo-breadcrumb a {{ color: var(--gray-light); text-decoration: none; }}
        .seo-breadcrumb a:hover {{ color: var(--accent); }}
        .talent-hero {{ display: grid; grid-template-columns: 280px 1fr; gap: 40px; align-items: start; margin-bottom: 40px; }}
        .talent-hero img {{ width: 100%; aspect-ratio: 1; object-fit: cover; border-radius: 16px; }}
        .talent-stats {{ display: flex; gap: 30px; margin: 20px 0; }}
        .talent-stats .stat {{ text-align: center; }}
        .talent-stats .stat strong {{ display: block; font-size: 1.8rem; font-weight: 900; color: var(--accent); }}
        .talent-stats .stat span {{ font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--gray); }}
        .talent-socials {{ display: flex; gap: 16px; margin: 20px 0; }}
        .talent-socials a {{ padding: 10px 20px; border: 1px solid rgba(255,255,255,0.15); border-radius: 60px; font-size: 0.9rem; font-weight: 600; color: var(--white); text-decoration: none; transition: border-color 0.3s, color 0.3s; }}
        .talent-socials a:hover {{ border-color: var(--accent); color: var(--accent); }}
        .seo-cta {{ display: inline-block; padding: 16px 40px; background: var(--accent); color: var(--black); font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; border-radius: 60px; text-decoration: none; margin-top: 20px; transition: transform 0.3s, box-shadow 0.3s; }}
        .seo-cta:hover {{ transform: translateY(-2px); box-shadow: 0 8px 30px rgba(200,255,0,0.3); }}
        .other-talents {{ display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 16px; margin: 30px 0; }}
        .other-talent {{ text-align: center; text-decoration: none; color: var(--white); }}
        .other-talent img {{ width: 100%; aspect-ratio: 1; object-fit: cover; border-radius: 12px; margin-bottom: 8px; transition: transform 0.3s; }}
        .other-talent:hover img {{ transform: scale(1.05); }}
        .other-talent span {{ font-size: 0.85rem; font-weight: 600; }}
        @media (max-width: 768px) {{ .seo-page {{ padding: 120px 24px 60px; }} .talent-hero {{ grid-template-columns: 1fr; }} }}
    </style>
</head>
<body>
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MRNZZVKC" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->

    <header class="header" id="header" style="background:rgba(0,0,0,0.95);backdrop-filter:blur(12px)">
        <a href="/" class="header-logo"><img src="/img/logo/food.svg" alt="Hiving Food" class="header-logo-food"></a>
        <nav class="header-nav" id="headerNav">
            <a href="/">Accueil</a>
            <a href="/agence-influence-food">L'agence</a>
            <a href="/influenceurs-food">Talents</a>
            <a href="/studio-food">Studios</a>
            <a href="/campagnes-influence-food">Campagnes</a>
            <a href="/blog">Blog</a>
            <a href="/#contact" class="nav-cta">CONTACT</a>
        </nav>
        <button class="burger" id="burger" aria-label="Menu" aria-expanded="false">
            <span></span><span></span><span></span>
        </button>
    </header>

    <main class="seo-page">
        <nav class="seo-breadcrumb">
            <a href="/">Accueil</a> &rsaquo; <a href="/influenceurs-food">Influenceurs food</a> &rsaquo; {name}
        </nav>

        <div class="talent-hero">
            <img src="/img/talents/{img}" alt="{name} - {role} et influenceur food">
            <div>
                <h1>{name}</h1>
                <div class="talent-role">{role}</div>
                <div class="talent-stats">
                    <div class="stat"><strong>{ig_f}</strong><span>Instagram</span></div>
                    <div class="stat"><strong>{tt_f}</strong><span>TikTok</span></div>
                </div>
                <div class="talent-socials">
                    <a href="https://www.instagram.com/{ig_handle}/" target="_blank" rel="noopener">@{ig_handle}</a>
                    <a href="https://www.tiktok.com/@{tt_handle}" target="_blank" rel="noopener">@{tt_handle}</a>
                </div>
            </div>
        </div>

        <h2>À propos de <em>{name}</em></h2>
        <p>{bio}</p>
        <p>{name} fait partie des talents exclusifs de <a href="/agence-influence-food" class="accent">Hiving Food</a>, la première agence d'influence food en France. Il collabore avec les plus grandes marques alimentaires pour des campagnes d'influence sur TikTok, Instagram et YouTube.</p>

        <h2>Collaborer avec <em>{name}</em></h2>
        <p>Vous souhaitez collaborer avec {name} pour une campagne d'influence food, un placement de produit ou un brand content culinaire ? Contactez notre équipe pour discuter de votre projet.</p>
        <a href="/#contact" class="seo-cta">Nous contacter</a>

        <h2>Découvrez nos autres <em>talents food</em></h2>
        <div class="other-talents">
            {other_talents}
        </div>
        <p><a href="/influenceurs-food" class="accent">Voir tous nos influenceurs food &rarr;</a></p>
    </main>

    <footer class="footer">
        <div class="footer-inner">
            <span class="footer-logo"><img src="/img/logo/hiving-white.png" alt="Hiving" class="footer-logo-img"></span>
            <span class="footer-copy">&copy; <script>document.write(new Date().getFullYear())</script> Hiving Food. Tous droits réservés. &middot; <a href="/mentions-legales.html" style="color:var(--gray-light);text-decoration:underline;text-underline-offset:3px">Mentions légales</a> &middot; <a href="/politique-confidentialite.html" style="color:var(--gray-light);text-decoration:underline;text-underline-offset:3px">Confidentialité</a></span>
        </div>
    </footer>

<script>!function(){{var b=document.getElementById("burger"),n=document.getElementById("headerNav");if(!b||!n)return;b.addEventListener("click",function(){{var o=n.classList.toggle("open");b.classList.toggle("active");b.setAttribute("aria-expanded",o);document.body.style.overflow=o?"hidden":""}});n.querySelectorAll("a").forEach(function(a){{a.addEventListener("click",function(){{n.classList.remove("open");b.classList.remove("active");b.setAttribute("aria-expanded","false");document.body.style.overflow=""}})}})}}()</script>
</body>
</html>"""


def format_followers(count):
    if count >= 1_000_000:
        return f"{count / 1_000_000:.1f}M".replace(".0M", "M")
    if count >= 100_000:
        return f"{round(count / 1000)}K"
    if count >= 10_000:
        return f"{count / 1000:.1f}K".replace(".0K", "K")
    return f"{count / 1000:.1f}K"


def build_talent_pages():
    """Generate one HTML page per talent."""
    for t in TALENTS:
        # Build "other talents" links (exclude self, show up to 6)
        others = [o for o in TALENTS if o["slug"] != t["slug"]][:6]
        other_html = "\n            ".join(
            f'<a href="/talents/{o["slug"]}" class="other-talent">'
            f'<img src="/img/talents/{o["img"]}" alt="{o["name"]}" loading="lazy">'
            f'<span>{o["name"]}</span></a>'
            for o in others
        )

        html = TALENT_TEMPLATE.format(
            name=t["name"],
            slug=t["slug"],
            img=t["img"],
            role=t["role"],
            ig_handle=t["ig"],
            tt_handle=t["tt"],
            ig_f=t["ig_f"],
            tt_f=t["tt_f"],
            bio=t["bio"],
            domain=DOMAIN,
            other_talents=other_html,
        )

        out_dir = os.path.join(BASE_DIR, "talents", t["slug"])
        os.makedirs(out_dir, exist_ok=True)
        with open(os.path.join(out_dir, "index.html"), "w", encoding="utf-8") as f:
            f.write(html)
        print(f"  [OK] talents/{t['slug']}/index.html")


def build_sitemap():
    """Generate sitemap.xml with all pages."""
    pages = [
        ("/", "1.0", "weekly"),
        ("/agence-influence-food", "0.9", "monthly"),
        ("/influenceurs-food", "0.9", "weekly"),
        ("/studio-food", "0.8", "monthly"),
        ("/campagnes-influence-food", "0.7", "monthly"),
        ("/blog", "0.7", "weekly"),
        ("/blog/top-influenceurs-food-france", "0.7", "monthly"),
        ("/blog/marketing-influence-food", "0.7", "monthly"),
    ]
    # Talent pages
    for t in TALENTS:
        pages.append((f"/talents/{t['slug']}", "0.6", "monthly"))
    # Legal
    pages.append(("/mentions-legales.html", "0.2", "yearly"))
    pages.append(("/politique-confidentialite.html", "0.2", "yearly"))

    xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    for path, priority, freq in pages:
        xml += f"    <url>\n"
        xml += f"        <loc>{DOMAIN}{path}</loc>\n"
        xml += f"        <changefreq>{freq}</changefreq>\n"
        xml += f"        <priority>{priority}</priority>\n"
        xml += f"    </url>\n"
    xml += "</urlset>\n"

    with open(os.path.join(BASE_DIR, "sitemap.xml"), "w", encoding="utf-8") as f:
        f.write(xml)
    print(f"  [OK] sitemap.xml ({len(pages)} URLs)")


def build_robots():
    """Generate robots.txt."""
    content = f"""User-agent: *
Allow: /
Disallow: /backend/
Disallow: /api/
Disallow: /game/

Sitemap: {DOMAIN}/sitemap.xml
"""
    with open(os.path.join(BASE_DIR, "robots.txt"), "w", encoding="utf-8") as f:
        f.write(content)
    print("  [OK] robots.txt")


if __name__ == "__main__":
    print("Building SEO pages...")
    build_talent_pages()
    build_sitemap()
    build_robots()
    print("Done!")
