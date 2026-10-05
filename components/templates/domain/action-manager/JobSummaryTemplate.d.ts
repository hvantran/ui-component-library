import { EntitySummaryTemplateProps } from '../../EntitySummaryTemplate';
export interface JobSummaryTemplateProps<T = any> extends Omit<EntitySummaryTemplateProps<T>, 'pageTitle'> {
    pageTitle?: string;
}
export declare const JobSummaryTemplate: {
    <T extends Record<string, any> = any>({ pageTitle, ...props }: JobSummaryTemplateProps<T>): import("react").JSX.Element;
    displayName: string;
};
export default JobSummaryTemplate;
