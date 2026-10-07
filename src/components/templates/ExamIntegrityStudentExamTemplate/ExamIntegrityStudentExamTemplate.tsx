import React from 'react';
import { cn } from '../../../utils/cn';

export interface ExamIntegrityStudentExamTemplateProps {
  headerSlot?: React.ReactNode;
  contentSlot?: React.ReactNode;
  navigationSlot?: React.ReactNode;
  sidebarSlot?: React.ReactNode;
  footerSlot?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

export const ExamIntegrityStudentExamTemplate: React.FC<ExamIntegrityStudentExamTemplateProps> = ({
  headerSlot,
  contentSlot,
  navigationSlot,
  sidebarSlot,
  footerSlot,
  children,
  className,
}) => {
  if (children) {
    return (
      <div className={cn('min-h-screen bg-gradient-to-b from-[#f7fafc] to-[#e9eef6] dark:from-gray-900 dark:to-gray-800', className)}>
        {children}
      </div>
    );
  }

  return (
    <div className={cn('min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900', className)}>
      {headerSlot && (
        <header className="sticky top-0 z-40 w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800">
          {headerSlot}
        </header>
      )}

      {navigationSlot && (
        <nav className="w-full border-b border-gray-200 dark:border-gray-800 bg-gray-50/70 dark:bg-gray-900/70 px-4 py-2">
          <div className="max-w-7xl mx-auto">{navigationSlot}</div>
        </nav>
      )}

      <div className="flex-1 flex w-full max-w-7xl mx-auto p-4 sm:p-6 gap-6">
        <main className="flex-1 min-w-0">{contentSlot}</main>
        {sidebarSlot && (
          <aside className="w-80 shrink-0 hidden lg:block">{sidebarSlot}</aside>
        )}
      </div>

      {footerSlot && (
        <footer className="sticky bottom-0 z-30 w-full border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 py-3 px-6 shadow-md">
          <div className="max-w-7xl mx-auto flex items-center justify-between">{footerSlot}</div>
        </footer>
      )}
    </div>
  );
};

ExamIntegrityStudentExamTemplate.displayName = 'ExamIntegrityStudentExamTemplate';
export default ExamIntegrityStudentExamTemplate;
