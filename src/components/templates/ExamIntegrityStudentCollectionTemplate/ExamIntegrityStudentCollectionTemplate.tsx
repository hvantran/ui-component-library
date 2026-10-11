import React from 'react';
import {
  ExamIntegrityStudentLandingTemplate,
  type StudentPortalSection,
} from '../ExamIntegrityStudentLandingTemplate';
import {
  ExamIntegrityPetHatchery,
  type IncubatingEgg,
  type StudentPet,
} from '../../organisms/ExamIntegrityPetHatchery';
import type { ExamIntegrityNavDockMode } from '../../organisms/ExamIntegrityStudentPortalSidebar';

export interface ExamIntegrityStudentCollectionTemplateProps {
  studentName?: string;
  starCount?: number;
  isElementary?: boolean;
  pageTitle?: string;
  pageSubtitle?: string;
  incubatingEggs?: IncubatingEgg[];
  pets?: StudentPet[];
  onEggHatched?: (
    eggId: string,
    hatchedPet?: StudentPet
  ) => Promise<StudentPet | void> | StudentPet | void;
  onGrowPet?: (petId: string, starsSpent: number) => void;
  onStrikeCrack?: (eggId: string, starsSpent: number) => void;
  onEquipEgg?: (eggId: string, starCost: number) => void;
  onEquipPet?: (petId: string) => void;
  crackCostInStars?: number;
  onNavigate?: (section: StudentPortalSection) => void;
  onLogout?: () => void;
  dockMode?: ExamIntegrityNavDockMode;
  onDockModeChange?: (mode: ExamIntegrityNavDockMode) => void;
  className?: string;
}

export const ExamIntegrityStudentCollectionTemplate: React.FC<
  ExamIntegrityStudentCollectionTemplateProps
> = ({
  studentName = 'Student',
  starCount = 0,
  pageTitle,
  pageSubtitle,
  incubatingEggs = [],
  pets = [],
  onEggHatched,
  onGrowPet,
  onStrikeCrack,
  onEquipEgg,
  onEquipPet,
  crackCostInStars = 25,
  onNavigate,
  onLogout,
  dockMode,
  onDockModeChange,
  className,
}) => {
  const resolvedTitle = pageTitle ?? 'Pet Collection & Hatchery';
  const resolvedSubtitle =
    pageSubtitle ?? 'Incubate eggs, hatch companions, and nurture your pets.';

  return (
    <ExamIntegrityStudentLandingTemplate
      studentName={studentName}
      starCount={starCount}
      activeSection="collection"
      pageTitle={resolvedTitle}
      pageSubtitle={resolvedSubtitle}
      onNavigate={onNavigate}
      onLogout={onLogout}
      dockMode={dockMode}
      onDockModeChange={onDockModeChange}
      className={className}
    >
      <ExamIntegrityPetHatchery
        starBalance={starCount}
        crackCostInStars={crackCostInStars}
        incubatingEggs={incubatingEggs}
        pets={pets}
        onEggHatched={onEggHatched}
        onGrowPet={onGrowPet}
        onStrikeCrack={onStrikeCrack}
        onEquipEgg={onEquipEgg}
        onEquipPet={onEquipPet}
      />
    </ExamIntegrityStudentLandingTemplate>
  );
};

