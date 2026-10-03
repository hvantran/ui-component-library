import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { PropType, StepMetadata } from '../../../types/metadata';
import { WizardStepper } from './WizardStepper';

const meta: Meta<typeof WizardStepper> = {
  title: 'Organisms/WizardStepper',
  component: WizardStepper,
};

export default meta;
type Story = StoryObj<typeof WizardStepper>;

const sampleSteps: StepMetadata[] = [
  {
    name: 'general',
    label: 'General Information',
    description: 'Provide basic workflow metadata',
    properties: [
      {
        propName: 'workflowName',
        propLabel: 'Workflow Name',
        propType: PropType.InputText,
        propValue: 'Inventory Sync',
        isRequired: true,
        colSpan: 6,
      },
      {
        propName: 'cronExpression',
        propLabel: 'Cron Expression',
        propType: PropType.InputText,
        propValue: '0 */15 * * * *',
        colSpan: 6,
      },
    ],
  },
  {
    name: 'auth',
    label: 'Authentication',
    description: 'Configure endpoint access credentials',
    properties: [
      {
        propName: 'enableAuth',
        propLabel: 'Requires Token',
        propType: PropType.Switcher,
        propValue: true,
      },
      {
        propName: 'bearerToken',
        propLabel: 'Bearer Token',
        propType: PropType.InputText,
        propValue: '',
        colSpan: 12,
        dependOn: [{ propName: 'enableAuth', equals: true }],
      },
    ],
  },
  {
    name: 'review',
    label: 'Confirmation',
    description: 'Review and activate workflow',
    properties: [
      {
        propName: 'notes',
        propLabel: 'Deployment Notes',
        propType: PropType.Textarea,
        propValue: 'Ready for production deployment.',
        colSpan: 12,
      },
    ],
  },
];

export const Default: Story = {
  render: () => {
    const [steps, setSteps] = useState(sampleSteps);
    const [activeStep, setActiveStep] = useState(0);

    const handlePropChange = (stepIdx: number, propName: string, value: any) => {
      setSteps((prev) =>
        prev.map((step, idx) => {
          if (idx !== stepIdx) return step;
          return {
            ...step,
            properties: step.properties.map((p) =>
              p.propName === propName ? { ...p, propValue: value } : p
            ),
          };
        })
      );
    };

    return (
      <div className="p-6 max-w-4xl">
        <WizardStepper
          steps={steps}
          activeStep={activeStep}
          onStepChange={setActiveStep}
          onPropertyChange={handlePropChange}
          onFinish={() => alert('Wizard completed successfully!')}
          onCancel={() => alert('Wizard cancelled')}
        />
      </div>
    );
  },
};
