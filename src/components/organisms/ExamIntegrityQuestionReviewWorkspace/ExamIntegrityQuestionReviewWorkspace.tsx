import React from 'react';
import { Button } from '../../atoms/Button';
import { cn } from '../../../utils/cn';

export interface ReviewQuestionItem {
  id: string;
  questionNumber?: number;
}

export interface ExamIntegrityQuestionReviewWorkspaceProps {
  questions?: ReviewQuestionItem[];
  currentIndex: number;
  onSelectIndex: (index: number) => void;
  onPrev?: () => void;
  onNext?: () => void;
  saveError?: string | null;
  children: React.ReactNode;
  className?: string;
}

export const ExamIntegrityQuestionReviewWorkspace: React.FC<
  ExamIntegrityQuestionReviewWorkspaceProps
> = ({
  questions = [],
  currentIndex,
  onSelectIndex,
  onPrev,
  onNext,
  saveError,
  children,
  className,
}) => {
  const total = questions.length;

  return (
    <div className={cn('p-4', className)}>
      {saveError && (
        <div className="mb-3 p-3 bg-amber-50 dark:bg-amber-950/50 border border-amber-300 dark:border-amber-800 rounded-lg text-amber-800 dark:text-amber-200 text-xs">
          {saveError}
        </div>
      )}

      {/* Question navigator pills */}
      {total > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {questions.map((q, i) => (
            <Button
              key={q.id}
              type="button"
              onClick={() => onSelectIndex(i)}
              variant={currentIndex === i ? 'primary' : 'neutral'}
              size="sm"
              className="!px-3 !py-1 text-xs"
            >
              {`Question ${q.questionNumber && q.questionNumber > 0 ? q.questionNumber : i + 1}`}
            </Button>
          ))}
        </div>
      )}

      {children}

      <div className="flex gap-2 mt-4 items-center">
        <Button
          variant="neutral"
          size="sm"
          disabled={currentIndex === 0}
          onClick={onPrev ?? (() => onSelectIndex(Math.max(0, currentIndex - 1)))}
          className="!px-3 !py-1 text-xs"
        >
          ← Prev
        </Button>
        <span className="flex-1 text-center text-xs text-gray-500 dark:text-gray-400">
          {total > 0 ? `${currentIndex + 1} / ${total}` : 'No questions'}
        </span>
        <Button
          variant="neutral"
          size="sm"
          disabled={currentIndex >= total - 1}
          onClick={onNext ?? (() => onSelectIndex(Math.min(total - 1, currentIndex + 1)))}
          className="!px-3 !py-1 text-xs"
        >
          Next →
        </Button>
      </div>
    </div>
  );
};

