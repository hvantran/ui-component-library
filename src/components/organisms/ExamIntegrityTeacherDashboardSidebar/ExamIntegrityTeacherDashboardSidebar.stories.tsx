import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  ExamIntegrityTeacherDashboardSidebar,
  type ExamIntegrityNavDockMode,
} from './ExamIntegrityTeacherDashboardSidebar';
import type { ExamIntegrityDashboardSection } from '../../templates/ExamIntegrityTeacherDashboardTemplate';

const meta: Meta<typeof ExamIntegrityTeacherDashboardSidebar> = {
  title: 'Organisms/ExamIntegrityTeacherDashboardSidebar',
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
    dockMode: 'pinned',
  },
};

export const Docked: Story = {
  args: {
    activeSection: 'dashboard',
    userName: 'Prof. Wright',
    userRole: 'Lead Proctor',
    dockMode: 'docked',
  },
};

export const AutoHide: Story = {
  args: {
    activeSection: 'dashboard',
    userName: 'Prof. Wright',
    userRole: 'Lead Proctor',
    dockMode: 'auto-hide',
  },
};

export const InteractiveDocking: Story = {
  render: () => {
    const [mode, setMode] = useState<ExamIntegrityNavDockMode>('pinned');
    const [section, setSection] = useState<ExamIntegrityDashboardSection>('dashboard');

    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-950 p-4">
        <ExamIntegrityTeacherDashboardSidebar
          activeSection={section}
          onNavigate={setSection}
          userName="Prof. Alexander Wright"
          userRole="Lead Proctor"
          dockMode={mode}
          onDockModeChange={setMode}
          onCreateExam={() => alert('Create Exam clicked')}
          onSettings={() => alert('Settings clicked')}
          onLogout={() => alert('Logout clicked')}
        />
        <div
          className="transition-all duration-300 p-8"
          style={{
            marginLeft: mode === 'auto-hide' ? 0 : mode === 'docked' ? 72 : 256,
          }}
        >
          <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            Interactive Teacher Docking Test
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Current mode: <strong className="font-mono text-blue-600">{mode}</strong>
          </p>
        </div>
      </div>
    );
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
