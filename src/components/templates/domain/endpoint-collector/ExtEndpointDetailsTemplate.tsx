import React from 'react';
import { EntityDetailTemplate, EntityDetailTemplateProps } from '../../EntityDetailTemplate';

export interface ExtEndpointDetailsTemplateProps
  extends Omit<EntityDetailTemplateProps, 'pageTitle'> {
  pageTitle?: string;
}

export const ExtEndpointDetailsTemplate: React.FC<ExtEndpointDetailsTemplateProps> = ({
  pageTitle = 'Endpoint Details',
  ...props
}) => {
  return <EntityDetailTemplate pageTitle={pageTitle} {...props} />;
};

ExtEndpointDetailsTemplate.displayName = 'ExtEndpointDetailsTemplate';
export default ExtEndpointDetailsTemplate;
