import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Modal } from './Modal';
import { Button } from '../Button';

const meta: Meta<typeof Modal> = {
  title: 'Atoms/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal
          isOpen={open}
          onClose={() => setOpen(false)}
          title="Confirm Action Deletion"
          footer={
            <>
              <Button variant="secondary" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button variant="danger" onClick={() => setOpen(false)}>
                Delete Action
              </Button>
            </>
          }
        >
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Are you sure you want to delete this action? This operation will terminate all running
            jobs associated with this action and cannot be undone.
          </p>
        </Modal>
      </div>
    );
  },
};
