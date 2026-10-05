import { LayoutGrid } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '../../../utils/cn';

export interface AppSwitcherItem {
  id: string;
  name: string;
  url: string;
  iconSrc?: string;
  icon?: React.ReactNode;
  isCurrentApp?: boolean;
}

export interface AppSwitcherProps {
  items?: AppSwitcherItem[];
  currentAppId?: string;
  title?: string;
  onNavigate?: (item: AppSwitcherItem) => void;
  className?: string;
  triggerClassName?: string;
  popoverClassName?: string;
}

export const DEFAULT_PLATFORM_APPS: AppSwitcherItem[] = [
  {
    id: 'template-manager',
    name: 'Templates',
    url: '/templates',
    iconSrc: '/template-manager.png',
  },
  {
    id: 'action-manager',
    name: 'Actions',
    url: '/actions',
    iconSrc: '/action-manager.png',
  },
  {
    id: 'endpoint-collector',
    name: 'Collector',
    url: '/endpoints',
    iconSrc: '/data-collection.png',
  },
  {
    id: 'exam-integrity',
    name: 'Exam Integrity',
    url: '/',
    iconSrc: '/exam-integrity.png',
  },
];

export const AppSwitcher: React.FC<AppSwitcherProps> = ({
  items = DEFAULT_PLATFORM_APPS,
  currentAppId,
  title = 'Applications',
  onNavigate,
  className,
  triggerClassName,
  popoverClassName,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleSelectApp = (item: AppSwitcherItem) => {
    setIsOpen(false);
    if (onNavigate) {
      onNavigate(item);
    } else {
      window.location.href = item.url;
    }
  };

  return (
    <div className={cn('relative', className)} ref={containerRef}>
      <button
        type="button"
        title="App switcher"
        aria-label="App switcher"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className={cn(
          'p-2 rounded-btn text-secondary-500 hover:text-secondary-900 dark:text-secondary-400 dark:hover:text-white hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors',
          isOpen && 'bg-secondary-100 dark:bg-secondary-800 text-secondary-900 dark:text-white',
          triggerClassName
        )}
      >
        <LayoutGrid className="w-5 h-5" />
      </button>

      {isOpen && (
        <div
          role="dialog"
          aria-label="Application Switcher"
          className={cn(
            'absolute right-0 mt-2 w-80 p-4 rounded-xl border border-secondary-200 dark:border-secondary-800 bg-surface-card-light dark:bg-surface-card-dark shadow-xl z-50',
            popoverClassName
          )}
        >
          <div className="text-xs font-semibold text-secondary-500 dark:text-secondary-400 uppercase tracking-wider mb-3 px-1">
            {title}
          </div>
          <div className="grid grid-cols-2 gap-3">
            {items.map((item) => {
              const isCurrent =
                item.isCurrentApp ?? (currentAppId !== undefined && item.id === currentAppId);

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleSelectApp(item)}
                  className={cn(
                    'flex flex-col items-center gap-2 p-3 rounded-lg border transition text-center group cursor-pointer',
                    isCurrent
                      ? 'border-primary-500 bg-primary-50/70 dark:bg-primary-950/40 text-primary-900 dark:text-primary-100 ring-1 ring-primary-500'
                      : 'border-secondary-100 dark:border-secondary-800 hover:bg-secondary-50 dark:hover:bg-secondary-800/60 text-secondary-900 dark:text-secondary-100'
                  )}
                >
                  {item.icon ? (
                    <div className="w-10 h-10 flex items-center justify-center text-primary-600 dark:text-primary-400 group-hover:scale-105 transition-transform">
                      {item.icon}
                    </div>
                  ) : item.iconSrc ? (
                    <img
                      alt={item.name}
                      src={item.iconSrc}
                      className="w-10 h-10 object-contain group-hover:scale-105 transition-transform"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-lg bg-secondary-100 dark:bg-secondary-800 flex items-center justify-center font-bold text-sm text-secondary-600 dark:text-secondary-300 group-hover:scale-105 transition-transform">
                      {item.name.slice(0, 2).toUpperCase()}
                    </div>
                  )}
                  <span className="text-xs font-medium truncate max-w-full">
                    {item.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

AppSwitcher.displayName = 'AppSwitcher';
export default AppSwitcher;
