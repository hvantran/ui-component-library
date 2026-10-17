import React from 'react';
import { Skeleton } from '../../atoms/Skeleton';
import { Modal } from '../../atoms/Modal';
import { Button } from '../../atoms/Button';
import { EmptyState } from '../../molecules/EmptyState';
import { ExamIntegrityStudentExamHeader } from '../ExamIntegrityStudentExamHeader';
import { ExamIntegrityStudentExamNavigationBar } from '../ExamIntegrityStudentExamNavigationBar';
import { ExamIntegrityQuestionPanel } from '../ExamIntegrityQuestionPanel';
import type { QuestionOption } from '../ExamIntegrityQuestionPanel';

export interface PreviewQuestionDTO {
  questionNumber: number;
  content: string;
  stem?: string;
  type?: string;
  options?: unknown;
  questionParts?: any[];
  imageData?: string;
}

export interface ExamIntegrityExamPreviewModalProps {
  open: boolean;
  onClose: () => void;
  examTitle?: string;
  durationSeconds?: number;
  questions?: PreviewQuestionDTO[];
  isLoading?: boolean;
  mapOptions?: (options: unknown) => QuestionOption[];
}

export const ExamIntegrityExamPreviewModal: React.FC<ExamIntegrityExamPreviewModalProps> = ({
  open,
  onClose,
  examTitle = 'Exam Preview',
  durationSeconds = 0,
  questions = [],
  isLoading = false,
  mapOptions,
}) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    if (open) {
      setCurrentIndex(0);
    }
  }, [open]);

  if (!open) return null;

  const totalQuestions = questions.length;
  const activeQuestion = questions[currentIndex];

  const defaultMapOptions = (opts: unknown): QuestionOption[] => {
    if (!Array.isArray(opts)) return [];
    return opts.map((opt: unknown, i: number) => {
      const text = typeof opt === 'string' ? opt : String(opt);
      const cleaned = text.replace(/^[A-Da-d][./、]\s*/u, '').trim();
      const labels = ['A', 'B', 'C', 'D', 'E', 'F'];
      return {
        id: labels[i] ?? String(i + 1),
        text: cleaned,
      };
    });
  };

  const resolvedMapOptions = mapOptions ?? defaultMapOptions;

  const footerActions = (
    <div className="flex justify-end gap-2">
      <Button type="button" variant="neutral" onClick={onClose}>
        Close Preview
      </Button>
    </div>
  );

  return (
    <Modal
      isOpen={open}
      onClose={onClose}
      title="Exam Preview"
      className="!max-w-6xl w-full"
      footer={footerActions}
    >
      <div>
        <div className="mb-4 flex items-center justify-between gap-3 text-sm text-gray-500 dark:text-gray-400">
          <span>{examTitle}</span>
          <span>
            {totalQuestions > 0
              ? `${currentIndex + 1} / ${totalQuestions} questions`
              : 'Previewing exam layout'}
          </span>
        </div>

        {isLoading ? (
          <Skeleton height={420} />
        ) : totalQuestions === 0 || !activeQuestion ? (
          <EmptyState
            title="No previewable questions"
            description="This exam does not contain previewable questions yet."
          />
        ) : (
          <div className="space-y-6">
            <ExamIntegrityStudentExamHeader
              currentQuestion={currentIndex + 1}
              totalQuestions={totalQuestions}
              remainingSeconds={durationSeconds}
              isProctoringActive={false}
              onSettings={() => {}}
            />
            <div className="max-h-[58vh] overflow-y-auto pr-2">
              <div className="space-y-5 pb-2">
                <div className="overflow-x-auto pb-1">
                  <ExamIntegrityQuestionPanel
                    questionNumber={activeQuestion.questionNumber}
                    questionText={activeQuestion.content}
                    questionStem={activeQuestion.stem}
                    questionType={activeQuestion.type}
                    options={resolvedMapOptions(activeQuestion.options)}
                    questionParts={activeQuestion.questionParts}
                    selectedAnswer=""
                    selectedAnswerParts={[]}
                    disabled
                    imageData={activeQuestion.imageData}
                    onAnswerChange={() => {}}
                  />
                </div>
                <ExamIntegrityStudentExamNavigationBar
                  canGoPrev={currentIndex > 0}
                  canGoNext={currentIndex < totalQuestions - 1}
                  isLastQuestion={currentIndex === totalQuestions - 1}
                  onPrevious={() =>
                    setCurrentIndex((index) => Math.max(0, index - 1))
                  }
                  onNext={() =>
                    setCurrentIndex((index) =>
                      Math.min(totalQuestions - 1, index + 1)
                    )
                  }
                  onSubmit={onClose}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};

ExamIntegrityExamPreviewModal.displayName = 'ExamIntegrityExamPreviewModal';
export default ExamIntegrityExamPreviewModal;

