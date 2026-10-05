import { EntitySummaryTemplate, EntitySummaryTemplateProps } from '../../EntitySummaryTemplate';

export interface ExtResponseSummaryTemplateProps<T = any>
  extends Omit<EntitySummaryTemplateProps<T>, 'pageTitle'> {
  pageTitle?: string;
}

export const ExtResponseSummaryTemplate = <T extends Record<string, any> = any>({
  pageTitle = 'Collected Responses',
  ...props
}: ExtResponseSummaryTemplateProps<T>) => {
  return <EntitySummaryTemplate pageTitle={pageTitle} {...props} />;
};

ExtResponseSummaryTemplate.displayName = 'ExtResponseSummaryTemplate';
export default ExtResponseSummaryTemplate;
