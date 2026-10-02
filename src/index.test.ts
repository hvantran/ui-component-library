import { describe, it, expect } from 'vitest';
import { VERSION } from './index';

describe('ui-component-library entry', () => {
  it('exports valid version string', () => {
    expect(VERSION).toBe('0.1.0');
  });
});

