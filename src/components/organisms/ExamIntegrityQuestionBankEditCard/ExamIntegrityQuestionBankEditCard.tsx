import React, { useState } from 'react';
import { Button } from '../../atoms/Button';
import { Select } from '../../atoms/Select';
import { ExamIntegrityMcqOptionsForm } from '../ExamIntegrityMcqOptionsForm';
import { cn } from '../../../utils/cn';

export interface ExamIntegrityQuestionBankEditFormState {
  content: string;
  type: string;
  difficulty: string;
  options: string[];
  optionImages: (string | undefined)[];
  correctAnswer: string;
  points: number;
  tags: string;
  imageData?: string;
}

export interface ExamIntegrityQuestionBankEditCardProps {
  idPrefix?: string;
  initialValues: ExamIntegrityQuestionBankEditFormState;
  onSave: (values: ExamIntegrityQuestionBankEditFormState) => void;
  onCancel: () => void;
  isSaving?: boolean;
  difficultyOptions?: { value: string; label: string }[];
  className?: string;
}

const DEFAULT_DIFFICULTY_OPTIONS = [
  { value: 'Easy', label: 'Easy' },
  { value: 'Medium', label: 'Medium' },
  { value: 'Hard', label: 'Hard' },
];

const inputCls =
  'border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100';

export const ExamIntegrityQuestionBankEditCard: React.FC<
  ExamIntegrityQuestionBankEditCardProps
> = ({
  idPrefix = 'edit',
  initialValues,
  onSave,
  onCancel,
  isSaving = false,
  difficultyOptions = DEFAULT_DIFFICULTY_OPTIONS,
  className,
}) => {
  const [form, setForm] = useState<ExamIntegrityQuestionBankEditFormState>(initialValues);

  const setField = <K extends keyof ExamIntegrityQuestionBankEditFormState>(
    key: K,
    val: ExamIntegrityQuestionBankEditFormState[K]
  ) => setForm((prev) => ({ ...prev, [key]: val }));

  const setOption = (idx: number, val: string) =>
    setForm((prev) => {
      const opts = [...prev.options];
      opts[idx] = val;
      return { ...prev, options: opts };
    });

  const setOptionImage = (idx: number, imageBase64?: string) =>
    setForm((prev) => {
      const optImgs = [...prev.optionImages];
      optImgs[idx] = imageBase64;
      return { ...prev, optionImages: optImgs };
    });

  return (
    <div
      className={cn(
        'rounded-lg p-4 shadow-lg bg-white dark:bg-gray-900 border-2 border-l-4 border-primary-500',
        className
      )}
    >
      {/* Header */}
      <p className="text-xs font-semibold tracking-wide uppercase mb-2 text-primary-600 dark:text-primary-400">
        Edit Question
      </p>

      {/* Content */}
      <textarea
        className={cn(inputCls, 'resize-y min-h-[72px] w-full mb-2')}
        placeholder="Question Content"
        rows={3}
        value={form.content}
        onChange={(e) => setField('content', e.target.value)}
      />

      <div className="flex gap-2 mb-2">
        <Select
          value={form.difficulty}
          onChange={(e) => setField('difficulty', e.target.value)}
          options={difficultyOptions}
          className="flex-1"
        />
      </div>

      {/* Answer options (MCQ only) */}
      {form.type === 'MCQ' && (
        <ExamIntegrityMcqOptionsForm
          options={form.options}
          optionImages={form.optionImages}
          correctAnswer={form.correctAnswer}
          idPrefix={idPrefix}
          onOptionChange={setOption}
          onOptionImageChange={setOptionImage}
          onCorrectAnswerChange={(val) => setField('correctAnswer', val)}
        />
      )}

      {/* Points + Tags row */}
      <div className="flex gap-2 mb-3">
        <input
          type="number"
          className={cn(inputCls, 'w-24')}
          placeholder="Points"
          min={0}
          value={form.points}
          onChange={(e) => setField('points', Number(e.target.value))}
        />
        <input
          className={cn(inputCls, 'flex-1')}
          placeholder="Tags / Keywords (comma separated)"
          value={form.tags}
          onChange={(e) => setField('tags', e.target.value)}
        />
      </div>

      {/* Image Upload */}
      <label className="inline-flex items-center gap-1.5 mb-2 px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition text-gray-700 dark:text-gray-300">
        Upload Image
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={async (e) => {
            const file = e.target.files?.[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (ev) => {
              setField('imageData', ev.target?.result as string);
            };
            reader.readAsDataURL(file);
          }}
        />
      </label>
      {form.imageData && (
        <div className="mb-2">
          <img
            src={form.imageData}
            alt="Preview"
            className="max-h-40 rounded-lg border border-gray-300 dark:border-gray-700"
          />
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-2 justify-end">
        <Button variant="outlined" size="sm" onClick={onCancel} disabled={isSaving}>
          Cancel
        </Button>
        <Button
          variant="primary"
          size="sm"
          onClick={() => onSave(form)}
          disabled={isSaving}
        >
          {isSaving ? 'Saving…' : 'Save Changes'}
        </Button>
      </div>
    </div>
  );
};

