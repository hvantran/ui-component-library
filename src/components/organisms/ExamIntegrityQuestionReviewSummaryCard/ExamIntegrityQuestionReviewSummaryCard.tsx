import React from 'react';
import { cn } from '../../../utils/cn';

export interface ExamIntegrityQuestionReviewSummaryCardProps {
  title?: string;
  filename?: string;
  totalQuestions: number;
  totalPoints: number;
  flaggedCount?: number;
  className?: string;
}

export const ExamIntegrityQuestionReviewSummaryCard: React.FC<
  ExamIntegrityQuestionReviewSummaryCardProps
> = ({
  title = 'Draft Info',
  filename,
  totalQuestions,
  totalPoints,
  flaggedCount = 0,
  className,
}) => {
  return (
    <div className={cn('p-4', className)}>
      <div className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">{title}</div>
      {filename && (
        <div className="text-xs text-gray-500 dark:text-gray-400">{filename}</div>
      )}
      <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">
        {totalQuestions} questions · {totalPoints} pts
      </div>
      {flaggedCount > 0 && (
        <div className="text-xs text-yellow-700 dark:text-yellow-400 mt-2">
          ⚠ {flaggedCount} questions need review
        </div>
      )}
    </div>
  );
};

