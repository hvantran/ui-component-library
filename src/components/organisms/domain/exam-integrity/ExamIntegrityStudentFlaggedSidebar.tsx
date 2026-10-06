import React from 'react';
import { Flag } from 'lucide-react';
import { Button } from '../../../atoms/Button';
import { cn } from '../../../../utils/cn';

export interface ExamIntegrityStudentFlaggedSidebarProps {
  flaggedMap: Record<number, boolean>;
  totalQuestions: number;
  onJumpTo: (questionNumber: number) => void;
  currentQuestion: number;
  className?: string;
}

export const ExamIntegrityStudentFlaggedSidebar: React.FC<
  ExamIntegrityStudentFlaggedSidebarProps
> = ({
  flaggedMap,
  onJumpTo,
  currentQuestion,
  className,
}) => {
  const flaggedNumbers = Object.entries(flaggedMap)
    .filter(([_, flagged]) => flagged)
    .map(([num]) => Number(num))
    .sort((a, b) => a - b);

  return (
    <div
      className={cn(
        'p-4 border border-gray-200 dark:border-gray-800 rounded-lg bg-white dark:bg-gray-900 shadow-sm',
        className
      )}
    >
      {flaggedNumbers.length === 0 ? (
        <div className="text-gray-500 dark:text-gray-400 text-sm font-medium">
          No flagged questions
        </div>
      ) : (
        <>
          <div className="flex items-center mb-3">
            <span className="font-semibold text-sm text-gray-800 dark:text-gray-200 mr-2">
              Flagged Questions
            </span>
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 ml-1">
              {flaggedNumbers.length}
            </span>
          </div>
          <ul className="space-y-1">
            {flaggedNumbers.map((num) => (
              <li key={num}>
                <Button
                  type="button"
                  variant="ghost"
                  size="md"
                  icon={
                    <Flag
                      size={16}
                      className={cn(
                        'mr-2',
                        num === currentQuestion ? 'text-blue-600 dark:text-blue-400' : 'text-amber-600'
                      )}
                    />
                  }
                  className={cn(
                    'w-full flex items-center px-3 py-2 rounded-lg transition text-left text-sm',
                    num === currentQuestion
                      ? 'bg-blue-50 dark:bg-blue-950/40 border border-blue-500 text-blue-700 dark:text-blue-300 font-semibold'
                      : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                  )}
                  onClick={() => onJumpTo(num)}
                >
                  Question {num}
                </Button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

ExamIntegrityStudentFlaggedSidebar.displayName = 'ExamIntegrityStudentFlaggedSidebar';
export default ExamIntegrityStudentFlaggedSidebar;

