import React from 'react';
import { Skeleton } from '../../atoms/Skeleton';
import { Card } from '../../atoms/Card';
import { cn } from '../../../utils/cn';

export type ExamIntegrityScoreStatus =
  | 'CORRECT'
  | 'INCORRECT'
  | 'PARTIAL'
  | 'SELF_GRADE_REQUIRED'
  | 'PENDING_ESSAY'
  | 'INCOMPLETE_QUESTION'
  | 'MULTIPLE_ANSWERS_FLAG'
  | (string & {});

export interface ExamIntegrityScoreItem {
  questionId: string;
  questionNumber?: number;
  status: ExamIntegrityScoreStatus;
  studentAnswer?: string;
  correctAnswer?: string;
  earnedPoints?: number;
  maxPoints?: number;
  feedback?: string;
}

export interface ExamIntegrityReviewDashboardData {
  totalEarned: number;
  totalMax: number;
  finalScore10: number;
  missedQuestionNumbers?: number[];
  scores: ExamIntegrityScoreItem[];
}

export interface ExamIntegrityReviewDashboardProps {
  dashboard: ExamIntegrityReviewDashboardData;
  isLoading?: boolean;
  className?: string;
}

export const ExamIntegrityReviewDashboard: React.FC<ExamIntegrityReviewDashboardProps> = ({
  dashboard,
  isLoading = false,
  className,
}) => {
  if (isLoading) {
    return (
      <div className={cn('min-h-screen bg-gray-50 dark:bg-gray-900 py-10 px-2 md:px-8', className)}>
        <div className="max-w-4xl mx-auto space-y-6">
          <Card className="p-8">
            <Skeleton width="180px" height="28px" className="mb-6" />
            <Skeleton width="200px" height="64px" className="mb-4" />
            <Skeleton width="100%" height="8px" className="mb-4" />
            <div className="flex gap-6">
              <Skeleton width="130px" height="20px" />
              <Skeleton width="130px" height="20px" />
              <Skeleton width="120px" height="20px" className="ml-auto" />
            </div>
          </Card>
        </div>
      </div>
    );
  }

  const pct = Math.round((dashboard.totalEarned / Math.max(dashboard.totalMax, 1)) * 100);
  const correctCount = dashboard.scores.filter((s) => s.status === 'CORRECT').length;
  const pendingCount = dashboard.scores.filter(
    (s) => s.status === 'SELF_GRADE_REQUIRED' || s.status === 'PENDING_ESSAY'
  ).length;
  const incorrectCount = dashboard.scores.filter(
    (s) =>
      s.status !== 'CORRECT' && s.status !== 'SELF_GRADE_REQUIRED' && s.status !== 'PENDING_ESSAY'
  ).length;

  return (
    <div className={cn('min-h-screen bg-gray-50 dark:bg-gray-900 py-6 sm:py-10 px-2 sm:px-8', className)}>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Score hero card */}
        <div className="p-5 sm:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg bg-gradient-to-br from-blue-800 to-blue-500 text-white">
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 flex items-center justify-center text-xl sm:text-2xl">
              🎓
            </div>
            <div className="font-bold text-xl sm:text-2xl">Exam Results</div>
          </div>

          {/* Big score */}
          <div className="text-4xl sm:text-6xl font-extrabold leading-none mb-2">
            {dashboard.finalScore10.toFixed(1)}
            <span className="text-xl sm:text-2xl font-normal opacity-80">/10</span>
          </div>

          <div className="w-full bg-white/25 rounded-full h-1.5 mb-3">
            <div
              className="bg-white h-1.5 rounded-full transition-all"
              style={{ width: `${pct}%` }}
            />
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-8 pt-2">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-base sm:text-lg">✅</span>
              <span className="font-semibold text-xs sm:text-base">Correct</span>
              <span className="font-bold text-base sm:text-lg ml-1">{correctCount}</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-base sm:text-lg">❌</span>
              <span className="font-semibold text-xs sm:text-base">Incorrect</span>
              <span className="font-bold text-base sm:text-lg ml-1">{incorrectCount}</span>
            </div>
            {pendingCount > 0 && (
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-base sm:text-lg">🕒</span>
                <span className="font-semibold text-xs sm:text-base">Awaiting Teacher</span>
                <span className="font-bold text-base sm:text-lg ml-1">{pendingCount}</span>
              </div>
            )}
            <span className="text-xs sm:text-base opacity-90 sm:ml-auto font-medium">
              {dashboard.totalEarned.toFixed(1)} / {dashboard.totalMax.toFixed(1)} pts
            </span>
          </div>
        </div>

        {/* Essay notice */}
        <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800">
          <span className="text-sm text-blue-700 dark:text-blue-300">
            Note: Essay questions require manual grading by the teacher.
          </span>
        </div>

        {/* Missed questions summary */}
        {dashboard.missedQuestionNumbers && dashboard.missedQuestionNumbers.length > 0 && (
          <div className="p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-sm text-gray-800 dark:text-gray-200 mb-2">
              Questions Needing Attention:
            </h3>
            <div className="flex flex-wrap gap-2">
              {dashboard.missedQuestionNumbers.map((num) => (
                <span
                  key={num}
                  className="px-2.5 py-1 rounded-md text-xs font-semibold bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800"
                >
                  Question {num}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

ExamIntegrityReviewDashboard.displayName = 'ExamIntegrityReviewDashboard';
export default ExamIntegrityReviewDashboard;

