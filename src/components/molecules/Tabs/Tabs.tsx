import React from 'react';
import { cn } from '../../../utils/cn';

export interface TabItem {
  id: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  badge?: React.ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  tabs: TabItem[];
  activeTab: string;
  onChange: (tabId: string) => void;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  onChange,
  className,
}) => {
  return (
    <div
      role="tablist"
      aria-label="Tabs"
      className={cn(
        'flex items-center gap-1 border-b border-secondary-200 dark:border-secondary-800 overflow-x-auto no-scrollbar',
        className
      )}
    >
      {tabs.map((tab) => {
        const isActive = tab.id === activeTab;
        return (
          <button
            key={tab.id}
            role="tab"
            type="button"
            id={`tab-${tab.id}`}
            aria-selected={isActive}
            aria-controls={`tabpanel-${tab.id}`}
            disabled={tab.disabled}
            onClick={() => onChange(tab.id)}
            className={cn(
              'group relative inline-flex items-center gap-2 py-3 px-4 text-sm font-medium transition-colors outline-none whitespace-nowrap',
              isActive
                ? 'text-primary-600 dark:text-primary-400 font-semibold'
                : 'text-secondary-600 dark:text-secondary-400 hover:text-secondary-900 dark:hover:text-white',
              tab.disabled && 'opacity-40 cursor-not-allowed hover:text-secondary-600 dark:hover:text-secondary-400'
            )}
          >
            {tab.icon && (
              <span className={cn('w-4 h-4', isActive ? 'text-primary-600 dark:text-primary-400' : 'text-secondary-400')}>
                {tab.icon}
              </span>
            )}
            <span>{tab.label}</span>
            {tab.badge && <span className="ml-1">{tab.badge}</span>}
            {isActive && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600 dark:bg-primary-400 rounded-full" />
            )}
          </button>
        );
      })}
    </div>
  );
};

Tabs.displayName = 'Tabs';
export default Tabs;
