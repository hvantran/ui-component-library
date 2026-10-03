import { describe, expect, it } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { EmptyState } from './EmptyState';

describe('EmptyState molecule', () => {
  it('renders default empty state title and description', () => {
    const html = renderToString(<EmptyState />);
    expect(html).toContain('role="region"');
    expect(html).toContain('No data found');
    expect(html).toContain('There are no items to display at this time.');
  });

  it('renders custom title, description and action', () => {
    const html = renderToString(
      <EmptyState
        title="No actions scheduled"
        description="Click below to create your first action."
        action={<button>Create Action</button>}
      />
    );
    expect(html).toContain('No actions scheduled');
    expect(html).toContain('Click below to create your first action.');
    expect(html).toContain('Create Action');
  });
});
