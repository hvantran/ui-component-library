import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  ExamIntegrityStudentLandingTemplate,
  StudentPortalSection,
} from './ExamIntegrityStudentLandingTemplate';
import { Card } from '../../../atoms/Card';
import { Button } from '../../../atoms/Button';
import { StatusChip } from '../../../atoms/StatusChip';

const meta: Meta<typeof ExamIntegrityStudentLandingTemplate> = {
  title: 'Templates/ExamIntegrityStudentLandingTemplate',
  component: ExamIntegrityStudentLandingTemplate,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof ExamIntegrityStudentLandingTemplate>;

export const Default: Story = {
  render: () => {
    const [activeSection, setActiveSection] = useState<StudentPortalSection>('dashboard');
    const [filter, setFilter] = useState('all');

    return (
      <ExamIntegrityStudentLandingTemplate
        studentName="Jane Doe"
        studentRole="Student ID: 2026-9042"
        activeSection={activeSection}
        onNavigate={setActiveSection}
        filters={[
          { label: 'All Exams', value: 'all' },
          { label: 'Upcoming', value: 'upcoming' },
          { label: 'Completed', value: 'completed' },
        ]}
        activeFilter={filter}
        onFilterChange={setFilter}
        onHelp={() => alert('Help clicked')}
        onLogout={() => alert('Logout clicked')}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6 space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">CS301: Advanced Operating Systems</h3>
                <p className="text-sm text-gray-500">Duration: 120 mins • Questions: 25</p>
              </div>
              <StatusChip label="READY" variant="success" />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Final examination covering concurrency, virtual memory, and distributed file systems.
            </p>
            <div className="pt-2 flex justify-end">
              <Button variant="primary">Start Exam</Button>
            </div>
          </Card>
          <Card className="p-6 space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">MATH202: Discrete Mathematics</h3>
                <p className="text-sm text-gray-500">Duration: 90 mins • Questions: 15</p>
              </div>
              <StatusChip label="COMPLETED" variant="default" />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Graph theory, combinatorics, and proof by induction.
            </p>
            <div className="pt-2 flex justify-end">
              <Button variant="outline" disabled>Submitted</Button>
            </div>
          </Card>
        </div>
      </ExamIntegrityStudentLandingTemplate>
    );
  },
};
