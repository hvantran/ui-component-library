import { default as React } from '../../../../../node_modules/react';
import { EntityDetailTemplateProps } from '../../EntityDetailTemplate';
export interface TemplateTaskDetailTemplateProps extends Omit<EntityDetailTemplateProps, 'pageTitle'> {
    pageTitle?: string;
}
export declare const TemplateTaskDetailTemplate: React.FC<TemplateTaskDetailTemplateProps>;
export default TemplateTaskDetailTemplate;
