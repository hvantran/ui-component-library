import { default as React } from '../../../../node_modules/react';
import { GenericActionMetadata, PropertyMetadata, SpeedDialActionMetadata, TabMetadata } from '../../../types/metadata';
import { BreadcrumbItem } from '../../molecules/Breadcrumbs';
export interface EntityDetailTemplateProps {
    pageTitle: string;
    breadcrumbs?: BreadcrumbItem[];
    headerActions?: GenericActionMetadata[];
    tabs?: TabMetadata[];
    activeTab?: string;
    onTabChange?: (tabId: string) => void;
    properties: PropertyMetadata[];
    onPropertyChange: (propName: string, value: any) => void;
    floatingActions?: SpeedDialActionMetadata[];
    disabled?: boolean;
    className?: string;
    errors?: Record<string, string>;
}
export declare const EntityDetailTemplate: React.FC<EntityDetailTemplateProps>;
export default EntityDetailTemplate;
