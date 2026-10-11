import { default as React } from '../../../../node_modules/react';
import { ExamIntegrityDashboardSection, ExamIntegrityNavDockMode } from '../ExamIntegrityTeacherDashboardTemplate';
import { ExamIntegrityTeacherSettingsProps, SystemSettingsData } from '../../organisms/ExamIntegrityTeacherSettings';
export type { SystemSettingsData };
export interface ExamIntegrityTeacherSettingsTemplateProps extends Omit<ExamIntegrityTeacherSettingsProps, 'className'> {
    userName?: string;
    userRole?: string;
    onNavigate?: (section: ExamIntegrityDashboardSection) => void;
    onCreateExam?: () => void;
    onSettings?: () => void;
    onLogout?: () => void;
    dockMode?: ExamIntegrityNavDockMode;
    onDockModeChange?: (mode: ExamIntegrityNavDockMode) => void;
    className?: string;
}
export declare const ExamIntegrityTeacherSettingsTemplate: React.FC<ExamIntegrityTeacherSettingsTemplateProps>;
