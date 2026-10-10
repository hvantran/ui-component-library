/**
 * Domain types for Exam Integrity components
 */

export type QuestionType = 'MCQ' | 'ESSAY_SHORT' | 'ESSAY_LONG';

export interface QuestionOption {
  key?: string;
  label?: string;
  text: string;
}

export interface QuestionPart {
  key: string;
  prompt: string;
}

export interface AnswerPart {
  key: string;
  answer: string;
}

export interface RubricDTO {
  keywords?: string[];
  expectedSteps?: string[];
  finalAnswer?: string;
  modelAnswer?: string;
  formatChecks?: string[];
}

export interface QuestionSummaryDTO {
  id: string;
  bankItemId?: string;
  questionNumber: number;
  content: string;
  stem?: string;
  type: QuestionType;
  points: number;
  options?: string[];
  questionParts?: QuestionPart[];
  truncated: boolean;
  imageData?: string;
}

export interface DraftQuestionDTO {
  id: string;
  questionNumber: number;
  content: string;
  rawText?: string;
  stem?: string;
  type?: QuestionType;
  points: number;
  options?: string[];
  questionParts?: QuestionPart[];
  correctAnswer?: string;
  rubric?: RubricDTO;
  truncated?: boolean;
  ocrConfidence?: number;
  parserConfidence?: number;
  imageData?: string;
  pageNumber?: number;
  parserWarnings?: string[];
  reviewStatus?: 'PENDING' | 'APPROVED' | 'CORRECTED' | 'EXCLUDED';
}

