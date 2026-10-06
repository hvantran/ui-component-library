import React from 'react';
import { Settings } from 'lucide-react';
import { Button } from '../../../atoms/Button';
import { ProgressBar } from '../../../atoms/ProgressBar';
import { TimerDisplay } from '../../../molecules/TimerDisplay';
import { cn } from '../../../../utils/cn';

export interface ExamIntegrityStudentExamHeaderProps {
  brandName?: string;
  currentQuestion: number;
  totalQuestions: number;
  remainingSeconds: number;
  isProctoringActive?: boolean;
  onSettings?: () => void;
  className?: string;
}

export const ExamIntegrityStudentExamHeader: React.FC<
  ExamIntegrityStudentExamHeaderProps
> = ({
  brandName = 'ExamIntegrity',
  currentQuestion,
  totalQuestions,
  remainingSeconds,
  isProctoringActive = true,
  onSettings,
  className,
}) => {
  const progress = totalQuestions > 0 ? Math.round((currentQuestion / totalQuestions) * 100) : 0;
  const isUrgent = remainingSeconds <= 300;

  return (
    <div className={cn('w-full', className)}>
      {/* Top progress strip */}
      <ProgressBar
        value={progress}
        variant={isUrgent ? 'danger' : 'primary'}
        size="sm"
        className="rounded-none h-1"
      />

      <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center min-h-[56px] gap-2 px-4 md:px-8">
          {/* Brand */}
          <span className="font-bold text-base text-blue-600 dark:text-blue-400 shrink-0 tracking-tight">
            {brandName}
          </span>

          {/* Question counter */}
          <span className="text-sm font-semibold text-gray-900 dark:text-white shrink-0 ml-4">
            Question {currentQuestion} / {totalQuestions}
          </span>

          <div className="flex-1" />

          {/* Proctoring chip */}
          <span className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold mr-2 border transition-colors bg-green-50 dark:bg-green-950/40 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800">
            <span
              className={cn(
                'w-2 h-2 rounded-full shrink-0',
                isProctoringActive ? 'bg-green-500 animate-pulse' : 'bg-gray-400'
              )}
            />
            {isProctoringActive ? 'Proctoring Active' : 'Proctoring Off'}
          </span>

          {/* Timer */}
          <span className="mr-2">
            <TimerDisplay remainingSeconds={remainingSeconds} />
          </span>

          {/* Action icon */}
          {onSettings && (
            <Button
              onClick={onSettings}
              variant="ghost"
              size="sm"
              icon={<Settings size={16} className="text-slate-400" />}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500"
              aria-label="Settings"
            />
          )}
        </div>
      </header>
    </div>
  );
};

ExamIntegrityStudentExamHeader.displayName = 'ExamIntegrityStudentExamHeader';
export default ExamIntegrityStudentExamHeader;
