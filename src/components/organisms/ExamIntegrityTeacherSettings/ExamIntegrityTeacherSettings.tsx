import React from 'react';
import {
  Save,
  RotateCcw,
  Sparkles,
  Egg,
  Award,
  Settings as SettingsIcon,
} from 'lucide-react';
import { Button } from '../../atoms/Button';
import { Input } from '../../atoms/Input';
import { cn } from '../../../utils/cn';

export interface SystemSettingsData {
  egg_shop_price_stars?: number;
  egg_hatch_duration_hours?: number;
  egg_drop_rate_common?: number;
  egg_drop_rate_rare?: number;
  egg_drop_rate_epic?: number;
  egg_drop_rate_legendary?: number;
  egg_drop_rate_mythic?: number;
  strike_crack_star_cost?: number;
  equip_egg_star_cost?: number;
  pet_grow_star_cost?: number;
  pet_grow_exp_gain?: number;
  pet_max_level?: number;
  pet_base_exp_needed?: number;
  stars_per_score_point?: number;
  stars_per_answered_question?: number;
  stars_per_user_level?: number;
  [key: string]: any;
}

export interface ExamIntegrityTeacherSettingsProps {
  settings: SystemSettingsData;
  onSettingsChange: (key: keyof SystemSettingsData, value: number) => void;
  onSave: (e: React.FormEvent) => void;
  onResetDefaults: () => void;
  isLoading?: boolean;
  isSaving?: boolean;
  pageTitle?: string;
  pageSubtitle?: string;
  className?: string;
}

export const ExamIntegrityTeacherSettings: React.FC<ExamIntegrityTeacherSettingsProps> = ({
  settings,
  onSettingsChange,
  onSave,
  onResetDefaults,
  isLoading = false,
  isSaving = false,
  pageTitle = 'System & Gameplay Settings',
  pageSubtitle = 'Configure student egg shop prices, companion pet growth, incubation timers, and star economy parameters.',
  className,
}) => {
  return (
    <div className={cn('max-w-4xl mx-auto space-y-6', className)}>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-200 dark:border-gray-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <SettingsIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {pageTitle}
            </h1>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {pageSubtitle}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="neutral"
            size="sm"
            icon={<RotateCcw size={15} />}
            iconPlacement="left"
            onClick={onResetDefaults}
            disabled={isSaving || isLoading}
          >
            Reset Defaults
          </Button>
          <Button
            type="submit"
            form="settings-form"
            variant="primary"
            size="sm"
            icon={<Save size={15} />}
            iconPlacement="left"
            disabled={isSaving || isLoading}
          >
            {isSaving ? 'Saving…' : 'Save Settings'}
          </Button>
        </div>
      </div>

      <form id="settings-form" onSubmit={onSave} className="space-y-6">
        {/* Egg Shop & Hatchery Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm space-y-4">
          <div className="flex items-center gap-2.5 border-b border-gray-100 dark:border-gray-700 pb-3">
            <Egg className="w-5 h-5 text-amber-500" />
            <h2 className="text-base font-bold text-gray-900 dark:text-gray-100">
              Egg Shop & Incubation Chamber
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Egg Shop Price (Stars)"
              type="number"
              min={0}
              value={settings.egg_shop_price_stars ?? 250}
              onChange={(e) =>
                onSettingsChange('egg_shop_price_stars', Number(e.target.value))
              }
              helperText="Stars required to adopt mystery eggs."
              required
            />
            <Input
              label="Hatch Incubation Duration (Hours)"
              type="number"
              min={1}
              value={settings.egg_hatch_duration_hours ?? 8}
              onChange={(e) =>
                onSettingsChange('egg_hatch_duration_hours', Number(e.target.value))
              }
              helperText="Total hours an egg must incubate before hatching."
              required
            />
            <Input
              label="Strike Crack Cost (Stars)"
              type="number"
              min={0}
              value={settings.strike_crack_star_cost ?? 25}
              onChange={(e) =>
                onSettingsChange('strike_crack_star_cost', Number(e.target.value))
              }
              helperText="Stars spent per egg crack to accelerate hatching."
              required
            />
            <Input
              label="Equip Egg Cost (Stars)"
              type="number"
              min={0}
              value={settings.equip_egg_star_cost ?? 25}
              onChange={(e) =>
                onSettingsChange('equip_egg_star_cost', Number(e.target.value))
              }
              helperText="Stars to equip an incubating egg companion."
              required
            />
            <div className="col-span-full pt-3 border-t border-gray-100 dark:border-gray-700">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
                Egg Rarity Drop Rates (% Chance)
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                <Input
                  label="Common (%)"
                  type="number"
                  min={0}
                  max={100}
                  value={settings.egg_drop_rate_common ?? 50}
                  onChange={(e) =>
                    onSettingsChange('egg_drop_rate_common', Number(e.target.value))
                  }
                  helperText="Default: 50%"
                  required
                />
                <Input
                  label="Rare (%)"
                  type="number"
                  min={0}
                  max={100}
                  value={settings.egg_drop_rate_rare ?? 28}
                  onChange={(e) =>
                    onSettingsChange('egg_drop_rate_rare', Number(e.target.value))
                  }
                  helperText="Default: 28%"
                  required
                />
                <Input
                  label="Epic (%)"
                  type="number"
                  min={0}
                  max={100}
                  value={settings.egg_drop_rate_epic ?? 14}
                  onChange={(e) =>
                    onSettingsChange('egg_drop_rate_epic', Number(e.target.value))
                  }
                  helperText="Default: 14%"
                  required
                />
                <Input
                  label="Legendary (%)"
                  type="number"
                  min={0}
                  max={100}
                  value={settings.egg_drop_rate_legendary ?? 6}
                  onChange={(e) =>
                    onSettingsChange('egg_drop_rate_legendary', Number(e.target.value))
                  }
                  helperText="Default: 6%"
                  required
                />
                <Input
                  label="Mythic (%)"
                  type="number"
                  min={0}
                  max={100}
                  value={settings.egg_drop_rate_mythic ?? 2}
                  onChange={(e) =>
                    onSettingsChange('egg_drop_rate_mythic', Number(e.target.value))
                  }
                  helperText="Default: 2%"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        {/* Pet Growth & Evolution Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm space-y-4">
          <div className="flex items-center gap-2.5 border-b border-gray-100 dark:border-gray-700 pb-3">
            <Sparkles className="w-5 h-5 text-amber-500" />
            <h2 className="text-base font-bold text-gray-900 dark:text-gray-100">
              Companion Pet Growth & Progression
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Pet Growth Cost (Stars)"
              type="number"
              min={0}
              value={settings.pet_grow_star_cost ?? 25}
              onChange={(e) =>
                onSettingsChange('pet_grow_star_cost', Number(e.target.value))
              }
              helperText="Stars required to feed / train companion pet."
              required
            />
            <Input
              label="EXP Gain Per Feeding"
              type="number"
              min={1}
              value={settings.pet_grow_exp_gain ?? 60}
              onChange={(e) =>
                onSettingsChange('pet_grow_exp_gain', Number(e.target.value))
              }
              helperText="Experience points awarded per growth action."
              required
            />
            <Input
              label="Max Pet Level Ceiling"
              type="number"
              min={1}
              value={settings.pet_max_level ?? 10}
              onChange={(e) =>
                onSettingsChange('pet_max_level', Number(e.target.value))
              }
              helperText="Highest achievable pet level."
              required
            />
            <Input
              label="Base EXP for Level 2"
              type="number"
              min={10}
              value={settings.pet_base_exp_needed ?? 100}
              onChange={(e) =>
                onSettingsChange('pet_base_exp_needed', Number(e.target.value))
              }
              helperText="Initial EXP threshold for Level 1 to 2."
              required
            />
          </div>
        </div>

        {/* Gamification Economy Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm space-y-4">
          <div className="flex items-center gap-2.5 border-b border-gray-100 dark:border-gray-700 pb-3">
            <Award className="w-5 h-5 text-amber-500" />
            <h2 className="text-base font-bold text-gray-900 dark:text-gray-100">
              Star Rewards & Gamification Economy
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Stars Per Score Point (10-Point Scale)"
              type="number"
              step="0.1"
              min={0}
              value={settings.stars_per_score_point ?? 1.0}
              onChange={(e) =>
                onSettingsChange('stars_per_score_point', Number(e.target.value))
              }
              helperText="Ratio of stars earned per exam score point."
              required
            />
            <Input
              label="Stars Per Answered Question"
              type="number"
              step="0.1"
              min={0}
              value={settings.stars_per_answered_question ?? 0.5}
              onChange={(e) =>
                onSettingsChange('stars_per_answered_question', Number(e.target.value))
              }
              helperText="Stars earned for each question answered in the exam."
              required
            />
            <Input
              label="Stars Per User Profile Level Up"
              type="number"
              min={1}
              value={settings.stars_per_user_level ?? 20}
              onChange={(e) =>
                onSettingsChange('stars_per_user_level', Number(e.target.value))
              }
              helperText="Cumulative stars required for student profile level up."
              required
            />
          </div>
        </div>
      </form>
    </div>
  );
};

