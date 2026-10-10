import React from 'react';
import {
  ExamIntegrityStudentLandingTemplate,
  type StudentPortalSection,
} from '../ExamIntegrityStudentLandingTemplate';
import {
  ExamIntegrityEggShop,
  type EggShopItem,
} from '../../organisms/ExamIntegrityEggShop';
import {
  ExamIntegrityPetHatchery,
  type IncubatingEgg,
  type StudentPet,
} from '../../organisms/ExamIntegrityPetHatchery';
import type { ExamIntegrityNavDockMode } from '../../organisms/ExamIntegrityStudentPortalSidebar';

export type EggShopTab = 'shop' | 'hatchery';

export interface ExamIntegrityStudentEggShopTemplateProps {
  studentName?: string;
  starCount?: number;
  isElementary?: boolean;
  pageTitle?: string;
  pageSubtitle?: string;
  activeTab?: EggShopTab;
  onTabChange?: (tab: EggShopTab) => void;
  incubatingEggs?: IncubatingEgg[];
  pets?: StudentPet[];
  onPurchaseEgg?: (item: EggShopItem) => void;
  onEggHatched?: (eggId: string, hatchedPet: StudentPet) => void;
  onGrowPet?: (petId: string, starsSpent: number) => void;
  onNavigate?: (section: StudentPortalSection) => void;
  onLogout?: () => void;
  dockMode?: ExamIntegrityNavDockMode;
  onDockModeChange?: (mode: ExamIntegrityNavDockMode) => void;
  className?: string;
}

export const ExamIntegrityStudentEggShopTemplate: React.FC<
  ExamIntegrityStudentEggShopTemplateProps
> = ({
  studentName = 'Student',
  starCount = 0,
  isElementary = false,
  pageTitle,
  pageSubtitle,
  activeTab = 'shop',
  onTabChange,
  incubatingEggs = [],
  pets = [],
  onPurchaseEgg,
  onEggHatched,
  onGrowPet,
  onNavigate,
  onLogout,
  dockMode,
  onDockModeChange,
  className,
}) => {
  const resolvedTitle =
    pageTitle ??
    (isElementary ? 'Pet Egg Emporium & Hatchery 🐣' : '3D Pet Egg Shop');

  const resolvedSubtitle =
    pageSubtitle ??
    (isElementary
      ? 'Spend earned stars on mysterious 3D eggs, hatch companion beasts, and nurture pets!'
      : 'Purchase 3D mystery eggs using stars earned from exams and manage companion pets.');

  return (
    <ExamIntegrityStudentLandingTemplate
      studentName={studentName}
      starCount={starCount}
      activeSection="shop"
      pageTitle={resolvedTitle}
      pageSubtitle={resolvedSubtitle}
      onNavigate={onNavigate}
      onLogout={onLogout}
      dockMode={dockMode}
      onDockModeChange={onDockModeChange}
      className={className}
    >
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <button
            type="button"
            data-testid="tab-egg-shop"
            onClick={() => onTabChange?.('shop')}
            className={`px-5 py-2.5 rounded-full font-extrabold text-sm transition-all shadow-sm ${
              activeTab === 'shop'
                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-amber-200 ring-2 ring-amber-300'
                : 'bg-white dark:bg-stone-800 text-slate-700 dark:text-stone-300 hover:bg-amber-50 hover:text-amber-800 border border-slate-200 dark:border-stone-700'
            }`}
          >
            🛒 3D Egg Shop
          </button>
          <button
            type="button"
            data-testid="tab-pet-hatchery"
            onClick={() => onTabChange?.('hatchery')}
            className={`px-5 py-2.5 rounded-full font-extrabold text-sm transition-all shadow-sm ${
              activeTab === 'hatchery'
                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-amber-200 ring-2 ring-amber-300'
                : 'bg-white dark:bg-stone-800 text-slate-700 dark:text-stone-300 hover:bg-amber-50 hover:text-amber-800 border border-slate-200 dark:border-stone-700'
            }`}
          >
            {`🐣 Pet Hatchery & Sanctuary (${incubatingEggs.length} eggs)`}
          </button>
        </div>

        {activeTab === 'shop' ? (
          <ExamIntegrityEggShop
            starBalance={starCount}
            onPurchaseEgg={onPurchaseEgg}
            onOpenHatchery={() => onTabChange?.('hatchery')}
          />
        ) : (
          <ExamIntegrityPetHatchery
            starBalance={starCount}
            incubatingEggs={incubatingEggs}
            pets={pets}
            onGrowPet={onGrowPet}
            onEggHatched={onEggHatched}
          />
        )}
      </div>
    </ExamIntegrityStudentLandingTemplate>
  );
};

