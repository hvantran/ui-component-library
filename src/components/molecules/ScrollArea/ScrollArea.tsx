import React, { useEffect, useRef } from 'react';
import { cn } from '../../../utils/cn';

export interface ScrollAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Scrollable content elements */
  children: React.ReactNode;
  /** Whether additional data pages can be loaded */
  hasMore?: boolean;
  /** Whether asynchronous fetch is currently in flight */
  isLoading?: boolean;
  /** Callback fired when bottom sentinel enters viewport */
  onLoadMore?: () => void;
  /** Custom spinner or loading element */
  loader?: React.ReactNode;
  /** Message displayed when all items have been fetched */
  endMessage?: React.ReactNode;
  /** Root margin for intersection observer trigger */
  rootMargin?: string;
}

/**
 * Molecule — ScrollArea
 *
 * Infinite-scroll container with IntersectionObserver sentinel.
 * Automatically triggers `onLoadMore` when scrolling near bottom,
 * and renders accessible loading or end-of-list status indicators.
 */
export const ScrollArea: React.FC<ScrollAreaProps> = ({
  children,
  hasMore = false,
  isLoading = false,
  onLoadMore,
  className,
  loader,
  endMessage,
  rootMargin = '160px',
  ...props
}) => {
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!onLoadMore || !hasMore || isLoading || !sentinelRef.current) return;

    if (typeof IntersectionObserver === 'undefined') {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry?.isIntersecting && hasMore && !isLoading) {
          onLoadMore();
        }
      },
      {
        root: null,
        rootMargin,
        threshold: 0,
      },
    );

    observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, [hasMore, isLoading, onLoadMore, rootMargin]);

  return (
    <div className={cn('relative', className)} {...props}>
      {children}

      {hasMore && <div ref={sentinelRef} className="h-1 w-full" aria-hidden="true" />}

      <div className="flex justify-center mt-6 min-h-6 text-sm text-gray-500 dark:text-gray-400">
        {isLoading
          ? (loader ?? <span>Loading more…</span>)
          : !hasMore
            ? (endMessage ?? null)
            : null}
      </div>
    </div>
  );
};

ScrollArea.displayName = 'ScrollArea';
export default ScrollArea;
