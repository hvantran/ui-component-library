import { default as React } from '../../../../node_modules/react';
export interface DarkModeToggleProps {
    isDark: boolean;
    onToggle: () => void;
    variant?: 'switch' | 'button';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    ariaLabel?: string;
}
export declare const DarkModeToggle: React.FC<DarkModeToggleProps>;
export default DarkModeToggle;
