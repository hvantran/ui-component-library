import { EntitySummaryTemplate, EntitySummaryTemplateProps } from '../../EntitySummaryTemplate';

export interface ExtEndpointSummaryTemplateProps<T = any>
  extends Omit<EntitySummaryTemplateProps<T>, 'pageTitle'> {
  pageTitle?: string;
}

export const ExtEndpointSummaryTemplate = <T extends Record<string, any> = any>({
  pageTitle = 'External Endpoints',
  ...props
}: ExtEndpointSummaryTemplateProps<T>) => {
  return <EntitySummaryTemplate pageTitle={pageTitle} {...props} />;
};

ExtEndpointSummaryTemplate.displayName = 'ExtEndpointSummaryTemplate';
export default ExtEndpointSummaryTemplate;
