import { Menu, Moon, Sun } from 'lucide-react';
import React from 'react';
import { cn } from '../../../utils/cn';

export interface AppTopBarProps {
  title?: React.ReactNode;
  logo?: React.ReactNode;
  breadcrumbs?: React.ReactNode;
  searchSlot?: React.ReactNode;
  actionsSlot?: React.ReactNode;
  userSlot?: React.ReactNode;
  onMenuToggle?: () => void;
  isDarkMode?: boolean;
  onThemeToggle?: () => void;
  className?: string;
}

export const AppTopBar: React.FC<AppTopBarProps> = ({
  title,
  logo,
  breadcrumbs,
  searchSlot,
  actionsSlot,
  userSlot,
  onMenuToggle,
  isDarkMode = false,
  onThemeToggle,
  className,
}) => {
  return (
    <header
      role="banner"
      className={cn(
        'sticky top-0 z-40 w-full h-16 border-b border-secondary-200 dark:border-secondary-800 bg-surface-card-light/95 dark:bg-surface-card-dark/95 backdrop-blur font-sans',
        className
      )}
    >
      <div className="flex items-center justify-between h-full px-4 sm:px-6">
        {/* Left: Mobile Menu, Logo & Title */}
        <div className="flex items-center gap-3">
          {onMenuToggle && (
            <button
              type="button"
              aria-label="Toggle navigation menu"
              onClick={onMenuToggle}
              className="p-2 rounded-btn text-secondary-600 dark:text-secondary-300 hover:bg-secondary-100 dark:hover:bg-secondary-800 focus:outline-none focus:ring-2 focus:ring-primary-500/20 md:hidden"
            >
              <Menu className="w-5 h-5" />
            </button>
          )}

          {logo && <div className="flex items-center">{logo}</div>}

          {title && (
            <div className="font-semibold text-base text-secondary-900 dark:text-white">
              {title}
            </div>
          )}

          {breadcrumbs && (
            <div className="hidden lg:flex items-center ml-4 pl-4 border-l border-secondary-200 dark:border-secondary-700">
              {breadcrumbs}
            </div>
          )}
        </div>

        {/* Center: Search Slot */}
        {searchSlot && (
          <div className="hidden sm:flex flex-1 max-w-md mx-4">
            {searchSlot}
          </div>
        )}

        {/* Right: Actions, Theme Toggle, User Profile */}
        <div className="flex items-center gap-2 sm:gap-3">
          {actionsSlot && <div className="flex items-center gap-1.5">{actionsSlot}</div>}

          {onThemeToggle && (
            <button
              type="button"
              aria-label={isDarkMode ? 'Switch to light theme' : 'Switch to dark theme'}
              onClick={onThemeToggle}
              className="p-2 rounded-btn text-secondary-500 hover:text-secondary-900 dark:text-secondary-400 dark:hover:text-white hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          )}

          {userSlot && <div className="flex items-center">{userSlot}</div>}
        </div>
      </div>
    </header>
  );
};

AppTopBar.displayName = 'AppTopBar';
export default AppTopBar;
