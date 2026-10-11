import { default as React } from '../../../../node_modules/react';
import { StudentPortalSection } from '../ExamIntegrityStudentLandingTemplate';
import { EggShopItem } from '../../organisms/ExamIntegrityEggShop';
import { IncubatingEgg, StudentPet } from '../../organisms/ExamIntegrityPetHatchery';
import { ExamIntegrityNavDockMode } from '../../organisms/ExamIntegrityStudentPortalSidebar';
export type EggShopTab = 'shop' | 'hatchery';
export interface ExamIntegrityStudentEggShopTemplateProps {
    studentName?: string;
    starCount?: number;
    isElementary?: boolean;
    pageTitle?: string;
    pageSubtitle?: string;
    activeSection?: StudentPortalSection;
    activeTab?: EggShopTab;
    onTabChange?: (tab: EggShopTab) => void;
    incubatingEggs?: IncubatingEgg[];
    pets?: StudentPet[];
    onPurchaseEgg?: (item: EggShopItem) => void;
    onEggHatched?: (eggId: string, hatchedPet: StudentPet) => void;
    onGrowPet?: (petId: string, starsSpent: number) => void;
    onStrikeCrack?: (eggId: string, starsSpent: number) => void;
    crackCostInStars?: number;
    onNavigate?: (section: StudentPortalSection) => void;
    onLogout?: () => void;
    dockMode?: ExamIntegrityNavDockMode;
    onDockModeChange?: (mode: ExamIntegrityNavDockMode) => void;
    className?: string;
}
export declare const ExamIntegrityStudentEggShopTemplate: React.FC<ExamIntegrityStudentEggShopTemplateProps>;
