import React from 'react';
import { Skeleton } from '../../atoms/Skeleton';
import { cn } from '../../../utils/cn';

export interface ExamIntegrityQuestionBankListLoaderProps {
  count?: number;
  className?: string;
}

export const ExamIntegrityQuestionBankListLoader: React.FC<
  ExamIntegrityQuestionBankListLoaderProps
> = ({ count = 3, className }) => {
  return (
    <div
      className={cn('w-full flex flex-col gap-3', className)}
      aria-label="Loading more questions"
    >
      {Array.from({ length: count }).map((_, i) => (
        <Skeleton key={i} height={96} />
      ))}
    </div>
  );
};

export interface ExamIntegrityQuestionBankEndMessageProps {
  message?: string;
  className?: string;
}

export const ExamIntegrityQuestionBankEndMessage: React.FC<
  ExamIntegrityQuestionBankEndMessageProps
> = ({ message = 'All results loaded', className }) => {
  return (
    <span
      className={cn(
        'text-xs text-gray-500 dark:text-gray-400 block text-center py-2',
        className
      )}
    >
      {message}
    </span>
  );
};

