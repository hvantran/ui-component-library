import { default as React } from '../../../../../node_modules/react';
import { WizardCreationTemplateProps } from '../../WizardCreationTemplate';
export interface TemplateCreationTemplateProps extends Omit<WizardCreationTemplateProps, 'pageTitle'> {
    pageTitle?: string;
}
export declare const TemplateCreationTemplate: React.FC<TemplateCreationTemplateProps>;
export default TemplateCreationTemplate;
