# Pratham Pachapur: Portfolio
Plain HTML/CSS/JS, no build step, no backend.

## Tree
index.html · favicon.svg · css/style.css · js/data.js (all content) · js/main.js (rendering) · assets/ (add me.jpg, og.png, resume.pdf, project images)

## Edit content
Open `js/data.js`. Replace every `[ADD: ...]` placeholder. Nothing else needs touching.

## Swap images
Put files in `assets/`. Profile photo: replace the `.photo` div in `main.js` with `<img src="assets/me.jpg" alt="Pratham Pachapur">`. Project images: same idea in the `.ph` div. Add `assets/og.png` (1200x630) for link previews.

## Resume
Drop `resume.pdf` into `assets/` and set `links.resume` to `assets/resume.pdf`.

## Contact form
Uses `mailto:` (set `email` in data.js). For Formspree, swap the submit handler for a fetch POST to your form URL.

## Deploy
GitHub Pages: push folder, Settings → Pages → main branch / root. Netlify/Vercel: drag the folder or connect the repo; no build command, publish dir `.`
