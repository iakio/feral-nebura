# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview production build locally

## Deployment

This project is configured for Firebase Hosting with automatic deployment:

- **Hosting Platform**: Firebase Hosting
- **Project ID**: `feral-nebura`
- **Auto-deploy**: GitHub Actions workflow deploys on push to main branch
- **Build Output**: `dist/` directory (Vite build output)
- **Configuration**: `firebase.json` and `.firebaserc`

### Manual Deployment

```bash
npm run build
firebase deploy
```

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
   - Generates 10 questions at game start for consistent gameplay
3. **Results Screen** - Final score with detailed question-by-question breakdown

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
- `src/components/GameScreen.jsx` - Quiz gameplay component with question generation
- `src/components/ResultsScreen.jsx` - Score display with detailed results breakdown
- `src/data/emojiData.js` - Emoji dataset with names and categories
- `src/data/emojiHelpers.js` - Utility functions for question generation and options
- `generate-emojis.js` - Script to generate emoji data from unicode-emoji package
- `vite.config.js` - Vite configuration with React plugin
- `eslint.config.js` - ESLint configuration using flat config format
- `firebase.json` - Firebase Hosting configuration
- `.firebaserc` - Firebase project configuration
- `.github/workflows/` - GitHub Actions for automatic deployment

### ESLint Configuration

The project uses the new ESLint flat config format with:
- JavaScript recommended rules
- React Hooks recommended rules
- React Refresh for Vite
- Custom rule: unused variables starting with uppercase are ignored

### Data Architecture

- **Emoji Data**: Split into separate files for better maintainability
  - `emojiData.js`: Pure data array with emoji objects
  - `emojiHelpers.js`: Helper functions for game logic
- **Game Logic**: Question generation happens at game start (10 questions)
- **State Management**: Single source of truth using results array
- **Score Calculation**: Derived from question results, not stored separately

### File Conventions

- Use `.jsx` extension for React components
- ES6+ syntax with modules
- React functional components with hooks
- CSS modules available via import
- Separate data and logic into focused files