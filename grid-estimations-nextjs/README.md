# Grid Estimations — Next.js

GitHub-ready Next.js/React conversion of the supplied website. It preserves the original production interface and adds server-rendered SEO metadata, canonical tags, Open Graph/Twitter metadata, JSON-LD, sitemap, robots.txt, and Google Search Console verification.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy to GitHub Pages

1. Create a new GitHub repository and upload all files from this project.
2. Use `main` as the default branch.
3. In **Settings → Pages**, set **Source** to **GitHub Actions**.
4. Push to `main`. The included workflow builds and deploys the static site automatically.

The configuration automatically supports both `username.github.io` repositories and normal project repositories such as `username.github.io/repository-name/`.

## Custom domain

Update the URLs in `app/layout.jsx`, `app/page.jsx`, `app/robots.js`, and `app/sitemap.js` when using a domain other than `https://gridestimations.com`.

## Notes

The supplied upload contained a compiled Vite/React production bundle, not original component source. This repository runs that exact production interface inside Next.js while providing server-rendered SEO content and GitHub Pages export support.
