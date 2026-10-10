import React, { useState } from 'react';
import {
  LayoutDashboard,
  ClipboardList,
  BarChart2,
  ShoppingBag,
  Headphones,
  LogOut,
  Pin,
  PanelLeftClose,
  ChevronRight,
  EyeOff,
  X,
} from 'lucide-react';
import { Button } from '../../atoms/Button';
import { cn } from '../../../utils/cn';

export const EXAM_INTEGRITY_STUDENT_SIDEBAR_WIDTH = 256;
export const EXAM_INTEGRITY_STUDENT_SIDEBAR_DOCKED_WIDTH = 72;

export type ExamIntegrityStudentPortalSection = 'dashboard' | 'my-exams' | 'results' | 'shop';
export type ExamIntegrityNavDockMode = 'pinned' | 'docked' | 'auto-hide';

const NAV_ITEMS: {
  id: ExamIntegrityStudentPortalSection;
  label: string;
  Icon: React.ElementType;
}[] = [
  { id: 'dashboard', label: 'Dashboard', Icon: LayoutDashboard },
  { id: 'my-exams', label: 'My Exams', Icon: ClipboardList },
  { id: 'results', label: 'Results', Icon: BarChart2 },
  { id: 'shop', label: 'Shop', Icon: ShoppingBag },
];

export interface ExamIntegrityStudentPortalSidebarProps {
  activeSection?: ExamIntegrityStudentPortalSection;
  studentName?: string;
  studentRole?: string;
  isOpen?: boolean;
  onClose?: () => void;
  onNavigate?: (section: ExamIntegrityStudentPortalSection) => void;
  onHelp?: () => void;
  onLogout?: () => void;
  className?: string;
  dockMode?: ExamIntegrityNavDockMode;
  onDockModeChange?: (mode: ExamIntegrityNavDockMode) => void;
}

export const ExamIntegrityStudentPortalSidebar: React.FC<
  ExamIntegrityStudentPortalSidebarProps
> = ({
  activeSection = 'dashboard',
  studentName = '',
  studentRole = 'Learning Center',
  isOpen,
  onClose,
  onNavigate,
  onHelp,
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

  const mobileVisibilityClass =
    isOpen === undefined
      ? ''
      : isOpen
      ? 'translate-x-0 shadow-2xl z-50'
      : '-translate-x-full lg:translate-x-0';

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

      {/* Main Sidebar */}
      <aside
        aria-label="Student portal sidebar"
        data-testid="student-portal-sidebar"
        data-dock-mode={dockMode}
        onMouseEnter={() => isAutoHide && setIsHovered(true)}
        onMouseLeave={() => isAutoHide && setIsHovered(false)}
        className={cn(
          'fixed left-0 top-16 bottom-0 z-30 flex flex-col gap-2 pt-6 pb-6 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-y-auto transition-all duration-300 ease-in-out',
          mobileVisibilityClass,
          isDocked && !isAutoHide && 'w-[72px] items-center px-2',
          !isDocked && !isAutoHide && 'w-[256px]',
          isAutoHide && [
            'w-[256px] shadow-2xl z-50',
            showSidebar ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 pointer-events-none',
          ],
          className
        )}
        style={{
          width: isDocked && !isAutoHide ? EXAM_INTEGRITY_STUDENT_SIDEBAR_DOCKED_WIDTH : EXAM_INTEGRITY_STUDENT_SIDEBAR_WIDTH,
        }}
      >
        {/* Student identity block */}
        <div className={cn('px-6 mb-4 flex items-center justify-between', isDocked && !isAutoHide && 'px-0 justify-center mb-6')}>
          <div className="flex items-center gap-3 min-w-0">
            <div
              className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 flex items-center justify-center font-bold text-base border border-blue-300 dark:border-blue-700 shrink-0"
              title={studentName || 'Student'}
            >
              {studentName ? studentName.slice(0, 2).toUpperCase() : 'ST'}
            </div>
            {isExpanded && (
              <div className="min-w-0">
                <div className="text-base font-bold text-gray-900 dark:text-white leading-snug truncate">
                  {studentName || 'Student'}
                </div>
                <div className="text-xs font-medium text-gray-500 dark:text-gray-400 leading-tight truncate">
                  {studentRole}
                </div>
              </div>
            )}
          </div>
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 lg:hidden"
              aria-label="Close sidebar"
            >
              <X size={18} />
            </button>
          )}
        </div>

        {/* Navigation items */}
        <nav className={cn('flex-1 font-sans space-y-1', isDocked && !isAutoHide && 'w-full px-1')}>
          {NAV_ITEMS.map(({ id, label, Icon }) => {
            const isActive = activeSection === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                title={label}
                aria-label={label}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate?.(id);
                }}
                className={cn(
                  'flex items-center gap-3 px-4 py-3 rounded-r-lg transition-all text-sm font-medium',
                  isDocked && !isAutoHide && 'justify-center px-0 py-2.5 rounded-lg border-l-0 mx-0',
                  isActive
                    ? 'border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 mx-0 font-semibold'
                    : 'border-l-4 border-transparent text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 mx-2'
                )}
              >
                <Icon
                  size={20}
                  className={cn(
                    'shrink-0',
                    isActive ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400 dark:text-gray-500'
                  )}
                />
                {isExpanded && <span>{label}</span>}
              </a>
            );
          })}
        </nav>

        {/* Help, Dock controls, and Logout buttons at bottom */}
        <div className={cn('mt-auto px-4 pb-2 space-y-2', isDocked && !isAutoHide && 'px-1 w-full space-y-1.5')}>
          <Button
            type="button"
            onClick={onHelp}
            variant="ghost"
            textJustify={isExpanded ? 'left' : 'center'}
            size="md"
            title="Online Help"
            aria-label="Online Help"
            icon={<Headphones size={18} className="text-slate-400 dark:text-gray-500 shrink-0" />}
            className={cn(
              'w-full flex items-center border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300 text-sm font-medium rounded-lg py-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition',
              isDocked && !isAutoHide ? 'justify-center px-0' : 'gap-2 px-3'
            )}
          >
            {isExpanded && 'Online Help'}
          </Button>

          {/* Mode controls bar at end before Logout */}
          {onDockModeChange && (
            <div
              data-testid="sidebar-dock-controls"
              className={cn(
                'pt-2 pb-1 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between text-xs text-gray-400',
                isDocked && !isAutoHide && 'flex-col gap-1.5 px-0'
              )}
            >
              {isExpanded && <span className="font-semibold uppercase tracking-wider text-[10px] text-gray-400">Sidebar Mode</span>}
              <div className={cn('flex items-center gap-1', isDocked && !isAutoHide && 'flex-col')}>
                <button
                  type="button"
                  data-testid="dock-mode-pinned-btn"
                  onClick={() => onDockModeChange('pinned')}
                  title="Pin navigation bar"
                  aria-label="Pin navigation"
                  className={cn(
                    'p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors',
                    dockMode === 'pinned' ? 'text-blue-600 bg-blue-50 dark:bg-blue-950/50' : 'text-gray-400'
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
                    dockMode === 'docked' ? 'text-blue-600 bg-blue-50 dark:bg-blue-950/50' : 'text-gray-400'
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
                    dockMode === 'auto-hide' ? 'text-blue-600 bg-blue-50 dark:bg-blue-950/50' : 'text-gray-400'
                  )}
                >
                  <EyeOff size={14} />
                </button>
              </div>
            </div>
          )}

          <Button
            type="button"
            onClick={onLogout}
            variant="ghost"
            textJustify={isExpanded ? 'left' : 'center'}
            size="md"
            title="Logout"
            aria-label="Logout"
            icon={<LogOut size={18} className="text-slate-400 dark:text-gray-500 shrink-0" />}
            className={cn(
              'w-full flex items-center border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300 text-sm font-medium rounded-lg py-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition',
              isDocked && !isAutoHide ? 'justify-center px-0' : 'gap-2 px-3'
            )}
          >
            {isExpanded && 'Logout'}
          </Button>
        </div>
      </aside>
    </>
  );
};

ExamIntegrityStudentPortalSidebar.displayName = 'ExamIntegrityStudentPortalSidebar';
export default ExamIntegrityStudentPortalSidebar;
