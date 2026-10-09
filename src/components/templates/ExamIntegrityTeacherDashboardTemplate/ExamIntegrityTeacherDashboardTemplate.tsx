import React, { useState } from 'react';
import {
  Home,
  Upload,
  ClipboardEdit,
  CheckSquare,
  BookOpen,
  BarChart2,
  Settings,
  LogOut,
  PlusCircle,
  Bell,
  HelpCircle,
  Pin,
  PanelLeftClose,
  ChevronRight,
  EyeOff,
} from 'lucide-react';
import { cn } from '../../../utils/cn';
import { AppTopBar } from '../../organisms/AppTopBar';
import { Button } from '../../atoms/Button';
import { ConfirmationDialog } from '../../molecules/ConfirmationDialog';
import {
  EXAM_INTEGRITY_TEACHER_SIDEBAR_WIDTH,
  EXAM_INTEGRITY_TEACHER_SIDEBAR_DOCKED_WIDTH,
  type ExamIntegrityNavDockMode,
} from '../../organisms/ExamIntegrityTeacherDashboardSidebar';

export type ExamIntegrityDashboardSection =
  | 'dashboard'
  | 'ingestion'
  | 'review'
  | 'scoring'
  | 'question-bank'
  | 'reports';

export type { ExamIntegrityNavDockMode };

export interface SyncExamDialogState {
  examId: string;
  examTitle: string;
  linkedQuestionCount?: number;
}

export interface ExamIntegrityTeacherDashboardTemplateProps {
  userName?: string;
  userRole?: string;
  appTitle?: string;
  activeSection?: ExamIntegrityDashboardSection;
  onNavigate?: (section: ExamIntegrityDashboardSection) => void;
  onCreateExam?: () => void;
  onSettings?: () => void;
  onLogout?: () => void;
  onSearch?: (query: string) => void;
  onNotifications?: () => void;
  onHelp?: () => void;
  headerTitle?: string;
  headerSubtitle?: string;
  headerActionsSlot?: React.ReactNode;
  filtersSlot?: React.ReactNode;
  sidebar?: React.ReactNode;
  children: React.ReactNode;
  className?: string;

  /** Navigation dock mode ('pinned' | 'docked' | 'auto-hide') */
  dockMode?: ExamIntegrityNavDockMode;
  /** Callback when user changes navigation dock mode */
  onDockModeChange?: (mode: ExamIntegrityNavDockMode) => void;

  /** State for inner sync questions confirmation dialog */
  syncDialogState?: SyncExamDialogState | null;
  /** Callback when teacher confirms sync in inner dialog */
  onConfirmSync?: () => void;
  /** Callback when teacher cancels or dismisses sync dialog */
  onCancelSync?: () => void;
  /** Whether question sync operation is currently in progress */
  isSyncingQuestions?: boolean;
}

const defaultNavItems: { section: ExamIntegrityDashboardSection; icon: React.ReactNode; label: string }[] = [
  { section: 'dashboard', icon: <Home size={18} />, label: 'Dashboard' },
  { section: 'ingestion', icon: <Upload size={18} />, label: 'Upload Exam' },
  { section: 'review', icon: <ClipboardEdit size={18} />, label: 'Review' },
  { section: 'scoring', icon: <CheckSquare size={18} />, label: 'Scoring' },
  { section: 'question-bank', icon: <BookOpen size={18} />, label: 'Question Bank' },
  { section: 'reports', icon: <BarChart2 size={18} />, label: 'Reports' },
];

export const ExamIntegrityTeacherDashboardTemplate: React.FC<
  ExamIntegrityTeacherDashboardTemplateProps
> = ({
  userName = 'Teacher',
  userRole = 'Teacher',
  appTitle = 'Exam Integrity Platform',
  activeSection = 'dashboard',
  onNavigate,
  onCreateExam,
  onSettings,
  onLogout,
  onSearch,
  onNotifications,
  onHelp,
  headerTitle,
  headerSubtitle,
  headerActionsSlot,
  filtersSlot,
  sidebar,
  children,
  className,
  dockMode = 'pinned',
  onDockModeChange,
  syncDialogState,
  onConfirmSync,
  onCancelSync,
  isSyncingQuestions = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const isAutoHide = dockMode === 'auto-hide';
  const isDocked = dockMode === 'docked';
  const isExpanded = !isDocked || (isAutoHide && isHovered);
  const showSidebar = !isAutoHide || isHovered;

  const mainMarginClass = isAutoHide
    ? 'ml-0'
    : isDocked
    ? 'ml-[72px]'
    : 'ml-64';

  return (
    <div className={cn('min-h-screen bg-gray-50 dark:bg-gray-900', className)}>
      <AppTopBar
        title={appTitle}
        searchSlot={
          onSearch && (
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => onSearch(e.target.value)}
              className="w-full text-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg px-3 py-1.5 focus:outline-none"
            />
          )
        }
        actionsSlot={
          (onNotifications || onHelp) && (
            <div className="flex items-center gap-1">
              {onNotifications && (
                <button
                  type="button"
                  aria-label="Notifications"
                  onClick={onNotifications}
                  className="p-2 rounded-btn text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <Bell size={18} />
                </button>
              )}
              {onHelp && (
                <button
                  type="button"
                  aria-label="Help"
                  onClick={onHelp}
                  className="p-2 rounded-btn text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <HelpCircle size={18} />
                </button>
              )}
            </div>
          )
        }
        userSlot={
          <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200">
            <span className="font-semibold">{userName}</span>
            {userRole && <span className="text-xs text-gray-500">({userRole})</span>}
            {onLogout && (
              <button
                type="button"
                onClick={onLogout}
                className="ml-2 text-xs text-blue-600 hover:underline dark:text-blue-400"
              >
                Logout
              </button>
            )}
          </div>
        }
      />
      <div className="flex pt-16 relative">
        {/* Edge trigger handle for auto-hide mode on desktop */}
        {isAutoHide && !sidebar && (
          <div
            data-testid="sidebar-autohide-trigger"
            onMouseEnter={() => setIsHovered(true)}
            onClick={() => setIsHovered(true)}
            className={cn(
              'fixed left-0 top-20 z-40 h-24 w-4 bg-blue-600/90 hover:bg-blue-600 hover:w-6 transition-all duration-200 rounded-r-lg hidden lg:flex items-center justify-center cursor-pointer shadow-lg group',
              isHovered && 'opacity-0 pointer-events-none'
            )}
            title="Hover to reveal navigation"
            aria-label="Expand hidden navigation"
          >
            <ChevronRight size={14} className="text-white group-hover:scale-125 transition-transform" />
          </div>
        )}

        {/* Sidebar */}
        {sidebar ? (
          sidebar
        ) : (
          <aside
            aria-label="Teacher navigation"
            data-testid="teacher-dashboard-sidebar"
            data-dock-mode={dockMode}
            onMouseEnter={() => isAutoHide && setIsHovered(true)}
            onMouseLeave={() => isAutoHide && setIsHovered(false)}
            className={cn(
              'fixed top-16 bottom-0 left-0 z-30 overflow-y-auto bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col justify-between py-6 transition-all duration-300 ease-in-out',
              isDocked && !isAutoHide && 'w-[72px] items-center px-2',
              !isDocked && !isAutoHide && 'w-64',
              isAutoHide && [
                'w-64 shadow-2xl z-50',
                showSidebar ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 pointer-events-none',
              ]
            )}
            style={{
              width:
                isDocked && !isAutoHide
                  ? EXAM_INTEGRITY_TEACHER_SIDEBAR_DOCKED_WIDTH
                  : EXAM_INTEGRITY_TEACHER_SIDEBAR_WIDTH,
            }}
          >
            <div className="space-y-4 w-full">
              {/* Institution Identity */}
              <div
                className={cn(
                  'px-6 mb-2 flex items-center gap-3',
                  isDocked && !isAutoHide && 'px-0 justify-center mb-4'
                )}
              >
                <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center flex-shrink-0 shadow-sm font-bold text-xs select-none">
                  EI
                </div>
                {isExpanded && (
                  <div className="flex flex-col min-w-0">
                    <span className="font-bold text-gray-900 dark:text-white leading-tight text-sm truncate">
                      Teacher Portal
                    </span>
                    {userName && (
                      <span className="text-xs text-gray-500 dark:text-gray-400 truncate">
                        {userName}
                      </span>
                    )}
                  </div>
                )}
              </div>

              {onCreateExam && (
                <div className={cn('px-4', isDocked && !isAutoHide && 'px-1 w-full')}>
                  <Button
                    variant="primary"
                    size="sm"
                    className={cn(
                      'w-full flex items-center',
                      isDocked && !isAutoHide ? 'justify-center p-2' : 'justify-center gap-2'
                    )}
                    onClick={onCreateExam}
                    title="Create Exam"
                    aria-label="Create Exam"
                    icon={<PlusCircle size={16} />}
                  >
                    {isExpanded && <span>Create Exam</span>}
                  </Button>
                </div>
              )}

              <nav className={cn('space-y-1', isDocked && !isAutoHide ? 'px-1 w-full' : 'px-4')}>
                {defaultNavItems.map(({ section, icon, label }) => {
                  const isActive = activeSection === section;
                  return (
                    <button
                      key={section}
                      type="button"
                      title={label}
                      aria-label={label}
                      onClick={() => onNavigate?.(section)}
                      className={cn(
                        'w-full flex items-center rounded-lg text-sm font-medium transition-colors text-left',
                        isDocked && !isAutoHide ? 'justify-center p-2.5' : 'gap-3 px-3 py-2',
                        isActive
                          ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 font-semibold'
                          : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700'
                      )}
                    >
                      <span className="shrink-0">{icon}</span>
                      {isExpanded && <span>{label}</span>}
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Footer actions: Settings, Dock controls, Logout */}
            <div
              className={cn(
                'border-t border-gray-200 dark:border-gray-700 pt-3 space-y-1',
                isDocked && !isAutoHide ? 'px-1 w-full' : 'px-4'
              )}
            >
              {onSettings && (
                <button
                  type="button"
                  title="Settings"
                  aria-label="Settings"
                  onClick={onSettings}
                  className={cn(
                    'w-full flex items-center rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 text-left transition-colors',
                    isDocked && !isAutoHide ? 'justify-center p-2.5' : 'gap-3 px-3 py-2'
                  )}
                >
                  <Settings size={18} className="shrink-0" />
                  {isExpanded && <span>Settings</span>}
                </button>
              )}

              {/* Dock mode controls */}
              {onDockModeChange && (
                <div
                  data-testid="teacher-sidebar-dock-controls"
                  className={cn(
                    'pt-2 pb-1 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between text-xs text-gray-400',
                    isDocked && !isAutoHide && 'flex-col gap-1.5 px-0'
                  )}
                >
                  {isExpanded && (
                    <span className="font-semibold uppercase tracking-wider text-[10px] text-gray-400">
                      Sidebar Mode
                    </span>
                  )}
                  <div className={cn('flex items-center gap-1', isDocked && !isAutoHide && 'flex-col')}>
                    <button
                      type="button"
                      data-testid="dock-mode-pinned-btn"
                      onClick={() => onDockModeChange('pinned')}
                      title="Pin navigation bar"
                      aria-label="Pin navigation"
                      className={cn(
                        'p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors',
                        dockMode === 'pinned'
                          ? 'text-blue-600 bg-blue-50 dark:bg-blue-950/50'
                          : 'text-gray-400'
                      )}
                    >
                      <Pin size={14} className={dockMode === 'pinned' ? 'fill-current' : ''} />
                    </button>
                    <button
                      type="button"
                      data-testid="dock-mode-docked-btn"
                      onClick={() => onDockModeChange('docked')}
                      title="Dock to mini-rail"
                      aria-label="Dock navigation to rail"
                      className={cn(
                        'p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors',
                        dockMode === 'docked'
                          ? 'text-blue-600 bg-blue-50 dark:bg-blue-950/50'
                          : 'text-gray-400'
                      )}
                    >
                      <PanelLeftClose size={14} />
                    </button>
                    <button
                      type="button"
                      data-testid="dock-mode-autohide-btn"
                      onClick={() => onDockModeChange('auto-hide')}
                      title="Auto-hide navigation bar"
                      aria-label="Auto hide navigation"
                      className={cn(
                        'p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors',
                        dockMode === 'auto-hide'
                          ? 'text-blue-600 bg-blue-50 dark:bg-blue-950/50'
                          : 'text-gray-400'
                      )}
                    >
                      <EyeOff size={14} />
                    </button>
                  </div>
                </div>
              )}

              {onLogout && (
                <button
                  type="button"
                  title="Logout"
                  aria-label="Logout"
                  onClick={onLogout}
                  className={cn(
                    'w-full flex items-center rounded-lg text-sm font-medium text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-900/20 text-left transition-colors',
                    isDocked && !isAutoHide ? 'justify-center p-2.5' : 'gap-3 px-3 py-2'
                  )}
                >
                  <LogOut size={18} className="shrink-0" />
                  {isExpanded && <span>Logout</span>}
                </button>
              )}
            </div>
          </aside>
        )}

        <main className={cn(mainMarginClass, 'flex-1 min-h-[calc(100vh-4rem)] p-6 overflow-y-auto transition-all duration-300')}>
          <div className="max-w-7xl mx-auto space-y-6">
            {(headerTitle || headerActionsSlot) && (
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-2">
                <div>
                  {headerTitle && (
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                      {headerTitle}
                    </h1>
                  )}
                  {headerSubtitle && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {headerSubtitle}
                    </p>
                  )}
                </div>
                {headerActionsSlot && (
                  <div className="flex items-center gap-2 flex-wrap">
                    {headerActionsSlot}
                  </div>
                )}
              </div>
            )}
            {filtersSlot && <div>{filtersSlot}</div>}
            {children}
          </div>
        </main>
      </div>

      {/* Inner Sync Questions Confirmation Dialog */}
      {syncDialogState && (
        <ConfirmationDialog
          open={Boolean(syncDialogState)}
          title="Sync Questions from Bank"
          positiveText={isSyncingQuestions ? 'Syncing…' : 'Sync Questions'}
          negativeText="Cancel"
          loading={isSyncingQuestions}
          positiveAction={onConfirmSync}
          negativeAction={onCancelSync}
          onClose={onCancelSync}
          positiveVariant="primary"
        >
          <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
            <p>
              Are you sure you want to synchronize questions for{' '}
              <strong className="text-gray-900 dark:text-gray-100">
                {syncDialogState.examTitle}
              </strong>{' '}
              with the latest question bank data?
            </p>
            {typeof syncDialogState.linkedQuestionCount === 'number' && (
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Linked questions eligible for sync: {syncDialogState.linkedQuestionCount}
              </p>
            )}
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Any modifications made in the question bank (content, options, answer key, rubric, points) will overwrite the corresponding questions in this exam.
            </p>
          </div>
        </ConfirmationDialog>
      )}
    </div>
  );
};

ExamIntegrityTeacherDashboardTemplate.displayName = 'ExamIntegrityTeacherDashboardTemplate';
export default ExamIntegrityTeacherDashboardTemplate;
