import { Laptop, Moon, Sun } from 'lucide-react';
import React from 'react';
import { ThemeMode, useTheme } from '../../../theme/ThemeProvider';
import { cn } from '../../../utils/cn';

export interface ThemeModeToggleProps {
  mode?: ThemeMode;
  onModeChange?: (mode: ThemeMode) => void;
  variant?: 'button' | 'segmented';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  ariaLabel?: string;
}

const sizeClasses = {
  sm: {
    button: 'p-1.5',
    icon: 'w-3.5 h-3.5',
    segmentedBtn: 'px-2 py-1 text-xs',
  },
  md: {
    button: 'p-2',
    icon: 'w-4 h-4',
    segmentedBtn: 'px-2.5 py-1.5 text-xs',
  },
  lg: {
    button: 'p-2.5',
    icon: 'w-5 h-5',
    segmentedBtn: 'px-3 py-2 text-sm',
  },
};

const MODE_OPTIONS: {
  mode: ThemeMode;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}[] = [
  { mode: 'light', label: 'Light', icon: Sun },
  { mode: 'dark', label: 'Dark', icon: Moon },
  { mode: 'system', label: 'System', icon: Laptop },
];

export const ThemeModeToggle: React.FC<ThemeModeToggleProps> = ({
  mode,
  onModeChange,
  variant = 'button',
  size = 'md',
  className,
  ariaLabel = 'Theme mode selector',
}) => {
  let contextTheme: ThemeMode | undefined;
  let contextSetTheme: ((m: ThemeMode) => void) | undefined;
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const ctx = useTheme();
    contextTheme = ctx.theme;
    contextSetTheme = ctx.setTheme;
  } catch {
    // Graceful fallback outside ThemeProvider
  }

  const activeMode: ThemeMode = mode ?? contextTheme ?? 'system';
  const handleModeChange = (newMode: ThemeMode) => {
    if (onModeChange) {
      onModeChange(newMode);
    } else if (contextSetTheme) {
      contextSetTheme(newMode);
    }
  };

  const currentSize = sizeClasses[size];

  if (variant === 'button') {
    const cycleNext = () => {
      const next: ThemeMode =
        activeMode === 'light' ? 'dark' : activeMode === 'dark' ? 'system' : 'light';
      handleModeChange(next);
    };

    return (
      <button
        type="button"
        aria-label={ariaLabel}
        title={`Theme: ${activeMode} (click to cycle)`}
        onClick={cycleNext}
        className={cn(
          'inline-flex items-center justify-center rounded-btn transition-colors text-secondary-600 dark:text-secondary-300 hover:bg-secondary-100 dark:hover:bg-secondary-800 focus:outline-none focus:ring-2 focus:ring-primary-500/20',
          currentSize.button,
          className
        )}
      >
        {activeMode === 'dark' ? (
          <Moon className={cn(currentSize.icon, 'text-secondary-400')} />
        ) : activeMode === 'light' ? (
          <Sun className={cn(currentSize.icon, 'text-amber-500')} />
        ) : (
          <Laptop className={cn(currentSize.icon, 'text-primary-500')} />
        )}
      </button>
    );
  }

  return (
    <div
      role="radiogroup"
      aria-label={ariaLabel}
      className={cn(
        'inline-flex items-center gap-1 p-1 rounded-xl bg-secondary-100 dark:bg-secondary-800 border border-secondary-200 dark:border-secondary-700',
        className
      )}
    >
      {MODE_OPTIONS.map(({ mode: optMode, label, icon: Icon }) => {
        const isActive = activeMode === optMode;
        return (
          <button
            key={optMode}
            type="button"
            role="radio"
            aria-checked={isActive}
            aria-label={`${label} theme`}
            title={`${label} theme`}
            onClick={() => handleModeChange(optMode)}
            className={cn(
              'flex items-center gap-1.5 rounded-lg font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-primary-500/20',
              currentSize.segmentedBtn,
              isActive
                ? 'bg-white dark:bg-secondary-700 text-primary-600 dark:text-primary-300 shadow-xs'
                : 'text-secondary-600 hover:text-secondary-900 dark:text-secondary-400 dark:hover:text-secondary-100'
            )}
          >
            <Icon className={currentSize.icon} />
            <span>{label}</span>
          </button>
        );
      })}
    </div>
  );
};

ThemeModeToggle.displayName = 'ThemeModeToggle';
export default ThemeModeToggle;

