import React from 'react';
import { renderToString } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { BoardColumn } from './BoardColumn';

describe('BoardColumn organism', () => {
  it('renders title, counter badge, and child items', () => {
    const html = renderToString(
      <BoardColumn id="todo" title="To Do" count={2}>
        <div data-testid="card-1">Card 1</div>
        <div data-testid="card-2">Card 2</div>
      </BoardColumn>
    );

    expect(html).toContain('To Do');
    expect(html).toContain('data-column-id="todo"');
    expect(html).toContain('Card 1');
    expect(html).toContain('Card 2');
  });

  it('renders empty message when no children provided', () => {
    const html = renderToString(
      <BoardColumn id="done" title="Done" emptyMessage="Nothing completed yet">
        {null}
      </BoardColumn>
    );

    expect(html).toContain('Nothing completed yet');
  });
});
