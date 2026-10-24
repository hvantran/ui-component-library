import React from 'react';
import {
  ExamIntegrityTeacherDashboardTemplate,
  type ExamIntegrityDashboardSection,
  type ExamIntegrityNavDockMode,
} from '../ExamIntegrityTeacherDashboardTemplate';
import {
  ExamIntegrityTeacherSettings,
  type ExamIntegrityTeacherSettingsProps,
  type SystemSettingsData,
} from '../../organisms/ExamIntegrityTeacherSettings';

export type { SystemSettingsData };

export interface ExamIntegrityTeacherSettingsTemplateProps
  extends Omit<ExamIntegrityTeacherSettingsProps, 'className'> {
  userName?: string;
  userRole?: string;
  onNavigate?: (section: ExamIntegrityDashboardSection) => void;
  onCreateExam?: () => void;
  onSettings?: () => void;
  onLogout?: () => void;
  dockMode?: ExamIntegrityNavDockMode;
  onDockModeChange?: (mode: ExamIntegrityNavDockMode) => void;
  className?: string;
}

export const ExamIntegrityTeacherSettingsTemplate: React.FC<
  ExamIntegrityTeacherSettingsTemplateProps
> = ({
  userName = '',
  userRole,
  onNavigate,
  onCreateExam,
  onSettings,
  onLogout,
  dockMode = 'pinned',
  onDockModeChange,
  className,
  settings,
  onSettingsChange,
  onSave,
  onResetDefaults,
  isLoading = false,
  isSaving = false,
  pageTitle,
  pageSubtitle,
  themeMode,
  onThemeModeChange,
}) => (
  <ExamIntegrityTeacherDashboardTemplate
    userName={userName}
    userRole={userRole}
    activeSection="settings"
    onNavigate={onNavigate}
    onCreateExam={onCreateExam}
    onSettings={onSettings}
    onLogout={onLogout}
    dockMode={dockMode}
    onDockModeChange={onDockModeChange}
    themeMode={themeMode}
    onThemeModeChange={onThemeModeChange}
    className={className}
  >
    <ExamIntegrityTeacherSettings
      settings={settings}
      onSettingsChange={onSettingsChange}
      onSave={onSave}
      onResetDefaults={onResetDefaults}
      isLoading={isLoading}
      isSaving={isSaving}
      pageTitle={pageTitle}
      pageSubtitle={pageSubtitle}
      themeMode={themeMode}
      onThemeModeChange={onThemeModeChange}
    />
  </ExamIntegrityTeacherDashboardTemplate>
);

