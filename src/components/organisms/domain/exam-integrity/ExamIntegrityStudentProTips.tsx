import React from 'react';
import { cn } from '../../../../utils/cn';

export interface ExamIntegrityStudentProTipsProps {
  tips: string[];
  variant?: 'elementary' | 'middle' | 'high';
  className?: string;
}

export const ExamIntegrityStudentProTips: React.FC<ExamIntegrityStudentProTipsProps> = ({
  tips,
  variant = 'high',
  className,
}) => {
  if (!tips?.length) return null;

  const variantClasses = {
    elementary: {
      wrapper:
        'border-cyan-200 dark:border-cyan-800 bg-gradient-to-b from-cyan-50 via-white to-sky-50 dark:from-cyan-950/40 dark:via-gray-900 dark:to-sky-950/40',
      icon: 'text-cyan-500',
      title: 'text-cyan-900 dark:text-cyan-200',
      subtitle: 'text-cyan-700/70 dark:text-cyan-400/70',
      item: 'border-cyan-100 dark:border-cyan-900/60 bg-white/95 dark:bg-gray-850',
      badge: 'bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200',
    },
    middle: {
      wrapper:
        'border-emerald-200 dark:border-emerald-800 bg-gradient-to-b from-emerald-50 via-white to-lime-50 dark:from-emerald-950/40 dark:via-gray-900 dark:to-lime-950/40',
      icon: 'text-emerald-500',
      title: 'text-emerald-900 dark:text-emerald-200',
      subtitle: 'text-emerald-700/70 dark:text-emerald-400/70',
      item: 'border-emerald-100 dark:border-emerald-900/60 bg-white/95 dark:bg-gray-850',
      badge: 'bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200',
    },
    high: {
      wrapper:
        'border-amber-200 dark:border-amber-800 bg-gradient-to-b from-amber-50 via-white to-orange-50 dark:from-amber-950/40 dark:via-gray-900 dark:to-orange-950/40',
      icon: 'text-amber-500',
      title: 'text-amber-900 dark:text-amber-200',
      subtitle: 'text-slate-500 dark:text-gray-400',
      item: 'border-amber-100 dark:border-amber-900/60 bg-white/95 dark:bg-gray-850',
      badge: 'bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200',
    },
  }[variant];

  return (
    <aside
      className={cn(
        'rounded-2xl border p-4 md:p-5 mb-6 shadow-sm',
        variantClasses.wrapper,
        className
      )}
    >
      <div className="flex items-center mb-3">
        <span className={cn('mr-2 text-xl', variantClasses.icon)} aria-hidden="true">
          💡
        </span>
        <div>
          <p className={cn('font-semibold text-base leading-5', variantClasses.title)}>Focus Tips</p>
          <p className={cn('text-xs', variantClasses.subtitle)}>
            Quick reminders to keep your exam flow steady.
          </p>
        </div>
      </div>
      <ul className="list-none m-0 p-0 space-y-2">
        {tips.map((tip, idx) => (
          <li
            key={idx}
            className={cn(
              'flex items-start rounded-lg border px-2.5 py-2 text-slate-700 dark:text-gray-300',
              variantClasses.item
            )}
          >
            <span
              className={cn(
                'min-w-[24px] h-6 mr-2 inline-flex items-center justify-center rounded-full text-xs font-bold shrink-0',
                variantClasses.badge
              )}
            >
              {idx + 1}
            </span>
            <span className="text-xs leading-5">{tip}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

ExamIntegrityStudentProTips.displayName = 'ExamIntegrityStudentProTips';
export default ExamIntegrityStudentProTips;

