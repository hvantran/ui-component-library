import React from 'react';
import { describe, it, expect } from 'vitest';
import { renderToString } from 'react-dom/server';
import { ExamIntegrityQuestionPickerModal } from './ExamIntegrityQuestionPickerModal';

describe('ExamIntegrityQuestionPickerModal organism', () => {
  it('renders title, inputs, and questions list', () => {
    const html = renderToString(
      <ExamIntegrityQuestionPickerModal
        isOpen
        onClose={() => {}}
        onSubmit={() => {}}
        initialTitle="Midterm Exam"
        initialDurationMin={45}
        page={0}
        totalPages={1}
        onPageChange={() => {}}
        searchText=""
        onSearchChange={() => {}}
        typeFilter=""
        onTypeFilterChange={() => {}}
        questions={[
          {
            id: 'q1',
            questionNumber: 1,
            content: 'Calculate: 5 x 5 = ?',
            type: 'MCQ',
            points: 1,
            truncated: false,
          },
        ]}
      />,
    );

    expect(html).toContain('Select Questions from Bank');
    expect(html).toContain('Calculate: 5 x 5 = ?');
    expect(html).toContain('Midterm Exam');
  });
});

