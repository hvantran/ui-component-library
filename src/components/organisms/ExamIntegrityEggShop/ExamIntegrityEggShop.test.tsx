import { describe, it, expect } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { ExamIntegrityEggShop, DEFAULT_SHOP_EGGS, DEFAULT_MYSTERY_EGG, RARITY_DROP_RATES_SHOP } from './ExamIntegrityEggShop';

describe('ExamIntegrityEggShop', () => {
  it('renders shop featuring single mystery egg with 8-hour incubation time and price', () => {
    const html = renderToString(
      <ExamIntegrityEggShop starBalance={850} items={DEFAULT_SHOP_EGGS} />
    );

    expect(html).toContain('Ancient Mysterious Egg');
    expect(html).toContain('8 Hours Hatching Time');
    expect(html).toContain('250');
    expect(html).toContain('Stars');
    expect(html).toContain('Adopt Mystery Egg');
    expect(html).not.toContain('Egg &amp; Companion Emporium');
  });

  it('verifies rarity drop rates table is removed from shop showcase card', () => {
    const html = renderToString(
      <ExamIntegrityEggShop starBalance={850} items={DEFAULT_SHOP_EGGS} />
    );

    expect(html).not.toContain('Rarity Drop Rates (Luck Chance)');
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

  it('renders category headers and dividers between multiple categories', () => {
    const testCategories = [
      {
        id: 'eggs',
        title: 'Companion Eggs',
        description: 'Eggs ready to hatch',
        items: [DEFAULT_SHOP_EGGS[0]],
      },
      {
        id: 'treats',
        title: 'Pet Treats & Snacks',
        description: 'Delicious food for EXP',
        items: [
          {
            id: 'berry-treat',
            name: 'Star Berry Treat',
            tier: 'dragon' as const,
            rarity: 'Common' as const,
            price: 50,
            description: 'Yummy berry treat',
            hatchedPetName: '',
            petElement: 'Nature',
          },
        ],
      },
    ];

    const html = renderToString(
      <ExamIntegrityEggShop starBalance={1000} categories={testCategories} />
    );

    expect(html).toContain('Companion Eggs');
    expect(html).toContain('Pet Treats &amp; Snacks');
    expect(html).toContain('Star Berry Treat');
    expect(html).toContain('shop-category-divider');
  });

  it('auto-groups flat items by category with dividers', () => {
    const items = [
      {
        ...DEFAULT_SHOP_EGGS[0],
        category: 'eggs',
        categoryTitle: 'Companion Eggs',
      },
      {
        id: 'potion-1',
        name: 'Exp Boost Potion',
        tier: 'dragon' as const,
        rarity: 'Rare' as const,
        price: 150,
        description: 'Increases pet exp',
        hatchedPetName: '',
        petElement: 'Arcane',
        category: 'potions',
        categoryTitle: 'Magic Potions',
      },
    ];

    const html = renderToString(
      <ExamIntegrityEggShop starBalance={1000} items={items} />
    );

    expect(html).toContain('Companion Eggs');
    expect(html).toContain('Magic Potions');
    expect(html).toContain('Exp Boost Potion');
    expect(html).toContain('shop-category-divider');
  });
});

