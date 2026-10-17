import React from 'react';
import { Modal } from '../../atoms/Modal';
import { Button } from '../../atoms/Button';
import { cn } from '../../../utils/cn';

export interface ExamIntegrityDeleteAllQuestionsDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  isDeleting?: boolean;
  totalCount?: number;
  className?: string;
}

export const ExamIntegrityDeleteAllQuestionsDialog: React.FC<
  ExamIntegrityDeleteAllQuestionsDialogProps
> = ({
  isOpen,
  onClose,
  onConfirm,
  isDeleting = false,
  totalCount = 0,
  className,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Delete All Questions"
      maxWidth="sm"
      className={className}
      footer={
        <div className="flex justify-end gap-2">
          <Button
            variant="neutral"
            size="sm"
            onClick={onClose}
            disabled={isDeleting}
          >
            Cancel
          </Button>
          <Button
            variant="danger"
            size="sm"
            onClick={onConfirm}
            disabled={isDeleting}
          >
            {isDeleting ? 'Deleting…' : 'Delete All'}
          </Button>
        </div>
      }
    >
      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
        This will permanently delete{' '}
        <strong>all {totalCount > 0 ? `${totalCount} ` : ''}questions</strong> from
        the question bank. This action cannot be undone.
      </p>
    </Modal>
  );
};

