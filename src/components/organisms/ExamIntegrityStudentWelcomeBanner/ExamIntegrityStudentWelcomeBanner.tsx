import React from 'react';
import { cn } from '../../../utils/cn';

export interface ExamIntegrityStudentWelcomeBannerProps {
  studentName?: string;
  avatarEmoji?: string;
  avatarIconUrl?: string;
  backgroundImageUrl?: string;
  title?: string;
  subtitle?: string;
  className?: string;
}

export const ExamIntegrityStudentWelcomeBanner: React.FC<
  ExamIntegrityStudentWelcomeBannerProps
> = ({
  studentName = 'Adventurer',
  avatarEmoji = '🦁',
  avatarIconUrl,
  backgroundImageUrl,
  title,
  subtitle = "Ready for today's learning adventures? Have fun exploring your quests!",
  className,
}) => {
  const displayTitle = title ?? `Welcome back, ${studentName}! 🚀`;

  return (
    <div
      className={cn(
        'rounded-3xl border-2 border-amber-300/80 bg-gradient-to-r from-amber-100/90 via-sky-100/70 to-emerald-100/80 p-5 sm:p-6 md:p-8 shadow-md relative overflow-hidden bg-cover bg-center',
        className
      )}
      style={backgroundImageUrl ? { backgroundImage: `url(${backgroundImageUrl})` } : undefined}
    >
      {backgroundImageUrl && (
        <div className="absolute inset-0 bg-white/75 dark:bg-gray-900/80 backdrop-blur-[2px] pointer-events-none" />
      )}
      <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-5 relative z-10">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-amber-400 border-4 border-white shadow-md flex items-center justify-center text-3xl md:text-4xl flex-shrink-0 overflow-hidden">
          {avatarIconUrl ? (
            <img src={avatarIconUrl} alt={studentName} className="w-full h-full object-cover" />
          ) : (
            avatarEmoji
          )}
        </div>
        <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 mb-1">
            {displayTitle}
          </h1>
          <p className="text-slate-700 text-xs sm:text-sm md:text-base font-medium">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

