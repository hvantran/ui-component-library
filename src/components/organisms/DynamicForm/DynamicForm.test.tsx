import { describe, expect, it, vi } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { PropertyMetadata, PropType } from '../../../types/metadata';
import { DynamicForm } from './DynamicForm';

describe('DynamicForm organism', () => {
  const properties: PropertyMetadata[] = [
    {
      propName: 'actionName',
      propLabel: 'Action Name',
      propType: PropType.InputText,
      propValue: 'Sync Poller',
      isRequired: true,
      colSpan: 6,
    },
    {
      propName: 'description',
      propLabel: 'Description',
      propType: PropType.Textarea,
      propValue: 'Poll external API every 5 minutes',
      colSpan: 12,
    },
    {
      propName: 'enabled',
      propLabel: 'Enabled',
      propType: PropType.Switcher,
      propValue: true,
    },
  ];

  it('renders form inputs and labels from metadata', () => {
    const html = renderToString(
      <DynamicForm properties={properties} onChange={vi.fn()} />
    );
    expect(html).toContain('role="form"');
    expect(html).toContain('Action Name');
    expect(html).toContain('Sync Poller');
    expect(html).toContain('Description');
    expect(html).toContain('Poll external API every 5 minutes');
    expect(html).toContain('role="switch"');
  });

  it('respects dependOn conditional visibility rules', () => {
    const conditionalProps: PropertyMetadata[] = [
      {
        propName: 'enableAuth',
        propLabel: 'Enable Auth',
        propType: PropType.Switcher,
        propValue: false,
      },
      {
        propName: 'token',
        propLabel: 'Auth Token',
        propType: PropType.InputText,
        propValue: 'secret-123',
        dependOn: [{ propName: 'enableAuth', equals: true }],
      },
    ];

    const htmlHidden = renderToString(
      <DynamicForm properties={conditionalProps} onChange={vi.fn()} />
    );
    expect(htmlHidden).not.toContain('Auth Token');
  });
});
