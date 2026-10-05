import { default as React } from '../../../../../node_modules/react';
import { WizardCreationTemplateProps } from '../../WizardCreationTemplate';
export interface ActionCreationTemplateProps extends Omit<WizardCreationTemplateProps, 'pageTitle'> {
    pageTitle?: string;
}
export declare const ActionCreationTemplate: React.FC<ActionCreationTemplateProps>;
export default ActionCreationTemplate;
