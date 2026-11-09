# Formulaires — hivingfood.fr

Le site est statique : les formulaires envoient leurs données à de petites **fonctions Vercel** (du code qui tourne chez Vercel seulement quand quelqu'un envoie un formulaire), rangées dans le dossier `api/`. Ces fonctions envoient un e-mail à contact@hivingfood.fr grâce à **Resend** (un service d'envoi d'e-mails). Aucun PHP, aucune base de données, aucun traceur.

## Qui envoie quoi

| Formulaire (page) | Adresse appelée | Champs (JSON) |
|---|---|---|
| Brief en 3 étapes (bandeau « Passez à table », bas de toutes les pages React : accueil, agence, talents, studios, campagnes, blog…) | `POST /api/brief` | `type`, `company`, `budget` (HT), `deadline`, `message`, `email`, `name` (facultatif) |
| Demande événementiel (`/evenementiel/`) | `POST /api/contact` | `name`, `email`, `company`, `message` (type, date, invités y sont ajoutés), `subject`, `source` |
| Newsletter du pied de page (« La carte du chef ») | `POST /api/newsletter` | `email`, `source: footer` |
| Newsletter du journal (`/food/blog.html`) et du blog (`/blog/`) | `POST /api/newsletter` | `email`, `source: blog` |

Anciennes adresses gardées pour compatibilité (réécritures dans `vercel.json`) : `/api/contact/`, `/api/brief/`, `/api/newsletter/`, `/api/newsletter/subscribe`.

`food/evenementiel.html` (page React) n'a pas de formulaire à elle : son bouton mène au brief en 3 étapes du bas de page. `script.js` (ancien script OVH) n'est chargé par aucune page.

Protections : origine limitée à hivingfood.fr, www.hivingfood.fr et aux prévisualisations Vercel du projet (`hivingfood-fr-….vercel.app`) ; champ piège invisible `website` (un robot le remplit, la demande est ignorée sans erreur) ; longueur des champs limitée ; le brief revérifie chaque choix côté serveur.

Réponses : `200` envoyé · `400` champ manquant ou e-mail invalide · `403` origine refusée · `405` mauvaise méthode · `503` envoi impossible (clé absente ou Resend en panne). Avec `503`, le site affiche « Envoi momentanément indisponible, écrivez-nous à contact@hivingfood.fr ».

## À faire par Maxime (une seule fois)

### 1. Dans Resend (resend.com)

1. Créer le compte avec **maximebolleaupro@gmail.com** comme propriétaire.
2. *Domains* → *Add domain* → `hivingfood.fr` (région Europe conseillée).
3. Resend affiche des **enregistrements DNS** à ajouter dans la zone OVH de hivingfood.fr. En général :
   - `TXT` sur `resend._domainkey` : la clé DKIM de Resend (signature des e-mails). C'est un nom à part : il ne remplace pas la clé DKIM de Google Workspace.
   - `MX` sur **`send`** (donc `send.hivingfood.fr`, priorité 10) vers l'adresse `feedback-smtp….amazonses.com` donnée par Resend.
   - `TXT` sur **`send`** : `v=spf1 include:amazonses.com ~all`.
   - Copier les valeurs exactes affichées par Resend, pas celles de cette page.

   **Ces enregistrements ne touchent pas aux MX du domaine** : ils sont posés sur le sous-domaine `send` et sur `resend._domainkey`. Les MX, le SPF et le DMARC de `hivingfood.fr` (réception des e-mails chez Google Workspace) restent tels quels : ne rien modifier ni supprimer. Personne d'autre que Maxime ne touche aux DNS (CLAUDE.md §7).
4. Attendre que Resend affiche le domaine « Verified ».
5. *API Keys* → *Create API key* (droit « Sending access », domaine hivingfood.fr). Copier la clé une seule fois, directement dans Vercel (étape 2). Ne jamais l'envoyer par e-mail ou dans une conversation.

### 2. Dans Vercel (projet hivingfood-fr → Settings → Environment Variables)

| Variable | Obligatoire | Valeur |
|---|---|---|
| `RESEND_API_KEY` | oui | la clé créée dans Resend : **secret, jamais dans le code** |
| `MAIL_FROM` | non | expéditeur ; par défaut `Hiving Food <noreply@hivingfood.fr>` (doit être sur le domaine vérifié) |
| `CONTACT_TO` | non | destinataire ; par défaut `contact@hivingfood.fr` |
| `RESEND_AUDIENCE_ID` | non | identifiant d'une audience Resend si on veut aussi y ranger les inscrits newsletter |

Cocher *Production* et *Preview*, enregistrer, puis relancer un déploiement (*Deployments* → *Redeploy*) : les variables ne s'appliquent qu'aux nouveaux déploiements.

Sans `RESEND_API_KEY`, rien n'est envoyé et les visiteurs voient le message « écrivez-nous à contact@hivingfood.fr ».

## Tester

```bash
node tests/formulaires.test.js   # simule chaque fonction (aucun e-mail réel)
```

Puis, sur l'URL de prévisualisation, envoyer un vrai brief et vérifier la boîte contact@hivingfood.fr.
