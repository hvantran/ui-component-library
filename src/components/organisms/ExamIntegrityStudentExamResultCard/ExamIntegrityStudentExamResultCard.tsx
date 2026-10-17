import React from 'react';
import { cn } from '../../../utils/cn';

export interface ExamIntegrityStudentExamResultCardProps {
  sessionId: string;
  examTitle: string;
  submittedAt?: string | null;
  finalScore10: number;
  totalEarned?: number;
  totalMax?: number;
  starsEarned?: number;
  pendingEssayCount?: number;
  isSelected?: boolean;
  isElementary?: boolean;
  onSelect: (sessionId: string) => void;
  className?: string;
}

export const ExamIntegrityStudentExamResultCard: React.FC<
  ExamIntegrityStudentExamResultCardProps
> = ({
  sessionId,
  examTitle,
  submittedAt,
  finalScore10,
  totalEarned = 0,
  totalMax = 0,
  starsEarned,
  pendingEssayCount = 0,
  isSelected = false,
  isElementary = false,
  onSelect,
  className,
}) => {
  const stars = starsEarned ?? Math.round(finalScore10);
  const formattedDate = submittedAt
    ? new Date(submittedAt).toLocaleDateString()
    : 'Completed Quest';

  if (isElementary) {
    return (
      <button
        key={sessionId}
        type="button"
        data-testid={`elementary-result-card-${sessionId}`}
        onClick={() => onSelect(sessionId)}
        className={cn(
          'rounded-3xl border-2 p-5 text-left transition-all duration-150 select-none w-full',
          isSelected
            ? 'border-amber-400 bg-amber-50/80 shadow-[0_4px_0_#d97706] ring-2 ring-amber-200'
            : 'border-slate-200 bg-white hover:border-amber-300 hover:bg-amber-50/40 shadow-sm',
          className
        )}
      >
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="font-extrabold text-slate-900 text-base">{examTitle}</div>
          <span className="text-xs font-bold text-amber-900 bg-amber-100 border border-amber-300 rounded-full px-2.5 py-0.5 shrink-0">
            ⭐ {stars} Stars
          </span>
        </div>
        <div className="text-xs text-slate-500 mb-4">{formattedDate}</div>
        <div className="flex items-end justify-between">
          <div className="text-3xl font-black text-slate-900">
            {finalScore10.toFixed(1)}
            <span className="text-base font-bold text-slate-500"> / 10</span>
          </div>
          <span className="text-xs font-bold text-amber-800 bg-white px-2.5 py-1 rounded-full border border-amber-300 shadow-xs">
            View Celebration 🎉
          </span>
        </div>
      </button>
    );
  }

  const formattedDateTime = submittedAt
    ? new Date(submittedAt).toLocaleString()
    : 'Submitted exam';

  return (
    <button
      key={sessionId}
      type="button"
      data-testid={`standard-result-card-${sessionId}`}
      onClick={() => onSelect(sessionId)}
      className={cn(
        'rounded-2xl border p-5 text-left shadow-sm transition w-full block',
        isSelected
          ? 'border-blue-600 bg-blue-50 dark:bg-blue-950/30'
          : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-blue-300',
        className
      )}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            {examTitle}
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">{formattedDateTime}</div>
        </div>
        <div className="flex flex-col items-end gap-1 shrink-0">
          <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-700 px-2 py-0.5 text-xs font-bold text-amber-700 dark:text-amber-300">
            ⭐ {stars}
          </span>
          {pendingEssayCount > 0 && (
            <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
              {pendingEssayCount} essay pending
            </span>
          )}
        </div>
      </div>
      <div className="flex items-end justify-between">
        <div>
          <div className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            {finalScore10.toFixed(1)}
            <span className="text-base font-medium text-gray-500">/10</span>
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {totalEarned.toFixed(1)} / {totalMax.toFixed(1)} pts
          </div>
        </div>
        <span className="text-sm font-semibold text-blue-700 dark:text-blue-400">
          View details
        </span>
      </div>
    </button>
  );
};
