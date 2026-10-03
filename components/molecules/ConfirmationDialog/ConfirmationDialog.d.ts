import { default as React } from '../../../../node_modules/react';
import { ButtonVariant } from '../../atoms/Button';
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
export declare const ConfirmationDialog: React.FC<ConfirmationDialogProps>;
export default ConfirmationDialog;
