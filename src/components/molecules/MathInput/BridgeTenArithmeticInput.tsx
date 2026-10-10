import React from 'react';
import { ParsedFormula } from '../../../utils/mathFormulaAnalyzer';

export interface BridgeTenArithmeticInputProps {
  formula: ParsedFormula;
  value: string;
  disabled?: boolean;
  onChange: (value: string) => void;
}

export interface BridgeTenAnswer {
  finalAnswer: string;
  split1: string;
  split2: string;
}

export const parseBridgeTenAnswer = (rawValue: string): BridgeTenAnswer => {
  const lines = (rawValue || '').split('\n');
  return {
    finalAnswer: lines[0] ?? '',
    split1: lines[1] ?? '',
    split2: lines[2] ?? '',
  };
};

export const serializeBridgeTenAnswer = (answer: BridgeTenAnswer): string => {
  if (!answer.split1 && !answer.split2) {
    return answer.finalAnswer;
  }
  return [answer.finalAnswer, answer.split1, answer.split2].join('\n');
};

const sanitizeDigitsOnly = (raw: string): string => raw.replace(/\D+/g, '');

/**
 * Molecule — BridgeTenArithmeticInput (Tách - Gộp qua 10 trong phạm vi 20 / Make 10 Strategy)
 *
 * Keeps original formula horizontally on the SAME line with the final answer input.
 * Students directly input the split numbers under the fork branches,
 * without any merge bracket, merge input, or explanatory guide text.
 *
 * Addition layout:
 *    9    +    8    =    [ ? ] (final answer)
 *             / \
 *          [?1] [?2] (split inputs)
 *
 * Subtraction layout:
 *        15        −    6    =    [ ? ] (final answer)
 *       /  \
 *    [?1]  [?2] (split inputs)
 */
const BridgeTenArithmeticInput: React.FC<BridgeTenArithmeticInputProps> = ({
  formula,
  value,
  disabled = false,
  onChange,
}) => {
  const isAddition = formula.type === 'SIMPLE_ADDITION' || formula.operator === '+';
  const operands = formula.operands || [];
  const numA = operands[0] ?? 0;
  const numB = operands[1] ?? 0;

  const currentAnswer = parseBridgeTenAnswer(value);

  const updateField = (field: keyof BridgeTenAnswer, rawVal: string) => {
    const clean = sanitizeDigitsOnly(rawVal);
    const next = { ...currentAnswer, [field]: clean };
    onChange(serializeBridgeTenAnswer(next));
  };

  return (
    <div
      data-testid="bridge-ten-arithmetic-input"
      className={`rounded-3xl border-2 p-5 md:p-7 transition-colors ${
        isAddition
          ? 'border-emerald-200 bg-gradient-to-b from-emerald-50/70 via-teal-50/30 to-white'
          : 'border-indigo-200 bg-gradient-to-b from-indigo-50/70 via-purple-50/30 to-white'
      }`}
    >
      {/* Header Pill */}
      <div className="flex items-center justify-between gap-2 mb-6">
        <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-bold tracking-wide uppercase shadow-sm border bg-white">
          <span
            className={`inline-block w-2.5 h-2.5 rounded-full ${
              isAddition ? 'bg-emerald-500' : 'bg-indigo-500'
            }`}
          />
          <span className={isAddition ? 'text-emerald-800' : 'text-indigo-800'}>
            {isAddition ? 'Tách gộp làm tròn 10' : 'Tách gộp trừ với 10'}
          </span>
          <span className="text-slate-400 font-normal">| Lớp 1 - 2</span>
        </div>
      </div>

      {isAddition ? (
        /* ADDITION OVER 10 */
        <div className="mx-auto flex flex-col items-center select-none">
          {/* Original formula on the SAME line */}
          <div className="flex items-start justify-center gap-3 md:gap-5 text-2xl md:text-3xl font-extrabold text-slate-900">
            {/* First operand (numA) */}
            <div className="flex flex-col items-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-emerald-400 bg-white shadow-sm text-emerald-950 font-black">
                {numA}
              </div>
            </div>

            <span className="pt-3 text-emerald-600 font-black">+</span>

            {/* Second operand (numB) with split fork directly underneath */}
            <div className="relative flex flex-col items-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-sky-400 bg-white shadow-sm text-sky-950 font-black">
                {numB}
              </div>

              {/* Fork branch SVG lines */}
              <div className="h-8 w-24 -my-0.5 pointer-events-none">
                <svg className="h-full w-full" viewBox="0 0 100 32" fill="none">
                  <path d="M 50 2 L 20 28" stroke="#0284c7" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M 50 2 L 80 28" stroke="#0284c7" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>

              {/* Student inputs for split numbers */}
              <div className="flex w-24 items-center justify-between">
                <input
                  data-testid="add-split-1"
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={3}
                  placeholder="?"
                  aria-label="Nhập số tách thứ nhất"
                  value={currentAnswer.split1}
                  disabled={disabled}
                  onChange={(e) => updateField('split1', e.target.value)}
                  className={`h-9 w-9 rounded-full border-2 border-emerald-500 bg-white text-center font-black text-emerald-800 shadow-xs text-base outline-none transition-colors ${
                    disabled
                      ? 'cursor-not-allowed opacity-60'
                      : 'focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200'
                  }`}
                />
                <input
                  data-testid="add-split-2"
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={3}
                  placeholder="?"
                  aria-label="Nhập số tách thứ hai"
                  value={currentAnswer.split2}
                  disabled={disabled}
                  onChange={(e) => updateField('split2', e.target.value)}
                  className={`h-9 w-9 rounded-full border-2 border-sky-500 bg-white text-center font-black text-sky-800 shadow-xs text-base outline-none transition-colors ${
                    disabled
                      ? 'cursor-not-allowed opacity-60'
                      : 'focus:border-sky-600 focus:ring-2 focus:ring-sky-200'
                  }`}
                />
              </div>
            </div>

            <span className="pt-3 text-slate-400 font-black">=</span>

            {/* Student final answer input */}
            <div className="flex h-14 min-w-[4rem] px-3 items-center justify-center rounded-2xl border-3 border-emerald-500 bg-white shadow-md ring-4 ring-emerald-100">
              <input
                data-testid="bridge-final-answer"
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={4}
                placeholder="?"
                aria-label="Nhập kết quả phép tính"
                value={currentAnswer.finalAnswer}
                disabled={disabled}
                onChange={(e) => updateField('finalAnswer', e.target.value)}
                className={`w-20 bg-transparent text-center text-2xl md:text-3xl font-black text-emerald-700 outline-none placeholder-emerald-300 ${
                  disabled ? 'cursor-not-allowed opacity-60' : 'focus:text-emerald-950'
                }`}
              />
            </div>
          </div>
        </div>
      ) : (
        /* SUBTRACTION OVER 10 */
        <div className="mx-auto flex flex-col items-center select-none">
          {/* Original formula on the SAME line */}
          <div className="flex items-start justify-center gap-3 md:gap-5 text-2xl md:text-3xl font-extrabold text-slate-900">
            {/* First operand (numA) with split fork directly underneath */}
            <div className="relative flex flex-col items-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-indigo-400 bg-white shadow-sm text-indigo-950 font-black">
                {numA}
              </div>

              {/* Fork branch SVG lines */}
              <div className="h-8 w-24 -my-0.5 pointer-events-none">
                <svg className="h-full w-full" viewBox="0 0 100 32" fill="none">
                  <path d="M 50 2 L 20 28" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M 50 2 L 80 28" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>

              {/* Student inputs for split numbers */}
              <div className="flex w-24 items-center justify-between">
                <input
                  data-testid="sub-split-1"
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={3}
                  placeholder="?"
                  aria-label="Nhập số tách hàng đơn vị"
                  value={currentAnswer.split1}
                  disabled={disabled}
                  onChange={(e) => updateField('split1', e.target.value)}
                  className={`h-9 w-9 rounded-full border-2 border-amber-500 bg-white text-center font-black text-amber-800 shadow-xs text-base outline-none transition-colors ${
                    disabled
                      ? 'cursor-not-allowed opacity-60'
                      : 'focus:border-amber-600 focus:ring-2 focus:ring-amber-200'
                  }`}
                />
                <input
                  data-testid="sub-split-2"
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={3}
                  placeholder="?"
                  aria-label="Nhập số tách hàng chục (10)"
                  value={currentAnswer.split2}
                  disabled={disabled}
                  onChange={(e) => updateField('split2', e.target.value)}
                  className={`h-9 w-9 rounded-full border-2 border-indigo-500 bg-white text-center font-black text-indigo-800 shadow-xs text-base outline-none transition-colors ${
                    disabled
                      ? 'cursor-not-allowed opacity-60'
                      : 'focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200'
                  }`}
                />
              </div>
            </div>

            <span className="pt-3 text-indigo-600 font-black">−</span>

            {/* Second operand (numB) */}
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-purple-400 bg-white shadow-sm text-purple-950 font-black">
              {numB}
            </div>

            <span className="pt-3 text-slate-400 font-black">=</span>

            {/* Student final answer input */}
            <div className="flex h-14 min-w-[4rem] px-3 items-center justify-center rounded-2xl border-3 border-indigo-500 bg-white shadow-md ring-4 ring-indigo-100">
              <input
                data-testid="bridge-final-answer"
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={4}
                placeholder="?"
                aria-label="Nhập kết quả phép tính"
                value={currentAnswer.finalAnswer}
                disabled={disabled}
                onChange={(e) => updateField('finalAnswer', e.target.value)}
                className={`w-20 bg-transparent text-center text-2xl md:text-3xl font-black text-indigo-700 outline-none placeholder-indigo-300 ${
                  disabled ? 'cursor-not-allowed opacity-60' : 'focus:text-indigo-950'
                }`}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BridgeTenArithmeticInput;
