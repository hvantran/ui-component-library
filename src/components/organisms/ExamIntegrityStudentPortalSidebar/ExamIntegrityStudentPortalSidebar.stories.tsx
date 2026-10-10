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
    dockMode: 'pinned',
  },
};

export const DockedMiniRail: Story = {
  args: {
    activeSection: 'dashboard',
    studentName: 'Alex Nguyen',
    studentRole: 'Grade 10 Student',
    dockMode: 'docked',
  },
};

export const AutoHide: Story = {
  args: {
    activeSection: 'dashboard',
    studentName: 'Alex Nguyen',
    studentRole: 'Grade 10 Student',
    dockMode: 'auto-hide',
  },
};

export const MyExams: Story = {
  args: {
    activeSection: 'my-exams',
    studentName: 'Sarah Smith',
    studentRole: 'Grade 11 Student',
    dockMode: 'pinned',
  },
};

export const Results: Story = {
  args: {
    activeSection: 'results',
    studentName: 'David Lee',
    studentRole: 'Grade 12 Student',
    dockMode: 'pinned',
  },
};

export const Shop: Story = {
  args: {
    activeSection: 'shop',
    studentName: 'Alex Nguyen',
    studentRole: 'Grade 10 Student',
    dockMode: 'pinned',
  },
};
