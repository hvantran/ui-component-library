import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ExamIntegrityReviewContentContainer } from './ExamIntegrityReviewContentContainer';

const meta: Meta<typeof ExamIntegrityReviewContentContainer> = {
  title: 'Organisms/ExamIntegrityReviewContentContainer',
  component: ExamIntegrityReviewContentContainer,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ExamIntegrityReviewContentContainer>;

export const Default: Story = {
  render: () => (
    <ExamIntegrityReviewContentContainer>
      <div className="p-4 rounded-lg bg-blue-50 text-blue-800 border border-blue-200">
        Review content placeholder
      </div>
    </ExamIntegrityReviewContentContainer>
  ),
};
