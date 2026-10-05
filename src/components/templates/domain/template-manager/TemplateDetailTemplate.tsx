import React from 'react';
import { EntityDetailTemplate, EntityDetailTemplateProps } from '../../EntityDetailTemplate';

export interface TemplateDetailTemplateProps
  extends Omit<EntityDetailTemplateProps, 'pageTitle'> {
  pageTitle?: string;
}

export const TemplateDetailTemplate: React.FC<TemplateDetailTemplateProps> = ({
  pageTitle = 'Template Details',
  ...props
}) => {
  return <EntityDetailTemplate pageTitle={pageTitle} {...props} />;
};

TemplateDetailTemplate.displayName = 'TemplateDetailTemplate';
export default TemplateDetailTemplate;
