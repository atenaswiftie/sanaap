# Sanaap

A modern React application built with TypeScript, Vite, and Material-UI, featuring a comprehensive UI component library and robust development tooling.

## 🚀 Features

- **React 18** with TypeScript for type safety
- **Vite** for fast development and building
- **Material-UI (MUI)** for consistent UI components
- **TanStack Router** for client-side routing
- **React Query** for server state management
- **React Hook Form** with Yup validation
- **Zustand** for client state management
- **Custom UI Components** with comprehensive design system
- **Docker** support for development and production

## 📋 Prerequisites

- **Node.js** >= 18.16.0
- **pnpm** >= 8.6.0
- **Docker** (optional, for containerized development)

## 🛠️ Installation

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sanaap
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   ```

The application will be available at `http://localhost:6030`

### Docker Development

1. **Build and run with Docker Compose**
   ```bash
   docker-compose --profile dev up
   ```

2. **Or build and run manually**
   ```bash
   docker build --target development -t sanaap-dev .
   docker run -p 6030:6030 -v $(pwd):/app sanaap-dev
   ```

## 🏗️ Project Structure

```
sanaap/
├── src/
│   ├── apis/                 # API layer with React Query
│   ├── assets/              # Static assets (fonts, images)
│   ├── components/          # Reusable UI components
│   │   ├── DataDisplay/     # Display components (Typography, List, etc.)
│   │   ├── Feedback/        # Alert, Snackbar, Error handling
│   │   ├── Inputs/          # Form inputs (Button, TextField, etc.)
│   │   └── Navigation/      # Navigation components
│   ├── domains/             # Feature-based organization
│   │   ├── app/            # Main app components
│   │   └── signup/         # Signup flow components
│   ├── hooks/              # Custom React hooks
│   ├── icons/              # Icon components (SVG and React)
│   ├── routes/             # Route definitions
│   ├── styles/             # Global styles and theme
│   ├── utils/              # Utility functions
│   └── widgets/            # Complex UI widgets
├── public/                 # Public assets
├── scripts/               # Build and generation scripts
└── Docker files           # Docker configuration
```

## 🚀 Deployment

### Production Build
```bash
pnpm build
```

### Docker Production
```bash
docker build --target production -t sanaap-prod .
docker run -p 80:80 sanaap-prod
```
