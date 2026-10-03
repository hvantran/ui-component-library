import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { PropertyMetadata, PropType } from '../../../types/metadata';
import { DynamicForm } from './DynamicForm';

const meta: Meta<typeof DynamicForm> = {
  title: 'Organisms/DynamicForm',
  component: DynamicForm,
};

export default meta;
type Story = StoryObj<typeof DynamicForm>;

const initialProperties: PropertyMetadata[] = [
  {
    propName: 'endpointName',
    propLabel: 'Endpoint Name',
    propType: PropType.InputText,
    propValue: 'Lazada Stock Poller',
    isRequired: true,
    colSpan: 6,
    info: 'Unique system name of this external endpoint.',
  },
  {
    propName: 'method',
    propLabel: 'HTTP Method',
    propType: PropType.Selection,
    propValue: 'POST',
    colSpan: 6,
    selectionMeta: {
      selections: [
        { label: 'GET', value: 'GET' },
        { label: 'POST', value: 'POST' },
        { label: 'PUT', value: 'PUT' },
        { label: 'DELETE', value: 'DELETE' },
      ],
    },
  },
  {
    propName: 'url',
    propLabel: 'Target URL',
    propType: PropType.InputText,
    propValue: 'https://api.lazada.vn/rest/stock',
    colSpan: 12,
  },
  {
    propName: 'useCustomHeaders',
    propLabel: 'Use Custom Headers',
    propType: PropType.Switcher,
    propValue: true,
  },
  {
    propName: 'headersJson',
    propLabel: 'Headers (JSON)',
    propType: PropType.CodeEditor,
    propValue: '{\n  "Authorization": "Bearer secret-token",\n  "Content-Type": "application/json"\n}',
    colSpan: 12,
    codeEditorMeta: {
      codeLanguages: ['json'],
      height: '180px',
    },
    dependOn: [{ propName: 'useCustomHeaders', equals: true }],
  },
  {
    propName: 'notes',
    propLabel: 'Internal Notes',
    propType: PropType.Textarea,
    propValue: 'Requires proxy rotation in staging.',
    colSpan: 12,
  },
];

export const Default: Story = {
  render: () => {
    const [props, setProps] = useState(initialProperties);

    const handleChange = (name: string, val: any) => {
      setProps((prev) =>
        prev.map((item) => (item.propName === name ? { ...item, propValue: val } : item))
      );
    };

    return (
      <div className="p-6 max-w-3xl border rounded-card bg-surface-card-light dark:bg-surface-card-dark">
        <DynamicForm properties={props} onChange={handleChange} />
      </div>
    );
  },
};
