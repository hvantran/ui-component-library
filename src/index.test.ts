import { describe, it, expect } from 'vitest';
import pkg from '../package.json';
import {
  VERSION,
  cn,
  Button,
  Card,
  Input,
  Badge,
  Select,
  ProgressBar,
  Modal,
  CodeEditor,
  FormField,
  Breadcrumbs,
} from './index';

describe('ui-component-library entry', () => {
  it('exports valid version string', () => {
    expect(VERSION).toBe(pkg.version);
  });

  it('exports utility functions', () => {
    expect(typeof cn).toBe('function');
  });

  it('exports core atomic components', () => {
    expect(Button).toBeDefined();
    expect(Card).toBeDefined();
    expect(Input).toBeDefined();
    expect(Badge).toBeDefined();
    expect(Select).toBeDefined();
    expect(ProgressBar).toBeDefined();
    expect(Modal).toBeDefined();
    expect(CodeEditor).toBeDefined();
  });

  it('exports molecule components', () => {
    expect(FormField).toBeDefined();
    expect(Breadcrumbs).toBeDefined();
  });
});
