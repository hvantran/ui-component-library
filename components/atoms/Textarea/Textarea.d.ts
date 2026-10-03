import { default as React } from '../../../../node_modules/react';
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    error?: boolean;
    errorMessage?: string;
    label?: string;
    helperText?: string;
}
export declare const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;
export default Textarea;
