import React from 'react';
import { describe, it, expect } from 'vitest';
import { renderToString } from 'react-dom/server';
import { ExamIntegrityQuestionDisplay } from './ExamIntegrityQuestionDisplay';

describe('ExamIntegrityQuestionDisplay organism', () => {
  it('renders question content and MCQ options', () => {
    const html = renderToString(
      <ExamIntegrityQuestionDisplay
        index={0}
        question={{
          id: 'q-1',
          questionNumber: 1,
          content: 'What is 10 + 20?',
          type: 'MCQ',
          points: 1,
          options: ['10', '20', '30', '40'],
          correctAnswer: 'C',
          parserConfidence: 0.98,
          truncated: false,
        }}
      />,
    );

    expect(html).toContain('Question 1');
    expect(html).toContain('Multiple Choice');
    expect(html).toContain('What is 10 + 20?');
    expect(html).toContain('30');
  });

  it('renders skeleton on loading state', () => {
    const html = renderToString(
      <ExamIntegrityQuestionDisplay
        index={0}
        question={{
          id: 'q-1',
          questionNumber: 1,
          content: '',
          points: 1,
          parserConfidence: 1,
          truncated: false,
        }}
        isLoading
      />,
    );

    expect(html).toContain('animate-pulse');
  });

  it('renders MCQ option image when option contains base64 image data', () => {
    const html = renderToString(
      <ExamIntegrityQuestionDisplay
        index={1}
        question={{
          id: 'q-2',
          questionNumber: 2,
          content: 'Choose the matching symbol',
          type: 'MCQ',
          points: 1,
          options: ['Circle data:image/png;base64,circleData', 'Square'],
          correctAnswer: 'A',
          parserConfidence: 0.99,
          truncated: false,
        }}
      />,
    );

    expect(html).toContain('Circle');
    expect(html).toContain('src="data:image/png;base64,circleData"');
    expect(html).toContain('alt="Option A"');
  });
});

