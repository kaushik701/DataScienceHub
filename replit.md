# Portfolio Application

## Overview

This is a modern, responsive portfolio website built for Kaushik Iyer, a Data Scientist and ML Engineer. The application showcases professional experience, skills, projects, education, and certifications in an interactive, visually appealing format. Built as a full-stack web application, it features a React frontend with shadcn/ui components and an Express.js backend with PostgreSQL database integration.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens and responsive design patterns
- **State Management**: TanStack Query (React Query) for server state management
- **Build Tool**: Vite for fast development and optimized production builds
- **Fonts**: Custom font integration with Google Fonts (Inter, DM Sans, Architects Daughter, Fira Code, Geist Mono)

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules for modern JavaScript features
- **API Design**: RESTful endpoints for contact form submission and resume download
- **Middleware**: Custom logging middleware for API request tracking
- **Error Handling**: Centralized error handling with proper HTTP status codes
- **Development**: Hot reload with Vite middleware integration

### Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle Kit for database migrations and schema evolution
- **Connection**: Neon Database serverless PostgreSQL for cloud hosting
- **Validation**: Zod schemas for runtime type validation and data integrity
- **Storage Interface**: Abstracted storage layer with in-memory fallback for development

### Database Schema
- **Users Table**: Basic user authentication structure with username/password
- **Contact Messages Table**: Stores contact form submissions with name, email, company, subject, message, and timestamp
- **Type Safety**: Full TypeScript integration with inferred types from database schema

### Component Architecture
- **Design System**: Consistent component library with variant-based styling
- **Accessibility**: ARIA compliance through Radix UI primitives
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Animation**: CSS-based animations and transitions for smooth user experience
- **Form Handling**: React Hook Form with Zod validation for robust form management

### Development Workflow
- **TypeScript Configuration**: Strict type checking with path mapping for clean imports
- **Code Quality**: ESLint and Prettier integration (inferred from project structure)
- **Build Process**: Separate client and server build pipelines
- **Environment Management**: Environment-specific configurations for development and production

## External Dependencies

### UI and Styling
- **Radix UI**: Complete suite of accessible UI primitives (@radix-ui/react-*)
- **Tailwind CSS**: Utility-first CSS framework with PostCSS processing
- **Class Variance Authority**: Type-safe component variants
- **Lucide React**: Consistent icon library
- **Embla Carousel**: Touch-friendly carousel component

### Data Management
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Performant form library with validation
- **Zod**: Runtime type validation and schema definition
- **Drizzle ORM**: Type-safe database operations
- **Drizzle Zod**: Integration between Drizzle and Zod for schema validation

### Backend Services
- **Neon Database**: Serverless PostgreSQL hosting
- **Connect PG Simple**: PostgreSQL session store for Express
- **Express.js**: Web application framework
- **TSX**: TypeScript execution for development

### Development Tools
- **Vite**: Fast build tool with HMR support
- **ESBuild**: Fast JavaScript bundler for production builds
- **Replit Integration**: Custom plugins for Replit development environment
- **Runtime Error Overlay**: Development error handling

### Third-party Integrations
- **Google Fonts**: Custom typography with multiple font families
- **Resume Download**: Placeholder API endpoint for PDF resume serving
- **Contact Form**: Email integration ready for service provider connection
- **Social Media**: LinkedIn integration for professional networking

### Cloud and Hosting
- **Database**: Neon serverless PostgreSQL
- **Environment Variables**: DATABASE_URL configuration for connection management
- **Session Management**: PostgreSQL-backed session storage
- **Static Assets**: Vite-optimized asset serving