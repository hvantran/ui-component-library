import { default as React } from '../../../../node_modules/react';
export type JobStatusType = 'SUCCESS' | 'FAILURE' | 'FAILED' | 'RUNNING' | 'PROCESSING' | 'PENDING' | 'CANCELLED';
export interface JobStatusBadgeProps {
    status: JobStatusType;
    size?: 'sm' | 'md' | 'lg';
    showLabel?: boolean;
    label?: string;
    tooltip?: boolean | string;
    className?: string;
}
export declare const JobStatusBadge: React.FC<JobStatusBadgeProps>;
export default JobStatusBadge;
