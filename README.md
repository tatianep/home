# tatianep.github.io/home

Personal site of **Tatiane Santos, Ph.D.** — quantum engineer & AI scientist at Microsoft Station Q.

**Live site »** [tatianep.github.io/home](https://tatianep.github.io/home)

## Stack

- [Astro 5](https://astro.build) — static output, zero JS by default; the only scripts shipped are the hero canvas, scroll reveals, and the live GitHub projects fetch
- Self-hosted variable fonts ([Fraunces](https://fraunces.undercase.xyz/), Inter, IBM Plex Mono) via Fontsource
- Hand-written canvas wave-interference animation (crests teal, troughs violet — physically honest), with `prefers-reduced-motion` support
- Deployed to GitHub Pages via GitHub Actions ([.github/workflows/deploy.yml](.github/workflows/deploy.yml))

## Editing content

All resume content — roles, publications, education, honors, skills — lives in one file:

```
src/data/profile.ts
```

The portrait is `src/assets/portrait.jpg`, the downloadable resume is `public/resume.pdf`.

## Commands

| Command       | Action                                        |
| ------------- | --------------------------------------------- |
| `npm install` | Install dependencies                          |
| `npm run dev` | Dev server at `localhost:4321/home`           |
| `npm run build` | Production build to `./dist/`              |
| `npm run og`  | Regenerate the social share card (`og.png`)   |

## Deploying

Pushing to `main` triggers the GitHub Actions workflow, which builds and publishes to GitHub Pages.

One-time setup: in the repo's **Settings → Pages**, set **Source** to **GitHub Actions** (replacing the old `gh-pages` branch deployment).
