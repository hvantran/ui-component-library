import { describe, it, expect } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Tooltip } from './Tooltip';

describe('Tooltip atom', () => {
  it('renders children with tooltip role and content', () => {
    const html = renderToString(
      <Tooltip content="Tooltip explanation">
        <button type="button">Trigger</button>
      </Tooltip>,
    );
    expect(html).toContain('Trigger');
    expect(html).toContain('role="tooltip"');
    expect(html).toContain('Tooltip explanation');
    expect(html).toContain('group');
  });

  it('supports title alias prop for MUI compatibility', () => {
    const html = renderToString(
      <Tooltip title="MUI title text">
        <span>Target</span>
      </Tooltip>,
    );
    expect(html).toContain('MUI title text');
    expect(html).toContain('role="tooltip"');
  });

  it('renders only children when disabled or empty content', () => {
    const htmlDisabled = renderToString(
      <Tooltip content="Hidden text" disabled>
        <button type="button">Trigger</button>
      </Tooltip>,
    );
    expect(htmlDisabled).toContain('Trigger');
    expect(htmlDisabled).not.toContain('role="tooltip"');

    const htmlEmpty = renderToString(
      <Tooltip content="">
        <button type="button">Trigger</button>
      </Tooltip>,
    );
    expect(htmlEmpty).toContain('Trigger');
    expect(htmlEmpty).not.toContain('role="tooltip"');
  });
});
