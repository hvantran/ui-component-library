import React from 'react';
import { Star, History, Pencil, Trash2 } from 'lucide-react';
import { Button } from '../../atoms/Button';
import { cn } from '../../../utils/cn';

export interface ExamIntegrityQuestionBankCardProps {
  index: number;
  content: string;
  type?: string;
  points?: number;
  usesCount?: number;
  tags?: string[];
  onEdit?: () => void;
  onDelete?: () => void;
  className?: string;
}

export const ExamIntegrityQuestionBankCard: React.FC<ExamIntegrityQuestionBankCardProps> = ({
  index,
  content,
  type = 'MCQ',
  points = 1,
  usesCount = 0,
  tags = [],
  onEdit,
  onDelete,
  className,
}) => {
  return (
    <div
      className={cn(
        'group rounded-lg px-5 py-4 flex items-start gap-4 relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 transition-shadow hover:shadow-md',
        className
      )}
    >
      {/* Index */}
      <span className="text-[13px] font-semibold text-gray-500 dark:text-gray-400 min-w-[28px] pt-0.5 shrink-0">
        {index + 1}.
      </span>

      {/* Main content */}
      <div className="flex-1 min-w-0">
        <p className="text-sm text-gray-900 dark:text-gray-100 leading-relaxed mb-2 line-clamp-2">
          {content}
        </p>
        <div className="flex items-center gap-2 flex-wrap">
          <span className="inline-flex items-center text-[11px] font-semibold bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded px-1.5 h-[22px]">
            {type}
          </span>
          <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
            <Star size={14} />
            <span className="text-xs">{points} pts</span>
          </div>
          <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
            <History size={14} />
            <span className="text-xs">{usesCount} uses</span>
          </div>
          {tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center text-[11px] bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded px-1.5 h-5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Actions (shown on hover) */}
      <div className="flex items-center gap-1 transition-opacity duration-150 opacity-0 group-hover:opacity-100">
        {onEdit && (
          <Button
            onClick={onEdit}
            variant="outlined"
            size="sm"
            icon={<Pencil size={16} />}
            iconPlacement="left"
            className="flex items-center gap-1 text-xs px-2 py-1 rounded"
          >
            Edit
          </Button>
        )}
        {onDelete && (
          <Button
            onClick={onDelete}
            variant="danger"
            size="sm"
            icon={<Trash2 size={16} />}
            iconPlacement="left"
            className="flex items-center gap-1 text-xs px-2 py-1 rounded"
          >
            Delete
          </Button>
        )}
      </div>
    </div>
  );
};

