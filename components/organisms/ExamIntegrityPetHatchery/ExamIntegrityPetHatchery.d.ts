import { default as React } from '../../../../node_modules/react';
import { IncubatingEgg, PetCodexEntry, StudentPet } from './ExamIntegrityPetHatchery.types';
export * from './ExamIntegrityPetHatchery.types';
export * from './petUtils';
export declare const PET_ELEMENT_ICONS: Record<string, React.ComponentType<{
    className?: string;
}>>;
export declare const PET_SPECIES_TYPE_ICONS: Record<string, React.ComponentType<{
    className?: string;
}>>;
export interface FullImageModalData {
    name: string;
    stageName: string;
    imageUrl: string;
    element?: string;
    elements?: string[];
    speciesTypes?: string[];
    rarity?: string;
    species?: string;
}
export interface ExamIntegrityPetHatcheryProps {
    starBalance?: number;
    crackCostInStars?: number;
    incubatingEggs?: IncubatingEgg[];
    pets?: StudentPet[];
    petLibrary?: Record<string, PetCodexEntry> | PetCodexEntry[];
    defaultTab?: 'incubator' | 'pets';
    onGrowPet?: (petId: string, starsSpent: number) => void;
    onEggHatched?: (eggId: string, hatchedPet?: StudentPet) => Promise<StudentPet | void> | StudentPet | void;
    onStrikeCrack?: (eggId: string, starsSpent: number) => void;
    onEquipEgg?: (eggId: string, starCost: number) => void;
    onEquipPet?: (petId: string) => void;
    initialPreviewPet?: StudentPet | null;
    className?: string;
}
export declare const DEFAULT_INCUBATING_EGGS: IncubatingEgg[];
export declare const DEFAULT_STUDENT_PETS: StudentPet[];
export declare function formatHatchTime(totalSeconds: number): string;
export interface PetEvolutionModalProps {
    pet: StudentPet | null;
    onClose: () => void;
    activePetSkill?: {
        petId: string;
        skillId: string;
    } | null;
    onSetActivePetSkill?: (skill: {
        petId: string;
        skillId: string;
    } | null) => void;
}
export declare const PetEvolutionModal: React.FC<PetEvolutionModalProps>;
export interface PetCardProps {
    pet: StudentPet;
    starBalance: number;
    activeStageNum: number;
    wobblingPetId: string | null;
    activePetSkill: {
        petId: string;
        skillId: string;
    } | null;
    onSetPreviewStage: (petId: string, stageNum: number) => void;
    onSetWobblingPetId: (petId: string | null) => void;
    onOpenEvolutionModal: (pet: StudentPet) => void;
    onOpenFullImageModal: (data: FullImageModalData) => void;
    onSetActivePetSkill: (skill: {
        petId: string;
        skillId: string;
    } | null) => void;
    onGrowPet: (pet: StudentPet) => void;
    onEquipPet: (pet: StudentPet) => void;
}
export declare const PetCard: React.FC<PetCardProps>;
export declare const ExamIntegrityPetHatchery: React.FC<ExamIntegrityPetHatcheryProps>;
