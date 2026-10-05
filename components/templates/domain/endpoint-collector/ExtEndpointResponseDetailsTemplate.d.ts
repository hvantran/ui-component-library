import { default as React } from '../../../../../node_modules/react';
import { EntityDetailTemplateProps } from '../../EntityDetailTemplate';
export interface ExtEndpointResponseDetailsTemplateProps extends Omit<EntityDetailTemplateProps, 'pageTitle'> {
    pageTitle?: string;
}
export declare const ExtEndpointResponseDetailsTemplate: React.FC<ExtEndpointResponseDetailsTemplateProps>;
export default ExtEndpointResponseDetailsTemplate;
