import { Moon, Sun } from 'lucide-react';
import React from 'react';
import { cn } from '../../../utils/cn';

export interface DarkModeToggleProps {
  isDark: boolean;
  onToggle: () => void;
  variant?: 'switch' | 'button';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  ariaLabel?: string;
}

const sizeClasses = {
  sm: {
    track: 'w-10 h-5',
    thumb: 'w-4 h-4',
    thumbTranslate: 'translate-x-5',
    icon: 'w-3 h-3',
    button: 'p-1.5',
  },
  md: {
    track: 'w-12 h-6',
    thumb: 'w-5 h-5',
    thumbTranslate: 'translate-x-6',
    icon: 'w-3.5 h-3.5',
    button: 'p-2',
  },
  lg: {
    track: 'w-14 h-7',
    thumb: 'w-6 h-6',
    thumbTranslate: 'translate-x-7',
    icon: 'w-4 h-4',
    button: 'p-2.5',
  },
};

export const DarkModeToggle: React.FC<DarkModeToggleProps> = ({
  isDark,
  onToggle,
  variant = 'switch',
  size = 'md',
  className,
  ariaLabel = 'Toggle dark mode',
}) => {
  const currentSize = sizeClasses[size];

  if (variant === 'button') {
    return (
      <button
        type="button"
        role="button"
        aria-label={ariaLabel}
        title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        onClick={onToggle}
        className={cn(
          'inline-flex items-center justify-center rounded-btn transition-colors text-secondary-600 dark:text-secondary-300 hover:bg-secondary-100 dark:hover:bg-secondary-800 focus:outline-none focus:ring-2 focus:ring-primary-500/20',
          currentSize.button,
          className
        )}
      >
        {isDark ? (
          <Sun className={cn(currentSize.icon, 'text-amber-500')} />
        ) : (
          <Moon className={cn(currentSize.icon, 'text-secondary-600')} />
        )}
      </button>
    );
  }

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={ariaLabel}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={onToggle}
      className={cn(
        'relative inline-flex shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500/20',
        isDark ? 'bg-primary-600' : 'bg-secondary-300 dark:bg-secondary-700',
        currentSize.track,
        className
      )}
    >
      <span
        className={cn(
          'pointer-events-none flex items-center justify-center transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out',
          isDark ? currentSize.thumbTranslate : 'translate-x-0.5',
          currentSize.thumb,
          'my-auto'
        )}
      >
        {isDark ? (
          <Moon className={cn(currentSize.icon, 'text-primary-600')} />
        ) : (
          <Sun className={cn(currentSize.icon, 'text-amber-500')} />
        )}
      </span>
    </button>
  );
};

DarkModeToggle.displayName = 'DarkModeToggle';
export default DarkModeToggle;
