import React from 'react';
import { WizardCreationTemplate, WizardCreationTemplateProps } from '../../WizardCreationTemplate';

export interface TemplateCreationTemplateProps
  extends Omit<WizardCreationTemplateProps, 'pageTitle'> {
  pageTitle?: string;
}

export const TemplateCreationTemplate: React.FC<TemplateCreationTemplateProps> = ({
  pageTitle = 'Create Template',
  ...props
}) => {
  return <WizardCreationTemplate pageTitle={pageTitle} {...props} />;
};

TemplateCreationTemplate.displayName = 'TemplateCreationTemplate';
export default TemplateCreationTemplate;
