import React from 'react';
import { cn } from '../../../utils/cn';

export interface ExamIntegrityStudentElementaryReassuranceProps {
  title?: string;
  message?: string;
  className?: string;
}

export const ExamIntegrityStudentElementaryReassurance: React.FC<
  ExamIntegrityStudentElementaryReassuranceProps
> = ({
  title = 'You are doing wonderfully!',
  message = 'There are no trick questions here. Trust your thinking and take all the time you need! ✨',
  className,
}) => (
  <div
    className={cn(
      'bg-[#f0fdfa] dark:bg-teal-950/40 border-2 border-[#99f6e4] dark:border-teal-800/60 rounded-2xl p-4 flex items-center gap-3.5 shadow-sm text-[#134e4a] dark:text-teal-200',
      className
    )}
  >
    <div className="w-10 h-10 rounded-full bg-[#ccfbf1] dark:bg-teal-900/60 flex items-center justify-center text-[#0f766e] dark:text-teal-300 text-lg font-bold shrink-0">
      💚
    </div>
    <div>
      <h4 className="font-bold text-sm text-[#115e59] dark:text-teal-300">{title}</h4>
      <p className="text-xs text-[#134e4a] dark:text-teal-200/90 font-medium">{message}</p>
    </div>
  </div>
);

ExamIntegrityStudentElementaryReassurance.displayName =
  'ExamIntegrityStudentElementaryReassurance';
export default ExamIntegrityStudentElementaryReassurance;
