import { describe, it, expect } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { FormField } from './FormField';

describe('FormField molecule', () => {
  it('renders label with required asterisk and child control', () => {
    const html = renderToString(
      <FormField label="Email" htmlFor="email-id" required>
        <input id="email-id" />
      </FormField>,
    );
    expect(html).toContain('<label for="email-id"');
    expect(html).toContain('Email');
    expect(html).toContain('*');
    expect(html).toContain('id="email-id"');
  });

  it('renders error message in red', () => {
    const html = renderToString(
      <FormField label="Email" error="Invalid email address">
        <input />
      </FormField>,
    );
    expect(html).toContain('text-red-600');
    expect(html).toContain('Invalid email address');
  });

  it('renders helper text when no error exists', () => {
    const html = renderToString(
      <FormField label="Email" helperText="We will never share your email">
        <input />
      </FormField>,
    );
    expect(html).toContain('We will never share your email');
  });
});
