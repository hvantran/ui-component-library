import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import React from 'react';
import { cn } from '../../../utils/cn';

export interface PaginationProps {
  pageIndex: number; // 0-based
  pageSize: number;
  totalElements: number;
  rowsPerPageOptions?: number[];
  onPageChange: (newPageIndex: number) => void;
  onPageSizeChange?: (newPageSize: number) => void;
  className?: string;
}

export const Pagination: React.FC<PaginationProps> = ({
  pageIndex,
  pageSize,
  totalElements,
  rowsPerPageOptions = [10, 25, 50, 100],
  onPageChange,
  onPageSizeChange,
  className,
}) => {
  const totalPages = Math.max(1, Math.ceil(totalElements / pageSize));
  const startItem = totalElements === 0 ? 0 : pageIndex * pageSize + 1;
  const endItem = Math.min((pageIndex + 1) * pageSize, totalElements);

  const canPrev = pageIndex > 0;
  const canNext = pageIndex < totalPages - 1;

  return (
    <nav
      role="navigation"
      aria-label="Pagination Navigation"
      className={cn(
        'flex flex-wrap items-center justify-between gap-4 py-3 px-4 text-xs font-medium text-secondary-600 dark:text-secondary-300 border-t border-secondary-200 dark:border-secondary-800 bg-surface-card-light dark:bg-surface-card-dark',
        className
      )}
    >
      <div className="flex items-center gap-3">
        {onPageSizeChange && (
          <div className="flex items-center gap-2">
            <span>Rows per page:</span>
            <select
              aria-label="Rows per page"
              value={pageSize}
              onChange={(e) => {
                onPageSizeChange(Number(e.target.value));
                onPageChange(0);
              }}
              className="py-1 px-2 border border-secondary-300 dark:border-secondary-700 rounded-btn bg-surface-card-light dark:bg-surface-card-dark text-secondary-900 dark:text-white outline-none focus:border-primary-500 cursor-pointer"
            >
              {rowsPerPageOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        )}
        <span className="text-secondary-500">
          Showing <span className="font-semibold text-secondary-900 dark:text-white">{startItem}</span> -{' '}
          <span className="font-semibold text-secondary-900 dark:text-white">{endItem}</span> of{' '}
          <span className="font-semibold text-secondary-900 dark:text-white">{totalElements}</span>
        </span>
      </div>

      <div className="flex items-center gap-1">
        <button
          type="button"
          aria-label="First page"
          disabled={!canPrev}
          onClick={() => onPageChange(0)}
          className={cn(
            'p-1.5 rounded-btn border border-secondary-200 dark:border-secondary-700 hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors',
            !canPrev && 'opacity-40 cursor-not-allowed hover:bg-transparent dark:hover:bg-transparent'
          )}
        >
          <ChevronsLeft className="w-4 h-4" />
        </button>

        <button
          type="button"
          aria-label="Previous page"
          disabled={!canPrev}
          onClick={() => onPageChange(pageIndex - 1)}
          className={cn(
            'p-1.5 rounded-btn border border-secondary-200 dark:border-secondary-700 hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors',
            !canPrev && 'opacity-40 cursor-not-allowed hover:bg-transparent dark:hover:bg-transparent'
          )}
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <span className="px-3 py-1 font-sans text-secondary-700 dark:text-secondary-200">
          Page {pageIndex + 1} of {totalPages}
        </span>

        <button
          type="button"
          aria-label="Next page"
          disabled={!canNext}
          onClick={() => onPageChange(pageIndex + 1)}
          className={cn(
            'p-1.5 rounded-btn border border-secondary-200 dark:border-secondary-700 hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors',
            !canNext && 'opacity-40 cursor-not-allowed hover:bg-transparent dark:hover:bg-transparent'
          )}
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        <button
          type="button"
          aria-label="Last page"
          disabled={!canNext}
          onClick={() => onPageChange(totalPages - 1)}
          className={cn(
            'p-1.5 rounded-btn border border-secondary-200 dark:border-secondary-700 hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors',
            !canNext && 'opacity-40 cursor-not-allowed hover:bg-transparent dark:hover:bg-transparent'
          )}
        >
          <ChevronsRight className="w-4 h-4" />
        </button>
      </div>
    </nav>
  );
};

Pagination.displayName = 'Pagination';
export default Pagination;
