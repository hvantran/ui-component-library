import { default as React } from '../../../../node_modules/react';
export interface SystemSettingsData {
    egg_shop_price_stars?: number;
    egg_hatch_duration_hours?: number;
    strike_crack_star_cost?: number;
    equip_egg_star_cost?: number;
    pet_grow_star_cost?: number;
    pet_grow_exp_gain?: number;
    pet_max_level?: number;
    pet_base_exp_needed?: number;
    stars_per_score_point?: number;
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
export declare const ExamIntegrityTeacherSettings: React.FC<ExamIntegrityTeacherSettingsProps>;
