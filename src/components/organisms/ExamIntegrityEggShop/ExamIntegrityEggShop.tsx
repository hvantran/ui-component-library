import React, { useState } from 'react';
import {
  Sparkles,
  ShoppingBag,
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
}

export interface ExamIntegrityEggShopProps {
  starBalance?: number;
  items?: EggShopItem[];
  onPurchaseEgg?: (item: EggShopItem) => void;
  onOpenHatchery?: () => void;
  className?: string;
}

export const DEFAULT_MYSTERY_EGG: EggShopItem = {
  id: 'mystery-egg-ancient',
  name: 'Ancient Mysterious Egg',
  tier: 'dragon',
  rarity: 'Common',
  price: 20,
  description:
    'A sealed celestial egg pulsing with ancient magic. The inner species and rarity are completely veiled until hatched. Awakens into a companion based on lucky drop chances!',
  hatchedPetName: 'Mystery Companion ???',
  petElement: 'Cosmic / Unknown',
  totalStages: undefined,
  hatchDurationHours: 8,
};

export const DEFAULT_SHOP_EGGS: EggShopItem[] = [DEFAULT_MYSTERY_EGG];

export const RARITY_DROP_RATES_SHOP = [
  {
    rarity: 'Common' as const,
    percent: 30,
    stages: 3,
    badgeClass: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border-emerald-300',
    description: 'Sproutling, Pipflick, Embersqueak, Zephyrpuff',
  },
  {
    rarity: 'Rare' as const,
    percent: 30,
    stages: 4,
    badgeClass: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-950 dark:text-cyan-300 border-cyan-300',
    description: 'Frostpaw, Magmafang, Voltwing, Thundercat',
  },
  {
    rarity: 'Epic' as const,
    percent: 24,
    stages: 5,
    badgeClass: 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 border-rose-300',
    description: 'Fire Phoenix, Chrono Chimera, Shadowpanther, Stormstag',
  },
  {
    rarity: 'Legendary' as const,
    percent: 12,
    stages: 6,
    badgeClass: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border-amber-300',
    description: 'Astral Dragon, Astral Leviathan, Solar Wyvern',
  },
  {
    rarity: 'Mythic' as const,
    percent: 4,
    stages: 8,
    badgeClass: 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300 border-purple-300',
    description: 'Void Abyssal Dragon, Chrono-Draco, Aegis Paladin',
  },
];

export const ExamIntegrityEggShop: React.FC<ExamIntegrityEggShopProps> = ({
  starBalance = 650,
  items = DEFAULT_SHOP_EGGS,
  onPurchaseEgg,
  onOpenHatchery,
  className,
}) => {
  const [inspectEgg, setInspectEgg] = useState<EggShopItem | null>(null);
  const [confirmModalItem, setConfirmModalItem] = useState<EggShopItem | null>(null);
  const [purchasedSuccess, setPurchasedSuccess] = useState<EggShopItem | null>(null);

  // The shop showcases the single mystery egg
  const featuredEgg: EggShopItem = items[0] || DEFAULT_MYSTERY_EGG;
  const canAfford = starBalance >= featuredEgg.price;

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
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 p-6 sm:p-8 text-white shadow-xl">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none flex items-center justify-center">
          <Sparkles className="w-80 h-80" />
        </div>
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-amber-100">
              <ShoppingBag className="w-3.5 h-3.5" />
              Egg & Companion Emporium
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              3D Pet Egg Shop
            </h1>
            <p className="text-sm sm:text-base text-amber-100 max-w-xl">
              Buy mysterious 3D eggs with stars earned from exams. All eggs appear identical — true species and rarity are purely luck-based and reveal after 8 hours of incubation!
            </p>
          </div>

          {/* Star Balance & Actions Pill */}
          <div className="flex flex-wrap items-center gap-3">
            <div
              data-testid="star-balance-pill"
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-slate-900/80 backdrop-blur-md border-2 border-amber-300 shadow-lg"
            >
              <span className="text-2xl animate-pulse">⭐</span>
              <div>
                <div className="text-[10px] uppercase font-bold text-amber-300 tracking-wider">
                  Star Balance
                </div>
                <div className="text-xl font-extrabold text-amber-400">
                  {starBalance.toLocaleString()} Stars
                </div>
              </div>
            </div>

            {onOpenHatchery && (
              <Button
                variant="secondary"
                onClick={onOpenHatchery}
                className="rounded-full px-5 py-3 bg-white text-amber-900 hover:bg-amber-50 font-bold shadow-md hover:shadow-lg transition-all"
              >
                Go to Hatchery 🐣
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Featured Mystery Egg Showcase Card (Single Egg) */}
      <div
        data-testid={`egg-card-${featuredEgg.id}`}
        className="rounded-3xl bg-white dark:bg-stone-900 border-2 border-amber-300 dark:border-amber-700/60 shadow-xl overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* 3D Canvas Viewport */}
          <div className="lg:col-span-6 relative min-h-[380px] sm:min-h-[460px] bg-gradient-to-b from-[#1c0e07] via-[#0d0604] to-[#050201] flex items-center justify-center p-6 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />

            {/* Badges on 3D Canvas */}
            <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-amber-950/80 border border-amber-500 text-amber-300 shadow-sm backdrop-blur-md">
                ✨ Mystery Egg
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-stone-950/80 border border-stone-700 text-stone-200 shadow-sm backdrop-blur-md">
                ⏳ 8 Hours Hatching Time
              </span>
            </div>

            <button
              type="button"
              title="Inspect Egg"
              onClick={() => setInspectEgg(featuredEgg)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-stone-900/80 hover:bg-stone-800 text-amber-300 border border-amber-500/40 backdrop-blur-sm shadow-md"
            >
              <Info className="w-4 h-4" />
            </button>

            <div className="w-full h-80 sm:h-96">
              <ThreeEggViewer
                eggTier={featuredEgg.tier}
                width="100%"
                height="100%"
                autoRotate
                interactive
                showDais
              />
            </div>

            <div className="absolute bottom-4 left-0 right-0 text-center text-xs text-amber-200/70 font-medium">
              Interactive 3D Model · Drag to rotate shell · Click to examine
            </div>
          </div>

          {/* Details & Drop Rates Panel */}
          <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" />
                  Veiled Companion Relic
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-white">
                  {featuredEgg.name}
                </h2>
                <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                  {featuredEgg.description}
                </p>
              </div>

              {/* Incubation time & features highlight */}
              <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/40 text-xs">
                <div>
                  <div className="text-stone-500 dark:text-stone-400 font-medium">Incubation Time</div>
                  <div className="font-bold text-amber-700 dark:text-amber-300 text-sm flex items-center gap-1 mt-0.5">
                    <span>⏳ 8 Hours (28,800s)</span>
                  </div>
                </div>
                <div>
                  <div className="text-stone-500 dark:text-stone-400 font-medium">True Rarity & Species</div>
                  <div className="font-bold text-stone-900 dark:text-stone-100 text-sm flex items-center gap-1 mt-0.5">
                    <span>🎲 100% Luck-Based</span>
                  </div>
                </div>
              </div>

              {/* Luck Odds Breakdown Table */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs font-bold text-stone-700 dark:text-stone-300 uppercase tracking-wider">
                  <span>Rarity Drop Rates (Luck Chance)</span>
                  <span className="text-amber-600 dark:text-amber-400">Total: 100%</span>
                </div>

                <div className="space-y-2">
                  {RARITY_DROP_RATES_SHOP.map((rate) => (
                    <div
                      key={rate.rarity}
                      className="p-2.5 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700/60 flex items-center justify-between gap-3 text-xs"
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className={cn(
                            'px-2 py-0.5 rounded-full text-[10px] font-extrabold border',
                            rate.badgeClass
                          )}
                        >
                          {rate.rarity}
                        </span>
                        <span className="text-stone-600 dark:text-stone-300 font-medium">
                          {rate.stages} Stages
                        </span>
                      </div>
                      <div className="flex items-center gap-2 font-mono font-extrabold text-stone-900 dark:text-white">
                        <span>{`${rate.percent}%`}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Price & Purchase CTA */}
            <div className="pt-4 border-t border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-3xl">⭐</span>
                <div>
                  <div className="text-[10px] uppercase font-bold text-stone-500 tracking-wider">
                    Adoption Price
                  </div>
                  <div className="text-2xl font-extrabold text-amber-500 dark:text-amber-400">
                    {featuredEgg.price} Stars
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleBuyClick(featuredEgg)}
                disabled={!canAfford}
                className={cn(
                  'w-full sm:w-auto px-8 py-3.5 rounded-2xl text-sm font-extrabold uppercase tracking-wide transition-all shadow-md active:translate-y-[2px]',
                  canAfford
                    ? 'bg-amber-500 hover:bg-amber-600 text-white shadow-amber-500/30'
                    : 'bg-stone-200 dark:bg-stone-800 text-stone-400 dark:text-stone-600 cursor-not-allowed'
                )}
              >
                {canAfford ? `Adopt Mystery Egg (${featuredEgg.price} ⭐)` : 'Need Stars'}
              </button>
            </div>
          </div>
        </div>
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
                  <div className="font-bold text-stone-800 dark:text-stone-200">50% C / 28% R / 14% E / 6% L / 2% M</div>
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
              <div>⏳ <strong>Incubation time:</strong> 8 hours in Hatchery</div>
              <div>🎲 <strong>Odds:</strong> 50% Common · 28% Rare · 14% Epic · 6% Legendary · 2% Mythic</div>
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
              Your <strong>{purchasedSuccess.name}</strong> has been transferred to your incubator. It requires <strong>8 hours of incubation</strong>. Head to the Hatchery to start cracking it!
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

