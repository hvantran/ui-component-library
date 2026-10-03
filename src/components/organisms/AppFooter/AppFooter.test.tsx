import { describe, expect, it } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { AppFooter } from './AppFooter';

describe('AppFooter organism', () => {
  it('renders contentinfo role, status, and copyright', () => {
    const html = renderToString(
      <AppFooter
        appName="Template Manager"
        version="1.0.0"
        statusText="Operational"
      />
    );
    expect(html).toContain('role="contentinfo"');
    expect(html).toContain('Template Manager');
    expect(html).toContain('1.0.0');
    expect(html).toContain('Operational');
  });
});
