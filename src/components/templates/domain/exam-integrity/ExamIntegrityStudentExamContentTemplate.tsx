import React from 'react';
import { ExamIntegrityStudentProTips } from '../../../organisms/domain/exam-integrity/ExamIntegrityStudentProTips';
import { cn } from '../../../../utils/cn';

export interface ExamIntegrityStudentExamContentTemplateProps {
  children: React.ReactNode;
  proTips?: string[];
  footer?: React.ReactNode;
  className?: string;
}

export const ExamIntegrityStudentExamContentTemplate: React.FC<
  ExamIntegrityStudentExamContentTemplateProps
> = ({
  children,
  proTips,
  footer,
  className,
}) => (
  <div
    className={cn(
      'flex justify-center items-start px-2 md:px-8 py-4 md:pt-12 max-w-[1440px] mx-auto w-full font-sans',
      className
    )}
  >
    <div className="w-full rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm p-4 md:p-8 min-h-[600px] flex flex-col">
      <div className="flex flex-col xl:flex-row gap-6 flex-1">
        <div className="flex-1 bg-white dark:bg-gray-900 min-w-0 flex flex-col">
          {children}
          {footer && (
            <>
              <div className="border-t border-slate-200 dark:border-gray-800 mt-6 pt-6" />
              {footer}
            </>
          )}
        </div>
        {proTips && proTips.length > 0 && (
          <div className="xl:w-[280px] xl:min-w-[220px] xl:max-w-[280px] self-start">
            <ExamIntegrityStudentProTips tips={proTips} />
          </div>
        )}
      </div>
    </div>
  </div>
);

ExamIntegrityStudentExamContentTemplate.displayName = 'ExamIntegrityStudentExamContentTemplate';
export default ExamIntegrityStudentExamContentTemplate;

