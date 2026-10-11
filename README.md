# Atul Deep Singh — Portfolio

Personal site of Atul Deep Singh, software engineer focused on backend systems, APIs, data-intensive applications and reliable integrations.

Live: [atuldeepsingh.com](https://atuldeepsingh.com/) · Writing: [blog.atuldeepsingh.com](https://blog.atuldeepsingh.com)

## Design

**The Digital Architect** — a dark editorial system at the intersection of software architecture and contemporary editorial design.

- Palette: background `#0D0F14`, surfaces `#151820`, text `#F5F7FA` / `#969BA8`, hairlines `#282C36`, mint `#00FFC2` for interaction and emphasis, violet `#7B61FF` used sparingly (the synchronous path in diagrams).
- Type: Space Grotesk (display, section titles and block headings), Inter (prose), JetBrains Mono (metadata only: dates, stacks, indices, captions). Fluid scale defined as tokens in `src/styles/theme.css`; block headings use the `.label` class, metadata uses `.meta`.
- Layout: 12-column grid, hairline rules instead of cards, section headers with a numbered index (`01 — Approach` … `07 — Contact`) that the navigation mirrors.
- Signature visual: an SVG system diagram in the hero (webhooks and client requests → API layer → RabbitMQ → idempotent workers → MongoDB / Elasticsearch) with packets travelling beneath the nodes. Pure SMIL, no main-thread animation; hidden under `prefers-reduced-motion`.
- Motion: short entrance reveals on scroll, a spring indicator in the navigation and case-file tabs, drawn underlines on links. Everything respects `prefers-reduced-motion`.

## Content

All copy lives in one file: `src/app/data/content.ts`. Every figure is traceable to the résumé (`src/imports/Atul_Singh.pdf`), the previous site, or a published article, and the comments in that file say which. To update the site, edit that file.

Articles deep-link into the blog's hash router: `https://blog.atuldeepsingh.com/#/writing/<slug>`.

## Stack

React 18 · Vite 6 · Tailwind CSS v4 (CSS-first, tokens in `theme.css`) · Motion 12 · lucide-react

```
src/
├── app/
│   ├── App.tsx                 section order
│   ├── data/content.ts         all site content
│   ├── hooks/                  useActiveSection, useLocalTime
│   └── components/
│       ├── primitives.tsx      Container, Section, SectionHeader, Reveal, ArrowLink, TagList, Metric
│       ├── SystemDiagram.tsx   hero diagram (wide + compact variants)
│       ├── Nav.tsx  Hero.tsx  Identity.tsx  Work.tsx  Practice.tsx
│       ├── Toolkit.tsx  Experience.tsx  Beyond.tsx  Contact.tsx
│       ├── ui/                 unused shadcn kit from the original Figma Make export
│       └── figma/              unused Figma Make helper
├── assets/                     portrait.webp, genify.webp (+ original profile.png)
├── imports/Atul_Singh.pdf      résumé
└── styles/                     index.css → tailwind.css + theme.css
```

## Develop

```bash
npm install
npm run dev       # current site               → http://localhost:5173
npm run dev:old   # v1, served under /v1/      → http://localhost:5180/v1/
npm run build     # builds both into dist/ (current at /, v1 at /v1/)
npm run preview   # serve the production build
```

## v1

The previous version of the site is kept online at `/v1/`, linked from the header ("v1 ↗"), the mobile menu and the footer. Its source lives untouched in `backup/original-src/`; `backup/index.html` adds only the "archived" notice bar. `vite.old.config.ts` builds it with `base: '/v1/'` into `dist/v1/` as the second step of `npm run build`.

In development, the current site's dev server proxies `/v1/` to the v1 dev server, so run `npm run dev` and `npm run dev:old` together to have the footer link work locally.

To retire v1: delete `backup/` and `vite.old.config.ts`, remove the `dev:old` script and the second half of `build` in `package.json`, drop the `server.proxy` / `preview` entries in `vite.config.ts`, and remove `previousVersion` from `src/app/data/content.ts` and its link in `Contact.tsx`.
