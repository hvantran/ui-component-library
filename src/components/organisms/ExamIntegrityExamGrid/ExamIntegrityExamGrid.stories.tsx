import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ExamIntegrityExamGrid, ExamIntegrityExamGridLoader } from './ExamIntegrityExamGrid';

const meta: Meta = {
  title: 'Organisms/ExamIntegrityExamGrid',
  parameters: {
    layout: 'padded',
  },
};

export default meta;

export const Loader: StoryObj = {
  render: () => <ExamIntegrityExamGridLoader count={6} />,
};

