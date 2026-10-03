import React from 'react';
import { renderToString } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { BoardView } from './BoardView';

describe('BoardView organism', () => {
  interface MockCard {
    id: string;
    text: string;
  }

  const columns = [
    {
      id: 'backlog',
      title: 'Backlog',
      items: [{ id: '1', text: 'Task 1' }],
    },
    {
      id: 'done',
      title: 'Done',
      items: [{ id: '2', text: 'Task 2' }],
    },
  ];

  it('renders all columns and rendered cards', () => {
    const html = renderToString(
      <BoardView<MockCard>
        columns={columns}
        renderCard={(item) => <div data-testid={`card-${item.id}`}>{item.text}</div>}
      />
    );

    expect(html).toContain('Backlog');
    expect(html).toContain('Done');
    expect(html).toContain('Task 1');
    expect(html).toContain('Task 2');
  });
});
