import { default as React } from '../../../../node_modules/react';
export interface BreadcrumbItem {
    /** Display label */
    label: React.ReactNode;
    /** Link href */
    href?: string;
    /** Click handler */
    onClick?: (e: React.MouseEvent) => void;
    /** Explicitly marks item as the current active page */
    active?: boolean;
}
export interface BreadcrumbsProps extends React.HTMLAttributes<HTMLElement> {
    /** Ordered breadcrumb hierarchy items */
    items: BreadcrumbItem[];
    /** Custom separator node, defaults to `/` */
    separator?: React.ReactNode;
}
/**
 * Molecule — Breadcrumbs
 *
 * Accessible breadcrumb navigation (`<nav aria-label="Breadcrumb">`)
 * with semantic `<ol>` and `<li>` elements, supporting links and active states.
 */
export declare const Breadcrumbs: React.FC<BreadcrumbsProps>;
export default Breadcrumbs;
