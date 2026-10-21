import type { EggTier } from '../../molecules/ThreeEggViewer';
import type { PetSkill } from '../ExamIntegrityPetSkill';

export type { EggTier };

export type AssetType = 'skill' | 'pet';

export type PetRarity = 'Common' | 'Rare' | 'Epic' | 'Legendary' | 'Mythic';

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

export type StandardPetElement =
  | 'Flora'
  | 'Water'
  | 'Fire'
  | 'Wind'
  | 'Ice'
  | 'Earth'
  | 'Lightning'
  | 'Cosmic'
  | 'Shadow'
  | 'Astral'
  | 'Void'
  | 'Temporal'
  | 'Divine';

export type PetElement = StandardPetElement | (string & {});

export interface PetElementMetadata {
  label: StandardPetElement;
  iconName:
    | 'Leaf'
    | 'Droplets'
    | 'Flame'
    | 'Wind'
    | 'Snowflake'
    | 'Mountain'
    | 'Zap'
    | 'Sparkles'
    | 'Moon'
    | 'Sun'
    | 'Eye'
    | 'Clock'
    | 'Shield';
  badgeClass: string;
  textClass: string;
  borderClass: string;
  glowClass: string;
}

export type StandardPetSpeciesType =
  | 'Plant'
  | 'Aquatic'
  | 'Beast'
  | 'Avian'
  | 'Mythical'
  | 'Dragon'
  | 'Celestial'
  | 'Void'
  | 'Temporal'
  | 'Knight';

export type PetSpeciesType = StandardPetSpeciesType | (string & {});

export interface PetSpeciesTypeMetadata {
  label: StandardPetSpeciesType;
  iconName:
    | 'Leaf'
    | 'Fish'
    | 'PawPrint'
    | 'Bird'
    | 'Sparkles'
    | 'Flame'
    | 'Sun'
    | 'Eye'
    | 'Clock'
    | 'Shield';
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
  rarity?: PetRarity;
  element: PetElement;
  elements?: PetElement[];
  speciesTypes?: PetSpeciesType[];
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
  rarity: PetRarity;
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
  rarity: PetRarity;
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
