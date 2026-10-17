import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  ExamIntegrityTeacherScoringTemplate,
  type ExamIntegrityScoringQueueItem,
  type ExamIntegrityScoringDashboard,
} from './ExamIntegrityTeacherScoringTemplate';

const mockQueue: ExamIntegrityScoringQueueItem[] = [
  {
    sessionId: 'session-1',
    examTitle: 'AP Biology Midterm Exam',
    studentId: 'student-alex-01',
    pendingEssayCount: 2,
    totalEarned: 6.5,
    totalMax: 10.0,
    submittedAt: '2026-10-17T08:30:00Z',
  },
  {
    sessionId: 'session-2',
    examTitle: 'AP Biology Midterm Exam',
    studentId: 'student-bella-02',
    pendingEssayCount: 1,
    totalEarned: 8.0,
    totalMax: 10.0,
    submittedAt: '2026-10-17T09:00:00Z',
  },
];

const mockDashboard: ExamIntegrityScoringDashboard = {
  sessionId: 'session-1',
  examTitle: 'AP Biology Midterm Exam',
  finalScore10: 6.5,
  scores: [
    {
      questionId: 'q-1',
      questionNumber: 1,
      questionText: 'Explain the light-dependent reactions of photosynthesis and their role in producing ATP and NADPH.',
      questionType: 'ESSAY',
      maxPoints: 5.0,
      earnedPoints: 3.5,
      studentAnswer:
        'Light hits chlorophyll in photosystem II, releasing electrons that travel through the electron transport chain to generate ATP and NADPH.',
      correctAnswer:
        'Photons excite electrons in PSII and PSI, driving photophosphorylation and proton gradient creation across the thylakoid membrane to synthesize ATP via ATP synthase and reduce NADP+ to NADPH.',
      status: 'PENDING_REVIEW',
      explanation: 'Good explanation of the general flow; could detail proton gradient mechanism.',
    },
    {
      questionId: 'q-2',
      questionNumber: 2,
      questionText: 'Contrast cellular respiration in aerobic vs anaerobic conditions.',
      questionType: 'ESSAY',
      maxPoints: 5.0,
      earnedPoints: 3.0,
      studentAnswer:
        'Aerobic uses oxygen and makes more ATP in the mitochondria. Anaerobic fermentation makes lactic acid or ethanol with only 2 ATP.',
      correctAnswer:
        'Aerobic respiration involves glycolysis, Krebs cycle, and oxidative phosphorylation yielding ~36-38 ATP. Anaerobic fermentation stops at glycolysis yielding 2 net ATP and regenerates NAD+ via lactate or alcohol pathways.',
      status: 'PENDING_REVIEW',
      explanation: '',
    },
  ],
};

const meta: Meta<typeof ExamIntegrityTeacherScoringTemplate> = {
  title: 'Templates/ExamIntegrityTeacherScoringTemplate',
  component: ExamIntegrityTeacherScoringTemplate,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof ExamIntegrityTeacherScoringTemplate>;

export const Default: Story = {
  render: () => {
    const [selectedSessionId, setSelectedSessionId] = useState('session-1');

    return (
      <ExamIntegrityTeacherScoringTemplate
        userName="Prof. Alexander Wright"
        userRole="Lead Proctor"
        queue={mockQueue}
        selectedSessionId={selectedSessionId}
        onSelectSession={setSelectedSessionId}
        dashboard={mockDashboard}
        onSaveScore={({ questionId, earnedPoints, explanation }) =>
          alert(`Saved score: Q=${questionId}, pts=${earnedPoints}, feedback=${explanation}`)
        }
        onMarkCorrect={({ questionId, maxPoints }) =>
          alert(`Marked correct: Q=${questionId}, maxPts=${maxPoints}`)
        }
      />
    );
  },
};

export const EmptyQueue: Story = {
  args: {
    userName: 'Prof. Alexander Wright',
    userRole: 'Teacher',
    queue: [],
  },
};

export const LoadingQueue: Story = {
  args: {
    userName: 'Prof. Alexander Wright',
    userRole: 'Teacher',
    isLoadingQueue: true,
  },
};

