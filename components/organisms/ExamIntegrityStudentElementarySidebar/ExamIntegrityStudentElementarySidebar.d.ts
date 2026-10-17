import { default as React } from '../../../../node_modules/react';
export interface ExamIntegrityStudentElementarySidebarProps {
    mascotEmoji?: string;
    mascotName?: string;
    mascotTip?: string;
    flaggedNumbers?: number[];
    onJumpToQuestion?: (questionNumber: number) => void;
    className?: string;
}
export declare const ExamIntegrityStudentElementarySidebar: React.FC<ExamIntegrityStudentElementarySidebarProps>;
export default ExamIntegrityStudentElementarySidebar;
