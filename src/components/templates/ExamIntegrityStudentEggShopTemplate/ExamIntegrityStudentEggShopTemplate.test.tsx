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
    expect(html).toContain('Egg Shop');
    expect(html).not.toContain('3D Egg Shop');
    expect(html).toContain('Pet Hatchery &amp; Sanctuary');
  });

  it('renders default title when isElementary is true without legacy text', () => {
    const html = renderToString(
      <ExamIntegrityStudentEggShopTemplate
        studentName="Lily"
        starCount={300}
        isElementary={true}
      />
    );
    expect(html).not.toContain('Pet Egg &amp; Reward Shop');
    expect(html).not.toContain('Egg &amp; Reward Shop');
    expect(html).not.toContain('Adopt companion eggs and rewards using stars earned from exams');
    expect(html).not.toContain('3D Pet Egg Shop');
    expect(html).not.toContain('Pet Egg Emporium &amp; Hatchery');
  });
});

