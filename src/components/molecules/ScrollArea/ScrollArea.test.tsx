import { describe, it, expect } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { ScrollArea } from './ScrollArea';

describe('ScrollArea', () => {
  it('renders children correctly', () => {
    const html = renderToString(
      <ScrollArea>
        <div>Content item 1</div>
      </ScrollArea>,
    );
    expect(html).toContain('Content item 1');
  });

  it('renders loading message when isLoading is true', () => {
    const html = renderToString(
      <ScrollArea hasMore={true} isLoading={true}>
        <div>List</div>
      </ScrollArea>,
    );
    expect(html).toContain('Loading more…');
  });

  it('renders endMessage when hasMore is false and not loading', () => {
    const html = renderToString(
      <ScrollArea hasMore={false} isLoading={false} endMessage={<span>Finished</span>}>
        <div>List</div>
      </ScrollArea>,
    );
    expect(html).toContain('Finished');
  });
});
