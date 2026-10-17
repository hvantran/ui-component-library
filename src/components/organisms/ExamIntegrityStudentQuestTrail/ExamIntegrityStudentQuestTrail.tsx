import React from 'react';
import { cn } from '../../../utils/cn';

export interface ExamIntegrityStudentQuestTrailProps {
  totalQuestions: number;
  currentQuestion: number;
  answeredCount: number;
  answeredMap: Record<number, boolean>;
  flaggedMap: Record<number, boolean>;
  onSelectQuestion: (questionNumber: number) => void;
  className?: string;
}

export const ExamIntegrityStudentQuestTrail: React.FC<
  ExamIntegrityStudentQuestTrailProps
> = ({
  totalQuestions,
  currentQuestion,
  answeredCount,
  answeredMap,
  flaggedMap,
  onSelectQuestion,
  className,
}) => {
  if (totalQuestions <= 0) return null;

  const progressPercent = Math.round((answeredCount / totalQuestions) * 100);

  return (
    <section
      className={cn(
        'bg-white/95 dark:bg-gray-900/95 border-b-2 border-amber-200/80 dark:border-amber-800/60 shadow-sm py-3.5 px-4 md:px-8',
        className
      )}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Stepping Stones Navigation Bar */}
        <div className="flex-1 overflow-x-auto pb-1 md:pb-0">
          <div className="flex items-center min-w-max space-x-1 sm:space-x-2">
            <span className="text-xs font-black tracking-wide text-amber-950 dark:text-amber-200 uppercase flex items-center gap-1.5 mr-2">
              <span className="text-base">🧭</span>
              Quest Trail:
            </span>

            {Array.from({ length: totalQuestions }, (_, idx) => {
              const qNum = idx + 1;
              const isCurrent = qNum === currentQuestion;
              const isAnswered = Boolean(answeredMap[qNum]);
              const isFlagged = Boolean(flaggedMap[qNum]);
              const isLast = qNum === totalQuestions;

              return (
                <React.Fragment key={qNum}>
                  <button
                    type="button"
                    onClick={() => onSelectQuestion(qNum)}
                    className={cn(
                      'group flex items-center justify-center transition-all cursor-pointer select-none focus:outline-none',
                      isCurrent
                        ? 'px-3.5 h-11 rounded-full bg-amber-400 text-amber-950 border-2 border-amber-600 font-extrabold flex items-center gap-1.5 shadow-[0_4px_0_#d97706] ring-4 ring-amber-200/80 scale-105'
                        : isAnswered
                          ? 'w-11 h-11 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border-2 border-emerald-500 font-bold flex items-center justify-center shadow-[0_3px_0_#059669] hover:brightness-105 active:translate-y-1'
                          : isFlagged
                            ? 'w-11 h-11 rounded-full bg-amber-50 text-amber-900 dark:bg-amber-950 dark:text-amber-200 border-2 border-amber-400 font-bold flex items-center justify-center shadow-[0_3px_0_#d97706] hover:brightness-105 active:translate-y-1 relative'
                            : 'w-11 h-11 rounded-full bg-slate-50 text-slate-600 dark:bg-gray-800 dark:text-gray-300 border-2 border-slate-300 dark:border-gray-700 font-semibold flex items-center justify-center shadow-[0_3px_0_#cbd5e1] hover:bg-amber-50 hover:border-amber-300 active:translate-y-1'
                    )}
                    title={`Question ${qNum}${isAnswered ? ' (Completed)' : isFlagged ? ' (Flagged)' : ''}`}
                  >
                    {isCurrent ? (
                      <>
                        <span className="text-base">⭐</span>
                        <span className="text-xs font-black">Quest {qNum}</span>
                        <span className="w-2 h-2 rounded-full bg-amber-950 animate-pulse" />
                      </>
                    ) : isFlagged ? (
                      <>
                        <span className="text-sm font-black">{qNum}</span>
                        <span className="absolute -top-1 -right-1 bg-rose-500 text-white rounded-full w-4 h-4 text-[9px] flex items-center justify-center font-bold">
                          🚩
                        </span>
                      </>
                    ) : isAnswered ? (
                      <span className="text-base font-extrabold">✓</span>
                    ) : isLast ? (
                      <span className="text-base" title="Milestone">
                        🏆
                      </span>
                    ) : (
                      <span className="text-xs font-black">{qNum}</span>
                    )}
                  </button>

                  {!isLast && (
                    <div
                      className={cn(
                        'w-3 sm:w-4 h-0.5 border-b-2 border-dashed',
                        isAnswered ? 'border-emerald-400' : 'border-amber-300'
                      )}
                    />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Gamified Progress Spark Bar */}
        <div className="flex items-center gap-3 bg-amber-50/80 dark:bg-amber-950/40 px-4 py-2 rounded-2xl border border-amber-200 dark:border-amber-800 shrink-0">
          <div className="w-32 sm:w-36 bg-amber-200/60 dark:bg-amber-900/60 h-3 rounded-full overflow-hidden p-0.5">
            <div
              className="bg-gradient-to-r from-emerald-400 to-emerald-600 h-full rounded-full transition-all duration-500"
              style={{
                width: `${progressPercent}%`,
              }}
            />
          </div>
          <span className="text-xs font-bold text-amber-950 dark:text-amber-200 whitespace-nowrap">
            {answeredCount} of {totalQuestions} Done ({progressPercent}%) 🚀
          </span>
        </div>
      </div>
    </section>
  );
};

ExamIntegrityStudentQuestTrail.displayName = 'ExamIntegrityStudentQuestTrail';
export default ExamIntegrityStudentQuestTrail;
