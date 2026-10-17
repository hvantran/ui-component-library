import { default as React } from '../../../../node_modules/react';
import { ExamIntegrityQuestionBankEditFormState } from '../ExamIntegrityQuestionBankEditCard';
export interface ExamIntegrityAddQuestionDialogProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (values: ExamIntegrityQuestionBankEditFormState) => void;
    isSubmitting?: boolean;
    error?: string | null;
    difficultyOptions?: {
        value: string;
        label: string;
    }[];
    typeOptions?: {
        value: string;
        label: string;
    }[];
    initialValues?: Partial<ExamIntegrityQuestionBankEditFormState>;
    className?: string;
}
export declare const ExamIntegrityAddQuestionDialog: React.FC<ExamIntegrityAddQuestionDialogProps>;
