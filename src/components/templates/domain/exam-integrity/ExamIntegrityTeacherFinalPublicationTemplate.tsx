import React, { useState, KeyboardEvent } from 'react';
import { Send, CircleCheck, Sigma, BookOpen, Plus, Image } from 'lucide-react';
import { Button } from '../../../atoms/Button';
import { Skeleton } from '../../../atoms/Skeleton';
import { ExamIntegrityTopBar } from '../../../organisms/domain/exam-integrity/ExamIntegrityTopBar';
import { ExamIntegrityTeacherDashboardSidebar } from '../../../organisms/domain/exam-integrity/ExamIntegrityTeacherDashboardSidebar';
import type { ExamIntegrityDashboardSection } from './ExamIntegrityTeacherDashboardTemplate';
import { cn } from '../../../../utils/cn';

export interface ExamIntegrityFinalPublicationStats {
  approvedQuestions?: number;
  totalPoints?: number;
  essayRubricsStatus?: string;
}

export interface ExamIntegrityFinalPublicationFormValues {
  examTitle?: string;
  durationSeconds?: number;
  tags?: string[];
  reviewNotes?: string;
}

export interface ExamIntegrityDraftQuestionSummary {
  id?: string;
  questionNumber?: number;
  content?: string;
  points?: number;
  questionType?: string;
  imageData?: string;
}

export interface ExamIntegrityTeacherFinalPublicationTemplateProps {
  userName?: string;
  userRole?: string;
  onNavigate?: (section: ExamIntegrityDashboardSection) => void;
  onCreateExam?: () => void;
  onSettings?: () => void;
  onLogout?: () => void;
  onSearch?: (query: string) => void;
  onNotifications?: () => void;
  onHelp?: () => void;
  stats?: ExamIntegrityFinalPublicationStats;
  formValues?: ExamIntegrityFinalPublicationFormValues;
  isLoading?: boolean;
  onFormChange?: (
    field: keyof ExamIntegrityFinalPublicationFormValues,
    value: string | string[] | number
  ) => void;
  onSaveDraft?: () => void;
  onPublish?: () => void;
  questions?: ExamIntegrityDraftQuestionSummary[];
  className?: string;
}

const StatCard: React.FC<{
  icon: React.ReactNode;
  value: string | number;
  label: string;
  iconColor?: string;
}> = ({ icon, value, label, iconColor }) => (
  <div className="bg-gray-50 dark:bg-gray-850 border border-gray-200 dark:border-gray-800 rounded-lg p-6 flex flex-col items-center justify-center text-center gap-2">
    <span className={iconColor ?? 'text-blue-700 dark:text-blue-400'}>{icon}</span>
    <span className="text-3xl font-semibold text-gray-900 dark:text-white leading-none">{value}</span>
    <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mt-0.5">
      {label}
    </span>
  </div>
);

export const ExamIntegrityTeacherFinalPublicationTemplate: React.FC<
  ExamIntegrityTeacherFinalPublicationTemplateProps
> = ({
  userName = '',
  userRole,
  onNavigate,
  onCreateExam,
  onSettings,
  onLogout,
  onNotifications,
  onHelp,
  stats,
  formValues,
  isLoading = false,
  onFormChange,
  onSaveDraft,
  onPublish,
  questions = [],
  className,
}) => {
  const [tagInput, setTagInput] = useState('');

  const handleAddTag = () => {
    const trimmed = tagInput.trim();
    if (!trimmed) return;
    const current = formValues?.tags ?? [];
    if (!current.includes(trimmed)) {
      onFormChange?.('tags', [...current, trimmed]);
    }
    setTagInput('');
  };

  const handleTagKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddTag();
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    const current = formValues?.tags ?? [];
    onFormChange?.(
      'tags',
      current.filter((t) => t !== tagToRemove)
    );
  };

  return (
    <div className={cn('min-h-screen bg-gray-50 dark:bg-gray-950 flex flex-col font-sans', className)}>
      <ExamIntegrityTopBar
        userName={userName}
        showSearch={false}
        onNotifications={onNotifications}
        onHelp={onHelp}
        onLogout={onLogout}
      />
      <ExamIntegrityTeacherDashboardSidebar
        activeSection="review"
        userName={userName}
        userRole={userRole}
        onNavigate={onNavigate}
        onCreateExam={onCreateExam}
        onSettings={onSettings}
        onLogout={onLogout}
      />

      <div className="ml-[256px] pt-[64px] min-h-screen flex flex-col">
        {/* Sub-header */}
        <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-8 py-3 flex items-center justify-between sticky top-[64px] z-20">
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <span>Ingestion</span>
            <span>/</span>
            <span>Review</span>
            <span>/</span>
            <span className="font-semibold text-blue-600 dark:text-blue-400">Final Publication</span>
          </div>

          <div className="flex items-center gap-3">
            {onSaveDraft && (
              <Button variant="ghost" size="sm" onClick={onSaveDraft}>
                Save as Draft
              </Button>
            )}
            {onPublish && (
              <Button variant="primary" size="sm" icon={<Send size={14} />} onClick={onPublish}>
                Publish Exam
              </Button>
            )}
          </div>
        </div>

        <main className="flex-1 p-8 max-w-7xl mx-auto w-full flex flex-col gap-8">
          {/* Page Heading */}
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Exam Publication Readiness</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Verify questions, set final exam metadata, and publish for student access.
            </p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {isLoading ? (
              [0, 1, 2].map((i) => <Skeleton key={i} height="110px" className="rounded-lg" />)
            ) : (
              <>
                <StatCard
                  icon={<CircleCheck size={28} />}
                  value={stats?.approvedQuestions ?? 0}
                  label="Approved Questions"
                  iconColor="text-emerald-600"
                />
                <StatCard
                  icon={<Sigma size={28} />}
                  value={stats?.totalPoints ?? 0}
                  label="Total Points"
                  iconColor="text-blue-600"
                />
                <StatCard
                  icon={<BookOpen size={28} />}
                  value={stats?.essayRubricsStatus ?? 'Ready'}
                  label="Rubrics Status"
                  iconColor="text-purple-600"
                />
              </>
            )}
          </div>

          {/* Metadata Form Card */}
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-sm flex flex-col gap-6">
            <h2 className="font-semibold text-gray-900 dark:text-white text-base">Publication Metadata</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 mb-1">
                  Exam Title
                </label>
                <input
                  type="text"
                  value={formValues?.examTitle ?? ''}
                  onChange={(e) => onFormChange?.('examTitle', e.target.value)}
                  placeholder="e.g. Midterm Physics Exam"
                  className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 mb-1">
                  Duration (Minutes)
                </label>
                <input
                  type="number"
                  value={
                    formValues?.durationSeconds ? Math.round(formValues.durationSeconds / 60) : 60
                  }
                  onChange={(e) =>
                    onFormChange?.('durationSeconds', Number(e.target.value) * 60)
                  }
                  className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Tags */}
            <div>
              <label className="block text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 mb-2">
                Classification Tags
              </label>
              <div className="flex flex-wrap gap-2 mb-2">
                {(formValues?.tags ?? []).map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => handleRemoveTag(tag)}
                      className="hover:text-red-600 focus:outline-none"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
              <div className="flex gap-2 max-w-sm">
                <input
                  type="text"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={handleTagKeyDown}
                  placeholder="Add a tag..."
                  className="flex-1 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg px-3 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button variant="neutral" size="sm" icon={<Plus size={14} />} onClick={handleAddTag}>
                  Add
                </Button>
              </div>
            </div>
          </div>

          {/* Question Summary Table */}
          {questions.length > 0 && (
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-sm">
              <h2 className="font-semibold text-gray-900 dark:text-white text-base mb-4">
                Questions Ready for Publication ({questions.length})
              </h2>
              <div className="divide-y divide-gray-100 dark:divide-gray-800">
                {questions.map((q, idx) => (
                  <div key={q.id || idx} className="py-3 flex items-center justify-between text-sm">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-bold text-xs flex items-center justify-center">
                        {q.questionNumber ?? idx + 1}
                      </span>
                      <span className="text-gray-800 dark:text-gray-200 truncate max-w-lg">
                        {q.content || 'Question content preview'}
                      </span>
                      {q.imageData && <Image size={14} className="text-gray-400" />}
                    </div>
                    <span className="text-gray-500 font-medium">{q.points ?? 1} pts</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

ExamIntegrityTeacherFinalPublicationTemplate.displayName =
  'ExamIntegrityTeacherFinalPublicationTemplate';
export default ExamIntegrityTeacherFinalPublicationTemplate;
