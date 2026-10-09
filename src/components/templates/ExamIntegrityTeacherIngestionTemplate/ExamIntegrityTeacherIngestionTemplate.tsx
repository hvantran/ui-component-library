import React from 'react';
import { Plus } from 'lucide-react';
import { Button } from '../../atoms/Button';
import { Skeleton } from '../../atoms/Skeleton';
import { ExamIntegrityTopBar } from '../../organisms/ExamIntegrityTopBar';
import {
  ExamIntegrityTeacherDashboardSidebar,
  type ExamIntegrityNavDockMode,
} from '../../organisms/ExamIntegrityTeacherDashboardSidebar';
import type { ExamIntegrityDashboardSection } from '../ExamIntegrityTeacherDashboardTemplate';
import { cn } from '../../../utils/cn';

export interface ExamIntegrityTeacherIngestionTemplateProps {
  userName?: string;
  userRole?: string;
  onNavigate?: (section: ExamIntegrityDashboardSection) => void;
  onCreateExam?: () => void;
  onSettings?: () => void;
  onLogout?: () => void;
  onSearch?: (query: string) => void;
  onNotifications?: () => void;
  onHelp?: () => void;
  onImportExam?: () => void;
  isLoading?: boolean;
  children?: React.ReactNode;
  className?: string;
  dockMode?: ExamIntegrityNavDockMode;
  onDockModeChange?: (mode: ExamIntegrityNavDockMode) => void;
}

export const ExamIntegrityTeacherIngestionTemplate: React.FC<
  ExamIntegrityTeacherIngestionTemplateProps
> = ({
  userName = '',
  userRole,
  onNavigate,
  onCreateExam,
  onSettings,
  onLogout,
  onSearch,
  onNotifications,
  onHelp,
  onImportExam,
  isLoading = false,
  children,
  className,
  dockMode = 'pinned',
  onDockModeChange,
}) => (
  <div className={cn('min-h-screen bg-gray-50 dark:bg-gray-950 font-sans', className)}>
    <ExamIntegrityTopBar
      userName={userName}
      onSearch={onSearch}
      onNotifications={onNotifications}
      onHelp={onHelp}
      onLogout={onLogout}
    />
    <ExamIntegrityTeacherDashboardSidebar
      activeSection="ingestion"
      userName={userName}
      userRole={userRole}
      onNavigate={onNavigate}
      onCreateExam={onCreateExam}
      onSettings={onSettings}
      onLogout={onLogout}
      dockMode={dockMode}
      onDockModeChange={onDockModeChange}
    />
    <main
      className={cn(
        dockMode === 'auto-hide' ? 'ml-0' : dockMode === 'docked' ? 'ml-[72px]' : 'ml-[256px]',
        'pt-[64px] min-h-screen overflow-y-auto transition-all duration-300'
      )}
    >
      <div className="p-6 max-w-6xl mx-auto">
        {/* Page header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white leading-tight">
              Exam Ingestion
            </h2>
            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Manage and review uploaded exam PDFs.
            </div>
          </div>
          {onImportExam && (
            <Button
              variant="primary"
              icon={<Plus size={18} />}
              onClick={onImportExam}
              className="font-medium"
            >
              Import New Exam
            </Button>
          )}
        </div>

        {/* Exam cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading
            ? [0, 1, 2].map((i) => <Skeleton key={i} height="200px" className="rounded-xl" />)
            : children}
        </div>
      </div>
    </main>
  </div>
);

ExamIntegrityTeacherIngestionTemplate.displayName =
  'ExamIntegrityTeacherIngestionTemplate';
export default ExamIntegrityTeacherIngestionTemplate;
