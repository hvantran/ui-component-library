import React from 'react';
import { ExamIntegrityTopBar } from '../../organisms/domain/exam-integrity/ExamIntegrityTopBar';
import { ExamIntegrityTeacherDashboardSidebar } from '../../organisms/domain/exam-integrity/ExamIntegrityTeacherDashboardSidebar';
import type { ExamIntegrityDashboardSection } from '../ExamIntegrityTeacherDashboardTemplate';
import { cn } from '../../../utils/cn';

export interface ExamIntegrityTeacherDraftsTemplateProps {
  activeSection?: ExamIntegrityDashboardSection;
  userName?: string;
  userRole?: string;
  onNavigate?: (section: ExamIntegrityDashboardSection) => void;
  onCreateNew?: () => void;
  onSettings?: () => void;
  onLogout?: () => void;
  onSearch?: (query: string) => void;
  onNotifications?: () => void;
  onHelp?: () => void;
  children: React.ReactNode;
  className?: string;
}

export const ExamIntegrityTeacherDraftsTemplate: React.FC<
  ExamIntegrityTeacherDraftsTemplateProps
> = ({
  activeSection = 'review',
  userName = '',
  userRole,
  onNavigate,
  onCreateNew,
  onSettings,
  onLogout,
  onSearch,
  onNotifications,
  onHelp,
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
      onCreateExam={onCreateNew}
      onSettings={onSettings}
      onLogout={onLogout}
    />
    <main className="ml-[256px] pt-[64px] min-h-screen overflow-y-auto">
      <div className="p-6 max-w-6xl mx-auto">{children}</div>
    </main>
  </div>
);

ExamIntegrityTeacherDraftsTemplate.displayName = 'ExamIntegrityTeacherDraftsTemplate';
export default ExamIntegrityTeacherDraftsTemplate;
