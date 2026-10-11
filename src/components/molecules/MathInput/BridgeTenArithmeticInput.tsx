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
      className={`rounded-2xl sm:rounded-3xl border-2 p-3 sm:p-4 md:p-5 transition-colors overflow-hidden ${
        isAddition
          ? 'border-emerald-200 bg-gradient-to-b from-emerald-50/70 via-teal-50/30 to-white'
          : 'border-indigo-200 bg-gradient-to-b from-indigo-50/70 via-purple-50/30 to-white'
      }`}
    >
      {/* Header Pill */}
      <div className="flex items-center justify-between gap-2 mb-3 sm:mb-5">
        <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full px-2.5 sm:px-3.5 py-1 text-[11px] sm:text-xs font-bold tracking-wide uppercase shadow-xs border bg-white">
          <span
            className={`inline-block w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full ${
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
        <div className="mx-auto flex flex-col items-center select-none w-full min-w-0">
          {/* Original formula on the SAME line */}
          <div className="w-full overflow-x-auto py-1">
            <div className="flex items-start justify-center gap-1 sm:gap-2 text-lg sm:text-xl font-extrabold text-slate-900 w-fit mx-auto max-w-full">
              {/* First operand (numA) */}
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl border-2 border-emerald-400 bg-white shadow-xs text-emerald-950 font-black text-lg sm:text-xl">
                  {numA}
                </div>
              </div>

              <span className="pt-1.5 sm:pt-2 text-emerald-600 font-black text-base sm:text-lg">+</span>

              {/* Second operand (numB) with split fork directly underneath */}
              <div className="relative flex flex-col items-center">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl border-2 border-sky-400 bg-white shadow-xs text-sky-950 font-black text-lg sm:text-xl">
                  {numB}
                </div>

                {/* Fork branch SVG lines */}
                <div className="h-6 sm:h-7 w-18 sm:w-20 -my-0.5 pointer-events-none">
                  <svg className="h-full w-full" viewBox="0 0 100 32" fill="none">
                    <path d="M 50 2 L 20 28" stroke="#0284c7" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M 50 2 L 80 28" stroke="#0284c7" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>

                {/* Student inputs for split numbers */}
                <div className="flex w-18 sm:w-20 items-center justify-between">
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
                    className={`h-7 w-7 sm:h-8 sm:w-8 rounded-full border-2 border-emerald-500 bg-white text-center font-black text-emerald-800 shadow-xs text-xs sm:text-sm outline-none transition-colors ${
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
                    className={`h-7 w-7 sm:h-8 sm:w-8 rounded-full border-2 border-sky-500 bg-white text-center font-black text-sky-800 shadow-xs text-xs sm:text-sm outline-none transition-colors ${
                      disabled
                        ? 'cursor-not-allowed opacity-60'
                        : 'focus:border-sky-600 focus:ring-2 focus:ring-sky-200'
                    }`}
                  />
                </div>
              </div>

              <span className="pt-1.5 sm:pt-2 text-slate-400 font-black text-base sm:text-lg">=</span>

              {/* Student final answer input */}
              <div className="flex h-10 sm:h-12 min-w-[3rem] sm:min-w-[3.5rem] px-2 sm:px-2.5 items-center justify-center rounded-xl sm:rounded-2xl border-2 sm:border-3 border-emerald-500 bg-white shadow-xs ring-2 ring-emerald-100">
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
                  className={`w-9 sm:w-11 bg-transparent text-center text-lg sm:text-xl font-black text-emerald-700 outline-none placeholder-emerald-300 ${
                    disabled ? 'cursor-not-allowed opacity-60' : 'focus:text-emerald-950'
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* SUBTRACTION OVER 10 */
        <div className="mx-auto flex flex-col items-center select-none w-full min-w-0">
          {/* Original formula on the SAME line */}
          <div className="w-full overflow-x-auto py-1">
            <div className="flex items-start justify-center gap-1 sm:gap-2 text-lg sm:text-xl font-extrabold text-slate-900 w-fit mx-auto max-w-full">
              {/* First operand (numA) with split fork directly underneath */}
              <div className="relative flex flex-col items-center">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl border-2 border-indigo-400 bg-white shadow-xs text-indigo-950 font-black text-lg sm:text-xl">
                  {numA}
                </div>

                {/* Fork branch SVG lines */}
                <div className="h-6 sm:h-7 w-18 sm:w-20 -my-0.5 pointer-events-none">
                  <svg className="h-full w-full" viewBox="0 0 100 32" fill="none">
                    <path d="M 50 2 L 20 28" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M 50 2 L 80 28" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>

                {/* Student inputs for split numbers */}
                <div className="flex w-18 sm:w-20 items-center justify-between">
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
                    className={`h-7 w-7 sm:h-8 sm:w-8 rounded-full border-2 border-amber-500 bg-white text-center font-black text-amber-800 shadow-xs text-xs sm:text-sm outline-none transition-colors ${
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
                    className={`h-7 w-7 sm:h-8 sm:w-8 rounded-full border-2 border-indigo-500 bg-white text-center font-black text-indigo-800 shadow-xs text-xs sm:text-sm outline-none transition-colors ${
                      disabled
                        ? 'cursor-not-allowed opacity-60'
                        : 'focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200'
                    }`}
                  />
                </div>
              </div>

              <span className="pt-1.5 sm:pt-2 text-indigo-600 font-black text-base sm:text-lg">−</span>

              {/* Second operand (numB) */}
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl border-2 border-purple-400 bg-white shadow-xs text-purple-950 font-black text-lg sm:text-xl">
                  {numB}
                </div>
              </div>

              <span className="pt-1.5 sm:pt-2 text-slate-400 font-black text-base sm:text-lg">=</span>

              {/* Student final answer input */}
              <div className="flex h-10 sm:h-12 min-w-[3rem] sm:min-w-[3.5rem] px-2 sm:px-2.5 items-center justify-center rounded-xl sm:rounded-2xl border-2 sm:border-3 border-indigo-500 bg-white shadow-xs ring-2 ring-indigo-100">
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
                  className={`w-9 sm:w-11 bg-transparent text-center text-lg sm:text-xl font-black text-indigo-700 outline-none placeholder-indigo-300 ${
                    disabled ? 'cursor-not-allowed opacity-60' : 'focus:text-indigo-950'
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BridgeTenArithmeticInput;
