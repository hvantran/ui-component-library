import { describe, it, expect } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import {
  ExamIntegrityTeacherScoringTemplate,
  type ExamIntegrityScoringQueueItem,
  type ExamIntegrityScoringDashboard,
} from './ExamIntegrityTeacherScoringTemplate';

describe('ExamIntegrityTeacherScoringTemplate', () => {
  const mockQueue: ExamIntegrityScoringQueueItem[] = [
    {
      sessionId: 'session-1',
      examTitle: 'Biology Midterm Exam',
      studentId: 'student-alex-01',
      pendingEssayCount: 1,
      totalEarned: 6.5,
      totalMax: 10.0,
      submittedAt: '2026-10-17T08:30:00Z',
    },
  ];

  const mockDashboard: ExamIntegrityScoringDashboard = {
    sessionId: 'session-1',
    examTitle: 'Biology Midterm Exam',
    finalScore10: 6.5,
    scores: [
      {
        questionId: 'q-1',
        questionNumber: 1,
        questionText: 'Explain photosynthesis.',
        questionType: 'ESSAY',
        maxPoints: 5.0,
        earnedPoints: 3.5,
        studentAnswer: 'Plants absorb sunlight.',
        correctAnswer: 'Plants convert light into chemical energy.',
        status: 'PENDING_REVIEW',
      },
    ],
  };

  it('renders queue item, scoring dashboard, and action buttons', () => {
    const html = renderToString(
      <ExamIntegrityTeacherScoringTemplate
        queue={mockQueue}
        selectedSessionId="session-1"
        dashboard={mockDashboard}
      />,
    );

    expect(html).toContain('Biology Midterm Exam');
    expect(html).toContain('student-alex-01');
    expect(html).toContain('Explain photosynthesis.');
    expect(html).toContain('Mark all incorrect');
    expect(html).toContain('Mark correct');
    expect(html).toContain('Save score');
  });

  it('renders empty queue message when no submissions exist', () => {
    const html = renderToString(
      <ExamIntegrityTeacherScoringTemplate queue={[]} />,
    );

    expect(html).toContain('No essay submissions are waiting for teacher grading.');
  });
});
