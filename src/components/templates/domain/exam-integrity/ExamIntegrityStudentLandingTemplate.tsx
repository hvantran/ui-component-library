import React from 'react';
import { cn } from '../../../../utils/cn';
import { AppTopBar } from '../../../organisms/AppTopBar';

export interface FilterItem {
  label: string;
  value: string;
}

export interface ExamIntegrityStudentLandingTemplateProps {
  studentName?: string;
  studentRole?: string;
  pageTitle?: string;
  pageSubtitle?: string;
  filters?: FilterItem[];
  activeFilter?: string;
  onFilterChange?: (filterValue: string) => void;
  sidebarSlot?: React.ReactNode;
  children: React.ReactNode;
  onLogout?: () => void;
  className?: string;
}

export const ExamIntegrityStudentLandingTemplate: React.FC<
  ExamIntegrityStudentLandingTemplateProps
> = ({
  studentName = 'Student',
  studentRole = 'Student',
  pageTitle = 'My Assigned Exams',
  pageSubtitle = 'Select an ongoing examination to begin.',
  filters = [],
  activeFilter = 'all',
  onFilterChange,
  sidebarSlot,
  children,
  onLogout,
  className,
}) => {
  return (
    <div className={cn('min-h-screen bg-gray-50 dark:bg-gray-900', className)}>
      <AppTopBar
        title="Exam Integrity Student Portal"
        userSlot={
          <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200">
            <span className="font-semibold">{studentName}</span>
            {studentRole && <span className="text-xs text-gray-500">({studentRole})</span>}
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
        {sidebarSlot && (
          <aside className="w-64 fixed inset-y-16 left-0 z-30 overflow-y-auto bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
            {sidebarSlot}
          </aside>
        )}
        <main
          className={cn(
            'flex-1 min-h-[calc(100vh-4rem)] p-6 overflow-y-auto',
            sidebarSlot ? 'ml-64' : 'max-w-7xl mx-auto',
          )}
        >
          <div className="max-w-7xl mx-auto space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">{pageTitle}</h1>
              {pageSubtitle && (
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{pageSubtitle}</p>
              )}
            </div>

            {filters.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {filters.map((f) => (
                  <button
                    key={f.value}
                    type="button"
                    onClick={() => onFilterChange?.(f.value)}
                    className={cn(
                      'px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors',
                      activeFilter === f.value
                        ? 'bg-blue-600 text-white'
                        : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700',
                    )}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            )}

            <div>{children}</div>
          </div>
        </main>
      </div>
    </div>
  );
};

ExamIntegrityStudentLandingTemplate.displayName = 'ExamIntegrityStudentLandingTemplate';
export default ExamIntegrityStudentLandingTemplate;
