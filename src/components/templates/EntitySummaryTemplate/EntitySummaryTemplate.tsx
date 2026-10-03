import { GenericActionMetadata, SpeedDialActionMetadata, TabMetadata } from '../../../types/metadata';
import { cn } from '../../../utils/cn';
import { BreadcrumbItem } from '../../molecules/Breadcrumbs';
import { Tabs } from '../../molecules/Tabs';
import { DataTable, DataTableProps } from '../../organisms/DataTable';
import { FloatingActions } from '../../organisms/FloatingActions';
import { PageHeader } from '../../organisms/PageHeader';

export interface EntitySummaryTemplateProps<T = any> {
  pageTitle: string;
  breadcrumbs?: BreadcrumbItem[];
  headerActions?: GenericActionMetadata[];
  tabs?: TabMetadata[];
  activeTab?: string;
  onTabChange?: (tabId: string) => void;
  tableProps: DataTableProps<T>;
  floatingActions?: SpeedDialActionMetadata[];
  className?: string;
}

export function EntitySummaryTemplate<T extends Record<string, any> = any>({
  pageTitle,
  breadcrumbs,
  headerActions,
  tabs,
  activeTab,
  onTabChange,
  tableProps,
  floatingActions,
  className,
}: EntitySummaryTemplateProps<T>) {
  return (
    <div
      role="main"
      className={cn('w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 font-sans', className)}
    >
      <PageHeader
        title={pageTitle}
        breadcrumbs={breadcrumbs}
        actions={headerActions}
      />

      {tabs && tabs.length > 0 && onTabChange && (
        <div className="mb-6">
          <Tabs
            tabs={tabs.map((t) => ({ id: t.name, label: t.label || t.name }))}
            activeTab={activeTab || tabs[0].name}
            onChange={onTabChange}
          />
        </div>
      )}

      <div className="w-full">
        <DataTable {...tableProps} />
      </div>

      {floatingActions && floatingActions.length > 0 && (
        <FloatingActions actions={floatingActions} />
      )}
    </div>
  );
}

EntitySummaryTemplate.displayName = 'EntitySummaryTemplate';
export default EntitySummaryTemplate;
