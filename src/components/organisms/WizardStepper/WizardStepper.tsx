import { Check } from 'lucide-react';
import React from 'react';
import { StepMetadata } from '../../../types/metadata';
import { cn } from '../../../utils/cn';
import { Button } from '../../atoms/Button';
import { DynamicForm } from '../DynamicForm';

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

export const WizardStepper: React.FC<WizardStepperProps> = ({
  steps,
  activeStep,
  onStepChange,
  onFinish,
  onPropertyChange,
  onCancel,
  loading = false,
  className,
}) => {
  const currentStep = steps[activeStep];
  const isFirstStep = activeStep === 0;
  const isLastStep = activeStep === steps.length - 1;

  const handleNext = () => {
    if (isLastStep) {
      if (currentStep?.onFinishStepClick) {
        currentStep.onFinishStepClick(steps);
      }
      onFinish(steps);
    } else {
      onStepChange(activeStep + 1);
    }
  };

  const handleBack = () => {
    if (!isFirstStep) {
      onStepChange(activeStep - 1);
    }
  };

  return (
    <div
      role="region"
      aria-label="Wizard Steps"
      className={cn(
        'w-full flex flex-col rounded-card border border-secondary-200 dark:border-secondary-800 bg-surface-card-light dark:bg-surface-card-dark shadow-card',
        className
      )}
    >
      {/* Stepper Header */}
      <div className="p-6 border-b border-secondary-200 dark:border-secondary-800">
        <ol className="flex items-center w-full">
          {steps.map((step, idx) => {
            const isCompleted = idx < activeStep;
            const isCurrent = idx === activeStep;
            const isLast = idx === steps.length - 1;

            return (
              <li
                key={step.name || idx}
                className={cn(
                  'flex items-center',
                  !isLast && 'w-full'
                )}
              >
                <div className="flex items-center gap-3">
                  <div
                    aria-current={isCurrent ? 'step' : undefined}
                    className={cn(
                      'flex items-center justify-center w-9 h-9 rounded-full text-xs font-semibold transition-colors shrink-0',
                      isCompleted && 'bg-primary-600 text-white',
                      isCurrent && 'border-2 border-primary-600 text-primary-600 bg-primary-50 dark:bg-primary-950/40 dark:text-primary-400',
                      !isCompleted && !isCurrent && 'border border-secondary-300 dark:border-secondary-700 text-secondary-500 bg-secondary-100 dark:bg-secondary-800'
                    )}
                  >
                    {isCompleted ? <Check className="w-4 h-4" /> : idx + 1}
                  </div>
                  <div className="flex flex-col">
                    <span
                      className={cn(
                        'text-xs font-medium whitespace-nowrap',
                        isCurrent
                          ? 'text-primary-600 dark:text-primary-400 font-semibold'
                          : isCompleted
                          ? 'text-secondary-900 dark:text-white'
                          : 'text-secondary-400'
                      )}
                    >
                      {step.label || step.name}
                    </span>
                    {step.description && (
                      <span className="text-[11px] text-secondary-400 dark:text-secondary-500 hidden sm:inline">
                        {step.description}
                      </span>
                    )}
                  </div>
                </div>

                {!isLast && (
                  <div
                    className={cn(
                      'flex-1 h-0.5 mx-4 transition-colors',
                      idx < activeStep
                        ? 'bg-primary-600 dark:bg-primary-500'
                        : 'bg-secondary-200 dark:bg-secondary-800'
                    )}
                  />
                )}
              </li>
            );
          })}
        </ol>
      </div>

      {/* Step Content */}
      <div className="p-6 flex-1 min-h-[220px]">
        {currentStep && (
          <DynamicForm
            properties={currentStep.properties}
            onChange={(name, val) => onPropertyChange(activeStep, name, val)}
          />
        )}
      </div>

      {/* Stepper Footer Controls */}
      <div className="flex items-center justify-between p-4 border-t border-secondary-200 dark:border-secondary-800 bg-secondary-50/50 dark:bg-secondary-900/40">
        <div>
          {onCancel && (
            <Button variant="ghost" onClick={onCancel} disabled={loading}>
              Cancel
            </Button>
          )}
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="secondary"
            onClick={handleBack}
            disabled={isFirstStep || loading}
          >
            Back
          </Button>

          <Button
            variant="primary"
            onClick={handleNext}
            loading={loading}
          >
            {isLastStep ? 'Finish' : 'Next'}
          </Button>
        </div>
      </div>
    </div>
  );
};

WizardStepper.displayName = 'WizardStepper';
export default WizardStepper;
