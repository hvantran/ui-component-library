import React from 'react';
import { renderToString } from 'react-dom/server';
import { describe, it, expect } from 'vitest';
import { ExamIntegrityStudentShopTemplate } from './ExamIntegrityStudentShopTemplate';

describe('ExamIntegrityStudentShopTemplate', () => {
  it('renders student name, egg shop title and mystery egg adoption', () => {
    const html = renderToString(
      <ExamIntegrityStudentShopTemplate
        studentName="Lily"
        starCount={300}
      />
    );
    expect(html).toContain('Lily');
    expect(html).toContain('3D Egg Shop');
    expect(html).toContain('Ancient Mysterious Egg');
    expect(html).toContain('Adopt Mystery Egg');
  });

  it('does not render hatchery tab switcher buttons', () => {
    const html = renderToString(
      <ExamIntegrityStudentShopTemplate
        studentName="Lily"
        starCount={300}
      />
    );
    expect(html).not.toContain('Pet Hatchery &amp; Sanctuary');
    expect(html).not.toContain('tab-egg-shop');
  });
});

