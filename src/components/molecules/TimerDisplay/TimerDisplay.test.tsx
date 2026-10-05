import { describe, it, expect } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { TimerDisplay } from './TimerDisplay';

describe('TimerDisplay', () => {
  it('renders initial formatted time correctly in normal state', () => {
    const html = renderToString(<TimerDisplay remainingSeconds={600} />);
    expect(html).toContain('10:00');
    expect(html).toContain('text-gray-700');
    expect(html).not.toContain('Time running out');
  });

  it('shows urgent warning state when remainingSeconds <= urgentThresholdSeconds', () => {
    const html = renderToString(
      <TimerDisplay remainingSeconds={120} urgentThresholdSeconds={300} />,
    );
    expect(html).toContain('02:00');
    expect(html).toContain('Time running out');
    expect(html).toContain('text-red-600');
  });

  it('hides icon when showIcon is false', () => {
    const html = renderToString(<TimerDisplay remainingSeconds={60} showIcon={false} />);
    expect(html).toContain('01:00');
    expect(html).not.toContain('<svg');
  });
});
