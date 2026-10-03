import React from 'react';
import { renderToString } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { StatCard } from './StatCard';

describe('StatCard molecule', () => {
  it('renders title and value', () => {
    const html = renderToString(<StatCard title="Total Templates" value="1,245" />);
    expect(html).toContain('Total Templates');
    expect(html).toContain('1,245');
  });

  it('renders positive change and description', () => {
    const html = renderToString(
      <StatCard
        title="Active Jobs"
        value={42}
        change={{ value: '+12.5%', isPositive: true }}
        description="Compared to last week"
      />
    );
    expect(html).toContain('+12.5%');
    expect(html).toContain('Compared to last week');
    expect(html).toContain('bg-green-100');
  });

  it('renders negative change indicator', () => {
    const html = renderToString(
      <StatCard
        title="Failed Jobs"
        value={3}
        change={{ value: '-5.2%', isPositive: false }}
      />
    );
    expect(html).toContain('-5.2%');
    expect(html).toContain('bg-red-100');
  });
});
