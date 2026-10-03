import React from 'react';
import { cn } from '../../../utils/cn';

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement | HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
  label?: string;
}

export const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  label,
  className,
  ...props
}) => {
  if (orientation === 'vertical') {
    return (
      <div
        role="separator"
        aria-orientation="vertical"
        className={cn('inline-block w-px self-stretch bg-secondary-200 dark:bg-secondary-800', className)}
        {...props}
      />
    );
  }

  if (label) {
    return (
      <div
        role="separator"
        aria-orientation="horizontal"
        className={cn('flex items-center text-xs text-secondary-500 my-4', className)}
        {...props}
      >
        <span className="flex-grow border-t border-secondary-200 dark:border-secondary-800" />
        <span className="px-3 font-medium uppercase tracking-wider text-secondary-400 dark:text-secondary-500">
          {label}
        </span>
        <span className="flex-grow border-t border-secondary-200 dark:border-secondary-800" />
      </div>
    );
  }

  return (
    <hr
      role="separator"
      aria-orientation="horizontal"
      className={cn('border-0 border-t border-secondary-200 dark:border-secondary-800 my-4', className)}
      {...props}
    />
  );
};

Divider.displayName = 'Divider';
export default Divider;
