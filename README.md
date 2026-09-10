# kullhem.io — Kullhem Labs site

The public front door for [Kullhem Labs](https://github.com/Kullhem-io). A static Astro build deployed to GitHub Pages. No backend, no secrets.

## Local dev
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Deploy
`.github/workflows/pages.yml` builds `dist/` and publishes it to GitHub Pages on every push to `main`.
Repo settings → Pages → Source: **GitHub Actions**. `public/CNAME` keeps the custom domain across deploys.

## Where things live
- Lab copy (tagline, focus areas, philosophy, tools, status): `src/data/lab.ts`
- Catalog entries: `src/data/projects.ts` (hand-curated; add an entry when a repo is worth showing)
- Home: `src/pages/index.astro`
- Catalog page: `src/pages/projects.astro` (rows rendered by `src/components/ProjectRow.astro`)
- Notes (blog): `src/pages/blog/*.md` with `layout: ../../layouts/Post.astro` and a `date` in frontmatter
- RSS: `src/pages/rss.xml.ts`
- Global layout, fonts, and theme tokens: `src/layouts/Base.astro`
- The crow: `src/components/Crow.astro`. One pose per page (`hero`, `corner`, `peek`, `margin`, `lost`), picked from the route in `Base.astro` or passed as a `pose` prop. Also owns the eye tracking, the tagline slip, and the motes. All of it turns off under `prefers-reduced-motion`.
- Assets: `public/crow-ink.png` (silhouette), `public/crow-bone.png` (header mark), `public/kullhem-labs-logo.png` (OpenGraph image), `public/favicon.svg`

## Style notes
Fonts are Instrument Serif (headlines), IBM Plex Mono (labels, nav, meta), and IBM Plex Sans (body), loaded from Google Fonts.
The footer build stamp reads `GITHUB_SHA` at build time and falls back to `dev` locally.

## Adding a note
Create `src/pages/blog/my-post.md`:
```md
---
layout: ../../layouts/Post.astro
title: My post
description: One line for the index and RSS.
date: 2026-09-03
---
```
Set `draft: true` to keep it out of the index and feed.
