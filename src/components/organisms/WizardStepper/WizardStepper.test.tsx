import { describe, expect, it, vi } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { PropType } from '../../../types/metadata';
import { WizardStepper } from './WizardStepper';

describe('WizardStepper organism', () => {
  const steps = [
    {
      name: 'step1',
      label: 'Basic Info',
      description: 'Define action parameters',
      properties: [
        {
          propName: 'name',
          propLabel: 'Name',
          propType: PropType.InputText,
          propValue: 'Test Action',
        },
      ],
    },
    {
      name: 'step2',
      label: 'Configuration',
      properties: [],
    },
  ];

  it('renders step indicators, dynamic form, and navigation buttons', () => {
    const html = renderToString(
      <WizardStepper
        steps={steps}
        activeStep={0}
        onStepChange={vi.fn()}
        onFinish={vi.fn()}
        onPropertyChange={vi.fn()}
      />
    );
    expect(html).toContain('role="region"');
    expect(html).toContain('Basic Info');
    expect(html).toContain('Define action parameters');
    expect(html).toContain('Configuration');
    expect(html).toContain('Test Action');
    expect(html).toContain('Next');
  });

  it('renders Finish button on last step', () => {
    const html = renderToString(
      <WizardStepper
        steps={steps}
        activeStep={1}
        onStepChange={vi.fn()}
        onFinish={vi.fn()}
        onPropertyChange={vi.fn()}
      />
    );
    expect(html).toContain('Finish');
  });
});
