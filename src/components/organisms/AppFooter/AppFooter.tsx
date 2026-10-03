import React from 'react';
import { cn } from '../../../utils/cn';

export interface AppFooterProps {
  appName?: string;
  version?: string;
  statusText?: string;
  isOnline?: boolean;
  links?: Array<{ label: string; href: string }>;
  className?: string;
}

export const AppFooter: React.FC<AppFooterProps> = ({
  appName = 'Project Management Platform',
  version,
  statusText = 'All systems operational',
  isOnline = true,
  links = [],
  className,
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className={cn(
        'w-full py-4 px-4 sm:px-6 border-t border-secondary-200 dark:border-secondary-800 bg-surface-card-light dark:bg-surface-card-dark text-xs text-secondary-500 dark:text-secondary-400 font-sans',
        className
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* Left: Status & App name */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5" title={statusText}>
            <span
              className={cn(
                'w-2 h-2 rounded-full',
                isOnline ? 'bg-success-500 animate-pulse' : 'bg-error-500'
              )}
            />
            <span className="font-medium text-secondary-700 dark:text-secondary-300">
              {statusText}
            </span>
          </div>

          <span className="text-secondary-300 dark:text-secondary-700">|</span>

          <span>
            &copy; {currentYear} {appName}
            {version && <span className="ml-1 opacity-75">v{version}</span>}
          </span>
        </div>

        {/* Right: Quick Links */}
        {links.length > 0 && (
          <nav aria-label="Footer Navigation" className="flex items-center gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </footer>
  );
};

AppFooter.displayName = 'AppFooter';
export default AppFooter;
