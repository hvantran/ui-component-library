import { default as React } from '../../../../node_modules/react';
import { ExamIntegrityReviewDashboardData } from '../ExamIntegrityReviewDashboard';
export interface ExamIntegrityResultsCelebrationProps {
    dashboard: ExamIntegrityReviewDashboardData;
    studentName?: string;
    onBackToQuests?: () => void;
    onPrint?: () => void;
}
export declare const ExamIntegrityResultsCelebration: React.FC<ExamIntegrityResultsCelebrationProps>;
export default ExamIntegrityResultsCelebration;
