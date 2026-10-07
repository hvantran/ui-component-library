import type { Meta, StoryObj } from '@storybook/react';
import { ExamIntegrityStudentPortalSidebar } from './ExamIntegrityStudentPortalSidebar';

const meta: Meta<typeof ExamIntegrityStudentPortalSidebar> = {
  title: 'Organisms/ExamIntegrityStudentPortalSidebar',
  component: ExamIntegrityStudentPortalSidebar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ExamIntegrityStudentPortalSidebar>;

export const Default: Story = {
  args: {
    activeSection: 'dashboard',
    studentName: 'Alex Nguyen',
    studentRole: 'Grade 10 Student',
  },
};

export const MyExams: Story = {
  args: {
    activeSection: 'my-exams',
    studentName: 'Sarah Smith',
    studentRole: 'Grade 11 Student',
  },
};

export const Results: Story = {
  args: {
    activeSection: 'results',
    studentName: 'David Lee',
    studentRole: 'Grade 12 Student',
  },
};

