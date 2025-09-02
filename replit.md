# Portfolio Website

## Overview

This is a full-stack portfolio website for a developer named Alex Johnson. The application is built as a single-page application (SPA) showcasing professional experience, projects, skills, and contact information. It features a modern, responsive design with smooth scrolling navigation and interactive components.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development patterns
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with a custom design system using CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible components
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Form Handling**: React Hook Form with Zod validation for type-safe form validation
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for full-stack type safety
- **Architecture Pattern**: RESTful API with modular route organization
- **Storage Interface**: Abstracted storage layer with in-memory implementation (MemStorage class)
- **Development**: Hot module replacement and error overlay for development experience

### Data Storage Solutions
- **Database**: PostgreSQL configured via Drizzle ORM
- **ORM**: Drizzle ORM with type-safe schema definitions and migrations
- **Schema**: User table with username/password fields and UUID primary keys
- **Validation**: Zod schemas for runtime type validation integrated with Drizzle

### Component Structure
- **Layout**: Single-page application with sections for Hero, About, Projects, Contact, and Footer
- **Navigation**: Sticky navigation with smooth scrolling and active section highlighting
- **Responsive Design**: Mobile-first approach with breakpoint-specific adaptations
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation support

### Development Setup
- **Monorepo Structure**: Shared schema and types between client and server
- **Path Aliases**: Configured for cleaner imports (@/, @shared/, @assets/)
- **Development Tools**: ESBuild for server bundling, PostCSS for CSS processing
- **Environment**: Development and production configurations with appropriate optimizations

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form for modern React development
- **Routing**: Wouter for lightweight SPA routing
- **Query Management**: TanStack React Query for server state and caching

### Database and ORM
- **Database**: Neon Database (PostgreSQL) for cloud-hosted database
- **ORM**: Drizzle ORM with Drizzle Kit for migrations and schema management
- **Validation**: Zod for runtime type validation and schema generation

### UI and Styling
- **CSS Framework**: Tailwind CSS for utility-first styling
- **UI Components**: Radix UI primitives for accessible, unstyled components
- **Component Library**: shadcn/ui for pre-built, customizable components
- **Icons**: Lucide React for consistent iconography
- **Fonts**: Google Fonts (Inter) and Font Awesome for typography and icons

### Development Tools
- **Build Tools**: Vite with React plugin for fast development and builds
- **TypeScript**: Full TypeScript support with strict configuration
- **Development**: Replit-specific plugins for error handling and debugging
- **Utilities**: clsx and tailwind-merge for conditional styling, date-fns for date manipulation

### Additional Libraries
- **Carousel**: Embla Carousel for image/content carousels
- **Animations**: CSS animations and transitions for smooth user interactions
- **Form Validation**: Integration between React Hook Form, Zod, and Radix UI components