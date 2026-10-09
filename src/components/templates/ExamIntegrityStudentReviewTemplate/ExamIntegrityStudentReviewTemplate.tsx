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
}) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false);

  return (
    <div className={cn('min-h-screen bg-gray-50 dark:bg-gray-950 font-sans', className)}>
      <ExamIntegrityTopBar
        appTitle="Academic Management"
        userName={studentName}
        starCount={starCount}
        onSearch={onSearch}
        onNotifications={onNotifications}
        onHelp={onHelp}
        onMenuToggle={() => setIsMobileNavOpen((prev) => !prev)}
      />

      {/* Mobile backdrop */}
      {isMobileNavOpen && (
        <div
          data-testid="mobile-review-backdrop"
          onClick={() => setIsMobileNavOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden transition-opacity"
          aria-hidden="true"
        />
      )}

      <ExamIntegrityStudentPortalSidebar
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
        activeSection={activeSection}
        studentName={studentName}
        onNavigate={(section) => {
          onNavigate?.(section);
          setIsMobileNavOpen(false);
        }}
        onHelp={onHelp}
      />
      <main className="ml-0 lg:ml-[256px] pt-16 min-h-screen overflow-y-auto">
        <div className="p-3 sm:p-6 max-w-6xl mx-auto">{children}</div>
      </main>
    </div>
  );
};

ExamIntegrityStudentReviewTemplate.displayName = 'ExamIntegrityStudentReviewTemplate';
export default ExamIntegrityStudentReviewTemplate;

