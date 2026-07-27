# Site web — QualioExpert (Sonia Briet)

Site vitrine pour le lancement de votre activité de **bilan de compétences et
accompagnement des transitions professionnelles**.
Objectif principal : **générer des contacts** (formulaire + prise de rendez-vous).
Ce document est votre point de départ pour continuer le travail dans **Claude Code**.

---

## 1. Ce qui est déjà en place

Un site complet et fonctionnel, **déjà rempli avec vos vrais textes** (repris de
votre document Wix) et **votre palette verte** (reprise de votre bannière) :

- **6 pages** : Accueil, Le bilan de compétences, Tarifs & financement, À propos,
  Blog, Contact
- **Page d'accueil complète** : hero, parcours d'accompagnement, « Vous êtes au bon
  endroit si… », qui je suis, les 5 apports, les 3 phases du bilan, aperçu du
  financement, ma différence, appel à l'action
- **Page Tarifs & financement** : tarif, contenu de la prestation, les 4 modes de
  financement (CPF, employeur, France Travail, personnel), point de transparence sur
  Qualiopi, accessibilité handicap et une **FAQ** de 6 questions
- **Un blog** avec un premier article (sur votre thématique)
- **Un formulaire de contact** (prêt à connecter à votre email)
- **Un espace prise de rendez-vous** « échange offert » (prêt à connecter à Calendly)
- **Charte graphique QualioExpert** centralisée (verts sauge & olive)
- **Menu mobile** (bouton burger) fonctionnel sur téléphone
- **Mentions légales** (obligatoires en France) à compléter

Il reste à remplacer : votre **photo**, votre **logo**, tous les champs entre
crochets `[...]` (tarif, durées, SIRET, adresse…) et à ajouter de **vrais témoignages**.

> ⚠️ La section témoignages de la page d'accueil a été **mise en commentaire** : elle
> contenait des citations d'exemple. Publier des témoignages inventés est trompeur pour
> vos visiteurs et interdit par le Code de la consommation. Réactivez-la dans
> `src/pages/index.astro` dès que vous aurez de vrais retours, avec l'accord des personnes.

---

## 2. Le stack technique (et pourquoi)

Choisi pour être **simple, gratuit, rapide et adapté à quelqu'un qui débute** :

| Élément | Choix | Pourquoi |
|---|---|---|
| Structure du site | **Astro** | Rapide, idéal pour un site vitrine + blog, facile à faire évoluer avec Claude Code |
| Contenu du blog | **Fichiers markdown** | Vous écrivez vos articles comme un simple document texte |
| Formulaire de contact | **Formspree** (gratuit) | Reçoit les messages par email sans serveur à gérer |
| Prise de rendez-vous | **Calendly** (gratuit) | Les clients réservent un créneau tout seuls |
| Hébergement | **Netlify** ou **Vercel** (gratuit) | Mise en ligne en quelques clics, sans compétence technique |
| Nom de domaine | À réserver (ex : OVH, Gandi) | ~10-15 €/an pour votre adresse `.fr` |

Vous n'avez **rien à installer vous-même** : Claude Code s'en charge.

---

## 3. Arborescence du projet

```
site-qualioexpert/
├── README.md                  ← ce document
├── package.json               ← liste des outils du projet
├── astro.config.mjs           ← configuration (nom de domaine)
├── public/
│   └── images/                ← vos photos, logo et bannière vont ici
└── src/
    ├── styles/global.css      ← 🎨 COULEURS & POLICES QualioExpert
    ├── layouts/BaseLayout.astro   ← structure commune à toutes les pages
    ├── components/
    │   ├── Header.astro       ← menu de navigation
    │   ├── Footer.astro       ← pied de page
    │   └── ContactForm.astro  ← formulaire de contact
    ├── content/
    │   ├── config.ts          ← définition des articles de blog
    │   └── blog/*.md          ← vos articles
    └── pages/                 ← une page = un fichier
        ├── index.astro                  ← Accueil
        ├── bilan-de-competences.astro   ← Le bilan de compétences
        ├── tarifs-et-financement.astro  ← Tarifs, financements & FAQ
        ├── a-propos.astro               ← À propos
        ├── contact.astro                ← Contact
        ├── mentions-legales.astro
        └── blog/
            ├── index.astro    ← liste des articles
            └── [slug].astro   ← gabarit d'un article
```

---

## 4. Vos prochaines étapes (dans l'ordre)

**Ce qui bloque la mise en ligne (à faire en premier) :**

1. **Remplir les champs entre crochets** de `tarifs-et-financement.astro` : votre tarif,
   la durée en semaines, les délais d'accès. Un visiteur qui voit `[Montant] €` s'en va.
2. **Ajouter vos images** dans `public/images/` : votre photo (`sonia.jpg`) et votre
   logo. La photo est aujourd'hui un rectangle vert « Emplacement photo ».
3. **Connecter le formulaire** : créez un compte sur formspree.io → collez
   l'identifiant dans `ContactForm.astro`. Sans ça, aucun message ne vous parvient.
4. **Connecter la prise de RDV** : créez un compte Calendly → collez votre lien dans
   `contact.astro` (l'adresse actuelle est un exemple, elle ne mène nulle part).
5. **Compléter les mentions légales** (SIRET, adresse, hébergeur) — obligatoire en France.

**Ensuite :**

6. **Mettre en ligne** : déployer sur Netlify ou Vercel, puis brancher votre nom de domaine.
7. **Ajouter de vrais témoignages** et réactiver la section sur la page d'accueil.
8. **Mettre à jour la mention Qualiopi** dès l'obtention : page Tarifs & financement,
   pied de page et badge de la page d'accueil (une recherche de « Qualiopi » dans le
   projet vous les montre tous).

Vous pouvez demander à Claude Code de faire chacune de ces étapes avec vous.

---

## 5. Prompt de démarrage pour Claude Code

Ouvrez ce dossier dans Claude Code et collez ce message pour démarrer :

> Je débute et je ne sais pas coder. Ce dossier contient le site vitrine de mon
> activité **QualioExpert** (bilan de compétences, Sonia Briet), fait avec Astro.
> Objectif : générer des contacts. Lis le `README.md` pour comprendre la structure.
>
> Aide-moi étape par étape, en m'expliquant simplement. Commençons par :
> 1) lancer le site en local pour que je le voie dans mon navigateur ;
> 2) ajouter mon logo et ma photo dans l'en-tête et la page d'accueil.
>
> Ne fais pas tout d'un coup : avance point par point et attends ma validation.

---

## 6. Commandes utiles (Claude Code les lancera pour vous)

```bash
npm install     # installe les outils (une seule fois au début)
npm run dev     # lance le site en local → http://localhost:4321
npm run build   # prépare la version finale pour la mise en ligne
```
