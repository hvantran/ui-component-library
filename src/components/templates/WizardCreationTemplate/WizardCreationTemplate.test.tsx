import { describe, expect, it, vi } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { WizardCreationTemplate } from './WizardCreationTemplate';

describe('WizardCreationTemplate template', () => {
  const steps = [
    {
      name: 'step1',
      label: 'Initial Setup',
      properties: [],
    },
  ];

  it('renders wizard creation page layout with header and stepper', () => {
    const html = renderToString(
      <WizardCreationTemplate
        pageTitle="Create New Template"
        steps={steps}
        activeStep={0}
        onStepChange={vi.fn()}
        onFinish={vi.fn()}
        onPropertyChange={vi.fn()}
      />
    );
    expect(html).toContain('role="main"');
    expect(html).toContain('Create New Template');
    expect(html).toContain('Initial Setup');
  });
});
