import React, { useId, useMemo } from 'react';
import { ParsedFormula } from '../../../utils/mathFormulaAnalyzer';

export interface SplitMergeArithmeticInputProps {
  formula: ParsedFormula;
  value: string;
  disabled?: boolean;
  onChange: (value: string) => void;
  /**
   * Explicit override for diagram mode ('merge' for addition, 'split' for subtraction).
   * Defaults to automatic detection based on formula type.
   */
  mode?: 'merge' | 'split';
}

const sanitizeDigitsOnly = (raw: string): string => raw.replace(/\D+/g, '');

/**
 * Molecule — SplitMergeArithmeticInput (Number Bonds / Tách - Gộp số)
 *
 * Provides specialized, child-friendly visual input for Grade 1 elementary math.
 * Represents addition as "Gộp" (merging parts into a whole) and
 * subtraction as "Tách" (splitting a whole into parts).
 */
const SplitMergeArithmeticInput: React.FC<SplitMergeArithmeticInputProps> = ({
  formula,
  value,
  disabled = false,
  onChange,
  mode: explicitMode,
}) => {
  const inputId = useId();

  const isMerge = useMemo(() => {
    if (explicitMode) return explicitMode === 'merge';
    return formula.type === 'SIMPLE_ADDITION' || formula.operator === '+';
  }, [explicitMode, formula.type, formula.operator]);

  const operands = formula.operands || [];
  const firstOperand = operands[0] ?? 0;
  const secondOperand = operands[1] ?? 0;

  // In addition (merge): parts are known (first & second), whole is unknown (value)
  // In subtraction (split): whole is firstOperand, known part is secondOperand, missing part is value
  const wholeValue = isMerge ? value : firstOperand.toString();
  const leftPartValue = isMerge ? firstOperand.toString() : secondOperand.toString();
  const rightPartValue = isMerge ? secondOperand.toString() : value;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(sanitizeDigitsOnly(e.target.value));
  };

  return (
    <div
      data-testid="split-merge-arithmetic-input"
      className={`rounded-3xl border-2 p-5 md:p-7 transition-colors ${
        isMerge
          ? 'border-emerald-200 bg-gradient-to-b from-emerald-50/70 to-teal-50/40'
          : 'border-amber-200 bg-gradient-to-b from-amber-50/70 to-orange-50/40'
      }`}
    >
      {/* Header Badge & Instruction */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-bold tracking-wide uppercase shadow-sm border bg-white">
          <span
            className={`inline-block w-2.5 h-2.5 rounded-full ${
              isMerge ? 'bg-emerald-500' : 'bg-amber-500'
            }`}
          />
          <span className={isMerge ? 'text-emerald-800' : 'text-amber-800'}>
            {isMerge ? 'Gộp số (Merge)' : 'Tách số (Split)'}
          </span>
          <span className="text-slate-400 font-normal">| Lớp 1</span>
        </div>

        <span className="text-xs font-medium text-slate-500">
          {isMerge
            ? `Gộp ${firstOperand} và ${secondOperand} được mấy?`
            : `${firstOperand} tách thành ${secondOperand} và mấy?`}
        </span>
      </div>

      {/* Main Diagram Area */}
      <div className="relative mx-auto flex max-w-sm flex-col items-center justify-center py-2 select-none">
        {/* Whole Node (Top) */}
        <div className="z-10 flex flex-col items-center">
          <span className="mb-1 text-[11px] font-bold uppercase tracking-wider text-slate-400">
            {isMerge ? 'Tổng (Cả hai)' : 'Số ban đầu'}
          </span>
          <div
            className={`flex h-20 w-20 items-center justify-center rounded-full border-4 shadow-md transition-all ${
              isMerge
                ? 'border-emerald-500 bg-white ring-4 ring-emerald-100'
                : 'border-amber-400 bg-amber-50/90 text-amber-950 ring-4 ring-amber-100'
            }`}
          >
            {isMerge ? (
              <input
                id={inputId}
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={4}
                placeholder="?"
                aria-label="Nhập số cần gộp"
                value={value}
                disabled={disabled}
                onChange={handleInputChange}
                className={`h-full w-full rounded-full bg-transparent text-center text-3xl font-black text-emerald-700 outline-none placeholder-emerald-300 transition-colors ${
                  disabled ? 'cursor-not-allowed opacity-60' : 'focus:ring-2 focus:ring-emerald-400'
                }`}
              />
            ) : (
              <span className="text-3xl font-black tracking-tight">{wholeValue}</span>
            )}
          </div>
        </div>

        {/* SVG Connector Branches */}
        <div className="relative -my-3 h-16 w-52 pointer-events-none">
          <svg
            className="h-full w-full overflow-visible"
            viewBox="0 0 200 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 100 4 L 40 56"
              stroke={isMerge ? '#10b981' : '#f59e0b'}
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M 100 4 L 160 56"
              stroke={isMerge ? '#10b981' : '#f59e0b'}
              strokeWidth="4"
              strokeLinecap="round"
            />
            {/* Center Directional Arrow Indicator */}
            <circle
              cx="100"
              cy="28"
              r="10"
              fill="white"
              stroke={isMerge ? '#10b981' : '#f59e0b'}
              strokeWidth="2"
            />
            <text
              x="100"
              y="32"
              textAnchor="middle"
              fontSize="12"
              fontWeight="bold"
              fill={isMerge ? '#047857' : '#b45309'}
            >
              {isMerge ? '▲' : '▼'}
            </text>
          </svg>
        </div>

        {/* Part Nodes (Bottom Branches) */}
        <div className="z-10 flex w-full max-w-[280px] items-center justify-between px-2">
          {/* Left Part */}
          <div className="flex flex-col items-center">
            <span className="mb-1 text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Phần 1
            </span>
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-sky-400 bg-sky-50 shadow-md ring-4 ring-sky-100 text-sky-950">
              <span className="text-2xl font-black">{leftPartValue}</span>
            </div>
          </div>

          {/* Operation Symbol Badge in between */}
          <div className="flex flex-col items-center justify-center pt-4">
            <span
              className={`rounded-full px-2.5 py-1 text-sm font-extrabold shadow-sm ${
                isMerge ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
              }`}
            >
              {isMerge ? '+' : '−'}
            </span>
          </div>

          {/* Right Part */}
          <div className="flex flex-col items-center">
            <span className="mb-1 text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Phần 2
            </span>
            <div
              className={`flex h-16 w-16 items-center justify-center rounded-full border-4 shadow-md transition-all ${
                !isMerge
                  ? 'border-amber-500 bg-white ring-4 ring-amber-100'
                  : 'border-indigo-400 bg-indigo-50 shadow-md ring-4 ring-indigo-100 text-indigo-950'
              }`}
            >
              {!isMerge ? (
                <input
                  id={inputId}
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={4}
                  placeholder="?"
                  aria-label="Nhập phần số còn lại"
                  value={value}
                  disabled={disabled}
                  onChange={handleInputChange}
                  className={`h-full w-full rounded-full bg-transparent text-center text-2xl font-black text-amber-700 outline-none placeholder-amber-300 transition-colors ${
                    disabled ? 'cursor-not-allowed opacity-60' : 'focus:ring-2 focus:ring-amber-400'
                  }`}
                />
              ) : (
                <span className="text-2xl font-black">{rightPartValue}</span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Formula equation bar */}
      <div className="mt-5 pt-3 border-t border-slate-200/80 flex items-center justify-center gap-2 font-mono text-base font-semibold text-slate-700">
        <span>{firstOperand}</span>
        <span className={isMerge ? 'text-emerald-600 font-bold' : 'text-amber-600 font-bold'}>
          {isMerge ? '+' : '−'}
        </span>
        <span>{secondOperand}</span>
        <span>=</span>
        <span
          className={`inline-flex min-w-[2.5rem] items-center justify-center rounded-lg px-2 py-0.5 font-bold shadow-inner ${
            value
              ? isMerge
                ? 'bg-emerald-100 text-emerald-800'
                : 'bg-amber-100 text-amber-800'
              : 'bg-white text-slate-400 border border-slate-300'
          }`}
        >
          {value || '?'}
        </span>
      </div>
    </div>
  );
};

export default SplitMergeArithmeticInput;

