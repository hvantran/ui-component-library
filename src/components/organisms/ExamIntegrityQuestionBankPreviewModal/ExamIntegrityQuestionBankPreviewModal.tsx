import React from 'react';
import { Modal } from '../../atoms/Modal';
import { Button } from '../../atoms/Button';
import { Skeleton } from '../../atoms/Skeleton';
import { ExamIntegrityQuestionPanel } from '../ExamIntegrityQuestionPanel';
import type { QuestionOption, QuestionType } from '../../../types/examIntegrity';
import { cn } from '../../../utils/cn';

export interface QuestionBankPreviewItem {
  id: string;
  questionNumber?: number;
  questionText: string;
  questionStem?: string;
  questionType?: QuestionType | string;
  options?: QuestionOption[];
  questionParts?: any[];
  imageData?: string;
}

export interface ExamIntegrityQuestionBankPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  questions?: QuestionBankPreviewItem[];
  totalElements?: number;
  isLoading?: boolean;
  isLoadingMore?: boolean;
  hasMore?: boolean;
  onLoadMore?: () => void;
  selectedAnswers?: Record<string, string>;
  onAnswerChange?: (questionId: string, answer: string) => void;
  className?: string;
}

export const ExamIntegrityQuestionBankPreviewModal: React.FC<
  ExamIntegrityQuestionBankPreviewModalProps
> = ({
  isOpen,
  onClose,
  questions = [],
  totalElements = 0,
  isLoading = false,
  isLoadingMore = false,
  hasMore = false,
  onLoadMore,
  selectedAnswers = {},
  onAnswerChange,
  className,
}) => {
  const handleScroll: React.UIEventHandler<HTMLDivElement> = (event) => {
    if (!hasMore || isLoadingMore) return;
    const target = event.currentTarget;
    const remaining = target.scrollHeight - target.scrollTop - target.clientHeight;
    if (remaining < 180) {
      onLoadMore?.();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Question Preview (Student View)"
      className={cn('!max-w-6xl w-full', className)}
      footer={
        <div className="flex justify-end">
          <Button variant="primary" size="sm" onClick={onClose}>
            Close
          </Button>
        </div>
      }
    >
      <div className="text-xs text-gray-500 dark:text-gray-400 mb-3">
        Previewing {questions.length} / {totalElements} questions
      </div>

      <div
        className="max-h-[65vh] overflow-y-auto pr-2"
        onScroll={handleScroll}
        data-testid="preview-scroll-container"
      >
        <div className="space-y-5">
          {isLoading && <Skeleton height={340} />}

          {questions.map((question, idx) => (
            <div key={question.id} className="overflow-x-auto pb-1">
              <ExamIntegrityQuestionPanel
                questionNumber={question.questionNumber || idx + 1}
                questionText={question.questionText}
                questionStem={question.questionStem}
                questionType={question.questionType as QuestionType}
                options={question.options}
                questionParts={question.questionParts}
                selectedAnswer={selectedAnswers[question.id] ?? ''}
                onAnswerChange={(answer) => onAnswerChange?.(question.id, answer)}
                imageData={question.imageData}
              />
            </div>
          ))}

          {isLoadingMore && (
            <div className="w-full flex flex-col gap-4" aria-label="Loading preview questions">
              <Skeleton height={340} />
              <Skeleton height={340} />
            </div>
          )}

          {!hasMore && totalElements > 0 && (
            <p className="text-center text-sm text-gray-500 dark:text-gray-400 py-2">
              All questions loaded
            </p>
          )}
        </div>
      </div>
    </Modal>
  );
};

