# ikhsanuddin.com

Personal portfolio & blog of Ikhsanuddin Syamsuri — Senior Full-Stack Engineer.

Built with [Astro](https://astro.build), [Tailwind CSS v4](https://tailwindcss.com), and [MDX](https://mdxjs.com). Fully static output.

## Features

- ⚡ Astro static site — zero JS by default, tiny inline scripts for theme & menu only
- 📝 Blog powered by Astro Content Collections (MDX)
- 🌗 Dark/light theme with no-flash inline script + `localStorage`
- 🎨 Tailwind CSS v4 via `@tailwindcss/vite`
- 🗺️ Automatic sitemap via `@astrojs/sitemap`
- 🐳 Docker support (dev server + nginx production image)

## Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start dev server at `localhost:4321`         |
| `npm run build`   | Build the production site to `./dist/`       |
| `npm run preview` | Preview the production build locally         |

## Project structure

```
src/
├─ content/blog/      # MDX blog posts (Content Collections)
├─ content.config.ts  # Collection schema
├─ layouts/Base.astro # HTML shell, meta tags, theme script
├─ components/        # Header, Footer, PostCard, icons…
├─ pages/             # index, blog, blog/[slug], blog/category/[category],
│                     # projects, about/ikhsanuddin, 404
├─ styles/global.css  # Tailwind v4 theme + global styles
└─ utils/format.ts    # Date helpers
```

## Deploy

Netlify: builds with `npm run build`, publishes `dist/` (see `netlify.toml`).

Docker: `docker compose up` for dev, or build the `runner` target for an nginx static image.
