import { EggTier } from '../../molecules/ThreeEggViewer';
import { PetSkill } from '../ExamIntegrityPetSkill';
export type { EggTier };
export declare enum AssetType {
    Skill = "skill",
    Pet = "pet"
}
export declare enum PetRarity {
    Common = "Common",
    Rare = "Rare",
    Epic = "Epic",
    Legendary = "Legendary",
    Mythic = "Mythic"
}
export type PetRarityValue = PetRarity | `${PetRarity}`;
export interface IncubatingEgg {
    id: string;
    name: string;
    tier: EggTier;
    rarity?: PetRarityValue;
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
export interface EvolutionStageInfo {
    stage: number;
    minLevel: number;
    name: string;
    title: string;
    description: string;
    avatarEmoji: string;
    imageUrl: string;
    imageName?: string;
    ability?: {
        name: string;
        description: string;
        videoFile?: string;
        videoUrl?: string;
    };
}
export declare enum PetElement {
    Flora = "Flora",
    Water = "Water",
    Fire = "Fire",
    Wind = "Wind",
    Ice = "Ice",
    Earth = "Earth",
    Lightning = "Lightning",
    Cosmic = "Cosmic",
    Shadow = "Shadow",
    Astral = "Astral",
    Void = "Void",
    Temporal = "Temporal",
    Divine = "Divine"
}
export type PetElementValue = PetElement | `${PetElement}`;
export type StandardPetElement = PetElement;
export interface PetElementMetadata {
    label: PetElement;
    iconName: 'Leaf' | 'Droplets' | 'Flame' | 'Wind' | 'Snowflake' | 'Mountain' | 'Zap' | 'Sparkles' | 'Moon' | 'Sun' | 'Eye' | 'Clock' | 'Shield';
    badgeClass: string;
    textClass: string;
    borderClass: string;
    glowClass: string;
}
export declare enum PetSpeciesType {
    Plant = "Plant",
    Aquatic = "Aquatic",
    Beast = "Beast",
    Avian = "Avian",
    Mythical = "Mythical",
    Dragon = "Dragon",
    Celestial = "Celestial",
    Void = "Void",
    Temporal = "Temporal",
    Knight = "Knight"
}
export type PetSpeciesTypeValue = PetSpeciesType | `${PetSpeciesType}`;
export type StandardPetSpeciesType = PetSpeciesType;
export interface PetSpeciesTypeMetadata {
    label: PetSpeciesType;
    iconName: 'Leaf' | 'Fish' | 'PawPrint' | 'Bird' | 'Sparkles' | 'Flame' | 'Sun' | 'Eye' | 'Clock' | 'Shield';
    badgeClass: string;
    textClass: string;
}
export interface PetStats {
    vitality: number;
    wisdom: number;
    integrityBond: number;
    solarRadiance?: number;
}
export interface StudentPet {
    id: string;
    name: string;
    species: string;
    tier: EggTier;
    rarity?: PetRarityValue;
    element: PetElementValue | string;
    elements?: (PetElementValue | string)[];
    speciesTypes?: (PetSpeciesTypeValue | string)[];
    level: number;
    maxLevel: number;
    currentExp: number;
    expNeeded: number;
    growthCostInStars: number;
    stats: PetStats;
    avatarEmoji: string;
    imageUrl?: string;
    imageName?: string;
    petLibraryId?: string;
    stageName: string;
    stageLevel: number;
    totalStages?: number;
    evolutionStages?: EvolutionStageInfo[];
    skills?: PetSkill[];
    isEquipped?: boolean;
}
export interface PetCodexEntry {
    key: string;
    name: string;
    species: string;
    rarity: PetRarityValue;
    element: PetElementValue;
    elements?: PetElementValue[];
    speciesTypes?: PetSpeciesTypeValue[];
    avatarEmoji: string;
    tier: EggTier;
    totalStages: number;
    stages: EvolutionStageInfo[];
    description: string;
    bannerGradient: string;
}
export interface SyncPetLibraryStageDTO {
    stage: number;
    minLevel: number;
    name: string;
    title: string;
    description: string;
    avatarEmoji: string;
    imageName?: string;
}
export interface SyncPetLibraryItemDTO {
    id: string;
    petKey: string;
    name: string;
    species: string;
    rarity: PetRarityValue;
    tier: EggTier;
    element: PetElementValue;
    elements?: PetElementValue[];
    speciesTypes?: PetSpeciesTypeValue[];
    avatarEmoji: string;
    totalStages: number;
    maxLevel: number;
    eggShopPrice: number;
    hatchDurationHours: number;
    description: string;
    bannerGradient: string;
    stages: SyncPetLibraryStageDTO[];
}
