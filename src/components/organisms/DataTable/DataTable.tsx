import { ArrowDown, ArrowUp, ArrowUpDown } from 'lucide-react';
import React, { useState } from 'react';
import { ColumnActionMetadata, TableMetadata } from '../../../types/metadata';
import { cn } from '../../../utils/cn';
import { Skeleton } from '../../atoms/Skeleton';
import { Tooltip } from '../../atoms/Tooltip';
import { EmptyState } from '../../molecules/EmptyState';
import { Pagination } from '../../molecules/Pagination';
import { SearchBar } from '../../molecules/SearchBar';

export interface DataTableProps<T = any> extends TableMetadata<T> {
  className?: string;
  emptyStateTitle?: string;
  emptyStateDescription?: string;
}

export function DataTable<T extends Record<string, any> = any>({
  name,
  columns,
  pagingOptions,
  pagingResult,
  keyColumn,
  visibleSearchbar = false,
  searchPlaceholder = 'Search...',
  loading = false,
  onRowClickCallback,
  headerActions,
  className,
  emptyStateTitle,
  emptyStateDescription,
}: DataTableProps<T>) {
  const [internalSearch, setInternalSearch] = useState(pagingOptions.searchText || '');

  const {
    pageIndex,
    pageSize,
    orderBy,
    rowsPerPageOptions = [10, 25, 50, 100],
    onPageChange,
  } = pagingOptions;

  const handleSort = (columnId: string) => {
    let newOrderBy = columnId;
    const currentColumn = orderBy.replace('-', '');
    if (columnId === currentColumn) {
      newOrderBy = orderBy.startsWith('-') ? currentColumn : `-${orderBy}`;
    }
    onPageChange(pageIndex, pageSize, newOrderBy, internalSearch);
  };

  const handleSearchChange = (query: string) => {
    setInternalSearch(query);
    onPageChange(0, pageSize, orderBy, query);
  };

  const handlePageChange = (newPage: number) => {
    onPageChange(newPage, pageSize, orderBy, internalSearch);
  };

  const handlePageSizeChange = (newPageSize: number) => {
    onPageChange(0, newPageSize, orderBy, internalSearch);
  };

  const visibleColumns = columns.filter((col) => !col.isHidden);

  let content = pagingResult.content || [];
  if (pagingResult.elementTransformCallback) {
    content = content.map(pagingResult.elementTransformCallback);
  }

  const activeSortCol = orderBy.replace('-', '');
  const isDesc = orderBy.startsWith('-');

  return (
    <div
      role="region"
      aria-label={name}
      className={cn(
        'w-full overflow-hidden rounded-card border border-secondary-200 dark:border-secondary-800 bg-surface-card-light dark:bg-surface-card-dark shadow-card',
        className
      )}
    >
      {/* Header Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 border-b border-secondary-200 dark:border-secondary-800 bg-secondary-50/50 dark:bg-secondary-900/40">
        <h2 className="text-base font-semibold text-secondary-900 dark:text-white">
          {name}
        </h2>
        <div className="flex items-center gap-3">
          {visibleSearchbar && (
            <SearchBar
              value={internalSearch}
              onChange={handleSearchChange}
              placeholder={searchPlaceholder}
              className="w-64"
            />
          )}
          {headerActions && <div>{headerActions}</div>}
        </div>
      </div>

      {/* Table Container */}
      <div className="w-full overflow-x-auto">
        <table className="w-full text-left text-sm border-collapse font-sans">
          <thead className="bg-secondary-50 dark:bg-secondary-900/60 border-b border-secondary-200 dark:border-secondary-800">
            <tr>
              {visibleColumns.map((col) => {
                const isSortable = col.isSortable;
                const isCurrentSort = activeSortCol === col.id;

                const headerContent = (
                  <div
                    className={cn(
                      'inline-flex items-center gap-1.5 font-semibold text-xs uppercase tracking-wider text-secondary-600 dark:text-secondary-300',
                      col.align === 'center' && 'justify-center',
                      col.align === 'right' && 'justify-end'
                    )}
                  >
                    <span>{col.label}</span>
                    {isSortable && (
                      <span className="text-secondary-400">
                        {isCurrentSort ? (
                          isDesc ? (
                            <ArrowDown className="w-3.5 h-3.5 text-primary-600 dark:text-primary-400" />
                          ) : (
                            <ArrowUp className="w-3.5 h-3.5 text-primary-600 dark:text-primary-400" />
                          )
                        ) : (
                          <ArrowUpDown className="w-3.5 h-3.5 opacity-40 hover:opacity-100" />
                        )}
                      </span>
                    )}
                  </div>
                );

                return (
                  <th
                    key={col.id}
                    scope="col"
                    style={{ minWidth: col.minWidth }}
                    className={cn(
                      'py-3.5 px-4 select-none',
                      isSortable && 'cursor-pointer hover:bg-secondary-100/60 dark:hover:bg-secondary-800/60 transition-colors',
                      col.align === 'center' && 'text-center',
                      col.align === 'right' && 'text-right'
                    )}
                    onClick={() => isSortable && handleSort(col.id)}
                  >
                    {headerContent}
                  </th>
                );
              })}
            </tr>
          </thead>

          <tbody className="divide-y divide-secondary-200 dark:divide-secondary-800">
            {loading ? (
              Array.from({ length: Math.min(pageSize, 5) }).map((_, index) => (
                <tr key={`skeleton-${index}`}>
                  {visibleColumns.map((col) => (
                    <td key={col.id} className="py-3 px-4">
                      <Skeleton variant="text" width="80%" height="1.25rem" />
                    </td>
                  ))}
                </tr>
              ))
            ) : content.length === 0 ? (
              <tr>
                <td colSpan={visibleColumns.length} className="p-8">
                  <EmptyState
                    title={emptyStateTitle || 'No records found'}
                    description={emptyStateDescription || 'There are no results matching your query.'}
                  />
                </td>
              </tr>
            ) : (
              content.map((row) => {
                const keyValue = row[keyColumn] ?? Math.random();
                return (
                  <tr
                    key={keyValue}
                    onClick={() => onRowClickCallback && onRowClickCallback(row)}
                    className={cn(
                      'transition-colors hover:bg-secondary-50/70 dark:hover:bg-secondary-800/40 text-secondary-800 dark:text-secondary-200',
                      onRowClickCallback && 'cursor-pointer'
                    )}
                  >
                    {visibleColumns.map((col) => {
                      if (col.actions && col.actions.length > 0) {
                        return (
                          <td
                            key={col.id}
                            className={cn(
                              'py-3 px-4 whitespace-nowrap',
                              col.align === 'center' && 'text-center',
                              col.align === 'right' && 'text-right'
                            )}
                          >
                            <div className="flex items-center gap-1.5">
                              {col.actions
                                .filter((act: ColumnActionMetadata<T>) => !act.visible || act.visible(row))
                                .map((act: ColumnActionMetadata<T>) => {
                                  const disabled = act.disabled ? act.disabled(row) : false;
                                  return (
                                    <Tooltip key={act.actionName} content={act.actionLabel}>
                                      <button
                                        type="button"
                                        aria-label={act.actionLabel}
                                        disabled={disabled}
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          act.onClick(row)(e);
                                        }}
                                        className={cn(
                                          'p-1.5 rounded-btn border border-secondary-200 dark:border-secondary-700 bg-white dark:bg-secondary-800 text-secondary-700 dark:text-secondary-200 hover:bg-secondary-50 dark:hover:bg-secondary-700 transition-colors inline-flex items-center justify-center',
                                          disabled && 'opacity-40 cursor-not-allowed'
                                        )}
                                      >
                                        {act.actionIcon}
                                      </button>
                                    </Tooltip>
                                  );
                                })}
                            </div>
                          </td>
                        );
                      }

                      const value = row[col.id];
                      let cellContent: React.ReactNode = value;
                      if (col.renderCell) {
                        cellContent = col.renderCell(row);
                      } else if (col.format) {
                        cellContent = col.format(value, row);
                      }

                      return (
                        <td
                          key={col.id}
                          className={cn(
                            'py-3 px-4',
                            col.align === 'center' && 'text-center',
                            col.align === 'right' && 'text-right'
                          )}
                        >
                          {cellContent}
                        </td>
                      );
                    })}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      {!loading && pagingResult.totalElements > 0 && (
        <Pagination
          pageIndex={pageIndex}
          pageSize={pageSize}
          totalElements={pagingResult.totalElements}
          rowsPerPageOptions={rowsPerPageOptions}
          onPageChange={handlePageChange}
          onPageSizeChange={handlePageSizeChange}
        />
      )}
    </div>
  );
}

DataTable.displayName = 'DataTable';
export default DataTable;
