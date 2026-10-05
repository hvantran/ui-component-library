import React from 'react';
import { EntityDetailTemplate, EntityDetailTemplateProps } from '../../EntityDetailTemplate';

export interface TemplateTaskDetailTemplateProps
  extends Omit<EntityDetailTemplateProps, 'pageTitle'> {
  pageTitle?: string;
}

export const TemplateTaskDetailTemplate: React.FC<TemplateTaskDetailTemplateProps> = ({
  pageTitle = 'Template Task Details',
  ...props
}) => {
  return <EntityDetailTemplate pageTitle={pageTitle} {...props} />;
};

TemplateTaskDetailTemplate.displayName = 'TemplateTaskDetailTemplate';
export default TemplateTaskDetailTemplate;
