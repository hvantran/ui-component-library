import { TrendingDown, TrendingUp } from 'lucide-react';
import React from 'react';
import { cn } from '../../../utils/cn';
import { Card } from '../../atoms/Card';

export interface StatCardChange {
  value: string | number;
  isPositive?: boolean;
  label?: string;
}

export interface StatCardProps {
  title: string;
  value: string | number;
  change?: StatCardChange;
  icon?: React.ReactNode;
  description?: string;
  footer?: React.ReactNode;
  variant?: 'default' | 'outlined';
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  change,
  icon,
  description,
  footer,
  variant = 'outlined',
  className,
}) => {
  return (
    <Card
      variant={variant}
      className={cn('p-5 flex flex-col justify-between font-sans', className)}
    >
      <div>
        <div className="flex items-center justify-between text-sm font-medium text-secondary-500 dark:text-secondary-400">
          <span>{title}</span>
          {icon && (
            <div className="p-2 rounded-btn bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300">
              {icon}
            </div>
          )}
        </div>

        <div className="mt-3 flex items-baseline gap-3">
          <span className="text-2xl sm:text-3xl font-bold tracking-tight text-secondary-900 dark:text-white">
            {value}
          </span>

          {change && (
            <div
              className={cn(
                'inline-flex items-center text-xs font-semibold px-2 py-0.5 rounded-full',
                change.isPositive
                  ? 'bg-green-100 text-green-700 dark:bg-green-950/50 dark:text-green-300'
                  : 'bg-red-100 text-red-700 dark:bg-red-950/50 dark:text-red-300'
              )}
            >
              {change.isPositive ? (
                <TrendingUp className="w-3 h-3 mr-1" />
              ) : (
                <TrendingDown className="w-3 h-3 mr-1" />
              )}
              <span>{change.value}</span>
            </div>
          )}
        </div>

        {description && (
          <p className="mt-1 text-xs text-secondary-500 dark:text-secondary-400">
            {description}
          </p>
        )}
      </div>

      {footer && (
        <div className="mt-4 pt-3 border-t border-secondary-200 dark:border-secondary-800 text-xs text-secondary-500 dark:text-secondary-400">
          {footer}
        </div>
      )}
    </Card>
  );
};

StatCard.displayName = 'StatCard';
export default StatCard;
