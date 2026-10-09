import React from 'react';
import {
  LayoutDashboard,
  ClipboardList,
  BarChart2,
  HelpCircle,
  LogOut,
  Bell,
} from 'lucide-react';
import { cn } from '../../../utils/cn';
import { AppTopBar } from '../../organisms/AppTopBar';

export type StudentPortalSection = 'dashboard' | 'my-exams' | 'results';

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
}) => {
  return (
    <div className={cn('min-h-screen bg-gray-50 dark:bg-gray-900', className)}>
      <AppTopBar
        title="Exam Integrity Student Portal"
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
      <div className="flex pt-16">
        <aside className="w-64 fixed inset-y-16 left-0 z-30 overflow-y-auto bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col justify-between py-6">
          {sidebarSlot || (
            <>
              <div>
                <div className="px-6 mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-base border border-blue-300">
                    {studentName.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <div className="text-base font-bold text-gray-900 dark:text-white leading-snug">{studentName}</div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400 leading-tight">{studentRole}</span>
                      {starCount !== undefined && (
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-600 dark:text-amber-400">
                          ⭐ {starCount}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <nav className="space-y-1 px-4 font-sans">
                  {defaultPortalNavItems.map(({ id, label, icon }) => {
                    const isActive = activeSection === id;
                    return (
                      <button
                        key={id}
                        type="button"
                        onClick={() => onNavigate?.(id)}
                        className={cn(
                          'w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors text-left',
                          isActive
                            ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                            : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700'
                        )}
                      >
                        {icon}
                        <span>{label}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>

              <div className="px-4 border-t border-gray-200 dark:border-gray-700 pt-4 space-y-1">
                {onHelp && (
                  <button
                    type="button"
                    onClick={onHelp}
                    className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 text-left"
                  >
                    <HelpCircle size={18} />
                    <span>Help & Support</span>
                  </button>
                )}
                {onLogout && (
                  <button
                    type="button"
                    onClick={onLogout}
                    className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-900/20 text-left"
                  >
                    <LogOut size={18} />
                    <span>Logout</span>
                  </button>
                )}
              </div>
            </>
          )}
        </aside>
        <main className="ml-64 flex-1 min-h-[calc(100vh-4rem)] p-6 overflow-y-auto">
          <div className="max-w-7xl mx-auto space-y-6">
            {bannerSlot}

            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">{pageTitle}</h1>
              {pageSubtitle && (
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{pageSubtitle}</p>
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
                      'px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors',
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
