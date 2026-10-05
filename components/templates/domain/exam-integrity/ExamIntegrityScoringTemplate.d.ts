import { default as React } from '../../../../../node_modules/react';
export interface ExamIntegrityScoringTemplateProps {
    pageTitle?: string;
    pageSubtitle?: string;
    isLoading?: boolean;
    emptyState?: React.ReactNode;
    queueSlot: React.ReactNode;
    detailSlot: React.ReactNode;
    className?: string;
}
export declare const ExamIntegrityScoringTemplate: React.FC<ExamIntegrityScoringTemplateProps>;
export default ExamIntegrityScoringTemplate;
