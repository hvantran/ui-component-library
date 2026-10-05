import { default as React } from '../../../../node_modules/react';
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
export declare const NavMenuItem: React.FC<NavMenuItemProps>;
export default NavMenuItem;
