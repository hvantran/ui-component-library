import { default as React } from '../../../../node_modules/react';
export interface ModalProps {
    /** Open visibility state */
    isOpen: boolean;
    /** Callback triggered when user clicks backdrop, close icon, or hits Escape */
    onClose: () => void;
    /** Modal header title */
    title?: React.ReactNode;
    /** Max width constraint: 'sm' | 'md' | 'lg' | 'xl' */
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl';
    /** Modal body content */
    children: React.ReactNode;
    /** Modal footer action buttons */
    footer?: React.ReactNode;
    /** Extra container className */
    className?: string;
}
/**
 * Atom — Modal
 *
 * Accessible modal dialog with backdrop overlay, Escape key detection,
 * and responsive centering.
 */
export declare const Modal: React.FC<ModalProps>;
export default Modal;
