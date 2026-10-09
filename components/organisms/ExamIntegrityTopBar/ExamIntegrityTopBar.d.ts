import { default as React } from '../../../../node_modules/react';
import { AppSwitcherItem } from '../AppSwitcher';
export declare const EXAM_INTEGRITY_APP_BAR_HEIGHT = 64;
export interface ExamIntegrityTopBarProps {
    appTitle?: string;
    userName?: string;
    starCount?: number;
    showSearch?: boolean;
    onSearch?: (query: string) => void;
    onNotifications?: () => void;
    onHelp?: () => void;
    onLogout?: () => void;
    onMenuToggle?: () => void;
    appSwitcherItems?: AppSwitcherItem[];
    onNavigateApp?: (app: AppSwitcherItem) => void;
    className?: string;
}
export declare const ExamIntegrityTopBar: React.FC<ExamIntegrityTopBarProps>;
export default ExamIntegrityTopBar;
