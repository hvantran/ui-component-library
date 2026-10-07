import React from 'react';
import { Download } from 'lucide-react';
import { Button } from '../../atoms/Button';
import { ExamIntegrityTopBar } from '../../organisms/ExamIntegrityTopBar';
import { ExamIntegrityTeacherDashboardSidebar } from '../../organisms/ExamIntegrityTeacherDashboardSidebar';
import type { ExamIntegrityDashboardSection } from '../ExamIntegrityTeacherDashboardTemplate';
import { cn } from '../../../utils/cn';

export interface ExamIntegrityTeacherReportsTemplateProps {
  activeSection?: ExamIntegrityDashboardSection;
  userName?: string;
  userRole?: string;
  activeTab?: number;
  tabs?: string[];
  onTabChange?: (tab: number) => void;
  onExport?: () => void;
  onNavigate?: (section: ExamIntegrityDashboardSection) => void;
  onSearch?: (query: string) => void;
  onNotifications?: () => void;
  onHelp?: () => void;
  onLogout?: () => void;
  children: React.ReactNode;
  className?: string;
}

export const ExamIntegrityTeacherReportsTemplate: React.FC<
  ExamIntegrityTeacherReportsTemplateProps
> = ({
  activeSection = 'reports',
  userName = '',
  userRole,
  activeTab = 0,
  tabs = ['Overview', 'Academic Integrity', 'Performance', 'Comparative Analysis'],
  onTabChange,
  onExport,
  onNavigate,
  onSearch,
  onNotifications,
  onHelp,
  onLogout,
  children,
  className,
}) => (
  <div className={cn('min-h-screen bg-gray-50 dark:bg-gray-950 font-sans', className)}>
    <ExamIntegrityTopBar
      userName={userName}
      onSearch={onSearch}
      onNotifications={onNotifications}
      onHelp={onHelp}
      onLogout={onLogout}
    />
    <ExamIntegrityTeacherDashboardSidebar
      activeSection={activeSection}
      userName={userName}
      userRole={userRole}
      onNavigate={onNavigate}
      onLogout={onLogout}
    />
    <div className="ml-[256px] pt-[64px] min-h-screen flex flex-col">
      {/* Page-level toolbar: tabs + export */}
      <div className="sticky top-[64px] z-20 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-6 pr-8">
        <div className="flex space-x-2 min-h-[48px]">
          {tabs.map((label, i) => (
            <Button
              key={i}
              variant="ghost"
              size="md"
              className={cn(
                'px-4 py-2 text-sm font-medium rounded-t focus:outline-none',
                activeTab === i
                  ? 'text-blue-700 dark:text-blue-400 border-b-2 border-blue-700 dark:border-blue-400 bg-gray-50 dark:bg-gray-800'
                  : 'text-gray-500 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400'
              )}
              onClick={() => onTabChange?.(i)}
              type="button"
            >
              {label}
            </Button>
          ))}
        </div>
        {onExport && (
          <Button
            icon={<Download size={18} />}
            variant="neutral"
            size="sm"
            onClick={onExport}
          >
            Export Report
          </Button>
        )}
      </div>
      <main className="flex-1 p-6 max-w-6xl mx-auto w-full">{children}</main>
    </div>
  </div>
);

ExamIntegrityTeacherReportsTemplate.displayName = 'ExamIntegrityTeacherReportsTemplate';
export default ExamIntegrityTeacherReportsTemplate;
