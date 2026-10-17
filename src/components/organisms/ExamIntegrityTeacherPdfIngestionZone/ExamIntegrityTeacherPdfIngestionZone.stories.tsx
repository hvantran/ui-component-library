import type { Meta, StoryObj } from '@storybook/react';
import { ExamIntegrityTeacherPdfIngestionZone } from './ExamIntegrityTeacherPdfIngestionZone';

const meta: Meta<typeof ExamIntegrityTeacherPdfIngestionZone> = {
  title: 'Organisms/ExamIntegrityTeacherPdfIngestionZone',
  component: ExamIntegrityTeacherPdfIngestionZone,
  tags: ['autodocs'],
  argTypes: {
    onFileSelect: { action: 'fileSelected' },
  },
};

export default meta;
type Story = StoryObj<typeof ExamIntegrityTeacherPdfIngestionZone>;

export const Idle: Story = {
  args: {
    isProcessing: false,
    isSuccess: false,
    error: null,
  },
};

export const Processing: Story = {
  args: {
    isProcessing: true,
    isSuccess: false,
    error: null,
  },
};

export const Success: Story = {
  args: {
    isProcessing: false,
    isSuccess: true,
    error: null,
  },
};

export const WithError: Story = {
  args: {
    isProcessing: false,
    isSuccess: false,
    error: 'Invalid file format. Please upload a standard PDF document.',
  },
};
