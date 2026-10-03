import { describe, it, expect } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Input } from './Input';

describe('Input atom', () => {
  it('renders input with expected tailwind classes', () => {
    const html = renderToString(<Input placeholder="Enter name" />);
    expect(html).toContain('border border-gray-300');
    expect(html).toContain('rounded-md');
    expect(html).toContain('px-3 py-2');
    expect(html).toContain('focus:outline-none focus:ring-2 focus:ring-blue-500');
  });

  it('renders label with htmlFor associating with input id', () => {
    const html = renderToString(<Input id="test-id" label="Action Name" required />);
    expect(html).toContain('<label for="test-id"');
    expect(html).toContain('Action Name');
    expect(html).toContain('*');
    expect(html).toContain('id="test-id"');
  });

  it('renders error message and aria-invalid', () => {
    const html = renderToString(
      <Input id="error-input" error="Field is required" />,
    );
    expect(html).toContain('aria-invalid="true"');
    expect(html).toContain('border-red-500');
    expect(html).toContain('Field is required');
  });

  it('renders helper text when no error exists', () => {
    const html = renderToString(
      <Input helperText="Enter between 2 and 255 chars" />,
    );
    expect(html).toContain('Enter between 2 and 255 chars');
  });

  it('renders disabled input', () => {
    const html = renderToString(<Input disabled value="read only" />);
    expect(html).toContain('disabled=""');
    expect(html).toContain('opacity-50 cursor-not-allowed');
  });
});
