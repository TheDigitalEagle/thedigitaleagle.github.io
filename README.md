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
- Lab copy (tagline, focus areas, philosophy, tools): `src/data/lab.ts`
- Project list: `src/data/projects.ts` (hand-curated; add an entry when a repo is worth showing)
- Home: `src/pages/index.astro`
- Projects page: `src/pages/projects.astro`
- Notes (blog): `src/pages/blog/*.md` with `layout: ../../layouts/Post.astro` and a `date` in frontmatter
- RSS: `src/pages/rss.xml.ts`
- Global layout and styles: `src/layouts/Base.astro`
- Logo assets and favicon: `public/`

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
