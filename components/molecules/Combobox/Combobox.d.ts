import { default as React } from '../../../../node_modules/react';
export interface ComboboxOption {
    value: string;
    label: string;
    disabled?: boolean;
}
export interface ComboboxProps {
    options: ComboboxOption[];
    value?: string;
    onChange: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
    clearable?: boolean;
    className?: string;
    ariaLabel?: string;
}
export declare const Combobox: React.FC<ComboboxProps>;
export default Combobox;
