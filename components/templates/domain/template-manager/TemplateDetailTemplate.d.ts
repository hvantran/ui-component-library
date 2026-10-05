import { default as React } from '../../../../../node_modules/react';
import { EntityDetailTemplateProps } from '../../EntityDetailTemplate';
export interface TemplateDetailTemplateProps extends Omit<EntityDetailTemplateProps, 'pageTitle'> {
    pageTitle?: string;
}
export declare const TemplateDetailTemplate: React.FC<TemplateDetailTemplateProps>;
export default TemplateDetailTemplate;
