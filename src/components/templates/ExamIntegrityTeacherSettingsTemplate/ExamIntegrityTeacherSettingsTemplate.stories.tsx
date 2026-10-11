import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  ExamIntegrityTeacherSettingsTemplate,
  type SystemSettingsData,
} from './ExamIntegrityTeacherSettingsTemplate';

const meta: Meta<typeof ExamIntegrityTeacherSettingsTemplate> = {
  title: 'Templates/ExamIntegrityTeacherSettingsTemplate',
  component: ExamIntegrityTeacherSettingsTemplate,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof ExamIntegrityTeacherSettingsTemplate>;

export const Default: Story = {
  render: () => {
    const [settings, setSettings] = useState<SystemSettingsData>({
      egg_shop_price_stars: 250,
      egg_hatch_duration_hours: 8,
      strike_crack_star_cost: 25,
      equip_egg_star_cost: 25,
      pet_grow_star_cost: 25,
      pet_grow_exp_gain: 60,
      pet_max_level: 10,
      pet_base_exp_needed: 100,
      stars_per_score_point: 1.0,
      stars_per_user_level: 20,
    });

    return (
      <ExamIntegrityTeacherSettingsTemplate
        userName="Prof. Alexander Wright"
        userRole="Lead Proctor"
        settings={settings}
        onSettingsChange={(key, val) => setSettings((prev) => ({ ...prev, [key]: val }))}
        onSave={(e) => {
          e.preventDefault();
          alert('Saved!');
        }}
        onResetDefaults={() => alert('Reset to defaults!')}
      />
    );
  },
};

