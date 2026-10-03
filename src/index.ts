import './styles/index.css';

declare const __LIB_VERSION__: string;

export const VERSION: string =
  typeof __LIB_VERSION__ !== 'undefined' ? __LIB_VERSION__ : '0.1.0';

// Utilities
export { cn } from './utils/cn';

// Atomic Components
export * from './components/atoms';

// Molecule Components
export * from './components/molecules';
