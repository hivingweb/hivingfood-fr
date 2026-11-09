// Outils communs aux fonctions de formulaire (contact, newsletter).
// Envoi des e-mails par l'API Resend. Aucun secret dans le code :
// la clé est lue dans la variable d'environnement RESEND_API_KEY (réglages Vercel).

const ORIGINES = ['https://www.hivingfood.fr', 'https://hivingfood.fr'];

function origineAutorisee(origin) {
  if (!origin) return true; // appel direct (curl, tests)
  if (ORIGINES.includes(origin)) return true;
  // adresses de prévisualisation Vercel de ce projet
  return /^https:\/\/hivingfood-[a-z0-9-]+\.vercel\.app$/.test(origin) || origin === 'https://hivingfood-fr.vercel.app';
}

function enTetes(req, res) {
  const origin = req.headers.origin || '';
  res.setHeader('Access-Control-Allow-Origin', origineAutorisee(origin) && origin ? origin : 'https://www.hivingfood.fr');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Cache-Control', 'no-store');
}

async function lireCorps(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  if (typeof req.body === 'string') { try { return JSON.parse(req.body); } catch { return {}; } }
  return {};
}

const EMAIL_RE = /^[^\s@]{1,64}@[^\s@]{1,190}\.[^\s@]{2,24}$/;

function texte(v, max) {
  return String(v == null ? '' : v).replace(/\u0000/g, '').trim().slice(0, max);
}

async function envoyerEmail({ sujet, corps, replyTo }) {
  const cle = process.env.RESEND_API_KEY;
  if (!cle) {
    console.error('[formulaire] RESEND_API_KEY absente : e-mail non envoyé');
    return { ok: false, raison: 'config' };
  }
  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${cle}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: process.env.MAIL_FROM || 'Hiving Food <noreply@hivingfood.fr>',
      to: [process.env.CONTACT_TO || 'contact@hivingfood.fr'],
      reply_to: replyTo || undefined,
      subject: sujet,
      text: corps,
    }),
  });
  if (!r.ok) {
    console.error('[formulaire] Resend a refusé l\'envoi', r.status, await r.text().catch(() => ''));
    return { ok: false, raison: 'envoi' };
  }
  return { ok: true };
}

function dateParis() {
  return new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Paris' });
}

module.exports = { origineAutorisee, enTetes, lireCorps, EMAIL_RE, texte, envoyerEmail, dateParis };
