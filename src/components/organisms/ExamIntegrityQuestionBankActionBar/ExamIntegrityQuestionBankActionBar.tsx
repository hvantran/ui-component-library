import React from 'react';
import { Eye, PlusCircle, Trash2 } from 'lucide-react';
import { Button } from '../../atoms/Button';
import { cn } from '../../../utils/cn';

export interface ExamIntegrityQuestionBankActionBarProps {
  totalCount: number;
  onPreview?: () => void;
  onAddQuestion?: () => void;
  onDeleteAll?: () => void;
  className?: string;
}

export const ExamIntegrityQuestionBankActionBar: React.FC<
  ExamIntegrityQuestionBankActionBarProps
> = ({ totalCount, onPreview, onAddQuestion, onDeleteAll, className }) => {
  return (
    <div
      className={cn(
        'flex items-center justify-between w-full flex-wrap gap-2',
        className
      )}
    >
      <span className="text-[13px] text-gray-500 dark:text-gray-400">
        Showing <strong>{totalCount}</strong> results
      </span>
      <div className="flex gap-2 items-center">
        {totalCount > 0 && onPreview && (
          <span title="Preview questions in student view">
            <Button
              size="sm"
              variant="outlined"
              icon={<Eye size={16} />}
              onClick={onPreview}
            >
              Preview
            </Button>
          </span>
        )}
        {onAddQuestion && (
          <span title="Add a new question to the bank">
            <Button
              size="sm"
              variant="primary"
              icon={<PlusCircle size={16} />}
              onClick={onAddQuestion}
            >
              Add Question
            </Button>
          </span>
        )}
        {totalCount > 0 && onDeleteAll && (
          <span title="Delete all questions from the bank">
            <Button
              size="sm"
              variant="danger"
              icon={<Trash2 size={16} />}
              onClick={onDeleteAll}
            >
              Delete All
            </Button>
          </span>
        )}
      </div>
    </div>
  );
};

