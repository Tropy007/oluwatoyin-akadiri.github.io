# Publish the portfolio on GitHub Pages

## 1. Create the repository

Create a public repository in your GitHub account. Recommended names:

- `portfolio` for a project site at `https://YOUR-USERNAME.github.io/portfolio/`
- `YOUR-USERNAME.github.io` for a primary user site at `https://YOUR-USERNAME.github.io/`

Do not place the website inside an extra nested folder. `index.html` must be visible at the repository root.

## 2. Upload the site

Extract `Oluwatoyin_Akadiri_GitHub_Pages.zip`, then upload all extracted files and folders to the repository root. Confirm that the repository contains:

- `index.html`
- `styles.css`
- `script.js`
- `.nojekyll`
- `assets/`
- `case-studies/`
- `strategy.html`
- `cloud.html`

Commit the upload to the `main` branch.

## 3. Enable GitHub Pages

1. Open the repository's **Settings**.
2. Select **Pages** under **Code and automation**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and `/ (root)` folder.
5. Save and wait for GitHub to display the published URL.

## 4. Verify the published portfolio

- The OA logo and profile picture load.
- Home, Portfolio, About me, and Experience navigation works.
- The animated role line changes without moving surrounding content.
- Project filters show the correct project cards.
- Strategy and Cloud pages open from the project filters and cards.
- Tableau, Zerve, LinkedIn, email, and case-study links open correctly.
- View CV and Download CV open the current resume.
- The theme switch, mobile navigation, and Back to top control work.
- No page or asset returns a GitHub Pages 404 error.

## Updating the site later

Replace the changed files in the repository and commit to `main`. GitHub Pages republishes after the commit. To update only the resume, replace `assets/Oluwatoyin_Akadiri_CV.pdf` without changing its filename.
