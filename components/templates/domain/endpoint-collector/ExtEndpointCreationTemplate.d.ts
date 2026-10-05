import { default as React } from '../../../../../node_modules/react';
import { WizardCreationTemplateProps } from '../../WizardCreationTemplate';
export interface ExtEndpointCreationTemplateProps extends Omit<WizardCreationTemplateProps, 'pageTitle'> {
    pageTitle?: string;
}
export declare const ExtEndpointCreationTemplate: React.FC<ExtEndpointCreationTemplateProps>;
export default ExtEndpointCreationTemplate;
