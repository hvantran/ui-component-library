import React from 'react';
import { Skeleton } from '../../atoms/Skeleton';
import { cn } from '../../../utils/cn';

export interface ExamIntegrityExamGridProps {
  children: React.ReactNode;
  className?: string;
}

export const ExamIntegrityExamGrid: React.FC<ExamIntegrityExamGridProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6',
        className
      )}
    >
      {children}
    </div>
  );
};

export interface ExamIntegrityExamGridLoaderProps {
  count?: number;
  className?: string;
}

export const ExamIntegrityExamGridLoader: React.FC<ExamIntegrityExamGridLoaderProps> = ({
  count = 6,
  className,
}) => {
  return (
    <ExamIntegrityExamGrid className={className}>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="border rounded-2xl bg-white shadow-sm p-5 flex flex-col justify-between"
          data-testid="exam-grid-skeleton"
        >
          <div>
            <Skeleton height={24} width="72%" className="mb-3" />
            <Skeleton height={16} width="88%" className="mb-2" />
            <Skeleton height={16} width="60%" className="mb-3" />
            <div className="flex gap-2 mb-3">
              <Skeleton height={20} width={56} />
              <Skeleton height={20} width={56} />
            </div>
          </div>
          <Skeleton height={48} width="100%" />
        </div>
      ))}
    </ExamIntegrityExamGrid>
  );
};

