import React from 'react';
import { cn } from '../../../../utils/cn';
import { Card } from '../../../atoms/Card';
import { Spinner } from '../../../atoms/Spinner';

export interface ExamIntegrityScoringTemplateProps {
  pageTitle?: string;
  pageSubtitle?: string;
  isLoading?: boolean;
  emptyState?: React.ReactNode;
  queueSlot: React.ReactNode;
  detailSlot: React.ReactNode;
  className?: string;
}

export const ExamIntegrityScoringTemplate: React.FC<ExamIntegrityScoringTemplateProps> = ({
  pageTitle = 'Essay Scoring',
  pageSubtitle = 'Review and score essay questions manually.',
  isLoading = false,
  emptyState,
  queueSlot,
  detailSlot,
  className,
}) => {
  return (
    <div className={cn('space-y-6', className)}>
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">{pageTitle}</h1>
        {pageSubtitle && (
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{pageSubtitle}</p>
        )}
      </div>

      {isLoading ? (
        <Card className="flex items-center gap-3 p-6">
          <Spinner size="sm" />
          <span className="text-sm text-gray-600 dark:text-gray-400">Loading scoring queue…</span>
        </Card>
      ) : emptyState ? (
        emptyState
      ) : (
        <div className="grid grid-cols-1 xl:grid-cols-[340px_minmax(0,1fr)] gap-6">
          <div className="space-y-3">{queueSlot}</div>
          <div className="space-y-6">{detailSlot}</div>
        </div>
      )}
    </div>
  );
};

ExamIntegrityScoringTemplate.displayName = 'ExamIntegrityScoringTemplate';
export default ExamIntegrityScoringTemplate;
