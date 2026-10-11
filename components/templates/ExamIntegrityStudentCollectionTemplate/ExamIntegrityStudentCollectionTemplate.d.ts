import { default as React } from '../../../../node_modules/react';
import { StudentPortalSection } from '../ExamIntegrityStudentLandingTemplate';
import { IncubatingEgg, StudentPet } from '../../organisms/ExamIntegrityPetHatchery';
import { ExamIntegrityNavDockMode } from '../../organisms/ExamIntegrityStudentPortalSidebar';
export interface ExamIntegrityStudentCollectionTemplateProps {
    studentName?: string;
    starCount?: number;
    isElementary?: boolean;
    pageTitle?: string;
    pageSubtitle?: string;
    incubatingEggs?: IncubatingEgg[];
    pets?: StudentPet[];
    onEggHatched?: (eggId: string, hatchedPet?: StudentPet) => Promise<StudentPet | void> | StudentPet | void;
    onGrowPet?: (petId: string, starsSpent: number) => void;
    onStrikeCrack?: (eggId: string, starsSpent: number) => void;
    onEquipEgg?: (eggId: string, starCost: number) => void;
    onEquipPet?: (petId: string) => void;
    crackCostInStars?: number;
    onNavigate?: (section: StudentPortalSection) => void;
    onLogout?: () => void;
    dockMode?: ExamIntegrityNavDockMode;
    onDockModeChange?: (mode: ExamIntegrityNavDockMode) => void;
    className?: string;
}
export declare const ExamIntegrityStudentCollectionTemplate: React.FC<ExamIntegrityStudentCollectionTemplateProps>;
