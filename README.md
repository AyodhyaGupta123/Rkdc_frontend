# Archicon Clone — React + Tailwind CSS

A structured recreation of the Archicon architecture/interior-design landing page
(hero, disciplines grid, projects preview, services accordion, banner, stats, news, footer).

## Stack
- React 18 + Vite
- Tailwind CSS (custom tokens in `tailwind.config.js`)
- React Router (routes are wired up so you can add more pages)

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to /dist
```

## Structure

```
src/
  components/
    layout/         Navbar, Footer — used on every page
    home/            One component per landing-page section
      Hero.jsx
      Disciplines.jsx      (Commercial / Residential / Hospitality / Multipurpose)
      ProjectsPreview.jsx
      ServicesList.jsx     (accordion: Consultancy / Construction / Bureau / Ventures)
      Banner.jsx
      Stats.jsx
      News.jsx
    ui/              Small shared primitives (SectionHeading, ImagePlaceholder)
  data/
    siteData.js      All copy/content lives here — edit this file to change text
  pages/
    Home.jsx         Composes the section components above
  App.jsx            Router + shared layout (Navbar/Footer wrap all pages)
  main.jsx           Entry point
```

## Notes

- All photography is stubbed with `ImagePlaceholder` (a diagonal-line placeholder block)
  since no real project photos were supplied. Swap it for `<img src="..." />` wherever
  you have real assets — drop files in `public/` or `src/assets/` and reference them.
- Colors, fonts and spacing tokens are centralized in `tailwind.config.js` under
  `theme.extend` (`ink`, `paper`, `offwhite`, `stone`, `accent`) so the whole palette
  can be restyled from one place.
- To add another page (e.g. Portfolio, Blog, Shop), create it under `src/pages/` and
  register the route in `App.jsx` — the nav links in `src/data/siteData.js` already
  point at `/portfolio`, `/blog`, `/shop`, etc.
