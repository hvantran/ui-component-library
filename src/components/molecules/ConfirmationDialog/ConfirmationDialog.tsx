import React from 'react';
import { Modal } from '../../atoms/Modal';
import { Button, ButtonVariant } from '../../atoms/Button';
import { cn } from '../../../utils/cn';

export interface ConfirmationDialogProps {
  /** Visibility state (supports both open and isOpen) */
  open?: boolean;
  isOpen?: boolean;
  /** Dialog heading title */
  title: React.ReactNode;
  /** Confirmation message content */
  content?: React.ReactNode;
  /** Body children as alternative to content */
  children?: React.ReactNode;
  /** Primary / confirm button label */
  positiveText?: string;
  /** Secondary / cancel button label */
  negativeText?: string;
  /** Primary / confirm action callback */
  positiveAction?: () => void;
  /** Alias for positiveAction */
  onConfirm?: () => void;
  /** Secondary / cancel action callback */
  negativeAction?: () => void;
  /** Alias for negativeAction */
  onCancel?: () => void;
  /** Modal close callback */
  onClose?: () => void;
  /** Visual variant for primary confirmation button */
  positiveVariant?: ButtonVariant;
  /** Visual variant for cancel button */
  negativeVariant?: ButtonVariant;
  /** Loading state on confirm button */
  loading?: boolean;
  /** Max width dialog size */
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl';
  /** Extra container className */
  className?: string;
}

/**
 * Molecule — ConfirmationDialog
 *
 * Reusable confirmation and alert prompt dialog adhering to Atomic Design.
 * Composes Modal and Button atoms to provide unified confirmation flows across microservices.
 */
export const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({
  open,
  isOpen,
  title,
  content,
  children,
  positiveText = 'Confirm',
  negativeText = 'Cancel',
  positiveAction,
  onConfirm,
  negativeAction,
  onCancel,
  onClose,
  positiveVariant = 'primary',
  negativeVariant = 'outlined',
  loading = false,
  maxWidth = 'sm',
  className,
}) => {
  const visible = open ?? isOpen ?? false;
  const handleConfirm = positiveAction ?? onConfirm;
  const handleCancel = negativeAction ?? onCancel ?? onClose;

  const footer = (
    <>
      <Button
        variant={negativeVariant}
        size="md"
        onClick={handleCancel}
        disabled={loading}
      >
        {negativeText}
      </Button>
      <Button
        variant={positiveVariant}
        size="md"
        onClick={handleConfirm}
        loading={loading}
      >
        {positiveText}
      </Button>
    </>
  );

  return (
    <Modal
      isOpen={visible}
      onClose={onClose ?? handleCancel ?? (() => {})}
      title={title}
      maxWidth={maxWidth}
      footer={footer}
      className={cn('shadow-2xl', className)}
    >
      <div className="text-sm leading-6 text-gray-600 dark:text-gray-300">
        {content ?? children}
      </div>
    </Modal>
  );
};

ConfirmationDialog.displayName = 'ConfirmationDialog';
export default ConfirmationDialog;
