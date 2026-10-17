import { default as React } from '../../../../node_modules/react';
export interface ExamIntegrityQuestionBankEditFormState {
    content: string;
    type: string;
    difficulty: string;
    options: string[];
    optionImages: (string | undefined)[];
    correctAnswer: string;
    points: number;
    tags: string;
    imageData?: string;
}
export interface ExamIntegrityQuestionBankEditCardProps {
    idPrefix?: string;
    initialValues: ExamIntegrityQuestionBankEditFormState;
    onSave: (values: ExamIntegrityQuestionBankEditFormState) => void;
    onCancel: () => void;
    isSaving?: boolean;
    difficultyOptions?: {
        value: string;
        label: string;
    }[];
    className?: string;
}
export declare const ExamIntegrityQuestionBankEditCard: React.FC<ExamIntegrityQuestionBankEditCardProps>;
