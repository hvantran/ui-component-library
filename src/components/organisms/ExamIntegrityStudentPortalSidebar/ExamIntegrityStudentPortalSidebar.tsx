import React from 'react';
import { LayoutDashboard, ClipboardList, BarChart2, Headphones, LogOut } from 'lucide-react';
import { Button } from '../../atoms/Button';
import { cn } from '../../../utils/cn';

export const EXAM_INTEGRITY_STUDENT_SIDEBAR_WIDTH = 256;

export type ExamIntegrityStudentPortalSection = 'dashboard' | 'my-exams' | 'results';

const NAV_ITEMS: {
  id: ExamIntegrityStudentPortalSection;
  label: string;
  Icon: React.ElementType;
}[] = [
  { id: 'dashboard', label: 'Dashboard', Icon: LayoutDashboard },
  { id: 'my-exams', label: 'My Exams', Icon: ClipboardList },
  { id: 'results', label: 'Results', Icon: BarChart2 },
];

export interface ExamIntegrityStudentPortalSidebarProps {
  activeSection?: ExamIntegrityStudentPortalSection;
  studentName?: string;
  studentRole?: string;
  onNavigate?: (section: ExamIntegrityStudentPortalSection) => void;
  onHelp?: () => void;
  onLogout?: () => void;
  className?: string;
}

export const ExamIntegrityStudentPortalSidebar: React.FC<
  ExamIntegrityStudentPortalSidebarProps
> = ({
  activeSection = 'dashboard',
  studentName = '',
  studentRole = 'Learning Center',
  onNavigate,
  onHelp,
  onLogout,
  className,
}) => (
  <aside
    aria-label="Student portal sidebar"
    className={cn(
      'fixed left-0 top-16 w-[256px] h-[calc(100vh-64px)] z-30 flex flex-col gap-2 pt-8 pb-8 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-y-auto',
      className
    )}
    style={{ minWidth: EXAM_INTEGRITY_STUDENT_SIDEBAR_WIDTH }}
  >
    {/* Student identity block */}
    <div className="px-6 mb-6 flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 flex items-center justify-center font-bold text-base border border-blue-300 dark:border-blue-700">
        {studentName ? studentName.slice(0, 2).toUpperCase() : 'ST'}
      </div>
      <div>
        <div className="text-lg font-bold text-gray-900 dark:text-white leading-snug">
          {studentName || 'Student'}
        </div>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-400 leading-tight">
          {studentRole}
        </div>
      </div>
    </div>

    {/* Navigation */}
    <nav className="flex-1 font-sans">
      {NAV_ITEMS.map(({ id, label, Icon }) => {
        const isActive = activeSection === id;
        return (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => {
              e.preventDefault();
              onNavigate?.(id);
            }}
            className={cn(
              'flex items-center gap-3 px-4 py-3 rounded-r-lg transition-all text-sm font-medium',
              isActive
                ? 'border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 mx-0 font-semibold'
                : 'border-l-4 border-transparent text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 mx-2'
            )}
          >
            <Icon
              size={22}
              className={isActive ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400 dark:text-gray-500'}
            />
            {label}
          </a>
        );
      })}
    </nav>

    {/* Help & Logout buttons */}
    <div className="mt-auto px-4 pb-2 space-y-2">
      <Button
        type="button"
        onClick={onHelp}
        variant="ghost"
        textJustify="left"
        size="md"
        icon={<Headphones size={18} className="text-slate-400 dark:text-gray-500" />}
        className="w-full flex items-center gap-2 border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300 text-sm font-medium rounded-lg py-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
      >
        Online Help
      </Button>
      <Button
        type="button"
        onClick={onLogout}
        variant="ghost"
        textJustify="left"
        size="md"
        icon={<LogOut size={18} className="text-slate-400 dark:text-gray-500" />}
        className="w-full flex items-center gap-2 border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300 text-sm font-medium rounded-lg py-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
      >
        Logout
      </Button>
    </div>
  </aside>
);

ExamIntegrityStudentPortalSidebar.displayName = 'ExamIntegrityStudentPortalSidebar';
export default ExamIntegrityStudentPortalSidebar;

