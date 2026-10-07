import { default as React } from '../../../../node_modules/react';
export interface ExamIntegrityStudentSubmitModalProps {
    open: boolean;
    answeredCount: number;
    totalCount: number;
    onBack: () => void;
    onFinalSubmit: () => void;
    className?: string;
}
export declare const ExamIntegrityStudentSubmitModal: React.FC<ExamIntegrityStudentSubmitModalProps>;
export default ExamIntegrityStudentSubmitModal;
