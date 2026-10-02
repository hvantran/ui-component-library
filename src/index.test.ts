import { describe, it, expect } from 'vitest';
import pkg from '../package.json';
import { VERSION } from './index';

describe('ui-component-library entry', () => {
  it('exports valid version string', () => {
    expect(VERSION).toBe(pkg.version);
});

