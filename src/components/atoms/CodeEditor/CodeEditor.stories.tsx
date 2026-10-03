import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { CodeEditor } from './CodeEditor';

const sampleJs = `// GraalJS Transformation Script
function transform(payload) {
  const parsed = JSON.parse(payload);
  return {
    eventId: parsed.id,
    processedAt: new Date().toISOString(),
    status: 'PROCESSED'
  };
}`;

const sampleJson = `{
  "action": "SYNC_LAZADA_ORDERS",
  "endpoint": "https://api.lazada.vn/orders",
  "timeout": 5000,
  "retry": {
    "maxAttempts": 3,
    "backoff": "EXPONENTIAL"
  }
}`;

const meta: Meta<typeof CodeEditor> = {
  title: 'Atoms/CodeEditor',
  component: CodeEditor,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    language: {
      control: 'select',
      options: ['javascript', 'json'],
    },
    theme: {
      control: 'select',
      options: ['light', 'dark'],
    },
    readOnly: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof CodeEditor>;

export const JavaScript: Story = {
  render: () => {
    const [code, setCode] = useState(sampleJs);
    return (
      <CodeEditor
        label="GraalJS Execution Script"
        language="javascript"
        value={code}
        onChange={setCode}
        height="220px"
      />
    );
  },
};

export const JSONViewer: Story = {
  render: () => {
    const [jsonCode, setJsonCode] = useState(sampleJson);
    return (
      <CodeEditor
        label="HTTP Configuration Payload"
        language="json"
        value={jsonCode}
        onChange={setJsonCode}
        height="220px"
      />
    );
  },
};

export const WithError: Story = {
  args: {
    label: 'Malformed JavaScript Script',
    value: 'function broken() { return ',
    language: 'javascript',
    error: 'SyntaxError: Unexpected end of input',
  },
};
