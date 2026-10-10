import { default as React } from '../../../../node_modules/react';
import { DraftQuestionDTO } from '../../../types/examIntegrity';
export interface ExamIntegrityQuestionPickerModalProps {
    isOpen?: boolean;
    open?: boolean;
    onClose: () => void;
    onSubmit?: (result: {
        title: string;
        durationSeconds?: number;
        durationMin?: number;
        mcqCount?: number;
        essayShortCount?: number;
        essayLongCount?: number;
        selectedQuestionIds: string[];
    }) => void;
    onSubmitSelection?: (selectedQuestionIds: string[]) => void;
    mode?: 'create' | 'edit';
    initialTitle?: string;
    initialDurationMin?: number;
    initialSelectedQuestionIds?: string[];
    questions?: DraftQuestionDTO[];
    totalElements?: number;
    page?: number;
    totalPages?: number;
    onPageChange?: (page: number) => void;
    searchText?: string;
    onSearchChange?: (search: string) => void;
    typeFilter?: string;
    onTypeFilterChange?: (type: string) => void;
    isLoading?: boolean;
    isSearching?: boolean;
    selectedQuestionsOverride?: DraftQuestionDTO[];
    isLoadingSelected?: boolean;
    onSearchQuestions?: (params: {
        q?: string;
        type?: string;
        page: number;
        size: number;
    }) => Promise<{
        content: DraftQuestionDTO[];
        totalElements: number;
        totalPages: number;
    }>;
    onFetchByIds?: (ids: string[]) => Promise<DraftQuestionDTO[]>;
}
export declare const ExamIntegrityQuestionPickerModal: React.FC<ExamIntegrityQuestionPickerModalProps>;
export default ExamIntegrityQuestionPickerModal;
