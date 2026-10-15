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

  it('verifies Phoenix Codex tab is removed from pet hatchery header', () => {
    const html = renderToString(
      <ExamIntegrityPetHatchery
        starBalance={800}
        incubatingEggs={DEFAULT_INCUBATING_EGGS}
        pets={DEFAULT_STUDENT_PETS}
      />
    );

    expect(html).not.toContain('Phoenix Codex (All 5 Levels)');
    expect(html).not.toContain('codex-tab-btn');
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

  it('defines cumulative level-gated skills for the Void Dragon', () => {
    const voidDragon = createVoidDragonPet(8, false);

    expect(voidDragon.skills).toHaveLength(8);
    expect(voidDragon.skills).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: 'void-singularity',
          name: 'Void Singularity',
          requiredLevel: 10,
          videoSources: expect.objectContaining({ mp4: expect.any(String) }),
        }),
        expect.objectContaining({
          id: 'cosmic-rift-breath',
          name: 'Cosmic Rift Breath',
          requiredLevel: 9,
          videoSources: expect.objectContaining({ mp4: expect.any(String) }),
        }),
      ])
    );
  });

  it('summarizes high-level pet skills on the card instead of rendering every trigger', () => {
    const html = renderToString(
      <ExamIntegrityPetHatchery
        defaultTab="pets"
        incubatingEggs={[]}
        pets={[createVoidDragonPet(8, false), createFirePhoenixPet(5, false)]}
      />
    );

    expect(html).toMatch(/8(?:<!-- -->)? skills/);
    expect(html).toContain('data-testid="pet-skill-trigger-void-singularity"');
    expect(html).not.toContain('data-testid="pet-skill-trigger-cosmic-rift-breath"');
  });

  it('renders strike button with star cost and disables when star balance is insufficient', () => {
    const htmlWithStars = renderToString(
      <ExamIntegrityPetHatchery
        starBalance={100}
        crackCostInStars={25}
        incubatingEggs={DEFAULT_INCUBATING_EGGS}
        pets={DEFAULT_STUDENT_PETS}
      />
    );
    expect(htmlWithStars).toContain('STRIKE &amp; CRACK (+25% • 25 ⭐)');

    const htmlWithoutStars = renderToString(
      <ExamIntegrityPetHatchery
        starBalance={10}
        crackCostInStars={25}
        incubatingEggs={DEFAULT_INCUBATING_EGGS}
        pets={DEFAULT_STUDENT_PETS}
      />
    );
    expect(htmlWithoutStars).toContain('disabled=""');
  });

  it('displays lock indicator for locked next level pet evolution stages', () => {
    const sproutPet = createSproutlingPet(1, false);
    const html = renderToString(
      <ExamIntegrityPetHatchery
        starBalance={100}
        defaultTab="pets"
        pets={[sproutPet]}
      />
    );
    // Locked higher stages should display lock indicator
    expect(html).toContain('🔒');
  });

  it('locks cracking and disables button when active egg is still hatching', () => {
    const hatchingEggs = [
      {
        ...DEFAULT_INCUBATING_EGGS[0],
        remainingSeconds: 14400, // 4 hours remaining
      },
    ];
    const html = renderToString(
      <ExamIntegrityPetHatchery
        starBalance={500}
        incubatingEggs={hatchingEggs}
      />
    );

    expect(html).toContain('HATCHING IN PROGRESS (04h 00m 00s LEFT)');
    expect(html).toContain('disabled=""');
    expect(html).toContain('Cracking locked until incubation completes');
  });

  it('displays remaining hatching time in incubator queue and ready status when hatching finished', () => {
    const mixedEggs = [
      {
        ...DEFAULT_INCUBATING_EGGS[0],
        id: 'egg-hatching-1',
        name: 'Cosmic Dragon Egg',
        remainingSeconds: 7200,
      },
      {
        ...DEFAULT_INCUBATING_EGGS[1],
        id: 'egg-ready-2',
        name: 'Primordial Phoenix Egg',
        remainingSeconds: 0,
      },
    ];
    const html = renderToString(
      <ExamIntegrityPetHatchery
        starBalance={500}
        incubatingEggs={mixedEggs}
      />
    );

    expect(html).toContain('Incubator Queue (2)');
    expect(html).toContain('02h 00m 00s left');
    expect(html).toContain('Ready to Crack &amp; Hatch!');
  });

  it('displays empty queue notice when incubator has 0 eggs', () => {
    const html = renderToString(
      <ExamIntegrityPetHatchery
        starBalance={500}
        incubatingEggs={[]}
      />
    );

    expect(html).toContain('Incubator Queue (0)');
    expect(html).toContain('Queue is empty');
  });

  it('disables Grow button and displays MAX LEVEL when pet reaches maxLevel', () => {
    const maxLevelPet = {
      ...createFirePhoenixPet(10, true),
      level: 10,
      maxLevel: 10,
      currentExp: 500,
      expNeeded: 500,
    };
    const html = renderToString(
      <ExamIntegrityPetHatchery
        starBalance={5000}
        defaultTab="pets"
        incubatingEggs={[]}
        pets={[maxLevelPet]}
      />
    );

    expect(html).toContain('MAX LEVEL');
    expect(html).toContain('data-testid="grow-pet-btn-');
    expect(html).toContain('Max Level');
    expect(html).not.toContain('Grow (25 ⭐)');
  });

  it('includes floating and ambient glow animation classes on pet card image', () => {
    const html = renderToString(
      <ExamIntegrityPetHatchery
        starBalance={1000}
        defaultTab="pets"
        incubatingEggs={[]}
        pets={[createSproutlingPet(1, false)]}
      />
    );

    expect(html).toContain('animate-pet-float');
    expect(html).toContain('animate-pet-glow');
  });
});



