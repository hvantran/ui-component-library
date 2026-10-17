import React from 'react';
import { Trash2, Image as ImageIcon } from 'lucide-react';
import { cn } from '../../../utils/cn';

export interface ExamIntegrityMcqOptionsFormProps {
  options: string[];
  optionImages?: (string | undefined)[];
  correctAnswer: string;
  idPrefix?: string;
  onOptionChange: (idx: number, val: string) => void;
  onOptionImageChange?: (idx: number, imageBase64?: string) => void;
  onCorrectAnswerChange: (val: string) => void;
  onError?: (msg: string) => void;
  className?: string;
}

const OPTION_LABELS = ['A', 'B', 'C', 'D'];

const inputCls =
  'border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100';

export const ExamIntegrityMcqOptionsForm: React.FC<ExamIntegrityMcqOptionsFormProps> = ({
  options,
  optionImages,
  correctAnswer,
  idPrefix = 'mcq',
  onOptionChange,
  onOptionImageChange,
  onCorrectAnswerChange,
  onError,
  className,
}) => {
  const handleFileChange = (idx: number, file?: File) => {
    if (!file) return;
    if (file.size > 1024 * 1024) {
      onError?.('Image size must be less than 1MB');
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      onOptionImageChange?.(idx, result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className={cn('mb-4', className)}>
      <p className="text-xs font-semibold uppercase tracking-wide mb-2 text-gray-500 dark:text-gray-400">
        Answer Options
      </p>
      {OPTION_LABELS.map((label, idx) => {
        const optionImage = optionImages?.[idx];
        return (
          <div
            key={label}
            className="mb-2 p-2 rounded-lg border border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50"
          >
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name={`${idPrefix}-correctAnswer`}
                value={label}
                checked={correctAnswer === label}
                onChange={(e) => onCorrectAnswerChange(e.target.value)}
                className="accent-primary-600 w-4 h-4 shrink-0 cursor-pointer"
                aria-label={`Mark option ${label} as correct`}
              />
              <span className="text-sm font-semibold min-w-[20px] text-gray-800 dark:text-gray-200">
                {label}
              </span>
              <input
                className={cn(inputCls, 'flex-1')}
                placeholder={`Option ${label}`}
                value={options[idx] ?? ''}
                onChange={(e) => onOptionChange(idx, e.target.value)}
                aria-label={`Option ${label} text`}
              />
              {/* Option Image Upload Button */}
              <label
                title="Upload option image"
                className="p-2 border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-primary transition shrink-0 flex items-center justify-center text-gray-600 dark:text-gray-300"
              >
                <ImageIcon size={16} />
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    handleFileChange(idx, e.target.files?.[0]);
                    e.target.value = '';
                  }}
                />
              </label>
            </div>
            {optionImage && (
              <div className="mt-2 ml-7 flex items-center gap-2">
                <div className="relative group rounded-md border border-gray-200 dark:border-gray-700 overflow-hidden bg-white dark:bg-gray-800 p-1">
                  <img
                    src={optionImage}
                    alt={`Option ${label}`}
                    className="max-h-20 max-w-[160px] object-contain rounded"
                  />
                  <button
                    type="button"
                    title="Remove image"
                    onClick={() => onOptionImageChange?.(idx, undefined)}
                    className="absolute top-1 right-1 bg-red-600 text-white p-1 rounded-full shadow hover:bg-red-700 transition"
                  >
                    <Trash2 size={12} />
                  </button>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">Image attached</span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

