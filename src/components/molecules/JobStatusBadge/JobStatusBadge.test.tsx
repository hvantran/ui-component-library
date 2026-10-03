import React from 'react';
import { renderToString } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { JobStatusBadge } from './JobStatusBadge';

describe('JobStatusBadge molecule', () => {
  it('renders success status correctly', () => {
    const html = renderToString(<JobStatusBadge status="SUCCESS" />);
    expect(html).toContain('data-testid="job-status-badge"');
    expect(html).toContain('data-status="SUCCESS"');
    expect(html).toContain('Success');
    expect(html).toContain('text-green-700');
  });

  it('renders running status with spinning indicator', () => {
    const html = renderToString(<JobStatusBadge status="RUNNING" />);
    expect(html).toContain('data-status="RUNNING"');
    expect(html).toContain('Running');
    expect(html).toContain('animate-spin');
  });

  it('renders custom label and respects showLabel=false', () => {
    const htmlWithLabel = renderToString(
      <JobStatusBadge status="PENDING" label="Queued in runner" />
    );
    expect(htmlWithLabel).toContain('Queued in runner');

    const htmlIconOnly = renderToString(
      <JobStatusBadge status="PENDING" showLabel={false} />
    );
    expect(htmlIconOnly).not.toContain('<span>Pending</span>');
    expect(htmlIconOnly).toContain('data-testid="job-status-badge"');
  });

  it('handles failed and cancelled statuses', () => {
    const htmlFailed = renderToString(<JobStatusBadge status="FAILED" />);
    expect(htmlFailed).toContain('Failed');
    expect(htmlFailed).toContain('text-red-700');

    const htmlCancelled = renderToString(<JobStatusBadge status="CANCELLED" />);
    expect(htmlCancelled).toContain('Cancelled');
  });
});
