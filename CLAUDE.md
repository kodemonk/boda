# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Wedding website for Alejandro & Elvira. Single-page React application with sections for event details, RSVP, accommodations, and travel information.

## Commands

```bash
npm run dev      # Start development server (Vite)
npm run build    # Production build to dist/
npm run preview  # Preview production build locally
```

## Deployment

- Hosted on **Netlify** at https://alexyelvira.com
- **IMPORTANTE**: Auto-deploy desde GitHub NO funciona. Siempre desplegar manualmente con:

```bash
npm install && netlify deploy --build --prod
```

- El proyecto ya está vinculado a Netlify (site: `boda-alex-elvira`)
- Build output: `dist/` directory

## Architecture

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS with custom color palette (`primary`, `accent`) and fonts (`display`, `body`)
- **Structure**: Single-page app with section components in `src/components/`

### Component Flow (App.jsx)

```
Header → Hero → Countdown → NuestraHistoria → Ubicacion → Alojamientos → ComoLlegar → Preboda → RSVP → Footer
```

### Assets

- `/public/images/` - Wedding photos
- `/public/` - Hotel images, favicon, OG image
