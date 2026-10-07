import React from 'react';
import { Button } from '../../atoms/Button';
import { cn } from '../../../utils/cn';

export type ExamIntegrityProctorNavSection = 'dashboard' | 'exam' | 'results' | 'reports';

export interface ExamIntegrityTeacherProctorTemplateProps {
  brandName?: string;
  timerDisplay?: string;
  progressPercent?: number;
  isProctoringActive?: boolean;
  completedCount?: number;
  totalCount?: number;
  activeNavSection?: ExamIntegrityProctorNavSection;
  onNavigate?: (section: ExamIntegrityProctorNavSection) => void;
  onSubmit?: () => void;
  children: React.ReactNode;
  className?: string;
}

const navLabels: { section: ExamIntegrityProctorNavSection; label: string }[] = [
  { section: 'dashboard', label: 'Dashboard' },
  { section: 'exam', label: 'Examination' },
  { section: 'results', label: 'Results' },
  { section: 'reports', label: 'Reports' },
];

export const ExamIntegrityTeacherProctorTemplate: React.FC<
  ExamIntegrityTeacherProctorTemplateProps
> = ({
  brandName = 'IntegrityEngine',
  timerDisplay = '00:59:59',
  progressPercent = 25,
  isProctoringActive = true,
  completedCount = 12,
  totalCount = 40,
  activeNavSection = 'exam',
  onNavigate,
  onSubmit,
  children,
  className,
}) => (
  <div className={cn('min-h-screen bg-gray-50 dark:bg-gray-950 font-sans', className)}>
    {/* Top progress bar */}
    <div className="fixed top-0 left-0 w-full h-1 bg-white dark:bg-gray-900 z-50">
      <div
        className="h-full bg-blue-600 transition-all duration-500"
        style={{ width: `${progressPercent}%` }}
      />
    </div>

    {/* Header */}
    <header className="fixed top-0 left-0 right-0 h-16 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-6">
      <div className="flex items-center gap-8">
        <span className="font-bold text-xl text-blue-700 dark:text-blue-400 select-none">{brandName}</span>
        <nav className="hidden md:flex gap-1">
          {navLabels.map(({ section, label }) => {
            const isActive = activeNavSection === section;
            return (
              <Button
                key={section}
                variant={isActive ? 'neutral' : 'ghost'}
                size="sm"
                onClick={() => onNavigate?.(section)}
                className={cn(
                  'text-sm font-medium',
                  isActive
                    ? 'bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300'
                    : 'text-gray-600 dark:text-gray-400'
                )}
              >
                {label}
              </Button>
            );
          })}
        </nav>
      </div>

      <div className="flex items-center gap-4">
        {/* Proctoring live indicator */}
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
          <span
            className={cn(
              'w-2 h-2 rounded-full shrink-0',
              isProctoringActive ? 'bg-emerald-500 animate-pulse' : 'bg-gray-400'
            )}
          />
          {isProctoringActive ? 'Proctoring Active' : 'Off'}
        </span>

        {/* Timer display */}
        <div className="font-mono text-sm font-bold bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700">
          {timerDisplay}
        </div>

        {onSubmit && (
          <Button variant="danger" size="sm" onClick={onSubmit}>
            Submit
          </Button>
        )}
      </div>
    </header>

    <main className="pt-20 pb-16 px-6 max-w-7xl mx-auto w-full">
      <div className="mb-6 flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
        <span>
          Answered {completedCount} of {totalCount} ({Math.round((completedCount / Math.max(totalCount, 1)) * 100)}%)
        </span>
      </div>
      {children}
    </main>
  </div>
);

ExamIntegrityTeacherProctorTemplate.displayName = 'ExamIntegrityTeacherProctorTemplate';
export default ExamIntegrityTeacherProctorTemplate;

