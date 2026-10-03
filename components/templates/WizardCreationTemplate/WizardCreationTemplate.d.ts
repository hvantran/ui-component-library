import { default as React } from '../../../../node_modules/react';
import { StepMetadata } from '../../../types/metadata';
import { BreadcrumbItem } from '../../molecules/Breadcrumbs';
export interface WizardCreationTemplateProps {
    pageTitle: string;
    breadcrumbs?: BreadcrumbItem[];
    steps: StepMetadata[];
    activeStep: number;
    onStepChange: (newStepIndex: number) => void;
    onFinish: (steps: StepMetadata[]) => void;
    onPropertyChange: (stepIndex: number, propName: string, value: any) => void;
    onCancel?: () => void;
    loading?: boolean;
    className?: string;
}
export declare const WizardCreationTemplate: React.FC<WizardCreationTemplateProps>;
export default WizardCreationTemplate;
