import { describe, it, expect } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Button } from './Button';

describe('Button atom', () => {
  it('renders primary button with expected tailwind classes', () => {
    const html = renderToString(<Button variant="primary">Click Me</Button>);
    expect(html).toContain('bg-blue-600');
    expect(html).toContain('hover:bg-blue-700');
    expect(html).toContain('text-white');
    expect(html).toContain('px-4 py-2');
    expect(html).toContain('rounded-md');
    expect(html).toContain('transition duration-150 ease-in-out');
    expect(html).toContain('Click Me');
  });

  it('renders secondary variant', () => {
    const html = renderToString(<Button variant="secondary">Cancel</Button>);
    expect(html).toContain('bg-gray-200');
    expect(html).toContain('text-gray-800');
  });

  it('renders danger variant', () => {
    const html = renderToString(<Button variant="danger">Delete</Button>);
    expect(html).toContain('bg-red-600');
    expect(html).toContain('text-white');
  });

  it('renders disabled state with opacity and disabled attribute', () => {
    const html = renderToString(<Button disabled>Disabled</Button>);
    expect(html).toContain('opacity-50');
    expect(html).toContain('cursor-not-allowed');
    expect(html).toContain('disabled=""');
  });

  it('renders loading spinner when loading is true', () => {
    const html = renderToString(<Button loading>Submit</Button>);
    expect(html).toContain('animate-spin');
    expect(html).toContain('disabled=""');
  });

  it('renders fullWidth button', () => {
    const html = renderToString(<Button fullWidth>Full Width</Button>);
    expect(html).toContain('w-full');
  });

  it('renders icon inline with whitespace-nowrap and gap', () => {
    const html = renderToString(
      <Button icon={<span data-testid="plus-icon">+</span>}>New Endpoint</Button>
    );
    expect(html).toContain('whitespace-nowrap');
    expect(html).toContain('inline-flex');
    expect(html).toContain('data-testid="plus-icon"');
    expect(html).toContain('New Endpoint');
  });
});
