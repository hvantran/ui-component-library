import { describe, it, expect } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { ConfirmationDialog } from './ConfirmationDialog';

describe('ConfirmationDialog molecule', () => {
  it('renders modal dialog with title, message content, and buttons', () => {
    const html = renderToString(
      <ConfirmationDialog
        isOpen
        title="Confirm Delete"
        content="Are you sure you want to delete this item?"
        positiveText="Delete"
        positiveVariant="danger"
        negativeText="Cancel"
      />,
    );
    expect(html).toContain('Confirm Delete');
    expect(html).toContain('Are you sure you want to delete this item?');
    expect(html).toContain('Delete');
    expect(html).toContain('Cancel');
    expect(html).toContain('bg-red-600');
  });

  it('supports open prop alias', () => {
    const html = renderToString(
      <ConfirmationDialog
        open
        title="Alias Title"
        content="Testing open prop"
      />,
    );
    expect(html).toContain('Alias Title');
    expect(html).toContain('Testing open prop');
  });

  it('renders nothing when closed', () => {
    const html = renderToString(
      <ConfirmationDialog
        isOpen={false}
        title="Hidden Dialog"
        content="Should not appear"
      />,
    );
    expect(html).toBe('');
  });
});
