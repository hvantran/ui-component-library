import React from 'react';
import { ArrowLeft, ArrowRight, ClipboardEdit } from 'lucide-react';
import { Button } from '../../atoms/Button';
import { cn } from '../../../utils/cn';

export interface ExamIntegrityStudentExamNavigationBarProps {
  canGoPrev: boolean;
  canGoNext: boolean;
  isLastQuestion?: boolean;
  flaggedCount?: number;
  onPrevious: () => void;
  onNext: () => void;
  onSubmit: () => void;
  onReviewFlagged?: () => void;
  className?: string;
}

export const ExamIntegrityStudentExamNavigationBar: React.FC<
  ExamIntegrityStudentExamNavigationBarProps
> = ({
  canGoPrev,
  canGoNext,
  isLastQuestion = false,
  onPrevious,
  onNext,
  onSubmit,
  flaggedCount = 0,
  onReviewFlagged,
  className,
}) => {
  const hasFlaggedReviewAction = isLastQuestion && flaggedCount > 0 && Boolean(onReviewFlagged);

  return (
    <section
      className={cn(
        'w-full rounded-2xl border border-slate-200 dark:border-gray-800 bg-gradient-to-r from-white to-slate-50/70 dark:from-gray-900 dark:to-gray-850 p-3 md:p-4 shadow-[0_8px_24px_-20px_rgba(15,23,42,0.5)]',
        className
      )}
      aria-label="Exam question actions"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button
          variant="accent"
          icon={<ArrowLeft size={18} className="text-white/90" />}
          onClick={onPrevious}
          disabled={!canGoPrev}
          className="w-full sm:w-auto min-w-0 sm:min-w-[122px] justify-center"
        >
          Previous
        </Button>

        <div className="flex items-center gap-2 sm:gap-3 justify-end flex-wrap sm:flex-nowrap">
          {hasFlaggedReviewAction && onReviewFlagged && (
            <Button
              variant="warning"
              icon={<ClipboardEdit size={18} className="text-amber-700" />}
              onClick={onReviewFlagged}
              className="flex-1 sm:flex-none justify-center text-xs sm:text-sm"
            >
              {`Review Flagged (${flaggedCount})`}
            </Button>
          )}

          <Button
            variant="accent"
            icon={<ArrowRight size={18} className="text-white/90" />}
            iconPlacement="right"
            onClick={onNext}
            disabled={!canGoNext}
            className="flex-1 sm:flex-none min-w-0 sm:min-w-[122px] justify-center"
          >
            Next
          </Button>

          {isLastQuestion && (
            <Button variant="danger" onClick={onSubmit} className="w-full sm:w-auto justify-center">
              Submit Exam
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

ExamIntegrityStudentExamNavigationBar.displayName = 'ExamIntegrityStudentExamNavigationBar';
export default ExamIntegrityStudentExamNavigationBar;

