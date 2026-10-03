import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Atoms/Textarea',
  component: Textarea,
  args: {
    label: 'Comments',
    placeholder: 'Type your comments here...',
    rows: 4,
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {};

export const WithError: Story = {
  args: {
    error: true,
    errorMessage: 'This field cannot be empty.',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: 'This textarea is disabled.',
  },
};
