import { describe, it, expect } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Select } from './Select';

describe('Select atom', () => {
  it('renders select with expected tailwind classes', () => {
    const html = renderToString(
      <Select
        options={[
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' },
        ]}
      />,
    );
    expect(html).toContain('border border-gray-300');
    expect(html).toContain('rounded-md px-3 py-2');
    expect(html).toContain('focus:outline-none focus:ring-2 focus:ring-blue-500');
    expect(html).toContain('Option 1');
    expect(html).toContain('Option 2');
  });

  it('renders label and error message', () => {
    const html = renderToString(
      <Select label="Priority" error="Required field" options={[]} />,
    );
    expect(html).toContain('Priority');
    expect(html).toContain('Required field');
    expect(html).toContain('border-red-500');
  });
});
