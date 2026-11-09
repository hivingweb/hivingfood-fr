# Formulaires — hivingfood.fr

Les anciens formulaires PHP d'OVH (`/api/*.php`) sont remplacés par deux fonctions Vercel, dans `api/` :

| Adresse | Champs (JSON) | Ce qui se passe |
|---|---|---|
| `POST /api/contact` (aussi `/api/contact/`) | `name`, `email`, `company` (facultatif), `message` | e-mail à contact@hivingfood.fr, avec « répondre » directement au visiteur |
| `POST /api/newsletter` (aussi `/api/newsletter/subscribe`) | `email`, `source` (`footer`, `journal`…) | e-mail à contact@hivingfood.fr ; ajout à l'audience Resend si `RESEND_AUDIENCE_ID` est défini |

Protection : origine limitée à hivingfood.fr (et ses prévisualisations), champ piège `website` contre les robots, longueur des champs limitée.

## Réglages Vercel (projet hivingfood-fr → Settings → Environment Variables)

| Variable | Obligatoire | Valeur |
|---|---|---|
| `RESEND_API_KEY` | oui | clé API Resend (compte qui gère le domaine hivingfood.fr) — **secret, jamais dans le code** |
| `MAIL_FROM` | non | expéditeur, par défaut `Hiving Food <noreply@hivingfood.fr>` |
| `CONTACT_TO` | non | destinataire, par défaut `contact@hivingfood.fr` |
| `RESEND_AUDIENCE_ID` | non | identifiant de l'audience Resend pour la newsletter |

Sans `RESEND_API_KEY`, les formulaires répondent « momentanément indisponible » (rien n'est perdu côté site, mais rien n'est envoyé).
