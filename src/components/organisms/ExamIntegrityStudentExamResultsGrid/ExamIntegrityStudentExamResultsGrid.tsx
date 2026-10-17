import React from 'react';
import { cn } from '../../../utils/cn';

export interface ExamIntegrityStudentExamResultsGridProps {
  children: React.ReactNode;
  className?: string;
}

export const ExamIntegrityStudentExamResultsGrid: React.FC<
  ExamIntegrityStudentExamResultsGridProps
> = ({ children, className }) => {
  return (
    <div
      data-testid="student-exam-results-grid"
      className={cn(
        'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4',
        className
      )}
    >
      {children}
    </div>
  );
};
