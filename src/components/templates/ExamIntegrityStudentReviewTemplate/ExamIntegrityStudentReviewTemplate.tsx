import React from 'react';
import { ExamIntegrityTopBar } from '../../organisms/ExamIntegrityTopBar';
import {
  ExamIntegrityStudentPortalSidebar,
  ExamIntegrityStudentPortalSection,
} from '../../organisms/ExamIntegrityStudentPortalSidebar';
import { cn } from '../../../utils/cn';

export interface ExamIntegrityStudentReviewTemplateProps {
  studentName?: string;
  starCount?: number;
  activeSection?: ExamIntegrityStudentPortalSection;
  onNavigate?: (section: ExamIntegrityStudentPortalSection) => void;
  onHelp?: () => void;
  onSearch?: (query: string) => void;
  onNotifications?: () => void;
  children: React.ReactNode;
  className?: string;
}

export const ExamIntegrityStudentReviewTemplate: React.FC<
  ExamIntegrityStudentReviewTemplateProps
> = ({
  studentName = '',
  starCount,
  activeSection = 'results',
  onNavigate,
  onHelp,
  onSearch,
  onNotifications,
  children,
  className,
}) => (
  <div className={cn('min-h-screen bg-gray-50 dark:bg-gray-950 font-sans', className)}>
    <ExamIntegrityTopBar
      appTitle="Academic Management"
      userName={studentName}
      starCount={starCount}
      onSearch={onSearch}
      onNotifications={onNotifications}
      onHelp={onHelp}
    />
    <ExamIntegrityStudentPortalSidebar
      activeSection={activeSection}
      studentName={studentName}
      onNavigate={onNavigate}
      onHelp={onHelp}
    />
    <main className="ml-[256px] pt-[64px] min-h-screen overflow-y-auto">
      <div className="p-6 max-w-6xl mx-auto">{children}</div>
    </main>
  </div>
);

ExamIntegrityStudentReviewTemplate.displayName = 'ExamIntegrityStudentReviewTemplate';
export default ExamIntegrityStudentReviewTemplate;

