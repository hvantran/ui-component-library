import React from 'react';
import { WizardCreationTemplate, WizardCreationTemplateProps } from '../../WizardCreationTemplate';

export interface ActionCreationTemplateProps
  extends Omit<WizardCreationTemplateProps, 'pageTitle'> {
  pageTitle?: string;
}

export const ActionCreationTemplate: React.FC<ActionCreationTemplateProps> = ({
  pageTitle = 'Create Action',
  ...props
}) => {
  return <WizardCreationTemplate pageTitle={pageTitle} {...props} />;
};

ActionCreationTemplate.displayName = 'ActionCreationTemplate';
export default ActionCreationTemplate;
