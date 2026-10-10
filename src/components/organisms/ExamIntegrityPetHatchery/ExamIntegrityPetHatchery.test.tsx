import { describe, it, expect } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import {
  ExamIntegrityPetHatchery,
  DEFAULT_INCUBATING_EGGS,
  DEFAULT_STUDENT_PETS,
  createSproutlingPet,
  createFrostpawPet,
  createFirePhoenixPet,
  createAstralDragonPet,
  createVoidDragonPet,
  rollMysteryPet,
  formatHatchTime,
  PET_CODEX_REGISTRY,
  ALL_PET_CODEX_REGISTRY,
} from './ExamIntegrityPetHatchery';

describe('ExamIntegrityPetHatchery', () => {
  it('renders incubator view with Fire Phoenix egg and equip egg action', () => {
    const html = renderToString(
      <ExamIntegrityPetHatchery
        starBalance={500}
        incubatingEggs={DEFAULT_INCUBATING_EGGS}
        pets={DEFAULT_STUDENT_PETS}
      />
    );

    expect(html).toContain('Pet Hatchery &amp; Sanctuary');
    expect(html).toContain('Incubator');
    expect(html).toContain('My Pets');
    expect(html).toContain('Primordial Fire Phoenix Egg');
    expect(html).toContain('Equipped Companion');
    expect(html).toContain('Crack &amp; Fissure Progress');
    expect(html).toContain('STRIKE &amp; CRACK');
  });

  it('renders empty incubator state when no eggs available', () => {
    const html = renderToString(
      <ExamIntegrityPetHatchery
        starBalance={500}
        incubatingEggs={[]}
        pets={DEFAULT_STUDENT_PETS}
      />
    );

    expect(html).toContain('No Eggs in Incubator');
  });

  it('renders Phoenix Codex tab with all 5 evolution levels and Stitch lore', () => {
    const html = renderToString(
      <ExamIntegrityPetHatchery
        starBalance={800}
        defaultTab="codex"
        incubatingEggs={DEFAULT_INCUBATING_EGGS}
        pets={DEFAULT_STUDENT_PETS}
      />
    );

    expect(html).toContain('Phoenix Codex (All 5 Levels)');
    expect(html).toContain('Total Evolution Stages');
    expect(html).toContain('5 Solar Tiers');
    expect(html).toContain('Sun Ember Fledgling');
    expect(html).toContain('Ignited Pyrepaw');
    expect(html).toContain('Solar Firebird');
    expect(html).toContain('Pyre Sovereign');
    expect(html).toContain('Primordial Solar Emperor');
  });

  it('renders My Pets sanctuary with equipped Phoenix and evolution switcher buttons', () => {
    const html = renderToString(
      <ExamIntegrityPetHatchery
        starBalance={800}
        defaultTab="pets"
        incubatingEggs={DEFAULT_INCUBATING_EGGS}
        pets={DEFAULT_STUDENT_PETS}
      />
    );

    expect(html).toContain('Pyra');
    expect(html).toContain('Primordial Solar Phoenix');
    expect(html).toContain('Active Companion');
    expect(html).toContain('Inspect Evolution Forms');
    expect(html).toContain('Levels in Stitch');
  });

  it('renders sanctuary with all 5 pet rarities matching exact stage counts', () => {
    const html = renderToString(
      <ExamIntegrityPetHatchery
        starBalance={1500}
        defaultTab="pets"
        incubatingEggs={DEFAULT_INCUBATING_EGGS}
        pets={[
          createSproutlingPet(1, false),
          createFrostpawPet(1, false),
          createFirePhoenixPet(1, true),
          createAstralDragonPet(1, false),
          createVoidDragonPet(1, false),
        ]}
      />
    );

    // Common (3 stages)
    expect(html).toContain('Sprout');
    expect(html).toContain('Flora Sproutling Seedling');
    expect(html).toContain('Common');

    // Rare (4 stages)
    expect(html).toContain('Glacia');
    expect(html).toContain('Arctic Snow Leopard');
    expect(html).toContain('Rare');

    // Epic (5 stages)
    expect(html).toContain('Pyra');
    expect(html).toContain('Primordial Solar Phoenix');
    expect(html).toContain('Epic');

    // Legendary (6 stages)
    expect(html).toContain('Astra');
    expect(html).toContain('Celestial Astral Dragon');
    expect(html).toContain('Legendary');

    // Mythic (8 stages)
    expect(html).toContain('Nihilus');
    expect(html).toContain('Mythic Void Abyssal Dragon');
    expect(html).toContain('Mythic');
  });

  it('verifies PET_CODEX_REGISTRY defines all 5 rarities with proper stage counts', () => {
    expect(PET_CODEX_REGISTRY.sproutling.totalStages).toBe(3);
    expect(PET_CODEX_REGISTRY.sproutling.rarity).toBe('Common');
    expect(PET_CODEX_REGISTRY.sproutling.stages).toHaveLength(3);

    expect(PET_CODEX_REGISTRY.frostpaw.totalStages).toBe(4);
    expect(PET_CODEX_REGISTRY.frostpaw.rarity).toBe('Rare');
    expect(PET_CODEX_REGISTRY.frostpaw.stages).toHaveLength(4);

    expect(PET_CODEX_REGISTRY.phoenix.totalStages).toBe(5);
    expect(PET_CODEX_REGISTRY.phoenix.rarity).toBe('Epic');
    expect(PET_CODEX_REGISTRY.phoenix.stages).toHaveLength(5);

    expect(PET_CODEX_REGISTRY.astral.totalStages).toBe(6);
    expect(PET_CODEX_REGISTRY.astral.rarity).toBe('Legendary');
    expect(PET_CODEX_REGISTRY.astral.stages).toHaveLength(6);

    expect(PET_CODEX_REGISTRY.void.totalStages).toBe(8);
    expect(PET_CODEX_REGISTRY.void.rarity).toBe('Mythic');
    expect(PET_CODEX_REGISTRY.void.stages).toHaveLength(8);
  });

  it('verifies ALL_PET_CODEX_REGISTRY has multiple distinct pets per rarity conforming to stage rules', () => {
    // Common (3 stages)
    ['sproutling', 'pipflick', 'embersqueak', 'zephyrpuff'].forEach((k) => {
      expect(ALL_PET_CODEX_REGISTRY[k].totalStages).toBe(3);
      expect(ALL_PET_CODEX_REGISTRY[k].rarity).toBe('Common');
      expect(ALL_PET_CODEX_REGISTRY[k].stages).toHaveLength(3);
    });

    // Rare (4 stages)
    ['frostpaw', 'magmafang', 'voltwing', 'thundercat'].forEach((k) => {
      expect(ALL_PET_CODEX_REGISTRY[k].totalStages).toBe(4);
      expect(ALL_PET_CODEX_REGISTRY[k].rarity).toBe('Rare');
      expect(ALL_PET_CODEX_REGISTRY[k].stages).toHaveLength(4);
    });

    // Epic (5 stages)
    ['phoenix', 'chronochimera', 'shadowpanther', 'stormstag'].forEach((k) => {
      expect(ALL_PET_CODEX_REGISTRY[k].totalStages).toBe(5);
      expect(ALL_PET_CODEX_REGISTRY[k].rarity).toBe('Epic');
      expect(ALL_PET_CODEX_REGISTRY[k].stages).toHaveLength(5);
    });

    // Legendary (6 stages)
    ['astraldragon', 'astralleviathan', 'solarwyvern'].forEach((k) => {
      expect(ALL_PET_CODEX_REGISTRY[k].totalStages).toBe(6);
      expect(ALL_PET_CODEX_REGISTRY[k].rarity).toBe('Legendary');
      expect(ALL_PET_CODEX_REGISTRY[k].stages).toHaveLength(6);
    });

    // Mythic (8 stages)
    ['voiddragon', 'chronodraco', 'aegispaladin'].forEach((k) => {
      expect(ALL_PET_CODEX_REGISTRY[k].totalStages).toBe(8);
      expect(ALL_PET_CODEX_REGISTRY[k].rarity).toBe('Mythic');
      expect(ALL_PET_CODEX_REGISTRY[k].stages).toHaveLength(8);
    });
  });

  it('renders Codex view with rarity filters and multi-pet bestiary selector', () => {
    const html = renderToString(
      <ExamIntegrityPetHatchery
        starBalance={1000}
        defaultTab="codex"
        incubatingEggs={DEFAULT_INCUBATING_EGGS}
        pets={DEFAULT_STUDENT_PETS}
      />
    );

    expect(html).toContain('Filter Rarity:');
    expect(html).toContain('Common');
    expect(html).toContain('Rare');
    expect(html).toContain('Epic');
    expect(html).toContain('Legendary');
    expect(html).toContain('Mythic');
    expect(html).toContain('Select Bestiary:');
  });

  it('renders incubator view displaying 8-hour hatching timer for mystery egg', () => {
    const html = renderToString(
      <ExamIntegrityPetHatchery
        starBalance={600}
        incubatingEggs={DEFAULT_INCUBATING_EGGS}
        pets={DEFAULT_STUDENT_PETS}
      />
    );

    expect(html).toContain('Ancient Mysterious Egg');
    expect(html).toContain('Mystery Rarity · 100% Luck Based');
    expect(html).toContain('8h Incubation');
  });

  it('formats remaining hatching seconds into hh mm ss string accurately', () => {
    expect(formatHatchTime(28800)).toBe('08h 00m 00s');
    expect(formatHatchTime(25920)).toBe('07h 12m 00s');
    expect(formatHatchTime(3665)).toBe('01h 01m 05s');
    expect(formatHatchTime(0)).toBe('00h 00m 00s');
  });

  it('verifies rollMysteryPet accurately rolls pets according to drop percentages', () => {
    // 0-49: Common (3 stages)
    const commonPet = rollMysteryPet(25);
    expect(commonPet.rarity).toBe('Common');
    expect(commonPet.evolutionStages).toHaveLength(3);

    // 50-77: Rare (4 stages)
    const rarePet = rollMysteryPet(60);
    expect(rarePet.rarity).toBe('Rare');
    expect(rarePet.evolutionStages).toHaveLength(4);

    // 78-91: Epic (5 stages)
    const epicPet = rollMysteryPet(85);
    expect(epicPet.rarity).toBe('Epic');
    expect(epicPet.evolutionStages).toHaveLength(5);

    // 92-97: Legendary (6 stages)
    const legendaryPet = rollMysteryPet(95);
    expect(legendaryPet.rarity).toBe('Legendary');
    expect(legendaryPet.evolutionStages).toHaveLength(6);

    // 98-100: Mythic (8 stages)
    const mythicPet = rollMysteryPet(99);
    expect(mythicPet.rarity).toBe('Mythic');
    expect(mythicPet.evolutionStages).toHaveLength(8);
  });
});


