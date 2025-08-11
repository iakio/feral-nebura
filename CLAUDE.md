# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview production build locally

## Project Architecture

This is a React + Vite project with the following structure:

- **Frontend Framework**: React 19.1.1 with modern hooks and features
- **Build Tool**: Vite 7.1.0 for fast development and optimized builds
- **Module System**: ES modules (type: "module" in package.json)
- **Linting**: ESLint with React hooks and refresh plugins

### Key Files

- `src/main.jsx` - Application entry point, renders App in StrictMode
- `src/App.jsx` - Main application component with counter demo
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