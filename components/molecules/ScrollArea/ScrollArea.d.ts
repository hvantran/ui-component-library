import { default as React } from '../../../../node_modules/react';
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
export declare const ScrollArea: React.FC<ScrollAreaProps>;
export default ScrollArea;
