import { default as React } from '../../../../../node_modules/react';
import { WizardCreationTemplateProps } from '../../WizardCreationTemplate';
export interface JobCreationTemplateProps extends Omit<WizardCreationTemplateProps, 'pageTitle'> {
    pageTitle?: string;
}
export declare const JobCreationTemplate: React.FC<JobCreationTemplateProps>;
export default JobCreationTemplate;
