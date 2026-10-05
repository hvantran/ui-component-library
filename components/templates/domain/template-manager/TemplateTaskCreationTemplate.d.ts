import { default as React } from '../../../../../node_modules/react';
import { WizardCreationTemplateProps } from '../../WizardCreationTemplate';
export interface TemplateTaskCreationTemplateProps extends Omit<WizardCreationTemplateProps, 'pageTitle'> {
    pageTitle?: string;
}
export declare const TemplateTaskCreationTemplate: React.FC<TemplateTaskCreationTemplateProps>;
export default TemplateTaskCreationTemplate;
