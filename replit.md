# VyomGarud - Advanced UAV Systems Landing Page

## Overview

VyomGarud is a landing page for an advanced UAV (Unmanned Aerial Vehicle) systems company, showcasing military-grade drone technology and capabilities. The application presents a modern, high-tech aesthetic inspired by aerospace and defense industry websites, featuring product showcases, company information, and a contact form for lead generation.

The project is built as a full-stack web application with a React frontend and Express backend, designed to provide an immersive, visually striking experience that emphasizes precision engineering and tactical capabilities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework Choice: React with Vite**
- React provides component-based architecture for building the interactive landing page
- Vite offers fast development builds and optimized production bundles
- TypeScript ensures type safety across the component tree

**UI Component Library: shadcn/ui**
- Pre-built, accessible components based on Radix UI primitives
- Tailwind CSS integration for styling with a custom design system
- "New York" style variant chosen for modern, professional aesthetics
- Components are locally installed (not imported from npm), allowing full customization

**Styling Approach: Tailwind CSS**
- Utility-first CSS framework for rapid UI development
- Custom design system with aerospace/military-inspired color palette:
  - Primary accent: Orange (#ff7b00) for CTAs and highlights
  - Dark backgrounds: Charcoal gradients (#1a1a1a to #0f0f0f)
  - Custom spacing, typography, and color tokens defined in tailwind.config.ts
- CSS variables for theming support (light/dark modes)

**Animation: Framer Motion**
- Used for page transitions and element animations
- Fade-in effects and staggered animations enhance the premium feel
- Subtle interactions improve user engagement

**Design System**
- Typography hierarchy using Inter (primary) and Poppins (accents)
- Consistent spacing units (4, 6, 8, 12, 16, 20, 24) for visual rhythm
- Grid-based layouts for product cards (responsive 1/2/3 columns)
- Hero section with full viewport height and parallax-ready structure

### Backend Architecture

**Server Framework: Express.js**
- Lightweight Node.js web framework for API routes
- Middleware for JSON parsing and request logging
- Custom error handling for validation and server errors

**API Design: REST**
- `/api/contact` - POST endpoint for contact form submissions
- `/api/contact` - GET endpoint to retrieve all submissions
- Validation using Zod schemas shared between client and server

**Development vs Production**
- Development: Vite dev server with HMR (Hot Module Replacement)
- Production: Static file serving from dist/public
- Conditional middleware setup based on NODE_ENV

### Data Storage

**Current Implementation: In-Memory Storage**
- `MemStorage` class implements `IStorage` interface
- Contact submissions stored in JavaScript Map structures
- User data structure defined but not actively used in current implementation
- Data persists only during server runtime (resets on restart)

**Database Schema Design (Drizzle ORM)**
- PostgreSQL-compatible schema defined using Drizzle ORM
- Tables:
  - `users`: id, username, password (prepared for future authentication)
  - `contact_submissions`: id, name, email, company, message, createdAt
- Schema uses `gen_random_uuid()` for primary keys
- Timestamps default to `now()` for created_at fields

**Database Configuration**
- Drizzle Kit configured for PostgreSQL dialect
- Migrations output to `./migrations` directory
- Schema location: `./shared/schema.ts`
- Connection via DATABASE_URL environment variable
- Currently using `@neondatabase/serverless` for Neon PostgreSQL support

**Migration Strategy**
- Schema changes managed through Drizzle Kit
- `npm run db:push` command for pushing schema changes
- Type-safe database queries through Drizzle ORM

### Validation & Type Safety

**Schema Validation: Zod**
- Runtime validation for contact form inputs
- Schemas defined in `shared/schema.ts` and shared between client/server
- Type inference from Zod schemas ensures type safety
- `drizzle-zod` integration for automatic schema generation from database tables

**TypeScript Configuration**
- Strict mode enabled for maximum type safety
- Path aliases configured: `@/` for client, `@shared/` for shared code
- ESNext module system with bundler resolution
- Incremental compilation for faster builds

### Form Management

**React Hook Form**
- Declarative form state management
- Integrated with Zod for validation via `@hookform/resolvers`
- Reduces boilerplate for form handling
- Built-in error handling and field validation

### State Management

**TanStack Query (React Query)**
- Server state management for API calls
- Automatic caching and background refetching disabled (staleTime: Infinity)
- Custom query functions with error handling
- Mutations for POST requests with optimistic updates

### Routing

**Wouter**
- Lightweight client-side routing (~1.2KB)
- Simple declarative route definitions
- Hash-based or history API routing
- Minimalist alternative to React Router

### Asset Management

**Static Assets**
- Images stored in `attached_assets/generated_images/`
- Vite alias `@assets` for clean imports
- Five drone images for hero and product sections:
  - Military drone hero shot
  - Tactical surveillance drone
  - Autonomous delivery drone
  - Reconnaissance UAV system
  - Tactical combat drone

### Build System

**Development Build**
- Vite dev server with HMR
- TypeScript compilation on-the-fly
- Replit-specific plugins for runtime error overlay and dev banner

**Production Build**
- Frontend: Vite builds to `dist/public`
- Backend: esbuild bundles server to `dist/index.js`
- ESM module format throughout
- External packages not bundled on server side

### Session Management

**Prepared Infrastructure**
- `connect-pg-simple` for PostgreSQL session storage
- Session schema ready for implementation
- Currently not actively used (no authentication flow)

## External Dependencies

### Database Service
- **Neon PostgreSQL**: Serverless PostgreSQL database
  - Accessed via `@neondatabase/serverless` driver
  - Connection string required in DATABASE_URL environment variable
  - Drizzle ORM configured for Neon compatibility

### UI Component Library
- **Radix UI**: Headless component primitives
  - Accordion, Dialog, Dropdown Menu, Select, Toast, and 20+ other components
  - Accessible by default with WAI-ARIA compliance
  - Unstyled for full customization

### Styling & Utilities
- **Tailwind CSS**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **clsx & tailwind-merge**: Class name utilities

### Form & Validation
- **React Hook Form**: Form state management
- **Zod**: Schema validation
- **zod-validation-error**: User-friendly error messages

### Icons
- **Lucide React**: Icon library (Target, Navigation, Shield, ChevronRight used in UI)

### Date Handling
- **date-fns**: Modern date utility library

### Fonts
- **Google Fonts**: 
  - Inter (primary typography)
  - Poppins (accent typography)
  - DM Sans, Fira Code, Geist Mono (additional options loaded)

### Development Tools
- **Replit Plugins**: Runtime error modal, cartographer, dev banner
- **PostCSS**: CSS processing with Tailwind and Autoprefixer

### Third-Party Services (Prepared)
- **PostgreSQL Session Store**: Ready for user authentication implementation
- **Neon Database**: Cloud PostgreSQL for production data persistence