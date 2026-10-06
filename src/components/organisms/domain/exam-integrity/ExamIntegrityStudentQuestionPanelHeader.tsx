import React from 'react';
import { Flag } from 'lucide-react';
import { Button } from '../../../atoms/Button';
import { cn } from '../../../../utils/cn';

export interface ExamIntegrityStudentQuestionPanelHeaderProps {
  questionNumber: number;
  subject?: string;
  gradeLevel?: string;
  tone?: 'elementary' | 'middle' | 'high';
  isFlagged?: boolean;
  onFlag?: () => void;
  className?: string;
}

export const ExamIntegrityStudentQuestionPanelHeader: React.FC<
  ExamIntegrityStudentQuestionPanelHeaderProps
> = ({
  questionNumber,
  subject,
  gradeLevel,
  tone = 'high',
  isFlagged = false,
  onFlag,
  className,
}) => {
  const toneClasses = {
    elementary: {
      badge: 'bg-cyan-500',
      label: 'text-cyan-700 dark:text-cyan-300',
    },
    middle: {
      badge: 'bg-emerald-600',
      label: 'text-emerald-700 dark:text-emerald-300',
    },
    high: {
      badge: 'bg-sky-600',
      label: 'text-slate-500 dark:text-gray-400',
    },
  }[tone];

  return (
    <div className={cn('flex items-start justify-between gap-3 mb-4', className)}>
      <div className="flex items-center gap-4 min-w-0">
        <div
          className={cn(
            'w-10 h-10 rounded-lg flex items-center justify-center shrink-0 shadow-sm',
            toneClasses.badge
          )}
        >
          <span className="text-white text-sm font-bold">{questionNumber}</span>
        </div>
        <div className="flex flex-col min-w-0">
          <span className={cn('text-xs uppercase tracking-wide font-semibold', toneClasses.label)}>
            Question {questionNumber}
          </span>
          {(subject || gradeLevel) && (
            <span className="text-slate-500 dark:text-gray-400 text-xs font-medium truncate">
              {[subject, gradeLevel].filter(Boolean).join(' · ')}
            </span>
          )}
        </div>
      </div>

      <div className="flex items-start gap-3">
        {onFlag && (
          <Button
            variant={isFlagged ? 'warning' : 'neutral'}
            icon={<Flag size={16} className={isFlagged ? 'text-amber-700' : 'text-slate-500'} />}
            onClick={onFlag}
            className="shrink-0"
          >
            {isFlagged ? 'Unflag' : 'Flag'}
          </Button>
        )}
      </div>
    </div>
  );
};

ExamIntegrityStudentQuestionPanelHeader.displayName = 'ExamIntegrityStudentQuestionPanelHeader';
export default ExamIntegrityStudentQuestionPanelHeader;

