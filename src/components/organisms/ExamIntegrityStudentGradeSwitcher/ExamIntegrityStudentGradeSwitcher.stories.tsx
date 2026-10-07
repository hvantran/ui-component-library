import type { Meta, StoryObj } from '@storybook/react';
import {
  ExamIntegrityStudentGradeSwitcher,
  StudentExamSummary,
} from './ExamIntegrityStudentGradeSwitcher';

const mockStudents: StudentExamSummary[] = [
  {
    sessionId: 's-1',
    studentId: 'ST-101',
    studentName: 'Alice Nguyen',
    examTitle: 'Midterm Math Exam',
    totalEarned: 9.5,
    totalMax: 10,
    finalScore10: 9.5,
  },
  {
    sessionId: 's-2',
    studentId: 'ST-102',
    studentName: 'Bob Tran',
    examTitle: 'Midterm Math Exam',
    totalEarned: 8.0,
    totalMax: 10,
    finalScore10: 8.0,
  },
  {
    sessionId: 's-3',
    studentId: 'ST-103',
    studentName: 'Charlie Le',
    examTitle: 'Midterm Math Exam',
    totalEarned: 6.2,
    totalMax: 10,
    finalScore10: 6.2,
    pendingEssayCount: 1,
  },
  {
    sessionId: 's-4',
    studentId: 'ST-104',
    studentName: 'David Pham',
    examTitle: 'Midterm Math Exam',
    totalEarned: 4.5,
    totalMax: 10,
    finalScore10: 4.5,
  },
];

const meta: Meta<typeof ExamIntegrityStudentGradeSwitcher> = {
  title: 'Organisms/ExamIntegrityStudentGradeSwitcher',
  component: ExamIntegrityStudentGradeSwitcher,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ExamIntegrityStudentGradeSwitcher>;

export const Default: Story = {
  args: {
    students: mockStudents,
    selectedSessionId: 's-1',
    onSelectStudent: () => {},
  },
};

export const EmptyList: Story = {
  args: {
    students: [],
    onSelectStudent: () => {},
  },
};

