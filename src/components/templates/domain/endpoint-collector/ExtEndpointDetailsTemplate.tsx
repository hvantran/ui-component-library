import React from 'react';
import { EntityDetailTemplate, EntityDetailTemplateProps } from '../../EntityDetailTemplate';
import { EntitySummaryTemplate } from '../../EntitySummaryTemplate';
import { DataTableProps } from '../../../organisms/DataTable';

export interface ExtEndpointDetailsTemplateProps
  extends Omit<EntityDetailTemplateProps, 'pageTitle'> {
  pageTitle?: string;
  tableProps?: DataTableProps<any>;
}

export const ExtEndpointDetailsTemplate: React.FC<ExtEndpointDetailsTemplateProps> = ({
  pageTitle = 'Endpoint Details',
  tableProps,
  ...props
}) => {
  if (props.activeTab && props.activeTab !== 'Details' && tableProps) {
    return (
      <EntitySummaryTemplate
        pageTitle={pageTitle}
        breadcrumbs={props.breadcrumbs}
        headerActions={props.headerActions}
        tabs={props.tabs}
        activeTab={props.activeTab}
        onTabChange={props.onTabChange}
        tableProps={tableProps}
        floatingActions={props.floatingActions}
        className={props.className}
      />
    );
  }

  return <EntityDetailTemplate pageTitle={pageTitle} {...props} />;
};

ExtEndpointDetailsTemplate.displayName = 'ExtEndpointDetailsTemplate';
export default ExtEndpointDetailsTemplate;
