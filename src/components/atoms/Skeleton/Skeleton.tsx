import React from 'react';
import { cn } from '../../../utils/cn';

export type SkeletonVariant = 'text' | 'circular' | 'rectangular' | 'rounded';
export type SkeletonAnimation = 'pulse' | 'wave' | 'none';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Visual shape of skeleton placeholder */
  variant?: SkeletonVariant;
  /** Animation style */
  animation?: SkeletonAnimation;
  /** Explicit width, e.g. '100%', 200, '4rem' */
  width?: string | number;
  /** Explicit height, e.g. 16, '2rem' */
  height?: string | number;
  /** Legacy boolean for rounded corners */
  rounded?: boolean;
}

const variantClasses: Record<SkeletonVariant, string> = {
  text: 'h-4 w-full rounded',
  circular: 'rounded-full',
  rectangular: 'rounded-none',
  rounded: 'rounded-md',
};

const animationClasses: Record<SkeletonAnimation, string> = {
  pulse: 'animate-pulse',
  wave: 'relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent',
  none: '',
};

/**
 * Atom — Skeleton
 *
 * Framework-agnostic placeholder loading state replacement for MUI Skeleton.
 * Emits zero dependencies, full Tailwind styling, and dark mode compliance.
 */
export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  (
    {
      variant = 'text',
      animation = 'pulse',
      width,
      height,
      rounded,
      className,
      style,
      ...props
    },
    ref,
  ) => {
    const resolvedVariant: SkeletonVariant =
      variant ?? (rounded ? 'rounded' : 'rectangular');

    const inlineStyle: React.CSSProperties = {
      ...(width !== undefined ? { width: typeof width === 'number' ? `${width}px` : width } : {}),
      ...(height !== undefined ? { height: typeof height === 'number' ? `${height}px` : height } : {}),
      ...style,
    };

    return (
      <div
        ref={ref}
        role="status"
        aria-label="Loading..."
        className={cn(
          'bg-gray-200 dark:bg-gray-700',
          variantClasses[resolvedVariant],
          animationClasses[animation],
          className,
        )}
        style={inlineStyle}
        {...props}
      >
        <span className="sr-only">Loading...</span>
      </div>
    );
  },
);

Skeleton.displayName = 'Skeleton';
export default Skeleton;
