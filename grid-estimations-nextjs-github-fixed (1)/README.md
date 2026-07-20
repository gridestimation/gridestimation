# Grid Estimations — Next.js Website

This repository is configured for automatic deployment to GitHub Pages.

## Publish on GitHub Pages

1. Create a new empty GitHub repository.
2. Extract this ZIP and upload **all files and folders from its root**. Do not upload the ZIP itself.
3. Make sure the default branch is named `main`.
4. Open **Settings → Pages** in the GitHub repository.
5. Under **Build and deployment**, select **GitHub Actions** as the source.
6. Open the **Actions** tab and wait for “Deploy Next.js website to GitHub Pages” to complete successfully.
7. Open the website URL shown in the completed deployment.

The deployment automatically supports both:

- Project sites: `https://username.github.io/repository-name/`
- User/organization sites: `https://username.github.io/`

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
```

The static website is generated in the `out` directory.
