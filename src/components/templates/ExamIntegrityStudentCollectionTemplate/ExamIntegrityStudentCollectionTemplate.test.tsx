import React from 'react';
import { renderToString } from 'react-dom/server';
import { describe, it, expect } from 'vitest';
import { ExamIntegrityStudentCollectionTemplate } from './ExamIntegrityStudentCollectionTemplate';

describe('ExamIntegrityStudentCollectionTemplate', () => {
  it('renders student name, collection title and hatchery sanctuary view', () => {
    const html = renderToString(
      <ExamIntegrityStudentCollectionTemplate
        studentName="Lily"
        starCount={300}
      />
    );
    expect(html).toContain('Lily');
    expect(html).toContain('Pet Collection &amp; Hatchery');
    expect(html).toContain('Pet Hatchery &amp; Sanctuary');
    expect(html).toContain('Incubator');
    expect(html).toContain('My Pets');
  });

  it('does not render shop tabs or codex tabs', () => {
    const html = renderToString(
      <ExamIntegrityStudentCollectionTemplate
        studentName="Lily"
        starCount={300}
      />
    );
    expect(html).not.toContain('3D Egg Shop');
    expect(html).not.toContain('Phoenix Codex (All 5 Levels)');
  });
});

