import React from 'react';
import { AppSwitcher, AppSwitcherItem } from '../../AppSwitcher';
import { cn } from '../../../../utils/cn';

export const EXAM_INTEGRITY_APP_BAR_HEIGHT = 64;

export interface ExamIntegrityTopBarProps {
  appTitle?: string;
  userName?: string;
  showSearch?: boolean;
  onSearch?: (query: string) => void;
  onNotifications?: () => void;
  onHelp?: () => void;
  onLogout?: () => void;
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
        'fixed top-0 left-0 right-0 h-16 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-6 font-sans',
        className
      )}
    >
      <span className="font-bold text-2xl text-blue-700 dark:text-blue-400 select-none tracking-tight">
        {appTitle}
      </span>
      <div className="flex items-center gap-4">
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
        {userName && (
          <div className="ml-2 flex items-center gap-2">
            <span className="font-semibold text-gray-700 dark:text-gray-200 text-sm">{userName}</span>
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-bold text-sm">
              {initials}
            </span>
          </div>
        )}
      </div>
    </header>
  );
};

ExamIntegrityTopBar.displayName = 'ExamIntegrityTopBar';
export default ExamIntegrityTopBar;

