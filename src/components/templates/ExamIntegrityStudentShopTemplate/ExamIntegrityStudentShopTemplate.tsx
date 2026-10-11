import React from 'react';
import {
  ExamIntegrityStudentLandingTemplate,
  type StudentPortalSection,
} from '../ExamIntegrityStudentLandingTemplate';
import {
  ExamIntegrityEggShop,
  type EggShopItem,
} from '../../organisms/ExamIntegrityEggShop';
import type { ExamIntegrityNavDockMode } from '../../organisms/ExamIntegrityStudentPortalSidebar';

export interface ExamIntegrityStudentShopTemplateProps {
  studentName?: string;
  starCount?: number;
  isElementary?: boolean;
  pageTitle?: string;
  pageSubtitle?: string;
  items?: EggShopItem[];
  onPurchaseEgg?: (item: EggShopItem) => void;
  onNavigate?: (section: StudentPortalSection) => void;
  onLogout?: () => void;
  dockMode?: ExamIntegrityNavDockMode;
  onDockModeChange?: (mode: ExamIntegrityNavDockMode) => void;
  className?: string;
}

export const ExamIntegrityStudentShopTemplate: React.FC<
  ExamIntegrityStudentShopTemplateProps
> = ({
  studentName = 'Student',
  starCount = 0,
  pageTitle,
  pageSubtitle,
  items,
  onPurchaseEgg,
  onNavigate,
  onLogout,
  dockMode,
  onDockModeChange,
  className,
}) => {
  const resolvedTitle = pageTitle ?? '3D Egg Shop';
  const resolvedSubtitle =
    pageSubtitle ?? 'Purchase 3D mystery eggs using stars earned from exams.';

  return (
    <ExamIntegrityStudentLandingTemplate
      studentName={studentName}
      starCount={starCount}
      activeSection="shop"
      pageTitle={resolvedTitle}
      pageSubtitle={resolvedSubtitle}
      onNavigate={onNavigate}
      onLogout={onLogout}
      dockMode={dockMode}
      onDockModeChange={onDockModeChange}
      className={className}
    >
      <ExamIntegrityEggShop
        starBalance={starCount}
        items={items}
        onPurchaseEgg={onPurchaseEgg}
      />
    </ExamIntegrityStudentLandingTemplate>
  );
};

