import React, { useState, useEffect } from 'react';
import { Modal } from '../../atoms/Modal';
import { Button } from '../../atoms/Button';
import { Select } from '../../atoms/Select';
import { ExamIntegrityMcqOptionsForm } from '../ExamIntegrityMcqOptionsForm';
import type { ExamIntegrityQuestionBankEditFormState } from '../ExamIntegrityQuestionBankEditCard';
import { cn } from '../../../utils/cn';

export interface ExamIntegrityAddQuestionDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (values: ExamIntegrityQuestionBankEditFormState) => void;
  isSubmitting?: boolean;
  error?: string | null;
  difficultyOptions?: { value: string; label: string }[];
  typeOptions?: { value: string; label: string }[];
  initialValues?: Partial<ExamIntegrityQuestionBankEditFormState>;
  className?: string;
}

const DEFAULT_DIFFICULTY_OPTIONS = [
  { value: 'Easy', label: 'Easy' },
  { value: 'Medium', label: 'Medium' },
  { value: 'Hard', label: 'Hard' },
];

const DEFAULT_TYPE_OPTIONS = [
  { value: 'MCQ', label: 'MCQ' },
  { value: 'ESSAY_SHORT', label: 'Essay (Short)' },
  { value: 'ESSAY_LONG', label: 'Essay (Long)' },
];

const DEFAULT_POINTS_BY_TYPE: Record<string, number> = {
  MCQ: 0.5,
  ESSAY_SHORT: 1,
  ESSAY_LONG: 2,
};

const inputCls =
  'border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100';
const labelCls = 'block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1';

const getDefaultForm = (): ExamIntegrityQuestionBankEditFormState => ({
  content: '',
  type: 'MCQ',
  difficulty: 'Medium',
  options: ['', '', '', ''],
  optionImages: [undefined, undefined, undefined, undefined],
  correctAnswer: 'A',
  points: 0.5,
  tags: '',
  imageData: '',
});

export const ExamIntegrityAddQuestionDialog: React.FC<
  ExamIntegrityAddQuestionDialogProps
> = ({
  isOpen,
  onClose,
  onSubmit,
  isSubmitting = false,
  error = null,
  difficultyOptions = DEFAULT_DIFFICULTY_OPTIONS,
  typeOptions = DEFAULT_TYPE_OPTIONS,
  initialValues,
  className,
}) => {
  const [form, setForm] = useState<ExamIntegrityQuestionBankEditFormState>({
    ...getDefaultForm(),
    ...initialValues,
  });
  const [validationError, setValidationError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      setForm({
        ...getDefaultForm(),
        ...initialValues,
      });
      setValidationError(null);
    }
  }, [isOpen, initialValues]);

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

  const handleSubmit = () => {
    if (!form.content.trim()) {
      setValidationError('Question content is required.');
      return;
    }
    setValidationError(null);
    onSubmit(form);
  };

  const activeError = error || validationError;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Add New Question"
      className={cn('!max-w-2xl w-full', className)}
      footer={
        <div className="flex justify-end gap-2">
          <Button
            variant="neutral"
            size="sm"
            onClick={onClose}
            disabled={isSubmitting}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            size="sm"
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Saving…' : 'Add Question'}
          </Button>
        </div>
      }
    >
      <textarea
        className={cn(inputCls, 'resize-y min-h-[72px] mb-4 w-full')}
        placeholder="Question Content"
        rows={3}
        value={form.content}
        onChange={(e) => setField('content', e.target.value)}
      />
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div>
          <label className={labelCls}>Question Type</label>
          <Select
            value={form.type}
            onChange={(e) => {
              const nextType = e.target.value;
              setForm((f) => ({
                ...f,
                type: nextType,
                points: DEFAULT_POINTS_BY_TYPE[nextType] ?? f.points,
              }));
            }}
            options={typeOptions}
          />
        </div>
        <div>
          <label className={labelCls}>Difficulty Level</label>
          <Select
            value={form.difficulty}
            onChange={(e) => setField('difficulty', e.target.value)}
            options={difficultyOptions}
          />
        </div>
      </div>

      {form.type === 'MCQ' && (
        <ExamIntegrityMcqOptionsForm
          options={form.options}
          optionImages={form.optionImages}
          correctAnswer={form.correctAnswer}
          idPrefix="add"
          onOptionChange={setOption}
          onOptionImageChange={setOptionImage}
          onCorrectAnswerChange={(val) => setField('correctAnswer', val)}
        />
      )}

      <div className="flex gap-3 mb-3">
        <div>
          <label className={labelCls}>Points</label>
          <input
            type="number"
            className={cn(inputCls, 'w-24')}
            min={0}
            value={form.points}
            onChange={(e) => setField('points', Number(e.target.value))}
          />
        </div>
        <div className="flex-1">
          <label className={labelCls}>Tags / Keywords (comma separated)</label>
          <input
            className={cn(inputCls, 'w-full')}
            value={form.tags}
            onChange={(e) => setField('tags', e.target.value)}
          />
        </div>
      </div>

      {/* Image Upload */}
      <label className="inline-flex items-center gap-1.5 mb-3 px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition text-gray-700 dark:text-gray-300">
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
        <div className="mb-3">
          <img
            src={form.imageData}
            alt="Preview"
            className="max-h-40 rounded-lg border border-gray-300 dark:border-gray-700"
          />
        </div>
      )}
      {activeError && (
        <p className="text-xs mt-1 text-red-600 dark:text-red-400">{activeError}</p>
      )}
    </Modal>
  );
};

