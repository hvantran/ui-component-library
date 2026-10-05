import { default as React } from '../../../../../node_modules/react';
import { EntityDetailTemplateProps } from '../../EntityDetailTemplate';
export interface JobDetailTemplateProps extends Omit<EntityDetailTemplateProps, 'pageTitle'> {
    pageTitle?: string;
}
export declare const JobDetailTemplate: React.FC<JobDetailTemplateProps>;
export default JobDetailTemplate;
