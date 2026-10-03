import { default as React } from '../../../../node_modules/react';
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
/**
 * Atom — Skeleton
 *
 * Framework-agnostic placeholder loading state replacement for MUI Skeleton.
 * Emits zero dependencies, full Tailwind styling, and dark mode compliance.
 */
export declare const Skeleton: React.ForwardRefExoticComponent<SkeletonProps & React.RefAttributes<HTMLDivElement>>;
export default Skeleton;
