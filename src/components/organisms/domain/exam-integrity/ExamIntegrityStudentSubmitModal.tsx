import React from 'react';
import { Button } from '../../../atoms/Button';
import { cn } from '../../../../utils/cn';

export interface ExamIntegrityStudentSubmitModalProps {
  open: boolean;
  answeredCount: number;
  totalCount: number;
  onBack: () => void;
  onFinalSubmit: () => void;
  className?: string;
}

export const ExamIntegrityStudentSubmitModal: React.FC<
  ExamIntegrityStudentSubmitModalProps
> = ({
  open,
  answeredCount,
  totalCount,
  onBack,
  onFinalSubmit,
  className,
}) => {
  if (!open) return null;

  const unanswered = Math.max(0, totalCount - answeredCount);
  const pct = Math.round((answeredCount / Math.max(totalCount, 1)) * 100);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="confirm-submit-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
    >
      <div
        className={cn(
          'bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-2xl w-full max-w-md p-6 sm:p-8 animate-in fade-in zoom-in-95',
          className
        )}
      >
        {/* Icon header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-950 flex items-center justify-center shrink-0">
            <span className="text-amber-500 text-2xl" role="img" aria-label="warning">
              ⚠️
            </span>
          </div>
          <div>
            <h2 id="confirm-submit-title" className="font-bold text-lg text-gray-900 dark:text-white">
              Confirm Submission
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              This action cannot be undone.
            </p>
          </div>
        </div>

        {/* Progress summary */}
        <div className="mb-6">
          <div className="flex justify-between mb-1 text-sm">
            <span className="text-gray-500 dark:text-gray-400">Answer Progress</span>
            <span className="font-semibold text-gray-900 dark:text-white">
              {answeredCount} / {totalCount}
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
            <div
              className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>

        {unanswered > 0 && (
          <div className="flex items-center gap-2 mb-4 p-3 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 rounded-lg text-amber-800 dark:text-amber-200 text-sm">
            <span className="text-lg">⚠️</span>
            <span>
              {unanswered} unanswered question{unanswered > 1 ? 's' : ''} remain
            </span>
          </div>
        )}

        <div className="flex justify-end gap-3 mt-6">
          <Button onClick={onBack} variant="neutral">
            Back
          </Button>
          <Button onClick={onFinalSubmit} variant="primary">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

ExamIntegrityStudentSubmitModal.displayName = 'ExamIntegrityStudentSubmitModal';
export default ExamIntegrityStudentSubmitModal;

