import type { Meta, StoryObj } from '@storybook/react';
import { ExamIntegrityStudentEggShopTemplate } from './ExamIntegrityStudentEggShopTemplate';
import { DEFAULT_INCUBATING_EGGS, DEFAULT_STUDENT_PETS } from '../../organisms/ExamIntegrityPetHatchery';

const meta: Meta<typeof ExamIntegrityStudentEggShopTemplate> = {
  title: 'Templates/ExamIntegrityStudentEggShopTemplate',
  component: ExamIntegrityStudentEggShopTemplate,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ExamIntegrityStudentEggShopTemplate>;

export const ShopTab: Story = {
  args: {
    studentName: 'Alex Adventurer',
    starCount: 1250,
    isElementary: true,
    activeTab: 'shop',
    incubatingEggs: DEFAULT_INCUBATING_EGGS,
    pets: DEFAULT_STUDENT_PETS,
  },
};

export const HatcheryTab: Story = {
  args: {
    studentName: 'Alex Adventurer',
    starCount: 1250,
    isElementary: true,
    activeTab: 'hatchery',
    incubatingEggs: DEFAULT_INCUBATING_EGGS,
    pets: DEFAULT_STUDENT_PETS,
  },
};

