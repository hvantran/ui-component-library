import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { PropType, StepMetadata } from '../../../types/metadata';
import { WizardCreationTemplate } from './WizardCreationTemplate';

const meta: Meta<typeof WizardCreationTemplate> = {
  title: 'Templates/WizardCreationTemplate',
  component: WizardCreationTemplate,
};

export default meta;
type Story = StoryObj<typeof WizardCreationTemplate>;

export const Default: Story = {
  render: () => {
    const [activeStep, setActiveStep] = useState(0);
    const [steps, setSteps] = useState<StepMetadata[]>([
      {
        name: 'info',
        label: 'General Information',
        description: 'Template metadata and target application',
        properties: [
          {
            propName: 'templateName',
            propLabel: 'Template Name',
            propType: PropType.InputText,
            propValue: 'Default Email Notification',
            isRequired: true,
          },
        ],
      },
      {
        name: 'body',
        label: 'Template Content',
        description: 'Compose default email body',
        properties: [
          {
            propName: 'content',
            propLabel: 'HTML / Text Content',
            propType: PropType.Textarea,
            propValue: 'Hello {{user}}, your order has shipped!',
          },
        ],
      },
    ]);

    const handlePropChange = (stepIdx: number, propName: string, value: any) => {
      setSteps((prev) =>
        prev.map((step, idx) =>
          idx === stepIdx
            ? {
                ...step,
                properties: step.properties.map((p) =>
                  p.propName === propName ? { ...p, propValue: value } : p
                ),
              }
            : step
        )
      );
    };

    return (
      <WizardCreationTemplate
        pageTitle="Create Notification Template"
        breadcrumbs={[
          { label: 'Templates', href: '/templates' },
          { label: 'Create' },
        ]}
        steps={steps}
        activeStep={activeStep}
        onStepChange={setActiveStep}
        onPropertyChange={handlePropChange}
        onFinish={() => alert('Template created successfully!')}
      />
    );
  },
};
