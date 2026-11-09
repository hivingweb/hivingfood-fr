// POST /api/contact — formulaire de contact de hivingfood.fr
// Corps JSON : { name, email, company?, message, website? (piège à robots, doit rester vide) }
// Envoie la demande par e-mail à contact@hivingfood.fr (réponse directe au visiteur).

const { origineAutorisee, enTetes, lireCorps, EMAIL_RE, texte, envoyerEmail, dateParis } = require('./_mail');

module.exports = async (req, res) => {
  enTetes(req, res);
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Méthode non autorisée' });
  if (!origineAutorisee(req.headers.origin)) return res.status(403).json({ error: 'Origine refusée' });

  const b = await lireCorps(req);
  if (texte(b.website, 200)) return res.status(200).json({ success: true }); // robot : on ignore en silence

  const name = texte(b.name, 120);
  const email = texte(b.email, 254);
  const company = texte(b.company, 160);
  const message = texte(b.message, 5000);

  if (!name || !email || !message) return res.status(400).json({ error: 'Champs obligatoires : nom, email, message' });
  if (!EMAIL_RE.test(email)) return res.status(400).json({ error: 'Email invalide' });

  const corps = [
    'Nouveau message depuis hivingfood.fr', '',
    `Nom : ${name}`, `Email : ${email}`, `Entreprise : ${company || '-'}`, `Date : ${dateParis()}`, '',
    'Message :', message,
  ].join('\n');

  const envoi = await envoyerEmail({ sujet: `Nouveau contact Hiving Food : ${name}`, corps, replyTo: email });
  if (!envoi.ok) {
    return res.status(503).json({ error: 'Envoi momentanément indisponible. Écrivez-nous à contact@hivingfood.fr.' });
  }
  return res.status(200).json({ success: true, message: 'Message envoyé. On revient vers vous très vite.' });
};
