import React from 'react';
import { Modal } from '../../atoms/Modal';
import { Button } from '../../atoms/Button';
import { Input } from '../../atoms/Input';
import { Textarea } from '../../atoms/Textarea';
import { Chip } from '../../atoms/Chip';
import { Combobox } from '../../molecules/Combobox';

export interface CreateExamFromBankValues {
  title: string;
  durationSeconds: number;
  tags?: string[];
  reviewNotes?: string;
  mcqCount: number;
  essayShortCount: number;
  essayLongCount: number;
}

export interface ExamIntegrityCreateExamDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (values: CreateExamFromBankValues) => void;
  isLoading?: boolean;
  availableTags?: string[];
  isTagsLoading?: boolean;
}

export const ExamIntegrityCreateExamDialog: React.FC<ExamIntegrityCreateExamDialogProps> = ({
  open,
  onClose,
  onSubmit,
  isLoading = false,
  availableTags = [],
  isTagsLoading = false,
}) => {
  const [title, setTitle] = React.useState('');
  const [durationMin, setDurationMin] = React.useState(60);
  const [tagInput, setTagInput] = React.useState('');
  const [tags, setTags] = React.useState<string[]>([]);
  const [reviewNotes, setReviewNotes] = React.useState('');
  const [mcqCount, setMcqCount] = React.useState(10);
  const [essayShortCount, setEssayShortCount] = React.useState(1);
  const [essayLongCount, setEssayLongCount] = React.useState(1);

  const handleAddTag = (rawTag?: string) => {
    const t = (rawTag ?? tagInput).trim();
    if (t && !tags.includes(t)) setTags((prev) => [...prev, t]);
    setTagInput('');
  };

  const handleRemoveTag = (t: string) =>
    setTags((prev) => prev.filter((x) => x !== t));

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!title.trim()) return;
    onSubmit({
      title: title.trim(),
      durationSeconds: durationMin * 60,
      tags: tags.length > 0 ? tags : undefined,
      reviewNotes: reviewNotes.trim() || undefined,
      mcqCount,
      essayShortCount,
      essayLongCount,
    });
  };

  const handleClose = () => {
    if (isLoading) return;
    setTitle('');
    setDurationMin(60);
    setTagInput('');
    setTags([]);
    setReviewNotes('');
    setMcqCount(10);
    setEssayShortCount(1);
    setEssayLongCount(1);
    onClose();
  };

  if (!open) return null;

  const footerActions = (
    <div className="flex justify-end gap-2">
      <Button
        type="button"
        variant="neutral"
        onClick={handleClose}
        disabled={isLoading}
      >
        Cancel
      </Button>
      <Button
        type="button"
        variant="primary"
        onClick={() => handleSubmit()}
        disabled={
          isLoading ||
          !title.trim() ||
          mcqCount + essayShortCount + essayLongCount === 0
        }
      >
        {isLoading ? 'Creating…' : 'Create Exam'}
      </Button>
    </div>
  );

  return (
    <Modal
      isOpen={open}
      onClose={handleClose}
      title="Create Exam from Question Bank"
      maxWidth="lg"
      footer={footerActions}
    >
      <form
        id="create-exam-form"
        className="space-y-4"
        onSubmit={handleSubmit}
      >
        <Input
          label="Exam Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          fullWidth
          placeholder="e.g. Mid-term Science Assessment"
        />

        <Input
          type="number"
          min={1}
          label="Duration (minutes)"
          value={durationMin}
          onChange={(e) => setDurationMin(Math.max(1, Number(e.target.value)))}
          fullWidth
        />

        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Question Bank Tags
          </label>
          <Combobox
            value={tagInput}
            onChange={(selected) => {
              if (selected) {
                handleAddTag(selected);
              }
            }}
            options={availableTags.map((tag) => ({ value: tag, label: tag }))}
            className="w-full"
            placeholder={isTagsLoading ? 'Loading tags…' : 'Select tag…'}
          />
          <p className="mt-1 text-xs text-gray-500">
            Selected tags control which question-bank questions are eligible for this exam.
          </p>
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {tags.map((t) => (
                <Chip
                  key={t}
                  label={t}
                  size="sm"
                  variant="info"
                  onDelete={() => handleRemoveTag(t)}
                />
              ))}
            </div>
          )}
        </div>

        <div>
          <span className="block text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Question Bank Selection
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Input
              type="number"
              min={0}
              label="# MCQ"
              value={mcqCount}
              onChange={(e) => setMcqCount(Math.max(0, Number(e.target.value)))}
            />
            <Input
              type="number"
              min={0}
              label="# Essay Short"
              value={essayShortCount}
              onChange={(e) => setEssayShortCount(Math.max(0, Number(e.target.value)))}
            />
            <Input
              type="number"
              min={0}
              label="# Essay Long"
              value={essayLongCount}
              onChange={(e) => setEssayLongCount(Math.max(0, Number(e.target.value)))}
            />
          </div>
        </div>

        <Textarea
          label="Notes"
          value={reviewNotes}
          onChange={(e) => setReviewNotes(e.target.value)}
          rows={2}
          placeholder="Optional notes for this exam"
        />
      </form>
    </Modal>
  );
};

ExamIntegrityCreateExamDialog.displayName = 'ExamIntegrityCreateExamDialog';
export default ExamIntegrityCreateExamDialog;

