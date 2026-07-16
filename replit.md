# Ethnies du Burkina Faso

## Description
Application mobile-first de recensement détaillé des ethnies du Burkina Faso. Présente de manière structurée et exhaustive les groupes ethniques présents dans les 13 régions administratives du Burkina Faso.

## Stack technique
- **React 19** + **TypeScript**
- **Vite** (bundler)
- **Tailwind CSS v4** (styles)
- **shadcn/ui** (composants UI)
- **React Router DOM v7** (navigation)
- **Lucide React** (icônes)

## Structure de l'application

```
src/
├── data/
│   └── burkina.ts        # Données exhaustives : 13 régions, 60+ groupes ethniques
├── types/
│   └── index.ts          # Types TypeScript (Region, GroupeEthnique, Famille)
├── components/
│   ├── Navbar.tsx         # Navigation sticky (mobile + desktop)
│   ├── Footer.tsx         # Pied de page
│   └── BurkinaMap.tsx    # Carte SVG interactive des 13 régions
├── pages/
│   ├── HomePage.tsx       # Accueil : stats, carte, liste des régions
│   ├── RegionsPage.tsx    # Liste des 13 régions
│   ├── RegionDetailPage.tsx  # Groupes ethniques d'une région
│   ├── EthnicGroupPage.tsx   # Fiche détaillée d'un groupe ethnique
│   ├── SearchPage.tsx     # Moteur de recherche avec filtres
│   ├── AboutPage.tsx      # À propos / méthodologie / sources
│   └── ReportPage.tsx     # Formulaire de signalement
└── App.tsx               # Router principal
```

## Commandes

```bash
npm run dev    # Démarrer le serveur de développement (port 3000)
npm run build  # Build de production
npm run lint   # Linting ESLint
```

## Couleurs du design
- **Vert** : `#009A44` (couleur principale, drapeau BF)
- **Rouge** : `#EF2B2D` (drapeau BF)
- **Or/Jaune** : `#FCD116` (drapeau BF / accent)
- **Bleu** : `#1B6CA8` (informations)

## Données couvertes
- 13 régions administratives du Burkina Faso
- 60+ groupes ethniques documentés
- Pour chaque groupe : nom officiel, variantes, localisation, langue, famille linguistique, spécificités culturelles, traditions, organisation sociale, croyances, familles & lignages
- Moteur de recherche par nom, langue, famille, localisation

## User preferences
- Application en français
- Design mobile-first avec les couleurs du drapeau burkinabè
- Données exhaustives et structurées par région
