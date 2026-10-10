import type { Meta, StoryObj } from '@storybook/react';
import {
  ExamIntegrityPetHatchery,
  DEFAULT_INCUBATING_EGGS,
  DEFAULT_STUDENT_PETS,
  createSproutlingPet,
  createPipflickPet,
  createFrostpawPet,
  createMagmafangPet,
  createFirePhoenixPet,
  createChronoChimeraPet,
  createAstralDragonPet,
  createAstralLeviathanPet,
  createVoidDragonPet,
  createChronoDracoPet,
  createAegisPaladinPet,
  ALL_FIRE_PHOENIX_LEVELS,
  ALL_SHOP_STARTER_PETS,
  ALL_ROSTER_STARTER_PETS,
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

export const Default: Story = {
  args: {
    starBalance: 450,
    incubatingEggs: DEFAULT_INCUBATING_EGGS,
    pets: DEFAULT_STUDENT_PETS,
  },
};

export const FirePhoenixLevel1Fledgling: Story = {
  args: {
    starBalance: 450,
    defaultTab: 'pets',
    incubatingEggs: DEFAULT_INCUBATING_EGGS,
    pets: [createFirePhoenixPet(1, true)],
  },
};

export const FirePhoenixLevel2Pyrepaw: Story = {
  args: {
    starBalance: 600,
    defaultTab: 'pets',
    incubatingEggs: DEFAULT_INCUBATING_EGGS,
    pets: [createFirePhoenixPet(2, true)],
  },
};

export const FirePhoenixLevel3Firebird: Story = {
  args: {
    starBalance: 750,
    defaultTab: 'pets',
    incubatingEggs: DEFAULT_INCUBATING_EGGS,
    pets: [createFirePhoenixPet(3, true)],
  },
};

export const FirePhoenixLevel4Sovereign: Story = {
  args: {
    starBalance: 900,
    defaultTab: 'pets',
    incubatingEggs: DEFAULT_INCUBATING_EGGS,
    pets: [createFirePhoenixPet(4, true)],
  },
};

export const FirePhoenixLevel5ApexEmperor: Story = {
  args: {
    starBalance: 1500,
    defaultTab: 'pets',
    incubatingEggs: DEFAULT_INCUBATING_EGGS,
    pets: [createFirePhoenixPet(5, true)],
  },
};

export const FirePhoenixCodexAll5Levels: Story = {
  args: {
    starBalance: 1000,
    defaultTab: 'codex',
    incubatingEggs: DEFAULT_INCUBATING_EGGS,
    pets: ALL_FIRE_PHOENIX_LEVELS,
  },
};

export const FirePhoenixSanctuaryAll5Levels: Story = {
  args: {
    starBalance: 1200,
    defaultTab: 'pets',
    incubatingEggs: DEFAULT_INCUBATING_EGGS,
    pets: ALL_FIRE_PHOENIX_LEVELS,
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

export const CommonSproutlingAll3Stages: Story = {
  args: {
    starBalance: 500,
    defaultTab: 'pets',
    incubatingEggs: DEFAULT_INCUBATING_EGGS,
    pets: [1, 2, 3].map((stage) => createSproutlingPet(stage, stage === 1)),
  },
};

export const RareFrostpawAll4Stages: Story = {
  args: {
    starBalance: 750,
    defaultTab: 'pets',
    incubatingEggs: DEFAULT_INCUBATING_EGGS,
    pets: [1, 2, 3, 4].map((stage) => createFrostpawPet(stage, stage === 1)),
  },
};

export const LegendaryAstralDragonAll6Stages: Story = {
  args: {
    starBalance: 1500,
    defaultTab: 'pets',
    incubatingEggs: DEFAULT_INCUBATING_EGGS,
    pets: [1, 2, 3, 4, 5, 6].map((stage) =>
      createAstralDragonPet(stage, stage === 1)
    ),
  },
};

export const MythicVoidDragonAll8Stages: Story = {
  args: {
    starBalance: 3000,
    defaultTab: 'pets',
    incubatingEggs: DEFAULT_INCUBATING_EGGS,
    pets: [1, 2, 3, 4, 5, 6, 7, 8].map((stage) =>
      createVoidDragonPet(stage, stage === 1)
    ),
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

export const MultiRarityCodexView: Story = {
  args: {
    starBalance: 2000,
    defaultTab: 'codex',
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

export const CommonPipflickAll3Stages: Story = {
  args: {
    starBalance: 500,
    defaultTab: 'pets',
    incubatingEggs: DEFAULT_INCUBATING_EGGS,
    pets: [1, 2, 3].map((lvl) => createPipflickPet(lvl, lvl === 1)),
  },
};

export const RareMagmafangAll4Stages: Story = {
  args: {
    starBalance: 800,
    defaultTab: 'pets',
    incubatingEggs: DEFAULT_INCUBATING_EGGS,
    pets: [1, 2, 3, 4].map((lvl) => createMagmafangPet(lvl, lvl === 1)),
  },
};

export const EpicChronoChimeraAll5Stages: Story = {
  args: {
    starBalance: 1200,
    defaultTab: 'pets',
    incubatingEggs: DEFAULT_INCUBATING_EGGS,
    pets: [1, 2, 3, 4, 5].map((lvl) => createChronoChimeraPet(lvl, lvl === 1)),
  },
};

export const LegendaryAstralLeviathanAll6Stages: Story = {
  args: {
    starBalance: 2000,
    defaultTab: 'pets',
    incubatingEggs: DEFAULT_INCUBATING_EGGS,
    pets: [1, 2, 3, 4, 5, 6].map((lvl) => createAstralLeviathanPet(lvl, lvl === 1)),
  },
};

export const MythicChronoDracoAll8Stages: Story = {
  args: {
    starBalance: 3500,
    defaultTab: 'pets',
    incubatingEggs: DEFAULT_INCUBATING_EGGS,
    pets: [1, 2, 3, 4, 5, 6, 7, 8].map((lvl) => createChronoDracoPet(lvl, lvl === 1)),
  },
};

export const MythicAegisPaladinAll8Stages: Story = {
  args: {
    starBalance: 3500,
    defaultTab: 'pets',
    incubatingEggs: DEFAULT_INCUBATING_EGGS,
    pets: [1, 2, 3, 4, 5, 6, 7, 8].map((lvl) => createAegisPaladinPet(lvl, lvl === 1)),
  },
};


