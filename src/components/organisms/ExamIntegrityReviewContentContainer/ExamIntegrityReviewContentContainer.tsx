import React from 'react';
import { cn } from '../../../utils/cn';

export interface ExamIntegrityReviewContentContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const ExamIntegrityReviewContentContainer: React.FC<
  ExamIntegrityReviewContentContainerProps
> = ({ children, className }) => {
  return (
    <div
      data-testid="review-content-container"
      className={cn('p-2 sm:p-4 min-h-[300px]', className)}
    >
      {children}
    </div>
  );
};
