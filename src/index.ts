import './styles/index.css';

declare const __LIB_VERSION__: string;

export const VERSION: string =
  typeof __LIB_VERSION__ !== 'undefined' ? __LIB_VERSION__ : '0.1.0';

// Utilities
export { cn } from './utils/cn';

// Types & Metadata Foundation
export * from './types';

// Atomic Design Components
export * from './components/atoms';
export * from './components/molecules';
export * from './components/organisms';
export * from './components/templates';
