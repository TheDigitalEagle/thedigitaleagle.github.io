# Kullhem.io — Astro on GitHub Pages

## Local dev
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Deploy on GitHub Pages
This repo includes `.github/workflows/pages.yml`. After pushing to `main`, GitHub Actions builds `dist/` and publishes it to Pages.

In your repo settings:
1. **Pages** → Source: **GitHub Actions**.
2. (Optional) **Custom domain**: `kullhem.io`. For apex DNS, set A records to:
   - 185.199.108.153
   - 185.199.109.153
   - 185.199.110.153
   - 185.199.111.153
   If using a subdomain (e.g., `www.kullhem.io`), add a `CNAME` pointing to `<username>.github.io`.
3. The `public/CNAME` file ensures the domain persists across deploys.

## Where to add content
- Home: `src/pages/index.astro`
- Blog index: `src/pages/blog/index.astro`
- First post: `src/pages/blog/hello-world.md`
- Global layout & styles: `src/layouts/Base.astro`
- Static files: `public/`