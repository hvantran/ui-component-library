import { describe, it, expect } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { ThreeEggViewer } from './ThreeEggViewer';

describe('ThreeEggViewer', () => {
  it('renders ThreeEggViewer without crashing in SSR/server mode', () => {
    const html = renderToString(<ThreeEggViewer eggTier="dragon" width={300} height={300} />);
    expect(html).toContain('data-testid="three-egg-viewer"');
  });

  it('renders hatched state overlay', () => {
    const html = renderToString(
      <ThreeEggViewer eggTier="dragon" isHatched={true} crackProgress={1} />
    );
    expect(html).toContain('Egg Hatched!');
  });

  it('renders different tiers without error', () => {
    const celestialHtml = renderToString(<ThreeEggViewer eggTier="celestial" />);
    expect(celestialHtml).toContain('data-testid="three-egg-viewer"');

    const forestHtml = renderToString(<ThreeEggViewer eggTier="forest" />);
    expect(forestHtml).toContain('data-testid="three-egg-viewer"');
  });
});

