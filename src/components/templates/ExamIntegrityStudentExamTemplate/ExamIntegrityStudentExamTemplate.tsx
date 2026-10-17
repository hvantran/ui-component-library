import React, { useState } from 'react';
import { X, PanelRight } from 'lucide-react';
import { cn } from '../../../utils/cn';

export interface ExamIntegrityStudentExamTemplateProps {
  headerSlot?: React.ReactNode;
  bannerSlot?: React.ReactNode;
  questTrailSlot?: React.ReactNode;
  navigationSlot?: React.ReactNode;
  contentSlot?: React.ReactNode;
  sidebarSlot?: React.ReactNode;
  footerSlot?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  pageAccentClass?: string;
  headerClass?: string;
}

export const ExamIntegrityStudentExamTemplate: React.FC<
  ExamIntegrityStudentExamTemplateProps
> = ({
  headerSlot,
  bannerSlot,
  questTrailSlot,
  navigationSlot,
  contentSlot,
  sidebarSlot,
  footerSlot,
  children,
  className,
  pageAccentClass,
  headerClass,
}) => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  if (children) {
    return (
      <div
        className={cn(
          'min-h-screen bg-gradient-to-b from-[#f7fafc] to-[#e9eef6] dark:from-gray-900 dark:to-gray-800',
          className
        )}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      className={cn(
        'min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900',
        pageAccentClass,
        className
      )}
    >
      {headerSlot && (
        <header
          className={cn(
            'sticky top-0 z-40 w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 shadow-[0_2px_8px_0_rgba(0,0,0,0.04)]',
            headerClass
          )}
        >
          {headerSlot}
        </header>
      )}

      {bannerSlot && <div className="w-full">{bannerSlot}</div>}

      {questTrailSlot && <div className="w-full">{questTrailSlot}</div>}

      {navigationSlot && (
        <nav className="w-full border-b border-gray-200 dark:border-gray-800 bg-gray-50/70 dark:bg-gray-900/70 px-3 sm:px-4 py-2">
          <div className="max-w-7xl mx-auto">{navigationSlot}</div>
        </nav>
      )}

      <div className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 md:px-8 py-4 sm:py-6 pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <main
            className={cn(
              sidebarSlot ? 'lg:col-span-8' : 'lg:col-span-12',
              'flex flex-col gap-5 min-w-0'
            )}
          >
            {contentSlot}
          </main>
          {sidebarSlot && (
            <aside className="lg:col-span-4 hidden lg:flex flex-col gap-5">
              {sidebarSlot}
            </aside>
          )}
        </div>
      </div>

      {/* Mobile Drawer & Floating Button for sidebarSlot */}
      {sidebarSlot && (
        <>
          <button
            type="button"
            data-testid="mobile-sidebar-toggle-btn"
            onClick={() => setIsMobileSidebarOpen(true)}
            aria-label="Open exam tools and flagged questions"
            className="fixed bottom-20 right-4 z-30 lg:hidden p-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-xl transition-transform active:scale-95 flex items-center gap-1.5 text-xs font-bold"
          >
            <PanelRight size={16} />
            <span>Overview</span>
          </button>

          {isMobileSidebarOpen && (
            <div
              data-testid="mobile-exam-sidebar-backdrop"
              onClick={() => setIsMobileSidebarOpen(false)}
              className="fixed inset-0 bg-black/50 z-50 lg:hidden transition-opacity"
              aria-hidden="true"
            />
          )}

          <aside
            data-testid="mobile-exam-sidebar"
            className={cn(
              'fixed inset-y-0 right-0 z-50 w-80 max-w-[85vw] bg-white dark:bg-gray-800 p-4 shadow-2xl overflow-y-auto transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col',
              isMobileSidebarOpen ? 'translate-x-0' : 'translate-x-full'
            )}
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-200 dark:border-gray-700 shrink-0">
              <span className="font-bold text-sm text-gray-900 dark:text-gray-100">
                Exam Overview & Tools
              </span>
              <button
                type="button"
                onClick={() => setIsMobileSidebarOpen(false)}
                className="p-1.5 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                aria-label="Close sidebar"
              >
                <X size={18} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">{sidebarSlot}</div>
          </aside>
        </>
      )}

      {footerSlot && (
        <footer className="sticky bottom-0 z-30 w-full border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 py-3 px-3 sm:px-6 shadow-md">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {footerSlot}
          </div>
        </footer>
      )}
    </div>
  );
};

ExamIntegrityStudentExamTemplate.displayName =
  'ExamIntegrityStudentExamTemplate';
export default ExamIntegrityStudentExamTemplate;
