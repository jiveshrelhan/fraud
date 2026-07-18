# Ajaykumar Photography — Public Warning Site

Static website documenting the Ajay Kumar E / Ajaykumar Photography consumer fraud case.

## Deploy to GitHub Pages

1. Create a new GitHub repository (e.g. `ajaykumar-photography-warning`)
2. Push this `docs/` folder contents:

```bash
cd docs
git init
git add .
git commit -m "Add fraud exposure website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

3. Go to **Repository Settings → Pages**
4. Set **Source** to `Deploy from branch`
5. Set **Branch** to `main` and folder to `/docs` (or move files to root and use `/root`)
6. Save — site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO/`

## Alternative: docs at root

If you prefer the site at the repo root, move all files from `docs/` to the repository root and set GitHub Pages source to `/root`.

## Files

- `index.html` — Main page
- `css/style.css` — Styles
- `js/main.js` — Interactions (lightbox, scroll reveal)
- `assets/` — Payment screenshots and delivery-failure evidence

## Adding Google Reviews

When you have Google review screenshots, add them to `assets/` and duplicate an `evidence-card` block in the Evidence section of `index.html`.

## Note on Media

This site intentionally excludes samples of Ajay's delivered work (photos/reels) to keep focus on the fraud evidence — payments, broken promises, and chat proof only.
