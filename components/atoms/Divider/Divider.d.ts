import { default as React } from '../../../../node_modules/react';
export interface DividerProps extends React.HTMLAttributes<HTMLHRElement | HTMLDivElement> {
    orientation?: 'horizontal' | 'vertical';
    label?: string;
}
export declare const Divider: React.FC<DividerProps>;
export default Divider;
