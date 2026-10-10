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

