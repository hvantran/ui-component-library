import React from 'react';
import { cn } from '../../../utils/cn';

export interface DashboardTemplateProps {
  topBar: React.ReactNode;
  sidebar: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

export const DashboardTemplate: React.FC<DashboardTemplateProps> = ({
  topBar,
  sidebar,
  children,
  footer,
  className,
}) => {
  return (
    <div className={cn('min-h-screen flex flex-col bg-surface-card-light dark:bg-surface-card-dark font-sans', className)}>
      {/* Fixed/Sticky TopBar */}
      {topBar}

      {/* Main Container with Sidebar + Content */}
      <div className="flex-1 flex overflow-hidden">
        {sidebar}
        <main
          role="main"
          className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-secondary-50/50 dark:bg-secondary-900/30"
        >
          {children}
        </main>
      </div>

      {/* Optional Sticky/Bottom Footer */}
      {footer && footer}
    </div>
  );
};

DashboardTemplate.displayName = 'DashboardTemplate';
export default DashboardTemplate;
