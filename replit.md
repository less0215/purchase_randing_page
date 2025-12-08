# SUN MOON Rolex Buy-Back Landing Page

## Overview

SUN MOON is a Korean-language landing page and quote submission system for a luxury Rolex watch buy-back service. The application targets Rolex owners who face difficulties selling their watches domestically due to overseas stamping, unpopular models, or privacy concerns around AD (Authorized Dealer) relationships. The platform emphasizes trust-building through credentialing, global market access, and confidential transactions while guiding users through a streamlined quote request process.

The application consists of two main pages:
1. **Landing Page** - Multi-section conversion-focused page that builds empathy, presents solutions, establishes trust, and explains the process
2. **Quote Form Page** - Dedicated form for collecting watch details and contact information

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Routing**
- React 18+ with TypeScript as the core framework
- Wouter for client-side routing (lightweight React Router alternative)
- Vite as the build tool and development server

**UI Component System**
- Shadcn/ui component library (New York style variant) providing accessible, customizable components built on Radix UI primitives
- Tailwind CSS for styling with custom design tokens
- Component library includes 40+ pre-built components (buttons, forms, dialogs, cards, etc.)

**State Management & Data Fetching**
- React Hook Form with Zod for form validation and type-safe schemas
- TanStack Query (React Query) for server state management
- Custom toast notification system using Radix UI Toast primitives

**Typography & Internationalization**
- Pretendard Variable font (Korean-optimized) as primary typeface
- Public Sans for English accents and numbers
- Korean language throughout with English for brand names and credentials
- Material Symbols Outlined icon system

**Design System**
- Custom CSS variables for theming (light mode primary)
- Primary brand color: #F1591E (orange)
- Neutral color palette with semantic color tokens
- Custom border radius system (9px/6px/3px)
- Elevation system using subtle shadows and opacity overlays

### Backend Architecture

**Server Framework**
- Express.js with TypeScript running on Node.js
- HTTP server created via Node's `http` module to support future WebSocket upgrades
- Custom middleware for request logging with timestamp formatting
- Static file serving for production builds

**Development Environment**
- Vite dev server in middleware mode for HMR (Hot Module Reload)
- Custom error overlay integration via Replit plugins
- Development banner and cartographer for Replit environment
- Source map support for debugging

**API Design**
- RESTful endpoint pattern (`/api/*` routes)
- Single POST endpoint at `/api/quote` for form submissions
- JSON request/response format
- Request body validation with error handling

**Build Process**
- esbuild for server-side bundling with selective dependency bundling
- Allowlist approach for critical dependencies to reduce cold start times
- Vite for client-side bundling with code splitting
- Separate `dist/` output for client and server

### Data Storage & Session Management

**In-Memory Storage**
- Custom `MemStorage` class implementing `IStorage` interface
- Map-based user storage (prepared for future authentication)
- No database dependency in current implementation
- User schema defined but unused (placeholder for future features)

**Schema Definition**
- Drizzle ORM configured for PostgreSQL (schema defined but not actively used)
- Type-safe schema generation using drizzle-zod
- Users table with UUID primary keys prepared for future implementation

### External Dependencies

**Google Sheets Integration**
- Quote form data submitted directly to Google Sheets via Google Sheets API
- OAuth2 authentication using Replit Connectors system
- Dynamic access token refresh with expiration checking
- Service account JSON credential stored in `attached_assets/` (should be in environment variables)

**Replit Connectors**
- Managed OAuth connection to Google Sheets
- Token refresh handled automatically through Replit's connector API
- Environment-aware authentication using `REPL_IDENTITY` or `WEB_REPL_RENEWAL` tokens

**Font & Icon CDNs**
- Google Fonts for Public Sans and Material Symbols
- jsDelivr CDN for Pretendard Variable font
- Preconnect hints for performance optimization

**Third-Party UI Libraries**
- Radix UI primitives (40+ component primitives)
- Embla Carousel for potential image galleries
- CMDK for command palette functionality (installed but unused)
- React Day Picker for date selection (installed but unused)

### Security & Validation

**Input Validation**
- Zod schemas for runtime type checking and validation
- React Hook Form resolver integration for form-level validation
- Server-side validation of required fields before Google Sheets submission

**Error Handling**
- Try-catch blocks around external API calls
- User-friendly Korean error messages
- Console error logging for debugging
- HTTP status codes (400 for validation, 500 for server errors)

### Asset Management

**Static Assets**
- Generated images stored in `attached_assets/` directory
- Vite alias `@assets` for asset imports
- Hero section uses luxury Rolex product photography
- Favicon support configured

**Build Output**
- Client builds to `dist/public/`
- Server bundles to `dist/index.cjs`
- Empty output directory on each build for clean deployments

### Development Tools

**TypeScript Configuration**
- Strict mode enabled
- Path aliases: `@/*` for client, `@shared/*` for shared code
- ESNext module system with bundler resolution
- Incremental compilation with build info caching

**Code Quality**
- Custom utility functions (`cn` for className merging)
- Consistent component patterns with forwardRef
- DisplayName assignments for debugging
- Test IDs on all major UI elements for future testing