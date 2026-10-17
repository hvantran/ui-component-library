import React from 'react';
import { cn } from '../../../utils/cn';

export interface StudentAchievementBadge {
  id: string;
  emoji: string;
  title: string;
  description: string;
  border?: string;
  bg?: string;
}

const DEFAULT_BADGES: StudentAchievementBadge[] = [
  {
    id: 'math-wizard',
    emoji: '🧙‍♂️',
    title: 'Math Wizard',
    description: 'Solved 10 Math Quests',
    border: 'border-amber-200',
    bg: 'bg-amber-50/70',
  },
  {
    id: 'story-explorer',
    emoji: '📖',
    title: 'Story Explorer',
    description: 'Read 5 Passages',
    border: 'border-emerald-200',
    bg: 'bg-emerald-50/70',
  },
  {
    id: 'space-cadet',
    emoji: '🚀',
    title: 'Space Cadet',
    description: 'Science Star',
    border: 'border-sky-200',
    bg: 'bg-sky-50/70',
  },
  {
    id: 'super-fast',
    emoji: '⚡',
    title: 'Super Fast',
    description: 'Completed under time',
    border: 'border-purple-200',
    bg: 'bg-purple-50/70',
  },
];

export interface ExamIntegrityStudentAchievementsTrayProps {
  title?: string;
  badges?: StudentAchievementBadge[];
  className?: string;
}

export const ExamIntegrityStudentAchievementsTray: React.FC<
  ExamIntegrityStudentAchievementsTrayProps
> = ({
  title = 'Recent Badges & Achievements',
  badges = DEFAULT_BADGES,
  className,
}) => {
  return (
    <div
      className={cn(
        'mt-12 rounded-3xl border-2 border-slate-200 bg-white p-6 shadow-sm',
        className
      )}
    >
      <h2 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
        <span>🏆</span>
        <span>{title}</span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {badges.map((badge) => (
          <div
            key={badge.id}
            className={cn(
              'rounded-2xl border p-3 text-center',
              badge.border ?? 'border-slate-200',
              badge.bg ?? 'bg-slate-50'
            )}
          >
            <div className="text-2xl mb-1">{badge.emoji}</div>
            <div className="font-bold text-xs text-slate-900">{badge.title}</div>
            <div className="text-[10px] text-slate-500">{badge.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

