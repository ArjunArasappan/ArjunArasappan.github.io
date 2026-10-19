# Arjun Arasappan — research website

A minimal Astro site with a single-page homepage and a Markdown blog. Built with plain Astro and CSS; no client-side JavaScript is required.

## Development

Use Node.js 22.12 or newer (recommended).

```sh
npm install
npm run dev
```

Run `npm run build` to check types and generate the static site in `dist/`. Run `npm run preview` to preview that build.

## Editing the site

- `src/data/site.ts`: name, bio, contact information, profile links, research, experience, projects, and publications.
- `src/pages/index.astro`: homepage structure.
- `src/layouts/BaseLayout.astro`: shared page metadata, Google Fonts, and footer.
- `src/styles/global.css`: colors, typography, spacing, and mobile styles.

Before publishing, replace the example email, review the sample bio and research descriptions, and fill in roles, dates, projects, and publications. Empty profile/publication URLs render as muted text until supplied. For the CV, add `public/cv.pdf` and set its URL to `/cv.pdf`.

## Writing

Add Markdown files to `src/content/blog/`:

```md
---
title: "A new research note"
description: "A short introduction to the post."
date: 2026-09-11
draft: false
---

Your post goes here.
```

The filename becomes the URL (for example, `research-note.md` becomes `/blog/research-note/`). Posts are sorted newest first at `/blog`. Drafts are excluded from both the index and generated post pages, including in development. Set `draft: false` to preview a post locally. The schema is in `src/content.config.ts`.

The example post is sample content; edit or remove it before publishing. EB Garamond loads from Google Fonts, with Georgia as an offline fallback.
