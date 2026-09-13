# Rym Dhaouadi — Portfolio

Site portfolio de Rym Dhaouadi, webdesigner & UX/UI designer. Next.js (App Router) + Tailwind CSS + Framer Motion.

## Développement

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # build de production
npm run lint    # vérification ESLint
```

## Structure

```
src/
  app/
    layout.tsx          # metadata, polices, JSON-LD
    page.tsx             # assemble les sections de la homepage
    travaux/[slug]/       # page case study par projet
    sitemap.ts, robots.ts
  components/            # une section = un composant
  lib/data.ts            # tout le contenu éditable (voir ci-dessous)
```

## Modifier le contenu

Tout le texte, les projets, services et coordonnées sont centralisés dans `src/lib/data.ts` :

- `site` — nom, email, réseaux, URL du site
- `projects` — chaque projet, avec un `slug`, un résumé pour la homepage, et un objet `caseStudy` optionnel pour la page dédiée (`/travaux/[slug]`)
- `services`, `process`, `nav`

### Ajouter un visuel de projet

Par défaut, un projet sans image affiche un panneau de substitution (nom du client en typo). Pour afficher une vraie capture :

1. Déposer l'image dans `public/` (ex. `public/travaux/noa-hifi/cover.jpg`)
2. Renseigner `image: "/travaux/noa-hifi/cover.jpg"` sur le projet dans `data.ts`

### À faire avant mise en ligne

Des valeurs de `src/lib/data.ts` sont des placeholders marqués `TODO` :
- `site.email`, `site.instagram`, `site.linkedin` — à remplacer par les vraies coordonnées publiques
- `site.photo` — photo de la section About (sinon un monogramme "RD" s'affiche)
- `site.url` — domaine réel, une fois déployé (utilisé par les metadata SEO, sitemap, JSON-LD)

## Stack

Next.js 16 (App Router, SSG), Tailwind CSS v4, Framer Motion, TypeScript. Polices : Fraunces (titres) + Inter (texte).
