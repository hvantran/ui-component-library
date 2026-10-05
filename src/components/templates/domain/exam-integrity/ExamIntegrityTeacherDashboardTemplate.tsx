import React from 'react';
import { cn } from '../../../../utils/cn';
import { AppTopBar } from '../../../organisms/AppTopBar';

export interface ExamIntegrityTeacherDashboardTemplateProps {
  userName?: string;
  userRole?: string;
  appTitle?: string;
  sidebar: React.ReactNode;
  children: React.ReactNode;
  onLogout?: () => void;
  className?: string;
}

export const ExamIntegrityTeacherDashboardTemplate: React.FC<
  ExamIntegrityTeacherDashboardTemplateProps
> = ({
  userName = 'Teacher',
  userRole = 'Teacher',
  appTitle = 'Exam Integrity Platform',
  sidebar,
  children,
  onLogout,
  className,
}) => {
  return (
    <div className={cn('min-h-screen bg-gray-50 dark:bg-gray-900', className)}>
      <AppTopBar
        title={appTitle}
        userSlot={
          <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200">
            <span className="font-semibold">{userName}</span>
            {userRole && <span className="text-xs text-gray-500">({userRole})</span>}
            {onLogout && (
              <button
                type="button"
                onClick={onLogout}
                className="ml-2 text-xs text-blue-600 hover:underline dark:text-blue-400"
              >
                Logout
              </button>
            )}
          </div>
        }
      />
      <div className="flex pt-16">
        <aside className="w-64 fixed inset-y-16 left-0 z-30 overflow-y-auto bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
          {sidebar}
        </aside>
        <main className="ml-64 flex-1 min-h-[calc(100vh-4rem)] p-6 overflow-y-auto">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
};

ExamIntegrityTeacherDashboardTemplate.displayName = 'ExamIntegrityTeacherDashboardTemplate';
export default ExamIntegrityTeacherDashboardTemplate;
