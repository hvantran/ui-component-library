import { EntitySummaryTemplateProps } from '../../EntitySummaryTemplate';
export interface TemplateTaskSummaryTemplateProps<T = any> extends Omit<EntitySummaryTemplateProps<T>, 'pageTitle'> {
    pageTitle?: string;
}
export declare const TemplateTaskSummaryTemplate: {
    <T extends Record<string, any> = any>({ pageTitle, ...props }: TemplateTaskSummaryTemplateProps<T>): import("react").JSX.Element;
    displayName: string;
};
export default TemplateTaskSummaryTemplate;
