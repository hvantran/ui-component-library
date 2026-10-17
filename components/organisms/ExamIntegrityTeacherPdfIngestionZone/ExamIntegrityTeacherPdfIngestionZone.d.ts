import { default as React } from '../../../../node_modules/react';
export interface ExamIntegrityTeacherPdfIngestionZoneProps {
    onFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isProcessing?: boolean;
    isSuccess?: boolean;
    error?: string | null;
    processingMessage?: string;
    successMessage?: string;
    className?: string;
    accept?: string;
}
export declare const ExamIntegrityTeacherPdfIngestionZone: React.ForwardRefExoticComponent<ExamIntegrityTeacherPdfIngestionZoneProps & React.RefAttributes<HTMLInputElement>>;
