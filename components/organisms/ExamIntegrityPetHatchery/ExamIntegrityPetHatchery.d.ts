import { default as React } from '../../../../node_modules/react';
import { EggTier } from '../../molecules/ThreeEggViewer';
import { StudentPet } from './petsData';
export * from './petsData';
export declare const PET_ELEMENT_ICONS: Record<string, React.ComponentType<{
    className?: string;
}>>;
export declare const PET_SPECIES_TYPE_ICONS: Record<string, React.ComponentType<{
    className?: string;
}>>;
export interface IncubatingEgg {
    id: string;
    name: string;
    tier: EggTier;
    rarity?: 'Common' | 'Rare' | 'Epic' | 'Legendary' | 'Mythic';
    crackProgress: number;
    hatchedPetName: string;
    hatchedSpecies: string;
    isEquipped?: boolean;
    equipCostInStars?: number;
    imageUrl?: string;
    isMystery?: boolean;
    hatchDurationHours?: number;
    remainingSeconds?: number;
}
export interface ExamIntegrityPetHatcheryProps {
    starBalance?: number;
    crackCostInStars?: number;
    incubatingEggs?: IncubatingEgg[];
    pets?: StudentPet[];
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
export declare function resolvePetImageUrl(imageName?: string, imageUrl?: string): string | undefined;
export declare const ExamIntegrityPetHatchery: React.FC<ExamIntegrityPetHatcheryProps>;
