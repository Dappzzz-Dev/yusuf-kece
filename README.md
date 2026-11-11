# Yusufa Ardanni Wibawa — Portfolio

One-page portfolio built with plain HTML, CSS and JavaScript. No build step.

## Run it
Open `index.html` in a browser, or serve the folder:

```bash
npm start          # serves on http://localhost:3000
# or
python -m http.server 8000
```

## Structure
```
index.html        markup for all sections
css/style.css     styles (tokens → sections → motion → responsive)
js/main.js        menu, active nav, scroll reveal, lightbox, copy handle
assets/img/       WebP images
assets/fonts/     self-hosted fonts
CLAUDE.md         project notes for AI-assisted updates
```

## Deploy
Any static host works (GitHub Pages, Netlify, Vercel). Publish the folder as-is.
`.claude/`, `skills-lock.json` and `node_modules/` are git-ignored on purpose.
