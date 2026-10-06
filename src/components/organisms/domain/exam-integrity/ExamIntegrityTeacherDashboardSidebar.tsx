import React from 'react';
import {
  Home,
  Upload,
  ClipboardEdit,
  CheckSquare,
  BookOpen,
  BarChart2,
  Settings,
  LogOut,
} from 'lucide-react';
import { Button } from '../../../atoms/Button';
import { cn } from '../../../../utils/cn';
import { EXAM_INTEGRITY_APP_BAR_HEIGHT } from './ExamIntegrityTopBar';
import type { ExamIntegrityDashboardSection } from '../../../templates/domain/exam-integrity/ExamIntegrityTeacherDashboardTemplate';

export const EXAM_INTEGRITY_TEACHER_SIDEBAR_WIDTH = 256;

export interface ExamIntegrityTeacherDashboardSidebarProps {
  activeSection?: ExamIntegrityDashboardSection;
  userName?: string;
  userRole?: string;
  onNavigate?: (section: ExamIntegrityDashboardSection) => void;
  onCreateExam?: () => void;
  onSettings?: () => void;
  onLogout?: () => void;
  className?: string;
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
  onNavigate,
  onSettings,
  onLogout,
  className,
}) => (
  <nav
    aria-label="Teacher navigation"
    className={cn(
      'fixed left-0 z-30 bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col py-8 overflow-y-auto',
      className
    )}
    style={{
      top: EXAM_INTEGRITY_APP_BAR_HEIGHT,
      width: EXAM_INTEGRITY_TEACHER_SIDEBAR_WIDTH,
      height: `calc(100vh - ${EXAM_INTEGRITY_APP_BAR_HEIGHT}px)`,
    }}
  >
    {/* Institution identity */}
    <div className="px-6 mb-8 flex flex-col gap-2">
      <div className="w-12 h-12 rounded bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center mb-2 flex-shrink-0 shadow-sm">
        <span className="text-xs font-bold text-blue-700 dark:text-blue-400 select-none">EI</span>
      </div>
      <span className="font-bold text-gray-900 dark:text-white leading-tight text-sm">
        Teacher Portal
      </span>
    </div>

    {/* Navigation */}
    <div className="flex-1 flex flex-col">
      {navItems.map(({ section, icon, label }) => {
        const isActive = activeSection === section;
        return (
          <Button
            key={section}
            icon={icon}
            textJustify="left"
            onClick={() => onNavigate?.(section)}
            variant="ghost"
            size="md"
            className={cn(
              'flex items-center gap-3 px-4 py-3 mr-4 rounded-r-xl border-l-4 text-left w-full outline-none transition-colors',
              isActive
                ? 'border-l-blue-600 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-semibold shadow-sm'
                : 'border-l-transparent text-gray-500 dark:text-gray-400 font-medium hover:bg-gray-100 dark:hover:bg-gray-800'
            )}
          >
            {label}
          </Button>
        );
      })}
    </div>

    {/* Bottom section */}
    <div className="border-t border-gray-200 dark:border-gray-800 mx-4 mb-2" />
    <div className="flex flex-col">
      <Button
        onClick={onSettings}
        variant="ghost"
        icon={<Settings size={18} />}
        textJustify="left"
        size="md"
        className="flex items-center gap-3 px-4 py-3 mr-4 rounded-r-xl border-l-4 border-l-transparent text-gray-500 dark:text-gray-400 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 text-left w-full outline-none transition-colors"
      >
        Settings
      </Button>
      <Button
        onClick={onLogout}
        variant="ghost"
        icon={<LogOut size={18} />}
        textJustify="left"
        size="md"
        className="flex items-center gap-3 px-4 py-3 mr-4 rounded-r-xl border-l-4 border-l-transparent text-gray-500 dark:text-gray-400 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 text-left w-full outline-none transition-colors"
      >
        Logout
      </Button>
    </div>
  </nav>
);

ExamIntegrityTeacherDashboardSidebar.displayName = 'ExamIntegrityTeacherDashboardSidebar';
export default ExamIntegrityTeacherDashboardSidebar;
