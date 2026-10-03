import { describe, expect, it } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Textarea } from './Textarea';

describe('Textarea atom', () => {
  it('renders textarea with label and placeholder', () => {
    const html = renderToString(
      <Textarea label="Description" placeholder="Enter description..." />
    );
    expect(html).toContain('Description');
    expect(html).toContain('placeholder="Enter description..."');
  });

  it('renders error state and alert message', () => {
    const html = renderToString(
      <Textarea error errorMessage="Field is required" />
    );
    expect(html).toContain('aria-invalid="true"');
    expect(html).toContain('role="alert"');
    expect(html).toContain('Field is required');
    expect(html).toContain('border-error-500');
  });
});
