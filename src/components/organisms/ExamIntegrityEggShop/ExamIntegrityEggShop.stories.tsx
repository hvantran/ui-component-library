import type { Meta, StoryObj } from '@storybook/react';
import { ExamIntegrityEggShop, DEFAULT_SHOP_EGGS } from './ExamIntegrityEggShop';

const meta: Meta<typeof ExamIntegrityEggShop> = {
  title: 'Organisms/ExamIntegrityEggShop',
  component: ExamIntegrityEggShop,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ExamIntegrityEggShop>;

export const Default: Story = {
  args: {
    starBalance: 1250,
    items: DEFAULT_SHOP_EGGS,
  },
};

export const LowStarBalance: Story = {
  args: {
    starBalance: 150,
    items: DEFAULT_SHOP_EGGS,
  },
};

export const HighRollerScholar: Story = {
  args: {
    starBalance: 5000,
    items: DEFAULT_SHOP_EGGS,
  },
};

export const MultipleCategoriesWithDividers: Story = {
  args: {
    starBalance: 2000,
    categories: [
      {
        id: 'eggs',
        title: 'Companion Eggs',
        description: 'Mystery and elemental eggs ready to be incubated and hatched into companion pets.',
        icon: '🥚',
        items: [
          DEFAULT_SHOP_EGGS[0],
          {
            id: 'fire-egg',
            name: 'Solar Phoenix Fire Egg',
            tier: 'fire',
            rarity: 'Epic',
            price: 450,
            description: 'A radiant egg imbued with eternal solar embers. Known to hatch legendary fiery avians.',
            hatchedPetName: 'Fire Phoenix',
            petElement: 'Solar / Flame',
            hatchDurationHours: 12,
          },
          {
            id: 'frost-egg',
            name: 'Glacial Ice Crystal Egg',
            tier: 'frost',
            rarity: 'Rare',
            price: 320,
            description: 'Enclosed in perpetual permafrost. Radiates soothing sub-zero arctic pulses.',
            hatchedPetName: 'Frostpaw',
            petElement: 'Glacial / Ice',
            hatchDurationHours: 6,
          },
        ],
      },
      {
        id: 'elemental-eggs',
        title: 'Special Relic Eggs',
        description: 'Rare celestial artifacts discovered during grand examination challenges.',
        icon: '✨',
        items: [
          {
            id: 'void-egg',
            name: 'Abyssal Void Dragon Egg',
            tier: 'void',
            rarity: 'Mythic',
            price: 800,
            description: 'A deep cosmic relic infused with singularity void energy. Awakens apex celestial dragons.',
            hatchedPetName: 'Void Abyssal Dragon',
            petElement: 'Void / Cosmic',
            hatchDurationHours: 24,
          },
        ],
      },
    ],
  },
};


