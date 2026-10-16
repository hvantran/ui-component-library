import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Heart,
  Zap,
  ChevronRight,
  Flame,
  Sun,
  Crown,
  Check,
  Info,
  X,
  Gavel,
  RefreshCw,
  Lock,
  Clock,
  Maximize2,
  Leaf,
  Droplets,
  Wind,
  Snowflake,
  Mountain,
  Moon,
  Eye,
  Shield,
  PawPrint,
  Bird,
  Fish,
  GitFork,
} from 'lucide-react';
import { Button } from '../../atoms/Button';
import { ProgressBar } from '../../atoms/ProgressBar';
import { ThreeEggViewer, EggTier } from '../../molecules/ThreeEggViewer';
import { cn } from '../../../utils/cn';
import phoenixEggImg from '../../../assets/pets/phoenix-egg.png';
import { ExamIntegrityPetSkill, type PetSkill } from '../ExamIntegrityPetSkill';
export * from './petsData';
import {
  type EvolutionStageInfo,
  type StudentPet,
  getPetElementMetadata,
  getPetSpeciesTypeMetadata,
  normalizePetSpeciesType,
  createSproutlingPet,
  createPipflickPet,
  createEmbersqueakPet,
  createZephyrpuffPet,
  createFrostpawPet,
  createMagmafangPet,
  createVoltwingPet,
  createThundercatPet,
  createFirePhoenixPet,
  createChronoChimeraPet,
  createShadowpantherPet,
  createStormstagPet,
  createAstralDragonPet,
  createAstralLeviathanPet,
  createSolarWyvernPet,
  createVoidDragonPet,
  createChronoDracoPet,
  createAegisPaladinPet,
  rollMysteryPet,
  PET_IMAGE_MAP,
  enrichStudentPet,
} from './petsData';

export const PET_ELEMENT_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Leaf,
  Droplets,
  Flame,
  Wind,
  Snowflake,
  Mountain,
  Zap,
  Sparkles,
  Moon,
  Sun,
  Eye,
  Clock,
  Shield,
};

export const PET_SPECIES_TYPE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Leaf,
  Fish,
  PawPrint,
  Bird,
  Sparkles,
  Flame,
  Sun,
  Eye,
  Clock,
  Shield,
};

export interface IncubatingEgg {
  id: string;
  name: string;
  tier: EggTier;
  rarity?: 'Common' | 'Rare' | 'Epic' | 'Legendary' | 'Mythic';
  crackProgress: number; // 0 to 1
  hatchedPetName: string;
  hatchedSpecies: string;
  isEquipped?: boolean;
  equipCostInStars?: number;
  imageUrl?: string;
  isMystery?: boolean;
  hatchDurationHours?: number;
  remainingSeconds?: number;
}

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
  defaultTab?: 'incubator' | 'pets';
  onGrowPet?: (petId: string, starsSpent: number) => void;
  onEggHatched?: (
    eggId: string,
    hatchedPet?: StudentPet
  ) => Promise<StudentPet | void> | StudentPet | void;
  onStrikeCrack?: (eggId: string, starsSpent: number) => void;
  onEquipEgg?: (eggId: string, starCost: number) => void;
  onEquipPet?: (petId: string) => void;
  initialPreviewPet?: StudentPet | null;
  className?: string;
}

export const DEFAULT_INCUBATING_EGGS: IncubatingEgg[] = [
  {
    id: 'inc-egg-mystery',
    name: 'Ancient Mysterious Egg',
    tier: 'dragon',
    crackProgress: 0.1,
    hatchedPetName: '??? Secret Pet',
    hatchedSpecies: 'Veiled Ancient Beast',
    isEquipped: true,
    equipCostInStars: 25,
    isMystery: true,
    hatchDurationHours: 8,
    remainingSeconds: 0,
  },
  {
    id: 'inc-egg-phoenix',
    name: 'Primordial Fire Phoenix Egg',
    tier: 'dragon',
    rarity: 'Epic',
    crackProgress: 0.35,
    hatchedPetName: 'Sun Ember Fledgling',
    hatchedSpecies: 'Primordial Solar Phoenix',
    isEquipped: false,
    equipCostInStars: 25,
    imageUrl: phoenixEggImg,
    hatchDurationHours: 8,
    remainingSeconds: 18720,
  },
  {
    id: 'inc-egg-void',
    name: 'Void Abyssal Singularity Egg',
    tier: 'dragon',
    rarity: 'Mythic',
    crackProgress: 0.15,
    hatchedPetName: 'Voidling Pip',
    hatchedSpecies: 'Mythic Void Abyssal Dragon',
    isEquipped: false,
    equipCostInStars: 50,
  },
  {
    id: 'inc-egg-1',
    name: 'Warm Bronze Dragon Egg',
    tier: 'dragon',
    rarity: 'Legendary',
    crackProgress: 0.65,
    hatchedPetName: 'Stardrop Wyrmlet',
    hatchedSpecies: 'Celestial Astral Dragon',
    isEquipped: false,
    equipCostInStars: 35,
  },
  {
    id: 'inc-egg-frost',
    name: 'Glacial Frostpaw Egg',
    tier: 'celestial',
    rarity: 'Rare',
    crackProgress: 0.5,
    hatchedPetName: 'Frostpup',
    hatchedSpecies: 'Arctic Snow Leopard',
    isEquipped: false,
    equipCostInStars: 20,
  },
  {
    id: 'inc-egg-sproutling',
    name: 'Emerald Sproutling Egg',
    tier: 'forest',
    rarity: 'Common',
    crackProgress: 0.8,
    hatchedPetName: 'Sproutling',
    hatchedSpecies: 'Flora Sproutling Seedling',
    isEquipped: false,
    equipCostInStars: 15,
  },
];

export const DEFAULT_STUDENT_PETS: StudentPet[] = [
  createFirePhoenixPet(1, true)
];

function getEggCrackStatusText(progress: number, isHatched: boolean): string {
  if (isHatched || progress >= 1.0) {
    return 'READY TO HATCH! PHOENIX EMERGENCE';
  }
  if (progress > 0.6) {
    return 'Veins Pulsing with Molten Core Fire';
  }
  if (progress > 0.25) {
    return 'Bronze Shell Fissuring Deeply';
  }
  return 'Intact Ancient Solar Bronze Egg';
}

export function formatHatchTime(totalSeconds: number): string {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  return `${h.toString().padStart(2, '0')}h ${m.toString().padStart(2, '0')}m ${s.toString().padStart(2, '0')}s`;
}

export function resolvePetImageUrl(imageName?: string, imageUrl?: string): string | undefined {
  if (imageName && PET_IMAGE_MAP[imageName]) {
    return PET_IMAGE_MAP[imageName];
  }
  return imageUrl;
}

// ---------------------------------------------------------------------------
// Inner Subcomponents (Extracted for readability and clean conditional logic)
// ---------------------------------------------------------------------------

interface EggStrikeButtonContentProps {
  isHatching: boolean;
  crackProgress: number;
  remainingSeconds?: number;
  crackCostInStars: number;
}

const EggStrikeButtonContent: React.FC<EggStrikeButtonContentProps> = ({
  isHatching,
  crackProgress,
  remainingSeconds,
  crackCostInStars,
}) => {
  if (isHatching) {
    return (
      <>
        <Lock className="w-4 h-4 text-amber-500" />
        <span>{`HATCHING IN PROGRESS (${formatHatchTime(remainingSeconds ?? 0)} LEFT)`}</span>
      </>
    );
  }
  if (crackProgress >= 1) {
    return (
      <>
        <Sparkles className="w-4 h-4" />
        <span>READY TO HATCH! (+25%)</span>
      </>
    );
  }
  return (
    <>
      <Gavel className="w-4 h-4" />
      <span>{`STRIKE & CRACK (+25% • ${crackCostInStars} ⭐)`}</span>
    </>
  );
};

interface EggQueueHatchStatusProps {
  remainingSeconds?: number;
}

const EggQueueHatchStatus: React.FC<EggQueueHatchStatusProps> = ({ remainingSeconds = 0 }) => {
  if (remainingSeconds > 0) {
    return (
      <div className="text-[11px] font-extrabold text-amber-500 flex items-center gap-1">
        <Clock className="w-3.5 h-3.5" />
        <span>{`${formatHatchTime(remainingSeconds)} left`}</span>
      </div>
    );
  }
  return (
    <div className="text-[11px] font-extrabold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
      <Sparkles className="w-3.5 h-3.5" />
      <span>Ready to Crack & Hatch!</span>
    </div>
  );
};

// ---------------------------------------------------------------------------
// Evolution Tree Dialog Subcomponents (Clean & Concise progression)
// ---------------------------------------------------------------------------

interface PetEvolutionStageNodeProps {
  stage: EvolutionStageInfo;
  petId: string;
  petLevel: number;
  currentStageLevel: number;
  stageSkill?: PetSkill;
  activePetSkill?: { petId: string; skillId: string } | null;
  onSetActivePetSkill?: (skill: { petId: string; skillId: string } | null) => void;
}

const PetEvolutionStageNode: React.FC<PetEvolutionStageNodeProps> = ({
  stage,
  petId,
  petLevel,
  currentStageLevel,
  stageSkill,
  activePetSkill,
  onSetActivePetSkill,
}) => {
  const isReached = currentStageLevel >= stage.stage;
  const isCurrent = currentStageLevel === stage.stage;
  const isSkillLocked = petLevel < (stageSkill?.requiredLevel ?? 999);

  return (
    <div
      className={cn(
        'relative flex flex-col gap-3 p-3.5 sm:p-4 rounded-2xl border-2 transition-all',
        isCurrent
          ? 'border-amber-500 bg-amber-50/70 dark:bg-amber-950/30 shadow-md ring-2 ring-amber-500/20'
          : isReached
          ? 'border-stone-200 dark:border-stone-700 bg-stone-50/60 dark:bg-stone-800/50'
          : 'border-dashed border-stone-200 dark:border-stone-800 bg-stone-50/20 dark:bg-stone-900/20 opacity-60'
      )}
    >
      <div className="flex items-center gap-3.5 sm:gap-4">
        {/* Stage Number Badge */}
        <div
          className={cn(
            'w-7 h-7 rounded-full flex items-center justify-center text-xs font-black shrink-0 border shadow-xs',
            isCurrent
              ? 'bg-amber-500 text-white border-amber-400'
              : isReached
              ? 'bg-emerald-500 text-white border-emerald-400'
              : 'bg-stone-200 dark:bg-stone-800 text-stone-500 border-stone-300 dark:border-stone-700'
          )}
        >
          {stage.stage}
        </div>

        {/* Stage Visual Thumbnail */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gradient-to-b from-[#1c0e07] to-stone-900 flex items-center justify-center border border-amber-500/30 overflow-hidden shrink-0 relative shadow-sm">
          {stage.imageUrl ? (
            <img
              src={stage.imageUrl}
              alt={stage.name}
              className={cn(
                'w-full h-full object-contain p-1 select-none',
                !isReached && 'brightness-0 opacity-40 contrast-200'
              )}
            />
          ) : (
            <span className={cn('text-2xl sm:text-3xl select-none', !isReached && 'opacity-40 grayscale')}>
              {stage.avatarEmoji}
            </span>
          )}
          {!isReached && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <Lock className="w-4 h-4 text-amber-400" />
            </div>
          )}
        </div>

        {/* Stage Essential Details */}
        <div className="flex-1 min-w-0 space-y-1">
          <div className="flex items-center gap-2 flex-wrap">
            <div className="font-extrabold text-sm sm:text-base text-stone-900 dark:text-white truncate">
              {`Stage ${stage.stage}: ${stage.name}`}
            </div>
            {stage.title && (
              <span className="text-xs text-stone-500 dark:text-stone-400 hidden sm:inline">
                {`• ${stage.title}`}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 flex-wrap text-xs">
            <span className="font-bold text-amber-600 dark:text-amber-400">
              {`Level ${stage.minLevel}+`}
            </span>
          </div>
        </div>

        {/* Status Pill */}
        <div className="shrink-0 self-start sm:self-center">
          {isCurrent ? (
            <span className="px-2.5 py-1 rounded-full text-xs font-black bg-amber-500 text-white shadow-xs">
              Current
            </span>
          ) : isReached ? (
            <span className="px-2.5 py-1 rounded-full text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 flex items-center gap-1">
              <Check className="w-3 h-3" /> Unlocked
            </span>
          ) : (
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold text-stone-400 dark:text-stone-500 bg-stone-100 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700 flex items-center gap-1">
              <Lock className="w-3 h-3" /> Locked
            </span>
          )}
        </div>
      </div>

      {/* Stage Ability with Cast capability */}
      {stageSkill && (
        <div className="pt-1 border-t border-stone-200/60 dark:border-stone-800/60">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-extrabold uppercase tracking-wide text-violet-600 dark:text-violet-300">
              Stage Ability
            </span>
          </div>
          <ExamIntegrityPetSkill
            skill={stageSkill}
            posterUrl={stage.imageUrl}
            locked={isSkillLocked}
            open={
              activePetSkill?.petId === petId &&
              activePetSkill.skillId === stageSkill.id
            }
            onOpenChange={(open) => {
              if (open && isSkillLocked) return;
              onSetActivePetSkill?.(
                open ? { petId, skillId: stageSkill.id } : null
              );
            }}
          />
        </div>
      )}
    </div>
  );
};

export interface PetEvolutionModalProps {
  pet: StudentPet | null;
  onClose: () => void;
  activePetSkill?: { petId: string; skillId: string } | null;
  onSetActivePetSkill?: (skill: { petId: string; skillId: string } | null) => void;
}

export const PetEvolutionModal: React.FC<PetEvolutionModalProps> = ({
  pet,
  onClose,
  activePetSkill: externalActivePetSkill,
  onSetActivePetSkill: externalOnSetActivePetSkill,
}) => {
  const [internalActiveSkill, setInternalActiveSkill] = useState<{
    petId: string;
    skillId: string;
  } | null>(null);

  if (!pet) return null;
  const inspectingPet = enrichStudentPet(pet);
  const elementMeta = getPetElementMetadata(inspectingPet.element);
  const ElementIcon = PET_ELEMENT_ICONS[elementMeta.iconName] || Sparkles;
  const totalStages = inspectingPet.totalStages || inspectingPet.evolutionStages?.length || 5;

  const activePetSkill = externalActivePetSkill !== undefined ? externalActivePetSkill : internalActiveSkill;
  const onSetActivePetSkill = externalOnSetActivePetSkill || setInternalActiveSkill;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl rounded-3xl bg-white dark:bg-stone-900 border border-amber-300 dark:border-amber-800 shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close Evolution Tree"
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-500"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider flex-wrap">
            <span className={cn('px-2.5 py-0.5 rounded-full flex items-center gap-1 border shadow-xs', elementMeta.badgeClass)}>
              <ElementIcon className="w-3.5 h-3.5" />
              {elementMeta.label} Element
            </span>
            <span className="text-amber-600 dark:text-amber-400 font-extrabold flex items-center gap-1">
              <GitFork className="w-3.5 h-3.5" /> Evolution Tree
            </span>
          </div>
          <h3 className="text-2xl font-extrabold text-stone-900 dark:text-white mt-1">
            {`${inspectingPet.species} Evolution Tree`}
          </h3>
          <p className="text-xs text-stone-500 mt-1">
            {`All ${totalStages} evolution stages and level requirements.`}
          </p>
        </div>

        {/* Tree Progression List */}
        <div className="space-y-4">
          {inspectingPet.evolutionStages?.map((stage) => {
            const stageSkill = inspectingPet.skills?.find(
              (skill) => skill.requiredLevel === stage.minLevel
            );

            return (
              <PetEvolutionStageNode
                key={stage.stage}
                stage={stage}
                petId={inspectingPet.id}
                petLevel={inspectingPet.level}
                currentStageLevel={inspectingPet.stageLevel}
                stageSkill={stageSkill}
                activePetSkill={activePetSkill}
                onSetActivePetSkill={onSetActivePetSkill}
              />
            );
          })}
        </div>

        <div className="flex justify-end pt-2">
          <Button variant="primary" onClick={onClose}>
            Got it
          </Button>
        </div>
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// Celebration Modals (Extracted for readability)
// ---------------------------------------------------------------------------

interface PetEvolvedCelebrationModalProps {
  celebration: { pet: StudentPet; stageInfo: EvolutionStageInfo } | null;
  onClose: () => void;
}

const PetEvolvedCelebrationModal: React.FC<PetEvolvedCelebrationModalProps> = ({
  celebration,
  onClose,
}) => {
  if (!celebration) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-md rounded-3xl bg-white dark:bg-stone-900 border-2 border-amber-400 shadow-2xl p-6 text-center space-y-4">
        <div className="w-36 h-36 mx-auto rounded-3xl bg-gradient-to-b from-[#1c0e07] to-stone-950 flex items-center justify-center border-2 border-amber-400 overflow-hidden shadow-2xl animate-bounce">
          {celebration.stageInfo.imageUrl ? (
            <img
              src={celebration.stageInfo.imageUrl}
              alt={celebration.stageInfo.name}
              className="w-full h-full object-contain p-2"
            />
          ) : (
            <span className="text-6xl">{celebration.stageInfo.avatarEmoji}</span>
          )}
        </div>
        <div className="space-y-1">
          <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-amber-100 text-amber-800 border border-amber-300">
            ✨ Solar Evolution Achieved! ✨
          </span>
          <h3 className="text-2xl font-extrabold text-stone-900 dark:text-white pt-1">
            {celebration.stageInfo.name}
          </h3>
          <p className="text-xs text-amber-600 font-bold">
            Stage {celebration.stageInfo.stage} • {celebration.stageInfo.title}
          </p>
        </div>
        <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
          {celebration.stageInfo.description}
        </p>
        <Button
          variant="primary"
          onClick={onClose}
          className="bg-amber-500 hover:bg-amber-600 font-extrabold w-full py-3"
        >
          Embrace Evolution 🔥
        </Button>
      </div>
    </div>
  );
};

interface PetHatchedCelebrationModalProps {
  celebration: StudentPet | null;
  onClose: () => void;
}

const PetHatchedCelebrationModal: React.FC<PetHatchedCelebrationModalProps> = ({
  celebration,
  onClose,
}) => {
  if (!celebration) return null;
  const celebrationImg = resolvePetImageUrl(celebration.imageName, celebration.imageUrl);
  const elements = celebration.elements && celebration.elements.length > 0
    ? celebration.elements
    : [celebration.element];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-md rounded-3xl bg-white dark:bg-stone-900 border-2 border-amber-400 shadow-2xl p-6 text-center space-y-4">
        <div className="w-32 h-32 mx-auto rounded-3xl bg-gradient-to-b from-[#1c0e07] to-stone-950 flex items-center justify-center border-2 border-amber-400 overflow-hidden shadow-2xl animate-bounce">
          {celebrationImg ? (
            <img
              src={celebrationImg}
              alt={celebration.name}
              className="w-full h-full object-contain p-2"
            />
          ) : (
            <span className="text-6xl">{celebration.avatarEmoji}</span>
          )}
        </div>
        <div className="space-y-1">
          <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-amber-100 text-amber-800 border border-amber-300">
            New Pet Awakened!
          </span>
          <h3 className="text-2xl font-extrabold text-stone-900 dark:text-white pt-1">
            {celebration.name}
          </h3>
          <div className="flex items-center justify-center gap-2 pt-1 flex-wrap">
            {elements.map((el, idx) => {
              const meta = getPetElementMetadata(el);
              const Icon = PET_ELEMENT_ICONS[meta.iconName] || Sparkles;
              return (
                <span
                  key={`${el}-${idx}`}
                  className={cn(
                    'px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase flex items-center gap-1 border shadow-xs',
                    meta.badgeClass
                  )}
                >
                  <Icon className="w-3 h-3" />
                  {meta.label}
                </span>
              );
            })}
            {celebration.speciesTypes?.map((st) => {
              const meta = getPetSpeciesTypeMetadata(st);
              const SpeciesIcon = PET_SPECIES_TYPE_ICONS[meta.iconName] || PET_ELEMENT_ICONS[meta.iconName] || PawPrint;
              return (
                <span
                  key={st}
                  className={cn('p-1 rounded-full border shadow-xs flex items-center justify-center', meta.badgeClass)}
                  title={`Species Type: ${meta.label}`}
                  aria-label={`Species Type: ${meta.label}`}
                >
                  <SpeciesIcon className="w-3 h-3" />
                </span>
              );
            })}
          </div>
          <p className="text-xs text-stone-500 pt-0.5">
            {celebration.species} • {celebration.rarity} Rarity
          </p>
        </div>

        <div className="p-3 rounded-2xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-800 text-xs text-stone-600 dark:text-stone-300">
          ✨ Bond established through exam integrity. Nurture your pet with stars to evolve into higher cosmic forms!
        </div>

        <Button
          variant="primary"
          onClick={onClose}
          className="bg-amber-500 hover:bg-amber-600 font-extrabold w-full py-3"
        >
          Meet {celebration.name} in Sanctuary 💖
        </Button>
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// Full Image Modal (Extracted for readability)
// ---------------------------------------------------------------------------

interface PetFullImageModalProps {
  data: FullImageModalData | null;
  onClose: () => void;
  isModalPetWobbling: boolean;
  onWobble: () => void;
}

const PetFullImageModal: React.FC<PetFullImageModalProps> = ({
  data,
  onClose,
  isModalPetWobbling,
  onWobble,
}) => {
  if (!data) return null;

  const elements = data.elements && data.elements.length > 0
    ? data.elements
    : data.element
    ? [data.element]
    : [];

  const speciesTypes = data.speciesTypes && data.speciesTypes.length > 0
    ? data.speciesTypes
    : [normalizePetSpeciesType(data.species || data.stageName)];

  return (
    <div
      role="dialog"
      aria-modal="true"
      data-testid="pet-full-image-modal"
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-2xl w-full bg-gradient-to-b from-[#1c0e07] via-[#0d0604] to-stone-900 border border-amber-600/40 rounded-3xl p-6 shadow-2xl flex flex-col items-center gap-4 text-center overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-40">
          <div className="w-80 h-80 rounded-full bg-amber-500/20 blur-3xl animate-pulse" />
        </div>

        <button
          type="button"
          aria-label="Close"
          data-testid="close-full-image-modal"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-stone-900/80 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-700/60 transition-colors cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col items-center gap-2 mt-2 z-10 w-full max-w-lg">
          <div className="flex items-center gap-2.5 flex-wrap justify-center">
            <h3 className="text-2xl font-black text-amber-200 font-serif tracking-wide">
              {data.name}
            </h3>
            {data.rarity && (
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-rose-950/80 text-rose-300 border border-rose-500/40 shadow-xs">
                {data.rarity}
              </span>
            )}
            {data.stageName && (
              <span className="text-xs font-bold text-stone-400">
                • {data.stageName}
              </span>
            )}
          </div>

          <div className="w-full bg-stone-950/60 border border-stone-800/80 rounded-2xl px-4 py-2.5 flex flex-col gap-2 mt-1 shadow-inner text-left">
            <div data-testid="pet-preview-elements-row" className="flex items-center gap-2.5 flex-wrap">
              <span className="text-xs font-bold text-stone-400 min-w-[64px]">
                Elements:
              </span>
              <div className="flex items-center gap-1.5 flex-wrap">
                {elements.map((el, idx) => {
                  const meta = getPetElementMetadata(el);
                  const Icon = PET_ELEMENT_ICONS[meta.iconName] || Sparkles;
                  return (
                    <span
                      key={`${el}-${idx}`}
                      className={cn(
                        'px-2.5 py-0.5 rounded-full text-[11px] font-extrabold uppercase flex items-center gap-1 border shadow-xs',
                        meta.badgeClass
                      )}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      {meta.label}
                    </span>
                  );
                })}
              </div>
            </div>

            <div data-testid="pet-preview-species-row" className="flex items-center gap-2.5 flex-wrap">
              <span className="text-xs font-bold text-stone-400 min-w-[64px]">
                Species:
              </span>
              <div className="flex items-center gap-1.5 flex-wrap">
                {speciesTypes.map((st) => {
                  const meta = getPetSpeciesTypeMetadata(st);
                  const SpeciesIcon =
                    PET_SPECIES_TYPE_ICONS[meta.iconName] ||
                    PET_ELEMENT_ICONS[meta.iconName] ||
                    PawPrint;
                  return (
                    <span
                      key={st}
                      className={cn(
                        'px-2.5 py-0.5 rounded-full text-[11px] font-extrabold flex items-center gap-1 border shadow-xs',
                        meta.badgeClass
                      )}
                    >
                      <SpeciesIcon className="w-3.5 h-3.5" />
                      {meta.label}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-h-[70vh] flex items-center justify-center p-4 z-10">
          <img
            src={data.imageUrl}
            alt={data.stageName}
            onClick={(e) => {
              e.stopPropagation();
              onWobble();
            }}
            className={cn(
              'max-h-[60vh] max-w-full object-contain filter drop-shadow-[0_20px_35px_rgba(245,158,11,0.45)] transition-transform duration-300 cursor-pointer select-none hover:scale-105 active:scale-95 animate-pet-float-slow',
              isModalPetWobbling && 'animate-pet-wobble'
            )}
          />
        </div>
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// Pet Card Subcomponents (Extracted for readability)
// ---------------------------------------------------------------------------

interface PetCardImageBannerProps {
  pet: StudentPet;
  displayedImageUrl?: string;
  displayedStageName: string;
  isDisplayedStageLocked: boolean;
  displayedStageMinLevel?: number;
  wobblingPetId: string | null;
  onPetClick: () => void;
  onOpenFullImageModal: () => void;
}

const PetCardImageBanner: React.FC<PetCardImageBannerProps> = ({
  pet,
  displayedImageUrl,
  displayedStageName,
  isDisplayedStageLocked,
  displayedStageMinLevel,
  wobblingPetId,
  onPetClick,
  onOpenFullImageModal,
}) => {
  const elements = pet.elements && pet.elements.length > 0 ? pet.elements : [pet.element];

  return (
    <div
      className="relative h-64 w-full bg-gradient-to-b from-[#1c0e07] via-[#0d0604] to-stone-900 overflow-hidden flex items-center justify-center p-3 cursor-pointer group"
      onClick={onPetClick}
    >
      {displayedImageUrl ? (
        <img
          src={displayedImageUrl}
          alt={displayedStageName}
          className={cn(
            'h-full w-auto max-w-full object-contain transition-transform duration-300 select-none',
            isDisplayedStageLocked
              ? 'brightness-0 opacity-40 contrast-200 drop-shadow-[0_0_15px_rgba(0,0,0,0.8)]'
              : cn(
                  'filter drop-shadow-[0_10px_20px_rgba(245,158,11,0.3)] animate-pet-float animate-pet-glow group-hover:scale-105 active:scale-95',
                  wobblingPetId === pet.id && 'animate-pet-wobble'
                )
          )}
        />
      ) : (
        <div
          className={cn(
            'text-6xl filter drop-shadow select-none transition-transform duration-300',
            isDisplayedStageLocked
              ? 'opacity-40 grayscale'
              : cn('animate-pet-float', wobblingPetId === pet.id && 'animate-pet-wobble')
          )}
        >
          {pet.avatarEmoji}
        </div>
      )}

      {isDisplayedStageLocked && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-[1px] p-2 text-center pointer-events-none">
          <Lock className="w-8 h-8 text-amber-400 mb-1 drop-shadow" />
          <span className="text-xs font-black uppercase text-amber-300 tracking-wider">
            Level {displayedStageMinLevel} Required
          </span>
          <span className="text-[10px] text-stone-300 font-semibold mt-0.5">
            Locked Evolution Shadow
          </span>
        </div>
      )}

      {/* Level, Rarity, and Vertical Species Type Badges */}
      <div className="absolute top-3 left-3 flex flex-col items-start gap-2 z-10">
        <div className="flex items-center gap-1.5">
          <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-amber-500 text-white shadow-md">
            Lvl {pet.level}
          </span>
          {pet.rarity && (
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-rose-950/80 text-rose-300 border border-rose-500/40 backdrop-blur-sm">
              {pet.rarity}
            </span>
          )}
        </div>

        {pet.speciesTypes && pet.speciesTypes.length > 0 && (
          <div
            data-testid={`pet-species-types-vertical-${pet.id}`}
            className="flex flex-col items-start gap-1.5 pt-0.5"
          >
            {pet.speciesTypes.map((st) => {
              const meta = getPetSpeciesTypeMetadata(st);
              const SpeciesIcon =
                PET_SPECIES_TYPE_ICONS[meta.iconName] ||
                PET_ELEMENT_ICONS[meta.iconName] ||
                PawPrint;
              return (
                <div
                  key={st}
                  data-testid={`pet-species-type-${pet.id}-${st.toLowerCase()}`}
                  className={cn(
                    'p-1.5 rounded-full backdrop-blur-md border shadow-md flex items-center justify-center transition-transform hover:scale-110 group-hover:scale-105',
                    meta.badgeClass
                  )}
                  title={`Species Type: ${meta.label}`}
                  aria-label={`Species Type: ${meta.label}`}
                >
                  <SpeciesIcon className="w-3.5 h-3.5" />
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Right side: Equipped Companion & Vertical Element Badges */}
      <div className="absolute top-3 right-3 flex flex-col items-end gap-2 z-10">
        {pet.isEquipped && (
          <div className="px-2.5 py-1 rounded-full bg-amber-950/80 border border-amber-400/80 text-amber-300 text-[10px] font-extrabold uppercase tracking-wider backdrop-blur-sm flex items-center gap-1 shadow-sm">
            <Crown className="w-3 h-3 text-amber-400" />
            Active Companion
          </div>
        )}

        <div
          data-testid={`pet-elements-vertical-${pet.id}`}
          className="flex flex-col items-end gap-1.5"
        >
          {elements.map((el, idx) => {
            const elementMeta = getPetElementMetadata(el);
            const ElementIcon = PET_ELEMENT_ICONS[elementMeta.iconName] || Sparkles;
            return (
              <div
                key={`${el}-${idx}`}
                data-testid={idx === 0 ? `pet-element-${pet.id}` : `pet-element-${pet.id}-${idx}`}
                className={cn(
                  'px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider flex items-center gap-1 backdrop-blur-md border shadow-md transition-transform hover:scale-105',
                  elementMeta.badgeClass
                )}
                title={`Element: ${elementMeta.label}`}
                aria-label={`Element: ${elementMeta.label}`}
              >
                <ElementIcon className="w-3.5 h-3.5" />
                <span>{elementMeta.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      {displayedImageUrl && !isDisplayedStageLocked && (
        <button
          type="button"
          data-testid={`view-full-image-${pet.id}`}
          aria-label="View full image"
          title="View full image"
          onClick={(e) => {
            e.stopPropagation();
            onOpenFullImageModal();
          }}
          className="absolute bottom-3 right-3 p-1.5 rounded-xl bg-stone-950/80 hover:bg-stone-900 text-stone-300 hover:text-white border border-stone-700/60 transition-all hover:scale-110 shadow-md cursor-pointer z-10"
        >
          <Maximize2 className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

interface PetCardStageSelectorProps {
  petId: string;
  stages: EvolutionStageInfo[];
  activeStageNum: number;
  petLevel: number;
  onSwitchStage: (petId: string, stageNum: number) => void;
}

const PetCardStageSelector: React.FC<PetCardStageSelectorProps> = ({
  petId,
  stages,
  activeStageNum,
  petLevel,
  onSwitchStage,
}) => {
  const stagesCount = stages.length;

  return (
    <div className="space-y-1.5 pt-1">
      <div className="flex justify-between items-center text-[10px] uppercase font-bold text-stone-500">
        <span>Inspect Evolution Forms</span>
        <span className="text-amber-600 font-bold">{stagesCount} Levels in Stitch</span>
      </div>
      <div
        className={cn(
          'grid gap-1',
          stagesCount <= 3
            ? 'grid-cols-3'
            : stagesCount === 4
            ? 'grid-cols-4'
            : stagesCount === 5
            ? 'grid-cols-5'
            : stagesCount === 6
            ? 'grid-cols-6'
            : 'grid-cols-4 sm:grid-cols-8'
        )}
      >
        {stages.map((stage) => {
          const isSelected = activeStageNum === stage.stage;
          const isUnlocked = petLevel >= stage.minLevel;
          return (
            <button
              key={stage.stage}
              type="button"
              onClick={() => onSwitchStage(petId, stage.stage)}
              className={cn(
                'py-1.5 px-0.5 rounded-lg text-[10px] font-extrabold transition-all border text-center flex flex-col items-center justify-center gap-0.5',
                isSelected
                  ? 'bg-amber-500 text-white border-amber-400 shadow-sm ring-1 ring-amber-300'
                  : isUnlocked
                  ? 'bg-amber-50/80 dark:bg-amber-950/50 text-amber-900 dark:text-amber-200 border-amber-200 dark:border-amber-800'
                  : 'bg-stone-100 dark:bg-stone-800 text-stone-500 dark:text-stone-400 border-stone-200 dark:border-stone-700 hover:bg-stone-200'
              )}
            >
              <span>{isUnlocked ? stage.avatarEmoji : '🔒'}</span>
              <span>Lvl {stage.minLevel}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

interface PetCardAbilitiesProps {
  pet: StudentPet;
  displayedImageUrl?: string;
  activePetSkill: { petId: string; skillId: string } | null;
  onOpenEvolutionModal: (pet: StudentPet) => void;
  onSetActivePetSkill: (skill: { petId: string; skillId: string } | null) => void;
}

const PetCardAbilities: React.FC<PetCardAbilitiesProps> = ({
  pet,
  displayedImageUrl,
  activePetSkill,
  onOpenEvolutionModal,
  onSetActivePetSkill,
}) => {
  if (!pet.skills || pet.skills.length === 0) return null;

  const unlockedSkills = pet.skills.filter((skill) => pet.level >= skill.requiredLevel);
  const latestUnlockedSkill = unlockedSkills[unlockedSkills.length - 1];

  return (
    <section className="space-y-2" aria-label={`${pet.name} abilities`}>
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-extrabold uppercase tracking-wide text-stone-500">
          Abilities
        </span>
        <button
          type="button"
          onClick={() => onOpenEvolutionModal(pet)}
          className="flex items-center gap-1 text-[10px] font-bold text-violet-600 hover:text-violet-500 dark:text-violet-300 dark:hover:text-violet-200"
        >
          {pet.skills.length} skills <Info className="h-3 w-3" aria-hidden="true" />
        </button>
      </div>
      {latestUnlockedSkill ? (
        <ExamIntegrityPetSkill
          skill={latestUnlockedSkill}
          posterUrl={displayedImageUrl}
          open={
            activePetSkill?.petId === pet.id &&
            activePetSkill.skillId === latestUnlockedSkill.id
          }
          onOpenChange={(open) =>
            onSetActivePetSkill(
              open ? { petId: pet.id, skillId: latestUnlockedSkill.id } : null
            )
          }
        />
      ) : (
        <p className="text-xs font-medium text-stone-500">
          Your first ability unlocks at level {pet.skills[0].requiredLevel}.
        </p>
      )}
    </section>
  );
};

export interface PetCardProps {
  pet: StudentPet;
  starBalance: number;
  activeStageNum: number;
  wobblingPetId: string | null;
  activePetSkill: { petId: string; skillId: string } | null;
  onSetPreviewStage: (petId: string, stageNum: number) => void;
  onSetWobblingPetId: (petId: string | null) => void;
  onOpenEvolutionModal: (pet: StudentPet) => void;
  onOpenFullImageModal: (data: FullImageModalData) => void;
  onSetActivePetSkill: (skill: { petId: string; skillId: string } | null) => void;
  onGrowPet: (pet: StudentPet) => void;
  onEquipPet: (pet: StudentPet) => void;
}

export const PetCard: React.FC<PetCardProps> = ({
  pet,
  starBalance,
  activeStageNum,
  wobblingPetId,
  activePetSkill,
  onSetPreviewStage,
  onSetWobblingPetId,
  onOpenEvolutionModal,
  onOpenFullImageModal,
  onSetActivePetSkill,
  onGrowPet,
  onEquipPet,
}) => {
  const isMaxLevel = pet.level >= (pet.maxLevel || 10);
  const expPercent = isMaxLevel
    ? 100
    : Math.min(100, Math.round((pet.currentExp / pet.expNeeded) * 100));
  const canGrow = !isMaxLevel && starBalance >= pet.growthCostInStars;
  const stagesCount = pet.evolutionStages?.length || 0;
  const hasStages = stagesCount > 0;

  const displayedStage = hasStages
    ? pet.evolutionStages?.[activeStageNum - 1]
    : undefined;

  const resolvePetImage = (imgName?: string, imgUrl?: string): string | undefined => {
    if (imgName && PET_IMAGE_MAP[imgName]) return PET_IMAGE_MAP[imgName];
    return imgUrl;
  };

  const displayedImageUrl =
    resolvePetImage(displayedStage?.imageName, displayedStage?.imageUrl) ||
    resolvePetImage(pet.imageName, pet.imageUrl);
  const displayedStageName = displayedStage?.name || pet.stageName;
  const isDisplayedStageLocked = Boolean(
    hasStages && displayedStage && pet.level < displayedStage.minLevel
  );

  const handlePetArtClick = () => {
    if (!isDisplayedStageLocked) {
      onSetWobblingPetId(pet.id);
      setTimeout(() => onSetWobblingPetId(null), 500);
    }
  };

  return (
    <div
      data-testid={`pet-card-${pet.id}`}
      className={cn(
        'rounded-3xl bg-white dark:bg-stone-900 border-2 shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between',
        pet.isEquipped
          ? 'border-amber-400 dark:border-amber-600 shadow-amber-500/10'
          : 'border-stone-200 dark:border-stone-800'
      )}
    >
      {/* 3D Creature Art Banner */}
      <PetCardImageBanner
        pet={pet}
        displayedImageUrl={displayedImageUrl}
        displayedStageName={displayedStageName}
        isDisplayedStageLocked={isDisplayedStageLocked}
        displayedStageMinLevel={displayedStage?.minLevel}
        wobblingPetId={wobblingPetId}
        onPetClick={handlePetArtClick}
        onOpenFullImageModal={() =>
          onOpenFullImageModal({
            name: pet.name,
            stageName: displayedStageName,
            imageUrl: displayedImageUrl || '',
            element: pet.element,
            elements: pet.elements,
            speciesTypes: pet.speciesTypes,
            rarity: pet.rarity,
            species: pet.species,
          })
        }
      />

      {/* Card Body */}
      <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          <div>
            <h3 className="font-extrabold text-xl text-stone-900 dark:text-white">
              {pet.name}
            </h3>
          </div>

          {/* Stage Badge & Evolution Inspection Link (Renamed to Evolution Tree) */}
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-amber-50/70 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-900/60 text-xs">
            <div className="flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-amber-500" />
              <span className="font-bold text-amber-900 dark:text-amber-200">
                Stage {activeStageNum}/{stagesCount || 5}: {displayedStageName}
              </span>
            </div>
            {hasStages && (
              <button
                type="button"
                onClick={() => onOpenEvolutionModal(pet)}
                className="text-[11px] font-bold text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1"
              >
                <GitFork className="w-3 h-3" /> Evolution Tree
              </button>
            )}
          </div>

          {/* Abilities */}
          <PetCardAbilities
            pet={pet}
            displayedImageUrl={displayedImageUrl}
            activePetSkill={activePetSkill}
            onOpenEvolutionModal={onOpenEvolutionModal}
            onSetActivePetSkill={onSetActivePetSkill}
          />

          {/* Multi-Stage Selector */}
          {hasStages && (
            <PetCardStageSelector
              petId={pet.id}
              stages={pet.evolutionStages || []}
              activeStageNum={activeStageNum}
              petLevel={pet.level}
              onSwitchStage={onSetPreviewStage}
            />
          )}

          {/* Level / EXP Progress */}
          <div className="space-y-1 pt-1">
            <div className="flex justify-between text-xs font-bold text-stone-600 dark:text-stone-300">
              <span>Experience</span>
              <span>
                {isMaxLevel
                  ? 'MAX LEVEL'
                  : `${pet.currentExp} / ${pet.expNeeded} XP (${expPercent}%)`}
              </span>
            </div>
            <ProgressBar value={expPercent} className="h-2.5" />
          </div>

          {/* Pet Attributes */}
          <div className="grid grid-cols-3 gap-2 p-2.5 rounded-2xl bg-stone-50 dark:bg-stone-800/60 border border-stone-100 dark:border-stone-800 text-center text-xs">
            <div>
              <div className="text-stone-400 font-medium flex items-center justify-center gap-1">
                <Heart className="w-3 h-3 text-rose-500" />
                Vitality
              </div>
              <div className="font-extrabold text-stone-800 dark:text-stone-200 mt-0.5">
                {pet.stats.vitality}
              </div>
            </div>
            <div>
              <div className="text-stone-400 font-medium flex items-center justify-center gap-1">
                <Zap className="w-3 h-3 text-cyan-500" />
                Wisdom
              </div>
              <div className="font-extrabold text-stone-800 dark:text-stone-200 mt-0.5">
                {pet.stats.wisdom}
              </div>
            </div>
            <div>
              <div className="text-stone-400 font-medium flex items-center justify-center gap-1">
                <Sun className="w-3 h-3 text-amber-500" />
                Radiance
              </div>
              <div className="font-extrabold text-stone-800 dark:text-stone-200 mt-0.5">
                {pet.stats.solarRadiance || pet.stats.integrityBond}
              </div>
            </div>
          </div>
        </div>

        {/* Action CTA Buttons */}
        <div className="pt-3 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={() => onEquipPet(pet)}
            className={cn(
              'px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1',
              pet.isEquipped
                ? 'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border border-amber-300'
                : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200'
            )}
          >
            {pet.isEquipped ? <Check className="w-3.5 h-3.5" /> : <Crown className="w-3.5 h-3.5" />}
            {pet.isEquipped ? 'Equipped' : 'Equip Companion'}
          </button>

          <button
            type="button"
            onClick={() => onGrowPet(pet)}
            disabled={!canGrow || isMaxLevel}
            data-testid={`grow-pet-btn-${pet.id}`}
            className={cn(
              'px-4 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wide transition-all',
              isMaxLevel
                ? 'bg-stone-200 dark:bg-stone-800 text-stone-400 dark:text-stone-500 cursor-not-allowed border border-stone-300/40 dark:border-stone-700/40'
                : canGrow
                ? 'bg-amber-500 hover:bg-amber-600 text-white shadow-[0_3px_0_#b45309] active:translate-y-[2px] active:shadow-[0_1px_0_#b45309]'
                : 'bg-stone-200 dark:bg-stone-800 text-stone-400 dark:text-stone-600 cursor-not-allowed'
            )}
          >
            {isMaxLevel ? 'Max Level' : `Grow (${pet.growthCostInStars} ⭐)`}
          </button>
        </div>
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// Main Component
// ---------------------------------------------------------------------------

export const ExamIntegrityPetHatchery: React.FC<ExamIntegrityPetHatcheryProps> = ({
  starBalance = 450,
  crackCostInStars = 15,
  incubatingEggs = DEFAULT_INCUBATING_EGGS,
  pets = DEFAULT_STUDENT_PETS,
  defaultTab = 'incubator',
  onGrowPet,
  onEggHatched,
  onStrikeCrack,
  onEquipEgg,
  onEquipPet,
  initialPreviewPet,
  className,
}) => {
  const [activeTab, setActiveTab] = useState<'incubator' | 'pets'>(
    defaultTab === 'pets' ? 'pets' : 'incubator'
  );
  const [currentEggs, setCurrentEggs] = useState<IncubatingEgg[]>(incubatingEggs);
  const [currentPets, setCurrentPets] = useState<StudentPet[]>(() =>
    pets.map(enrichStudentPet)
  );
  const [selectedEggIndex, setSelectedEggIndex] = useState<number>(0);
  const [hatchedCelebration, setHatchedCelebration] = useState<StudentPet | null>(null);
  const [evolvedCelebration, setEvolvedCelebration] = useState<{
    pet: StudentPet;
    stageInfo: EvolutionStageInfo;
  } | null>(null);
  const [inspectingEvolutionPet, setInspectingEvolutionPet] = useState<StudentPet | null>(null);
  const [previewStages, setPreviewStages] = useState<Record<string, number>>({});
  const [fullImageModalData, setFullImageModalData] = useState<FullImageModalData | null>(() => {
    if (!initialPreviewPet) return null;
    const enriched = enrichStudentPet(initialPreviewPet);
    return {
      name: enriched.name,
      stageName: enriched.stageName || enriched.name,
      imageUrl: resolvePetImageUrl(enriched.imageName, enriched.imageUrl) || enriched.imageUrl || '',
      element: enriched.element,
      elements: enriched.elements,
      speciesTypes: enriched.speciesTypes,
      rarity: enriched.rarity,
      species: enriched.species,
    };
  });
  const [wobblingPetId, setWobblingPetId] = useState<string | null>(null);
  const [isModalPetWobbling, setIsModalPetWobbling] = useState(false);
  const [activePetSkill, setActivePetSkill] = useState<{
    petId: string;
    skillId: string;
  } | null>(null);

  useEffect(() => {
    setCurrentEggs(incubatingEggs);
    setSelectedEggIndex((prev) =>
      incubatingEggs.length === 0 ? 0 : Math.min(prev, incubatingEggs.length - 1)
    );
  }, [incubatingEggs]);

  useEffect(() => {
    setCurrentPets(pets.map(enrichStudentPet));
  }, [pets]);

  // Incubator real-time countdown timer tick
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEggs((prev) => {
        let hasHatching = false;
        const next = prev.map((egg) => {
          if (egg.remainingSeconds !== undefined && egg.remainingSeconds > 0) {
            hasHatching = true;
            return {
              ...egg,
              remainingSeconds: Math.max(0, egg.remainingSeconds - 1),
            };
          }
          return egg;
        });
        return hasHatching ? next : prev;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const activeEgg = currentEggs[selectedEggIndex];
  const isHatching = Boolean(activeEgg && (activeEgg.remainingSeconds ?? 0) > 0);

  const handleStrikeCrack = async (amount: number = 0.25) => {
    if (!activeEgg) return;
    if (isHatching) return;
    if (activeEgg.crackProgress < 1.0 && starBalance < crackCostInStars) return;

    const newProgress = Math.min(1.0, activeEgg.crackProgress + amount);
    const secondsReduction = 7200; // 2 hours reduction per strike
    const newRemainingSeconds = Math.max(0, (activeEgg.remainingSeconds ?? 28800) - secondsReduction);

    const updated = currentEggs.map((egg, idx) =>
      idx === selectedEggIndex
        ? {
            ...egg,
            crackProgress: newProgress,
            remainingSeconds: newRemainingSeconds,
          }
        : egg
    );
    setCurrentEggs(updated);

    if (activeEgg.crackProgress < 1.0 && onStrikeCrack) {
      onStrikeCrack(activeEgg.id, crackCostInStars);
    }

    if (newProgress >= 1.0) {
      const finishHatching = (petToCelebrate: StudentPet) => {
        const enriched = enrichStudentPet(petToCelebrate);
        setHatchedCelebration(enriched);
        setCurrentPets((prev) => [
          enriched,
          ...prev.filter((p) => p.id !== enriched.id),
        ]);
      };

      if (onEggHatched) {
        try {
          const result = await Promise.resolve(onEggHatched(activeEgg.id));
          if (result && result.name) {
            finishHatching(result);
            return;
          }
        } catch {
          // fallback to client-side roll if server hatch fails
        }
      }

      let newPet: StudentPet;
      const eggName = (activeEgg.name || '').toLowerCase();
      const petName = (activeEgg.hatchedPetName || '').toLowerCase();
      const specName = (activeEgg.hatchedSpecies || '').toLowerCase();

      if (
        activeEgg.isMystery ||
        eggName.includes('mystery') ||
        petName.includes('?') ||
        petName.includes('mystery')
      ) {
        newPet = rollMysteryPet();
      } else if (eggName.includes('pipflick') || petName.includes('pipflick') || specName.includes('water drake')) {
        newPet = createPipflickPet(1, false);
      } else if (eggName.includes('embersqueak') || petName.includes('embersqueak') || specName.includes('solartiger')) {
        newPet = createEmbersqueakPet(1, false);
      } else if (eggName.includes('zephyrpuff') || petName.includes('pufftail') || specName.includes('zephyrhare')) {
        newPet = createZephyrpuffPet(1, false);
      } else if (eggName.includes('magmafang') || petName.includes('cinderpig') || specName.includes('boar')) {
        newPet = createMagmafangPet(1, false);
      } else if (eggName.includes('voltwing') || petName.includes('sparkhoot') || specName.includes('storm owl')) {
        newPet = createVoltwingPet(1, false);
      } else if (eggName.includes('thundercat') || petName.includes('sparkpaw') || specName.includes('storm tiger')) {
        newPet = createThundercatPet(1, false);
      } else if (eggName.includes('chrono chimera') || petName.includes('chronopip') || specName.includes('time sprite')) {
        newPet = createChronoChimeraPet(1, false);
      } else if (eggName.includes('shadowpanther') || petName.includes('umbralpaw') || specName.includes('eclipse panther')) {
        newPet = createShadowpantherPet(1, false);
      } else if (eggName.includes('stormstag') || petName.includes('sparkfawn') || specName.includes('thunder elk')) {
        newPet = createStormstagPet(1, false);
      } else if (eggName.includes('ocean leviathan') || petName.includes('astraea') || specName.includes('cosmic whale')) {
        newPet = createAstralLeviathanPet(1, false);
      } else if (eggName.includes('solar wyvern') || petName.includes('solarpup') || specName.includes('archon wyvern')) {
        newPet = createSolarWyvernPet(1, false);
      } else if (eggName.includes('chrono-draco') || petName.includes('chronowing') || specName.includes('temporal dragon')) {
        newPet = createChronoDracoPet(1, false);
      } else if (eggName.includes('aegis') || petName.includes('aegis') || specName.includes('paladin')) {
        newPet = createAegisPaladinPet(1, false);
      } else if (activeEgg.id === 'inc-egg-phoenix' || eggName.includes('phoenix')) {
        newPet = createFirePhoenixPet(1, false);
      } else if (activeEgg.id === 'inc-egg-void' || eggName.includes('void')) {
        newPet = createVoidDragonPet(1, false);
      } else if (activeEgg.id === 'inc-egg-1' || eggName.includes('astral') || eggName.includes('dragon')) {
        newPet = createAstralDragonPet(1, false);
      } else if (activeEgg.id === 'inc-egg-frost' || eggName.includes('frost')) {
        newPet = createFrostpawPet(1, false);
      } else if (activeEgg.id === 'inc-egg-sproutling' || eggName.includes('sprout')) {
        newPet = createSproutlingPet(1, false);
      } else {
        newPet = {
          id: `pet-${Date.now()}`,
          name: activeEgg.hatchedPetName,
          species: activeEgg.hatchedSpecies,
          rarity: activeEgg.rarity || 'Common',
          tier: activeEgg.tier,
          element: 'Normal',
          level: 1,
          maxLevel: 10,
          currentExp: 0,
          expNeeded: 100,
          growthCostInStars: 25,
          stats: {
            vitality: 60,
            wisdom: 60,
            integrityBond: 90,
            solarRadiance: 40,
          },
          avatarEmoji: '🐲',
          stageLevel: 1,
          stageName: 'Hatchling',
          isEquipped: false,
        };
      }
      finishHatching(newPet);
    }
  };

  const handleResetEgg = () => {
    if (!activeEgg) return;
    setCurrentEggs((prev) =>
      prev.map((egg, idx) =>
        idx === selectedEggIndex ? { ...egg, crackProgress: 0 } : egg
      )
    );
  };

  const handleEquipEgg = (egg: IncubatingEgg) => {
    const cost = egg.isEquipped ? 0 : egg.equipCostInStars || 0;
    if (!egg.isEquipped && starBalance < cost) return;

    setCurrentEggs((prev) =>
      prev.map((e) => ({
        ...e,
        isEquipped: e.id === egg.id,
      }))
    );

    if (onEquipEgg) {
      onEquipEgg(egg.id, cost);
    }
  };

  const handleEquipPet = (pet: StudentPet) => {
    setCurrentPets((prev) =>
      prev.map((p) => ({
        ...p,
        isEquipped: p.id === pet.id,
      }))
    );

    if (onEquipPet) {
      onEquipPet(pet.id);
    }
  };

  const handleGrowPet = (rawPet: StudentPet) => {
    const pet = enrichStudentPet(rawPet);
    if (pet.level >= (pet.maxLevel || 10)) return;
    if (starBalance < pet.growthCostInStars) return;

    const gainedExp = 60;
    const newExp = pet.currentExp + gainedExp;
    let newLevel = pet.level;
    let newExpNeeded = pet.expNeeded;
    let newStageLevel = pet.stageLevel;
    let newStageName = pet.stageName;
    let newEmoji = pet.avatarEmoji;
    let newImageUrl = pet.imageUrl;
    let didEvolve = false;
    let evolvedStage: EvolutionStageInfo | undefined;

    if (newExp >= pet.expNeeded && newLevel < pet.maxLevel) {
      newLevel += 1;
      newExpNeeded = Math.round(pet.expNeeded * 1.35);

      // Check multi-stage evolution thresholds
      if (pet.evolutionStages && pet.evolutionStages.length > 0) {
        const matchingStage = [...pet.evolutionStages]
          .reverse()
          .find((s) => newLevel >= s.minLevel);
        if (matchingStage && matchingStage.stage > pet.stageLevel) {
          newStageLevel = matchingStage.stage;
          newStageName = matchingStage.name;
          newEmoji = matchingStage.avatarEmoji;
          newImageUrl = matchingStage.imageUrl;
          didEvolve = true;
          evolvedStage = matchingStage;
        }
      } else {
        if (newLevel >= 6) {
          newStageLevel = 3;
          newStageName = 'Mythic Guardian';
          newEmoji = '🔥';
        } else if (newLevel >= 3) {
          newStageLevel = 2;
          newStageName = 'Adolescent';
        }
      }
    }

    const updatedPet: StudentPet = {
      ...pet,
      level: newLevel,
      currentExp: newExp >= pet.expNeeded ? newExp - pet.expNeeded : newExp,
      expNeeded: newExpNeeded,
      stageLevel: newStageLevel,
      stageName: newStageName,
      avatarEmoji: newEmoji,
      imageUrl: newImageUrl,
      stats: {
        vitality: Math.min(100, pet.stats.vitality + 5),
        wisdom: Math.min(100, pet.stats.wisdom + 5),
        integrityBond: Math.min(100, pet.stats.integrityBond + 3),
        solarRadiance: Math.min(100, (pet.stats.solarRadiance || 50) + 6),
      },
    };

    setCurrentPets((prev) => prev.map((p) => (p.id === pet.id ? updatedPet : p)));

    if (didEvolve && evolvedStage) {
      setEvolvedCelebration({ pet: updatedPet, stageInfo: evolvedStage });
    }

    if (onGrowPet) {
      onGrowPet(pet.id, pet.growthCostInStars);
    }
  };

  const handleSwitchPetStage = (petId: string, stageNum: number) => {
    setPreviewStages((prev) => ({ ...prev, [petId]: stageNum }));
  };

  return (
    <div
      className={cn('w-full max-w-7xl mx-auto space-y-6', className)}
      data-testid="exam-integrity-pet-hatchery"
    >
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            <Sparkles className="w-4 h-4" />
            Creature Sanctuary & Companion Arena
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-white mt-1">
            Pet Hatchery & Sanctuary
          </h2>
          <p className="text-sm text-stone-600 dark:text-stone-400 mt-1">
            Incubate eggs, hatch companion beasts, and nurture your pets.
          </p>
        </div>

        {/* Tab switchers */}
        <div className="flex p-1.5 rounded-full bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 overflow-x-auto">
          <button
            type="button"
            onClick={() => setActiveTab('incubator')}
            className={cn(
              'px-5 py-2 rounded-full text-xs font-extrabold transition-all whitespace-nowrap',
              activeTab === 'incubator'
                ? 'bg-amber-500 text-white shadow-md'
                : 'text-stone-600 dark:text-stone-300 hover:text-stone-900'
            )}
          >
            Incubator ({currentEggs.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('pets')}
            className={cn(
              'px-5 py-2 rounded-full text-xs font-extrabold transition-all whitespace-nowrap',
              activeTab === 'pets'
                ? 'bg-amber-500 text-white shadow-md'
                : 'text-stone-600 dark:text-stone-300 hover:text-stone-900'
            )}
          >
            My Pets ({currentPets.length})
          </button>
        </div>
      </div>

      {/* Incubator Tab */}
      {activeTab === 'incubator' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Egg Showcase / Interaction Viewport */}
          <div className="lg:col-span-8 rounded-3xl bg-gradient-to-b from-[#1c0e07] via-[#0d0604] to-[#050201] p-6 sm:p-8 text-[#fed7aa] flex flex-col justify-between min-h-[520px] relative overflow-hidden border border-amber-900/40 shadow-2xl">
            {activeEgg ? (
              <>
                {/* Stitch HUD Top Header */}
                <header className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 w-full">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-11 h-11 rounded-2xl bg-amber-950/70 border border-amber-700/40 shadow-lg text-amber-500 shrink-0">
                      <Flame className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-xl font-bold tracking-wide text-amber-100 font-serif">
                          {activeEgg.name}
                        </h3>
                        <span className="text-[10px] px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider bg-amber-900/60 border border-amber-600/40 text-amber-300">
                          {activeEgg.isMystery ? 'Mystery Rarity · 100% Luck Based' : `${activeEgg.rarity || 'Epic'} · Subdued Bronze & Amber`}
                        </span>
                        <span className="text-[10px] px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider bg-stone-900/80 border border-stone-700/60 text-stone-300">
                          ⏳ 8h Incubation ({formatHatchTime(activeEgg.crackProgress >= 1 ? 0 : (activeEgg.remainingSeconds ?? 28800))} left)
                        </span>
                      </div>
                      <p className="text-xs text-stone-400 mt-0.5">
                        Volcanic Hatchery Chamber · Drag to rotate · Tap or click to strike
                      </p>
                    </div>
                  </div>

                  {/* Badges & Equip Egg Button */}
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <button
                      type="button"
                      data-testid={`equip-egg-btn-${activeEgg.id}`}
                      onClick={() => handleEquipEgg(activeEgg)}
                      className={cn(
                        'px-3.5 py-1.5 rounded-xl text-xs font-extrabold transition-all flex items-center gap-1.5 shadow-md',
                        activeEgg.isEquipped
                          ? 'bg-amber-950/80 border border-amber-500/80 text-amber-200'
                          : 'bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-amber-50 border border-amber-400/50'
                      )}
                    >
                      {activeEgg.isEquipped ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-amber-400" /> Equipped Companion
                        </>
                      ) : (
                        <>
                          <Crown className="w-3.5 h-3.5" /> Equip Egg ({activeEgg.equipCostInStars || 0} ⭐)
                        </>
                      )}
                    </button>
                  </div>
                </header>

                {/* 3D Interactive Egg Canvas */}
                <div
                  data-testid="interactive-3d-egg-canvas"
                  onClick={() => handleStrikeCrack(0.25)}
                  className="flex-1 my-4 flex items-center justify-center cursor-pointer min-h-[300px]"
                >
                  <ThreeEggViewer
                    eggTier={activeEgg.tier}
                    crackProgress={activeEgg.crackProgress}
                    interactive
                    autoRotate
                    width="100%"
                    height="100%"
                  />
                </div>

                {/* Stitch HUD Bottom Panel */}
                <footer className="relative z-10 flex flex-col items-center gap-3 w-full max-w-xl mx-auto">
                  <div className="w-full bg-stone-950/85 backdrop-blur-xl border border-amber-800/40 rounded-2xl p-4 shadow-2xl flex flex-col gap-2">
                    <div className="flex items-center justify-between text-xs tracking-wider font-semibold">
                      <span className="text-stone-400 flex items-center gap-1.5 uppercase">
                        <Flame className="w-3.5 h-3.5 text-amber-500" />
                        Crack & Fissure Progress (8h Duration)
                      </span>
                      <span className="text-amber-400 font-bold font-mono">
                        {Math.round(activeEgg.crackProgress * 100)}% ({formatHatchTime(activeEgg.crackProgress >= 1 ? 0 : (activeEgg.remainingSeconds ?? 28800))} left)
                      </span>
                    </div>

                    <div className="w-full h-3 bg-stone-900 rounded-full overflow-hidden p-0.5 border border-amber-900/50">
                      <div
                        className="h-full bg-gradient-to-r from-amber-700 via-orange-600 to-amber-500 rounded-full transition-all duration-300 shadow-sm"
                        style={{ width: `${Math.round(activeEgg.crackProgress * 100)}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-stone-400 pt-0.5">
                      <span className="text-amber-200/90 font-medium">
                        {isHatching
                          ? '⏳ Hatching in progress. Cracking locked until incubation completes.'
                          : getEggCrackStatusText(activeEgg.crackProgress, activeEgg.crackProgress >= 1)}
                      </span>
                      <span className="text-amber-300/80 italic font-medium">
                        {isHatching ? 'Wait for incubation timer' : 'Click 3D Model or Strike Button'}
                      </span>
                    </div>
                  </div>

                  {/* Strike & Reset Buttons */}
                  <div className="flex items-center gap-3 w-full">
                    <button
                      type="button"
                      onClick={() => handleStrikeCrack(0.25)}
                      disabled={isHatching || (activeEgg.crackProgress < 1 && starBalance < crackCostInStars)}
                      className={cn(
                        'flex-1 py-3 px-6 rounded-xl border font-bold text-xs sm:text-sm tracking-wide flex items-center justify-center gap-2 transition-all shadow-lg active:scale-[0.98]',
                        isHatching
                          ? 'bg-stone-900/90 text-stone-400 border-stone-700/60 cursor-not-allowed opacity-80'
                          : activeEgg.crackProgress >= 1
                          ? 'bg-gradient-to-r from-orange-700 via-red-600 to-orange-800 text-white border-orange-400'
                          : starBalance < crackCostInStars
                          ? 'bg-stone-800 text-stone-500 border-stone-700 cursor-not-allowed opacity-60'
                          : 'bg-gradient-to-r from-amber-700 via-amber-600 to-amber-800 hover:from-amber-600 hover:to-amber-700 text-amber-50 border-amber-500/60'
                      )}
                    >
                      <EggStrikeButtonContent
                        isHatching={isHatching}
                        crackProgress={activeEgg.crackProgress}
                        remainingSeconds={activeEgg.remainingSeconds}
                        crackCostInStars={crackCostInStars}
                      />
                    </button>

                    <button
                      type="button"
                      onClick={handleResetEgg}
                      title="Reset Hatching"
                      className="py-3 px-4 rounded-xl bg-stone-900/90 hover:bg-stone-800/90 border border-stone-700/50 text-stone-300 hover:text-amber-200 font-semibold text-xs flex items-center justify-center gap-1.5 transition-all"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Reset</span>
                    </button>
                  </div>
                </footer>
              </>
            ) : (
              <div className="my-auto text-center space-y-3">
                <div className="text-5xl">🥚</div>
                <h4 className="text-lg font-bold text-stone-300">No Eggs in Incubator</h4>
                <p className="text-xs text-stone-400 max-w-sm">
                  Visit the Shop to acquire 3D eggs with your earned stars.
                </p>
              </div>
            )}
          </div>

          {/* Egg Queue List */}
          <div className="lg:col-span-4 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-6 space-y-4 shadow-sm">
            <h4 className="font-extrabold text-stone-900 dark:text-stone-100 text-sm uppercase tracking-wider">
              {`Incubator Queue (${currentEggs.length})`}
            </h4>
            {currentEggs.length === 0 ? (
              <div className="p-6 rounded-2xl border border-dashed border-stone-200 dark:border-stone-800 text-center space-y-1">
                <div className="text-2xl">🥚</div>
                <div className="text-xs font-bold text-stone-500">Queue is empty</div>
                <div className="text-[11px] text-stone-400">Adopt eggs in the shop to start incubating.</div>
              </div>
            ) : (
              <div className="space-y-3">
                {currentEggs.map((egg, idx) => (
                  <div
                    key={egg.id}
                    onClick={() => setSelectedEggIndex(idx)}
                    className={cn(
                      'p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between',
                      selectedEggIndex === idx
                        ? 'border-amber-500 bg-amber-50/50 dark:bg-amber-950/20 shadow-md'
                        : 'border-stone-200 dark:border-stone-800 hover:border-stone-300'
                    )}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5">
                        <div className="font-bold text-sm text-stone-900 dark:text-white">
                          {egg.name}
                        </div>
                        {egg.isEquipped && (
                          <span title="Equipped">
                            <Crown className="w-3.5 h-3.5 text-amber-500" />
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-stone-500">
                        Hatches into: {egg.hatchedPetName}
                      </div>
                      <EggQueueHatchStatus remainingSeconds={egg.remainingSeconds} />
                      <div className="text-[11px] font-bold text-stone-400">
                        {Math.round(egg.crackProgress * 100)}% Fissure Progress
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-stone-400" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Pets Sanctuary Tab */}
      {activeTab === 'pets' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentPets.map((rawPet) => {
            const pet = enrichStudentPet(rawPet);
            const activeStageNum = previewStages[pet.id] || pet.stageLevel;

            return (
              <PetCard
                key={pet.id}
                pet={pet}
                starBalance={starBalance}
                activeStageNum={activeStageNum}
                wobblingPetId={wobblingPetId}
                activePetSkill={activePetSkill}
                onSetPreviewStage={handleSwitchPetStage}
                onSetWobblingPetId={setWobblingPetId}
                onOpenEvolutionModal={setInspectingEvolutionPet}
                onOpenFullImageModal={setFullImageModalData}
                onSetActivePetSkill={setActivePetSkill}
                onGrowPet={handleGrowPet}
                onEquipPet={handleEquipPet}
              />
            );
          })}
        </div>
      )}

      {/* Evolution Tree Modal (Redesigned from Codex) */}
      <PetEvolutionModal
        pet={inspectingEvolutionPet}
        onClose={() => setInspectingEvolutionPet(null)}
        activePetSkill={activePetSkill}
        onSetActivePetSkill={setActivePetSkill}
      />

      {/* Evolution Celebration Modal */}
      <PetEvolvedCelebrationModal
        celebration={evolvedCelebration}
        onClose={() => setEvolvedCelebration(null)}
      />

      {/* Hatching Celebration Modal */}
      <PetHatchedCelebrationModal
        celebration={hatchedCelebration}
        onClose={() => setHatchedCelebration(null)}
      />

      {/* Full Image Preview Modal */}
      <PetFullImageModal
        data={fullImageModalData}
        onClose={() => setFullImageModalData(null)}
        isModalPetWobbling={isModalPetWobbling}
        onWobble={() => {
          setIsModalPetWobbling(true);
          setTimeout(() => setIsModalPetWobbling(false), 500);
        }}
      />
    </div>
  );
};
