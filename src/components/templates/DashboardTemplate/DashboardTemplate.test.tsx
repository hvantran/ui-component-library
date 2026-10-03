import { describe, expect, it } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { DashboardTemplate } from './DashboardTemplate';

describe('DashboardTemplate template', () => {
  it('renders topbar, sidebar, main content and footer', () => {
    const html = renderToString(
      <DashboardTemplate
        topBar={<header>My Header</header>}
        sidebar={<aside>My Sidebar</aside>}
        footer={<footer>My Footer</footer>}
      >
        <div>Main Dashboard Content</div>
      </DashboardTemplate>
    );
    expect(html).toContain('My Header');
    expect(html).toContain('My Sidebar');
    expect(html).toContain('role="main"');
    expect(html).toContain('Main Dashboard Content');
    expect(html).toContain('My Footer');
  });
});
