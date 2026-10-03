import { describe, it, expect } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { CodeEditor } from './CodeEditor';

describe('CodeEditor atom', () => {
  it('renders editor container with label and styling', () => {
    const html = renderToString(
      <CodeEditor
        label="Test Script"
        value="const x = 1;"
        language="javascript"
      />,
    );
    expect(html).toContain('Test Script');
    expect(html).toContain('font-mono text-sm');
  });

  it('renders error state border and text', () => {
    const html = renderToString(
      <CodeEditor
        value=""
        error="Script cannot be empty"
      />,
    );
    expect(html).toContain('border-red-500');
    expect(html).toContain('Script cannot be empty');
  });
});
