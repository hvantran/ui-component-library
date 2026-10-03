import { default as React } from '../../../../node_modules/react';
import { StepMetadata } from '../../../types/metadata';
export interface WizardStepperProps {
    steps: StepMetadata[];
    activeStep: number;
    onStepChange: (newStepIndex: number) => void;
    onFinish: (steps: StepMetadata[]) => void;
    onPropertyChange: (stepIndex: number, propName: string, value: any) => void;
    onCancel?: () => void;
    loading?: boolean;
    className?: string;
}
export declare const WizardStepper: React.FC<WizardStepperProps>;
export default WizardStepper;
