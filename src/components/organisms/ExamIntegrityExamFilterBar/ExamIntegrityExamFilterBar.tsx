import React from 'react';
import { cn } from '../../../utils/cn';

export interface FilterOption<T extends string = string> {
  key: T;
  label: string;
  count: number;
}

export interface ExamIntegrityExamFilterBarProps<T extends string = string> {
  title?: string;
  subtitle?: string;
  options: FilterOption<T>[];
  selectedKey: T;
  onSelectKey: (key: T) => void;
  className?: string;
}

export const ExamIntegrityExamFilterBar = <T extends string = string>({
  title = 'Filter exams',
  subtitle,
  options,
  selectedKey,
  onSelectKey,
  className,
}: ExamIntegrityExamFilterBarProps<T>): React.ReactElement => {
  return (
    <div
      className={cn(
        'flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 shadow-sm',
        className
      )}
    >
      <div>
        <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">
          {title}
        </div>
        {subtitle && (
          <div className="text-xs text-gray-500 dark:text-gray-400">
            {subtitle}
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const active = selectedKey === option.key;
          return (
            <button
              key={option.key}
              type="button"
              aria-pressed={active}
              onClick={() => onSelectKey(option.key)}
              className={cn(
                'inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium transition-colors duration-150',
                active
                  ? 'border-primary-600 bg-primary-50 dark:bg-primary-950/40 text-primary-700 dark:text-primary-300'
                  : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
              )}
            >
              <span>{option.label}</span>
              <span
                className={cn(
                  'inline-flex min-w-6 items-center justify-center rounded-full px-2 py-0.5 text-[11px] font-semibold',
                  active
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                )}
              >
                {option.count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

ExamIntegrityExamFilterBar.displayName = 'ExamIntegrityExamFilterBar';
export default ExamIntegrityExamFilterBar;

