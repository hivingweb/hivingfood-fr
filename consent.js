/*
 * Hiving Food — bannière de consentement cookies (maison, sans outil tiers).
 *
 * - Google Consent Mode v2 : tout est refusé par défaut.
 * - Google Tag Manager, GA4 et le pixel Meta ne sont chargés qu'après accord.
 * - Choix mémorisé 6 mois (localStorage, avec repli sur un cookie premier parti).
 * - Rouvrir la bannière : tout élément portant l'attribut data-hf-consent-open
 *   (lien « Gérer mes cookies » du pied de page) ou window.hfConsent.open().
 *
 * À charger tout en haut du <head>, avant tout autre script.
 */
(function () {
  'use strict';

  var GTM_ID = 'GTM-MRNZZVKC';
  var GA4_ID = 'G-Z8X5C8SD3C';
  var META_PIXEL_ID = '26995932726660328';
  var STORAGE_KEY = 'hf_consent';
  var VERSION = 1;
  var MAX_AGE_MS = 183 * 24 * 60 * 60 * 1000; // environ 6 mois
  var PRIVACY_URL = '/politique-confidentialite.html';

  // ---- Consent Mode v2 : valeurs par défaut, avant tout chargement Google ----
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  window.gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    wait_for_update: 500
  });

  // ---- Mémorisation du choix ----
  function readChoice() {
    var raw = null;
    try { raw = window.localStorage.getItem(STORAGE_KEY); } catch (e) { raw = null; }
    if (!raw) {
      var m = document.cookie.match(new RegExp('(?:^|; )' + STORAGE_KEY + '=([^;]*)'));
      if (m) { try { raw = decodeURIComponent(m[1]); } catch (e) { raw = null; } }
    }
    if (!raw) return null;
    try {
      var c = JSON.parse(raw);
      if (!c || c.v !== VERSION || typeof c.ts !== 'number') return null;
      if (Date.now() - c.ts > MAX_AGE_MS) return null; // expiré : on redemande
      return { analytics: !!c.analytics, ads: !!c.ads, ts: c.ts };
    } catch (e) { return null; }
  }

  function saveChoice(choice) {
    var data = JSON.stringify({ v: VERSION, analytics: !!choice.analytics, ads: !!choice.ads, ts: Date.now() });
    var stored = false;
    try { window.localStorage.setItem(STORAGE_KEY, data); stored = true; } catch (e) { stored = false; }
    if (!stored) {
      try {
        document.cookie = STORAGE_KEY + '=' + encodeURIComponent(data) +
          '; max-age=' + Math.floor(MAX_AGE_MS / 1000) + '; path=/; SameSite=Lax' +
          (location.protocol === 'https:' ? '; Secure' : '');
      } catch (e) { /* rien */ }
    }
  }

  // ---- Chargement des traceurs (uniquement après accord) ----
  var loaded = { gtm: false, ga4: false, pixel: false };

  function addScript(src) {
    var s = document.createElement('script');
    s.async = true;
    s.src = src;
    var first = document.getElementsByTagName('script')[0];
    if (first && first.parentNode) first.parentNode.insertBefore(s, first);
    else document.head.appendChild(s);
    return s;
  }

  function loadGTM() {
    if (loaded.gtm) return;
    loaded.gtm = true;
    window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
    addScript('https://www.googletagmanager.com/gtm.js?id=' + GTM_ID);
  }

  function loadGA4() {
    if (loaded.ga4) return;
    loaded.ga4 = true;
    window.gtag('js', new Date());
    window.gtag('config', GA4_ID);
    addScript('https://www.googletagmanager.com/gtag/js?id=' + GA4_ID);
  }

  function loadMetaPixel() {
    if (loaded.pixel) return;
    loaded.pixel = true;
    /* eslint-disable */
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
    /* eslint-enable */
    window.fbq('init', META_PIXEL_ID);
    window.fbq('track', 'PageView');
  }

  function applyChoice(choice) {
    window.gtag('consent', 'update', {
      analytics_storage: choice.analytics ? 'granted' : 'denied',
      ad_storage: choice.ads ? 'granted' : 'denied',
      ad_user_data: choice.ads ? 'granted' : 'denied',
      ad_personalization: choice.ads ? 'granted' : 'denied'
    });
    if (choice.analytics || choice.ads) loadGTM();
    if (choice.analytics) loadGA4();
    if (choice.ads) loadMetaPixel();
  }

  // Retrait d'un accord déjà donné : on efface les cookies posés et on recharge
  // la page pour que les scripts déjà chargés ne tournent plus.
  function clearTrackerCookies() {
    var names = document.cookie.split(';').map(function (c) { return c.split('=')[0].trim(); });
    var host = location.hostname;
    var domains = ['', host, '.' + host, '.' + host.replace(/^www\./, '')];
    names.forEach(function (n) {
      if (!/^(_ga|_gid|_gat|_gcl|_fbp|_fbc)/.test(n)) return;
      domains.forEach(function (d) {
        document.cookie = n + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/' + (d ? '; domain=' + d : '');
      });
    });
  }

  var current = readChoice();

  function decide(choice) {
    var before = current;
    current = { analytics: !!choice.analytics, ads: !!choice.ads };
    saveChoice(current);
    hideBanner();
    var withdrew = before && ((before.analytics && !current.analytics) || (before.ads && !current.ads));
    var anyLoaded = loaded.gtm || loaded.ga4 || loaded.pixel;
    if (withdrew && anyLoaded) {
      window.gtag('consent', 'update', {
        analytics_storage: current.analytics ? 'granted' : 'denied',
        ad_storage: current.ads ? 'granted' : 'denied',
        ad_user_data: current.ads ? 'granted' : 'denied',
        ad_personalization: current.ads ? 'granted' : 'denied'
      });
      if (!current.ads && typeof window.fbq === 'function') { try { window.fbq('consent', 'revoke'); } catch (e) { /* rien */ } }
      clearTrackerCookies();
      window.location.reload();
      return;
    }
    if (withdrew) clearTrackerCookies();
    applyChoice(current);
  }

  if (current) applyChoice(current);

  // ---- Bannière ----
  // Palette : reprend les variables de style.css (:root) ; les valeurs de repli
  // sont les mêmes, pour les pages qui ne chargent pas style.css.
  var CSS = '' +
    '.hfc{--hfc-bg:var(--gray-dark,#1a1a1a);--hfc-fg:var(--white,#fff);--hfc-muted:var(--gray-light,#999);--hfc-accent:var(--accent,#c8ff00);--hfc-ink:var(--black,#000);' +
    'position:fixed;left:16px;right:16px;bottom:16px;z-index:2147483000;max-width:560px;margin:0 auto;box-sizing:border-box;' +
    'background:var(--hfc-bg);color:var(--hfc-fg);border:1px solid var(--hfc-muted);border-radius:14px;padding:20px 22px;' +
    'font-family:Inter,system-ui,-apple-system,"Segoe UI",sans-serif;font-size:14px;line-height:1.5;text-align:left;' +
    'box-shadow:0 12px 40px var(--hfc-ink);cursor:auto}' +
    '.hfc[hidden]{display:none}' +
    '.hfc *{box-sizing:border-box;cursor:auto}' +
    '.hfc h2{margin:0 0 6px;font-size:16px;font-weight:700;line-height:1.3;color:var(--hfc-fg);font-family:inherit;letter-spacing:0;text-transform:none}' +
    '.hfc p{margin:0 0 14px;color:var(--hfc-fg)}' +
    '.hfc a{color:var(--hfc-fg);text-decoration:underline;text-underline-offset:3px}' +
    '.hfc a,.hfc button,.hfc label,.hfc input{cursor:pointer}' +
    '.hfc-actions{display:flex;gap:10px;flex-wrap:wrap}' +
    '.hfc-btn{flex:1 1 0;min-width:140px;min-height:44px;padding:10px 16px;border-radius:999px;font:inherit;font-weight:600;font-size:14px;' +
    'background:var(--hfc-fg);color:var(--hfc-ink);border:2px solid var(--hfc-fg)}' +
    '.hfc-btn:hover{background:var(--hfc-accent);border-color:var(--hfc-accent)}' +
    '.hfc-link{background:none;border:0;padding:6px 0;margin-top:10px;font:inherit;font-size:13px;color:var(--hfc-fg);text-decoration:underline;text-underline-offset:3px}' +
    '.hfc button:focus-visible,.hfc a:focus-visible,.hfc input:focus-visible{outline:3px solid var(--hfc-accent);outline-offset:2px}' +
    '.hfc-panel{margin:0 0 14px;padding:0;border:0}' +
    '.hfc-panel legend{padding:0;margin:0 0 8px;font-weight:600}' +
    '.hfc-opt{display:flex;gap:10px;align-items:flex-start;padding:10px 0;border-top:1px solid var(--hfc-muted)}' +
    '.hfc-opt input{width:18px;height:18px;margin:2px 0 0;flex:none;accent-color:var(--hfc-accent)}' +
    '.hfc-opt small{display:block;color:var(--hfc-muted);font-size:12px}' +
    '.hfc-opt-fixed{color:var(--hfc-muted)}' +
    '@media (max-width:480px){.hfc{left:8px;right:8px;bottom:8px;padding:16px}.hfc-btn{min-width:0}}';

  var root = null;
  var panelOpen = false;

  function el(tag, attrs, text) {
    var e = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) { e.setAttribute(k, attrs[k]); });
    if (text) e.textContent = text;
    return e;
  }

  function build() {
    if (root) return root;
    var style = el('style', { id: 'hfc-style' });
    style.textContent = CSS;
    document.head.appendChild(style);

    root = el('div', { 'class': 'hfc', role: 'dialog', 'aria-modal': 'false', 'aria-labelledby': 'hfc-title', 'aria-describedby': 'hfc-desc', id: 'hf-consent' });
    root.hidden = true;

    root.appendChild(el('h2', { id: 'hfc-title' }, 'On te demande ton avis sur les cookies'));

    var p = el('p', { id: 'hfc-desc' });
    p.appendChild(document.createTextNode("Avec ton accord, on utilise des cookies pour mesurer l'audience du site (Google Analytics) et l'efficacité de nos publicités (Meta). Rien n'est déposé si tu refuses, et tu peux changer d'avis à tout moment via « Gérer mes cookies » en bas de page. "));
    var a = el('a', { href: PRIVACY_URL }, 'Politique de confidentialité');
    p.appendChild(a);
    root.appendChild(p);

    // Panneau « Personnaliser »
    var panel = el('fieldset', { 'class': 'hfc-panel', id: 'hfc-panel' });
    panel.hidden = true;
    panel.appendChild(el('legend', null, 'Tes choix'));

    var fixed = el('div', { 'class': 'hfc-opt hfc-opt-fixed' });
    var fixedText = el('span');
    fixedText.appendChild(document.createTextNode('Fonctionnement du site (toujours actif)'));
    fixedText.appendChild(el('small', null, 'Mémorise seulement ton choix sur les cookies.'));
    fixed.appendChild(fixedText);
    panel.appendChild(fixed);

    function option(id, label, help) {
      var row = el('label', { 'class': 'hfc-opt', 'for': id });
      var input = el('input', { type: 'checkbox', id: id });
      var span = el('span');
      span.appendChild(document.createTextNode(label));
      span.appendChild(el('small', null, help));
      row.appendChild(input);
      row.appendChild(span);
      panel.appendChild(row);
      return input;
    }
    var cbAnalytics = option('hfc-analytics', "Mesure d'audience", 'Google Tag Manager et Google Analytics : pages vues, parcours sur le site.');
    var cbAds = option('hfc-ads', 'Publicité', 'Pixel Meta (Facebook, Instagram) : mesure de nos campagnes publicitaires.');
    root.appendChild(panel);

    var actions = el('div', { 'class': 'hfc-actions' });
    var btnRefuse = el('button', { type: 'button', 'class': 'hfc-btn', 'data-hfc': 'refuse' }, 'Tout refuser');
    var btnAccept = el('button', { type: 'button', 'class': 'hfc-btn', 'data-hfc': 'accept' }, 'Tout accepter');
    var btnSave = el('button', { type: 'button', 'class': 'hfc-btn', 'data-hfc': 'save' }, 'Enregistrer mes choix');
    btnSave.hidden = true;
    actions.appendChild(btnRefuse);
    actions.appendChild(btnAccept);
    actions.appendChild(btnSave);
    root.appendChild(actions);

    var btnCustom = el('button', { type: 'button', 'class': 'hfc-link', 'aria-expanded': 'false', 'aria-controls': 'hfc-panel' }, 'Personnaliser');
    root.appendChild(btnCustom);

    btnRefuse.addEventListener('click', function () { decide({ analytics: false, ads: false }); });
    btnAccept.addEventListener('click', function () { decide({ analytics: true, ads: true }); });
    btnSave.addEventListener('click', function () { decide({ analytics: cbAnalytics.checked, ads: cbAds.checked }); });
    btnCustom.addEventListener('click', function () { setPanel(!panelOpen); if (panelOpen) cbAnalytics.focus(); });

    root.addEventListener('keydown', function (e) {
      if ((e.key === 'Escape' || e.key === 'Esc') && panelOpen) { setPanel(false); btnCustom.focus(); }
    });

    root._refs = { panel: panel, btnSave: btnSave, btnCustom: btnCustom, cbAnalytics: cbAnalytics, cbAds: cbAds, btnRefuse: btnRefuse };

    // En début de <body> : premier élément atteint au clavier.
    document.body.insertBefore(root, document.body.firstChild);
    return root;
  }

  function setPanel(open) {
    var r = root._refs;
    panelOpen = open;
    r.panel.hidden = !open;
    r.btnSave.hidden = !open;
    r.btnCustom.setAttribute('aria-expanded', open ? 'true' : 'false');
    r.btnCustom.textContent = open ? 'Masquer les options' : 'Personnaliser';
  }

  function showBanner(fromUser) {
    build();
    var r = root._refs;
    r.cbAnalytics.checked = !!(current && current.analytics);
    r.cbAds.checked = !!(current && current.ads);
    setPanel(!!fromUser && !!current);
    root.hidden = false;
    if (fromUser) { try { (panelOpen ? r.cbAnalytics : r.btnRefuse).focus(); } catch (e) { /* rien */ } }
  }

  function hideBanner() {
    if (root) root.hidden = true;
  }

  function onReady(fn) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
    else fn();
  }

  onReady(function () {
    if (!current) showBanner(false);
    // Lien « Gérer mes cookies » (y compris dans les pieds de page React).
    document.addEventListener('click', function (e) {
      var t = e.target && e.target.closest ? e.target.closest('[data-hf-consent-open]') : null;
      if (!t) return;
      e.preventDefault();
      showBanner(true);
    });
  });

  window.hfConsent = {
    open: function () { onReady(function () { showBanner(true); }); },
    get: function () { return current ? { analytics: current.analytics, ads: current.ads } : null; }
  };
})();
