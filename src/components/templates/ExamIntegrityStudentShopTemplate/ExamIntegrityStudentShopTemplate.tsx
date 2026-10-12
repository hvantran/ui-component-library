import React from 'react';
import {
  ExamIntegrityStudentLandingTemplate,
  type StudentPortalSection,
} from '../ExamIntegrityStudentLandingTemplate';
import {
  ExamIntegrityEggShop,
  type EggShopItem,
  type EggShopCategory,
} from '../../organisms/ExamIntegrityEggShop';
import type { ExamIntegrityNavDockMode } from '../../organisms/ExamIntegrityStudentPortalSidebar';

export interface ExamIntegrityStudentShopTemplateProps {
  studentName?: string;
  starCount?: number;
  isElementary?: boolean;
  pageTitle?: string;
  pageSubtitle?: string;
  items?: EggShopItem[];
  categories?: EggShopCategory[];
  dropRates?: Record<string, number>;
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
  pageTitle = '',
  pageSubtitle = '',
  items,
  categories,
  dropRates,
  onPurchaseEgg,
  onNavigate,
  onLogout,
  dockMode,
  onDockModeChange,
  className,
}) => {
  return (
    <ExamIntegrityStudentLandingTemplate
      studentName={studentName}
      starCount={starCount}
      activeSection="shop"
      pageTitle={pageTitle}
      pageSubtitle={pageSubtitle}
      onNavigate={onNavigate}
      onLogout={onLogout}
      dockMode={dockMode}
      onDockModeChange={onDockModeChange}
      className={className}
    >
      <ExamIntegrityEggShop
        starBalance={starCount}
        items={items}
        categories={categories}
        dropRates={dropRates}
        onPurchaseEgg={onPurchaseEgg}
      />
    </ExamIntegrityStudentLandingTemplate>
  );
};

