import { default as React } from '../../../../node_modules/react';
export type CardVariant = 'default' | 'outlined' | 'elevated';
export type CardPadding = 'none' | 'sm' | 'md' | 'lg';
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Visual variant */
    variant?: CardVariant;
    /** Internal padding */
    padding?: CardPadding;
    /** Enable hover elevation and cursor pointer */
    interactive?: boolean;
    /** Highlight border for selectable cards */
    selected?: boolean;
}
/**
 * Atom — Card
 *
 * Universal surface container supporting atomic design and Tailwind styling.
 * Mobile-first responsive (full width by default) with configurable elevation and padding.
 */
export declare const Card: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>;
export default Card;
