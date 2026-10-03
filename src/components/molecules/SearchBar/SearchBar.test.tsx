import { describe, expect, it } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { SearchBar } from './SearchBar';

describe('SearchBar molecule', () => {
  it('renders search input with role searchbox and placeholder', () => {
    const html = renderToString(<SearchBar placeholder="Search actions..." />);
    expect(html).toContain('role="searchbox"');
    expect(html).toContain('placeholder="Search actions..."');
  });

  it('renders clear button when value is present', () => {
    const html = renderToString(<SearchBar value="test query" />);
    expect(html).toContain('aria-label="Clear search"');
    expect(html).toContain('value="test query"');
  });
});
