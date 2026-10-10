import type { Meta, StoryObj } from '@storybook/react';
import { ThreeEggViewer } from './ThreeEggViewer';

const meta: Meta<typeof ThreeEggViewer> = {
  title: 'Molecules/ThreeEggViewer',
  component: ThreeEggViewer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ThreeEggViewer>;

export const DragonEgg: Story = {
  args: {
    eggTier: 'dragon',
    width: 380,
    height: 380,
    crackProgress: 0,
    interactive: true,
    autoRotate: true,
  },
};

export const CelestialEgg: Story = {
  args: {
    eggTier: 'celestial',
    width: 380,
    height: 380,
    crackProgress: 0,
    interactive: true,
    autoRotate: true,
  },
};

export const ForestEgg: Story = {
  args: {
    eggTier: 'forest',
    width: 380,
    height: 380,
    crackProgress: 0,
    interactive: true,
    autoRotate: true,
  },
};

export const CrackingState: Story = {
  args: {
    eggTier: 'dragon',
    width: 380,
    height: 380,
    crackProgress: 0.65,
    interactive: true,
    autoRotate: false,
  },
};

export const HatchedState: Story = {
  args: {
    eggTier: 'dragon',
    width: 380,
    height: 380,
    crackProgress: 1.0,
    isHatched: true,
  },
};

