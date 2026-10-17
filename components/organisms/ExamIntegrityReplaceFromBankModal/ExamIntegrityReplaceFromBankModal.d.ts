import { default as React } from '../../../../node_modules/react';
import { DraftQuestionDTO } from '../../../types/examIntegrity';
export interface ExamIntegrityReplaceFromBankModalProps {
    open: boolean;
    onClose: () => void;
    onSelect: (question: DraftQuestionDTO) => void;
    search: string;
    onSearchChange: (search: string) => void;
    questions?: DraftQuestionDTO[];
    isLoading?: boolean;
    isSelecting?: boolean;
    className?: string;
}
export declare const ExamIntegrityReplaceFromBankModal: React.FC<ExamIntegrityReplaceFromBankModalProps>;
