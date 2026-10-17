import React from 'react';
import { Search } from 'lucide-react';
import { Modal } from '../../atoms/Modal';
import { Button } from '../../atoms/Button';
import { Input } from '../../atoms/Input';
import { Skeleton } from '../../atoms/Skeleton';
import { Chip } from '../../atoms/Chip';
import type { DraftQuestionDTO } from '../../../types/examIntegrity';

export interface ExamIntegrityReplaceFromBankModalProps {
  open: boolean;
  onClose: () => void;
  onSelect: (question: DraftQuestionDTO) => void;
  search: string;
  onSearchChange: (search: string) => void;
  questions?: DraftQuestionDTO[];
  isLoading?: boolean;
  isSelecting?: boolean;
  className?: string;
}

export const ExamIntegrityReplaceFromBankModal: React.FC<
  ExamIntegrityReplaceFromBankModalProps
> = ({
  open,
  onClose,
  onSelect,
  search,
  onSearchChange,
  questions = [],
  isLoading = false,
  isSelecting = false,
  className,
}) => {
  return (
    <Modal
      isOpen={open}
      onClose={onClose}
      title="Select questions from the bank"
      maxWidth="lg"
      className={className}
      footer={
        <Button variant="ghost" size="sm" onClick={onClose}>
          Close
        </Button>
      }
    >
      <div className="space-y-4">
        <Input
          placeholder="Search question content…"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          icon={<Search size={18} className="text-gray-400" />}
          fullWidth
        />
        {isLoading ? (
          <div className="py-2 space-y-2">
            <Skeleton height={40} width="100%" />
            <Skeleton height={40} width="100%" />
            <Skeleton height={40} width="100%" />
            <Skeleton height={40} width="100%" />
          </div>
        ) : (
          <div className="overflow-x-auto border border-gray-200 dark:border-gray-800 rounded-lg">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-800 text-xs text-gray-500 uppercase">
                <tr>
                  <th className="px-4 py-2.5">Content</th>
                  <th className="px-4 py-2.5 w-24">Type</th>
                  <th className="px-4 py-2.5 w-20">Points</th>
                  <th className="px-4 py-2.5 w-24 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                {questions.map((q) => (
                  <tr
                    key={q.id}
                    className="hover:bg-gray-50/80 dark:hover:bg-gray-800/40 transition-colors"
                  >
                    <td className="px-4 py-2.5 max-w-[420px]">
                      <span className="truncate block text-gray-900 dark:text-gray-100">
                        {q.content}
                      </span>
                    </td>
                    <td className="px-4 py-2.5">
                      <Chip label={q.type} size="sm" />
                    </td>
                    <td className="px-4 py-2.5 text-gray-700 dark:text-gray-300">
                      {q.points}
                    </td>
                    <td className="px-4 py-2.5 text-right">
                      <Button
                        size="sm"
                        variant="primary"
                        disabled={isSelecting}
                        onClick={() => onSelect(q)}
                      >
                        Select
                      </Button>
                    </td>
                  </tr>
                ))}
                {questions.length === 0 && (
                  <tr>
                    <td colSpan={4} className="text-center text-gray-400 py-6 text-sm">
                      No questions found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </Modal>
  );
};

