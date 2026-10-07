import React from 'react';
import { Replace, Trash2, CircleCheck } from 'lucide-react';
import { Button } from '../../atoms/Button';
import { Skeleton } from '../../atoms/Skeleton';
import { ExamIntegrityTopBar } from '../../organisms/domain/exam-integrity/ExamIntegrityTopBar';
import { ExamIntegrityTeacherDashboardSidebar } from '../../organisms/domain/exam-integrity/ExamIntegrityTeacherDashboardSidebar';
import type { ExamIntegrityDashboardSection } from '../ExamIntegrityTeacherDashboardTemplate';
import { cn } from '../../../utils/cn';

export interface ExamIntegrityTeacherQuestionReviewTemplateProps {
  userName?: string;
  userRole?: string;
  onNavigate?: (section: ExamIntegrityDashboardSection) => void;
  onCreateExam?: () => void;
  onSettings?: () => void;
  onLogout?: () => void;
  onNotifications?: () => void;
  onHelp?: () => void;
  questionNumber?: number;
  totalQuestions?: number;
  examName?: string;
  onReplace?: () => void;
  onDelete?: () => void;
  onApprove?: () => void;
  onSaveDraft?: () => void;
  onPublish?: () => void;
  isLoading?: boolean;
  leftPanel?: React.ReactNode;
  rightPanel?: React.ReactNode;
  className?: string;
}

export const ExamIntegrityTeacherQuestionReviewTemplate: React.FC<
  ExamIntegrityTeacherQuestionReviewTemplateProps
> = ({
  userName = '',
  userRole,
  onNavigate,
  onCreateExam,
  onSettings,
  onLogout,
  onNotifications,
  onHelp,
  questionNumber = 1,
  totalQuestions = 1,
  examName,
  onReplace,
  onDelete,
  onApprove,
  onSaveDraft,
  onPublish,
  isLoading = false,
  leftPanel,
  rightPanel,
  className,
}) => (
  <div className={cn('min-h-screen bg-gray-50 dark:bg-gray-950 flex flex-col font-sans', className)}>
    <ExamIntegrityTopBar
      userName={userName}
      showSearch={false}
      onNotifications={onNotifications}
      onHelp={onHelp}
      onLogout={onLogout}
    />
    <ExamIntegrityTeacherDashboardSidebar
      activeSection="review"
      userName={userName}
      userRole={userRole}
      onNavigate={onNavigate}
      onCreateExam={onCreateExam}
      onSettings={onSettings}
      onLogout={onLogout}
    />

    {/* Content Area */}
    <div className="ml-[256px] pt-[64px] min-h-screen flex flex-col">
      {/* Sub-header / Breadcrumbs bar */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-8 py-3 flex items-center justify-between sticky top-[64px] z-20">
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <span>Review</span>
          <span>/</span>
          {examName ? (
            <span className="text-gray-700 dark:text-gray-300 font-medium truncate max-w-xs">{examName}</span>
          ) : (
            <Skeleton width="120px" height="16px" />
          )}
          <span>/</span>
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            Question {questionNumber} of {totalQuestions}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {onSaveDraft && (
            <Button variant="ghost" size="sm" onClick={onSaveDraft}>
              Save Draft
            </Button>
          )}
          {onPublish && (
            <Button variant="primary" size="sm" onClick={onPublish}>
              Publish Exam
            </Button>
          )}
        </div>
      </div>

      {/* Main split-view container */}
      <main className="flex-1 p-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-[600px]">
          {/* Left panel: Original Scan / Source */}
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 flex flex-col">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100 dark:border-gray-800">
              <span className="font-semibold text-gray-700 dark:text-gray-200 text-sm">Source Image</span>
              {onReplace && (
                <Button variant="ghost" size="sm" icon={<Replace size={14} />} onClick={onReplace}>
                  Replace
                </Button>
              )}
            </div>
            <div className="flex-1 flex items-center justify-center bg-gray-50 dark:bg-gray-850 rounded-lg overflow-hidden">
              {isLoading ? (
                <Skeleton width="100%" height="400px" />
              ) : (
                leftPanel || (
                  <span className="text-sm text-gray-400">No source scan available</span>
                )
              )}
            </div>
          </div>

          {/* Right panel: Parsed content / Editor */}
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 flex flex-col">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100 dark:border-gray-800">
              <span className="font-semibold text-gray-700 dark:text-gray-200 text-sm">Parsed Content</span>
              <div className="flex items-center gap-2">
                {onDelete && (
                  <Button
                    variant="ghost"
                    size="sm"
                    icon={<Trash2 size={14} className="text-red-500" />}
                    onClick={onDelete}
                  >
                    Delete
                  </Button>
                )}
                {onApprove && (
                  <Button
                    variant="primary"
                    size="sm"
                    icon={<CircleCheck size={14} />}
                    onClick={onApprove}
                  >
                    Approve
                  </Button>
                )}
              </div>
            </div>
            <div className="flex-1 overflow-y-auto">
              {isLoading ? (
                <div className="space-y-4">
                  <Skeleton width="100%" height="32px" />
                  <Skeleton width="80%" height="24px" />
                  <Skeleton width="100%" height="160px" />
                </div>
              ) : (
                rightPanel || (
                  <span className="text-sm text-gray-400">No parsed question content</span>
                )
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
);

ExamIntegrityTeacherQuestionReviewTemplate.displayName =
  'ExamIntegrityTeacherQuestionReviewTemplate';
export default ExamIntegrityTeacherQuestionReviewTemplate;
