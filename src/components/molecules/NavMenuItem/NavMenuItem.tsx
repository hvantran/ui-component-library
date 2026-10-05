import React from 'react';
import { cn } from '../../../utils/cn';
import { Button } from '../../atoms/Button';

export interface NavMenuItemProps {
  /** Leading icon element */
  icon: React.ReactNode;
  /** Text label */
  label: string;
  /** Active / selected state */
  active?: boolean;
  /** Collapsed icon-only state for compact sidebars */
  collapsed?: boolean;
  /** Click callback */
  onClick?: () => void;
  /** Custom additional CSS classes */
  className?: string;
  /** Tooltip / title attribute override */
  title?: string;
}

/**
 * Molecule — NavMenuItem
 *
 * Sidebar navigation item used in admin, proctor, and teacher dashboards.
 * Displays icon + label, collapses gracefully to icon-only mode with tooltips,
 * and highlights active routes with accent borders.
 */
export const NavMenuItem: React.FC<NavMenuItemProps> = ({
  icon,
  label,
  active = false,
  collapsed = false,
  onClick,
  className,
  title,
}) => (
  <Button
    type="button"
    className={cn(
      'w-full flex gap-3 py-2.5 border-none text-left transition-all duration-150 rounded',
      collapsed ? 'px-3 justify-center' : 'px-4 justify-start',
      active
        ? 'bg-blue-50 text-blue-700 border-l-[3px] border-l-blue-600 dark:bg-blue-950/50 dark:text-blue-300 dark:border-l-blue-400 font-semibold'
        : 'bg-transparent text-gray-600 border-l-[3px] border-l-transparent hover:bg-gray-100 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-blue-300 font-normal',
      className,
    )}
    variant="ghost"
    size="md"
    onClick={onClick}
    title={title || (collapsed ? label : undefined)}
  >
    <span className="flex items-center justify-center shrink-0">{icon}</span>
    {!collapsed && (
      <span className="text-sm leading-5 whitespace-nowrap">{label}</span>
    )}
  </Button>
);

NavMenuItem.displayName = 'NavMenuItem';
export default NavMenuItem;
