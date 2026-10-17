import { describe, it, expect } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import {
  ExamIntegrityTeacherSettings,
  type SystemSettingsData,
} from './ExamIntegrityTeacherSettings';

describe('ExamIntegrityTeacherSettings', () => {
  const initialSettings: SystemSettingsData = {
    egg_shop_price_stars: 250,
    egg_hatch_duration_hours: 8,
    strike_crack_star_cost: 25,
    equip_egg_star_cost: 25,
    pet_grow_star_cost: 25,
    pet_grow_exp_gain: 60,
    pet_max_level: 10,
    pet_base_exp_needed: 100,
    stars_per_score_point: 1.0,
    stars_per_answered_question: 0.5,
    stars_per_user_level: 20,
  };

  it('renders all setting sections and default values', () => {
    const html = renderToString(
      <ExamIntegrityTeacherSettings
        settings={initialSettings}
        onSettingsChange={() => {}}
        onSave={() => {}}
        onResetDefaults={() => {}}
      />
    );

    expect(html).toContain('System &amp; Gameplay Settings');
    expect(html).toContain('Egg Shop &amp; Incubation Chamber');
    expect(html).toContain('Egg Rarity Drop Rates (% Chance)');
    expect(html).toContain('Common (%)');
    expect(html).toContain('Rare (%)');
    expect(html).toContain('Epic (%)');
    expect(html).toContain('Legendary (%)');
    expect(html).toContain('Mythic (%)');
    expect(html).toContain('Companion Pet Growth &amp; Progression');
    expect(html).toContain('Star Rewards &amp; Gamification Economy');
    expect(html).toContain('Stars Per Answered Question');
    expect(html).toContain('Egg Shop Price (Stars)');
    expect(html).toContain('250');
  });
});

