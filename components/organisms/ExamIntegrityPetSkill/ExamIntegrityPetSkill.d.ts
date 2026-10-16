import { default as React } from '../../../../node_modules/react';
export interface PetSkillVideoSources {
    webm?: string;
    mp4?: string;
}
export interface PetSkill {
    id: string;
    name: string;
    description: string;
    requiredLevel: number;
    icon?: 'Sparkles';
    videoSources?: PetSkillVideoSources;
}
export interface ExamIntegrityPetSkillProps {
    skill: PetSkill;
    posterUrl?: string;
    open: boolean;
    locked?: boolean;
    onOpenChange: (open: boolean) => void;
    className?: string;
    variant?: 'card' | 'compact';
}
export declare const ExamIntegrityPetSkill: React.FC<ExamIntegrityPetSkillProps>;
