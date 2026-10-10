import React from 'react';
import { describe, it, expect } from 'vitest';
import { renderToString } from 'react-dom/server';
import { MathQuestionInput } from './index';

describe('MathQuestionInput molecule', () => {
  it('renders simple addition problem', () => {
    const html = renderToString(
      <MathQuestionInput
        questionText="4 722 + 5 369 = ?"
        value=""
        onChange={() => {}}
      />,
    );

    expect(html).toContain('4 722');
    expect(html).toContain('5 369');
    expect(html).toContain('+');
  });

  it('renders complex formula with work textarea and formula display', () => {
    const html = renderToString(
      <MathQuestionInput
        questionText="12 740 + 5 037 x 4 = ?"
        value="= 5 037 x 4 = 20 148"
        onChange={() => {}}
      />,
    );

    expect(html).toContain('Formula');
    expect(html).toContain('Your Work');
    expect(html).toContain('Final Answer');
    expect(html).toContain('12 740 + 5 037 x 4 = ?');
  });

  it('renders Grade 1 split and merge for addition with grade 1 tag', () => {
    const html = renderToString(
      <MathQuestionInput
        questionText="3 + 2 = ?"
        value=""
        tags={['grade 1']}
        onChange={() => {}}
      />,
    );

    expect(html).toContain('Gộp số (Merge)');
    expect(html).toContain('Gộp 3 và 2 được mấy?');
    expect(html).toContain('split-merge-arithmetic-input');
  });

  it('renders Grade 1 split and merge for subtraction with grade 1 tag', () => {
    const html = renderToString(
      <MathQuestionInput
        questionText="5 - 2 = ?"
        value=""
        tags={['grade1']}
        onChange={() => {}}
      />,
    );

    expect(html).toContain('Tách số (Split)');
    expect(html).toContain('5 tách thành 2 và mấy?');
    expect(html).toContain('split-merge-arithmetic-input');
  });

  it('renders Grade 1 Make 10 bridging for addition over 10', () => {
    const html = renderToString(
      <MathQuestionInput
        questionText="9 + 8 = ?"
        value=""
        tags={['grade 1']}
        onChange={() => {}}
      />,
    );

    expect(html).toContain('Tách gộp làm tròn 10');
    expect(html).toContain('data-testid="add-split-1"');
    expect(html).toContain('data-testid="bridge-final-answer"');
    expect(html).toContain('bridge-ten-arithmetic-input');
  });

  it('renders Grade 1 Bridge 10 for subtraction over 10 to 20', () => {
    const html = renderToString(
      <MathQuestionInput
        questionText="15 - 6 = ?"
        value=""
        tags={['grade 1']}
        onChange={() => {}}
      />,
    );

    expect(html).toContain('Tách gộp trừ với 10');
    expect(html).toContain('data-testid="sub-split-1"');
    expect(html).toContain('data-testid="bridge-final-answer"');
    expect(html).toContain('bridge-ten-arithmetic-input');
  });

  it('renders fallback textarea for unknown text', () => {
    const html = renderToString(
      <MathQuestionInput
        questionText="What is the capital of Vietnam?"
        value=""
        onChange={() => {}}
      />,
    );

    expect(html).toContain('Enter your answer here');
  });
});

