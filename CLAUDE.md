# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Korean luxury watch (Rolex) buy-back service landing page. Full-stack TypeScript with React frontend and Express backend. Quote submissions integrate with Google Sheets for tracking.

## Commands

```bash
npm run dev       # Start dev server (port 5000, Vite HMR enabled)
npm run build     # Build client (Vite) and server (esbuild) for production
npm run start     # Run production build
npm run check     # TypeScript type checking (strict mode)
```

## Architecture

### Client-Server Structure
- **Frontend:** React 18 + Vite in `client/`
- **Backend:** Express.js in `server/`
- **Shared:** Types in `shared/schema.ts`
- **Routing:** Wouter for SPA routes (`/`, `/quote`), Express for `/api/*`

### Deployment Options
Two deployment paths with separate Google Sheets integrations:
1. **Replit:** Uses `server/lib/googleSheets.ts` with Replit Connectors OAuth
2. **Cloudflare Pages:** Uses `functions/api/quote.ts` with service account credentials via environment variables (`GOOGLE_SERVICE_ACCOUNT_EMAIL`, `GOOGLE_PRIVATE_KEY`)

### Path Aliases (tsconfig)
- `@/*` → `client/src/*`
- `@shared/*` → `shared/*`

## Key Patterns

### API Requests
Use `apiRequest` from `client/src/lib/queryClient.ts`:
```typescript
const response = await apiRequest("POST", "/api/quote", data);
```

### Styling
- Tailwind CSS with CSS variables for theming
- Primary color: #F1591E (orange)
- Font: Pretendard Variable (Korean-optimized)
- Class merging: Use `cn()` from `client/src/lib/utils.ts`
- See `design_guidelines.md` for UI specifications

### UI Components
shadcn/ui components in `client/src/components/ui/` built on Radix UI primitives.

## Important Files

- `client/src/App.tsx` - Routing and providers
- `server/routes.ts` - Express API endpoints
- `functions/api/quote.ts` - Cloudflare Pages Function for Google Sheets
- `client/src/pages/landing.tsx` - Main marketing page
- `server/lib/googleSheets.ts` - Google Sheets (Replit environment)

## Notes

- Database (Drizzle/PostgreSQL) is configured but not actively used
- All UI text is in Korean
