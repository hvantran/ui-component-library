import React, { useState } from 'react';
import { LayoutGrid, List } from 'lucide-react';
import { GenericActionMetadata, SpeedDialActionMetadata } from '../../../../types/metadata';
import { cn } from '../../../../utils/cn';
import { BreadcrumbItem } from '../../../molecules/Breadcrumbs';
import { ViewModeToggle, ViewModeOption } from '../../../molecules/ViewModeToggle';
import { DataTable, DataTableProps } from '../../../organisms/DataTable';
import { BoardView, BoardViewProps } from '../../../organisms/BoardView';
import { FloatingActions } from '../../../organisms/FloatingActions';
import { PageHeader } from '../../../organisms/PageHeader';

export interface ActionSummaryTemplateProps<T = any> {
  pageTitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  headerActions?: GenericActionMetadata[];
  tableProps: DataTableProps<T>;
  boardProps?: BoardViewProps;
  defaultViewMode?: 'board' | 'list';
  onViewModeChange?: (mode: 'board' | 'list') => void;
  floatingActions?: SpeedDialActionMetadata[];
  className?: string;
}

const defaultModes: ViewModeOption<'board' | 'list'>[] = [
  { value: 'board', label: 'Board', icon: React.createElement(LayoutGrid, { size: 16 }) },
  { value: 'list', label: 'List', icon: React.createElement(List, { size: 16 }) },
];

export const ActionSummaryTemplate = <T extends Record<string, any> = any>({
  pageTitle = 'Action Summary',
  breadcrumbs,
  headerActions,
  tableProps,
  boardProps,
  defaultViewMode = 'board',
  onViewModeChange,
  floatingActions,
  className,
}: ActionSummaryTemplateProps<T>) => {
  const [viewMode, setViewMode] = useState<'board' | 'list'>(defaultViewMode);

  const handleToggle = (mode: 'board' | 'list') => {
    setViewMode(mode);
    onViewModeChange?.(mode);
  };

  return (
    <div
      role="main"
      className={cn('w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 font-sans', className)}
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <PageHeader title={pageTitle} breadcrumbs={breadcrumbs} actions={headerActions} />
        {boardProps && (
          <div className="shrink-0 self-start sm:self-center">
            <ViewModeToggle mode={viewMode} modes={defaultModes} onChange={handleToggle} />
          </div>
        )}
      </div>

      <div className="w-full">
        {viewMode === 'board' && boardProps ? (
          <BoardView {...boardProps} />
        ) : (
          <DataTable {...tableProps} />
        )}
      </div>

      {floatingActions && floatingActions.length > 0 && (
        <FloatingActions actions={floatingActions} />
      )}
    </div>
  );
};

ActionSummaryTemplate.displayName = 'ActionSummaryTemplate';
export default ActionSummaryTemplate;
