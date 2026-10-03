import { describe, expect, it } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { ErrorPageTemplate } from './ErrorPageTemplate';

describe('ErrorPageTemplate template', () => {
  it('renders status code, title, and message', () => {
    const html = renderToString(
      <ErrorPageTemplate
        statusCode="404"
        title="Page Not Found"
        message="The requested endpoint could not be found."
      />
    );
    expect(html).toContain('role="main"');
    expect(html).toContain('404');
    expect(html).toContain('Page Not Found');
    expect(html).toContain('The requested endpoint could not be found.');
  });
});
