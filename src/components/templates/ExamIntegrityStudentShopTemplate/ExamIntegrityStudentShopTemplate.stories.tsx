import type { Meta, StoryObj } from '@storybook/react';
import { ExamIntegrityStudentShopTemplate } from './ExamIntegrityStudentShopTemplate';

const meta: Meta<typeof ExamIntegrityStudentShopTemplate> = {
  title: 'Templates/ExamIntegrityStudentShopTemplate',
  component: ExamIntegrityStudentShopTemplate,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof ExamIntegrityStudentShopTemplate>;

export const Default: Story = {
  args: {
    studentName: 'Alex Rivers',
    starCount: 650,
  },
};

