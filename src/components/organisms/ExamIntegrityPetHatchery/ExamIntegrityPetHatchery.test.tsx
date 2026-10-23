import { describe, it, expect } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import {
  ExamIntegrityPetHatchery,
  formatHatchTime,
  PetEvolutionModal,
  PetCard,
} from './ExamIntegrityPetHatchery';
import {
  DEFAULT_INCUBATING_EGGS,
  DEFAULT_STUDENT_PETS,
  createSproutlingPet,
  createFrostpawPet,
  createFirePhoenixPet,
  createAstralDragonPet,
  createAstralLeviathanPet,
  createVoidDragonPet,
  rollMysteryPet,
  PET_CODEX_REGISTRY,
  ALL_PET_CODEX_REGISTRY,
} from './mockPets';

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
    expect(html).toContain('title="Species Type: Avian"');
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
    expect(html).toContain('Common');
    expect(html).toContain('title="Species Type: Plant"');

    // Rare (4 stages)
    expect(html).toContain('Glacia');
    expect(html).toContain('Rare');
    expect(html).toContain('title="Species Type: Beast"');

    // Epic (5 stages)
    expect(html).toContain('Pyra');
    expect(html).toContain('Epic');
    expect(html).toContain('title="Species Type: Avian"');

    // Legendary (6 stages)
    expect(html).toContain('Astra');
    expect(html).toContain('Legendary');
    expect(html).toContain('title="Species Type: Dragon"');
    expect(html).toContain('title="Species Type: Celestial"');

    // Mythic (8 stages)
    expect(html).toContain('Nihilus');
    expect(html).toContain('Mythic');
    expect(html).toContain('title="Species Type: Void"');
    expect(html).toContain('title="Species Type: Mythical"');
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

  it('automatically enriches pet missing evolutionStages and renders stage buttons and Evolution Tree', () => {
    const rawPet: StudentPet = {
      id: 'pet-umbra-server',
      name: 'Umbra (Umbral Eclipse Panther)',
      species: 'Umbral Eclipse Panther',
      rarity: 'Epic',
      tier: 'dragon',
      element: 'Shadow / Cosmic',
      level: 6,
      maxLevel: 10,
      currentExp: 385,
      expNeeded: 448,
      growthCostInStars: 25,
      stageLevel: 3,
      stageName: 'Eclipsefang',
      avatarEmoji: '🐆',
      stats: {
        vitality: 85,
        wisdom: 85,
        integrityBond: 90,
        solarRadiance: 80,
      },
      // Note: evolutionStages and skills are intentionally omitted (e.g. from server API)
    };

    const html = renderToString(
      <ExamIntegrityPetHatchery
        starBalance={500}
        defaultTab="pets"
        incubatingEggs={[]}
        pets={[rawPet]}
        petLibrary={ALL_PET_CODEX_REGISTRY}
      />
    );

    expect(html).toContain('Inspect Evolution Forms');
    expect(html).toContain('Levels in Stitch');
    expect(html).toContain('Evolution Tree');
    expect(html).toContain('Eclipsefang');
    expect(html).toContain('Eclipse Fang');
    expect(html).toContain('Lvl <!-- -->1');
    expect(html).toContain('Lvl <!-- -->4');
    expect(html).toContain('Lvl <!-- -->6');
    expect(html).toContain('Lvl <!-- -->8');
    expect(html).toContain('Lvl <!-- -->10');
  });

  it('renders standardized element icon badge and species type icon on pet image canvas without raw species text', () => {
    const sproutPet = createSproutlingPet(1, false);
    const html = renderToString(
      <ExamIntegrityPetHatchery
        starBalance={500}
        defaultTab="pets"
        incubatingEggs={[]}
        pets={[sproutPet]}
      />
    );

    // Verify element badge exists on pet image canvas
    expect(html).toContain(`data-testid="pet-element-${sproutPet.id}"`);
    expect(html).toContain('Flora');
    // Verify species type icon exists in vertical column under level
    expect(html).toContain(`data-testid="pet-species-types-vertical-${sproutPet.id}"`);
    expect(html).toContain(`data-testid="pet-species-type-${sproutPet.id}-plant"`);
    expect(html).toContain('title="Species Type: Plant"');
    // Verify raw species text is not displayed on the card
    expect(html).not.toContain('Flora Sproutling Seedling');
  });

  it('normalizes legacy compound element strings into standard elements', () => {
    const legacyPet: StudentPet = {
      ...createFirePhoenixPet(1, false),
      id: 'pet-phoenix-legacy',
      element: 'Solar Fire / Flame',
    };
    const html = renderToString(
      <ExamIntegrityPetHatchery
        starBalance={500}
        defaultTab="pets"
        incubatingEggs={[]}
        pets={[legacyPet]}
      />
    );

    expect(html).toContain(`data-testid="pet-element-${legacyPet.id}"`);
    expect(html).toContain('Fire');
    expect(html).not.toContain('Solar Fire / Flame');
  });

  it('verifies exact element and species type counts per pet rarity formula', () => {
    const commonPet = createSproutlingPet(1, false);
    const rarePet = createFrostpawPet(1, false);
    const epicPet = createFirePhoenixPet(1, false);
    const legendaryPet = createAstralDragonPet(1, false);
    const mythicPet = createVoidDragonPet(1, false);

    // Common: 1 element, 1 species type
    expect(commonPet.elements).toHaveLength(1);
    expect(commonPet.speciesTypes).toHaveLength(1);
    expect(commonPet.elements).toEqual(['Flora']);
    expect(commonPet.speciesTypes).toEqual(['Plant']);

    // Rare: 2 elements, 1 species type
    expect(rarePet.elements).toHaveLength(2);
    expect(rarePet.speciesTypes).toHaveLength(1);
    expect(rarePet.elements).toEqual(['Ice', 'Wind']);
    expect(rarePet.speciesTypes).toEqual(['Beast']);

    // Epic: 1 element, 1 species type
    expect(epicPet.elements).toHaveLength(1);
    expect(epicPet.speciesTypes).toHaveLength(1);
    expect(epicPet.elements).toEqual(['Fire']);
    expect(epicPet.speciesTypes).toEqual(['Avian']);

    // Legendary: 3 elements, 2 species types
    expect(legendaryPet.elements).toHaveLength(3);
    expect(legendaryPet.speciesTypes).toHaveLength(2);
    expect(legendaryPet.elements).toEqual(['Astral', 'Cosmic', 'Fire']);
    expect(legendaryPet.speciesTypes).toEqual(['Dragon', 'Celestial']);

    // Mythic: 4 elements, 3 species types
    expect(mythicPet.elements).toHaveLength(4);
    expect(mythicPet.speciesTypes).toHaveLength(3);
    expect(mythicPet.elements).toEqual(['Void', 'Cosmic', 'Shadow', 'Fire']);
    expect(mythicPet.speciesTypes).toEqual(['Dragon', 'Void', 'Mythical']);

    // Render HTML and assert multiple element badges on cards
    const html = renderToString(
      <ExamIntegrityPetHatchery
        starBalance={1500}
        defaultTab="pets"
        incubatingEggs={[]}
        pets={[rarePet, legendaryPet, mythicPet]}
      />
    );

    // Rare 2 elements in vertical column on right side
    expect(html).toContain(`data-testid="pet-elements-vertical-${rarePet.id}"`);
    expect(html).toContain(`data-testid="pet-element-${rarePet.id}"`);
    expect(html).toContain(`data-testid="pet-element-${rarePet.id}-1"`);

    // Legendary 3 elements
    expect(html).toContain(`data-testid="pet-elements-vertical-${legendaryPet.id}"`);
    expect(html).toContain(`data-testid="pet-element-${legendaryPet.id}"`);
    expect(html).toContain(`data-testid="pet-element-${legendaryPet.id}-1"`);
    expect(html).toContain(`data-testid="pet-element-${legendaryPet.id}-2"`);
    expect(html).toContain(`data-testid="pet-species-type-${legendaryPet.id}-dragon"`);
    expect(html).toContain(`data-testid="pet-species-type-${legendaryPet.id}-celestial"`);

    // Mythic 4 elements
    expect(html).toContain(`data-testid="pet-elements-vertical-${mythicPet.id}"`);
    expect(html).toContain(`data-testid="pet-element-${mythicPet.id}"`);
    expect(html).toContain(`data-testid="pet-element-${mythicPet.id}-1"`);
    expect(html).toContain(`data-testid="pet-element-${mythicPet.id}-2"`);
    expect(html).toContain(`data-testid="pet-element-${mythicPet.id}-3"`);
    expect(html).toContain(`data-testid="pet-species-type-${mythicPet.id}-dragon"`);
    expect(html).toContain(`data-testid="pet-species-type-${mythicPet.id}-void"`);
    expect(html).toContain(`data-testid="pet-species-type-${mythicPet.id}-mythical"`);
  });

  it('renders preview mode modal with organized Elements and Species sections', () => {
    const mythicPet = createVoidDragonPet(1, false);
    const html = renderToString(
      <ExamIntegrityPetHatchery
        starBalance={1500}
        defaultTab="pets"
        incubatingEggs={[]}
        pets={[mythicPet]}
        initialPreviewPet={mythicPet}
      />
    );

    // Modal dialog rendered
    expect(html).toContain('data-testid="pet-full-image-modal"');
    expect(html).toContain('data-testid="close-full-image-modal"');

    // Organized Elements row
    expect(html).toContain('data-testid="pet-preview-elements-row"');
    expect(html).toContain('Elements:');
    expect(html).toContain('Void');
    expect(html).toContain('Cosmic');
    expect(html).toContain('Shadow');
    expect(html).toContain('Fire');

    // Organized Species row
    expect(html).toContain('data-testid="pet-preview-species-row"');
    expect(html).toContain('Species:');
    expect(html).toContain('Dragon');
    expect(html).toContain('Void');
    expect(html).toContain('Mythical');
  });

  it('renders distinct abilities and correct stage progression for Leviathan stage 5 and stage 6', () => {
    const leviathanStage5 = createAstralLeviathanPet(5, false);
    const leviathanStage6 = createAstralLeviathanPet(6, false);

    expect(leviathanStage5.stageLevel).toBe(5);
    expect(leviathanStage5.level).toBe(8);
    expect(leviathanStage5.stageName).toBe('Cosmos Emperor Leviathan');

    expect(leviathanStage6.stageLevel).toBe(6);
    expect(leviathanStage6.level).toBe(10);
    expect(leviathanStage6.stageName).toBe('Primordial Astral Leviathan Overlord');

    const html = renderToString(
      <ExamIntegrityPetHatchery
        starBalance={9999}
        defaultTab="pets"
        incubatingEggs={[]}
        pets={[leviathanStage5, leviathanStage6]}
      />
    );

    // Stage 5 shows Astral Tide Convergence and Cosmos Emperor Leviathan
    expect(html).toContain('Astral Tide Convergence');
    expect(html).toContain('Cosmos Emperor Leviathan');

    // Stage 6 shows Primordial Cosmic Oceanic Song and Primordial Astral Leviathan Overlord
    expect(html).toContain('Primordial Cosmic Oceanic Song');
    expect(html).toContain('Primordial Astral Leviathan Overlord');
  });

  it('renders redesigned concise PetEvolutionModal tree without verbose descriptions', () => {
    const phoenix = createFirePhoenixPet(2, true);
    const html = renderToString(
      <PetEvolutionModal
        pet={phoenix}
        onClose={() => {}}
      />
    );

    expect(html).toContain('Evolution Tree');
    expect(html).toContain('Primordial Solar Phoenix');
    expect(html).toContain('evolution stages and level requirements');
    expect(html).toContain('Stage 1: Sun Ember Fledgling');
    expect(html).toContain('Stage 2: Ignited Pyrepaw');
    expect(html).toContain('Stage 3: Solar Firebird');
    expect(html).toContain('Stage 4: Pyre Sovereign');
    expect(html).toContain('Stage 5: Primordial Solar Emperor');
    expect(html).toContain('Current');
    expect(html).toContain('Unlocked');
    // Verifies stage abilities render with space-efficient compact Cast action when required level is reached
    expect(html).toContain('Cast');
    expect(html).toContain('Lvl 6');
    // Verifies verbose descriptions are omitted from the concise evolution tree
    expect(html).not.toContain('Hatched in the heart of solar flares');
    expect(html).not.toContain('Tiny baby solar fledgling chick');
  });

  it('displays ability corresponding to inspected evolution stage when stage is unlocked', () => {
    // Fire Phoenix at stage 3 (level 6, so stages 1, 2, 3 are unlocked; stages 4 and 5 are locked)
    const phoenix = createFirePhoenixPet(3, true);

    // Inspect stage 1 (unlocked) -> shows Stage 1 ability (Solar Sparkle)
    const htmlStage1 = renderToString(
      <PetCard
        pet={phoenix}
        starBalance={100}
        activeStageNum={1}
        wobblingPetId={null}
        activePetSkill={null}
        onSetPreviewStage={() => {}}
        onSetWobblingPetId={() => {}}
        onOpenEvolutionModal={() => {}}
        onOpenFullImageModal={() => {}}
        onSetActivePetSkill={() => {}}
        onGrowPet={() => {}}
        onEquipPet={() => {}}
      />
    );
    expect(htmlStage1).toContain('Solar Sparkle');
    expect(htmlStage1).not.toContain('Solar Phoenix Dive');

    // Inspect stage 2 (unlocked) -> shows Stage 2 ability (Ignited Radiance)
    const htmlStage2 = renderToString(
      <PetCard
        pet={phoenix}
        starBalance={100}
        activeStageNum={2}
        wobblingPetId={null}
        activePetSkill={null}
        onSetPreviewStage={() => {}}
        onSetWobblingPetId={() => {}}
        onOpenEvolutionModal={() => {}}
        onOpenFullImageModal={() => {}}
        onSetActivePetSkill={() => {}}
        onGrowPet={() => {}}
        onEquipPet={() => {}}
      />
    );
    expect(htmlStage2).toContain('Ignited Radiance');
    expect(htmlStage2).not.toContain('Solar Phoenix Dive');

    // Inspect stage 3 (unlocked, current level) -> shows Stage 3 ability (Solar Phoenix Dive)
    const htmlStage3 = renderToString(
      <PetCard
        pet={phoenix}
        starBalance={100}
        activeStageNum={3}
        wobblingPetId={null}
        activePetSkill={null}
        onSetPreviewStage={() => {}}
        onSetWobblingPetId={() => {}}
        onOpenEvolutionModal={() => {}}
        onOpenFullImageModal={() => {}}
        onSetActivePetSkill={() => {}}
        onGrowPet={() => {}}
        onEquipPet={() => {}}
      />
    );
    expect(htmlStage3).toContain('Solar Phoenix Dive');

    // Inspect stage 4 (locked, minLevel 8 > pet.level 6) -> falls back to highest unlocked ability (Stage 3: Solar Phoenix Dive)
    const htmlStage4 = renderToString(
      <PetCard
        pet={phoenix}
        starBalance={100}
        activeStageNum={4}
        wobblingPetId={null}
        activePetSkill={null}
        onSetPreviewStage={() => {}}
        onSetWobblingPetId={() => {}}
        onOpenEvolutionModal={() => {}}
        onOpenFullImageModal={() => {}}
        onSetActivePetSkill={() => {}}
        onGrowPet={() => {}}
        onEquipPet={() => {}}
      />
    );
    expect(htmlStage4).toContain('Solar Phoenix Dive');
    expect(htmlStage4).not.toContain('Pyre Sovereign Rebirth');
  });
});
