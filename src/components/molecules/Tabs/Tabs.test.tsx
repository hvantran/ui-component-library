import { describe, expect, it } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Tabs } from './Tabs';

describe('Tabs molecule', () => {
  const tabs = [
    { id: 'tab1', label: 'Overview' },
    { id: 'tab2', label: 'History' },
    { id: 'tab3', label: 'Settings', disabled: true },
  ];

  it('renders tablist and tabs with correct aria attributes', () => {
    const html = renderToString(
      <Tabs tabs={tabs} activeTab="tab1" onChange={() => {}} />
    );
    expect(html).toContain('role="tablist"');
    expect(html).toContain('role="tab"');
    expect(html).toContain('Overview');
    expect(html).toContain('History');
    expect(html).toContain('aria-selected="true"');
    expect(html).toContain('aria-selected="false"');
  });
});
