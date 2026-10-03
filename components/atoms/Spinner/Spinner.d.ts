import { default as React } from '../../../../node_modules/react';
export interface SpinnerProps extends React.SVGAttributes<SVGSVGElement> {
    size?: 'sm' | 'md' | 'lg' | 'xl';
    variant?: 'primary' | 'secondary' | 'neutral' | 'white';
}
export declare const Spinner: React.ForwardRefExoticComponent<SpinnerProps & React.RefAttributes<SVGSVGElement>>;
export default Spinner;
