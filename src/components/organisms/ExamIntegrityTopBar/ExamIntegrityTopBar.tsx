import React from 'react';
import { Menu } from 'lucide-react';
import { AppSwitcher, AppSwitcherItem } from '../AppSwitcher';
import { cn } from '../../../utils/cn';

export const EXAM_INTEGRITY_APP_BAR_HEIGHT = 64;

export interface ExamIntegrityTopBarProps {
  appTitle?: string;
  userName?: string;
  starCount?: number;
  showSearch?: boolean;
  onSearch?: (query: string) => void;
  onNotifications?: () => void;
  onHelp?: () => void;
  onLogout?: () => void;
  onMenuToggle?: () => void;
  appSwitcherItems?: AppSwitcherItem[];
  onNavigateApp?: (app: AppSwitcherItem) => void;
  className?: string;
}

const defaultPlatformApps: AppSwitcherItem[] = [
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

export const ExamIntegrityTopBar: React.FC<ExamIntegrityTopBarProps> = ({
  appTitle = 'Academic Management',
  userName,
  starCount,
  onMenuToggle,
  appSwitcherItems = defaultPlatformApps,
  onNavigateApp,
  className,
}) => {
  const initials = userName
    ? userName
        .trim()
        .split(/\s+/)
        .map((w) => w[0])
        .slice(0, 2)
        .join('')
        .toUpperCase()
    : 'U';

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 h-16 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-3 sm:px-6 font-sans',
        className
      )}
    >
      <div className="flex items-center gap-2 sm:gap-3 min-w-0">
        {onMenuToggle && (
          <button
            type="button"
            aria-label="Toggle navigation menu"
            onClick={onMenuToggle}
            className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none lg:hidden"
          >
            <Menu className="w-5 h-5" />
          </button>
        )}
        <span className="font-bold text-lg sm:text-2xl text-blue-700 dark:text-blue-400 select-none tracking-tight truncate">
          {appTitle}
        </span>
      </div>
      <div className="flex items-center gap-4">
        {starCount !== undefined && (
          <div
            data-testid="star-counter-badge"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-300 font-bold text-sm shadow-xs select-none"
          >
            <span className="text-base leading-none">⭐</span>
            <span>{starCount}</span>
          </div>
        )}
        {userName && (
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-700 dark:text-gray-200 text-sm">{userName}</span>
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-bold text-sm">
              {initials}
            </span>
          </div>
        )}
        <AppSwitcher
          items={appSwitcherItems}
          currentAppId="exam-integrity"
          onNavigate={(app) => {
            if (onNavigateApp) {
              onNavigateApp(app);
            } else {
              window.location.href = app.url;
            }
          }}
        />
      </div>
    </header>
  );
};

ExamIntegrityTopBar.displayName = 'ExamIntegrityTopBar';
export default ExamIntegrityTopBar;

