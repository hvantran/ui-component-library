import { ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react';
import { cn } from '../../../utils/cn';

export interface NavItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  badge?: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  href?: string;
}

export interface NavGroup {
  heading?: string;
  items: NavItem[];
}

export interface AppSidebarProps {
  groups: NavGroup[];
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
  footerSlot?: React.ReactNode;
  className?: string;
}

export const AppSidebar: React.FC<AppSidebarProps> = ({
  groups,
  isCollapsed = false,
  onToggleCollapse,
  footerSlot,
  className,
}) => {
  return (
    <aside
      role="navigation"
      aria-label="Sidebar Navigation"
      className={cn(
        'relative flex flex-col h-full border-r border-secondary-200 dark:border-secondary-800 bg-surface-card-light dark:bg-surface-card-dark transition-all duration-300 font-sans',
        isCollapsed ? 'w-16' : 'w-64',
        className
      )}
    >
      {/* Navigation Groups */}
      <div className="flex-1 overflow-y-auto py-4 px-2 space-y-6">
        {groups.map((group, groupIdx) => (
          <div key={group.heading || groupIdx} className="space-y-1">
            {group.heading && !isCollapsed && (
              <h3 className="px-3 text-[11px] font-semibold tracking-wider uppercase text-secondary-400 dark:text-secondary-500 mb-2">
                {group.heading}
              </h3>
            )}
            <ul className="space-y-1">
              {group.items.map((item) => {
                const isActive = item.active;

                const content = (
                  <>
                    {item.icon && (
                      <span
                        className={cn(
                          'w-5 h-5 shrink-0 flex items-center justify-center transition-colors',
                          isActive
                            ? 'text-primary-600 dark:text-primary-400'
                            : 'text-secondary-400 group-hover:text-secondary-600 dark:group-hover:text-secondary-200'
                        )}
                      >
                        {item.icon}
                      </span>
                    )}
<span className={cn('flex-1 truncate text-left', isCollapsed && 'sr-only')}>
  {item.label}
</span>
                    {!isCollapsed && item.badge && <span>{item.badge}</span>}
                  </>
                );

                const itemClass = cn(
'group flex items-center gap-3 w-full px-3 py-2 text-sm font-medium rounded-btn transition-colors outline-none select-none focus:ring-2 focus:ring-primary-500/40 focus:ring-offset-1',
                  isActive
                    ? 'bg-primary-50 dark:bg-primary-950/40 text-primary-600 dark:text-primary-400 font-semibold'
                    : 'text-secondary-600 dark:text-secondary-400 hover:bg-secondary-100 dark:hover:bg-secondary-800/60 hover:text-secondary-900 dark:hover:text-white',
                  item.disabled && 'opacity-40 cursor-not-allowed hover:bg-transparent dark:hover:bg-transparent'
                );

                return (
                  <li key={item.id}>
{item.href && !item.disabled ? (
                      <a
                        href={item.href}
                        aria-current={isActive ? 'page' : undefined}
                        className={itemClass}
                      >
                        {content}
                      </a>
                    ) : (
                      <button
                        type="button"
                        disabled={item.disabled}
                        aria-current={isActive ? 'page' : undefined}
                        onClick={item.onClick}
                        className={itemClass}
                      >
                        {content}
                      </button>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      {/* Footer / User / Collapse Toggle */}
      <div className="p-3 border-t border-secondary-200 dark:border-secondary-800 flex items-center justify-between">
        {!isCollapsed && footerSlot && <div className="flex-1">{footerSlot}</div>}

        {onToggleCollapse && (
          <button
            type="button"
            aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            onClick={onToggleCollapse}
            className={cn(
              'p-1.5 rounded-btn border border-secondary-200 dark:border-secondary-700 text-secondary-500 hover:text-secondary-900 dark:hover:text-white hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors',
              isCollapsed && 'mx-auto'
            )}
          >
            {isCollapsed ? (
              <ChevronRight className="w-4 h-4" />
            ) : (
              <ChevronLeft className="w-4 h-4" />
            )}
          </button>
        )}
      </div>
    </aside>
  );
};

AppSidebar.displayName = 'AppSidebar';
export default AppSidebar;
