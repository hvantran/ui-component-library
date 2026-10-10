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

