import { default as React } from '../../../../node_modules/react';
export interface EmptyStateProps {
    title?: string;
    description?: string;
    icon?: React.ReactNode;
    action?: React.ReactNode;
    className?: string;
}
export declare const EmptyState: React.FC<EmptyStateProps>;
export default EmptyState;
