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
  Pin,
  PanelLeftClose,
  ChevronRight,
  EyeOff,
} from 'lucide-react';
import { Button } from '../../atoms/Button';
import { cn } from '../../../utils/cn';
import type { ExamIntegrityDashboardSection } from '../../templates/ExamIntegrityTeacherDashboardTemplate';
import type { ExamIntegrityNavDockMode } from '../ExamIntegrityStudentPortalSidebar';

export const EXAM_INTEGRITY_TEACHER_SIDEBAR_WIDTH = 256;
export const EXAM_INTEGRITY_TEACHER_SIDEBAR_DOCKED_WIDTH = 72;

export type { ExamIntegrityNavDockMode };

export interface ExamIntegrityTeacherDashboardSidebarProps {
  activeSection?: ExamIntegrityDashboardSection;
  userName?: string;
  userRole?: string;
  onNavigate?: (section: ExamIntegrityDashboardSection) => void;
  onCreateExam?: () => void;
  onSettings?: () => void;
  onLogout?: () => void;
  className?: string;
  dockMode?: ExamIntegrityNavDockMode;
  onDockModeChange?: (mode: ExamIntegrityNavDockMode) => void;
}

const navItems: { section: ExamIntegrityDashboardSection; icon: React.ReactNode; label: string }[] = [
  { section: 'dashboard', icon: <Home size={18} />, label: 'Dashboard' },
  { section: 'ingestion', icon: <Upload size={18} />, label: 'Upload Exam' },
  { section: 'review', icon: <ClipboardEdit size={18} />, label: 'Review' },
  { section: 'scoring', icon: <CheckSquare size={18} />, label: 'Scoring' },
  { section: 'question-bank', icon: <BookOpen size={18} />, label: 'Question Bank' },
  { section: 'reports', icon: <BarChart2 size={18} />, label: 'Reports' },
];

export const ExamIntegrityTeacherDashboardSidebar: React.FC<
  ExamIntegrityTeacherDashboardSidebarProps
> = ({
  activeSection = 'dashboard',
  userName,
  userRole,
  onNavigate,
  onCreateExam,
  onSettings,
  onLogout,
  className,
  dockMode = 'pinned',
  onDockModeChange,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const isAutoHide = dockMode === 'auto-hide';
  const isDocked = dockMode === 'docked';
  const isExpanded = !isDocked || (isAutoHide && isHovered);
  const showSidebar = !isAutoHide || isHovered;

  return (
    <>
      {/* Edge trigger handle for auto-hide mode */}
      {isAutoHide && (
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

      {/* Main navigation sidebar */}
      <nav
        aria-label="Teacher navigation"
        data-testid="teacher-portal-sidebar"
        data-dock-mode={dockMode}
        onMouseEnter={() => isAutoHide && setIsHovered(true)}
        onMouseLeave={() => isAutoHide && setIsHovered(false)}
        className={cn(
          'fixed left-0 top-16 bottom-0 z-30 bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col py-6 overflow-y-auto transition-all duration-300 ease-in-out',
          isDocked && !isAutoHide && 'w-[72px] items-center px-2',
          !isDocked && !isAutoHide && 'w-[256px]',
          isAutoHide && [
            'w-[256px] shadow-2xl z-50',
            showSidebar ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 pointer-events-none',
          ],
          className
        )}
        style={{
          width:
            isDocked && !isAutoHide
              ? EXAM_INTEGRITY_TEACHER_SIDEBAR_DOCKED_WIDTH
              : EXAM_INTEGRITY_TEACHER_SIDEBAR_WIDTH,
        }}
      >
        {/* Institution identity */}
        <div
          className={cn(
            'px-6 mb-6 flex items-center gap-3',
            isDocked && !isAutoHide && 'px-0 justify-center mb-6'
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
                  {userName} {userRole ? `(${userRole})` : ''}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Create Exam CTA (if handler provided) */}
        {onCreateExam && (
          <div className={cn('mb-4', isDocked && !isAutoHide ? 'w-full px-1' : 'px-4')}>
            <Button
              variant="primary"
              size="sm"
              textJustify={isExpanded ? 'left' : 'center'}
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

        {/* Navigation items */}
        <div className={cn('flex-1 flex flex-col gap-1', isDocked && !isAutoHide ? 'w-full' : 'mr-2')}>
          {navItems.map(({ section, icon, label }) => {
            const isActive = activeSection === section;
            return (
              <Button
                key={section}
                icon={icon}
                textJustify={isExpanded ? 'left' : 'center'}
                title={label}
                aria-label={label}
                onClick={() => onNavigate?.(section)}
                variant="ghost"
                size="md"
                className={cn(
                  'flex items-center text-left outline-none transition-colors duration-150',
                  isDocked && !isAutoHide
                    ? 'justify-center p-2.5 rounded-lg border-l-0'
                    : 'gap-3 px-4 py-2.5 rounded-r-xl border-l-4 w-full',
                  isActive
                    ? isDocked && !isAutoHide
                      ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 font-semibold'
                      : 'border-l-blue-600 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-semibold shadow-xs'
                    : isDocked && !isAutoHide
                      ? 'text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800'
                      : 'border-l-transparent text-gray-500 dark:text-gray-400 font-medium hover:bg-gray-100 dark:hover:bg-gray-800'
                )}
              >
                {isExpanded && <span>{label}</span>}
              </Button>
            );
          })}
        </div>

        {/* Bottom section: Settings, Mode Switcher, Logout */}
        <div
          className={cn(
            'mt-auto pt-3 border-t border-gray-200 dark:border-gray-800 flex flex-col gap-1',
            isDocked && !isAutoHide ? 'w-full px-1' : 'px-4'
          )}
        >
          {onSettings && (
            <Button
              onClick={onSettings}
              variant="ghost"
              icon={<Settings size={18} />}
              textJustify={isExpanded ? 'left' : 'center'}
              title="Settings"
              aria-label="Settings"
              size="md"
              className={cn(
                'flex items-center text-gray-500 dark:text-gray-400 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors',
                isDocked && !isAutoHide
                  ? 'justify-center p-2.5 rounded-lg'
                  : 'gap-3 px-3 py-2 rounded-lg w-full'
              )}
            >
              {isExpanded && <span>Settings</span>}
            </Button>
          )}

          {/* Mode controls bar */}
          {onDockModeChange && (
            <div
              data-testid="teacher-sidebar-dock-controls"
              className={cn(
                'pt-2 pb-1 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between text-xs text-gray-400',
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
                    'p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors',
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
                    'p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors',
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
                    'p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors',
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
            <Button
              onClick={onLogout}
              variant="ghost"
              icon={<LogOut size={18} />}
              textJustify={isExpanded ? 'left' : 'center'}
              title="Logout"
              aria-label="Logout"
              size="md"
              className={cn(
                'flex items-center text-rose-600 dark:text-rose-400 font-medium hover:bg-rose-50 dark:hover:bg-rose-950/20 transition-colors',
                isDocked && !isAutoHide
                  ? 'justify-center p-2.5 rounded-lg'
                  : 'gap-3 px-3 py-2 rounded-lg w-full'
              )}
            >
              {isExpanded && <span>Logout</span>}
            </Button>
          )}
        </div>
      </nav>
    </>
  );
};

ExamIntegrityTeacherDashboardSidebar.displayName = 'ExamIntegrityTeacherDashboardSidebar';
export default ExamIntegrityTeacherDashboardSidebar;
