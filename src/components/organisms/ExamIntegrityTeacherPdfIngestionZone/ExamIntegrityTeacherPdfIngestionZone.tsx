import React, { forwardRef } from 'react';
import { ProgressBar } from '../../atoms/ProgressBar';
import { cn } from '../../../utils/cn';

export interface ExamIntegrityTeacherPdfIngestionZoneProps {
  onFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isProcessing?: boolean;
  isSuccess?: boolean;
  error?: string | null;
  processingMessage?: string;
  successMessage?: string;
  className?: string;
  accept?: string;
}

export const ExamIntegrityTeacherPdfIngestionZone = forwardRef<
  HTMLInputElement,
  ExamIntegrityTeacherPdfIngestionZoneProps
>(
  (
    {
      onFileSelect,
      isProcessing = false,
      isSuccess = false,
      error = null,
      processingMessage = 'Processing PDF…',
      successMessage = 'Upload successful! Redirecting to review page…',
      className,
      accept = '.pdf',
    },
    ref
  ) => {
    return (
      <div
        data-testid="teacher-pdf-ingestion-zone"
        className={cn('p-6 text-center bg-surface text-on-surface', className)}
      >
        <input
          type="file"
          accept={accept}
          ref={ref}
          hidden
          onChange={onFileSelect}
          data-testid="pdf-file-input"
        />
        {isProcessing && (
          <div className="mt-2 space-y-2">
            <ProgressBar value={100} className="animate-pulse" />
            <div className="text-on-surface text-sm">{processingMessage}</div>
          </div>
        )}
        {isSuccess && (
          <div
            role="alert"
            className="mt-2 p-3 rounded-lg border border-green-200 bg-green-50 text-green-800 text-sm font-medium"
          >
            {successMessage}
          </div>
        )}
        {error && (
          <div
            role="alert"
            className="mt-2 p-3 rounded-lg border border-red-200 bg-red-50 text-red-800 text-sm font-medium"
          >
            {error}
          </div>
        )}
      </div>
    );
  }
);

ExamIntegrityTeacherPdfIngestionZone.displayName =
  'ExamIntegrityTeacherPdfIngestionZone';
