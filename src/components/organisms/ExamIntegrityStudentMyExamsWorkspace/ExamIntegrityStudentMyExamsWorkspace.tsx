import React from 'react';
import { cn } from '../../../utils/cn';

export interface ExamIntegrityStudentMyExamsWorkspaceProps {
  children: React.ReactNode;
  className?: string;
}

export const ExamIntegrityStudentMyExamsWorkspace: React.FC<
  ExamIntegrityStudentMyExamsWorkspaceProps
> = ({ children, className }) => {
  return (
    <div
      data-testid="student-my-exams-workspace"
      className={cn('space-y-6', className)}
    >
      {children}
    </div>
  );
};
