import { default as React } from '../../../../node_modules/react';
export interface ExamIntegrityQuestionBankFilterBarProps {
    searchQuery: string;
    onSearchChange: (q: string) => void;
    typeFilter: string;
    onTypeChange: (type: string) => void;
    typeOptions: {
        value: string;
        label: string;
    }[];
    tagInput: string;
    onTagInputChange: (tag: string) => void;
    availableTags: string[];
    isTagsLoading?: boolean;
    selectedTags: string[];
    onAddTag: (tag: string) => void;
    onRemoveTag: (tag: string) => void;
    className?: string;
}
export declare const ExamIntegrityQuestionBankFilterBar: React.FC<ExamIntegrityQuestionBankFilterBarProps>;
