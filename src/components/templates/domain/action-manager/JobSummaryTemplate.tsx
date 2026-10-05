import { EntitySummaryTemplate, EntitySummaryTemplateProps } from '../../EntitySummaryTemplate';

export interface JobSummaryTemplateProps<T = any>
  extends Omit<EntitySummaryTemplateProps<T>, 'pageTitle'> {
  pageTitle?: string;
}

export const JobSummaryTemplate = <T extends Record<string, any> = any>({
  pageTitle = 'Job Summary',
  ...props
}: JobSummaryTemplateProps<T>) => {
  return <EntitySummaryTemplate pageTitle={pageTitle} {...props} />;
};

JobSummaryTemplate.displayName = 'JobSummaryTemplate';
export default JobSummaryTemplate;
