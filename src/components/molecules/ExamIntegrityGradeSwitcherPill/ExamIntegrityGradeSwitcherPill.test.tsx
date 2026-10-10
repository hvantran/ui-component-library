import React from 'react';
import { describe, it, expect } from 'vitest';
import { renderToString } from 'react-dom/server';
import { ExamIntegrityGradeSwitcherPill } from './ExamIntegrityGradeSwitcherPill';

describe('ExamIntegrityGradeSwitcherPill molecule', () => {
  it('renders dropdown when canSwitchGrade is true', () => {
    const html = renderToString(
      <ExamIntegrityGradeSwitcherPill
        canSwitchGrade
        effectiveGrade={3}
        overrideGrade={null}
        onGradeChange={() => {}}
      />,
    );

    expect(html).toContain('Elementary');
    expect(html).toContain('<select');
  });

  it('renders locked pill when canSwitchGrade is false', () => {
    const html = renderToString(
      <ExamIntegrityGradeSwitcherPill
        canSwitchGrade={false}
        effectiveGrade={4}
      />,
    );

    expect(html).toContain('Grade 4');
    expect(html).not.toContain('<select');
  });
});

