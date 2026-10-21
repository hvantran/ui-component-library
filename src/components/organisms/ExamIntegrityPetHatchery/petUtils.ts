import type {
  AssetType,
  PetElementMetadata,
  PetSpeciesTypeMetadata,
  StandardPetElement,
  StandardPetSpeciesType,
} from './ExamIntegrityPetHatchery.types';

export const DEFAULT_ASSETS_CDN_BASE =
  'https://github.com/hvantran/ui-component-library/releases/download/assets-v1';

export const DEFAULT_SKILL_CDN_BASE = DEFAULT_ASSETS_CDN_BASE;
export const DEFAULT_PET_CDN_BASE = DEFAULT_ASSETS_CDN_BASE;

export function resolveAssetUrl(
  filename?: string,
  bundledUrl?: string,
  assetType: AssetType = 'skill'
): string | undefined {
  if (!filename) return bundledUrl;

  const globalEnv =
    typeof globalThis !== 'undefined'
      ? (globalThis as unknown as { process?: { env?: Record<string, string | undefined> } }).process?.env
      : undefined;

  const envKey = assetType === 'skill' ? 'REACT_APP_SKILL_ASSETS_BASE_URL' : 'REACT_APP_PET_ASSETS_BASE_URL';
  const windowKey = assetType === 'skill' ? '__SKILL_ASSETS_BASE_URL__' : '__PET_ASSETS_BASE_URL__';

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
  resolveAssetUrl(filename, bundledUrl, 'skill');

export function resolvePetImageUrl(imageName?: string, fallbackUrl?: string): string | undefined {
  if (!imageName) return fallbackUrl;
  return resolveAssetUrl(imageName, fallbackUrl, 'pet');
}

export const PET_ELEMENT_METADATA: Record<StandardPetElement, PetElementMetadata> = {
  Flora: {
    label: 'Flora',
    iconName: 'Leaf',
    badgeClass: 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40',
    textClass: 'text-emerald-500 dark:text-emerald-400',
    borderClass: 'border-emerald-500/40',
    glowClass: 'drop-shadow-[0_0_12px_rgba(16,185,129,0.5)]',
  },
  Water: {
    label: 'Water',
    iconName: 'Droplets',
    badgeClass: 'bg-sky-950/80 text-sky-300 border-sky-500/40',
    textClass: 'text-sky-500 dark:text-sky-400',
    borderClass: 'border-sky-500/40',
    glowClass: 'drop-shadow-[0_0_12px_rgba(14,165,233,0.5)]',
  },
  Fire: {
    label: 'Fire',
    iconName: 'Flame',
    badgeClass: 'bg-amber-950/80 text-amber-300 border-amber-500/40',
    textClass: 'text-amber-500 dark:text-amber-400',
    borderClass: 'border-amber-500/40',
    glowClass: 'drop-shadow-[0_0_12px_rgba(245,158,11,0.5)]',
  },
  Wind: {
    label: 'Wind',
    iconName: 'Wind',
    badgeClass: 'bg-teal-950/80 text-teal-300 border-teal-500/40',
    textClass: 'text-teal-500 dark:text-teal-400',
    borderClass: 'border-teal-500/40',
    glowClass: 'drop-shadow-[0_0_12px_rgba(20,184,166,0.5)]',
  },
  Ice: {
    label: 'Ice',
    iconName: 'Snowflake',
    badgeClass: 'bg-cyan-950/80 text-cyan-300 border-cyan-500/40',
    textClass: 'text-cyan-500 dark:text-cyan-400',
    borderClass: 'border-cyan-500/40',
    glowClass: 'drop-shadow-[0_0_12px_rgba(6,182,212,0.5)]',
  },
  Earth: {
    label: 'Earth',
    iconName: 'Mountain',
    badgeClass: 'bg-stone-900/80 text-amber-200 border-amber-700/40',
    textClass: 'text-amber-700 dark:text-amber-500',
    borderClass: 'border-amber-700/40',
    glowClass: 'drop-shadow-[0_0_12px_rgba(180,83,9,0.5)]',
  },
  Lightning: {
    label: 'Lightning',
    iconName: 'Zap',
    badgeClass: 'bg-yellow-950/80 text-yellow-300 border-yellow-500/40',
    textClass: 'text-yellow-500 dark:text-yellow-400',
    borderClass: 'border-yellow-500/40',
    glowClass: 'drop-shadow-[0_0_12px_rgba(234,179,8,0.5)]',
  },
  Cosmic: {
    label: 'Cosmic',
    iconName: 'Sparkles',
    badgeClass: 'bg-indigo-950/80 text-indigo-300 border-indigo-500/40',
    textClass: 'text-indigo-500 dark:text-indigo-400',
    borderClass: 'border-indigo-500/40',
    glowClass: 'drop-shadow-[0_0_12px_rgba(99,102,241,0.5)]',
  },
  Shadow: {
    label: 'Shadow',
    iconName: 'Moon',
    badgeClass: 'bg-purple-950/80 text-purple-300 border-purple-500/40',
    textClass: 'text-purple-500 dark:text-purple-400',
    borderClass: 'border-purple-500/40',
    glowClass: 'drop-shadow-[0_0_12px_rgba(168,85,247,0.5)]',
  },
  Astral: {
    label: 'Astral',
    iconName: 'Sun',
    badgeClass: 'bg-violet-950/80 text-violet-300 border-violet-500/40',
    textClass: 'text-violet-500 dark:text-violet-400',
    borderClass: 'border-violet-500/40',
    glowClass: 'drop-shadow-[0_0_12px_rgba(139,92,246,0.5)]',
  },
  Void: {
    label: 'Void',
    iconName: 'Eye',
    badgeClass: 'bg-fuchsia-950/80 text-fuchsia-300 border-fuchsia-500/40',
    textClass: 'text-fuchsia-500 dark:text-fuchsia-400',
    borderClass: 'border-fuchsia-500/40',
    glowClass: 'drop-shadow-[0_0_12px_rgba(217,70,239,0.5)]',
  },
  Temporal: {
    label: 'Temporal',
    iconName: 'Clock',
    badgeClass: 'bg-rose-950/80 text-rose-300 border-rose-500/40',
    textClass: 'text-rose-500 dark:text-rose-400',
    borderClass: 'border-rose-500/40',
    glowClass: 'drop-shadow-[0_0_12px_rgba(244,63,94,0.5)]',
  },
  Divine: {
    label: 'Divine',
    iconName: 'Shield',
    badgeClass: 'bg-amber-950/80 text-amber-200 border-yellow-400/50',
    textClass: 'text-amber-400 dark:text-amber-300',
    borderClass: 'border-yellow-400/50',
    glowClass: 'drop-shadow-[0_0_12px_rgba(250,204,21,0.5)]',
  },
};

export function normalizePetElement(element?: string): StandardPetElement {
  if (!element) return 'Cosmic';
  const clean = element.toLowerCase();
  if (clean.includes('flora') || clean.includes('plant') || clean.includes('leaf')) return 'Flora';
  if (clean.includes('water') || clean.includes('ocean') || clean.includes('aqua')) return 'Water';
  if (clean.includes('ice') || clean.includes('frost') || clean.includes('arctic') || clean.includes('snow') || clean.includes('glacial')) return 'Ice';
  if (clean.includes('earth') || clean.includes('rock') || clean.includes('caldera') || clean.includes('volcan')) return 'Earth';
  if (clean.includes('lightning') || clean.includes('electric') || clean.includes('thunder') || clean.includes('storm')) return 'Lightning';
  if (clean.includes('wind') || clean.includes('air') || clean.includes('zephyr') || clean.includes('cloud')) return 'Wind';
  if (clean.includes('fire') || clean.includes('flame') || clean.includes('solar') || clean.includes('pyro') || clean.includes('ember')) return 'Fire';
  if (clean.includes('shadow') || clean.includes('umbra') || clean.includes('dark')) return 'Shadow';
  if (clean.includes('void') || clean.includes('abyss') || clean.includes('singularity')) return 'Void';
  if (clean.includes('temporal') || clean.includes('time') || clean.includes('chrono') || clean.includes('spacetime')) return 'Temporal';
  if (clean.includes('divine') || clean.includes('holy') || clean.includes('paladin') || clean.includes('sacred')) return 'Divine';
  if (clean.includes('astral') || clean.includes('celestial') || clean.includes('star')) return 'Astral';
  if (clean.includes('cosmic')) return 'Cosmic';
  return 'Cosmic';
}

export function getPetElementMetadata(element?: string): PetElementMetadata {
  const norm = normalizePetElement(element);
  return PET_ELEMENT_METADATA[norm];
}

export const PET_SPECIES_TYPE_METADATA: Record<StandardPetSpeciesType, PetSpeciesTypeMetadata> = {
  Plant: {
    label: 'Plant',
    iconName: 'Leaf',
    badgeClass: 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40',
    textClass: 'text-emerald-400',
  },
  Aquatic: {
    label: 'Aquatic',
    iconName: 'Fish',
    badgeClass: 'bg-sky-950/80 text-sky-300 border-sky-500/40',
    textClass: 'text-sky-400',
  },
  Beast: {
    label: 'Beast',
    iconName: 'PawPrint',
    badgeClass: 'bg-amber-950/80 text-amber-300 border-amber-500/40',
    textClass: 'text-amber-400',
  },
  Avian: {
    label: 'Avian',
    iconName: 'Bird',
    badgeClass: 'bg-teal-950/80 text-teal-300 border-teal-500/40',
    textClass: 'text-teal-400',
  },
  Mythical: {
    label: 'Mythical',
    iconName: 'Sparkles',
    badgeClass: 'bg-purple-950/80 text-purple-300 border-purple-500/40',
    textClass: 'text-purple-400',
  },
  Dragon: {
    label: 'Dragon',
    iconName: 'Flame',
    badgeClass: 'bg-rose-950/80 text-rose-300 border-rose-500/40',
    textClass: 'text-rose-400',
  },
  Celestial: {
    label: 'Celestial',
    iconName: 'Sun',
    badgeClass: 'bg-indigo-950/80 text-indigo-300 border-indigo-500/40',
    textClass: 'text-indigo-400',
  },
  Void: {
    label: 'Void',
    iconName: 'Eye',
    badgeClass: 'bg-fuchsia-950/80 text-fuchsia-300 border-fuchsia-500/40',
    textClass: 'text-fuchsia-400',
  },
  Temporal: {
    label: 'Temporal',
    iconName: 'Clock',
    badgeClass: 'bg-pink-950/80 text-pink-300 border-pink-500/40',
    textClass: 'text-pink-400',
  },
  Knight: {
    label: 'Knight',
    iconName: 'Shield',
    badgeClass: 'bg-yellow-950/80 text-yellow-300 border-yellow-500/40',
    textClass: 'text-yellow-400',
  },
};

export function normalizePetSpeciesType(st?: string): StandardPetSpeciesType {
  if (!st) return 'Beast';
  const clean = st.toLowerCase();
  if (clean.includes('plant') || clean.includes('flora') || clean.includes('sprout')) return 'Plant';
  if (clean.includes('aquatic') || clean.includes('water') || clean.includes('drake') || clean.includes('whale') || clean.includes('fish') || clean.includes('leviathan')) return 'Aquatic';
  if (clean.includes('avian') || clean.includes('bird') || clean.includes('owl') || clean.includes('phoenix') || clean.includes('wyvern')) return 'Avian';
  if (clean.includes('knight') || clean.includes('paladin') || clean.includes('aegis')) return 'Knight';
  if (clean.includes('dragon') || clean.includes('draco')) return 'Dragon';
  if (clean.includes('void') || clean.includes('abyss')) return 'Void';
  if (clean.includes('temporal') || clean.includes('chrono') || clean.includes('time')) return 'Temporal';
  if (clean.includes('celestial') || clean.includes('astral') || clean.includes('solar') || clean.includes('star')) return 'Celestial';
  if (clean.includes('mythical') || clean.includes('sprite') || clean.includes('chimera')) return 'Mythical';
  return 'Beast';
}

export function getPetSpeciesTypeMetadata(speciesType?: string): PetSpeciesTypeMetadata {
  const norm = normalizePetSpeciesType(speciesType);
  return PET_SPECIES_TYPE_METADATA[norm];
}

export function getRequiredElementCount(rarity?: string): number {
  switch (rarity) {
    case 'Rare':
      return 2;
    case 'Legendary':
      return 3;
    case 'Mythic':
      return 4;
    default:
      return 1;
  }
}


