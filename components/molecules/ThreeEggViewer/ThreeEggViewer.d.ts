import { default as React } from '../../../../node_modules/react';
export type EggTier = 'dragon' | 'celestial' | 'forest';
export interface ThreeEggViewerProps {
    eggTier?: EggTier;
    crackProgress?: number;
    isHatched?: boolean;
    interactive?: boolean;
    autoRotate?: boolean;
    onTap?: () => void;
    className?: string;
    width?: number | string;
    height?: number | string;
    showDais?: boolean;
}
export declare const ThreeEggViewer: React.FC<ThreeEggViewerProps>;
