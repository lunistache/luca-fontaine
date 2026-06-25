# Luca Fontaine — Website

A static portfolio site for actor & dialect coach **Luca Fontaine**. No build step, no
dependencies — just plain HTML, CSS and JavaScript.

## Preview locally

Double-click `index.html`, or for a proper local server (recommended, so paths resolve cleanly):

```powershell
# from this folder
python -m http.server 8000
# then open http://localhost:8000
```

## File structure

```
index.html          # the page (English text is the in-markup fallback)
styles.css          # all styling
i18n.js             # translations + language switcher (EN · IT · FR · ES)
script.js           # nav, scroll reveals, gallery lightbox
assets/
  favicon.svg       # LF monogram
  img/              # web-optimized photos (rotated + resized from /pictures)
  cv/               # downloadable résumés (PDF, EN/FR/IT)
pictures/           # ORIGINAL full-resolution photos (untouched, not used by the site)
cv/                 # ORIGINAL CV PDFs (untouched)
```

> The site only references files in `assets/`. The original `pictures/` and `cv/`
> folders are kept as your archive — you can delete them from any deployed copy.

## Deploy (free options)

**Netlify Drop** — go to <https://app.netlify.com/drop> and drag this whole folder in.
Live in seconds, gives you a URL you can later point a custom domain at.

**GitHub Pages** — push the folder to a repo, then Settings → Pages → deploy from the
`main` branch root.

**Vercel / Cloudflare Pages** — import the folder; no framework, output directory is the root.

## Languages

The site ships in **English, Italian, French and Spanish**. The switcher (EN · IT · FR · ES)
sits in the top-right of the nav; the choice is remembered in the browser and the site also
auto-picks a visitor's language on first visit, falling back to English.

To edit wording, open `i18n.js` — every piece of text is keyed (e.g. `hero.tag`). The English
copy written directly in `index.html` is the fallback if a key is ever missing. Proper nouns
(production titles, names, networks) are intentionally left untranslated.

## Editing content

- **Credits**: edit the `<ul class="credits__list">` blocks in `index.html`.
- **Featured film**: the *Blue or Green* section (`#film`) embeds the YouTube video; swap the
  `T8Qv0-MVrf4` ID to change it.
- **Coaching**: edit the `<article class="coach">` cards.
- **Photos**: drop a new optimized JPG in `assets/img/` and reference it. To re-optimize a
  new original, the resize/rotate step used `System.Drawing` (max long edge 2000px, quality 85).
- **Contact / links**: the `#contact` section near the bottom of `index.html`.

## Notes

- Fonts (Fraunces + Inter) load from Google Fonts.
- Fully responsive; respects `prefers-reduced-motion`.
- Photos display upright everywhere — EXIF rotation was baked into the optimized copies.
