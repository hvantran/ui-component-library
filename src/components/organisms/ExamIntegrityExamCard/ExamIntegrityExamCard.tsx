import React from 'react';
import {
  Clock,
  BookOpen,
  Star,
  Eye,
  ListChecks,
  RefreshCw,
  Trash2,
  Download,
} from 'lucide-react';
import { cn } from '../../../utils/cn';
import { StatusChip } from '../../atoms/StatusChip';
import { Chip } from '../../atoms/Chip';
import { Button } from '../../atoms/Button';

export interface ExamIntegrityExamCardProps {
  examId: string;
  title: string;
  durationSeconds: number;
  questionCount: number;
  totalPoints: number;
  tags?: string[];
  status?: string;
  onPreview: () => void;
  onManageQuestions: (examId: string) => void;
  isUpdatingQuestions?: boolean;
  onExport: () => void;
  isExporting?: boolean;
  onDelete: () => void;
  onSyncQuestions: (examId: string, title: string) => void;
  isSyncingQuestions?: boolean;
  className?: string;
}

export const ExamIntegrityExamCard: React.FC<ExamIntegrityExamCardProps> = ({
  examId,
  title,
  durationSeconds,
  questionCount,
  totalPoints,
  tags,
  status,
  onPreview,
  onManageQuestions,
  isUpdatingQuestions = false,
  onExport,
  isExporting = false,
  onDelete,
  onSyncQuestions,
  isSyncingQuestions = false,
  className,
}) => {
  const isPublished = status === 'ACTIVE';

  return (
    <div
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm transition-all duration-200 hover:shadow-md hover:border-primary-300 min-h-[200px]',
        className
      )}
    >
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-600 rounded-l-2xl" />

      <div className="flex flex-col flex-1 pl-5 pr-4 pt-4 pb-3">
        <h3 className="font-semibold text-base text-gray-900 dark:text-gray-100 leading-snug line-clamp-2 mb-3">
          {title}
        </h3>

        {status && (
          <div className="mb-3">
            <StatusChip
              label={isPublished ? 'Published' : status}
              variant={isPublished ? 'success' : 'warning'}
              size="sm"
            />
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-lg px-2.5 py-1">
            <Clock size={13} className="text-primary-500" />
            {Math.round(durationSeconds / 60)} min
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-lg px-2.5 py-1">
            <BookOpen size={13} className="text-primary-500" />
            {questionCount} questions
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-lg px-2.5 py-1">
            <Star size={13} className="text-amber-400" />
            {totalPoints} pts
          </span>
        </div>

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {tags.map((t) => (
              <Chip key={t} label={t} size="sm" variant="info" />
            ))}
          </div>
        )}
      </div>

      <div className="flex items-center justify-end gap-2 border-t border-gray-100 dark:border-gray-700 px-4 py-2.5 flex-wrap">
        <Button
          type="button"
          variant="ghost"
          size="sm"
          icon={<Eye size={13} />}
          iconPlacement="left"
          onClick={onPreview}
        >
          Preview
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          icon={<ListChecks size={13} />}
          iconPlacement="left"
          onClick={() => onManageQuestions(examId)}
          disabled={isUpdatingQuestions}
        >
          {isUpdatingQuestions ? 'Updating…' : 'Manage Questions'}
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          icon={
            <RefreshCw
              size={13}
              className={isSyncingQuestions ? 'animate-spin' : ''}
            />
          }
          iconPlacement="left"
          onClick={() => onSyncQuestions(examId, title)}
          disabled={isSyncingQuestions || isUpdatingQuestions}
        >
          {isSyncingQuestions ? 'Syncing…' : 'Sync Bank'}
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          icon={<Download size={13} />}
          iconPlacement="left"
          onClick={onExport}
          disabled={isExporting}
        >
          {isExporting ? 'Exporting…' : 'Export JSON'}
        </Button>
        <Button
          type="button"
          variant="danger"
          size="sm"
          icon={<Trash2 size={13} />}
          iconPlacement="left"
          onClick={onDelete}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

ExamIntegrityExamCard.displayName = 'ExamIntegrityExamCard';
export default ExamIntegrityExamCard;

