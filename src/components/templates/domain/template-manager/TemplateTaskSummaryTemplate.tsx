import { EntitySummaryTemplate, EntitySummaryTemplateProps } from '../../EntitySummaryTemplate';

export interface TemplateTaskSummaryTemplateProps<T = any>
  extends Omit<EntitySummaryTemplateProps<T>, 'pageTitle'> {
  pageTitle?: string;
}

export const TemplateTaskSummaryTemplate = <T extends Record<string, any> = any>({
  pageTitle = 'Template Task Summary',
  ...props
}: TemplateTaskSummaryTemplateProps<T>) => {
  return <EntitySummaryTemplate pageTitle={pageTitle} {...props} />;
};

TemplateTaskSummaryTemplate.displayName = 'TemplateTaskSummaryTemplate';
export default TemplateTaskSummaryTemplate;
