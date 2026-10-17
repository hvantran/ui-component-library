import React, { useState, useEffect } from 'react';
import { Button } from '../../atoms/Button';
import { Card } from '../../atoms/Card';
import {
  ExamIntegrityTeacherDashboardTemplate,
  type ExamIntegrityDashboardSection,
  type ExamIntegrityNavDockMode,
} from '../ExamIntegrityTeacherDashboardTemplate';

export interface ExamIntegrityScoringQueueItem {
  sessionId: string;
  examTitle: string;
  studentId: string;
  pendingEssayCount: number;
  totalEarned: number;
  totalMax: number;
  submittedAt?: string;
}

export interface ExamIntegrityEssayScoreItem {
  questionId: string;
  questionNumber?: number;
  questionText?: string;
  maxPoints: number;
  earnedPoints?: number;
  studentAnswer?: string;
  correctAnswer?: string;
  status: string;
  explanation?: string;
  questionType?: string;
}

export interface ExamIntegrityScoringDashboard {
  sessionId?: string;
  examTitle?: string;
  finalScore10: number;
  scores: ExamIntegrityEssayScoreItem[];
}

export interface ExamIntegrityTeacherScoringTemplateProps {
  userName?: string;
  userRole?: string;
  onNavigate?: (section: ExamIntegrityDashboardSection) => void;
  onCreateExam?: () => void;
  onSettings?: () => void;
  onLogout?: () => void;
  dockMode?: ExamIntegrityNavDockMode;
  onDockModeChange?: (mode: ExamIntegrityNavDockMode) => void;
  className?: string;

  pageTitle?: string;
  pageSubtitle?: string;

  queue?: ExamIntegrityScoringQueueItem[];
  selectedSessionId?: string;
  onSelectSession?: (sessionId: string) => void;

  dashboard?: ExamIntegrityScoringDashboard | null;
  isLoadingQueue?: boolean;
  isLoadingSubmission?: boolean;
  isSavingScore?: boolean;

  onSaveScore?: (params: { questionId: string; earnedPoints: number; explanation?: string }) => void;
  onMarkCorrect?: (params: { questionId: string; maxPoints: number; explanation?: string }) => void;
}

export const ExamIntegrityTeacherScoringTemplate: React.FC<ExamIntegrityTeacherScoringTemplateProps> = ({
  userName = 'Teacher',
  userRole = 'Teacher',
  onNavigate,
  onCreateExam,
  onSettings,
  onLogout,
  dockMode = 'pinned',
  onDockModeChange,
  className,
  pageTitle = 'Essay Scoring',
  pageSubtitle = 'Auto-grade MCQ on submission, then review and score essay questions manually.',
  queue = [],
  selectedSessionId = '',
  onSelectSession,
  dashboard,
  isLoadingQueue = false,
  isLoadingSubmission = false,
  isSavingScore = false,
  onSaveScore,
  onMarkCorrect,
}) => {
  const [drafts, setDrafts] = useState<Record<string, { earnedPoints: string; explanation: string }>>({});

  useEffect(() => {
    if (!dashboard) {
      return;
    }
    const nextDrafts = dashboard.scores
      .filter((score) => score.questionType !== 'MCQ')
      .reduce<Record<string, { earnedPoints: string; explanation: string }>>((acc, score) => {
        acc[score.questionId] = {
          earnedPoints: String(score.earnedPoints ?? 0),
          explanation: score.explanation ?? '',
        };
        return acc;
      }, {});
    setDrafts(nextDrafts);
  }, [dashboard]);

  const selectedSummary = queue.find((item) => item.sessionId === selectedSessionId);
  const essayScores = dashboard?.scores.filter((score) => score.questionType !== 'MCQ') ?? [];

  return (
    <ExamIntegrityTeacherDashboardTemplate
      activeSection="scoring"
      userName={userName}
      userRole={userRole}
      onNavigate={onNavigate}
      onCreateExam={onCreateExam}
      onSettings={onSettings}
      onLogout={onLogout}
      dockMode={dockMode}
      onDockModeChange={onDockModeChange}
      className={className}
    >
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">{pageTitle}</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">{pageSubtitle}</p>
        </div>

        {isLoadingQueue ? (
          <div className="flex items-center gap-3 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6">
            <span
              className="h-5 w-5 animate-spin rounded-full border-2 border-blue-600 border-t-transparent"
              aria-hidden="true"
            />
            <span className="text-sm text-gray-600 dark:text-gray-300">Loading grading queue…</span>
          </div>
        ) : queue.length === 0 ? (
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium text-emerald-800 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300">
            No essay submissions are waiting for teacher grading.
          </div>
        ) : (
          <div className="grid grid-cols-1 xl:grid-cols-[340px_minmax(0,1fr)] gap-6">
            <div className="space-y-3">
              {queue.map((item) => {
                const isSelected = item.sessionId === selectedSummary?.sessionId;
                return (
                  <Card
                    key={item.sessionId}
                    selected={isSelected}
                    onClick={() => onSelectSession?.(item.sessionId)}
                    className="cursor-pointer transition hover:border-blue-400"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <div className="font-semibold text-gray-900 dark:text-gray-100 truncate">
                          {item.examTitle}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                          Student: {item.studentId}
                        </div>
                      </div>
                      <span className="shrink-0 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                        {item.pendingEssayCount} pending
                      </span>
                    </div>
                    <div className="mt-3 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                      <span>
                        {item.submittedAt ? new Date(item.submittedAt).toLocaleString() : 'Submitted'}
                      </span>
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        {item.totalEarned.toFixed(1)} / {item.totalMax.toFixed(1)} pts
                      </span>
                    </div>
                  </Card>
                );
              })}
            </div>

            <div className="space-y-4">
              {isLoadingSubmission ? (
                <div className="flex items-center gap-3 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6">
                  <span
                    className="h-5 w-5 animate-spin rounded-full border-2 border-blue-600 border-t-transparent"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Loading selected submission…
                  </span>
                </div>
              ) : !dashboard || !selectedSummary ? (
                <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm font-medium text-blue-800 dark:border-blue-800 dark:bg-blue-950/40 dark:text-blue-300">
                  Select a submitted exam to score its essay questions.
                </div>
              ) : (
                <>
                  <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                          {selectedSummary.examTitle}
                        </div>
                        <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                          Student: {selectedSummary.studentId}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500 dark:text-gray-400">Current total</div>
                        <div className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                          {dashboard.finalScore10.toFixed(1)}
                          <span className="text-base font-medium text-gray-500 dark:text-gray-400">/10</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {essayScores.map((score) => {
                    const draft = drafts[score.questionId] ?? {
                      earnedPoints: String(score.earnedPoints ?? 0),
                      explanation: score.explanation ?? '',
                    };
                    const parsedPoints = Number(draft.earnedPoints);
                    const isInvalid =
                      draft.earnedPoints.trim() === '' ||
                      Number.isNaN(parsedPoints) ||
                      parsedPoints < 0 ||
                      parsedPoints > score.maxPoints;

                    return (
                      <div
                        key={score.questionId}
                        className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm"
                      >
                        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                          <div>
                            <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                              Question {score.questionNumber}
                            </div>
                            <div className="mt-2 whitespace-pre-wrap text-sm text-gray-700 dark:text-gray-300">
                              {score.questionText || 'Essay question'}
                            </div>
                          </div>
                          <div className="rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300">
                            Max {score.maxPoints.toFixed(1)} pts
                          </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                          <div className="rounded-xl border border-red-100 dark:border-red-900/40 bg-red-50 dark:bg-red-950/20 p-4">
                            <div className="text-xs font-semibold uppercase tracking-wide text-red-700 dark:text-red-400">
                              Student Answer
                            </div>
                            <div className="mt-2 whitespace-pre-wrap text-sm text-red-900 dark:text-red-200">
                              {score.studentAnswer || '(No answer)'}
                            </div>
                          </div>
                          <div className="rounded-xl border border-green-100 dark:border-green-900/40 bg-green-50 dark:bg-green-950/20 p-4">
                            <div className="text-xs font-semibold uppercase tracking-wide text-green-700 dark:text-green-400">
                              Reference Answer
                            </div>
                            <div className="mt-2 whitespace-pre-wrap text-sm text-green-900 dark:text-green-200">
                              {score.correctAnswer || 'No reference answer configured.'}
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-[160px_minmax(0,1fr)] gap-4">
                          <label className="block">
                            <span className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                              Awarded points
                            </span>
                            <input
                              type="number"
                              min={0}
                              max={score.maxPoints}
                              step={0.1}
                              value={draft.earnedPoints}
                              onChange={(event) =>
                                setDrafts((current) => ({
                                  ...current,
                                  [score.questionId]: {
                                    ...draft,
                                    earnedPoints: event.target.value,
                                  },
                                }))
                              }
                              className="w-full rounded-xl border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                            />
                          </label>

                          <label className="block">
                            <span className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                              Teacher feedback
                            </span>
                            <textarea
                              rows={4}
                              value={draft.explanation}
                              onChange={(event) =>
                                setDrafts((current) => ({
                                  ...current,
                                  [score.questionId]: { ...draft, explanation: event.target.value },
                                }))
                              }
                              className="w-full rounded-xl border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                              placeholder="Optional guidance shown to the student"
                            />
                          </label>
                        </div>

                        <div className="mt-4 flex items-center justify-between gap-4">
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            Status:{' '}
                            <span className="font-semibold text-gray-700 dark:text-gray-300">
                              {(score.status || '').replace(/_/g, ' ')}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button
                              type="button"
                              disabled={isSavingScore}
                              onClick={() => {
                                setDrafts((current) => ({
                                  ...current,
                                  [score.questionId]: {
                                    ...draft,
                                    earnedPoints: String(score.maxPoints),
                                  },
                                }));
                                onMarkCorrect?.({
                                  questionId: score.questionId,
                                  maxPoints: score.maxPoints,
                                  explanation: draft.explanation.trim() || undefined,
                                });
                              }}
                              variant="secondary"
                              size="sm"
                              className="rounded-xl border border-emerald-300 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300"
                            >
                              Mark correct
                            </Button>
                            <Button
                              type="button"
                              disabled={isInvalid || isSavingScore}
                              onClick={() =>
                                onSaveScore?.({
                                  questionId: score.questionId,
                                  earnedPoints: parsedPoints,
                                  explanation: draft.explanation.trim() || undefined,
                                })
                              }
                              variant="primary"
                              size="sm"
                              className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-300"
                            >
                              {isSavingScore ? 'Saving…' : 'Save score'}
                            </Button>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  {essayScores.length === 0 && (
                    <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium text-emerald-800 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300">
                      All essay questions in this submission are already graded.
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </ExamIntegrityTeacherDashboardTemplate>
  );
};

ExamIntegrityTeacherScoringTemplate.displayName = 'ExamIntegrityTeacherScoringTemplate';
export default ExamIntegrityTeacherScoringTemplate;

