// POST /api/brief — « brief en 3 étapes » de hivingfood.fr
// Corps JSON :
//   étape 1 : type (liste ci-dessous)
//   étape 2 : company (marque / société), budget (liste ci-dessous, montants HT), deadline (liste ci-dessous)
//   étape 3 : message, email, name? ; website? (piège à robots, doit rester vide)
// Toutes les valeurs sont revérifiées ici (on ne fait jamais confiance au navigateur).

const { SITE, controlesDeBase, lireCorps, EMAIL_RE, texte, ligne, indisponible, envoyerEmail, dateParis } = require('./_mail');

const TYPES = ['Campagne influence', 'Production de contenus / studio', 'Événementiel', 'Talents / créateurs food', 'Autre'];
const BUDGETS = ['Moins de 5 000 € HT', '5 000 à 15 000 € HT', '15 000 à 50 000 € HT', 'Plus de 50 000 € HT', 'À définir'];
const ECHEANCES = ['Dès que possible', 'Sous 1 mois', '1 à 3 mois', 'Plus de 3 mois', 'Pas encore fixée'];

function valider(b) {
  const v = {
    type: ligne(b.type, 60),
    company: ligne(b.company, 160),
    budget: ligne(b.budget, 60),
    deadline: ligne(b.deadline, 60),
    message: texte(b.message, 5000),
    email: ligne(b.email, 254),
    name: ligne(b.name, 120),
  };
  const erreurs = {};
  if (!TYPES.includes(v.type)) erreurs.type = 'Choisissez un type de demande.';
  if (v.company.length < 2) erreurs.company = 'Indiquez votre marque ou société.';
  if (!BUDGETS.includes(v.budget)) erreurs.budget = 'Choisissez un budget indicatif.';
  if (!ECHEANCES.includes(v.deadline)) erreurs.deadline = 'Choisissez une échéance.';
  if (v.message.length < 10) erreurs.message = 'Décrivez votre projet en quelques mots (10 caractères minimum).';
  if (!EMAIL_RE.test(v.email)) erreurs.email = 'Adresse e-mail invalide.';
  return { v, erreurs };
}

module.exports = async (req, res) => {
  if (controlesDeBase(req, res)) return;

  const b = await lireCorps(req);
  if (texte(b.website, 200)) return res.status(200).json({ success: true }); // robot : on ignore en silence

  const { v, erreurs } = valider(b);
  if (Object.keys(erreurs).length) {
    return res.status(400).json({ error: Object.values(erreurs)[0], fields: erreurs });
  }

  const corps = [
    `Nouveau brief depuis ${SITE.domaine}`, '',
    `Type de demande : ${v.type}`,
    `Marque / société : ${v.company}`,
    `Budget indicatif : ${v.budget}`,
    `Échéance : ${v.deadline}`,
    `Nom : ${v.name || '-'}`,
    `E-mail : ${v.email}`,
    `Date : ${dateParis()}`, '',
    'Message :', v.message,
  ].join('\n');

  const envoi = await envoyerEmail({ sujet: `Brief ${SITE.nom} : ${v.company} (${v.type})`, corps, replyTo: v.email });
  if (!envoi.ok) return indisponible(res);
  return res.status(200).json({ success: true, message: 'Brief reçu. On revient vers vous sous 48h.' });
};

module.exports.TYPES = TYPES;
module.exports.BUDGETS = BUDGETS;
module.exports.ECHEANCES = ECHEANCES;
