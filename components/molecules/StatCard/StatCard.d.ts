import { default as React } from '../../../../node_modules/react';
export interface StatCardChange {
    value: string | number;
    isPositive?: boolean;
    label?: string;
}
export interface StatCardProps {
    title: string;
    value: string | number;
    change?: StatCardChange;
    icon?: React.ReactNode;
    description?: string;
    footer?: React.ReactNode;
    variant?: 'default' | 'outlined';
    className?: string;
}
export declare const StatCard: React.FC<StatCardProps>;
export default StatCard;
