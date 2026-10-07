import type { Meta, StoryObj } from '@storybook/react';
import { ExamIntegrityTeacherDashboardSidebar } from './ExamIntegrityTeacherDashboardSidebar';
import type { ExamIntegrityDashboardSection } from '../../../templates/ExamIntegrityTeacherDashboardTemplate';

const meta: Meta<typeof ExamIntegrityTeacherDashboardSidebar> = {
  title: 'Organisms/Domain/ExamIntegrity/ExamIntegrityTeacherDashboardSidebar',
  component: ExamIntegrityTeacherDashboardSidebar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ExamIntegrityTeacherDashboardSidebar>;

export const Default: Story = {
  args: {
    activeSection: 'dashboard',
    userName: 'John Doe',
    userRole: 'Teacher',
  },
};

export const ReviewSection: Story = {
  args: {
    activeSection: 'review',
    userName: 'Jane Smith',
  },
};

export const QuestionBankSection: Story = {
  args: {
    activeSection: 'question-bank',
    userName: 'Dr. Johnson',
  },
};
