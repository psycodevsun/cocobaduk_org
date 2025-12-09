# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 중요 규칙
- **모든 대답은 반드시 한글로 작성할 것**

## Project Overview

코코바둑 온라인 바둑학원 - A promotional website for an online Baduk (Go) academy. Single-page marketing site built with React 19 + Vite + TypeScript + Tailwind CSS.

## Development Commands

```bash
npm run dev        # Start dev server (localhost:3000)
npm run build      # Production build (outputs to /out)
npm run preview    # Preview production build
npm run lint       # Run ESLint
npm run lint:fix   # Run ESLint with auto-fix
```

## Architecture

### Tech Stack
- React 19 with SWC for fast compilation
- Vite 7 build tool
- TypeScript 5.8
- Tailwind CSS 3.4
- react-router-dom for routing
- react-i18next for internationalization

### Auto-Import Configuration
Vite is configured with `unplugin-auto-import` - React hooks, router hooks, and i18n hooks are automatically imported. No manual imports needed for: `useState`, `useEffect`, `useNavigate`, `useTranslation`, etc.

### Path Alias
`@/` is aliased to `./src/` directory.

### Key Files
- `src/main.tsx` - App entry point with Vercel Analytics
- `src/App.tsx` - Root component with BrowserRouter
- `src/router/config.tsx` - Route definitions
- `src/router/index.ts` - AppRoutes component with global navigate exposed to `window.REACT_APP_NAVIGATE`
- `src/i18n/local/index.ts` - Dynamic translation loading via `import.meta.glob`

### Page Structure
Single landing page (`src/pages/home/page.tsx`) composed of section components:
- Navbar, Hero, Features, Reviews, Instructor, OnlineAdvantages, BrainDevelopment, LearningProcess, Curriculum, Pricing, CTA, WhyOnline, Testimonials, Footer

### i18n Translation Files
Place translation files at `src/i18n/local/{lang}/{filename}.ts` - they are auto-loaded via glob import pattern.

### Build Configuration
- `BASE_PATH` env var controls app base path (defaults to `/`)
- `IS_PREVIEW` env var for preview mode detection
- Build output goes to `/out` directory (not default `/dist`)

### Deployment
- Hosted on Vercel with automatic deployments from main branch
- `vercel.json` contains deployment configuration
