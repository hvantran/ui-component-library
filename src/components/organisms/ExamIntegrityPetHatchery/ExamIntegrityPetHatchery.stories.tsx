import type { Meta, StoryObj } from '@storybook/react';
import {
  ExamIntegrityPetHatchery,
  DEFAULT_INCUBATING_EGGS,
  DEFAULT_STUDENT_PETS,
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
  ALL_SHOP_STARTER_PETS,
  ALL_ROSTER_STARTER_PETS,
  type StudentPet,
} from './ExamIntegrityPetHatchery';

const meta: Meta<typeof ExamIntegrityPetHatchery> = {
  title: 'Organisms/ExamIntegrityPetHatchery',
  component: ExamIntegrityPetHatchery,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ExamIntegrityPetHatchery>;

// 90 pets covering all evolution stages for all 18 species
export const ALL_PETS_ALL_STAGES: StudentPet[] = [
  // Common (3 stages each)
  ...[1, 2, 3].map((lvl) => createSproutlingPet(lvl, lvl === 1)),
  ...[1, 2, 3].map((lvl) => createPipflickPet(lvl, false)),
  ...[1, 2, 3].map((lvl) => createEmbersqueakPet(lvl, false)),
  ...[1, 2, 3].map((lvl) => createZephyrpuffPet(lvl, false)),
  // Rare (4 stages each)
  ...[1, 2, 3, 4].map((lvl) => createFrostpawPet(lvl, false)),
  ...[1, 2, 3, 4].map((lvl) => createMagmafangPet(lvl, false)),
  ...[1, 2, 3, 4].map((lvl) => createVoltwingPet(lvl, false)),
  ...[1, 2, 3, 4].map((lvl) => createThundercatPet(lvl, false)),
  // Epic (5 stages each)
  ...[1, 2, 3, 4, 5].map((lvl) => createFirePhoenixPet(lvl, false)),
  ...[1, 2, 3, 4, 5].map((lvl) => createChronoChimeraPet(lvl, false)),
  ...[1, 2, 3, 4, 5].map((lvl) => createShadowpantherPet(lvl, false)),
  ...[1, 2, 3, 4, 5].map((lvl) => createStormstagPet(lvl, false)),
  // Legendary (6 stages each)
  ...[1, 2, 3, 4, 5, 6].map((lvl) => createAstralDragonPet(lvl, false)),
  ...[1, 2, 3, 4, 5, 6].map((lvl) => createAstralLeviathanPet(lvl, false)),
  ...[1, 2, 3, 4, 5, 6].map((lvl) => createSolarWyvernPet(lvl, false)),
  // Mythic (8 stages each)
  ...[1, 2, 3, 4, 5, 6, 7, 8].map((lvl) => createVoidDragonPet(lvl, false)),
  ...[1, 2, 3, 4, 5, 6, 7, 8].map((lvl) => createChronoDracoPet(lvl, false)),
  ...[1, 2, 3, 4, 5, 6, 7, 8].map((lvl) => createAegisPaladinPet(lvl, false)),
];

export const AllPetsAllStagesSanctuary: Story = {
  name: 'All Pets - All Stages (Sanctuary)',
  args: {
    starBalance: 9999,
    defaultTab: 'pets',
    incubatingEggs: DEFAULT_INCUBATING_EGGS,
    pets: ALL_PETS_ALL_STAGES,
  },
};

export const AllPetsAllStagesCodex: Story = {
  name: 'All Pets - All Stages (Codex)',
  args: {
    starBalance: 9999,
    defaultTab: 'codex',
    incubatingEggs: DEFAULT_INCUBATING_EGGS,
    pets: ALL_PETS_ALL_STAGES,
  },
};

export const Default: Story = {
  args: {
    starBalance: 450,
    incubatingEggs: DEFAULT_INCUBATING_EGGS,
    pets: DEFAULT_STUDENT_PETS,
  },
};

export const HighStagePets: Story = {
  args: {
    starBalance: 800,
    incubatingEggs: [
      {
        id: 'egg-celestial',
        name: 'Astral Constellation Egg',
        tier: 'celestial',
        crackProgress: 0.8,
        hatchedPetName: 'Nova',
        hatchedSpecies: 'Nova Lynx',
        isEquipped: false,
        equipCostInStars: 25,
      },
    ],
    pets: [
      {
        id: 'pet-apex',
        name: 'Solarius Prime',
        species: 'Solar Dragon',
        tier: 'dragon',
        element: 'Solar Light',
        level: 8,
        maxLevel: 10,
        currentExp: 420,
        expNeeded: 600,
        growthCostInStars: 100,
        stats: {
          vitality: 98,
          wisdom: 95,
          integrityBond: 99,
          solarRadiance: 90,
        },
        avatarEmoji: '🐲',
        stageLevel: 3,
        stageName: 'Mythic Guardian',
        isEquipped: true,
      },
    ],
  },
};

export const VoidDragonAbilities: Story = {
  args: {
    starBalance: 3000,
    defaultTab: 'pets',
    incubatingEggs: DEFAULT_INCUBATING_EGGS,
    pets: [createVoidDragonPet(8, true)],
  },
};

export const VoidDragonLockedAbilities: Story = {
  args: {
    starBalance: 3000,
    defaultTab: 'pets',
    incubatingEggs: DEFAULT_INCUBATING_EGGS,
    pets: [createVoidDragonPet(1, true)],
  },
};

export const AllShopPetsSanctuary: Story = {
  args: {
    starBalance: 2500,
    defaultTab: 'pets',
    incubatingEggs: DEFAULT_INCUBATING_EGGS,
    pets: ALL_SHOP_STARTER_PETS,
  },
};

export const Full18PetRosterSanctuary: Story = {
  args: {
    starBalance: 5000,
    defaultTab: 'pets',
    incubatingEggs: DEFAULT_INCUBATING_EGGS,
    pets: ALL_ROSTER_STARTER_PETS,
  },
};

export const MaxLevelCompanionPet: Story = {
  args: {
    starBalance: 3500,
    defaultTab: 'pets',
    incubatingEggs: DEFAULT_INCUBATING_EGGS,
    pets: [
      {
        ...createFirePhoenixPet(10, true),
        level: 10,
        maxLevel: 10,
        currentExp: 500,
        expNeeded: 500,
      },
    ],
  },
};

export const UmbraServerDTOWithoutStages: Story = {
  args: {
    starBalance: 500,
    defaultTab: 'pets',
    incubatingEggs: DEFAULT_INCUBATING_EGGS,
    pets: [
      {
        id: 'pet-shadowpanther-server',
        name: 'Umbra (Umbral Eclipse Panther)',
        species: 'Umbral Eclipse Panther',
        rarity: 'Epic',
        tier: 'dragon',
        element: 'Shadow / Cosmic',
        level: 6,
        maxLevel: 10,
        currentExp: 385,
        expNeeded: 448,
        growthCostInStars: 25,
        stageLevel: 3,
        stageName: 'Eclipsefang',
        avatarEmoji: '🐆',
        stats: {
          vitality: 85,
          wisdom: 85,
          integrityBond: 90,
          solarRadiance: 80,
        },
      },
    ],
  },
};

export const StandardizedElementsSanctuary: Story = {
  args: {
    starBalance: 1500,
    defaultTab: 'pets',
    incubatingEggs: DEFAULT_INCUBATING_EGGS,
    pets: ALL_ROSTER_STARTER_PETS,
  },
};

export const MultiElementAndSpeciesTypeSanctuary: Story = {
  args: {
    starBalance: 2500,
    defaultTab: 'pets',
    incubatingEggs: DEFAULT_INCUBATING_EGGS,
    pets: [
      createSproutlingPet(1, false),
      createFrostpawPet(1, false),
      createFirePhoenixPet(1, true),
      createAstralDragonPet(1, false),
      createVoidDragonPet(1, false),
    ],
  },
};

