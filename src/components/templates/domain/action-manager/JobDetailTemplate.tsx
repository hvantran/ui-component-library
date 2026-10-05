import React from 'react';
import { EntityDetailTemplate, EntityDetailTemplateProps } from '../../EntityDetailTemplate';

export interface JobDetailTemplateProps
  extends Omit<EntityDetailTemplateProps, 'pageTitle'> {
  pageTitle?: string;
}

export const JobDetailTemplate: React.FC<JobDetailTemplateProps> = ({
  pageTitle = 'Job Details',
  ...props
}) => {
  return <EntityDetailTemplate pageTitle={pageTitle} {...props} />;
};

JobDetailTemplate.displayName = 'JobDetailTemplate';
export default JobDetailTemplate;
