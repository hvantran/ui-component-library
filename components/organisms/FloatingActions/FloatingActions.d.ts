import { default as React } from '../../../../node_modules/react';
import { SpeedDialActionMetadata } from '../../../types/metadata';
export interface FloatingActionsProps {
    actions: SpeedDialActionMetadata[];
    ariaLabel?: string;
    className?: string;
}
export declare const FloatingActions: React.FC<FloatingActionsProps>;
export default FloatingActions;
