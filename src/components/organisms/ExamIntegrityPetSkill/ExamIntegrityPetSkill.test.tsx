import { describe, expect, it } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { ExamIntegrityPetSkill, type PetSkill } from './index';

const voidSingularity: PetSkill = {
  id: 'void-singularity',
  name: 'Void Singularity',
  description: 'Summon a cinematic black hole.',
  icon: 'Sparkles',
  videoSources: {
    webm: '/assets/pets/void-singularity.webm',
    mp4: '/assets/pets/void-singularity.mp4',
  },
};

describe('ExamIntegrityPetSkill', () => {
  it('renders an accessible trigger for a visual pet skill', () => {
    const html = renderToString(
      <ExamIntegrityPetSkill
        skill={voidSingularity}
        posterUrl="/assets/pets/void-dragon-stage-8.png"
        open={false}
        onOpenChange={() => undefined}
      />
    );

    expect(html).toContain('Void Singularity');
    expect(html).toContain('Summon a cinematic black hole.');
    expect(html).toContain('data-testid="pet-skill-trigger-void-singularity"');
  });

  it('renders a closable cinematic dialog with WebM and MP4 sources when open', () => {
    const html = renderToString(
      <ExamIntegrityPetSkill
        skill={voidSingularity}
        posterUrl="/assets/pets/void-dragon-stage-8.png"
        open
        onOpenChange={() => undefined}
      />
    );

    expect(html).toContain('role="dialog"');
    expect(html).toContain('data-testid="pet-skill-cinematic-void-singularity"');
    expect(html).toContain('data-testid="pet-skill-dialog-void-singularity"');
    expect(html).toContain('tabindex="-1"');
    expect(html).toContain('void-singularity.webm');
    expect(html).toContain('void-singularity.mp4');
    expect(html).toContain('aria-label="Close Void Singularity cinematic"');
    expect(html).toContain('data-testid="pet-skill-close-void-singularity"');
  });

  it('renders a locked skill as unavailable until its required level', () => {
    const html = renderToString(
      <ExamIntegrityPetSkill
        skill={{ ...voidSingularity, requiredLevel: 7 }}
        posterUrl="/assets/pets/void-dragon-stage-1.png"
        open={false}
        locked
        onOpenChange={() => undefined}
      />
    );

    expect(html).toContain('disabled=""');
    expect(html).toMatch(/Unlocks at level(?: <!-- -->)?7/);
  });

  it('renders a space-efficient compact pill variant without long description text', () => {
    const html = renderToString(
      <ExamIntegrityPetSkill
        variant="compact"
        skill={{ ...voidSingularity, requiredLevel: 5 }}
        open={false}
        onOpenChange={() => undefined}
      />
    );

    expect(html).toContain('Void Singularity');
    expect(html).toContain('Cast');
    expect(html).not.toContain('Summon a cinematic black hole.');
    expect(html).toContain('data-testid="pet-skill-trigger-void-singularity"');
  });
});