# Dahira Nooru Touba — Site officiel

Site vitrine du dahira (association mouride dédiée à Serigne Touba / Cheikh
Ahmadou Bamba) : présentation, événements, galerie, actions sociales,
bibliothèque, dons, adhésion, actualités et contact.

Construit avec **Vue 3 + Vite**, charte bleu & blanc, glassmorphism léger,
animations au scroll, mode sombre/clair, compte à rebours, galerie avec
lightbox, et bascule de langue **Français / Wolof** via `vue-i18n`.

## Développement

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build de production

```bash
npm run build     # génère dist/
npm run preview   # prévisualise le build
```

## Déploiement (Vercel)

Ce projet est un site Vite standard : sur [vercel.com](https://vercel.com),
importez le repo GitHub, laissez le framework preset **Vite** (build command
`npm run build`, output directory `dist`), et déployez.

## Structure

```
src/
├── App.vue, main.js, style.css
├── components/     sections de la page (Header, Hero, About, Khalife,
│                   Events, Gallery, Social, Library, Donate, Join,
│                   News, Contact, Footer, BackToTop)
├── composables/     logique réutilisable (theme, countdown, scroll-reveal)
└── i18n/locales/    fr.js et wo.js — tous les textes du site
public/              favicon
```

## ⚠️ À personnaliser avant mise en ligne

- **Nom du dahira** : remplacez « Dahira Nooru Touba » dans `src/i18n/locales/fr.js`
  et `wo.js` par le vrai nom.
- **Traduction wolof** : le contenu en `wo.js` est une traduction complète
  fournie à titre de base de travail — **à faire relire par un locuteur
  wolof natif** avant publication (orthographe, tournures, terminologie
  religieuse).
- **Photos réelles** : la galerie, le portrait du Khalife et les vignettes
  d'actualités utilisent des dégradés de couleur en attendant vos vraies
  photos (à placer dans `public/` ou `src/assets/`).
- **Coordonnées, réseaux sociaux, moyens de paiement (Wave/OM/PayPal/IBAN)**
  et **adresse Google Maps** : actuellement des exemples, à remplacer par
  les vraies informations du dahira.
- **Date du Grand Magal** : définie dans le composable de countdown —
  à vérifier chaque année (calendrier hégirien).
- **Formulaires** (adhésion, contact) : actuellement front-end uniquement
  (affichent un message de succès sans backend). Branchez un service comme
  Formspree, EmailJS, ou une API dédiée pour recevoir réellement les messages.
