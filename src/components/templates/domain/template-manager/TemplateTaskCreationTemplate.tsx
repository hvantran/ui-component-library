import React from 'react';
import { WizardCreationTemplate, WizardCreationTemplateProps } from '../../WizardCreationTemplate';

export interface TemplateTaskCreationTemplateProps
  extends Omit<WizardCreationTemplateProps, 'pageTitle'> {
  pageTitle?: string;
}

export const TemplateTaskCreationTemplate: React.FC<TemplateTaskCreationTemplateProps> = ({
  pageTitle = 'Create Template Task',
  ...props
}) => {
  return <WizardCreationTemplate pageTitle={pageTitle} {...props} />;
};

TemplateTaskCreationTemplate.displayName = 'TemplateTaskCreationTemplate';
export default TemplateTaskCreationTemplate;
