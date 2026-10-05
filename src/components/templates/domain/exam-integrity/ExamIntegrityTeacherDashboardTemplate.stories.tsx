import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  ExamIntegrityTeacherDashboardTemplate,
  ExamIntegrityDashboardSection,
} from './ExamIntegrityTeacherDashboardTemplate';
import { Card } from '../../../atoms/Card';

const meta: Meta<typeof ExamIntegrityTeacherDashboardTemplate> = {
  title: 'Templates/ExamIntegrityTeacherDashboardTemplate',
  component: ExamIntegrityTeacherDashboardTemplate,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof ExamIntegrityTeacherDashboardTemplate>;

export const Default: Story = {
  render: () => {
    const [section, setSection] = useState<ExamIntegrityDashboardSection>('dashboard');

    return (
      <ExamIntegrityTeacherDashboardTemplate
        userName="Prof. Alexander Wright"
        userRole="Lead Proctor"
        activeSection={section}
        onNavigate={setSection}
        onCreateExam={() => alert('Create Exam clicked')}
        onSettings={() => alert('Settings clicked')}
        onLogout={() => alert('Logout clicked')}
      >
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Teacher Dashboard ({section})
            </h1>
            <p className="text-sm text-gray-500">Monitor live student telemetry and automated anomaly flags.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-5">
              <p className="text-sm text-gray-500">Active Students</p>
              <p className="text-3xl font-bold mt-2">128</p>
            </Card>
            <Card className="p-5">
              <p className="text-sm text-gray-500">Anomalies Detected</p>
              <p className="text-3xl font-bold text-amber-600 mt-2">4</p>
            </Card>
            <Card className="p-5">
              <p className="text-sm text-gray-500">Completed Submissions</p>
              <p className="text-3xl font-bold text-green-600 mt-2">84</p>
            </Card>
          </div>
        </div>
      </ExamIntegrityTeacherDashboardTemplate>
    );
  },
};

export const CustomSidebar: Story = {
  render: () => (
    <ExamIntegrityTeacherDashboardTemplate
      userName="Prof. Alexander Wright"
      userRole="Lead Proctor"
      sidebar={
        <div className="p-4 space-y-2">
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Custom Menu</div>
          <a href="#" className="block px-3 py-2 rounded-md bg-blue-50 text-blue-700 font-medium text-sm">Dashboard</a>
          <a href="#" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 text-sm">Active Sessions</a>
        </div>
      }
      onLogout={() => {}}
    >
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Custom Sidebar Layout</h1>
        <p className="text-sm text-gray-500">Using the custom sidebar slot override.</p>
      </div>
    </ExamIntegrityTeacherDashboardTemplate>
  ),
};
