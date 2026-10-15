import { EggTier } from '../../molecules/ThreeEggViewer';
import { PetSkill } from '../ExamIntegrityPetSkill';
export interface EvolutionStageInfo {
    stage: number;
    minLevel: number;
    name: string;
    title: string;
    description: string;
    avatarEmoji: string;
    imageUrl: string;
    imageName?: string;
}
export type StandardPetElement = 'Flora' | 'Water' | 'Fire' | 'Wind' | 'Ice' | 'Earth' | 'Lightning' | 'Cosmic' | 'Shadow' | 'Astral' | 'Void' | 'Temporal' | 'Divine';
export type PetElement = StandardPetElement | (string & {});
export interface PetElementMetadata {
    label: StandardPetElement;
    iconName: 'Leaf' | 'Droplets' | 'Flame' | 'Wind' | 'Snowflake' | 'Mountain' | 'Zap' | 'Sparkles' | 'Moon' | 'Sun' | 'Eye' | 'Clock' | 'Shield';
    badgeClass: string;
    textClass: string;
    borderClass: string;
    glowClass: string;
}
export declare const PET_ELEMENT_METADATA: Record<StandardPetElement, PetElementMetadata>;
export declare function normalizePetElement(element?: string): StandardPetElement;
export declare function getPetElementMetadata(element?: string): PetElementMetadata;
export type StandardPetSpeciesType = 'Plant' | 'Aquatic' | 'Beast' | 'Avian' | 'Mythical' | 'Dragon' | 'Celestial' | 'Void' | 'Temporal' | 'Knight';
export type PetSpeciesType = StandardPetSpeciesType | (string & {});
export interface PetSpeciesTypeMetadata {
    label: StandardPetSpeciesType;
    iconName: 'Leaf' | 'Fish' | 'PawPrint' | 'Bird' | 'Sparkles' | 'Flame' | 'Sun' | 'Eye' | 'Clock' | 'Shield';
    badgeClass: string;
    textClass: string;
}
export declare const PET_SPECIES_TYPE_METADATA: Record<StandardPetSpeciesType, PetSpeciesTypeMetadata>;
export declare function normalizePetSpeciesType(st?: string): StandardPetSpeciesType;
export declare function getPetSpeciesTypeMetadata(speciesType?: string): PetSpeciesTypeMetadata;
export declare function getRequiredElementCount(rarity?: string): number;
export declare function getRequiredSpeciesTypeCount(rarity?: string): number;
export interface StudentPet {
    id: string;
    name: string;
    species: string;
    tier: EggTier;
    rarity?: 'Common' | 'Rare' | 'Epic' | 'Legendary' | 'Mythic';
    element: PetElement;
    elements?: PetElement[];
    speciesTypes?: PetSpeciesType[];
    level: number;
    maxLevel: number;
    currentExp: number;
    expNeeded: number;
    growthCostInStars: number;
    stats: {
        vitality: number;
        wisdom: number;
        integrityBond: number;
        solarRadiance?: number;
    };
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
export declare const VOID_SINGULARITY_SKILL: PetSkill;
export declare const COSMIC_RIFT_BREATH_SKILL: PetSkill;
export interface PetCodexEntry {
    key: string;
    name: string;
    species: string;
    rarity: 'Common' | 'Rare' | 'Epic' | 'Legendary' | 'Mythic';
    element: PetElement;
    elements?: PetElement[];
    speciesTypes?: PetSpeciesType[];
    avatarEmoji: string;
    tier: EggTier;
    totalStages: number;
    stages: EvolutionStageInfo[];
    description: string;
    bannerGradient: string;
}
export declare const SPROUTLING_EVOLUTIONS: EvolutionStageInfo[];
export declare const PIPFLICK_EVOLUTIONS: EvolutionStageInfo[];
export declare const EMBERSQUEAK_EVOLUTIONS: EvolutionStageInfo[];
export declare const ZEPHYRPUFF_EVOLUTIONS: EvolutionStageInfo[];
export declare const FROSTPAW_EVOLUTIONS: EvolutionStageInfo[];
export declare const MAGMAFANG_EVOLUTIONS: EvolutionStageInfo[];
export declare const VOLTWING_EVOLUTIONS: EvolutionStageInfo[];
export declare const THUNDERCAT_EVOLUTIONS: EvolutionStageInfo[];
export declare const FIRE_PHOENIX_EVOLUTIONS: EvolutionStageInfo[];
export declare const CHRONO_CHIMERA_EVOLUTIONS: EvolutionStageInfo[];
export declare const SHADOWPANTHER_EVOLUTIONS: EvolutionStageInfo[];
export declare const STORMSTAG_EVOLUTIONS: EvolutionStageInfo[];
export declare const ASTRAL_DRAGON_EVOLUTIONS: EvolutionStageInfo[];
export declare const ASTRAL_LEVIATHAN_EVOLUTIONS: EvolutionStageInfo[];
export declare const SOLAR_WYVERN_EVOLUTIONS: EvolutionStageInfo[];
export declare const VOID_DRAGON_EVOLUTIONS: EvolutionStageInfo[];
export declare const CHRONO_DRACO_EVOLUTIONS: EvolutionStageInfo[];
export declare const AEGIS_PALADIN_EVOLUTIONS: EvolutionStageInfo[];
export declare function createEvolutionSkills(petKey: string, evolutionStages: EvolutionStageInfo[], stageSkillOverrides?: Partial<Record<number, PetSkill>>): PetSkill[];
export declare function createSproutlingPet(stageLevel?: number, isEquipped?: boolean): StudentPet;
export declare function createPipflickPet(stageLevel?: number, isEquipped?: boolean): StudentPet;
export declare function createEmbersqueakPet(stageLevel?: number, isEquipped?: boolean): StudentPet;
export declare function createZephyrpuffPet(stageLevel?: number, isEquipped?: boolean): StudentPet;
export declare function createFrostpawPet(stageLevel?: number, isEquipped?: boolean): StudentPet;
export declare function createMagmafangPet(stageLevel?: number, isEquipped?: boolean): StudentPet;
export declare function createVoltwingPet(stageLevel?: number, isEquipped?: boolean): StudentPet;
export declare function createThundercatPet(stageLevel?: number, isEquipped?: boolean): StudentPet;
export declare function createFirePhoenixPet(stageLevel?: number, isEquipped?: boolean): StudentPet;
export declare function createChronoChimeraPet(stageLevel?: number, isEquipped?: boolean): StudentPet;
export declare function createShadowpantherPet(stageLevel?: number, isEquipped?: boolean): StudentPet;
export declare function createStormstagPet(stageLevel?: number, isEquipped?: boolean): StudentPet;
export declare function createAstralDragonPet(stageLevel?: number, isEquipped?: boolean): StudentPet;
export declare function createAstralLeviathanPet(stageLevel?: number, isEquipped?: boolean): StudentPet;
export declare function createSolarWyvernPet(stageLevel?: number, isEquipped?: boolean): StudentPet;
export declare function createVoidDragonPet(stageLevel?: number, isEquipped?: boolean): StudentPet;
export declare function createChronoDracoPet(stageLevel?: number, isEquipped?: boolean): StudentPet;
export declare function createAegisPaladinPet(stageLevel?: number, isEquipped?: boolean): StudentPet;
export declare const ALL_PET_CODEX_REGISTRY: Record<string, PetCodexEntry>;
export declare const PET_CODEX_REGISTRY: Record<string, PetCodexEntry>;
export declare const ALL_SHOP_STARTER_PETS: StudentPet[];
export declare const ALL_FIRE_PHOENIX_LEVELS: StudentPet[];
export declare const ALL_ROSTER_STARTER_PETS: StudentPet[];
export type PetRarity = 'Common' | 'Rare' | 'Epic' | 'Legendary' | 'Mythic';
export interface RarityDropRateInfo {
    rarity: PetRarity;
    percent: number;
    stages: number;
    label: string;
    badgeClass: string;
    glowClass: string;
}
export declare const RARITY_DROP_RATES: Record<PetRarity, RarityDropRateInfo>;
export declare function rollMysteryPet(fixedRoll?: number): StudentPet;
export declare const PET_IMAGE_MAP: Record<string, string>;
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
    rarity: 'Common' | 'Rare' | 'Epic' | 'Legendary' | 'Mythic';
    tier: EggTier;
    element: PetElement;
    elements?: PetElement[];
    speciesTypes?: PetSpeciesType[];
    avatarEmoji: string;
    totalStages: number;
    maxLevel: number;
    eggShopPrice: number;
    hatchDurationHours: number;
    description: string;
    bannerGradient: string;
    stages: SyncPetLibraryStageDTO[];
}
export declare function getExportedPetLibrary(): SyncPetLibraryItemDTO[];
export declare function findPetCodexEntry(pet?: Partial<StudentPet> | null): PetCodexEntry | undefined;
export declare function enrichStudentPet(pet: StudentPet): StudentPet;
