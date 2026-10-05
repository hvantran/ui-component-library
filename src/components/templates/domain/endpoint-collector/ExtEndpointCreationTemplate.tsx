import React from 'react';
import { WizardCreationTemplate, WizardCreationTemplateProps } from '../../WizardCreationTemplate';

export interface ExtEndpointCreationTemplateProps
  extends Omit<WizardCreationTemplateProps, 'pageTitle'> {
  pageTitle?: string;
}

export const ExtEndpointCreationTemplate: React.FC<ExtEndpointCreationTemplateProps> = ({
  pageTitle = 'Create External Endpoint',
  ...props
}) => {
  return <WizardCreationTemplate pageTitle={pageTitle} {...props} />;
};

ExtEndpointCreationTemplate.displayName = 'ExtEndpointCreationTemplate';
export default ExtEndpointCreationTemplate;
