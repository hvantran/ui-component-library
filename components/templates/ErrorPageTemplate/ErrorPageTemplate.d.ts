import { default as React } from '../../../../node_modules/react';
export interface ErrorPageTemplateProps {
    statusCode?: number | string;
    title?: string;
    message?: string;
    details?: string;
    onRetry?: () => void;
    onHome?: () => void;
    className?: string;
}
export declare const ErrorPageTemplate: React.FC<ErrorPageTemplateProps>;
export default ErrorPageTemplate;
