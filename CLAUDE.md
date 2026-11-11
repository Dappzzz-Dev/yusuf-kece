# Yusufa Ardanni Wibawa — Portfolio

One-page personal portfolio website. **100% English copy.** Plain HTML + CSS + vanilla JS (no framework, no build step) — keep it light.

## What this site is
A web version of the owner's Canva design "Creative Part-Time Portfolio Website": long vertical scroll, each Canva slide became a section. Owner: first-semester D4 TRPL (Software Engineering Technology) student at Universitas Duta Bangsa Surakarta. Also called "Ucup" / "Fardan". Hobby: futsal. Design tool: Canva. Instagram: @yusupaabc.

## Section map (nav → id → content)
| Nav | id | Content |
|---|---|---|
| Home | `#home` | "HELLO GUYSS" hero, intro, round portrait pin, scroll-down |
| About Me | `#about` | About slide + hobby slide (futsal photos) |
| Tools | `#tools` | "CANVA APP" slide + "Movie Poster" design example (poster of the film *Gugat ing Pepesthen*, click to enlarge) |
| Blog | `#blog` | One article: "Love Blooms in the Dark" (English class drama observation, A Midsummer Night's Dream) with documentation photo |
| Contact | `#contact` | "SEND ME A MESSAGE" → Instagram link + copy-handle button |

## Files
- `index.html` — all markup (sections above)
- `css/style.css` — tokens in `:root`, then one block per section, motion, responsive
- `js/main.js` — mobile menu, active-nav highlight, scroll reveal, poster lightbox, copy handle
- `assets/video/futsal-match.mp4` — muted looping hobby video (720p, ~1.6 MB, no audio; plays only while visible)
- `assets/img/` — WebP images · `assets/fonts/` — self-hosted woff2 (Rozha One, Gloock, Caveat Brush, Fredoka, Hanken Grotesk)

## Design tokens (Canva palette)
cream `#fcf3e4` · peach `#ffe6cf` · orange-red `#f83e02` · yellow `#ffb12e` · coral `#ee6f5c` · green gradient `#86d94a→#bde46c` · aqua `#4fd2e8` / teal `#1d5c78`.
Fonts are free stand-ins for Canva's paid fonts (Benguiat → Rozha One / Gloock).

## Motion
Hero rise-in, scroll reveal (`data-reveal` = up / left / right / pop), floating bird, spinning flower, wobbling stars. Transform + opacity only. `prefers-reduced-motion` turns everything off.

## Rules for future edits
- Keep it lightweight: no frameworks, no heavy libraries. Images as WebP, always with `width`/`height` and alt text.
- Every new section needs an `id` and a nav link in `index.html` (the JS picks nav links up automatically).
- Copy stays in English.
- Do not publish `.claude/`, `skills-lock.json` or `node_modules/` (already in `.gitignore`).
- Not included on purpose: student ID (NIM) from the assignment, the template's placeholder e-mail.

## Project-level AI skills (installed in `.claude/skills`, git-ignored)
`design-taste-frontend` (anti-generic UI), `ui-ux-pro-max` + `design-system` (UI/UX rules, tokens), `animate`, `animation-performance`, `review-animations`, `emil-design-eng`, `motion-design` (motion), `design-dna` (extract style from reference images), `no-ai-slop` (natural English for blog posts).
Restore after a fresh clone: `npm run skills:restore`.
