# Oluwatoyin Akadiri - Data Analyst Portfolio

A responsive, accessible portfolio for Oluwatoyin Akadiri, featuring healthcare analytics, business intelligence, Tableau dashboards, SQL and Python workflows, machine learning, market intelligence, and AWS cloud architecture.

## Live-site structure

- `index.html` - portfolio home, projects, experience, skills, education, and contact
- `strategy.html` - strategy and market-intelligence landing page
- `cloud.html` - MyClinic healthcare cloud architecture case study
- `case-studies/` - detailed project case studies
- `assets/` - logo, profile image, project visuals, architecture diagrams, and CV
- `styles.css` - complete responsive design system
- `script.js` - navigation, theme, project filters, section state, and role animation

## Publish with GitHub Pages

See [`GITHUB_PAGES_DEPLOY.md`](GITHUB_PAGES_DEPLOY.md) for the complete publishing checklist. The short version:

1. Create a public GitHub repository.
2. Upload every file and folder from this package to the repository root.
3. Open **Settings > Pages**.
4. Choose **Deploy from a branch**, select `main`, choose `/ (root)`, and save.

All paths are relative, so the portfolio works both on a user site such as `username.github.io` and a project site such as `username.github.io/repository-name/`.

## Local preview

Run `python3 -m http.server 8772` from this folder, then open `http://127.0.0.1:8772/`.

## Safety and maintenance

- The portfolio is a static website and requires no API key or database.
- Update the CV by replacing `assets/Oluwatoyin_Akadiri_CV.pdf` while keeping the filename stable.
- Keep project URLs and contact details current before each publication.
- `.nojekyll` tells GitHub Pages to serve the site without Jekyll processing.
