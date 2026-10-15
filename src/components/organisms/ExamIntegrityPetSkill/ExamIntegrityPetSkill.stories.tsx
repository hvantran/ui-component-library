import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import voidDragonPoster from '../../../assets/pets/voiddragon-stage-8.png';
import { ExamIntegrityPetSkill } from './ExamIntegrityPetSkill';
import { VOID_SINGULARITY_SKILL } from '../ExamIntegrityPetHatchery/petsData';

const ControlledPetSkill = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="max-w-sm p-6">
      <ExamIntegrityPetSkill
        skill={VOID_SINGULARITY_SKILL}
        posterUrl={voidDragonPoster}
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
  render: () => <ControlledPetSkill />,
};