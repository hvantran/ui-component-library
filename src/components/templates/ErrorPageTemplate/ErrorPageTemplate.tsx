import { AlertTriangle, Home, RefreshCw } from 'lucide-react';
import React from 'react';
import { cn } from '../../../utils/cn';
import { Button } from '../../atoms/Button';

export interface ErrorPageTemplateProps {
  statusCode?: number | string;
  title?: string;
  message?: string;
  details?: string;
  onRetry?: () => void;
  onHome?: () => void;
  className?: string;
}

export const ErrorPageTemplate: React.FC<ErrorPageTemplateProps> = ({
  statusCode = '500',
  title = 'Something went wrong',
  message = 'An unexpected error occurred while processing your request.',
  details,
  onRetry,
  onHome,
  className,
}) => {
  return (
    <main
      role="main"
      className={cn(
        'min-h-[80vh] flex flex-col items-center justify-center p-6 text-center font-sans',
        className
      )}
    >
      <div className="w-full max-w-md p-8 rounded-card border border-secondary-200 dark:border-secondary-800 bg-surface-card-light dark:bg-surface-card-dark shadow-card">
        <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-error-50 dark:bg-error-950/40 text-error-600 dark:text-error-400 flex items-center justify-center">
          <AlertTriangle className="w-7 h-7" aria-hidden="true" />
        </div>

        <span className="text-4xl font-extrabold text-secondary-900 dark:text-white tracking-tight">
          {statusCode}
        </span>

        <h1 className="mt-2 text-lg font-bold text-secondary-900 dark:text-white">
          {title}
        </h1>

        <p className="mt-2 text-sm text-secondary-600 dark:text-secondary-300">
          {message}
        </p>

        {details && (
<div className="mt-4 p-3 rounded-btn bg-secondary-100 dark:bg-secondary-800 text-left overflow-x-auto whitespace-pre-wrap text-xs font-mono text-secondary-700 dark:text-secondary-300">
  {details}
</div>
        )}

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {onRetry && (
            <Button
              variant="secondary"
              onClick={onRetry}
              icon={<RefreshCw className="w-4 h-4" />}
            >
              Try Again
            </Button>
          )}

          {onHome && (
            <Button
              variant="primary"
              onClick={onHome}
              icon={<Home className="w-4 h-4" />}
            >
              Return Home
            </Button>
          )}
        </div>
      </div>
    </main>
  );
};

ErrorPageTemplate.displayName = 'ErrorPageTemplate';
export default ErrorPageTemplate;
