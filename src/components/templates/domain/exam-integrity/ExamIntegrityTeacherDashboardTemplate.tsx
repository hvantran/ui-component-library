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
  PlusCircle,
  Bell,
  HelpCircle,
} from 'lucide-react';
import { cn } from '../../../../utils/cn';
import { AppTopBar } from '../../../organisms/AppTopBar';
import { Button } from '../../../atoms/Button';

export type ExamIntegrityDashboardSection =
  | 'dashboard'
  | 'ingestion'
  | 'review'
  | 'scoring'
  | 'question-bank'
  | 'reports';

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
  sidebar?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
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
  sidebar,
  children,
  className,
}) => {
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
      <div className="flex pt-16">
        <aside className="w-64 fixed inset-y-16 left-0 z-30 overflow-y-auto bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col justify-between py-6">
          {sidebar || (
            <>
              <div className="space-y-4 px-4">
                {onCreateExam && (
                  <Button
                    variant="primary"
                    className="w-full flex items-center justify-center gap-2 text-sm"
                    onClick={onCreateExam}
                  >
                    <PlusCircle size={16} />
                    <span>Create Exam</span>
                  </Button>
                )}
                <nav className="space-y-1">
                  {defaultNavItems.map(({ section, icon, label }) => {
                    const isActive = activeSection === section;
                    return (
                      <button
                        key={section}
                        type="button"
                        onClick={() => onNavigate?.(section)}
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
                {onSettings && (
                  <button
                    type="button"
                    onClick={onSettings}
                    className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 text-left"
                  >
                    <Settings size={18} />
                    <span>Settings</span>
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
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
};

ExamIntegrityTeacherDashboardTemplate.displayName = 'ExamIntegrityTeacherDashboardTemplate';
export default ExamIntegrityTeacherDashboardTemplate;
