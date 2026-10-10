import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { renderToString } from 'react-dom/server';
import SplitMergeArithmeticInput from './SplitMergeArithmeticInput';
import { analyzeFormula } from '../../../utils/mathFormulaAnalyzer';

describe('SplitMergeArithmeticInput molecule', () => {
  it('renders addition in merge mode with whole node as input', () => {
    const formula = analyzeFormula('3 + 2 = ?');
    const html = renderToString(
      <SplitMergeArithmeticInput
        formula={formula}
        value=""
        onChange={() => {}}
      />,
    );

    expect(html).toContain('Gộp số (Merge)');
    expect(html).toContain('Lớp 1');
    expect(html).toContain('Gộp 3 và 2 được mấy?');
    expect(html).toContain('Phần 1');
    expect(html).toContain('Phần 2');
    expect(html).toContain('3');
    expect(html).toContain('2');
    expect(html).toContain('Nhập số cần gộp');
  });

  it('renders subtraction in split mode with missing part as input', () => {
    const formula = analyzeFormula('5 - 2 = ?');
    const html = renderToString(
      <SplitMergeArithmeticInput
        formula={formula}
        value=""
        onChange={() => {}}
      />,
    );

    expect(html).toContain('Tách số (Split)');
    expect(html).toContain('5 tách thành 2 và mấy?');
    expect(html).toContain('5');
    expect(html).toContain('2');
    expect(html).toContain('Nhập phần số còn lại');
  });

  it('renders populated answer in equation bar and node', () => {
    const formula = analyzeFormula('3 + 2 = ?');
    const html = renderToString(
      <SplitMergeArithmeticInput
        formula={formula}
        value="5"
        onChange={() => {}}
      />,
    );

    expect(html).toContain('value="5"');
    expect(html).toContain('<span>=</span>');
    expect(html).toContain('5');
  });

  it('honors explicit mode override', () => {
    const formula = analyzeFormula('3 + 2 = ?');
    const html = renderToString(
      <SplitMergeArithmeticInput
        formula={formula}
        value=""
        mode="split"
        onChange={() => {}}
      />,
    );

    expect(html).toContain('Tách số (Split)');
  });
});

