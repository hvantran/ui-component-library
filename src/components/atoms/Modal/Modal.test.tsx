import { describe, it, expect, vi } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Modal } from './Modal';

describe('Modal atom', () => {
  it('returns null when isOpen is false', () => {
    const html = renderToString(
      <Modal isOpen={false} onClose={vi.fn()}>
        Modal Body
      </Modal>,
    );
    expect(html).toBe('');
  });

  it('renders modal dialog when isOpen is true', () => {
    const html = renderToString(
      <Modal
        isOpen={true}
        onClose={vi.fn()}
        title="Test Title"
        footer={<button>Submit</button>}
      >
        <p>Modal Body</p>
      </Modal>,
    );
    expect(html).toContain('role="dialog"');
    expect(html).toContain('aria-modal="true"');
    expect(html).toContain('Test Title');
    expect(html).toContain('Modal Body');
    expect(html).toContain('Submit');
  });
});
