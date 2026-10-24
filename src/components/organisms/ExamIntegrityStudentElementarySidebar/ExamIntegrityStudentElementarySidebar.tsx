import React from 'react';
import { cn } from '../../../utils/cn';

export interface ExamIntegrityStudentElementarySidebarProps {
  mascotEmoji?: string;
  mascotName?: string;
  mascotTip?: string;
  mascotIconUrl?: string;
  backgroundImageUrl?: string;
  flaggedNumbers?: number[];
  onJumpToQuestion?: (questionNumber: number) => void;
  className?: string;
}

export const ExamIntegrityStudentElementarySidebar: React.FC<
  ExamIntegrityStudentElementarySidebarProps
> = ({
  mascotEmoji = '🦉',
  mascotName = 'Ollie the Owl',
  mascotTip = 'Read each question carefully. You can flag questions to look at them again anytime!',
  mascotIconUrl,
  backgroundImageUrl,
  flaggedNumbers = [],
  onJumpToQuestion,
  className,
}) => (
  <aside className={cn('flex flex-col gap-5', className)}>
    {/* Mascot Card */}
    <div
      className="rounded-3xl border-2 border-amber-200 dark:border-amber-800 bg-white dark:bg-gray-900 p-6 shadow-md relative overflow-hidden bg-cover bg-center"
      style={backgroundImageUrl ? { backgroundImage: `url(${backgroundImageUrl})` } : undefined}
    >
      {backgroundImageUrl && (
        <div className="absolute inset-0 bg-white/85 dark:bg-gray-900/85 backdrop-blur-[1px] pointer-events-none" />
      )}
      <div className="flex items-start gap-4 relative z-10">
        <div className="w-16 h-16 rounded-2xl bg-amber-100 dark:bg-amber-950/50 border-2 border-amber-300 dark:border-amber-700 flex items-center justify-center text-3xl shadow-inner shrink-0 overflow-hidden">
          {mascotIconUrl ? (
            <img src={mascotIconUrl} alt={mascotName} className="w-full h-full object-cover" />
          ) : (
            mascotEmoji
          )}
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <h3 className="font-bold text-slate-900 dark:text-gray-100 text-base">{mascotName}</h3>
            <span className="text-sm">🦉</span>
          </div>
          <p className="text-xs font-bold text-emerald-700 dark:text-emerald-400 mt-0.5">
            Your Exam Buddy & Cheerful Guide
          </p>
          <div className="inline-flex items-center gap-1 mt-1 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 px-2.5 py-0.5 rounded-full text-[11px] font-bold">
            Safe & Secure Quest ✨
          </div>
        </div>
      </div>
      {/* Mascot Speech Bubble */}
      {mascotTip && (
        <div className="mt-4 relative bg-[#fffbeb] dark:bg-amber-950/30 border-2 border-[#fde68a] dark:border-amber-800 rounded-2xl p-3.5 shadow-sm text-amber-950 dark:text-amber-200">
          <div className="absolute -top-2 left-8 w-3.5 h-3.5 bg-[#fffbeb] dark:bg-amber-950/30 border-t-2 border-l-2 border-[#fde68a] dark:border-amber-800 transform rotate-45" />
          <div className="font-bold text-[11px] text-amber-800 dark:text-amber-300 uppercase tracking-wide mb-1 flex items-center gap-1">
            <span>💡 Friendly Tip:</span>
          </div>
          <p className="text-xs font-medium leading-relaxed">"{mascotTip}"</p>
        </div>
      )}
    </div>

    {/* Flagged for Review Drawer */}
    <div className="rounded-3xl border-2 border-amber-200 dark:border-amber-800 bg-white dark:bg-gray-900 p-5 shadow-md">
      <div className="flex items-center justify-between pb-3 border-b border-amber-100 dark:border-amber-900/50">
        <div className="flex items-center gap-2">
          <span className="text-amber-500 font-bold">🚩</span>
          <h3 className="font-bold text-slate-900 dark:text-gray-100 text-sm">Flagged for Review</h3>
        </div>
        <span className="bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-200 text-xs font-bold px-2 py-0.5 rounded-full border border-amber-200 dark:border-amber-800">
          {flaggedNumbers.length} Saved
        </span>
      </div>
      <div className="mt-3">
        {flaggedNumbers.length > 0 ? (
          <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
            {flaggedNumbers.map((qNum) => (
              <div
                key={qNum}
                className="bg-amber-50/70 dark:bg-amber-950/30 rounded-xl p-2.5 border border-amber-200/80 dark:border-amber-800/60 flex items-center justify-between"
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-full bg-amber-200 dark:bg-amber-900 text-amber-900 dark:text-amber-100 font-bold text-xs flex items-center justify-center">
                    {qNum}
                  </span>
                  <span className="font-bold text-slate-800 dark:text-gray-200 text-xs">
                    Question {qNum}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => onJumpToQuestion?.(qNum)}
                  className="px-2.5 py-1 rounded-full bg-white dark:bg-gray-800 text-sky-700 dark:text-sky-300 hover:bg-sky-600 hover:text-white border border-sky-300 dark:border-sky-700 text-xs font-bold transition-all shadow-sm"
                >
                  Jump →
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-xs text-slate-500 dark:text-gray-400 font-medium py-1">
            No questions flagged yet. Tap 🚩 on any question if you want to review it later!
          </p>
        )}
      </div>
    </div>

    {/* Proctoring Status Card */}
    <div className="rounded-3xl border-2 border-amber-200 dark:border-amber-800 bg-white dark:bg-gray-900 p-5 shadow-md">
      <div className="flex items-center gap-2 pb-2">
        <span className="w-7 h-7 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 flex items-center justify-center text-sm font-bold">
          🛡️
        </span>
        <h3 className="font-bold text-slate-900 dark:text-gray-100 text-sm">Proctoring Status</h3>
      </div>
      <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed mt-1">
        Camera & microphone are listening kindly for background noise so nobody distracts your adventure! All secure & verified.
      </p>
      <div className="mt-3 pt-3 border-t border-slate-100 dark:border-gray-800 flex items-center justify-between text-[11px] font-semibold text-slate-500 dark:text-gray-400">
        <span className="flex items-center gap-1 text-teal-700 dark:text-teal-400">
          <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
          Connection: Excellent
        </span>
        <span>Room Integrity: Calm & Quiet</span>
      </div>
    </div>
  </aside>
);

ExamIntegrityStudentElementarySidebar.displayName =
  'ExamIntegrityStudentElementarySidebar';
export default ExamIntegrityStudentElementarySidebar;
