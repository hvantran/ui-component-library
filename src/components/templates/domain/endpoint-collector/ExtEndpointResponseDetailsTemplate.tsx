import React from 'react';
import { EntityDetailTemplate, EntityDetailTemplateProps } from '../../EntityDetailTemplate';

export interface ExtEndpointResponseDetailsTemplateProps
  extends Omit<EntityDetailTemplateProps, 'pageTitle'> {
  pageTitle?: string;
}

export const ExtEndpointResponseDetailsTemplate: React.FC<
  ExtEndpointResponseDetailsTemplateProps
> = ({ pageTitle = 'Response Details', ...props }) => {
  return <EntityDetailTemplate pageTitle={pageTitle} {...props} />;
};

ExtEndpointResponseDetailsTemplate.displayName = 'ExtEndpointResponseDetailsTemplate';
export default ExtEndpointResponseDetailsTemplate;
