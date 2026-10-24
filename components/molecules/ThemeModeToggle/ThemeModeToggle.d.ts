import { default as React } from '../../../../node_modules/react';
import { ThemeMode } from '../../../theme/ThemeProvider';
export interface ThemeModeToggleProps {
    mode?: ThemeMode;
    onModeChange?: (mode: ThemeMode) => void;
    variant?: 'button' | 'segmented';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    ariaLabel?: string;
}
export declare const ThemeModeToggle: React.FC<ThemeModeToggleProps>;
export default ThemeModeToggle;
