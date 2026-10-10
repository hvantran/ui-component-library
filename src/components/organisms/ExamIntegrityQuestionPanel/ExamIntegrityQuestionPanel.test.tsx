import React from 'react';
import { describe, it, expect } from 'vitest';
import { renderToString } from 'react-dom/server';
import { ExamIntegrityQuestionPanel } from './ExamIntegrityQuestionPanel';

describe('ExamIntegrityQuestionPanel organism', () => {
  it('renders elementary MCQ question with options', () => {
    const html = renderToString(
      <ExamIntegrityQuestionPanel
        questionNumber={1}
        subject="Math"
        gradeLevel="Grade 3"
        questionText="Tính: 25 + 17 = ?"
        questionType="MCQ"
        options={[
          { key: 'A', text: '42' },
          { key: 'B', text: '32' },
        ]}
        selectedAnswer="A"
        onAnswerChange={() => {}}
      />,
    );

    expect(html).toContain('Tính: 25 + 17 = ?');
    expect(html).toContain('42');
    expect(html).toContain('32');
  });

  it('renders loading skeleton when isLoading is true', () => {
    const html = renderToString(
      <ExamIntegrityQuestionPanel
        questionNumber={1}
        questionText=""
        questionType="MCQ"
        isLoading
        onAnswerChange={() => {}}
      />,
    );

    expect(html).toContain('animate-pulse');
  });

  it('renders essay textarea when type is ESSAY_LONG', () => {
    const html = renderToString(
      <ExamIntegrityQuestionPanel
        questionNumber={3}
        subject="Literature"
        gradeLevel="Grade 11"
        questionText="Write an essay about integrity."
        questionType="ESSAY_LONG"
        selectedAnswer=""
        onAnswerChange={() => {}}
      />,
    );

    expect(html).toContain('Write an essay about integrity.');
    expect(html).toContain('<textarea');
  });
});

