import React, { useEffect } from 'react';
import { cn } from '../../../utils/cn';

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

const maxWidthClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
};

/**
 * Atom — Modal
 *
 * Accessible modal dialog with backdrop overlay, Escape key detection,
 * and responsive centering.
 */
export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  maxWidth = 'md',
  children,
  footer,
  className,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
    >
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 bg-black/50 transition-opacity backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div
        className={cn(
          'relative w-full rounded-card bg-white p-6 shadow-modal transition-all',
          'dark:bg-gray-800 dark:border dark:border-gray-700 text-gray-900 dark:text-gray-100',
          maxWidthClasses[maxWidth],
          className,
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-100 dark:border-gray-700">
          {title && (
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              {title}
            </h2>
          )}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="ml-auto inline-flex h-8 w-8 items-center justify-center rounded-md text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-700 dark:hover:text-gray-200 transition"
          >
            <span className="text-xl leading-none">&times;</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="py-4">{children}</div>

        {/* Footer */}
        {footer && (
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

Modal.displayName = 'Modal';
export default Modal;
