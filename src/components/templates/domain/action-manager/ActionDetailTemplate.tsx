import React from 'react';
import { List, PlusCircle } from 'lucide-react';
import { EntityDetailTemplate, EntityDetailTemplateProps } from '../../EntityDetailTemplate';
import { DataTable, DataTableProps } from '../../../organisms/DataTable';

export interface ActionDetailTemplateProps
  extends Omit<EntityDetailTemplateProps, 'pageTitle'> {
  pageTitle?: string;
  jobsTableProps?: DataTableProps<any>;
  onAddJob?: () => void;
  children?: React.ReactNode;
}

export const ActionDetailTemplate: React.FC<ActionDetailTemplateProps> = ({
  pageTitle = 'Action Details',
  jobsTableProps,
  onAddJob,
  children,
  ...props
}) => {
  return (
    <>
      <EntityDetailTemplate pageTitle={pageTitle} {...props} />
      {jobsTableProps && (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 font-sans -mt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div>
              <h2 className="text-lg font-semibold text-secondary-900 dark:text-white flex items-center gap-2">
                <List className="w-5 h-5 text-primary-600" />
                Jobs in this Action
              </h2>
              <p className="text-xs text-secondary-500">
                Manage and monitor jobs linked to this action definition
              </p>
            </div>
            {onAddJob && (
              <button
                type="button"
                onClick={onAddJob}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-btn bg-primary-600 text-white hover:bg-primary-700 font-medium text-xs shadow-sm transition-colors"
              >
                <PlusCircle className="w-4 h-4" />
                <span>Add Job</span>
              </button>
            )}
          </div>
          <DataTable {...jobsTableProps} />
        </div>
      )}
      {children}
    </>
  );
};

ActionDetailTemplate.displayName = 'ActionDetailTemplate';
export default ActionDetailTemplate;
