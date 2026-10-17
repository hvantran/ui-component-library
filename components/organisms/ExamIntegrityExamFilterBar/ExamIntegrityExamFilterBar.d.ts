import { default as React } from '../../../../node_modules/react';
export interface FilterOption<T extends string = string> {
    key: T;
    label: string;
    count: number;
}
export interface ExamIntegrityExamFilterBarProps<T extends string = string> {
    title?: string;
    subtitle?: string;
    options: FilterOption<T>[];
    selectedKey: T;
    onSelectKey: (key: T) => void;
    className?: string;
}
export declare const ExamIntegrityExamFilterBar: {
    <T extends string = string>({ title, subtitle, options, selectedKey, onSelectKey, className, }: ExamIntegrityExamFilterBarProps<T>): React.ReactElement;
    displayName: string;
};
export default ExamIntegrityExamFilterBar;
