import { describe, expect, it, vi } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { PropType } from '../../../types/metadata';
import { EntityDetailTemplate } from './EntityDetailTemplate';

describe('EntityDetailTemplate template', () => {
  const properties = [
    {
      propName: 'title',
      propLabel: 'Title',
      propType: PropType.InputText,
      propValue: 'Test Detail',
    },
  ];

  it('renders page layout with form properties', () => {
    const html = renderToString(
      <EntityDetailTemplate
        pageTitle="Template Configuration"
        properties={properties}
        onPropertyChange={vi.fn()}
      />
    );
    expect(html).toContain('role="main"');
    expect(html).toContain('Template Configuration');
    expect(html).toContain('Title');
    expect(html).toContain('Test Detail');
  });
});
