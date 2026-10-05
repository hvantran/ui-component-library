import { EntitySummaryTemplate, EntitySummaryTemplateProps } from '../../EntitySummaryTemplate';

export interface TemplateSummaryTemplateProps<T = any>
  extends Omit<EntitySummaryTemplateProps<T>, 'pageTitle'> {
  pageTitle?: string;
}

export const TemplateSummaryTemplate = <T extends Record<string, any> = any>({
  pageTitle = 'Template Summary',
  ...props
}: TemplateSummaryTemplateProps<T>) => {
  return <EntitySummaryTemplate pageTitle={pageTitle} {...props} />;
};

TemplateSummaryTemplate.displayName = 'TemplateSummaryTemplate';
export default TemplateSummaryTemplate;
