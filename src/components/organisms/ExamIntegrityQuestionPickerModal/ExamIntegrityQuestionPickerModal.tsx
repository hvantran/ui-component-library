import React, { useState, useEffect } from 'react';
import { BookOpen, Search, X as XIcon } from 'lucide-react';
import { Modal } from '../../atoms/Modal';
import { Button } from '../../atoms/Button';
import type { DraftQuestionDTO } from '../../../types/examIntegrity';

const TYPE_LABELS: Record<string, string> = {
  MCQ: 'MCQ',
  ESSAY_SHORT: 'Essay Short',
  ESSAY_LONG: 'Essay Long',
};

const TYPE_BADGE: Record<string, string> = {
  MCQ: 'bg-blue-50 text-blue-700',
  ESSAY_SHORT: 'bg-violet-50 text-violet-700',
  ESSAY_LONG: 'bg-amber-50 text-amber-700',
};

export interface ExamIntegrityQuestionPickerModalProps {
  isOpen?: boolean;
  open?: boolean;
  onClose: () => void;
  onSubmit?: (result: {
    title: string;
    durationSeconds?: number;
    durationMin?: number;
    mcqCount?: number;
    essayShortCount?: number;
    essayLongCount?: number;
    selectedQuestionIds: string[];
  }) => void;
  onSubmitSelection?: (selectedQuestionIds: string[]) => void;
  mode?: 'create' | 'edit';
  initialTitle?: string;
  initialDurationMin?: number;
  initialSelectedQuestionIds?: string[];
  questions?: DraftQuestionDTO[];
  totalElements?: number;
  page?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
  searchText?: string;
  onSearchChange?: (search: string) => void;
  typeFilter?: string;
  onTypeFilterChange?: (type: string) => void;
  isLoading?: boolean;
  isSearching?: boolean;
  selectedQuestionsOverride?: DraftQuestionDTO[];
  isLoadingSelected?: boolean;
  onSearchQuestions?: (params: {
    q?: string;
    type?: string;
    page: number;
    size: number;
  }) => Promise<{ content: DraftQuestionDTO[]; totalElements: number; totalPages: number }>;
  onFetchByIds?: (ids: string[]) => Promise<DraftQuestionDTO[]>;
}

export const ExamIntegrityQuestionPickerModal: React.FC<
  ExamIntegrityQuestionPickerModalProps
> = ({
  isOpen,
  open,
  onClose,
  onSubmit,
  onSubmitSelection,
  mode = 'create',
  initialTitle = '',
  initialDurationMin = 60,
  initialSelectedQuestionIds = [],
  questions: externalQuestions,
  totalElements: externalTotalElements,
  page: externalPage,
  totalPages: externalTotalPages,
  onPageChange: externalOnPageChange,
  searchText: externalSearchText,
  onSearchChange: externalOnSearchChange,
  typeFilter: externalTypeFilter,
  onTypeFilterChange: externalOnTypeFilterChange,
  isLoading = false,
  isSearching: externalIsSearching = false,
  selectedQuestionsOverride,
  isLoadingSelected: externalIsLoadingSelected = false,
  onSearchQuestions,
  onFetchByIds,
}) => {
  const isModalOpen = Boolean(isOpen ?? open);
  const [title, setTitle] = useState(initialTitle);
  const [durationMin, setDurationMin] = useState(initialDurationMin);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set(initialSelectedQuestionIds));
  const [showSelectedOnly, setShowSelectedOnly] = useState(false);
  const isEditMode = mode === 'edit';

  // Internal search state when running in self-fetching mode
  const [internalSearch, setInternalSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [internalTypeFilter, setInternalTypeFilter] = useState('');
  const [internalPage, setInternalPage] = useState(0);
  const [fetchedQuestions, setFetchedQuestions] = useState<DraftQuestionDTO[]>([]);
  const [fetchedTotalElements, setFetchedTotalElements] = useState(0);
  const [fetchedTotalPages, setFetchedTotalPages] = useState(1);
  const [isSelfSearching, setIsSelfSearching] = useState(false);
  const [fetchedSelectedQuestions, setFetchedSelectedQuestions] = useState<DraftQuestionDTO[]>([]);
  const [isSelfLoadingSelected, setIsSelfLoadingSelected] = useState(false);

  useEffect(() => {
    if (!isModalOpen) return;
    setTitle(initialTitle);
    setDurationMin(initialDurationMin);
    setSelectedIds(new Set(initialSelectedQuestionIds));
    setShowSelectedOnly(false);
    setInternalSearch('');
    setDebouncedSearch('');
    setInternalTypeFilter('');
    setInternalPage(0);
  }, [isModalOpen, initialTitle, initialDurationMin, initialSelectedQuestionIds]);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(internalSearch), 300);
    return () => clearTimeout(timer);
  }, [internalSearch]);

  // Self-fetch query effect
  useEffect(() => {
    if (!isModalOpen || !onSearchQuestions) return;
    let isSubscribed = true;
    setIsSelfSearching(true);
    onSearchQuestions({
      q: debouncedSearch || undefined,
      type: internalTypeFilter || undefined,
      page: internalPage,
      size: 30,
    })
      .then((res) => {
        if (!isSubscribed) return;
        setFetchedQuestions(res.content ?? []);
        setFetchedTotalElements(res.totalElements ?? 0);
        setFetchedTotalPages(Math.max(1, res.totalPages ?? 1));
      })
      .catch(() => {
        if (!isSubscribed) return;
        setFetchedQuestions([]);
      })
      .finally(() => {
        if (isSubscribed) setIsSelfSearching(false);
      });

    return () => {
      isSubscribed = false;
    };
  }, [isModalOpen, onSearchQuestions, debouncedSearch, internalTypeFilter, internalPage]);

  // Self-fetch selected by IDs effect
  useEffect(() => {
    if (!isModalOpen || !onFetchByIds || !showSelectedOnly || selectedIds.size === 0) return;
    let isSubscribed = true;
    setIsSelfLoadingSelected(true);
    onFetchByIds(Array.from(selectedIds))
      .then((res) => {
        if (isSubscribed) setFetchedSelectedQuestions(res ?? []);
      })
      .catch(() => {
        if (isSubscribed) setFetchedSelectedQuestions([]);
      })
      .finally(() => {
        if (isSubscribed) setIsSelfLoadingSelected(false);
      });

    return () => {
      isSubscribed = false;
    };
  }, [isModalOpen, onFetchByIds, showSelectedOnly, selectedIds]);

  const toggleSelection = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleSubmit = () => {
    if (selectedIds.size === 0) return;
    const selectedQuestionIds = Array.from(selectedIds);

    if (isEditMode) {
      onSubmitSelection?.(selectedQuestionIds);
      return;
    }

    if (!title.trim()) return;

    onSubmit?.({
      title: title.trim(),
      durationSeconds: durationMin * 60,
      durationMin,
      mcqCount: 0,
      essayShortCount: 0,
      essayLongCount: 0,
      selectedQuestionIds,
    });
  };

  const handleClose = () => {
    if (isLoading) return;
    onClose();
  };

  const activeQuestions = onSearchQuestions ? fetchedQuestions : (externalQuestions ?? []);
  const activeTotal = onSearchQuestions ? fetchedTotalElements : (externalTotalElements ?? activeQuestions.length);
  const activePage = onSearchQuestions ? internalPage : (externalPage ?? 0);
  const activeTotalPages = onSearchQuestions ? fetchedTotalPages : (externalTotalPages ?? 1);
  const activeSearching = onSearchQuestions ? isSelfSearching : externalIsSearching;
  const activeSearchText = onSearchQuestions ? internalSearch : (externalSearchText ?? '');
  const activeTypeFilter = onSearchQuestions ? internalTypeFilter : (externalTypeFilter ?? '');
  const activeSelectedQuestions = onFetchByIds
    ? fetchedSelectedQuestions
    : (selectedQuestionsOverride ?? activeQuestions.filter((q) => selectedIds.has(q.id)));
  const activeLoadingSelected = onFetchByIds ? isSelfLoadingSelected : externalIsLoadingSelected;

  const handleSearchChange = (val: string) => {
    if (onSearchQuestions) {
      setInternalSearch(val);
      setInternalPage(0);
    } else {
      externalOnSearchChange?.(val);
    }
  };

  const handleTypeChange = (val: string) => {
    if (onSearchQuestions) {
      setInternalTypeFilter(val);
      setInternalPage(0);
    } else {
      externalOnTypeFilterChange?.(val);
    }
  };

  const handlePageChange = (newPage: number) => {
    if (onSearchQuestions) {
      setInternalPage(newPage);
    } else {
      externalOnPageChange?.(newPage);
    }
  };

  const displayedQuestions = showSelectedOnly ? activeSelectedQuestions : activeQuestions;
  const countDisplay = showSelectedOnly ? displayedQuestions.length : activeTotal;
  const canPrev = !showSelectedOnly && activePage > 0;
  const canNext = !showSelectedOnly && activePage < activeTotalPages - 1;

  const footerActions = (
    <div className="flex justify-end gap-2">
      <Button type="button" variant="neutral" onClick={handleClose} disabled={isLoading}>
        Cancel
      </Button>
      <Button
        type="button"
        variant="primary"
        onClick={handleSubmit}
        disabled={isLoading || (!isEditMode && !title.trim()) || selectedIds.size === 0}
      >
        {isLoading
          ? isEditMode
            ? 'Updating…'
            : 'Creating…'
          : isEditMode
            ? `Update Questions (${selectedIds.size} selected)`
            : `Create Exam (${selectedIds.size} question${selectedIds.size !== 1 ? 's' : ''})`}
      </Button>
    </div>
  );

  return (
    <Modal
      isOpen={isModalOpen}
      onClose={isLoading ? () => {} : handleClose}
      title={isEditMode ? 'Manage Exam Questions' : 'Select Questions from Bank'}
      className="!max-w-3xl w-full"
      footer={footerActions}
    >
      <div>
        {/* Exam metadata */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
          <div className="sm:col-span-2">
            <label className="block text-xs font-medium text-slate-700 mb-1">Exam Name</label>
            <input
              className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter exam title"
              required
              disabled={isEditMode}
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              Duration (min)
            </label>
            <input
              type="number"
              min={1}
              className="w-full border border-slate-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={durationMin}
              onChange={(e) => setDurationMin(Math.max(1, Number(e.target.value)))}
              disabled={isEditMode}
            />
          </div>
        </div>

        {/* Search + type filter */}
        <div className="flex gap-2 mb-3">
          <div className="relative flex-1">
            <Search
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            />
            <input
              className="w-full border border-gray-300 rounded pl-8 pr-8 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Filter questions by text…"
              value={activeSearchText}
              onChange={(e) => handleSearchChange(e.target.value)}
            />
            {activeSearchText && (
              <button
                type="button"
                onClick={() => handleSearchChange('')}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                aria-label="Clear search"
              >
                <XIcon size={13} />
              </button>
            )}
          </div>
          <select
            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
            value={activeTypeFilter}
            onChange={(e) => handleTypeChange(e.target.value)}
          >
            <option value="">All types</option>
            <option value="MCQ">MCQ</option>
            <option value="ESSAY_SHORT">Essay Short</option>
            <option value="ESSAY_LONG">Essay Long</option>
          </select>
        </div>

        {/* Question list */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          {/* List header */}
          <div className="bg-gray-50 border-b border-gray-200 px-4 py-2 flex items-center justify-between text-xs text-gray-500 font-medium">
            <span>
              {countDisplay} question{countDisplay !== 1 ? 's' : ''} found
            </span>
            {selectedIds.size > 0 && (
              <button
                type="button"
                onClick={() => setShowSelectedOnly((v) => !v)}
                className={`flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full transition-colors ${
                  showSelectedOnly
                    ? 'bg-blue-600 text-white'
                    : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                }`}
                title={showSelectedOnly ? 'Show all questions' : 'Show selected questions only'}
              >
                {selectedIds.size} selected
                {showSelectedOnly && <XIcon size={10} className="ml-0.5" />}
              </button>
            )}
          </div>

          {/* Scrollable rows */}
          <div className="overflow-y-auto max-h-64">
            {(activeSearching && !showSelectedOnly) || (showSelectedOnly && activeLoadingSelected) ? (
              <div className="flex items-center justify-center py-10 text-gray-400 text-sm">
                Loading…
              </div>
            ) : null}

            {!activeSearching && !activeLoadingSelected && displayedQuestions.length === 0 && (
              <div className="flex flex-col items-center justify-center py-10 text-gray-400 text-sm gap-1">
                <BookOpen size={20} />
                <span>No questions match your filter</span>
              </div>
            )}

            {!activeLoadingSelected && displayedQuestions.length > 0 && (
              <>
                {displayedQuestions.map((q) => {
                  const selected = selectedIds.has(q.id);
                  const typeLabel = q.type ? (TYPE_LABELS[q.type] ?? q.type) : '—';
                  const typeBadge = q.type ? (TYPE_BADGE[q.type] ?? 'bg-gray-100 text-gray-500') : 'bg-gray-100 text-gray-500';
                  return (
                    <button
                      key={q.id}
                      type="button"
                      onClick={() => toggleSelection(q.id)}
                      className={`w-full flex items-start gap-3 px-4 py-3 border-b border-gray-100 last:border-b-0 text-left transition-colors duration-100 ${
                        selected ? 'bg-blue-50' : 'hover:bg-gray-50'
                      }`}
                    >
                      <span
                        className={`mt-0.5 flex-shrink-0 w-4 h-4 rounded border-2 transition-colors flex items-center justify-center ${
                          selected
                            ? 'bg-blue-600 border-blue-600'
                            : 'bg-white border-gray-400'
                        }`}
                      >
                        {selected && (
                          <svg viewBox="0 0 10 8" className="w-2.5 h-2.5">
                            <path
                              d="M1 4l2.5 2.5L9 1"
                              stroke="white"
                              strokeWidth="1.5"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </span>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span
                            className={`text-[10px] font-semibold uppercase tracking-wide px-1.5 py-0.5 rounded ${typeBadge}`}
                          >
                            {typeLabel}
                          </span>
                          <span className="text-[11px] text-gray-400">
                            {q.points} pt{q.points !== 1 ? 's' : ''}
                          </span>
                        </div>
                        <p className="text-sm text-gray-800 line-clamp-2 leading-snug">
                          {q.stem ?? q.content}
                        </p>
                      </div>
                    </button>
                  );
                })}

                {!showSelectedOnly && (
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-50 border-t border-gray-200">
                    <span className="text-xs text-gray-500">
                      Page {activePage + 1} of {Math.max(1, activeTotalPages)}
                    </span>
                    <div className="flex items-center gap-2">
                      <Button
                        type="button"
                        variant="neutral"
                        disabled={!canPrev || activeSearching}
                        onClick={() => handlePageChange(Math.max(0, activePage - 1))}
                      >
                        Previous
                      </Button>
                      <Button
                        type="button"
                        variant="neutral"
                        disabled={!canNext || activeSearching}
                        onClick={() => handlePageChange(activePage + 1)}
                      >
                        Next
                      </Button>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ExamIntegrityQuestionPickerModal;

