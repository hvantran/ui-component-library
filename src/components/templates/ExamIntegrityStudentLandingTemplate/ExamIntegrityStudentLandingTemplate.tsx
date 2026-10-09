import React, { useState } from 'react';
import {
  LayoutDashboard,
  ClipboardList,
  BarChart2,
  HelpCircle,
  LogOut,
  Bell,
  Pin,
  PanelLeftClose,
  ChevronRight,
  EyeOff,
} from 'lucide-react';
import { cn } from '../../../utils/cn';
import { AppTopBar } from '../../organisms/AppTopBar';
import type { ExamIntegrityNavDockMode } from '../../organisms/ExamIntegrityStudentPortalSidebar';

export type StudentPortalSection = 'dashboard' | 'my-exams' | 'results';
export type { ExamIntegrityNavDockMode };

export interface FilterItem {
  label: string;
  value: string;
}

export interface ExamIntegrityStudentLandingTemplateProps {
  studentName?: string;
  studentRole?: string;
  starCount?: number;
  activeSection?: StudentPortalSection;
  pageTitle?: string;
  pageSubtitle?: string;
  filters?: FilterItem[];
  activeFilter?: string;
  onFilterChange?: (filterValue: string) => void;
  onNavigate?: (section: StudentPortalSection) => void;
  onHelp?: () => void;
  onSearch?: (query: string) => void;
  onNotifications?: () => void;
  sidebarSlot?: React.ReactNode;
  bannerSlot?: React.ReactNode;
  children: React.ReactNode;
  onLogout?: () => void;
  className?: string;
  dockMode?: ExamIntegrityNavDockMode;
  onDockModeChange?: (mode: ExamIntegrityNavDockMode) => void;
}

const defaultPortalNavItems: { id: StudentPortalSection; label: string; icon: React.ReactNode }[] = [
  { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={18} /> },
  { id: 'my-exams', label: 'My Exams', icon: <ClipboardList size={18} /> },
  { id: 'results', label: 'Results', icon: <BarChart2 size={18} /> },
];

export const ExamIntegrityStudentLandingTemplate: React.FC<
  ExamIntegrityStudentLandingTemplateProps
> = ({
  studentName = 'Student',
  studentRole = 'Student',
  starCount,
  activeSection = 'dashboard',
  pageTitle = 'My Assigned Exams',
  pageSubtitle = 'Select an ongoing examination to begin.',
  filters = [],
  activeFilter = 'all',
  onFilterChange,
  onNavigate,
  onHelp,
  onSearch,
  onNotifications,
  sidebarSlot,
  bannerSlot,
  children,
  onLogout,
  className,
  dockMode = 'pinned',
  onDockModeChange,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const isAutoHide = dockMode === 'auto-hide';
  const isDocked = dockMode === 'docked';
  const isExpanded = !isDocked || (isAutoHide && isHovered);
  const showSidebar = !isAutoHide || isHovered;

  // Margin left for main content on desktop (always 0 on mobile/tablet)
  const mainMarginClass = isAutoHide
    ? 'ml-0'
    : isDocked
    ? 'ml-0 lg:ml-[72px]'
    : 'ml-0 lg:ml-64';

  return (
    <div className={cn('min-h-screen bg-gray-50 dark:bg-gray-900', className)}>
      <AppTopBar
        title="Exam Integrity Student Portal"
        onMenuToggle={() => setIsMobileNavOpen((prev) => !prev)}
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
          onNotifications && (
            <button
              type="button"
              aria-label="Notifications"
              onClick={onNotifications}
              className="p-2 rounded-btn text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Bell size={18} />
            </button>
          )
        }
        userSlot={
          <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-200">
            {starCount !== undefined && (
              <div
                data-testid="student-star-badge"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-300 font-bold text-xs select-none shadow-xs"
              >
                <span className="text-sm leading-none">⭐</span>
                <span>{starCount}</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <span className="font-semibold">{studentName}</span>
              {studentRole && <span className="text-xs text-gray-500">({studentRole})</span>}
            </div>
          </div>
        }
      />
      <div className="flex relative">
        {/* Mobile backdrop overlay */}
        {isMobileNavOpen && (
          <div
            data-testid="mobile-nav-backdrop"
            onClick={() => setIsMobileNavOpen(false)}
            className="fixed inset-0 bg-black/40 z-40 lg:hidden transition-opacity"
            aria-hidden="true"
          />
        )}

        {/* Edge trigger handle for auto-hide mode on desktop */}
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

        {/* Left Navigation Sidebar */}
        <aside
          aria-label="Student portal navigation"
          data-testid="student-landing-sidebar"
          data-dock-mode={dockMode}
          onMouseEnter={() => isAutoHide && setIsHovered(true)}
          onMouseLeave={() => isAutoHide && setIsHovered(false)}
          className={cn(
            'fixed inset-y-16 left-0 z-50 lg:z-30 overflow-y-auto bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col justify-between py-6 transition-all duration-300 ease-in-out',
            // Mobile: drawer behavior
            isMobileNavOpen ? 'translate-x-0 shadow-2xl w-64' : '-translate-x-full lg:translate-x-0',
            // Desktop dock mode behavior
            isDocked && !isAutoHide && 'lg:w-[72px] lg:items-center lg:px-2',
            !isDocked && !isAutoHide && 'lg:w-64',
            isAutoHide && [
              'lg:w-64 lg:shadow-2xl lg:z-50',
              showSidebar ? 'lg:translate-x-0 lg:opacity-100' : 'lg:-translate-x-full lg:opacity-0 lg:pointer-events-none',
            ]
          )}
        >
          {sidebarSlot || (
            <>
              <div className="space-y-4 w-full">
                {/* Identity */}
                <div className={cn('px-6 mb-4 flex items-center gap-3', isDocked && !isAutoHide && 'px-0 justify-center mb-6')}>
                  <div
                    className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-base border border-blue-300 shrink-0"
                    title={studentName}
                  >
                    {studentName.slice(0, 2).toUpperCase()}
                  </div>
                  {isExpanded && (
                    <div className="min-w-0">
                      <div className="text-base font-bold text-gray-900 dark:text-white leading-snug truncate">{studentName}</div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400 leading-tight truncate">{studentRole}</span>
                        {starCount !== undefined && (
                          <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-600 dark:text-amber-400 shrink-0">
                            ⭐ {starCount}
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Nav items */}
                <nav className={cn('space-y-1 font-sans', isDocked && !isAutoHide ? 'px-1 w-full' : 'px-4')}>
                  {defaultPortalNavItems.map(({ id, label, icon }) => {
                    const isActive = activeSection === id;
                    return (
                      <button
                        key={id}
                        type="button"
                        title={label}
                        aria-label={label}
                        onClick={() => {
                          onNavigate?.(id);
                          setIsMobileNavOpen(false);
                        }}
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

              {/* Footer actions with dock controls before Logout */}
              <div
                className={cn(
                  'border-t border-gray-200 dark:border-gray-700 pt-4 space-y-2',
                  isDocked && !isAutoHide ? 'px-1 w-full' : 'px-4'
                )}
              >
                {onHelp && (
                  <button
                    type="button"
                    title="Help & Support"
                    aria-label="Help & Support"
                    onClick={onHelp}
                    className={cn(
                      'w-full flex items-center rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 text-left transition-colors',
                      isDocked && !isAutoHide ? 'justify-center p-2.5' : 'gap-3 px-3 py-2'
                    )}
                  >
                    <HelpCircle size={18} className="shrink-0" />
                    {isExpanded && <span>Help & Support</span>}
                  </button>
                )}

                {/* Dock Controls at end before Logout */}
                {onDockModeChange && (
                  <div
                    data-testid="sidebar-dock-controls"
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
                          dockMode === 'pinned' ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/40' : 'text-gray-400'
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
                          dockMode === 'docked' ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/40' : 'text-gray-400'
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
                          dockMode === 'auto-hide' ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/40' : 'text-gray-400'
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
            </>
          )}
        </aside>

        {/* Main Content Area */}
        <main
          className={cn(
            'flex-1 min-h-[calc(100vh-4rem)] p-4 sm:p-6 overflow-y-auto transition-[margin] duration-300 ease-in-out',
            mainMarginClass
          )}
        >
          <div className="max-w-7xl mx-auto space-y-6">
            {bannerSlot}

            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">{pageTitle}</h1>
              {pageSubtitle && (
                <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">{pageSubtitle}</p>
              )}
            </div>

            {filters.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {filters.map((f) => (
                  <button
                    key={f.value}
                    type="button"
                    onClick={() => onFilterChange?.(f.value)}
                    className={cn(
                      'px-3.5 py-1.5 min-h-[38px] sm:min-h-[32px] rounded-full text-xs font-semibold transition-colors inline-flex items-center justify-center',
                      activeFilter === f.value
                        ? 'bg-blue-600 text-white'
                        : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700',
                    )}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            )}

            <div>{children}</div>
          </div>
        </main>
      </div>
    </div>
  );
};

ExamIntegrityStudentLandingTemplate.displayName = 'ExamIntegrityStudentLandingTemplate';
export default ExamIntegrityStudentLandingTemplate;
