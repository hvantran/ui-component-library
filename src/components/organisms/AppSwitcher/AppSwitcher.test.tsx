import { describe, expect, it } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { AppSwitcher, DEFAULT_PLATFORM_APPS } from './AppSwitcher';

describe('AppSwitcher organism', () => {
  it('renders app switcher button with aria-label', () => {
    const html = renderToString(<AppSwitcher />);
    expect(html).toContain('aria-label="App switcher"');
    expect(html).toContain('title="App switcher"');
    expect(html).toContain('aria-expanded="false"');
  });

  it('includes default platform applications list with all 4 services', () => {
    expect(DEFAULT_PLATFORM_APPS.length).toBe(4);
    expect(DEFAULT_PLATFORM_APPS.map((a) => a.id)).toEqual([
      'template-manager',
      'action-manager',
      'endpoint-collector',
      'exam-integrity',
    ]);
  });

  it('renders custom trigger class name', () => {
    const html = renderToString(
      <AppSwitcher triggerClassName="custom-trigger-class" />
    );
    expect(html).toContain('custom-trigger-class');
  });
});
