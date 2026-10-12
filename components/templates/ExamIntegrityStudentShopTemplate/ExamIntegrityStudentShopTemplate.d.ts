import { default as React } from '../../../../node_modules/react';
import { StudentPortalSection } from '../ExamIntegrityStudentLandingTemplate';
import { EggShopItem, EggShopCategory } from '../../organisms/ExamIntegrityEggShop';
import { ExamIntegrityNavDockMode } from '../../organisms/ExamIntegrityStudentPortalSidebar';
export interface ExamIntegrityStudentShopTemplateProps {
    studentName?: string;
    starCount?: number;
    isElementary?: boolean;
    pageTitle?: string;
    pageSubtitle?: string;
    items?: EggShopItem[];
    categories?: EggShopCategory[];
    dropRates?: Record<string, number>;
    onPurchaseEgg?: (item: EggShopItem) => void;
    onNavigate?: (section: StudentPortalSection) => void;
    onLogout?: () => void;
    dockMode?: ExamIntegrityNavDockMode;
    onDockModeChange?: (mode: ExamIntegrityNavDockMode) => void;
    className?: string;
}
export declare const ExamIntegrityStudentShopTemplate: React.FC<ExamIntegrityStudentShopTemplateProps>;
