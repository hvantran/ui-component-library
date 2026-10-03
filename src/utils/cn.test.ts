import { describe, it, expect } from 'vitest';
import { cn } from './cn';

describe('cn utility', () => {
  it('merges class names correctly', () => {
    expect(cn('px-2 py-1', 'bg-blue-500')).toBe('px-2 py-1 bg-blue-500');
  });

  it('handles conditional classes', () => {
    const isFalse = false;
    const isTrue = true;
    expect(cn('base', isFalse && 'hidden', isTrue && 'block')).toBe('base block');
  });

  it('resolves conflicting tailwind classes', () => {
    expect(cn('px-2 px-4', 'bg-red-500 bg-blue-500')).toBe('px-4 bg-blue-500');
  });
});
