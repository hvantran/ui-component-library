import {
  AssetType,
  type PetCodexEntry,
  PetElement,
  type PetElementMetadata,
  PetRarity,
  PetSpeciesType,
  type PetSpeciesTypeMetadata,
  type StudentPet,
} from './ExamIntegrityPetHatchery.types';

export const DEFAULT_ASSETS_CDN_BASE =
  'https://github.com/hvantran/ui-component-library/releases/download/assets-v1';

export const DEFAULT_SKILL_CDN_BASE = DEFAULT_ASSETS_CDN_BASE;
export const DEFAULT_PET_CDN_BASE = DEFAULT_ASSETS_CDN_BASE;

export function resolveAssetUrl(
  filename?: string,
  bundledUrl?: string,
  assetType: AssetType = AssetType.Skill
): string | undefined {
  if (!filename) return bundledUrl;

  const globalEnv =
    typeof globalThis !== 'undefined'
      ? (globalThis as unknown as { process?: { env?: Record<string, string | undefined> } }).process?.env
      : undefined;

  let envKey = 'REACT_APP_PET_ASSETS_BASE_URL';
  let windowKey = '__PET_ASSETS_BASE_URL__';
  if ((assetType as string) === AssetType.Skill) {
    envKey = 'REACT_APP_SKILL_ASSETS_BASE_URL';
    windowKey = '__SKILL_ASSETS_BASE_URL__';
  } else if ((assetType as string) === AssetType.Icon) {
    envKey = 'REACT_APP_ICON_ASSETS_BASE_URL';
    windowKey = '__ICON_ASSETS_BASE_URL__';
  } else if ((assetType as string) === AssetType.Background) {
    envKey = 'REACT_APP_BG_ASSETS_BASE_URL';
    windowKey = '__BG_ASSETS_BASE_URL__';
  }

  const customBase =
    (typeof window !== 'undefined' &&
      (window as unknown as Record<string, string | undefined>)[windowKey]) ||
    (typeof window !== 'undefined' &&
      (window as unknown as Record<string, string | undefined>).__ASSETS_BASE_URL__) ||
    globalEnv?.[envKey] ||
    globalEnv?.REACT_APP_ASSETS_BASE_URL;

  if (customBase) {
    return `${String(customBase).replace(/\/$/, '')}/${filename}`;
  }

  if (
    bundledUrl &&
    !bundledUrl.startsWith('./assets/skills/') &&
    !bundledUrl.startsWith('/assets/skills/') &&
    bundledUrl !== filename
  ) {
    return bundledUrl;
  }

  return `${DEFAULT_ASSETS_CDN_BASE}/${filename}`;
}

export const resolveSkillVideoUrl = (filename?: string, bundledUrl?: string): string | undefined =>
  resolveAssetUrl(filename, bundledUrl, AssetType.Skill);

export function resolvePetImageUrl(imageName?: string, fallbackUrl?: string): string | undefined {
  if (!imageName) return fallbackUrl;
  return resolveAssetUrl(imageName, fallbackUrl, AssetType.Pet);
}

export function resolvePetIconUrl(iconName?: string, fallbackUrl?: string): string | undefined {
  if (!iconName) return fallbackUrl;
  return resolveAssetUrl(iconName, fallbackUrl, AssetType.Icon);
}

export function resolvePetBackgroundUrl(bgName?: string, fallbackUrl?: string): string | undefined {
  if (!bgName) return fallbackUrl;
  return resolveAssetUrl(bgName, fallbackUrl, AssetType.Background);
}

export const PET_ELEMENT_METADATA: Record<PetElement, PetElementMetadata> = {
  [PetElement.Flora]: {
    label: PetElement.Flora,
    iconName: 'Leaf',
    badgeClass: 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40',
    textClass: 'text-emerald-500 dark:text-emerald-400',
    borderClass: 'border-emerald-500/40',
    glowClass: 'drop-shadow-[0_0_12px_rgba(16,185,129,0.5)]',
  },
  [PetElement.Water]: {
    label: PetElement.Water,
    iconName: 'Droplets',
    badgeClass: 'bg-sky-950/80 text-sky-300 border-sky-500/40',
    textClass: 'text-sky-500 dark:text-sky-400',
    borderClass: 'border-sky-500/40',
    glowClass: 'drop-shadow-[0_0_12px_rgba(14,165,233,0.5)]',
  },
  [PetElement.Fire]: {
    label: PetElement.Fire,
    iconName: 'Flame',
    badgeClass: 'bg-amber-950/80 text-amber-300 border-amber-500/40',
    textClass: 'text-amber-500 dark:text-amber-400',
    borderClass: 'border-amber-500/40',
    glowClass: 'drop-shadow-[0_0_12px_rgba(245,158,11,0.5)]',
  },
  [PetElement.Wind]: {
    label: PetElement.Wind,
    iconName: 'Wind',
    badgeClass: 'bg-teal-950/80 text-teal-300 border-teal-500/40',
    textClass: 'text-teal-500 dark:text-teal-400',
    borderClass: 'border-teal-500/40',
    glowClass: 'drop-shadow-[0_0_12px_rgba(20,184,166,0.5)]',
  },
  [PetElement.Ice]: {
    label: PetElement.Ice,
    iconName: 'Snowflake',
    badgeClass: 'bg-cyan-950/80 text-cyan-300 border-cyan-500/40',
    textClass: 'text-cyan-500 dark:text-cyan-400',
    borderClass: 'border-cyan-500/40',
    glowClass: 'drop-shadow-[0_0_12px_rgba(6,182,212,0.5)]',
  },
  [PetElement.Earth]: {
    label: PetElement.Earth,
    iconName: 'Mountain',
    badgeClass: 'bg-stone-900/80 text-amber-200 border-amber-700/40',
    textClass: 'text-amber-700 dark:text-amber-500',
    borderClass: 'border-amber-700/40',
    glowClass: 'drop-shadow-[0_0_12px_rgba(180,83,9,0.5)]',
  },
  [PetElement.Lightning]: {
    label: PetElement.Lightning,
    iconName: 'Zap',
    badgeClass: 'bg-yellow-950/80 text-yellow-300 border-yellow-500/40',
    textClass: 'text-yellow-500 dark:text-yellow-400',
    borderClass: 'border-yellow-500/40',
    glowClass: 'drop-shadow-[0_0_12px_rgba(234,179,8,0.5)]',
  },
  [PetElement.Cosmic]: {
    label: PetElement.Cosmic,
    iconName: 'Sparkles',
    badgeClass: 'bg-indigo-950/80 text-indigo-300 border-indigo-500/40',
    textClass: 'text-indigo-500 dark:text-indigo-400',
    borderClass: 'border-indigo-500/40',
    glowClass: 'drop-shadow-[0_0_12px_rgba(99,102,241,0.5)]',
  },
  [PetElement.Shadow]: {
    label: PetElement.Shadow,
    iconName: 'Moon',
    badgeClass: 'bg-purple-950/80 text-purple-300 border-purple-500/40',
    textClass: 'text-purple-500 dark:text-purple-400',
    borderClass: 'border-purple-500/40',
    glowClass: 'drop-shadow-[0_0_12px_rgba(168,85,247,0.5)]',
  },
  [PetElement.Astral]: {
    label: PetElement.Astral,
    iconName: 'Sun',
    badgeClass: 'bg-violet-950/80 text-violet-300 border-violet-500/40',
    textClass: 'text-violet-500 dark:text-violet-400',
    borderClass: 'border-violet-500/40',
    glowClass: 'drop-shadow-[0_0_12px_rgba(139,92,246,0.5)]',
  },
  [PetElement.Void]: {
    label: PetElement.Void,
    iconName: 'Eye',
    badgeClass: 'bg-fuchsia-950/80 text-fuchsia-300 border-fuchsia-500/40',
    textClass: 'text-fuchsia-500 dark:text-fuchsia-400',
    borderClass: 'border-fuchsia-500/40',
    glowClass: 'drop-shadow-[0_0_12px_rgba(217,70,239,0.5)]',
  },
  [PetElement.Temporal]: {
    label: PetElement.Temporal,
    iconName: 'Clock',
    badgeClass: 'bg-rose-950/80 text-rose-300 border-rose-500/40',
    textClass: 'text-rose-500 dark:text-rose-400',
    borderClass: 'border-rose-500/40',
    glowClass: 'drop-shadow-[0_0_12px_rgba(244,63,94,0.5)]',
  },
  [PetElement.Divine]: {
    label: PetElement.Divine,
    iconName: 'Shield',
    badgeClass: 'bg-amber-950/80 text-amber-200 border-yellow-400/50',
    textClass: 'text-amber-400 dark:text-amber-300',
    borderClass: 'border-yellow-400/50',
    glowClass: 'drop-shadow-[0_0_12px_rgba(250,204,21,0.5)]',
  },
};

export const ELEMENT_KEYWORDS_MAP: Record<PetElement, readonly string[]> = {
  [PetElement.Flora]: ['flora', 'plant', 'leaf'],
  [PetElement.Water]: ['water', 'ocean', 'aqua'],
  [PetElement.Ice]: ['ice', 'frost', 'arctic', 'snow', 'glacial'],
  [PetElement.Earth]: ['earth', 'rock', 'caldera', 'volcan'],
  [PetElement.Lightning]: ['lightning', 'electric', 'thunder', 'storm'],
  [PetElement.Wind]: ['wind', 'air', 'zephyr', 'cloud'],
  [PetElement.Fire]: ['fire', 'flame', 'solar', 'pyro', 'ember'],
  [PetElement.Shadow]: ['shadow', 'umbra', 'dark'],
  [PetElement.Void]: ['void', 'abyss', 'singularity'],
  [PetElement.Temporal]: ['temporal', 'time', 'chrono', 'spacetime'],
  [PetElement.Divine]: ['divine', 'holy', 'paladin', 'sacred'],
  [PetElement.Astral]: ['astral', 'celestial', 'star'],
  [PetElement.Cosmic]: ['cosmic'],
};

export function normalizePetElement(element?: string): PetElement {
  if (!element) return PetElement.Cosmic;
  const clean = element.toLowerCase();
  for (const [elem, keywords] of Object.entries(ELEMENT_KEYWORDS_MAP) as [PetElement, readonly string[]][]) {
    if (keywords.some((kw) => clean.includes(kw))) {
      return elem;
    }
  }
  return PetElement.Cosmic;
}

export function getPetElementMetadata(element?: string): PetElementMetadata {
  const norm = normalizePetElement(element);
  return PET_ELEMENT_METADATA[norm];
}

export const PET_SPECIES_TYPE_METADATA: Record<PetSpeciesType, PetSpeciesTypeMetadata> = {
  [PetSpeciesType.Plant]: {
    label: PetSpeciesType.Plant,
    iconName: 'Leaf',
    badgeClass: 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40',
    textClass: 'text-emerald-400',
  },
  [PetSpeciesType.Aquatic]: {
    label: PetSpeciesType.Aquatic,
    iconName: 'Fish',
    badgeClass: 'bg-sky-950/80 text-sky-300 border-sky-500/40',
    textClass: 'text-sky-400',
  },
  [PetSpeciesType.Beast]: {
    label: PetSpeciesType.Beast,
    iconName: 'PawPrint',
    badgeClass: 'bg-amber-950/80 text-amber-300 border-amber-500/40',
    textClass: 'text-amber-400',
  },
  [PetSpeciesType.Avian]: {
    label: PetSpeciesType.Avian,
    iconName: 'Bird',
    badgeClass: 'bg-teal-950/80 text-teal-300 border-teal-500/40',
    textClass: 'text-teal-400',
  },
  [PetSpeciesType.Mythical]: {
    label: PetSpeciesType.Mythical,
    iconName: 'Sparkles',
    badgeClass: 'bg-purple-950/80 text-purple-300 border-purple-500/40',
    textClass: 'text-purple-400',
  },
  [PetSpeciesType.Dragon]: {
    label: PetSpeciesType.Dragon,
    iconName: 'Flame',
    badgeClass: 'bg-rose-950/80 text-rose-300 border-rose-500/40',
    textClass: 'text-rose-400',
  },
  [PetSpeciesType.Celestial]: {
    label: PetSpeciesType.Celestial,
    iconName: 'Sun',
    badgeClass: 'bg-indigo-950/80 text-indigo-300 border-indigo-500/40',
    textClass: 'text-indigo-400',
  },
  [PetSpeciesType.Void]: {
    label: PetSpeciesType.Void,
    iconName: 'Eye',
    badgeClass: 'bg-fuchsia-950/80 text-fuchsia-300 border-fuchsia-500/40',
    textClass: 'text-fuchsia-400',
  },
  [PetSpeciesType.Temporal]: {
    label: PetSpeciesType.Temporal,
    iconName: 'Clock',
    badgeClass: 'bg-pink-950/80 text-pink-300 border-pink-500/40',
    textClass: 'text-pink-400',
  },
  [PetSpeciesType.Knight]: {
    label: PetSpeciesType.Knight,
    iconName: 'Shield',
    badgeClass: 'bg-yellow-950/80 text-yellow-300 border-yellow-500/40',
    textClass: 'text-yellow-400',
  },
};

export const SPECIES_TYPE_KEYWORDS_MAP: Record<PetSpeciesType, readonly string[]> = {
  [PetSpeciesType.Plant]: ['plant', 'flora', 'sprout'],
  [PetSpeciesType.Aquatic]: ['aquatic', 'water', 'drake', 'whale', 'fish', 'leviathan'],
  [PetSpeciesType.Avian]: ['avian', 'bird', 'owl', 'phoenix', 'wyvern'],
  [PetSpeciesType.Knight]: ['knight', 'paladin', 'aegis'],
  [PetSpeciesType.Dragon]: ['dragon', 'draco'],
  [PetSpeciesType.Void]: ['void', 'abyss'],
  [PetSpeciesType.Temporal]: ['temporal', 'chrono', 'time'],
  [PetSpeciesType.Celestial]: ['celestial', 'astral', 'solar', 'star'],
  [PetSpeciesType.Mythical]: ['mythical', 'sprite', 'chimera'],
  [PetSpeciesType.Beast]: ['beast'],
};

export function normalizePetSpeciesType(st?: string): PetSpeciesType {
  if (!st) return PetSpeciesType.Beast;
  const clean = st.toLowerCase();
  for (const [speciesType, keywords] of Object.entries(SPECIES_TYPE_KEYWORDS_MAP) as [PetSpeciesType, readonly string[]][]) {
    if (keywords.some((kw) => clean.includes(kw))) {
      return speciesType;
    }
  }
  return PetSpeciesType.Beast;
}

export function getPetSpeciesTypeMetadata(speciesType?: string): PetSpeciesTypeMetadata {
  const norm = normalizePetSpeciesType(speciesType);
  return PET_SPECIES_TYPE_METADATA[norm];
}

export const REQUIRED_ELEMENT_COUNT_MAP: Record<PetRarity, number> = {
  [PetRarity.Common]: 1,
  [PetRarity.Rare]: 2,
  [PetRarity.Epic]: 1,
  [PetRarity.Legendary]: 3,
  [PetRarity.Mythic]: 4,
};

export function getRequiredElementCount(rarity?: PetRarity | string): number {
  if (!rarity) return 1;
  return REQUIRED_ELEMENT_COUNT_MAP[rarity as PetRarity] ?? 1;
}

let defaultCodexRegistry: Record<string, PetCodexEntry> | undefined;

export function setDefaultCodexRegistry(registry: Record<string, PetCodexEntry>) {
  defaultCodexRegistry = registry;
}

export function getDefaultCodexRegistry() {
  return defaultCodexRegistry;
}

export function findCodexEntryInLibrary(
  pet: Partial<StudentPet>,
  petLibrary?: Record<string, PetCodexEntry> | PetCodexEntry[]
): PetCodexEntry | undefined {
  const library = petLibrary || defaultCodexRegistry;
  if (!pet || !library) return undefined;

  const entries: PetCodexEntry[] = Array.isArray(library)
    ? library
    : Object.values(library);

  if (pet.petLibraryId) {
    const direct = entries.find((e) => {
      const k = e.key || (e as { petKey?: string }).petKey || (e as { id?: string }).id;
      return k === pet.petLibraryId;
    });
    if (direct) return direct;
  }

  const cleanPetName = (pet.name || '').toLowerCase().trim();
  const cleanSpecies = (pet.species || '').toLowerCase().trim();
  const cleanStageName = (pet.stageName || '').toLowerCase().trim();
  const cleanId = (pet.id || '').toLowerCase().trim();

  const exact = entries.find((e) => {
    const entrySpecies = e.species.toLowerCase();
    const entryName = e.name.toLowerCase();
    return (
      (cleanSpecies && entrySpecies === cleanSpecies) ||
      (cleanPetName && (entryName === cleanPetName || entryName.startsWith(cleanPetName)))
    );
  });
  if (exact) return exact;

  const fuzzy = entries.find((e) => {
    const entryKey = (e.key || (e as { petKey?: string }).petKey || (e as { id?: string }).id || '').toLowerCase();
    const entrySpecies = (e.species || '').toLowerCase();
    const entryName = (e.name || '').toLowerCase();

    return (
      (cleanSpecies && (cleanSpecies.includes(entrySpecies) || entrySpecies.includes(cleanSpecies))) ||
      (cleanPetName && (cleanPetName.includes(entryName) || entryName.includes(cleanPetName))) ||
      (cleanId && (cleanId.includes(entryKey) || (entryKey && entryKey.includes(cleanId))))
    );
  });
  if (fuzzy) return fuzzy;

  if (cleanStageName) {
    const stageMatch = entries.find((e) =>
      e.stages?.some((s) => s.name.toLowerCase() === cleanStageName)
    );
    if (stageMatch) return stageMatch;
  }

  return undefined;
}

export function enrichStudentPet(
  pet: StudentPet,
  petLibrary?: Record<string, PetCodexEntry> | PetCodexEntry[]
): StudentPet {
  if (!pet) return pet;

  const codexEntry = findCodexEntryInLibrary(pet, petLibrary);

  const rawElement = pet.element || codexEntry?.element;
  const element = normalizePetElement(rawElement);

  const elements =
    pet.elements && pet.elements.length > 0
      ? pet.elements.map(normalizePetElement)
      : codexEntry?.elements && codexEntry.elements.length > 0
      ? codexEntry.elements.map(normalizePetElement)
      : [element];

  const speciesTypes =
    pet.speciesTypes && pet.speciesTypes.length > 0
      ? pet.speciesTypes.map(normalizePetSpeciesType)
      : codexEntry?.speciesTypes && codexEntry.speciesTypes.length > 0
      ? codexEntry.speciesTypes.map(normalizePetSpeciesType)
      : [normalizePetSpeciesType(pet.species || codexEntry?.species)];

  const evolutionStages = (pet.evolutionStages || codexEntry?.stages)?.map((stage) => ({
    ...stage,
    imageUrl: stage.imageUrl || (stage.imageName ? resolvePetImageUrl(stage.imageName) : '') || '',
  }));

  const stageName =
    pet.stageName ||
    (evolutionStages && evolutionStages[pet.stageLevel - 1]?.name) ||
    pet.name;

  const imageName =
    pet.imageName ||
    (evolutionStages && evolutionStages[pet.stageLevel - 1]?.imageName);

  const imageUrl =
    pet.imageUrl || (imageName ? resolvePetImageUrl(imageName) : undefined);

  let skills = pet.skills;
  if (!skills && evolutionStages && evolutionStages.length > 0) {
    const entryId =
      (codexEntry as { key?: string; petKey?: string; id?: string })?.key ||
      (codexEntry as { petKey?: string })?.petKey ||
      (codexEntry as { id?: string })?.id ||
      pet.id;
    skills = evolutionStages.map((stage) => {
      const ability = stage.ability;
      return {
        id: `${entryId}-stage-${stage.stage}-skill`,
        name: ability?.name ?? `${stage.name} Technique`,
        description: ability?.description ?? `Channel the power of ${stage.name}.`,
        requiredLevel: stage.minLevel,
        icon: 'Sparkles',
        ...(ability?.videoUrl ? { videoSources: { mp4: ability.videoUrl } } : {}),
      };
    });
  }

  return {
    ...pet,
    element,
    elements,
    speciesTypes,
    evolutionStages,
    skills,
    stageName,
    imageName,
    imageUrl,
    totalStages: pet.totalStages || evolutionStages?.length || codexEntry?.totalStages || 1,
  };
}


