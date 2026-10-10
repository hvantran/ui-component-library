import React from 'react';
import { Chip } from '../../atoms/Chip';
import { Skeleton } from '../../atoms/Skeleton';
import { AlertTriangle, Image as ImageIcon, Trash2 } from 'lucide-react';
import type { DraftQuestionDTO } from '../../../types/examIntegrity';

const BLANK_RE = /([.…_]{3,})/g;

function renderWithBlanks(text: string): React.ReactNode {
  const parts = text.split(BLANK_RE);
  return (
    <>
      {parts.map((part, i) =>
        BLANK_RE.test(part) ? (
          <span
            key={i}
            className="inline-block min-w-[72px] border-b-2 border-blue-600 mx-1 align-bottom h-[1.15em]"
          />
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

function looksLikeCalc(s: string) {
  return /\d/.test(s) && /[+\-x×÷:]/.test(s);
}

function splitExpressions(content: string): string[] {
  return content
    .split(/[;\n]/)
    .map((s) => s.trim())
    .filter(Boolean);
}

const OPTION_LABELS = ['A', 'B', 'C', 'D', 'E', 'F'];

function McqQuestion({
  q,
  selectedAnswer,
  onCorrectAnswerChange,
}: {
  q: DraftQuestionDTO;
  selectedAnswer?: string;
  onCorrectAnswerChange?: (value: string) => void;
}) {
  return (
    <div>
      <p className="text-[0.95rem] font-medium text-slate-800 mb-4 whitespace-pre-wrap leading-relaxed">
        {renderWithBlanks(q.content)}
      </p>
      <div className="flex flex-col gap-2">
        {(q.options ?? []).map((opt, i) => {
          const label = OPTION_LABELS[i] ?? String(i + 1);
          const isCorrect =
            (selectedAnswer && selectedAnswer === label) ||
            q.correctAnswer === label ||
            q.correctAnswer === opt ||
            (q.correctAnswer ?? '').toUpperCase().startsWith(label);
          return (
            <div
              key={i}
              className={`flex items-start gap-3 px-4 py-2 rounded-lg border transition-all ${
                isCorrect
                  ? 'border-blue-600 bg-blue-50 text-blue-950'
                  : 'border-slate-200 bg-slate-50 text-slate-800'
              } ${onCorrectAnswerChange ? 'cursor-pointer hover:border-blue-400' : 'cursor-default'}`}
              onClick={() => onCorrectAnswerChange?.(label)}
            >
              <div
                className={`min-w-[26px] h-[26px] rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 ${
                  isCorrect
                    ? 'border-blue-600 bg-blue-600 text-white'
                    : 'border-slate-300 text-slate-600'
                }`}
              >
                <span className="text-[0.72rem] font-bold">{label}</span>
              </div>
              <span className="text-[0.9rem] leading-relaxed pt-0.5">
                {renderWithBlanks(opt)}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function CalculationQuestion({ q }: { q: DraftQuestionDTO }) {
  const parts = splitExpressions(q.content);
  const promptPart = parts.length > 0 && !looksLikeCalc(parts[0]) ? parts[0] : null;
  const expressions = promptPart ? parts.slice(1) : parts;

  return (
    <div>
      {promptPart && (
        <p className="text-[0.95rem] font-medium text-slate-800 mb-3">{promptPart}</p>
      )}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-3">
        {expressions.map((expr, i) => (
          <div
            key={i}
            className="p-3 rounded-lg border border-slate-200 bg-slate-50 font-mono text-[0.9rem] text-slate-800 leading-loose break-words"
          >
            {renderWithBlanks(expr)}
          </div>
        ))}
      </div>
    </div>
  );
}

function EssayQuestion({ q }: { q: DraftQuestionDTO }) {
  const keywords = q.rubric?.keywords ?? [];
  return (
    <div>
      <p className="text-[0.95rem] font-medium text-slate-800 whitespace-pre-wrap leading-relaxed mb-4">
        {renderWithBlanks(q.content)}
      </p>
      {keywords.length > 0 && (
        <div className="flex flex-wrap gap-1.5 items-center">
          <span className="text-xs text-slate-500">Rubric keywords:</span>
          {keywords.map((k) => (
            <Chip key={k} label={k} size="sm" variant="outlined" />
          ))}
        </div>
      )}
    </div>
  );
}

export interface ExamIntegrityQuestionDisplayProps {
  question: DraftQuestionDTO;
  index: number;
  isLoading?: boolean;
  questionScore?: number | '';
  onQuestionScoreChange?: (value: number | '') => void;
  onQuestionScoreBlur?: () => void;
  questionImageData?: string;
  onQuestionImageUpload?: (file: File) => void;
  onQuestionImageRemove?: () => void;
  selectedCorrectAnswer?: string;
  onCorrectAnswerChange?: (value: string) => void;
  onCorrectAnswerBlur?: () => void;
}

export const ExamIntegrityQuestionDisplay: React.FC<ExamIntegrityQuestionDisplayProps> = ({
  question: q,
  index,
  isLoading = false,
  questionScore = '',
  onQuestionScoreChange,
  onQuestionScoreBlur,
  questionImageData,
  onQuestionImageUpload,
  onQuestionImageRemove,
  selectedCorrectAnswer,
  onCorrectAnswerChange,
  onCorrectAnswerBlur,
}) => {
  if (isLoading) {
    return (
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <Skeleton height={22} width={92} />
          <Skeleton height={22} width={108} />
          <Skeleton height={22} width={56} />
        </div>
        <div className="p-4 rounded-lg border border-slate-200 bg-white">
          <Skeleton height={18} width="88%" className="mb-2" />
          <Skeleton height={18} width="96%" className="mb-2" />
          <Skeleton height={18} width="64%" className="mb-4" />
          <Skeleton height={46} width="100%" className="mb-2" />
          <Skeleton height={46} width="100%" className="mb-2" />
          <Skeleton height={46} width="100%" />
        </div>
      </div>
    );
  }

  const typeLabel =
    q.type === 'MCQ'
      ? 'Multiple Choice'
      : q.type === 'ESSAY_SHORT'
        ? 'Short Answer'
        : q.type === 'ESSAY_LONG'
          ? 'Long Answer'
          : 'Essay / Calculation';

  const isCalc =
    q.type !== 'MCQ' &&
    (q.content.includes(';') ||
      /\d[^a-zA-ZÀ-ỹ]{0,10}[.…_]{3,}/.test(q.content) ||
      /[+\-x×÷:]\s*\d.*[.…_]{3,}/.test(q.content));

  const warnings = q.parserWarnings ?? [];
  const lowConfidence = (q.parserConfidence ?? 1) < 0.7;
  const hasImage = !!questionImageData;

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center flex-wrap gap-2">
          <div className="px-3 py-0.5 rounded-lg bg-blue-50 border border-blue-200">
            <span className="text-xs font-bold text-blue-700">
              {`Question ${q.questionNumber > 0 ? q.questionNumber : index + 1}`}
            </span>
          </div>
          <Chip
            label={typeLabel}
            size="sm"
            variant="outlined"
            className="text-[0.7rem] h-[22px]"
          />
          {lowConfidence && (
            <div className="flex items-center gap-1">
              <AlertTriangle size={15} className="text-amber-500" />
              <span className="text-[0.7rem] text-amber-600">
                Low confidence ({Math.round((q.parserConfidence ?? 0) * 100)}%)
              </span>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2">
          {onQuestionScoreChange && (
            <div className="flex items-center gap-1.5">
              <label className="text-xs font-semibold text-slate-600">Score:</label>
              <input
                type="number"
                min={0.5}
                step={0.5}
                value={questionScore}
                onChange={(e) => {
                  const nextValue = e.target.value;
                  if (nextValue === '') {
                    onQuestionScoreChange('');
                    return;
                  }
                  const parsedValue = Number(nextValue);
                  if (Number.isFinite(parsedValue)) {
                    onQuestionScoreChange(Math.max(0, parsedValue));
                  }
                }}
                onBlur={onQuestionScoreBlur}
                className="w-14 px-1.5 py-1 border border-slate-300 rounded text-sm font-semibold focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
          )}

          {onQuestionImageUpload && (
            <div className="flex items-center gap-1">
              {hasImage && onQuestionImageRemove && (
                <button
                  type="button"
                  onClick={onQuestionImageRemove}
                  className="p-1 text-red-500 hover:text-red-700 transition"
                  title="Remove image"
                >
                  <Trash2 size={16} />
                </button>
              )}
              <label className="flex items-center gap-1 cursor-pointer px-2 py-1 rounded border border-slate-300 bg-slate-50 hover:bg-slate-100 text-xs font-semibold text-slate-700 transition">
                <ImageIcon size={14} />
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const selectedFile = e.target.files?.[0];
                    if (selectedFile && onQuestionImageUpload) {
                      onQuestionImageUpload(selectedFile);
                    }
                    e.currentTarget.value = '';
                  }}
                  className="hidden"
                />
                <span>{hasImage ? 'Change' : 'Upload'}</span>
              </label>
            </div>
          )}
        </div>
      </div>

      <div
        className={`p-4 rounded-lg border bg-white ${
          lowConfidence ? 'border-amber-300' : 'border-slate-200'
        }`}
      >
        {hasImage && (
          <div className="mb-4">
            <img
              src={questionImageData}
              alt="Question"
              className="max-h-48 max-w-full rounded border border-slate-200 object-contain"
            />
          </div>
        )}

        {q.type === 'MCQ' ? (
          <div onBlur={onCorrectAnswerBlur}>
            <McqQuestion
              q={q}
              selectedAnswer={selectedCorrectAnswer}
              onCorrectAnswerChange={onCorrectAnswerChange}
            />
          </div>
        ) : isCalc ? (
          <CalculationQuestion q={q} />
        ) : (
          <EssayQuestion q={q} />
        )}
      </div>

      {warnings.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1">
          {warnings.map((w, i) => (
            <Chip
              key={i}
              icon={<AlertTriangle size={13} />}
              label={w}
              size="sm"
              color="warning"
              variant="outlined"
              className="text-[0.7rem] h-[22px]"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ExamIntegrityQuestionDisplay;
