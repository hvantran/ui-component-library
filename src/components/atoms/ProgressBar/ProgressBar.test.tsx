import { describe, it, expect } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { ProgressBar } from './ProgressBar';

describe('ProgressBar atom', () => {
  it('renders progress bar with correct aria attributes', () => {
    const html = renderToString(<ProgressBar value={45} label="Syncing" showPercentage />);
    expect(html).toContain('role="progressbar"');
    expect(html).toContain('aria-valuenow="45"');
    expect(html).toContain('Syncing');
    expect(html).toContain('45%');
  });

  it('clamps values below 0 and above 100', () => {
    const html1 = renderToString(<ProgressBar value={-20} />);
    expect(html1).toContain('aria-valuenow="0"');

    const html2 = renderToString(<ProgressBar value={150} />);
    expect(html2).toContain('aria-valuenow="100"');
  });

  it('renders success variant', () => {
    const html = renderToString(<ProgressBar value={100} variant="success" />);
    expect(html).toContain('bg-green-500');
  });
});
