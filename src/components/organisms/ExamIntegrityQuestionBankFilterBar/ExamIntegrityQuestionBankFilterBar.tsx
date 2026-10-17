import React from 'react';
import { Search, X } from 'lucide-react';
import { Button } from '../../atoms/Button';
import { Select } from '../../atoms/Select';
import { Combobox } from '../../molecules/Combobox';
import { cn } from '../../../utils/cn';

export interface ExamIntegrityQuestionBankFilterBarProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  typeFilter: string;
  onTypeChange: (type: string) => void;
  typeOptions: { value: string; label: string }[];
  tagInput: string;
  onTagInputChange: (tag: string) => void;
  availableTags: string[];
  isTagsLoading?: boolean;
  selectedTags: string[];
  onAddTag: (tag: string) => void;
  onRemoveTag: (tag: string) => void;
  className?: string;
}

const inputCls =
  'border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100';

export const ExamIntegrityQuestionBankFilterBar: React.FC<
  ExamIntegrityQuestionBankFilterBarProps
> = ({
  searchQuery,
  onSearchChange,
  typeFilter,
  onTypeChange,
  typeOptions,
  tagInput,
  onTagInputChange,
  availableTags,
  isTagsLoading = false,
  selectedTags,
  onAddTag,
  onRemoveTag,
  className,
}) => {
  return (
    <div className={cn('flex flex-wrap gap-2 items-center', className)}>
      {/* Search */}
      <div className="relative flex-1 min-w-[320px]">
        <Search
          size={18}
          className="absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 dark:text-gray-500"
        />
        <input
          className={cn(inputCls, 'w-full pl-8')}
          placeholder="Search questions…"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          aria-label="Search questions"
        />
      </div>

      {/* Type */}
      <Select
        value={typeFilter}
        onChange={(e) => onTypeChange(e.target.value)}
        options={typeOptions}
        placeholder="All Types"
        className="min-w-[160px] w-[160px]"
      />

      {/* Tag combobox */}
      <Combobox
        className="w-48 shrink-0"
        placeholder={isTagsLoading ? 'Loading tags…' : 'Select tag…'}
        value={tagInput}
        onChange={(val) => {
          if (val) {
            onAddTag(val);
            onTagInputChange('');
          }
        }}
        options={availableTags.map((tag) => ({ value: tag, label: tag }))}
      />

      {/* Active tag chips */}
      {selectedTags.map((tag) => (
        <span
          key={tag}
          className="inline-flex items-center gap-1 text-xs font-semibold bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200 rounded-full px-2 h-6 shrink-0"
        >
          {tag}
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => onRemoveTag(tag)}
            className="!min-w-0 !h-5 !px-1 !py-0 leading-none hover:opacity-70"
            aria-label={`Remove tag ${tag}`}
          >
            <X size={14} />
          </Button>
        </span>
      ))}
    </div>
  );
};

