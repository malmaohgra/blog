# Maram Mohammed — personal blog

A small Arabic (RTL) blog built with [Astro](https://astro.build).
Posts are Markdown files. When I push to GitHub, the site rebuilds and publishes by itself.

## Stack
- Astro 5, static output, no client-side framework
- Posts as a Markdown content collection, checked by a schema
- GitHub Actions + GitHub Pages for deploy
- Dark mode, responsive layout, optimized images

## Run locally
Needs Node 22.19 or newer.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output goes to ./dist
```

## Add a post
1. Create a folder in `src/content/posts/`. The folder name is the URL, so use English letters and dashes.
2. Put an `index.md` and a cover image in it.

```md
---
title: Post title
date: 2026-10-22
caption: One or two lines about the post
quote: Optional quote shown under the cover
cover: ./cover.jpg
---

The post text. Use ## for a sub-heading.
```

| Field | Required | Used for |
|---|---|---|
| `title` | yes | Heading and cards |
| `date` | yes | Sorting and display |
| `caption` | yes | Short text on the home page |
| `quote` | no | Blue quote under the cover |
| `cover` | no | Card and post image (a placeholder shows if missing) |

Push to `main` and the site updates in a minute or two.

## Project structure
```
src/
  config.ts        site name, description, Instagram link
  content/posts/   the posts (one folder each)
  layouts/         page shell (head, header, footer)
  components/      Header, Footer, Card
  pages/           home, all posts, about, post page, 404
  styles/          global.css (colors are variables at the top)
```

## Deploy
Repo name `USERNAME.github.io`, then Settings → Pages → Source: GitHub Actions.
Set `site` in `astro.config.mjs` to your address (or your own domain later).
The workflow is in `.github/workflows/deploy.yml`.
