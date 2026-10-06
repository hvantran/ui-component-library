import type { Meta, StoryObj } from '@storybook/react';
import { ExamIntegrityTeacherFinalPublicationTemplate } from './ExamIntegrityTeacherFinalPublicationTemplate';

const meta: Meta<typeof ExamIntegrityTeacherFinalPublicationTemplate> = {
  title: 'Templates/Domain/ExamIntegrity/ExamIntegrityTeacherFinalPublicationTemplate',
  component: ExamIntegrityTeacherFinalPublicationTemplate,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ExamIntegrityTeacherFinalPublicationTemplate>;

export const Default: Story = {
  args: {
    userName: 'Prof. Hoa Tran',
    stats: {
      approvedQuestions: 25,
      totalPoints: 100,
      essayRubricsStatus: 'Verified',
    },
    formValues: {
      examTitle: 'Final Semester Examination 2026',
      durationSeconds: 5400,
      tags: ['Math', 'Calculus', 'Finals'],
    },
    questions: [
      { id: '1', questionNumber: 1, content: 'Calculate derivative of sin(x) * cos(x)', points: 4 },
      { id: '2', questionNumber: 2, content: 'Solve the differential equation dy/dx = y', points: 6 },
    ],
  },
};

export const Loading: Story = {
  args: {
    userName: 'Prof. Hoa Tran',
    isLoading: true,
  },
};

