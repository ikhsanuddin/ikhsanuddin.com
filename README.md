# Ikhsanuddin Portfolio - Senior Software Engineer

A modern, dark-themed portfolio website built with Next.js 16, React 19, TypeScript, and Tailwind CSS. Inspired by the Apex template design with full PWA support.

## Features

- ✨ Modern dark UI with smooth animations and gradient effects
- 📱 Fully responsive single-page design
- 🎨 Tailwind CSS for styling
- 📦 Next.js 16.0.10 with React 19
- 🔄 PWA support with offline functionality
- 🐳 Docker support with watch mode
- 🚀 Optimized performance

## Tech Stack

- **Framework**: Next.js 16.0.10
- **UI Library**: React 19
- **Language**: TypeScript 5.7
- **Styling**: Tailwind CSS 3.4
- **Icons**: React Icons
- **PWA**: next-pwa

## Getting Started

### Prerequisites

- Node.js 20.x (LTS)
- npm

### Installation

1. Install dependencies:
```bash
npm install --legacy-peer-deps
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Docker Setup

### Using Docker Compose with Watch Mode

Start the development server with hot reload:
```bash
docker compose watch
```

This will:
- Use Node.js 20 Alpine image
- Sync your code changes automatically
- Run the dev server on port 3000

Alternative standard docker compose:
```bash
docker compose up
```

### Build for Production

```bash
docker build -t ikhsanuddin-portfolio .
docker run -p 3000:3000 ikhsanuddin-portfolio
```

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── page.tsx           # Main homepage with new design
│   │   ├── layout.tsx         # Root layout
│   │   ├── globals.css        # Global styles
│   │   └── ~offline/          # PWA offline page
│   └── components/            # Reusable components
├── public/
│   ├── manifest.json          # PWA manifest
│   └── grid.svg               # Background pattern
├── docker-compose.yml         # Docker compose config
├── Dockerfile                 # Docker image config
└── next.config.js             # Next.js config with PWA
```

## Key Sections

1. **Hero Section** - Introduction with animated background and navigation dots
2. **Summary** - Professional overview
3. **Experience** - Work history with timeline visualization
4. **Skills & Tools** - Technical expertise in organized grid
5. **Contact** - Get in touch section with download CV button

## PWA Features

- ✅ Offline support
- ✅ Install prompt
- ✅ Service worker caching
- ✅ Offline fallback page
- ✅ Mobile app-like experience

## Build & Deploy

### Production Build

```bash
npm run build
npm start
```

### Deploy to Netlify

The project includes `netlify.toml` configuration. Simply connect your repository to Netlify for automatic deployments.

## Customization

Update the content in `src/app/page.tsx` with your:
- Name and title
- Professional summary
- Work experience
- Skills and tools
- Contact information

## License

All rights reserved © 2025 Ikhsanuddin

---

Built with ❤️ using Next.js and Tailwind CSS
