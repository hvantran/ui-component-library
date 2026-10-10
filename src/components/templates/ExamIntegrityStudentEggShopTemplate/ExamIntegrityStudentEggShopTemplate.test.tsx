import React from 'react';
import { renderToString } from 'react-dom/server';
import { describe, it, expect } from 'vitest';
import { ExamIntegrityStudentEggShopTemplate } from './ExamIntegrityStudentEggShopTemplate';

describe('ExamIntegrityStudentEggShopTemplate', () => {
  it('renders student name and shop tabs correctly', () => {
    const html = renderToString(
      <ExamIntegrityStudentEggShopTemplate
        studentName="Lily"
        starCount={300}
        activeTab="shop"
      />
    );
    expect(html).toContain('Lily');
    expect(html).toContain('3D Egg Shop');
    expect(html).toContain('Pet Hatchery &amp; Sanctuary');
  });

  it('renders elementary title when isElementary is true', () => {
    const html = renderToString(
      <ExamIntegrityStudentEggShopTemplate
        studentName="Lily"
        starCount={300}
        isElementary={true}
      />
    );
    expect(html).toContain('Pet Egg Emporium &amp; Hatchery');
  });
});

