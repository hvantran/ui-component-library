import { EntitySummaryTemplateProps } from '../../EntitySummaryTemplate';
export interface TemplateSummaryTemplateProps<T = any> extends Omit<EntitySummaryTemplateProps<T>, 'pageTitle'> {
    pageTitle?: string;
}
export declare const TemplateSummaryTemplate: {
    <T extends Record<string, any> = any>({ pageTitle, ...props }: TemplateSummaryTemplateProps<T>): import("react").JSX.Element;
    displayName: string;
};
export default TemplateSummaryTemplate;
