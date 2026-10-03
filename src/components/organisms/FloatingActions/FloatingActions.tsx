import { Plus } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { SpeedDialActionMetadata } from '../../../types/metadata';
import { cn } from '../../../utils/cn';

export interface FloatingActionsProps {
  actions: SpeedDialActionMetadata[];
  ariaLabel?: string;
  className?: string;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({
  actions,
  ariaLabel = 'Floating Actions',
  className,
}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  return (
    <div
      role="region"
      aria-label={ariaLabel}
      className={cn('fixed bottom-6 right-6 z-50 flex flex-col-reverse items-end gap-3', className)}
    >
      {/* Primary Trigger Button */}
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label={ariaLabel}
        onClick={() => setOpen(!open)}
        className={cn(
          'w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 outline-none',
          'bg-primary-600 hover:bg-primary-700 text-white focus:ring-4 focus:ring-primary-500/30',
          open && 'rotate-45 bg-secondary-800 hover:bg-secondary-900'
        )}
      >
        <Plus className="w-6 h-6 transition-transform" />
      </button>

      {/* Expanded Action Menu Items */}
      {open && (
        <div
          role="menu"
          className="flex flex-col-reverse items-end gap-2.5 mb-1 animate-fade-in"
        >
          {actions.map((act) => (
            <div
              key={act.actionName}
              className="flex items-center gap-2 group cursor-pointer"
              onClick={(e) => {
                if (!act.disabled) {
                  act.onClick(e);
                  setOpen(false);
                }
              }}
            >
              <span className="py-1 px-2.5 rounded-btn bg-secondary-900/90 dark:bg-secondary-100/90 text-white dark:text-secondary-900 text-xs font-medium shadow-md transition-opacity">
                {act.actionLabel}
              </span>
              <button
                type="button"
                role="menuitem"
                aria-label={act.actionLabel}
                disabled={act.disabled}
                className={cn(
                  'w-10 h-10 rounded-full shadow-md flex items-center justify-center transition-transform hover:scale-105',
                  'bg-surface-card-light dark:bg-surface-card-dark text-secondary-800 dark:text-secondary-100 border border-secondary-200 dark:border-secondary-700',
                  act.disabled && 'opacity-50 cursor-not-allowed hover:scale-100'
                )}
              >
                {act.actionIcon}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

FloatingActions.displayName = 'FloatingActions';
export default FloatingActions;
