# Tuhin Dhar Portfolio Website

## Overview

This is a modern, responsive portfolio website for Tuhin Dhar, a Tech Lead and Full Stack Developer. The application showcases professional experience, projects, skills, and education through an elegant single-page application built with React. The site features smooth animations, dark theme styling, and a comprehensive overview of technical expertise across frontend, backend, and mobile development.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern component patterns
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management and caching
- **Styling**: Tailwind CSS with custom CSS variables for consistent theming and responsive design
- **UI Components**: Radix UI primitives with shadcn/ui component library for accessible, customizable components
- **Animations**: Framer Motion for smooth page transitions and scroll-triggered animations
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules for modern JavaScript features
- **Database ORM**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **Session Management**: connect-pg-simple for PostgreSQL-backed session storage
- **Development**: Hot module replacement and middleware logging for development experience

### Project Structure
- **Monorepo Layout**: Organized with separate `client/`, `server/`, and `shared/` directories
- **Shared Schema**: Common TypeScript types and Zod validation schemas in `shared/` directory
- **Component Organization**: UI components separated into reusable components and page-specific sections
- **Asset Management**: Static assets organized in `attached_assets/` directory
- **Configuration Management**: Centralized config files for build tools, TypeScript, and styling

### Design System
- **Theme**: Dark-first design with custom color palette using CSS custom properties
- **Typography**: Playfair Display for headings, Inter for body text
- **Color Scheme**: Deep navy, bright cyan accents, and neutral grays for professional appearance
- **Responsive Design**: Mobile-first approach with breakpoint-based responsive utilities
- **Animation Strategy**: Scroll-triggered animations with Intersection Observer for performance

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form with resolvers
- **Routing & Navigation**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state and caching

### UI & Design Dependencies
- **Component Library**: Complete Radix UI suite (Dialog, Dropdown, Toast, etc.)
- **Styling**: Tailwind CSS with PostCSS and Autoprefixer
- **Icons**: Lucide React for consistent iconography
- **Animation**: Framer Motion for smooth transitions and micro-interactions
- **Carousel**: Embla Carousel React for image/content sliders

### Backend Dependencies
- **Database**: Neon Database (PostgreSQL) with Drizzle ORM
- **Server Framework**: Express.js with TypeScript support
- **Session Management**: express-session with connect-pg-simple
- **Validation**: Zod for runtime type checking and schema validation
- **Utilities**: date-fns for date manipulation, clsx for conditional styling

### Development Dependencies
- **Build Tools**: Vite with React plugin and TypeScript support
- **Development**: tsx for TypeScript execution, esbuild for production builds
- **Code Quality**: TypeScript compiler for type checking
- **Replit Integration**: Replit-specific plugins for development environment

### Database Configuration
- **ORM**: Drizzle Kit for migrations and schema management
- **Connection**: Environment-based database URL configuration
- **Migration**: Automatic schema generation and migration support