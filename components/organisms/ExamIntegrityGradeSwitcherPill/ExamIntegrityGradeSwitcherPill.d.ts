import { default as React } from '../../../../node_modules/react';
export interface ExamIntegrityGradeSwitcherPillProps {
    canSwitchGrade?: boolean;
    effectiveGrade?: number | null;
    overrideGrade?: number | null;
    onGradeChange?: (grade: number | null) => void;
    className?: string;
}
export declare const ExamIntegrityGradeSwitcherPill: React.FC<ExamIntegrityGradeSwitcherPillProps>;
export default ExamIntegrityGradeSwitcherPill;
