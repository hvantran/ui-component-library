import React from 'react';
import { renderToString } from 'react-dom/server';
import { describe, it, expect } from 'vitest';
import { ExamIntegrityStudentExamTemplate } from './ExamIntegrityStudentExamTemplate';

describe('ExamIntegrityStudentExamTemplate', () => {
  it('renders slots correctly when provided', () => {
    const html = renderToString(
      <ExamIntegrityStudentExamTemplate
        headerSlot={<div data-testid="header">Header Content</div>}
        contentSlot={<div data-testid="content">Exam Questions</div>}
        footerSlot={<div data-testid="footer">Footer Buttons</div>}
      />
    );
    expect(html).toContain('Header Content');
    expect(html).toContain('Exam Questions');
    expect(html).toContain('Footer Buttons');
  });

  it('renders children alongside slots without blanking the page', () => {
    const html = renderToString(
      <ExamIntegrityStudentExamTemplate
        headerSlot={<div>Header Content</div>}
        contentSlot={<div>Main Content</div>}
      >
        <div data-testid="modal">Modal Content</div>
      </ExamIntegrityStudentExamTemplate>
    );
    expect(html).toContain('Header Content');
    expect(html).toContain('Main Content');
    expect(html).toContain('Modal Content');
  });

  it('renders children standalone if no header and content slot provided', () => {
    const html = renderToString(
      <ExamIntegrityStudentExamTemplate>
        <div data-testid="custom">Custom Layout Content</div>
      </ExamIntegrityStudentExamTemplate>
    );
    expect(html).toContain('Custom Layout Content');
  });
});
