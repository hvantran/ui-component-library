import React, { useState } from 'react';
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
  Eye,
} from 'lucide-react';
import { Button } from '../../atoms/Button';
import { ProgressBar } from '../../atoms/ProgressBar';
import { ThreeEggViewer, EggTier } from '../../molecules/ThreeEggViewer';
import { cn } from '../../../utils/cn';
import phoenixEggImg from '../../../assets/pets/phoenix-egg.png';
export * from './petsData';
import {
  type EvolutionStageInfo,
  type StudentPet,
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
  PET_CODEX_REGISTRY,
  ALL_PET_CODEX_REGISTRY,
} from './petsData';

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
    remainingSeconds: 25920,
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
  createFirePhoenixPet(1, true),
  {
    id: 'pet-1',
    name: 'Emberwing',
    species: 'Pyroling Dragon',
    rarity: 'Legendary',
    tier: 'dragon',
    element: 'Fire / Flame',
    level: 3,
    maxLevel: 10,
    currentExp: 140,
    expNeeded: 250,
    growthCostInStars: 50,
    isEquipped: false,
    stageLevel: 2,
    stageName: 'Adolescent',
    stats: {
      vitality: 78,
      wisdom: 64,
      integrityBond: 92,
      solarRadiance: 50,
    },
    avatarEmoji: '🐲',
  },
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

export const ExamIntegrityPetHatchery: React.FC<ExamIntegrityPetHatcheryProps> = ({
  starBalance = 450,
  incubatingEggs = DEFAULT_INCUBATING_EGGS,
  pets = DEFAULT_STUDENT_PETS,
  defaultTab = 'incubator',
  onGrowPet,
  onEggHatched,
  onEquipEgg,
  onEquipPet,
  className,
}) => {
  const [activeTab, setActiveTab] = useState<'incubator' | 'pets' | 'codex'>(defaultTab);
  const [currentEggs, setCurrentEggs] = useState<IncubatingEgg[]>(incubatingEggs);
  const [currentPets, setCurrentPets] = useState<StudentPet[]>(pets);
  const [selectedEggIndex, setSelectedEggIndex] = useState<number>(0);
  const [hatchedCelebration, setHatchedCelebration] = useState<StudentPet | null>(null);
  const [evolvedCelebration, setEvolvedCelebration] = useState<{
    pet: StudentPet;
    stageInfo: EvolutionStageInfo;
  } | null>(null);
  const [inspectingEvolutionPet, setInspectingEvolutionPet] = useState<StudentPet | null>(null);
  const [previewStages, setPreviewStages] = useState<Record<string, number>>({});
  const [selectedCodexPetKey, setSelectedCodexPetKey] = useState<string>('phoenix');
  const [codexRarityFilter, setCodexRarityFilter] = useState<string>('All');

  const activeEgg = currentEggs[selectedEggIndex];

  const handleStrikeCrack = (amount: number = 0.25) => {
    if (!activeEgg) return;
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

    if (newProgress >= 1.0) {
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
      setHatchedCelebration(newPet);
      setCurrentPets((prev) => [newPet, ...prev]);
      if (onEggHatched) {
        onEggHatched(activeEgg.id, newPet);
      }
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

  const handleGrowPet = (pet: StudentPet) => {
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
            Equip 3D eggs, hatch legendary companions, and explore all 5 divine solar levels of the Fire Phoenix.
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
          <button
            type="button"
            data-testid="codex-tab-btn"
            onClick={() => setActiveTab('codex')}
            className={cn(
              'px-5 py-2 rounded-full text-xs font-extrabold transition-all whitespace-nowrap flex items-center gap-1.5',
              activeTab === 'codex'
                ? 'bg-amber-500 text-white shadow-md'
                : 'text-stone-600 dark:text-stone-300 hover:text-stone-900'
            )}
          >
            <Flame className="w-3.5 h-3.5" />
            Phoenix Codex (All 5 Levels)
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

                    <div className="px-3 py-1.5 rounded-xl bg-stone-950/80 border border-amber-800/40 text-xs font-bold text-amber-200 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                      Core: Active
                    </div>
                  </div>
                </header>

                {/* 3D Interactive Egg Canvas */}
                <div className="w-full h-72 sm:h-80 relative flex items-center justify-center my-2 cursor-pointer">
                  <ThreeEggViewer
                    eggTier={activeEgg.tier}
                    crackProgress={activeEgg.crackProgress}
                    onTap={() => handleStrikeCrack(0.25)}
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
                        {getEggCrackStatusText(activeEgg.crackProgress, activeEgg.crackProgress >= 1)}
                      </span>
                      <span className="text-amber-300/80 italic font-medium">
                        Click 3D Model or Strike Button
                      </span>
                    </div>
                  </div>

                  {/* Strike & Reset Buttons */}
                  <div className="flex items-center gap-3 w-full">
                    <button
                      type="button"
                      onClick={() => handleStrikeCrack(0.25)}
                      className={cn(
                        'flex-1 py-3 px-6 rounded-xl border font-bold text-xs sm:text-sm tracking-wide flex items-center justify-center gap-2 transition-all shadow-lg active:scale-[0.98]',
                        activeEgg.crackProgress >= 1
                          ? 'bg-gradient-to-r from-orange-700 via-red-600 to-orange-800 text-white border-orange-400'
                          : 'bg-gradient-to-r from-amber-700 via-amber-600 to-amber-800 hover:from-amber-600 hover:to-amber-700 text-amber-50 border-amber-500/60'
                      )}
                    >
                      <Gavel className="w-4 h-4" />
                      <span>STRIKE & CRACK (+25%)</span>
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
              Incubator Queue ({currentEggs.length})
            </h4>
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
                    <div className="text-[11px] font-extrabold text-amber-600">
                      {Math.round(egg.crackProgress * 100)}% Hatched
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-stone-400" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Pets Sanctuary Tab */}
      {activeTab === 'pets' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentPets.map((pet) => {
            const expPercent = Math.round((pet.currentExp / pet.expNeeded) * 100);
            const canGrow = starBalance >= pet.growthCostInStars;
            const stagesCount = pet.evolutionStages?.length || 0;
            const hasStages = stagesCount > 0;

            // Current displayed stage (active or previewed)
            const activeStageNum = previewStages[pet.id] || pet.stageLevel;
            const displayedStage = hasStages
              ? pet.evolutionStages?.[activeStageNum - 1]
              : undefined;
            const displayedImageUrl = displayedStage?.imageUrl || pet.imageUrl;
            const displayedStageName = displayedStage?.name || pet.stageName;

            return (
              <div
                key={pet.id}
                data-testid={`pet-card-${pet.id}`}
                className={cn(
                  'rounded-3xl bg-white dark:bg-stone-900 border-2 shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between',
                  pet.isEquipped
                    ? 'border-amber-400 dark:border-amber-600 shadow-amber-500/10'
                    : 'border-stone-200 dark:border-stone-800'
                )}
              >
                {/* 3D Creature Art Banner from Stitch */}
                <div className="relative h-64 w-full bg-gradient-to-b from-[#1c0e07] via-[#0d0604] to-stone-900 overflow-hidden flex items-center justify-center p-3">
                  {displayedImageUrl ? (
                    <img
                      src={displayedImageUrl}
                      alt={displayedStageName}
                      className="h-full w-auto max-w-full object-contain filter drop-shadow-[0_10px_20px_rgba(245,158,11,0.3)] transition-transform duration-300 hover:scale-105"
                    />
                  ) : (
                    <div className="text-6xl filter drop-shadow">{pet.avatarEmoji}</div>
                  )}

                  {/* Level & Equipped Badges on Character Canvas */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-amber-500 text-white shadow-md">
                      Lvl {pet.level}
                    </span>
                    {pet.rarity && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-rose-950/80 text-rose-300 border border-rose-500/40 backdrop-blur-sm">
                        {pet.rarity}
                      </span>
                    )}
                  </div>

                  {pet.isEquipped && (
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-amber-950/80 border border-amber-400/80 text-amber-300 text-[10px] font-extrabold uppercase tracking-wider backdrop-blur-sm flex items-center gap-1">
                      <Crown className="w-3 h-3 text-amber-400" />
                      Active Companion
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-extrabold text-xl text-stone-900 dark:text-white">
                        {pet.name}
                      </h3>
                      <div className="text-xs text-stone-500 font-medium">
                        {pet.species} • <span className="text-amber-600 font-bold">{pet.element}</span>
                      </div>
                    </div>

                    {/* Stage Badge & Evolution Inspection Link */}
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
                          onClick={() => setInspectingEvolutionPet(pet)}
                          className="text-[11px] font-bold text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-0.5"
                        >
                          <Info className="w-3 h-3" /> Codex
                        </button>
                      )}
                    </div>

                    {/* Interactive Multi-Stage Preview Buttons */}
                    {hasStages && (
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
                          {pet.evolutionStages?.map((stage) => {
                            const isSelected = activeStageNum === stage.stage;
                            const isUnlocked = pet.level >= stage.minLevel;
                            return (
                              <button
                                key={stage.stage}
                                type="button"
                                onClick={() => handleSwitchPetStage(pet.id, stage.stage)}
                                className={cn(
                                  'py-1.5 px-0.5 rounded-lg text-[10px] font-extrabold transition-all border text-center flex flex-col items-center justify-center gap-0.5',
                                  isSelected
                                    ? 'bg-amber-500 text-white border-amber-400 shadow-sm ring-1 ring-amber-300'
                                    : isUnlocked
                                    ? 'bg-amber-50/80 dark:bg-amber-950/50 text-amber-900 dark:text-amber-200 border-amber-200 dark:border-amber-800'
                                    : 'bg-stone-100 dark:bg-stone-800 text-stone-500 dark:text-stone-400 border-stone-200 dark:border-stone-700 hover:bg-stone-200'
                                )}
                              >
                                <span>{stage.avatarEmoji}</span>
                                <span>Lvl {stage.minLevel}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Level / EXP Progress */}
                    <div className="space-y-1 pt-1">
                      <div className="flex justify-between text-xs font-bold text-stone-600 dark:text-stone-300">
                        <span>Experience</span>
                        <span>
                          {pet.currentExp} / {pet.expNeeded} XP ({expPercent}%)
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
                      onClick={() => handleEquipPet(pet)}
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
                      onClick={() => handleGrowPet(pet)}
                      disabled={!canGrow}
                      className={cn(
                        'px-4 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wide transition-all',
                        canGrow
                          ? 'bg-amber-500 hover:bg-amber-600 text-white shadow-[0_3px_0_#b45309] active:translate-y-[2px] active:shadow-[0_1px_0_#b45309]'
                          : 'bg-stone-200 dark:bg-stone-800 text-stone-400 dark:text-stone-600 cursor-not-allowed'
                      )}
                    >
                      Grow ({pet.growthCostInStars} ⭐)
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Codex Tab — All 5 Rarity Bestiary Showcase */}
      {activeTab === 'codex' && (() => {
        const activeCodexEntry = PET_CODEX_REGISTRY[selectedCodexPetKey] || PET_CODEX_REGISTRY.phoenix;
        const currentActivePet = currentPets.find((p) =>
          p.species.toLowerCase().includes(activeCodexEntry.name.toLowerCase()) ||
          p.name.toLowerCase() === activeCodexEntry.name.toLowerCase() ||
          (selectedCodexPetKey === 'phoenix' && p.species.includes('Phoenix'))
        );

        return (
          <div className="space-y-6" data-testid="phoenix-all-levels-codex">
            {/* Rarity Category Filter & Pet Selector Pills */}
            <div className="space-y-3 p-3 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm">
              <div className="flex flex-wrap items-center gap-1.5 border-b border-stone-100 dark:border-stone-800 pb-2.5">
                <span className="text-xs font-bold text-stone-500 uppercase px-2 tracking-wider">
                  Filter Rarity:
                </span>
                {['All', 'Common', 'Rare', 'Epic', 'Legendary', 'Mythic'].map((tier) => (
                  <button
                    key={tier}
                    type="button"
                    onClick={() => setCodexRarityFilter(tier)}
                    className={cn(
                      'px-3 py-1.5 rounded-lg text-xs font-extrabold transition-all',
                      codexRarityFilter === tier
                        ? 'bg-amber-500 text-white shadow-sm'
                        : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200'
                    )}
                  >
                    {tier}
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-stone-500 uppercase px-2 tracking-wider">
                  Select Bestiary:
                </span>
                {Object.values(ALL_PET_CODEX_REGISTRY)
                  .filter((entry) =>
                    codexRarityFilter === 'All' ? true : entry.rarity === codexRarityFilter
                  )
                  .map((entry) => (
                    <button
                      key={entry.key}
                      type="button"
                      data-testid={`codex-filter-${entry.key}`}
                      onClick={() => setSelectedCodexPetKey(entry.key)}
                      className={cn(
                        'px-3.5 py-2 rounded-xl text-xs font-extrabold transition-all flex items-center gap-1.5 border',
                        selectedCodexPetKey === entry.key
                          ? 'bg-amber-500 text-white border-amber-400 shadow-md ring-2 ring-amber-300'
                          : 'bg-stone-50 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border-stone-200 dark:border-stone-700 hover:bg-stone-100'
                      )}
                    >
                      <span className="text-sm">{entry.avatarEmoji}</span>
                      <span>{entry.name}</span>
                      <span
                        className={cn(
                          'text-[10px] px-1.5 py-0.5 rounded-full font-extrabold uppercase',
                          selectedCodexPetKey === entry.key
                            ? 'bg-amber-900/60 text-amber-200'
                            : 'bg-stone-200 dark:bg-stone-700 text-stone-600 dark:text-stone-300'
                        )}
                      >
                        {entry.totalStages} Stages ({entry.rarity})
                      </span>
                    </button>
                  ))}
              </div>
            </div>

            {/* Hero Rarity Banner */}
            <div
              className={cn(
                'p-6 sm:p-8 rounded-3xl bg-gradient-to-r text-white shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all',
                activeCodexEntry.bannerGradient
              )}
            >
              <div className="space-y-2">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-amber-200 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  {activeCodexEntry.rarity} Companion Codex • {activeCodexEntry.element}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold">
                  {selectedCodexPetKey === 'phoenix'
                    ? 'All 5 Fire Phoenix Evolution Forms'
                    : `${activeCodexEntry.name} Evolution Bestiary`}
                </h3>
                <p className="text-xs sm:text-sm text-white/90 max-w-2xl leading-relaxed">
                  {activeCodexEntry.description} Directly modeled in 3D studio from Stitch.
                </p>
              </div>
              <div className="px-5 py-3 rounded-2xl bg-black/40 border border-white/20 text-white text-xs font-bold text-center backdrop-blur-sm shrink-0">
                <div className="text-white/80">Total Evolution Stages</div>
                <div className="text-2xl font-extrabold text-amber-300">
                  {selectedCodexPetKey === 'phoenix'
                    ? '5 Solar Tiers'
                    : `${activeCodexEntry.totalStages} Evolution Tiers`}
                </div>
              </div>
            </div>

            {/* Stages Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeCodexEntry.stages.map((stage) => {
                const isUnlocked = currentActivePet ? currentActivePet.level >= stage.minLevel : stage.stage === 1;

                return (
                  <div
                    key={stage.stage}
                    data-testid={`codex-card-stage-${stage.stage}`}
                    className="rounded-3xl bg-white dark:bg-stone-900 border-2 border-stone-200 dark:border-stone-800 shadow-md hover:shadow-2xl transition-all overflow-hidden flex flex-col justify-between"
                  >
                    {/* Hero 3D character render from Stitch */}
                    <div className="relative h-64 w-full bg-gradient-to-b from-[#1c0e07] via-[#0d0604] to-stone-900 overflow-hidden flex items-center justify-center p-3">
                      <img
                        src={stage.imageUrl}
                        alt={stage.name}
                        className="h-full w-auto max-w-full object-contain filter drop-shadow-[0_12px_24px_rgba(245,158,11,0.4)] transition-transform duration-300 hover:scale-105"
                      />

                      {/* Stage & Level Badges */}
                      <div className="absolute top-3 left-3 flex items-center gap-1.5">
                        <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-amber-500 text-white shadow-md">
                          Stage {stage.stage}
                        </span>
                        <span
                          className={cn(
                            'px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase border backdrop-blur-sm',
                            isUnlocked
                              ? 'bg-amber-950/80 text-amber-300 border-amber-500/40'
                              : 'bg-stone-900/80 text-stone-400 border-stone-700/40'
                          )}
                        >
                          {isUnlocked ? `Unlocked` : `Lvl ${stage.minLevel}+`}
                        </span>
                      </div>

                      <div className="absolute top-3 right-3 text-3xl">
                        {stage.avatarEmoji}
                      </div>
                    </div>

                    {/* Body Info */}
                    <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                      <div className="space-y-2">
                        <div>
                          <h4 className="font-extrabold text-xl text-stone-900 dark:text-white">
                            {stage.name}
                          </h4>
                          <div className="text-xs font-bold text-amber-600 dark:text-amber-400">
                            {stage.title}
                          </div>
                        </div>

                        <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                          {stage.description}
                        </p>
                      </div>

                      {/* Evolution Requirement & Action */}
                      <div className="pt-3 border-t border-stone-100 dark:border-stone-800 space-y-3">
                        <div className="flex items-center justify-between text-xs font-bold">
                          <span className="text-stone-500">Academic Requirement</span>
                          <span className="text-amber-600 dark:text-amber-400">
                            Reach Level {stage.minLevel}
                          </span>
                        </div>

                        <div className="flex gap-2">
                          <button
                            type="button"
                            onClick={() => {
                              if (currentActivePet) {
                                handleSwitchPetStage(currentActivePet.id, stage.stage);
                                setActiveTab('pets');
                              }
                            }}
                            className="flex-1 py-2.5 px-4 rounded-xl text-xs font-extrabold bg-amber-500 hover:bg-amber-600 text-white shadow-[0_3px_0_#b45309] active:translate-y-[2px] transition-all flex items-center justify-center gap-1.5"
                          >
                            <Eye className="w-3.5 h-3.5" /> Inspect in Sanctuary
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })()}

      {/* Evolution Codex Modal */}
      {inspectingEvolutionPet && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-3xl rounded-3xl bg-white dark:bg-stone-900 border border-amber-300 dark:border-amber-800 shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setInspectingEvolutionPet(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-500"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-500">
                <Flame className="w-4 h-4" />
                Stitch 3D Creature Codex
              </div>
              <h3 className="text-2xl font-extrabold text-stone-900 dark:text-white mt-1">
                {inspectingEvolutionPet.species} Evolution Tree
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Spend stars gained through academic integrity to evolve your companion across all 5 divine solar forms.
              </p>
            </div>

            <div className="space-y-4">
              {inspectingEvolutionPet.evolutionStages?.map((stage) => {
                const isReached = inspectingEvolutionPet.stageLevel >= stage.stage;
                const isCurrent = inspectingEvolutionPet.stageLevel === stage.stage;

                return (
                  <div
                    key={stage.stage}
                    className={cn(
                      'p-4 rounded-2xl border-2 transition-all flex flex-col sm:flex-row items-center sm:items-start gap-4',
                      isCurrent
                        ? 'border-amber-500 bg-amber-50/50 dark:bg-amber-950/20 shadow-md'
                        : isReached
                        ? 'border-stone-300 dark:border-stone-700 bg-stone-50/50 dark:bg-stone-800/50'
                        : 'border-dashed border-stone-200 dark:border-stone-800 opacity-60'
                    )}
                  >
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-b from-[#1c0e07] to-stone-900 flex items-center justify-center border border-amber-500/30 overflow-hidden shrink-0">
                      {stage.imageUrl ? (
                        <img
                          src={stage.imageUrl}
                          alt={stage.name}
                          className="w-full h-full object-contain p-1"
                        />
                      ) : (
                        <span className="text-3xl">{stage.avatarEmoji}</span>
                      )}
                    </div>
                    <div className="flex-1 space-y-1.5 text-center sm:text-left">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <div className="font-extrabold text-base text-stone-900 dark:text-white">
                          Stage {stage.stage}: {stage.name}
                        </div>
                        <span className="text-xs font-bold text-amber-600 dark:text-amber-400">
                          {stage.title} (Lvl {stage.minLevel}+)
                        </span>
                      </div>
                      <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                        {stage.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-end pt-2">
              <Button variant="primary" onClick={() => setInspectingEvolutionPet(null)}>
                Got it
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Evolution Celebration Modal */}
      {evolvedCelebration && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-md rounded-3xl bg-white dark:bg-stone-900 border-2 border-amber-400 shadow-2xl p-6 text-center space-y-4">
            <div className="w-36 h-36 mx-auto rounded-3xl bg-gradient-to-b from-[#1c0e07] to-stone-950 flex items-center justify-center border-2 border-amber-400 overflow-hidden shadow-2xl animate-bounce">
              {evolvedCelebration.stageInfo.imageUrl ? (
                <img
                  src={evolvedCelebration.stageInfo.imageUrl}
                  alt={evolvedCelebration.stageInfo.name}
                  className="w-full h-full object-contain p-2"
                />
              ) : (
                <span className="text-6xl">{evolvedCelebration.stageInfo.avatarEmoji}</span>
              )}
            </div>
            <div className="space-y-1">
              <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-amber-100 text-amber-800 border border-amber-300">
                ✨ Solar Evolution Achieved! ✨
              </span>
              <h3 className="text-2xl font-extrabold text-stone-900 dark:text-white pt-1">
                {evolvedCelebration.stageInfo.name}
              </h3>
              <p className="text-xs text-amber-600 font-bold">
                Stage {evolvedCelebration.stageInfo.stage} • {evolvedCelebration.stageInfo.title}
              </p>
            </div>
            <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
              {evolvedCelebration.stageInfo.description}
            </p>
            <Button
              variant="primary"
              onClick={() => setEvolvedCelebration(null)}
              className="bg-amber-500 hover:bg-amber-600 font-extrabold w-full py-3"
            >
              Embrace Evolution 🔥
            </Button>
          </div>
        </div>
      )}

      {/* Hatching Celebration Modal */}
      {hatchedCelebration && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-md rounded-3xl bg-white dark:bg-stone-900 border-2 border-amber-400 shadow-2xl p-6 text-center space-y-4">
            <div className="w-32 h-32 mx-auto rounded-3xl bg-gradient-to-b from-[#1c0e07] to-stone-950 flex items-center justify-center border-2 border-amber-400 overflow-hidden shadow-2xl animate-bounce">
              {hatchedCelebration.imageUrl ? (
                <img
                  src={hatchedCelebration.imageUrl}
                  alt={hatchedCelebration.name}
                  className="w-full h-full object-contain p-2"
                />
              ) : (
                <span className="text-6xl">{hatchedCelebration.avatarEmoji}</span>
              )}
            </div>
            <div className="space-y-1">
              <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-amber-100 text-amber-800 border border-amber-300">
                New Pet Awakened!
              </span>
              <h3 className="text-2xl font-extrabold text-stone-900 dark:text-white pt-1">
                {hatchedCelebration.name}
              </h3>
              <p className="text-xs text-stone-500">
                {hatchedCelebration.species} • {hatchedCelebration.element}
              </p>
            </div>
            <p className="text-sm text-stone-600 dark:text-stone-400">
              Congratulations! Your care and exam integrity brought this mystical creature to life. Nurture it with stars in your sanctuary!
            </p>
            <Button
              variant="primary"
              onClick={() => {
                setHatchedCelebration(null);
                setActiveTab('pets');
              }}
              className="bg-amber-500 hover:bg-amber-600 font-extrabold w-full py-3"
            >
              Meet {hatchedCelebration.name} in Sanctuary 💖
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
