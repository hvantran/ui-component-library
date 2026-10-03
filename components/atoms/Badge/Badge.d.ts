import { default as React } from '../../../../node_modules/react';
export type BadgeStatus = 'ACTIVE' | 'PAUSED' | 'FAILED' | 'DELETED';
export type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'neutral' | BadgeStatus;
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    /** Visual variant or action status */
    variant?: BadgeVariant;
    /** Optional status enum shorthand */
    status?: BadgeStatus;
    /** Numeric count to display with optional max cutoff */
    count?: number | string;
    /** Cutoff for counts, renders `${max}+` */
    max?: number;
    /** Optional dot indicator before label */
    dot?: boolean;
}
/**
 * Atom — Badge
 *
 * Status indicator and numeric badge counter adhering to BDD specifications.
 * Supports status codes (ACTIVE, PAUSED, FAILED, DELETED) and numeric counter caps.
 */
export declare const Badge: React.ForwardRefExoticComponent<BadgeProps & React.RefAttributes<HTMLSpanElement>>;
export default Badge;
