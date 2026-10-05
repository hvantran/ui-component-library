import { EntitySummaryTemplateProps } from '../../EntitySummaryTemplate';
export interface ExtResponseSummaryTemplateProps<T = any> extends Omit<EntitySummaryTemplateProps<T>, 'pageTitle'> {
    pageTitle?: string;
}
export declare const ExtResponseSummaryTemplate: {
    <T extends Record<string, any> = any>({ pageTitle, ...props }: ExtResponseSummaryTemplateProps<T>): import("react").JSX.Element;
    displayName: string;
};
export default ExtResponseSummaryTemplate;
