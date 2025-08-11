# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview production build locally

## Project Architecture

This is an Emoji Quiz Game built with React + Vite:

- **Frontend Framework**: React 19.1.1 with modern hooks and features
- **Build Tool**: Vite 7.1.0 for fast development and optimized builds
- **Styling**: Tailwind CSS for utility-first styling
- **Module System**: ES modules (type: "module" in package.json)
- **Linting**: ESLint with React hooks and refresh plugins

### Game Architecture

The game consists of three main screens optimized for mobile/smartphone display:

1. **Title Screen** - Welcome/start screen
2. **Game Screen** - Main quiz gameplay with two modes:
   - Emoji → Name: Show emoji, choose correct name
   - Name → Emoji: Show name, choose correct emoji
3. **Results Screen** - Final score and replay option

### UI/UX Guidelines

- **Target Device**: Smartphone/mobile-first design
- **Screen Size**: Optimized for mobile viewport (320px-480px width)
- **Touch-Friendly**: Large buttons and touch targets (min 44px)
- **Responsive**: Single column layout for mobile screens
- **Styling**: Tailwind CSS utility classes for consistent design
- **Color Scheme**: Mobile-friendly colors with good contrast

### Key Files

- `src/main.jsx` - Application entry point, renders App in StrictMode
- `src/App.jsx` - Main application component with game state management
- `src/components/TitleScreen.jsx` - Welcome screen component
- `src/components/GameScreen.jsx` - Quiz gameplay component
- `src/components/ResultsScreen.jsx` - Score display component
- `src/data/emojis.js` - Emoji data with names and categories
- `vite.config.js` - Vite configuration with React plugin
- `eslint.config.js` - ESLint configuration using flat config format

### ESLint Configuration

The project uses the new ESLint flat config format with:
- JavaScript recommended rules
- React Hooks recommended rules
- React Refresh for Vite
- Custom rule: unused variables starting with uppercase are ignored

### File Conventions

- Use `.jsx` extension for React components
- ES6+ syntax with modules
- React functional components with hooks
- CSS modules available via import