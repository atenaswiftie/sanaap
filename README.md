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

## 🎨 UI Components

The project includes a comprehensive component library:

### Data Display
- **Typography** - Text components with consistent styling
- **List/ListItem** - List components with various layouts
- **Badge** - Status indicators and labels
- **Chip** - Compact information display
- **Stepper** - Multi-step process indicators

### Inputs
- **Button** - Various button styles and states
- **TextField** - Text input with validation
- **Select** - Dropdown selection components
- **Checkbox/Radio** - Selection controls
- **Switch** - Toggle controls
- **Slider** - Range selection
- **ConfirmationCodeInput** - OTP input component

### Navigation
- **BottomNavBar** - Mobile navigation
- **BottomSheet** - Slide-up panels
- **Breadcrumbs** - Navigation hierarchy
- **Tabs** - Tabbed interfaces

### Feedback
- **Alert** - Status messages
- **Snackbar** - Toast notifications
- **ErrorBoundary** - Error handling
- **Loading** - Loading indicators

## 🎯 Available Scripts

```bash
# Development
pnpm dev              # Start development server
pnpm build            # Build for production
pnpm preview          # Preview production build

# Code Quality
pnpm lint             # Run ESLint
pnpm generate-icons   # Generate icon components

# Git Hooks
pnpm prepare          # Install Husky hooks
pnpm commitlint       # Validate commit messages
```

## 🐳 Docker

### Development Mode
```bash
docker-compose --profile dev up
```

### Production Mode
```bash
docker-compose --profile prod up
```

### Custom Ports
```bash
# Development on different port
docker run -p 3000:6030 sanaap-dev

# Production on different port
docker run -p 8080:80 sanaap-prod
```

For detailed Docker instructions, see [README-Docker.md](./README-Docker.md).

## 🎨 Theming

The project uses a custom Material-UI theme with:

- **Persian/Farsi** font support (PeydaWeb)
- **RTL** layout support
- **Custom color palette**
- **Responsive breakpoints**
- **Component-specific styling**

### Theme Configuration
```typescript
// src/styles/theme/
├── constants.ts          # Theme constants
├── GlobalThemeProvider.tsx # Theme provider
├── components/           # Component-specific themes
└── system/              # Design system tokens
```

## 🔧 Configuration

### Vite Configuration
- **React plugin** with Fast Refresh
- **TypeScript** support with path mapping
- **TanStack Router** integration
- **Development server** on port 6030
- **Preview server** on port 4173

### TypeScript Configuration
- **Strict mode** enabled
- **Path mapping** for clean imports
- **Bundler mode** for Vite compatibility

### ESLint Configuration
- **TypeScript-aware** linting
- **React-specific** rules
- **Strict type checking**

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
