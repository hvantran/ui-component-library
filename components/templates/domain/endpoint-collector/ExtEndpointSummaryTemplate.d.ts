import { EntitySummaryTemplateProps } from '../../EntitySummaryTemplate';
export interface ExtEndpointSummaryTemplateProps<T = any> extends Omit<EntitySummaryTemplateProps<T>, 'pageTitle'> {
    pageTitle?: string;
}
export declare const ExtEndpointSummaryTemplate: {
    <T extends Record<string, any> = any>({ pageTitle, ...props }: ExtEndpointSummaryTemplateProps<T>): import("react").JSX.Element;
    displayName: string;
};
export default ExtEndpointSummaryTemplate;
