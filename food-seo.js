// ─────────────────────────────────────────────────────────────────────
// HIVING FOOD — SEO helpers
// Inject meta, OG, JSON-LD per page. Call seoApply({...}) on init.
// ─────────────────────────────────────────────────────────────────────

const SEO_SITE = {
  name: 'Hiving Food',
  url: 'https://hivingfood.fr',
  logo: 'https://hivingfood.fr/assets/hiving-full-black.svg',
  ogImage: 'https://hivingfood.fr/assets/og-default.jpg',
  twitter: '@hivingfood',
  desc: "Première agence d'influence food en France. des créateurs exclusifs, 2 studios cuisine pro à Clichy. Stratégie, production et diffusion food de bout en bout.",
};

function _setMeta(name, content, attr = 'name') {
  if (!content) return;
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function _setLink(rel, href) {
  if (!href) return;
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function _injectJSONLD(id, obj) {
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement('script');
    el.type = 'application/ld+json';
    el.id = id;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(obj);
}

window.seoApply = function seoApply({
  title, desc, path = '', ogImage, type = 'website',
  jsonld = [], breadcrumbs = [],
}) {
  const fullTitle = title ? `${title} — ${SEO_SITE.name}` : SEO_SITE.name;
  const url = SEO_SITE.url + (path.startsWith('/') ? path : '/' + path);
  const description = desc || SEO_SITE.desc;
  const image = ogImage || SEO_SITE.ogImage;

  document.title = fullTitle;
  _setMeta('description', description);
  _setLink('canonical', url);

  // Open Graph
  _setMeta('og:title', fullTitle, 'property');
  _setMeta('og:description', description, 'property');
  _setMeta('og:url', url, 'property');
  _setMeta('og:type', type, 'property');
  _setMeta('og:image', image, 'property');
  _setMeta('og:site_name', SEO_SITE.name, 'property');
  _setMeta('og:locale', 'fr_FR', 'property');

  // Twitter
  _setMeta('twitter:card', 'summary_large_image');
  _setMeta('twitter:title', fullTitle);
  _setMeta('twitter:description', description);
  _setMeta('twitter:image', image);
  _setMeta('twitter:site', SEO_SITE.twitter);

  // Robots / lang
  _setMeta('robots', 'index, follow, max-image-preview:large');
  document.documentElement.setAttribute('lang', 'fr');

  // Default Organization JSON-LD on every page
  _injectJSONLD('ld-org', {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SEO_SITE.name,
    url: SEO_SITE.url,
    logo: SEO_SITE.logo,
    description: SEO_SITE.desc,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '4 Rue Mozart',
      postalCode: '92110',
      addressLocality: 'Clichy',
      addressCountry: 'FR',
    },
    sameAs: [
      'https://instagram.com/hivingfood',
      'https://tiktok.com/@hivingfood',
      'https://linkedin.com/company/hiving-food',
    ],
  });

  // Breadcrumbs JSON-LD
  if (breadcrumbs.length) {
    _injectJSONLD('ld-bc', {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((b, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: b.name,
        item: b.url ? SEO_SITE.url + b.url : undefined,
      })),
    });
  }

  // Per-page JSON-LDs
  jsonld.forEach((j, i) => _injectJSONLD('ld-extra-' + i, j));
};

// Helpers for common JSON-LDs
window.seoArticleJsonld = function ({ title, desc, date, author, slug, image }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: desc,
    datePublished: date,
    author: { '@type': 'Person', name: author || 'Hiving Food' },
    publisher: { '@type': 'Organization', name: SEO_SITE.name, logo: { '@type': 'ImageObject', url: SEO_SITE.logo } },
    mainEntityOfPage: SEO_SITE.url + '/article.html?slug=' + slug,
    image: image || SEO_SITE.ogImage,
  };
};

window.seoFaqJsonld = function (items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(it => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  };
};

window.seoPersonJsonld = function (t) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: t.name,
    jobTitle: t.role,
    description: t.bio,
    worksFor: { '@type': 'Organization', name: SEO_SITE.name },
    sameAs: ['https://instagram.com/' + t.handle.replace('@', '')],
  };
};
