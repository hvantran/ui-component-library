import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ExamIntegrityTeacherDashboardTemplate } from './ExamIntegrityTeacherDashboardTemplate';
import { ExamIntegrityScoringTemplate } from './ExamIntegrityScoringTemplate';
import { ExamIntegrityStudentExamTemplate } from './ExamIntegrityStudentExamTemplate';
import { ExamIntegrityStudentLandingTemplate } from './ExamIntegrityStudentLandingTemplate';
import { TimerDisplay } from '../../../molecules/TimerDisplay';
import { StatusChip } from '../../../atoms/StatusChip';
import { Card } from '../../../atoms/Card';
import { Button } from '../../../atoms/Button';

const meta: Meta = {
  title: 'Templates/ExamIntegrity',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const TeacherDashboard: StoryObj<typeof ExamIntegrityTeacherDashboardTemplate> = {
  render: () => (
    <ExamIntegrityTeacherDashboardTemplate
      userName="Dr. Minh"
      userRole="Teacher"
      sidebar={
        <div className="p-4 space-y-2">
          <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Navigation</div>
          <Button fullWidth textJustify="left" variant="primary">Dashboard</Button>
          <Button fullWidth textJustify="left" variant="ghost">Question Bank</Button>
          <Button fullWidth textJustify="left" variant="ghost">Essay Scoring</Button>
        </div>
      }
    >
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Overview</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card className="p-4">
            <div className="text-sm text-gray-500">Active Exams</div>
            <div className="text-2xl font-bold mt-1">4</div>
          </Card>
          <Card className="p-4">
            <div className="text-sm text-gray-500">Pending Reviews</div>
            <div className="text-2xl font-bold mt-1 text-amber-600">12</div>
          </Card>
          <Card className="p-4">
            <div className="text-sm text-gray-500">Graded Today</div>
            <div className="text-2xl font-bold mt-1 text-emerald-600">38</div>
          </Card>
        </div>
      </div>
    </ExamIntegrityTeacherDashboardTemplate>
  ),
};

export const Scoring: StoryObj<typeof ExamIntegrityScoringTemplate> = {
  render: () => (
    <div className="p-6 max-w-7xl mx-auto">
      <ExamIntegrityScoringTemplate
        queueSlot={
          <>
            <Card className="p-4 border-l-4 border-l-blue-600">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-sm">Nguyen Van A</span>
                <StatusChip label="Pending" variant="pending" />
              </div>
              <div className="text-xs text-gray-500 mt-1">Midterm Biology 2026</div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-sm">Tran Thi B</span>
                <StatusChip label="Graded" variant="active" />
              </div>
              <div className="text-xs text-gray-500 mt-1">Midterm Biology 2026</div>
            </Card>
          </>
        }
        detailSlot={
          <Card className="p-6 space-y-4">
            <h3 className="text-lg font-bold">Question 4: Cellular Respiration</h3>
            <p className="text-sm text-gray-700 bg-gray-50 p-4 rounded-md">
              Student response: The process occurs in mitochondria where ATP is generated via electron transport chain...
            </p>
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium">Score (max 10):</span>
              <input type="number" defaultValue="8" className="w-20 px-3 py-1.5 border rounded-md text-sm" />
              <Button variant="primary">Submit Grade</Button>
            </div>
          </Card>
        }
      />
    </div>
  ),
};

export const StudentExam: StoryObj<typeof ExamIntegrityStudentExamTemplate> = {
  render: () => (
    <ExamIntegrityStudentExamTemplate
      headerSlot={
        <div className="px-6 py-3 flex items-center justify-between">
          <div className="font-bold text-lg">National High School Mock Exam</div>
          <TimerDisplay remainingSeconds={2400} />
        </div>
      }
      navigationSlot={
        <div className="flex items-center gap-2 overflow-x-auto py-1">
          {Array.from({ length: 10 }, (_, i) => (
            <button
              key={i}
              className={`w-8 h-8 rounded-full text-xs font-bold ${
                i === 0 ? 'bg-blue-600 text-white' : 'bg-white border text-gray-700'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      }
      contentSlot={
        <Card className="p-6 space-y-4">
          <h2 className="text-xl font-bold">Question 1</h2>
          <p className="text-base text-gray-800">
            What is the primary function of DNA polymerase III in bacterial DNA replication?
          </p>
          <div className="space-y-2 mt-4">
            {['5\' to 3\' synthesis of leading strand', 'RNA primer removal', 'Unwinding double helix', 'Ligation of Okazaki fragments'].map(
              (opt, idx) => (
                <label key={idx} className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                  <input type="radio" name="q1" className="text-blue-600" />
                  <span className="text-sm">{opt}</span>
                </label>
              ),
            )}
          </div>
        </Card>
      }
      footerSlot={
        <>
          <Button variant="secondary">Previous</Button>
          <div className="flex items-center gap-3">
            <Button variant="ghost">Flag for Review</Button>
            <Button variant="primary">Next Question</Button>
          </div>
        </>
      }
    />
  ),
};

export const StudentLanding: StoryObj<typeof ExamIntegrityStudentLandingTemplate> = {
  render: () => (
    <ExamIntegrityStudentLandingTemplate
      studentName="Hoang Nam"
      studentRole="Student - Grade 12"
      filters={[
        { label: 'All Exams', value: 'all' },
        { label: 'Mathematics', value: 'math' },
        { label: 'Science', value: 'science' },
      ]}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="p-5 space-y-3">
          <StatusChip label="In Progress" variant="active" />
          <h3 className="font-bold text-lg">Biology Midterm</h3>
          <p className="text-xs text-gray-500">Duration: 60 mins • 40 Questions</p>
          <Button fullWidth variant="primary">Continue Exam</Button>
        </Card>
        <Card className="p-5 space-y-3">
          <StatusChip label="Upcoming" variant="draft" />
          <h3 className="font-bold text-lg">Math Advanced</h3>
          <p className="text-xs text-gray-500">Starts at 14:00 PM</p>
          <Button fullWidth variant="outlined" disabled>Locked</Button>
        </Card>
      </div>
    </ExamIntegrityStudentLandingTemplate>
  ),
};
