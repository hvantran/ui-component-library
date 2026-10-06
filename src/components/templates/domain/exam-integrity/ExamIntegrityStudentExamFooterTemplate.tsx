import React from 'react';
import { cn } from '../../../../utils/cn';

export interface ExamIntegrityStudentExamFooterTemplateProps {
  children?: React.ReactNode;
  className?: string;
}

export const ExamIntegrityStudentExamFooterTemplate: React.FC<
  ExamIntegrityStudentExamFooterTemplateProps
> = ({ children, className }) => (
  <div className={cn('flex justify-center px-2 md:px-8 pb-8 font-sans', className)}>
    <div className="w-full max-w-[1040px]">{children}</div>
  </div>
);

ExamIntegrityStudentExamFooterTemplate.displayName = 'ExamIntegrityStudentExamFooterTemplate';
export default ExamIntegrityStudentExamFooterTemplate;

