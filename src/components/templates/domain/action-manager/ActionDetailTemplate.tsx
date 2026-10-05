import React from 'react';
import { EntityDetailTemplate, EntityDetailTemplateProps } from '../../EntityDetailTemplate';

export interface ActionDetailTemplateProps
  extends Omit<EntityDetailTemplateProps, 'pageTitle'> {
  pageTitle?: string;
}

export const ActionDetailTemplate: React.FC<ActionDetailTemplateProps> = ({
  pageTitle = 'Action Details',
  ...props
}) => {
  return <EntityDetailTemplate pageTitle={pageTitle} {...props} />;
};

ActionDetailTemplate.displayName = 'ActionDetailTemplate';
export default ActionDetailTemplate;
