import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, X } from 'lucide-react';
import { cn } from '../../../utils/cn';

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

const FOCUSABLE_DIALOG_SELECTOR =
  'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export const ExamIntegrityPetSkill: React.FC<ExamIntegrityPetSkillProps> = ({
  skill,
  posterUrl,
  open,
  locked = false,
  onOpenChange,
  className,
  variant = 'card',
}) => {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const wasOpenRef = useRef(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  const [hasMediaError, setHasMediaError] = useState(false);
  const hasVideoSource = Boolean(skill.videoSources?.webm || skill.videoSources?.mp4);
  const isOpen = open && !locked;

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener('change', updatePreference);
    return () => mediaQuery.removeEventListener('change', updatePreference);
  }, []);

  useEffect(() => {
    if (wasOpenRef.current && !isOpen) {
      triggerRef.current?.focus();
    }
    wasOpenRef.current = isOpen;
    if (isOpen) {
      setHasMediaError(false);
      closeButtonRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (prefersReducedMotion) {
      videoRef.current?.pause();
    }
  }, [isOpen, prefersReducedMotion]);

  const handleDialogKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      onOpenChange(false);
      return;
    }

    if (event.key !== 'Tab') return;

    const focusableElements = Array.from(
      dialogRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE_DIALOG_SELECTOR) ?? []
    );
    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement = focusableElements[focusableElements.length - 1];

    if (!firstFocusableElement || !lastFocusableElement) return;

    if (event.shiftKey && document.activeElement === firstFocusableElement) {
      event.preventDefault();
      lastFocusableElement.focus();
    } else if (!event.shiftKey && document.activeElement === lastFocusableElement) {
      event.preventDefault();
      firstFocusableElement.focus();
    }
  };

  return (
    <>
      {variant === 'compact' ? (
        <button
          ref={triggerRef}
          type="button"
          data-testid={`pet-skill-trigger-${skill.id}`}
          aria-haspopup={locked ? undefined : 'dialog'}
          disabled={locked}
          onClick={() => {
            if (!locked) onOpenChange(true);
          }}
          className={cn(
            'inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-xs font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400',
            locked
              ? 'cursor-not-allowed border-stone-300 dark:border-stone-700 bg-stone-100 dark:bg-stone-800/80 text-stone-400 dark:text-stone-500'
              : 'border-violet-300 dark:border-violet-700/60 bg-violet-100/90 dark:bg-violet-950/70 text-violet-800 dark:text-violet-200 hover:border-violet-400 hover:bg-violet-200/90 dark:hover:bg-violet-900 shadow-xs active:scale-95',
            className
          )}
        >
          <Sparkles className="w-3 h-3 text-violet-500 dark:text-violet-400 shrink-0" aria-hidden="true" />
          <span className="font-extrabold truncate max-w-[130px] sm:max-w-[180px]">{skill.name}</span>
          <span
            className={cn(
              'px-1.5 py-0.2 rounded text-[10px] font-black uppercase tracking-wide shrink-0',
              locked
                ? 'bg-stone-200 dark:bg-stone-700 text-stone-500 dark:text-stone-400'
                : 'bg-violet-600 text-white shadow-xs'
            )}
          >
            {locked ? `Lvl ${skill.requiredLevel}` : 'Cast'}
          </span>
        </button>
      ) : (
        <button
          ref={triggerRef}
          type="button"
          data-testid={`pet-skill-trigger-${skill.id}`}
          aria-haspopup={locked ? undefined : 'dialog'}
          disabled={locked}
          onClick={() => {
            if (!locked) onOpenChange(true);
          }}
          className={cn(
            'group w-full rounded-lg border p-3 text-left shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300',
            locked
              ? 'cursor-not-allowed border-stone-700 bg-stone-900/70 text-stone-400'
              : 'border-violet-400/50 bg-violet-950/70 text-violet-100 hover:border-violet-300 hover:bg-violet-900',
            className
          )}
        >
          <span className="flex items-center gap-3">
            <span
              className={cn(
                'flex h-9 w-9 shrink-0 items-center justify-center rounded-md border transition-colors',
                locked
                  ? 'border-stone-600 bg-stone-800 text-stone-500'
                  : 'border-violet-300/20 bg-violet-500/20 text-violet-200 group-hover:bg-violet-500/30'
              )}
            >
              <Sparkles className="h-4 w-4" aria-hidden="true" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-sm font-extrabold">{skill.name}</span>
              <span
                className={cn(
                  'mt-0.5 block text-xs font-medium',
                  locked ? 'text-stone-500' : 'text-violet-200/80'
                )}
              >
                {skill.description}
              </span>
            </span>
            <span
              className={cn(
                'rounded-md border px-2 py-1 text-[10px] font-extrabold uppercase tracking-wide transition-colors',
                locked
                  ? 'border-stone-600 bg-stone-800 text-stone-400'
                  : 'border-violet-300/30 bg-violet-500/20 text-violet-100 group-hover:bg-violet-500/30'
              )}
            >
              {locked ? `Lvl ${skill.requiredLevel}` : 'Cast'}
            </span>
          </span>
          {locked && (
            <span className="mt-2 block text-[10px] font-bold text-stone-500">
              Unlocks at level {skill.requiredLevel}
            </span>
          )}
        </button>
      )}

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${skill.name} cinematic`}
          data-testid={`pet-skill-cinematic-${skill.id}`}
          onKeyDown={handleDialogKeyDown}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
        >
          <div
            ref={dialogRef}
            tabIndex={-1}
            data-testid={`pet-skill-dialog-${skill.id}`}
            className="relative w-full max-w-5xl overflow-hidden rounded-lg border border-violet-500/50 bg-stone-950 shadow-2xl"
          >
            <button
              ref={closeButtonRef}
              type="button"
              aria-label={`Close ${skill.name} cinematic`}
              data-testid={`pet-skill-close-${skill.id}`}
              onClick={() => onOpenChange(false)}
              className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white transition-colors hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            <div className="aspect-video w-full bg-black">
              {hasVideoSource && !hasMediaError ? (
                <video
                  ref={videoRef}
                  autoPlay={!prefersReducedMotion}
                  playsInline
                  preload="auto"
                  onEnded={() => onOpenChange(false)}
                  onError={() => setHasMediaError(true)}
                  className="h-full w-full object-contain"
                >
                  {skill.videoSources?.webm && (
                    <source src={skill.videoSources.webm} type="video/webm" />
                  )}
                  {skill.videoSources?.mp4 && (
                    <source src={skill.videoSources.mp4} type="video/mp4" />
                  )}
                  Your browser does not support cinematic playback.
                </video>
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-3 p-6 text-center text-stone-200">
                  {posterUrl && (
                    <img src={posterUrl} alt="" className="max-h-56 max-w-full object-contain opacity-60" />
                  )}
                  <p className="text-sm font-semibold">The cinematic is unavailable right now.</p>
                  <button
                    type="button"
                    onClick={() => onOpenChange(false)}
                    className="rounded-md bg-violet-500 px-4 py-2 text-sm font-bold text-white hover:bg-violet-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    Return to sanctuary
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};