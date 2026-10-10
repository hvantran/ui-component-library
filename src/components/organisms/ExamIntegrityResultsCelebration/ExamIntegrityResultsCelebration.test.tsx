import React from 'react';
import { describe, it, expect } from 'vitest';
import { renderToString } from 'react-dom/server';
import { ExamIntegrityResultsCelebration } from './ExamIntegrityResultsCelebration';

describe('ExamIntegrityResultsCelebration organism', () => {
  it('renders student name, final score, and review list', () => {
    const html = renderToString(
      <ExamIntegrityResultsCelebration
        studentName="Bình An"
        dashboard={{
          finalScore10: 9.5,
          totalEarnedPoints: 9.5,
          totalMaxPoints: 10,
          scores: [
            {
              questionId: 'q1',
              questionNumber: 1,
              earnedPoints: 5,
              maxPoints: 5,
              status: 'CORRECT',
              studentAnswer: 'A',
            },
          ],
        }}
        onBackToQuests={() => {}}
      />,
    );

    expect(html).toContain('Bình An');
    expect(html).toContain('9.5');
    expect(html).toContain('Correct Answers');
    expect(html).toContain('Back to Quests');
  });
});

