import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { ConfirmationDialog } from './ConfirmationDialog';
import { Button } from '../../atoms/Button';

const meta: Meta<typeof ConfirmationDialog> = {
  title: 'Molecules/ConfirmationDialog',
  component: ConfirmationDialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    positiveVariant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'ghost', 'outlined'],
    },
    negativeVariant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'ghost', 'outlined'],
    },
    loading: { control: 'boolean' },
    isOpen: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof ConfirmationDialog>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div>
        <Button onClick={() => setOpen(true)}>Trigger Confirmation</Button>
        <ConfirmationDialog
          isOpen={open}
          title="Confirm Action"
          content="Are you sure you want to proceed with this operation?"
          positiveText="Proceed"
          negativeText="Cancel"
          onConfirm={() => {
            alert('Confirmed!');
            setOpen(false);
          }}
          onCancel={() => setOpen(false)}
        />
      </div>
    );
  },
};

export const DangerDelete: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div>
        <Button variant="danger" onClick={() => setOpen(true)}>
          Delete Resource
        </Button>
        <ConfirmationDialog
          isOpen={open}
          title="Delete Confirmation"
          content="This action cannot be undone. Are you sure you want to delete this resource?"
          positiveText="Delete"
          positiveVariant="danger"
          negativeText="Keep Resource"
          onConfirm={() => {
            alert('Deleted!');
            setOpen(false);
          }}
          onCancel={() => setOpen(false)}
        />
      </div>
    );
  },
};
