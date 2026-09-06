# chaabaneanas.github.io

Personal portfolio of **Anas Chaabane** — Full Stack Developer, Sousse, Tunisia.

Next.js 15 (App Router) · TypeScript · Tailwind CSS v4 · statically exported and served from GitHub Pages.

---

## Running it

```bash
npm install
npm run dev        # http://localhost:3000
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Static export into `out/` |
| `npm run serve` | Serve the built `out/` directory |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run lint` | ESLint |
| `npm run og` | Regenerate `public/og.png` and `public/og-fr.png` |

## Editing the content

**All copy lives in two files.** No text is hardcoded in a component.

- `src/content/en.ts` — English
- `src/content/fr.ts` — French

Both are typed against `src/content/types.ts`, so if you add a field to one and forget the other, `npm run typecheck` tells you.

Common edits:

| Change | Where |
| --- | --- |
| Availability pill ("Open to opportunities") | `hero.status` and `footer.availability` |
| Hero stats | `hero.stats` |
| A job | `experience.items` |
| A project **and its case study** | `work.projects[]` — one object holds the card *and* the whole write-up |
| Project order and numbering | Array order in `work.projects`. The `01`/`02` labels are derived from position — there is no number to keep in sync |
| **A project's live site / repo link** | **`src/content/links.ts`** — one entry per slug, language-neutral. Omit a field and no link renders |
| Skills | `stack.groups` |
| Contact details, social links | `src/lib/site.ts` |

Adding a project is a single object in **both** `work.projects` arrays; the route
`/work/<slug>/` and its French twin are generated from the slug automatically.
`en.ts` and `fr.ts` must list the same slugs in the same order — if they drift,
the build stops with a message naming both lists (`src/content/index.ts`) rather
than failing later with a 404 during prerendering.

Replacing a résumé PDF: drop the new file at `public/Anas_Chaabane_EN.pdf` or
`public/Anas_Chaabane_FR.pdf`, or change `SITE.resume` in `src/lib/site.ts`.
Both are always offered — the résumé button is a dropdown that lists the current
site language first.

## Environment

Copy `.env.example` to `.env.local`. Both variables are optional and public by design.

```
NEXT_PUBLIC_WEB3FORMS_KEY=   # contact form; without it the form falls back to mailto:
NEXT_PUBLIC_GITHUB_USER=     # defaults to ChaabaneAnas
```

Get a Web3Forms key at <https://web3forms.com> (free, no account). For the deployed
site, add it as a repository secret named `NEXT_PUBLIC_WEB3FORMS_KEY` —
Settings → Secrets and variables → Actions.

## Deploying

Pushing to `main` builds and publishes via `.github/workflows/deploy.yml`.

One-time setup: **Settings → Pages → Source → GitHub Actions**.

Two details this repo already handles, and that break Next on Pages if missed:

- `public/.nojekyll` — without it Jekyll strips the `_next/` directory and every asset 404s.
- No `basePath` — correct for a user site served from the domain root (a *project* site would need one).

## Structure

```
src/
  app/
    (en)/           English root layout → /, /work/<slug>/
    (fr)/           French root layout  → /fr/, /fr/work/<slug>/
    not-found.tsx   → 404.html
    sitemap.ts robots.ts
  components/
    layout/         Header, Footer, Chrome, ScrollProgress, SkipLink
    sections/       Hero, SelectedWork, Experience, StackGrid, About, Contact
    ui/             Section, Reveal, Chip, MonoLabel, ActionLink, CopyButton, Icons
  content/          en.ts, fr.ts, types.ts
  lib/              site.ts, routes.ts, metadata.ts, cn.ts
scripts/
  generate-og.mjs   social preview images
```

Two root layouts (one per route group) is what lets `/` be English and `/fr/` be
French while each document carries the right `<html lang>` — a single root layout
cannot vary that attribute.

## Notes on the front end

- **No animation library.** Entrance, reveal, nav indicator, mobile sheet and
  reading-progress bar are all CSS; the only scripted motion is a rAF that writes
  a transform for the hero spotlight and the work-list cursor preview.
- **Nothing depends on JavaScript to be visible.** The hero animates with CSS
  (`animation-fill-mode: both`) and scroll reveals are hidden only under
  `html.js`, a class set by an inline script. With JS off, the page renders in full.
- `prefers-reduced-motion` collapses every animation to its final frame.
- Colour pairs clear WCAG AA; focus rings are visible and the whole page is keyboard-navigable.
