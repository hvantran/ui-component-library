import type { Meta, StoryObj } from '@storybook/react';
import { ExamIntegrityStudentCollectionTemplate } from './ExamIntegrityStudentCollectionTemplate';
import { DEFAULT_INCUBATING_EGGS, DEFAULT_STUDENT_PETS } from '../../organisms/ExamIntegrityPetHatchery';

const meta: Meta<typeof ExamIntegrityStudentCollectionTemplate> = {
  title: 'Templates/ExamIntegrityStudentCollectionTemplate',
  component: ExamIntegrityStudentCollectionTemplate,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof ExamIntegrityStudentCollectionTemplate>;

export const Default: Story = {
  args: {
    studentName: 'Alex Rivers',
    starCount: 650,
    incubatingEggs: DEFAULT_INCUBATING_EGGS,
    pets: DEFAULT_STUDENT_PETS,
  },
};

