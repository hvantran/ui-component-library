import React from 'react';
import { StepMetadata } from '../../../types/metadata';
import { cn } from '../../../utils/cn';
import { BreadcrumbItem } from '../../molecules/Breadcrumbs';
import { PageHeader } from '../../organisms/PageHeader';
import { WizardStepper } from '../../organisms/WizardStepper';

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

export const WizardCreationTemplate: React.FC<WizardCreationTemplateProps> = ({
  pageTitle,
  breadcrumbs,
  steps,
  activeStep,
  onStepChange,
  onFinish,
  onPropertyChange,
  onCancel,
  loading = false,
  className,
}) => {
  return (
    <div
      role="main"
      className={cn('w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 font-sans', className)}
    >
      <PageHeader
        title={pageTitle}
        breadcrumbs={breadcrumbs}
      />

      <div className="w-full mt-2">
        <WizardStepper
          steps={steps}
          activeStep={activeStep}
          onStepChange={onStepChange}
          onFinish={onFinish}
          onPropertyChange={onPropertyChange}
          onCancel={onCancel}
          loading={loading}
        />
      </div>
    </div>
  );
};

WizardCreationTemplate.displayName = 'WizardCreationTemplate';
export default WizardCreationTemplate;
