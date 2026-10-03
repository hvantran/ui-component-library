import React from 'react';
import { cn } from '../../../utils/cn';

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
export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  separator = '/',
  className,
  ...props
}) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn('flex items-center text-sm font-medium', className)}
      {...props}
    >
      <ol className="inline-flex items-center space-x-1 md:space-x-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const isActive = item.active ?? isLast;

          return (
            <li key={index} className="inline-flex items-center">
              {index > 0 && (
                <span
                  className="mx-1 text-gray-400 dark:text-gray-600 select-none"
                  aria-hidden="true"
                >
                  {separator}
                </span>
              )}
              {isActive ? (
                <span
                  aria-current="page"
                  className="text-gray-900 dark:text-white font-semibold"
                >
                  {item.label}
                </span>
              ) : item.href ? (
                <a
                  href={item.href}
                  onClick={item.onClick}
                  className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                >
                  {item.label}
                </a>
              ) : (
                <button
                  type="button"
                  onClick={item.onClick}
                  className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                >
                  {item.label}
                </button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

Breadcrumbs.displayName = 'Breadcrumbs';
export default Breadcrumbs;
