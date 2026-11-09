// POST /api/newsletter — inscription à « La lettre du chef »
// Corps JSON : { email, source? ('footer', 'blog'…), website? (piège à robots) }
// Prévient contact@hivingfood.fr par e-mail. Si RESEND_AUDIENCE_ID est défini,
// ajoute aussi l'adresse à l'audience Resend (liste de diffusion).

const { origineAutorisee, enTetes, lireCorps, EMAIL_RE, texte, envoyerEmail, dateParis } = require('./_mail');

async function ajouterAudience(email) {
  const cle = process.env.RESEND_API_KEY;
  const audience = process.env.RESEND_AUDIENCE_ID;
  if (!cle || !audience) return;
  const r = await fetch(`https://api.resend.com/audiences/${audience}/contacts`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${cle}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, unsubscribed: false }),
  }).catch(() => null);
  if (!r || !r.ok) console.error('[newsletter] ajout à l\'audience impossible', r && r.status);
}

module.exports = async (req, res) => {
  enTetes(req, res);
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Méthode non autorisée' });
  if (!origineAutorisee(req.headers.origin)) return res.status(403).json({ error: 'Origine refusée' });

  const b = await lireCorps(req);
  if (texte(b.website, 200)) return res.status(200).json({ success: true });

  const email = texte(b.email, 254).toLowerCase();
  const source = texte(b.source || 'footer', 40);
  if (!EMAIL_RE.test(email)) return res.status(400).json({ error: 'Email invalide' });

  await ajouterAudience(email);
  const envoi = await envoyerEmail({
    sujet: `Nouvelle inscription à la lettre du chef : ${email}`,
    corps: `Inscription newsletter depuis hivingfood.fr\n\nEmail : ${email}\nSource : ${source}\nDate : ${dateParis()}\n`,
    replyTo: email,
  });
  if (!envoi.ok) return res.status(503).json({ error: 'Inscription momentanément indisponible.' });
  return res.status(200).json({ success: true, message: 'Merci, c’est noté !' });
};
