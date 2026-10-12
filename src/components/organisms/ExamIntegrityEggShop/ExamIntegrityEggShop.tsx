import React, { useState } from 'react';
import {
  Sparkles,
  Info,
  CheckCircle2,
  X,
} from 'lucide-react';
import { Button } from '../../atoms/Button';
import { ThreeEggViewer, EggTier } from '../../molecules/ThreeEggViewer';
import { cn } from '../../../utils/cn';

export type EggRarity = 'Common' | 'Rare' | 'Epic' | 'Legendary' | 'Mythic';

export interface EggShopItem {
  id: string;
  name: string;
  tier: EggTier;
  rarity: EggRarity;
  price: number;
  description: string;
  hatchedPetName: string;
  petElement: string;
  petTypeIcon?: React.ReactNode;
  totalStages?: number;
  hatchDurationHours?: number;
  dropRates?: Record<string, number>;
}

export interface EggShopCategory {
  id: string;
  title: string;
  description?: string;
  icon?: React.ReactNode;
  items: EggShopItem[];
}

export interface ExamIntegrityEggShopProps {
  starBalance?: number;
  items?: EggShopItem[];
  categories?: EggShopCategory[];
  dropRates?: Record<string, number>;
  onPurchaseEgg?: (item: EggShopItem) => void;
  onOpenHatchery?: () => void;
  className?: string;
}

export const DEFAULT_MYSTERY_EGG: EggShopItem = {
  id: 'mystery-egg-ancient',
  name: 'Ancient Mysterious Egg',
  tier: 'dragon',
  rarity: 'Common',
  price: 250,
  description:
    'A sealed celestial egg pulsing with ancient magic. The inner species and rarity are completely veiled until hatched. Awakens into a companion based on lucky drop chances!',
  hatchedPetName: 'Mystery Companion ???',
  petElement: 'Cosmic / Unknown',
  totalStages: undefined,
  hatchDurationHours: 8,
};

export const createMysteryEggItem = (overrides?: Partial<EggShopItem>): EggShopItem => ({
  ...DEFAULT_MYSTERY_EGG,
  ...overrides,
});

export const DEFAULT_SHOP_EGGS: EggShopItem[] = [DEFAULT_MYSTERY_EGG];

export const DEFAULT_DROP_RATES: Record<string, number> = {
  Common: 50,
  Rare: 28,
  Epic: 14,
  Legendary: 6,
  Mythic: 2,
};

export const RARITY_DROP_RATES_SHOP = [
  {
    rarity: 'Common' as const,
    percent: 50,
    stages: 3,
    badgeClass: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border-emerald-300',
    description: 'Sproutling, Pipflick, Embersqueak, Zephyrpuff',
  },
  {
    rarity: 'Rare' as const,
    percent: 28,
    stages: 4,
    badgeClass: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-950 dark:text-cyan-300 border-cyan-300',
    description: 'Frostpaw, Magmafang, Voltwing, Thundercat',
  },
  {
    rarity: 'Epic' as const,
    percent: 14,
    stages: 5,
    badgeClass: 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 border-rose-300',
    description: 'Fire Phoenix, Chrono Chimera, Shadowpanther, Stormstag',
  },
  {
    rarity: 'Legendary' as const,
    percent: 6,
    stages: 6,
    badgeClass: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border-amber-300',
    description: 'Astral Dragon, Astral Leviathan, Solar Wyvern',
  },
  {
    rarity: 'Mythic' as const,
    percent: 2,
    stages: 8,
    badgeClass: 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300 border-purple-300',
    description: 'Void Abyssal Dragon, Chrono-Draco, Aegis Paladin',
  },
];

export const ExamIntegrityEggShop: React.FC<ExamIntegrityEggShopProps> = ({
  starBalance = 650,
  items = DEFAULT_SHOP_EGGS,
  categories,
  dropRates: customDropRates,
  onPurchaseEgg,
  onOpenHatchery,
  className,
}) => {
  const [inspectEgg, setInspectEgg] = useState<EggShopItem | null>(null);
  const [confirmModalItem, setConfirmModalItem] = useState<EggShopItem | null>(null);
  const [purchasedSuccess, setPurchasedSuccess] = useState<EggShopItem | null>(null);

  const getOddsBreakdown = (itemRates?: Record<string, number>) => {
    const rates: Record<string, number> = {
      ...DEFAULT_DROP_RATES,
      ...(customDropRates || {}),
      ...(itemRates || {}),
    };
    return {
      rates,
      shortText: `${rates.Common ?? 50}% C / ${rates.Rare ?? 28}% R / ${rates.Epic ?? 14}% E / ${rates.Legendary ?? 6}% L / ${rates.Mythic ?? 2}% M`,
      longText: `${rates.Common ?? 50}% Common · ${rates.Rare ?? 28}% Rare · ${rates.Epic ?? 14}% Epic · ${rates.Legendary ?? 6}% Legendary · ${rates.Mythic ?? 2}% Mythic`,
    };
  };

  const resolvedCategories: EggShopCategory[] = React.useMemo(() => {
    if (categories && categories.length > 0) {
      return categories;
    }
    const safeItems = items && items.length > 0 ? items : DEFAULT_SHOP_EGGS;
    const groupMap = new Map<string, { title: string; description?: string; icon?: React.ReactNode; items: EggShopItem[] }>();
    for (const item of safeItems) {
      const catKey = (item as any).category || 'eggs';
      const catTitle = (item as any).categoryTitle || (catKey === 'eggs' ? 'Companion Eggs' : catKey);
      if (!groupMap.has(catKey)) {
        groupMap.set(catKey, {
          title: catTitle,
          description: catKey === 'eggs' ? 'Mystery and elemental eggs to hatch companion pets' : undefined,
          icon: catKey === 'eggs' ? '🥚' : undefined,
          items: [],
        });
      }
      groupMap.get(catKey)!.items.push(item);
    }
    return Array.from(groupMap.entries()).map(([id, grp]) => ({
      id,
      title: grp.title,
      description: grp.description,
      icon: grp.icon,
      items: grp.items,
    }));
  }, [categories, items]);

  const handleBuyClick = (item: EggShopItem) => {
    setConfirmModalItem(item);
  };

  const handleConfirmPurchase = () => {
    if (!confirmModalItem) return;
    if (starBalance >= confirmModalItem.price) {
      if (onPurchaseEgg) {
        onPurchaseEgg(confirmModalItem);
      }
      setPurchasedSuccess(confirmModalItem);
      setConfirmModalItem(null);
    }
  };

  return (
    <div className={cn('w-full max-w-7xl mx-auto space-y-8', className)} data-testid="exam-integrity-egg-shop">
      {/* Wallet / Shop Summary Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-3xl bg-gradient-to-r from-amber-50 to-orange-50 dark:from-stone-900 dark:to-stone-800/80 border border-amber-200/70 dark:border-stone-700 shadow-sm">
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-2xl bg-amber-500 text-white flex items-center justify-center text-xl shadow-md shadow-amber-500/25">
            🛒
          </div>
          <div>
            <h1 className="text-lg font-extrabold text-stone-900 dark:text-white">
              Student Rewards Shop
            </h1>
            <p className="text-xs text-stone-600 dark:text-stone-400">
              Redeem stars earned from exams for companion eggs, treats, and supplies.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 self-start sm:self-auto px-4 py-2.5 rounded-2xl bg-white dark:bg-stone-950 border border-amber-300 dark:border-amber-700/60 shadow-sm">
          <span className="text-2xl">⭐</span>
          <div>
            <div className="text-[10px] font-extrabold uppercase text-stone-500 tracking-wider">
              Star Balance
            </div>
            <div className="text-base font-extrabold text-amber-500 dark:text-amber-400">
              {starBalance} Stars
            </div>
          </div>
        </div>
      </div>

      {/* Categories & Product Cards */}
      <div className="space-y-10">
        {resolvedCategories.map((category, catIdx) => (
          <div key={category.id} className="space-y-6" data-testid={`shop-category-${category.id}`}>
            {/* Category Header */}
            <div className="flex items-center justify-between pb-3 border-b border-stone-200 dark:border-stone-800">
              <div className="flex items-center gap-2.5">
                {category.icon ? (
                  <span className="text-2xl">{category.icon}</span>
                ) : (
                  <span className="text-2xl">📦</span>
                )}
                <div>
                  <h2 className="text-xl font-extrabold text-stone-900 dark:text-white flex items-center gap-2">
                    {category.title}
                  </h2>
                  {category.description && (
                    <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                      {category.description}
                    </p>
                  )}
                </div>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300">
                {category.items.length} {category.items.length === 1 ? 'item' : 'items'}
              </span>
            </div>

            {/* Category Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item) => {
                const canAfford = starBalance >= item.price;
                return (
                  <div
                    key={item.id}
                    data-testid={`egg-card-${item.id}`}
                    className="rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-md hover:shadow-lg transition-all flex flex-col justify-between overflow-hidden"
                  >
                    {/* 3D Egg Canvas Viewport */}
                    <div className="relative h-60 sm:h-64 bg-gradient-to-b from-[#1c0e07] via-[#0d0604] to-[#050201] flex items-center justify-center p-3 overflow-hidden">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />

                      {/* Badges on 3D Canvas */}
                      <div className="absolute top-3 left-3 z-10 flex flex-wrap gap-1.5">
                        <span className="px-2.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-amber-950/80 border border-amber-500 text-amber-300 shadow-sm backdrop-blur-md">
                          ✨ {item.rarity}
                        </span>
                        {item.hatchDurationHours && (
                          <span className="px-2.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-stone-950/80 border border-stone-700 text-stone-200 shadow-sm backdrop-blur-md">
                            {`⏳ ${item.hatchDurationHours} Hours Hatching Time`}
                          </span>
                        )}
                      </div>

                      <button
                        type="button"
                        title="Inspect Egg"
                        onClick={() => setInspectEgg(item)}
                        className="absolute top-3 right-3 z-10 p-2 rounded-full bg-stone-900/80 hover:bg-stone-800 text-amber-300 border border-amber-500/40 backdrop-blur-sm shadow-md transition-colors"
                      >
                        <Info className="w-4 h-4" />
                      </button>

                      <div className="w-full h-full">
                        <ThreeEggViewer
                          eggTier={item.tier}
                          width="100%"
                          height="100%"
                          autoRotate
                          interactive
                          showDais
                        />
                      </div>
                    </div>

                    {/* Card Content & Stats */}
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-1 text-[11px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                          <Sparkles className="w-3.5 h-3.5" />
                          Companion Egg
                        </div>
                        <h3 className="text-lg font-extrabold text-stone-900 dark:text-white line-clamp-1">
                          {item.name}
                        </h3>
                        <p className="text-xs text-stone-600 dark:text-stone-300 line-clamp-2 leading-relaxed">
                          {item.description}
                        </p>

                        <div className="grid grid-cols-2 gap-2 p-2.5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/70 dark:border-amber-800/30 text-[11px]">
                          <div>
                            <div className="text-stone-500 dark:text-stone-400 font-medium">Hatch Time</div>
                            <div className="font-bold text-amber-700 dark:text-amber-300">
                              {`⏳ ${item.hatchDurationHours ?? 8} Hours`}
                            </div>
                          </div>
                          <div>
                            <div className="text-stone-500 dark:text-stone-400 font-medium">Drop Odds</div>
                            <div className="font-bold text-stone-800 dark:text-stone-200">
                              🎲 Luck-Based
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Price & Adopt CTA */}
                      <div className="pt-3 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-1.5">
                          <span className="text-2xl">⭐</span>
                          <div>
                            <div className="text-[10px] uppercase font-bold text-stone-500 tracking-wider">
                              Price
                            </div>
                            <div className="text-base font-extrabold text-amber-500 dark:text-amber-400">
                              {`${item.price} Stars`}
                            </div>
                          </div>
                        </div>

                        <button
                          type="button"
                          data-testid={`buy-egg-btn-${item.id}`}
                          onClick={() => handleBuyClick(item)}
                          disabled={!canAfford}
                          className={cn(
                            'px-5 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wide transition-all shadow-md active:translate-y-[1px]',
                            canAfford
                              ? 'bg-amber-500 hover:bg-amber-600 text-white shadow-amber-500/30'
                              : 'bg-stone-200 dark:bg-stone-800 text-stone-400 dark:text-stone-600 cursor-not-allowed'
                          )}
                        >
                          {canAfford
                            ? item.name.toLowerCase().includes('myster')
                              ? 'Adopt Mystery Egg'
                              : `Adopt (${item.price} ⭐)`
                            : 'Need Stars'}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Category Divider */}
            {catIdx < resolvedCategories.length - 1 && (
              <div
                data-testid="shop-category-divider"
                className="pt-6 border-b-2 border-dashed border-stone-200 dark:border-stone-800"
              />
            )}
          </div>
        ))}
      </div>

      {/* Inspect Egg Modal */}
      {inspectEgg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-lg rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-2xl p-6 overflow-hidden">
            <button
              type="button"
              onClick={() => setInspectEgg(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-500"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="h-64 w-full">
              <ThreeEggViewer
                eggTier={inspectEgg.tier}
                width="100%"
                height="100%"
                autoRotate
                interactive
              />
            </div>

            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-extrabold text-stone-900 dark:text-white">
                  {inspectEgg.name}
                </h3>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-300">
                  Mystery Egg
                </span>
              </div>

              <p className="text-sm text-stone-600 dark:text-stone-300">
                {inspectEgg.description}
              </p>

              <div className="p-3 rounded-2xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 grid grid-cols-2 gap-2 text-xs">
                <div>
                  <div className="text-stone-500">Hatching Duration</div>
                  <div className="font-bold text-stone-800 dark:text-stone-200">8 Hours</div>
                </div>
                <div>
                  <div className="text-stone-500">Rarity & Species</div>
                  <div className="font-bold text-amber-600 dark:text-amber-400">100% Luck Based</div>
                </div>
                <div>
                  <div className="text-stone-500">Adoption Cost</div>
                  <div className="font-extrabold text-amber-500">⭐ {inspectEgg.price} Stars</div>
                </div>
                <div>
                  <div className="text-stone-500">Drop Odds</div>
                  <div className="font-bold text-stone-800 dark:text-stone-200">
                    {getOddsBreakdown(inspectEgg.dropRates).shortText}
                  </div>
                </div>
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <Button variant="secondary" onClick={() => setInspectEgg(null)}>
                  Close
                </Button>
                <Button
                  variant="primary"
                  onClick={() => {
                    const egg = inspectEgg;
                    setInspectEgg(null);
                    handleBuyClick(egg);
                  }}
                  disabled={starBalance < inspectEgg.price}
                >
                  Buy for {inspectEgg.price} ⭐
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Confirm Purchase Modal */}
      {confirmModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-md rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-2xl p-6 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-amber-100 dark:bg-amber-950 flex items-center justify-center text-3xl">
              🥚
            </div>
            <h3 className="text-xl font-extrabold text-stone-900 dark:text-white">
              Adopt {confirmModalItem.name}?
            </h3>
            <p className="text-sm text-stone-600 dark:text-stone-400">
              You are about to spend <strong className="text-amber-500 font-extrabold">{confirmModalItem.price} Stars</strong>.
              Your new star balance will be <strong className="text-amber-600">{starBalance - confirmModalItem.price} Stars</strong>.
            </p>
            <div className="p-3 rounded-2xl bg-stone-50 dark:bg-stone-800 text-xs text-stone-600 dark:text-stone-300 space-y-1">
              <div>⏳ <strong>Incubation time:</strong> {confirmModalItem.hatchDurationHours ?? 8} hours in Hatchery</div>
              <div>🎲 <strong>Odds:</strong> {getOddsBreakdown(confirmModalItem.dropRates).longText}</div>
            </div>
            <div className="flex gap-3 justify-center pt-2">
              <Button variant="secondary" onClick={() => setConfirmModalItem(null)}>
                Cancel
              </Button>
              <Button
                variant="primary"
                onClick={handleConfirmPurchase}
                className="bg-amber-500 hover:bg-amber-600 font-extrabold"
              >
                Confirm Adoption ✨
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {purchasedSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-md rounded-3xl bg-white dark:bg-stone-900 border border-amber-300 dark:border-amber-700 shadow-2xl p-6 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center text-emerald-600">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-extrabold text-stone-900 dark:text-white">
              Mystery Egg Delivered to Hatchery!
            </h3>
            <p className="text-sm text-stone-600 dark:text-stone-400">
              Your <strong>{purchasedSuccess.name}</strong> has been transferred to your incubator. It requires <strong>{purchasedSuccess.hatchDurationHours ?? 8} hours of incubation</strong>. Head to the Hatchery to start cracking it!
            </p>
            <div className="flex gap-3 justify-center pt-2">
              <Button variant="secondary" onClick={() => setPurchasedSuccess(null)}>
                Keep Browsing
              </Button>
              {onOpenHatchery && (
                <Button
                  variant="primary"
                  onClick={() => {
                    setPurchasedSuccess(null);
                    onOpenHatchery();
                  }}
                  className="bg-amber-500 hover:bg-amber-600 font-extrabold"
                >
                  Go to Hatchery 🐣
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

