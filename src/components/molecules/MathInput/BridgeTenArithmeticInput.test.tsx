import React from 'react';
import { describe, it, expect } from 'vitest';
import { renderToString } from 'react-dom/server';
import BridgeTenArithmeticInput, {
  parseBridgeTenAnswer,
  serializeBridgeTenAnswer,
} from './BridgeTenArithmeticInput';
import { analyzeFormula } from '../../../utils/mathFormulaAnalyzer';

describe('BridgeTenArithmeticInput molecule', () => {
  it('renders addition over 10 with inputs for split and formula answer only', () => {
    const formula = analyzeFormula('9 + 8 = ?');
    const html = renderToString(
      <BridgeTenArithmeticInput
        formula={formula}
        value=""
        onChange={() => {}}
      />,
    );

    expect(html).toContain('Tách gộp làm tròn 10');
    expect(html).toContain('9');
    expect(html).toContain('8');
    // Inputs for student to fill split numbers
    expect(html).toContain('data-testid="add-split-1"');
    expect(html).toContain('data-testid="add-split-2"');
    expect(html).toContain('data-testid="bridge-final-answer"');
    // No merge bracket or merge input
    expect(html).not.toContain('data-testid="add-merge"');
    // No guide text
    expect(html).not.toContain('9 + 1 =');
    expect(html).not.toContain('10 + 7 =');
  });

  it('renders subtraction over 10 with inputs for split and formula answer only', () => {
    const formula = analyzeFormula('15 - 6 = ?');
    const html = renderToString(
      <BridgeTenArithmeticInput
        formula={formula}
        value=""
        onChange={() => {}}
      />,
    );

    expect(html).toContain('Tách gộp trừ với 10');
    expect(html).toContain('15');
    expect(html).toContain('6');
    // Inputs for student to fill split numbers
    expect(html).toContain('data-testid="sub-split-1"');
    expect(html).toContain('data-testid="sub-split-2"');
    expect(html).toContain('data-testid="bridge-final-answer"');
    // No merge bracket or merge input
    expect(html).not.toContain('data-testid="sub-merge"');
    // No guide text
    expect(html).not.toContain('10 − 6 = 4');
    expect(html).not.toContain('5 + 4 =');
  });

  it('renders populated split and answer values', () => {
    const formula = analyzeFormula('9 + 8 = ?');
    const serialized = serializeBridgeTenAnswer({
      finalAnswer: '17',
      split1: '1',
      split2: '7',
    });

    const html = renderToString(
      <BridgeTenArithmeticInput
        formula={formula}
        value={serialized}
        onChange={() => {}}
      />,
    );

    expect(html).toContain('value="17"');
    expect(html).toContain('value="1"');
    expect(html).toContain('value="7"');
  });

  it('parses and serializes answers correctly', () => {
    const parsed = parseBridgeTenAnswer('17\n1\n7');
    expect(parsed.finalAnswer).toBe('17');
    expect(parsed.split1).toBe('1');
    expect(parsed.split2).toBe('7');

    const serialized = serializeBridgeTenAnswer(parsed);
    expect(serialized).toBe('17\n1\n7');
  });
});
