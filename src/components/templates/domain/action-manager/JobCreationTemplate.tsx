import React from 'react';
import { WizardCreationTemplate, WizardCreationTemplateProps } from '../../WizardCreationTemplate';

export interface JobCreationTemplateProps
  extends Omit<WizardCreationTemplateProps, 'pageTitle'> {
  pageTitle?: string;
}

export const JobCreationTemplate: React.FC<JobCreationTemplateProps> = ({
  pageTitle = 'Create Job',
  ...props
}) => {
  return <WizardCreationTemplate pageTitle={pageTitle} {...props} />;
};

JobCreationTemplate.displayName = 'JobCreationTemplate';
export default JobCreationTemplate;
