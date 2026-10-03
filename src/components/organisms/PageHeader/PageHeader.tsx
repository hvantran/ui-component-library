import React from 'react';
import { GenericActionMetadata } from '../../../types/metadata';
import { cn } from '../../../utils/cn';
import { Button } from '../../atoms/Button';
import { Breadcrumbs, BreadcrumbItem } from '../../molecules/Breadcrumbs';

export interface PageHeaderProps {
  title: string;
  breadcrumbs?: BreadcrumbItem[];
  actions?: GenericActionMetadata[];
  className?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  breadcrumbs,
  actions = [],
  className,
}) => {
  return (
    <header className={cn('flex flex-col gap-3 pb-4 mb-6 border-b border-secondary-200 dark:border-secondary-800', className)}>
      {breadcrumbs && breadcrumbs.length > 0 && (
        <Breadcrumbs items={breadcrumbs} />
      )}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-2xl font-bold tracking-tight text-secondary-900 dark:text-white font-sans">
          {title}
        </h1>
        {actions.length > 0 && (
          <div className="flex items-center gap-2">
            {actions.map((act) => (
              <Button
                key={act.actionName}
                variant={act.isSecondary ? 'secondary' : 'primary'}
                disabled={act.disabled}
                onClick={act.onClick}
              >
                {act.actionIcon && <span className="w-4 h-4 mr-1.5">{act.actionIcon}</span>}
                {act.actionLabel}
              </Button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

PageHeader.displayName = 'PageHeader';
export default PageHeader;
