import { describe, it, expect } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { ExamIntegrityEggShop, DEFAULT_SHOP_EGGS, DEFAULT_MYSTERY_EGG, RARITY_DROP_RATES_SHOP } from './ExamIntegrityEggShop';

describe('ExamIntegrityEggShop', () => {
  it('renders shop featuring single mystery egg with 8-hour incubation time and star balance', () => {
    const html = renderToString(
      <ExamIntegrityEggShop starBalance={850} items={DEFAULT_SHOP_EGGS} />
    );

    expect(html).toContain('3D Pet Egg Shop');
    expect(html).toContain('850');
    expect(html).toContain('Stars');
    expect(html).toContain('Ancient Mysterious Egg');
    expect(html).toContain('8 Hours Hatching Time');
    expect(html).toContain('Adopt Mystery Egg');
  });

  it('renders all rarity drop rates showing luck percentage probabilities', () => {
    const html = renderToString(
      <ExamIntegrityEggShop starBalance={850} items={DEFAULT_SHOP_EGGS} />
    );

    expect(html).toContain('Rarity Drop Rates (Luck Chance)');
    expect(html).toContain('50%');
    expect(html).toContain('28%');
    expect(html).toContain('14%');
    expect(html).toContain('6%');
    expect(html).toContain('2%');
    expect(html).toContain('Common');
    expect(html).toContain('Rare');
    expect(html).toContain('Epic');
    expect(html).toContain('Legendary');
    expect(html).toContain('Mythic');
  });

  it('renders disabled state when student cannot afford mystery egg', () => {
    const html = renderToString(
      <ExamIntegrityEggShop starBalance={100} items={DEFAULT_SHOP_EGGS} />
    );

    expect(html).toContain('Need Stars');
  });

  it('verifies DEFAULT_SHOP_EGGS contains only one egg item with 8 hours incubation', () => {
    expect(DEFAULT_SHOP_EGGS).toHaveLength(1);
    expect(DEFAULT_SHOP_EGGS[0].name).toBe('Ancient Mysterious Egg');
    expect(DEFAULT_SHOP_EGGS[0].hatchDurationHours).toBe(8);
    expect(DEFAULT_SHOP_EGGS[0].price).toBe(250);
  });

  it('verifies RARITY_DROP_RATES_SHOP totals 100% with exact stage counts', () => {
    const totalPercent = RARITY_DROP_RATES_SHOP.reduce((sum, item) => sum + item.percent, 0);
    expect(totalPercent).toBe(100);

    const common = RARITY_DROP_RATES_SHOP.find((r) => r.rarity === 'Common');
    const rare = RARITY_DROP_RATES_SHOP.find((r) => r.rarity === 'Rare');
    const epic = RARITY_DROP_RATES_SHOP.find((r) => r.rarity === 'Epic');
    const legendary = RARITY_DROP_RATES_SHOP.find((r) => r.rarity === 'Legendary');
    const mythic = RARITY_DROP_RATES_SHOP.find((r) => r.rarity === 'Mythic');

    expect(common?.percent).toBe(50);
    expect(common?.stages).toBe(3);

    expect(rare?.percent).toBe(28);
    expect(rare?.stages).toBe(4);

    expect(epic?.percent).toBe(14);
    expect(epic?.stages).toBe(5);

    expect(legendary?.percent).toBe(6);
    expect(legendary?.stages).toBe(6);

    expect(mythic?.percent).toBe(2);
    expect(mythic?.stages).toBe(8);
  });
});

