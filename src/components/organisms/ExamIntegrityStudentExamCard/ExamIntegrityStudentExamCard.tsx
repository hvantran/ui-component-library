import React from 'react';
import { Button } from '../../atoms/Button';
import { cn } from '../../../utils/cn';

export interface SubjectConfig {
  label: string;
  icon: string;
  border: string;
  bg: string;
}

const DEFAULT_SUBJECT_ICONS: Record<string, SubjectConfig> = {
  math: { label: '🦁 Math', icon: '🦁', border: 'border-amber-300', bg: 'bg-amber-50' },
  english: { label: '📚 English', icon: '📚', border: 'border-emerald-300', bg: 'bg-emerald-50' },
  science: { label: '🚀 Science', icon: '🚀', border: 'border-sky-300', bg: 'bg-sky-50' },
  general: { label: '🎯 General', icon: '🎯', border: 'border-slate-300', bg: 'bg-slate-50' },
};

export interface ExamIntegrityStudentExamCardProps {
  id: string;
  title: string;
  questionCount: number;
  durationSeconds: number;
  totalPoints: number;
  tags?: string[];
  isElementary?: boolean;
  subject?: string;
  onStart: () => void;
  isStarting?: boolean;
  className?: string;
}

export const ExamIntegrityStudentExamCard: React.FC<
  ExamIntegrityStudentExamCardProps
> = ({
  id,
  title,
  questionCount,
  durationSeconds,
  totalPoints,
  tags = [],
  isElementary = false,
  subject = 'general',
  onStart,
  isStarting = false,
  className,
}) => {
  const durationMinutes = Math.round(durationSeconds / 60);

  if (isElementary) {
    const subjectInfo = DEFAULT_SUBJECT_ICONS[subject.toLowerCase()] ?? DEFAULT_SUBJECT_ICONS.general;

    return (
      <div
        data-testid={`elementary-card-${id}`}
        className={cn(
          'rounded-3xl border-2 bg-white shadow-md p-6 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-200',
          subjectInfo.border,
          className
        )}
      >
        <div>
          <div className="flex items-center justify-between gap-2 mb-3">
            <span
              className={cn(
                'px-3 py-1 rounded-full text-xs font-bold text-slate-800 border',
                subjectInfo.bg,
                subjectInfo.border
              )}
            >
              {subjectInfo.label}
            </span>
            <span className="text-xs font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-300">
              ⭐ {totalPoints} Stars
            </span>
          </div>

          <h2 className="text-xl font-bold text-slate-900 mb-2 leading-snug">
            {title}
          </h2>

          <div className="flex items-center gap-3 text-xs font-medium text-slate-600 mb-4">
            <span>⏱️ ~{durationMinutes} min</span>
            <span>·</span>
            <span>📝 {questionCount} Questions</span>
          </div>

          <div className="flex flex-wrap gap-1.5 mb-5">
            {tags.map((t) => (
              <span
                key={t}
                className="bg-slate-100 text-slate-700 text-xs px-2.5 py-0.5 rounded-full font-semibold border border-slate-200"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <button
          type="button"
          disabled={isStarting}
          onClick={onStart}
          className="w-full min-h-[52px] rounded-2xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-base shadow-[0_4px_0_#d97706] active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-2 select-none disabled:opacity-50"
        >
          <span>Start Quest</span>
          <span>🚀</span>
        </button>
      </div>
    );
  }

  return (
    <div
      data-testid={`standard-card-${id}`}
      className={cn(
        'border rounded-xl bg-white shadow-sm p-5 flex flex-col justify-between',
        className
      )}
    >
      <div>
        <div className="text-lg font-semibold mb-1 text-slate-900">{title}</div>
        <div className="text-sm text-gray-500 mb-2">
          {questionCount} questions · {durationMinutes} min · {totalPoints} pts
        </div>
        <div className="flex flex-wrap gap-1 mb-2">
          {tags.map((t) => (
            <span
              key={t}
              className="text-primary-600 text-xs px-2 py-0.5 rounded-full font-medium bg-primary-50"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      <Button
        className="mt-2 w-full py-2 rounded"
        onClick={onStart}
        disabled={isStarting}
        variant="primary"
      >
        Start Exam
      </Button>
    </div>
  );
};

