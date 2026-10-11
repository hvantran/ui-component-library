import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  ExamIntegrityTeacherSettings,
  type SystemSettingsData,
} from './ExamIntegrityTeacherSettings';

const meta: Meta<typeof ExamIntegrityTeacherSettings> = {
  title: 'Organisms/ExamIntegrityTeacherSettings',
  component: ExamIntegrityTeacherSettings,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ExamIntegrityTeacherSettings>;

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
      <ExamIntegrityTeacherSettings
        settings={settings}
        onSettingsChange={(key, val) => setSettings((prev) => ({ ...prev, [key]: val }))}
        onSave={(e) => {
          e.preventDefault();
          alert('Settings saved!');
        }}
        onResetDefaults={() => alert('Reset to defaults')}
      />
    );
  },
};

