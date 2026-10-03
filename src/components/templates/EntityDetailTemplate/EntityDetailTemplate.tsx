import React from 'react';
import { GenericActionMetadata, PropertyMetadata, SpeedDialActionMetadata, TabMetadata } from '../../../types/metadata';
import { cn } from '../../../utils/cn';
import { Card } from '../../atoms/Card';
import { BreadcrumbItem } from '../../molecules/Breadcrumbs';
import { Tabs } from '../../molecules/Tabs';
import { DynamicForm } from '../../organisms/DynamicForm';
import { FloatingActions } from '../../organisms/FloatingActions';
import { PageHeader } from '../../organisms/PageHeader';

export interface EntityDetailTemplateProps {
  pageTitle: string;
  breadcrumbs?: BreadcrumbItem[];
  headerActions?: GenericActionMetadata[];
  tabs?: TabMetadata[];
  activeTab?: string;
  onTabChange?: (tabId: string) => void;
  properties: PropertyMetadata[];
  onPropertyChange: (propName: string, value: any) => void;
  floatingActions?: SpeedDialActionMetadata[];
  disabled?: boolean;
  className?: string;
  errors?: Record<string, string>;
}

export const EntityDetailTemplate: React.FC<EntityDetailTemplateProps> = ({
  pageTitle,
  breadcrumbs,
  headerActions,
  tabs,
  activeTab,
  onTabChange,
  properties,
  onPropertyChange,
  floatingActions,
  disabled = false,
  className,
  errors,
}) => {
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

      <Card variant="outlined" className="p-6">
        <DynamicForm
          properties={properties}
          onChange={onPropertyChange}
          disabled={disabled}
          errors={errors}
        />
      </Card>

      {floatingActions && floatingActions.length > 0 && (
        <FloatingActions actions={floatingActions} />
      )}
    </div>
  );
};

EntityDetailTemplate.displayName = 'EntityDetailTemplate';
export default EntityDetailTemplate;
