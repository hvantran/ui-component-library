import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import voidDragonPoster from '../../../assets/pets/voiddragon-stage-8.png';
import sproutlingPoster from '../../../assets/pets/sproutling-stage-1.png';
import firePhoenixPoster from '../../../assets/pets/phoenix-stage-5.png';
import chronoDracoPoster from '../../../assets/pets/chronodraco-stage-8.png';
import aegisPaladinPoster from '../../../assets/pets/aegispaladin-stage-8.png';
import { ExamIntegrityPetSkill } from './ExamIntegrityPetSkill';
import type { PetSkill } from './ExamIntegrityPetSkill';
import {
  VOID_SINGULARITY_SKILL,
  createSproutlingPet,
  createFirePhoenixPet,
  createChronoDracoPet,
  createAegisPaladinPet,
} from '../ExamIntegrityPetHatchery/petsData';

const ControlledPetSkill = ({
  skill,
  posterUrl,
  locked = false,
}: {
  skill: PetSkill;
  posterUrl: string;
  locked?: boolean;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="max-w-sm p-6">
      <ExamIntegrityPetSkill
        skill={skill}
        posterUrl={posterUrl}
        locked={locked}
        open={open}
        onOpenChange={setOpen}
      />
    </div>
  );
};

const meta: Meta<typeof ExamIntegrityPetSkill> = {
  title: 'Organisms/ExamIntegrityPetSkill',
  component: ExamIntegrityPetSkill,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ExamIntegrityPetSkill>;

export const VoidSingularity: Story = {
  render: () => (
    <ControlledPetSkill
      skill={VOID_SINGULARITY_SKILL}
      posterUrl={voidDragonPoster}
    />
  ),
};

export const SproutlingSeedlingSprout: Story = {
  render: () => {
    const pet = createSproutlingPet(1, false);
    const skill = pet.skills?.[0];
    if (!skill) return null;
    return <ControlledPetSkill skill={skill} posterUrl={sproutlingPoster} />;
  },
};

export const FirePhoenixPrimordialSolarCorona: Story = {
  render: () => {
    const pet = createFirePhoenixPet(5, true);
    const skill = pet.skills?.[4];
    if (!skill) return null;
    return <ControlledPetSkill skill={skill} posterUrl={firePhoenixPoster} />;
  },
};

export const ChronoDracoLordOfAllTimelines: Story = {
  render: () => {
    const pet = createChronoDracoPet(8, false);
    const skill = pet.skills?.[7];
    if (!skill) return null;
    return <ControlledPetSkill skill={skill} posterUrl={chronoDracoPoster} />;
  },
};

export const AegisPaladinGalacticAegisBastion: Story = {
  render: () => {
    const pet = createAegisPaladinPet(8, false);
    const skill = pet.skills?.[7];
    if (!skill) return null;
    return <ControlledPetSkill skill={skill} posterUrl={aegisPaladinPoster} />;
  },
};

export const LockedSkillPreview: Story = {
  render: () => {
    const pet = createFirePhoenixPet(1, true);
    const skill = pet.skills?.[4];
    if (!skill) return null;
    return (
      <ControlledPetSkill
        skill={skill}
        posterUrl={firePhoenixPoster}
        locked={true}
      />
    );
  },
};