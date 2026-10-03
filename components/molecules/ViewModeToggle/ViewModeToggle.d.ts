import { default as React } from '../../../../node_modules/react';
export interface ViewModeOption<T extends string = string> {
    value: T;
    label: string;
    icon?: React.ReactNode;
}
export interface ViewModeToggleProps<T extends string = string> {
    mode: T;
    modes: ViewModeOption<T>[];
    onChange: (mode: T) => void;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    ariaLabel?: string;
}
export declare function ViewModeToggle<T extends string = string>({ mode, modes, onChange, size, className, ariaLabel, }: ViewModeToggleProps<T>): React.JSX.Element;
export declare namespace ViewModeToggle {
    var displayName: string;
}
export default ViewModeToggle;
