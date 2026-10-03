import { default as React } from '../../../../node_modules/react';
import { PropertyMetadata } from '../../../types/metadata';
export interface DynamicFormProps {
    properties: PropertyMetadata[];
    onChange: (propName: string, value: any) => void;
    disabled?: boolean;
    className?: string;
    errors?: Record<string, string>;
}
export declare const DynamicForm: React.FC<DynamicFormProps>;
export default DynamicForm;
