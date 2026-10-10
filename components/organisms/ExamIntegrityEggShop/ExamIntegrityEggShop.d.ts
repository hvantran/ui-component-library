import { default as React } from '../../../../node_modules/react';
import { EggTier } from '../../molecules/ThreeEggViewer';
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
export declare const DEFAULT_MYSTERY_EGG: EggShopItem;
export declare const DEFAULT_SHOP_EGGS: EggShopItem[];
export declare const RARITY_DROP_RATES_SHOP: ({
    rarity: "Common";
    percent: number;
    stages: number;
    badgeClass: string;
    description: string;
} | {
    rarity: "Rare";
    percent: number;
    stages: number;
    badgeClass: string;
    description: string;
} | {
    rarity: "Epic";
    percent: number;
    stages: number;
    badgeClass: string;
    description: string;
} | {
    rarity: "Legendary";
    percent: number;
    stages: number;
    badgeClass: string;
    description: string;
} | {
    rarity: "Mythic";
    percent: number;
    stages: number;
    badgeClass: string;
    description: string;
})[];
export declare const ExamIntegrityEggShop: React.FC<ExamIntegrityEggShopProps>;
