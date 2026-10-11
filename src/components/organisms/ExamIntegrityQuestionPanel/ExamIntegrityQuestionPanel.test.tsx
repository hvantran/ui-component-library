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

  it('renders Grade 1 math input when questionText is a math formula', () => {
    const html = renderToString(
      <ExamIntegrityQuestionPanel
        questionNumber={1}
        subject="Toán"
        gradeLevel="Grade 1"
        questionText="15 - 9 = ?"
        questionType="ESSAY_SHORT"
        selectedAnswer=""
        onAnswerChange={() => {}}
      />,
    );

    expect(html).toContain('data-testid="bridge-ten-arithmetic-input"');
  });

  it('renders Grade 1 math input when questionText has prefix like a, 15 - 8 = ?', () => {
    const html = renderToString(
      <ExamIntegrityQuestionPanel
        questionNumber={2}
        subject="Toán"
        gradeLevel="Lớp 1"
        questionText="a, 15 - 8 = ?"
        questionType="ESSAY_SHORT"
        selectedAnswer=""
        onAnswerChange={() => {}}
      />,
    );

    expect(html).toContain('data-testid="bridge-ten-arithmetic-input"');
  });

  it('renders multi-part Grade 1 math questions with BridgeTenArithmeticInput in responsive sections', () => {
    const html = renderToString(
      <ExamIntegrityQuestionPanel
        questionNumber={3}
        subject="Toán"
        gradeLevel="Grade 1"
        questionStem="Số?"
        questionText="Số?"
        questionType="ESSAY_SHORT"
        questionParts={[
          { key: 'A', prompt: '6 + 8 = .........' },
          { key: 'C', prompt: '12 - 9 = .........' },
          { key: 'D', prompt: '7 + 5 = .........' },
        ]}
        selectedAnswerParts={[]}
        onAnswerChange={() => {}}
      />,
    );

    expect(html).toContain('data-testid="bridge-ten-arithmetic-input"');
    expect(html).toContain('min-w-0 overflow-hidden');
    expect(html).toContain('Tách gộp làm tròn 10');
    expect(html).toContain('Tách gộp trừ với 10');
  });

  it('renders comparator function buttons for 8 ...... 3 + 5 instead of split-merge or bridge-ten', () => {
    const html = renderToString(
      <ExamIntegrityQuestionPanel
        questionNumber={4}
        subject="Toán"
        gradeLevel="Grade 1"
        questionStem="Điền dấu >, <, ="
        questionText="Điền dấu >, <, ="
        questionType="ESSAY_SHORT"
        questionParts={[
          { key: 'D', prompt: '8 ...... 3 + 5' },
        ]}
        selectedAnswerParts={[]}
        onAnswerChange={() => {}}
      />,
    );

    expect(html).not.toContain('data-testid="bridge-ten-arithmetic-input"');
    expect(html).not.toContain('data-testid="split-merge-arithmetic-input"');
    // Checks that comparison buttons <, =, > are rendered
    expect(html).toContain('&lt;');
    expect(html).toContain('=');
    expect(html).toContain('&gt;');
    expect(html).toContain('8');
    expect(html).toContain('3 + 5');
  });

  it('renders responsive Final Answer input in complex formula questions', () => {
    const html = renderToString(
      <ExamIntegrityQuestionPanel
        questionNumber={5}
        subject="Toán"
        gradeLevel="Grade 1"
        questionStem="Tính"
        questionText="6 + 3 - 2 = ?"
        questionType="ESSAY_SHORT"
        selectedAnswer=""
        onAnswerChange={() => {}}
      />,
    );

    expect(html).toContain('Final Answer');
    expect(html).toContain('flex-1 min-w-0 max-w-full');
  });
});


