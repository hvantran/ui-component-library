import React from 'react';
import { cn } from '../../../utils/cn';

export interface ExamIntegrityStudentElementaryBannerProps {
  mascotEmoji?: string;
  mascotIconUrl?: string;
  subjectTitle?: string;
  guardianLabel?: string;
  className?: string;
}

export const ExamIntegrityStudentElementaryBanner: React.FC<
  ExamIntegrityStudentElementaryBannerProps
> = ({
  mascotEmoji = '🦉',
  mascotIconUrl,
  subjectTitle = 'Math & Logic',
  guardianLabel = '🛡️ Friendly Guardian Active',
  className,
}) => (
  <div
    className={cn(
      'bg-amber-100/70 dark:bg-amber-950/40 border-b border-amber-200/80 dark:border-amber-800/60 px-4 py-2.5',
      className
    )}
  >
    <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
      <div className="flex items-center gap-2">
        {mascotIconUrl ? (
          <img src={mascotIconUrl} alt="Mascot" className="w-6 h-6 rounded-full object-cover shrink-0" />
        ) : (
          <span className="text-lg">{mascotEmoji}</span>
        )}
        <span className="font-bold text-amber-950 dark:text-amber-200 text-sm">
          {subjectTitle}
        </span>
        {guardianLabel && (
          <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-900 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700 font-semibold text-xs">
            {guardianLabel}
          </span>
        )}
      </div>
    </div>
  </div>
);

ExamIntegrityStudentElementaryBanner.displayName =
  'ExamIntegrityStudentElementaryBanner';
export default ExamIntegrityStudentElementaryBanner;
