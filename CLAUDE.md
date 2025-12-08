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
npm run db:push   # Push Drizzle schema changes (database not actively used)
```

## Architecture

### Client-Server Structure
- **Frontend:** React 18 + Vite in `client/` directory
- **Backend:** Express.js in `server/` directory
- **Shared:** Zod schemas and types in `shared/schema.ts`
- **Routing:** Wouter for client SPA routing, Express for `/api/*` endpoints

### Key Data Flow
1. Quote form (`/quote` page) validates with Zod schema
2. TanStack Query mutation POSTs to `/api/quote`
3. Server appends data to Google Sheets via Replit Connectors OAuth
4. Success/error response returned to client

### Path Aliases (tsconfig)
- `@/*` → `client/src/*`
- `@shared/*` → `shared/*`
- `@assets` → `attached_assets/*`

## Key Patterns

### API Requests
Use the `apiRequest` wrapper from `client/src/lib/queryClient.ts`:
```typescript
const response = await apiRequest("POST", "/api/quote", data);
```

### Form Validation
Zod schemas define both client and server validation. See `shared/schema.ts` for shared types.

### UI Components
40+ shadcn/ui components in `client/src/components/ui/`. Uses Radix UI primitives with Tailwind CSS.

### Styling
- Tailwind CSS with CSS variables for theming
- Primary color: #F1591E (orange)
- Font: Pretendard Variable (Korean-optimized)
- Class merging: Use `cn()` from `client/src/lib/utils.ts`

## External Integrations

### Google Sheets
- OAuth handled by Replit Connectors (`REPLIT_CONNECTORS_HOSTNAME`)
- Implementation: `server/lib/googleSheets.ts`
- Spreadsheet ID hardcoded in the module

## Important Files

- `client/src/App.tsx` - Routing and providers
- `server/routes.ts` - API endpoints
- `client/src/pages/landing.tsx` - Main marketing page
- `client/src/components/QuoteForm.tsx` - Form with validation
- `server/lib/googleSheets.ts` - Google Sheets integration
- `design_guidelines.md` - UI/UX specifications

## Notes

- Database (Drizzle/PostgreSQL) is configured but not actively used
- `server/storage.ts` provides in-memory storage placeholder for future auth
- All UI text is in Korean
