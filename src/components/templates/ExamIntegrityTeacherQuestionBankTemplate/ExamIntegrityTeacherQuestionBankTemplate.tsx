import React from 'react';
import { Skeleton } from '../../atoms/Skeleton';
import { ExamIntegrityTopBar } from '../../organisms/ExamIntegrityTopBar';
import { ExamIntegrityTeacherDashboardSidebar } from '../../organisms/ExamIntegrityTeacherDashboardSidebar';
import type { ExamIntegrityDashboardSection } from '../ExamIntegrityTeacherDashboardTemplate';
import { cn } from '../../../utils/cn';

export interface ExamIntegrityTeacherQuestionBankTemplateProps {
  userName?: string;
  userRole?: string;
  onNavigate?: (section: ExamIntegrityDashboardSection) => void;
  onCreateExam?: () => void;
  onSettings?: () => void;
  onLogout?: () => void;
  onSearch?: (query: string) => void;
  onNotifications?: () => void;
  onHelp?: () => void;
  filterBar?: React.ReactNode;
  resultsBar?: React.ReactNode;
  isLoading?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export const ExamIntegrityTeacherQuestionBankTemplate: React.FC<
  ExamIntegrityTeacherQuestionBankTemplateProps
> = ({
  userName = '',
  userRole,
  onNavigate,
  onCreateExam,
  onSettings,
  onLogout,
  onSearch,
  onNotifications,
  onHelp,
  filterBar,
  resultsBar,
  isLoading = false,
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
      activeSection="question-bank"
      userName={userName}
      userRole={userRole}
      onNavigate={onNavigate}
      onCreateExam={onCreateExam}
      onSettings={onSettings}
      onLogout={onLogout}
    />
    <main className="ml-[256px] pt-[64px] min-h-screen overflow-y-auto">
      <div className="pt-8 pb-32 px-6">
        <div className="max-w-[1200px] mx-auto">
          {/* Page header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
              Question Bank
            </h2>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Browse and filter approved questions to build your examination draft.
            </div>
          </div>

          {/* Filter Bar Slot */}
          {filterBar && <div className="mb-6">{filterBar}</div>}

          {/* Results Summary Bar Slot */}
          {resultsBar && <div className="mb-6">{resultsBar}</div>}

          {/* Questions List */}
          <div className="space-y-4">
            {isLoading ? (
              <div className="space-y-4">
                <Skeleton width="100%" height="96px" className="rounded-xl" />
                <Skeleton width="100%" height="96px" className="rounded-xl" />
                <Skeleton width="100%" height="96px" className="rounded-xl" />
              </div>
            ) : (
              children
            )}
          </div>
        </div>
      </div>
    </main>
  </div>
);

ExamIntegrityTeacherQuestionBankTemplate.displayName =
  'ExamIntegrityTeacherQuestionBankTemplate';
export default ExamIntegrityTeacherQuestionBankTemplate;
