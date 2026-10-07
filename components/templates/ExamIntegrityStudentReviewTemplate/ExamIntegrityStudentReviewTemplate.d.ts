import { default as React } from '../../../../node_modules/react';
import { ExamIntegrityStudentPortalSection } from '../../organisms/ExamIntegrityStudentPortalSidebar';
export interface ExamIntegrityStudentReviewTemplateProps {
    studentName?: string;
    activeSection?: ExamIntegrityStudentPortalSection;
    onNavigate?: (section: ExamIntegrityStudentPortalSection) => void;
    onHelp?: () => void;
    onSearch?: (query: string) => void;
    onNotifications?: () => void;
    children: React.ReactNode;
    className?: string;
}
export declare const ExamIntegrityStudentReviewTemplate: React.FC<ExamIntegrityStudentReviewTemplateProps>;
export default ExamIntegrityStudentReviewTemplate;
