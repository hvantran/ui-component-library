import { default as React } from '../../../../node_modules/react';
import { EggTier } from '../../molecules/ThreeEggViewer';
import { StudentPet } from './petsData';
export * from './petsData';
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
    incubatingEggs?: IncubatingEgg[];
    pets?: StudentPet[];
    defaultTab?: 'incubator' | 'pets' | 'codex';
    onGrowPet?: (petId: string, starsSpent: number) => void;
    onEggHatched?: (eggId: string, hatchedPet: StudentPet) => void;
    onEquipEgg?: (eggId: string, starCost: number) => void;
    onEquipPet?: (petId: string) => void;
    className?: string;
}
export declare const DEFAULT_INCUBATING_EGGS: IncubatingEgg[];
export declare const DEFAULT_STUDENT_PETS: StudentPet[];
export declare function formatHatchTime(totalSeconds: number): string;
export declare const ExamIntegrityPetHatchery: React.FC<ExamIntegrityPetHatcheryProps>;
