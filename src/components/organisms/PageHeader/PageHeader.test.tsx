import { describe, expect, it, vi } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { PageHeader } from './PageHeader';

describe('PageHeader organism', () => {
  it('renders title and actions', () => {
    const html = renderToString(
      <PageHeader
        title="Template Management"
        actions={[
          {
            actionName: 'create',
            actionLabel: 'New Template',
            onClick: vi.fn(),
          },
        ]}
      />
    );
    expect(html).toContain('Template Management');
    expect(html).toContain('New Template');
  });
});
