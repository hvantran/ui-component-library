import React, { useEffect, useRef, useState } from 'react';
import { Clock } from 'lucide-react';
import { cn } from '../../../utils/cn';

export interface TimerDisplayProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Total seconds remaining */
  remainingSeconds: number;
  /** Show clock icon to the left of time */
  showIcon?: boolean;
  /** Threshold in seconds for urgent warning state (default: 300 / 5 minutes) */
  urgentThresholdSeconds?: number;
  /** Urgent warning text label (default: "Time running out") */
  urgentLabel?: string;
  /** Custom warning callback when urgent threshold is reached */
  onUrgent?: () => void;
  /** Custom callback when timer reaches zero */
  onExpire?: () => void;
}

const pad = (n: number) => String(n).padStart(2, '0');

/**
 * Molecule — TimerDisplay
 *
 * Shows MM:SS countdown. Changes color and displays warning text when ≤ threshold seconds remain.
 * Used for exam countdowns, session timeouts, and timed workflows.
 */
export const TimerDisplay: React.FC<TimerDisplayProps> = ({
  remainingSeconds,
  showIcon = true,
  urgentThresholdSeconds = 300,
  urgentLabel = 'Time running out',
  onUrgent,
  onExpire,
  className,
  ...props
}) => {
  const [localSeconds, setLocalSeconds] = useState(remainingSeconds);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    setLocalSeconds(remainingSeconds);
  }, [remainingSeconds]);

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (localSeconds > 0) {
      intervalRef.current = setInterval(() => {
        setLocalSeconds((prev) => {
          const next = prev > 0 ? prev - 1 : 0;
          if (next === urgentThresholdSeconds && onUrgent) {
            onUrgent();
          }
          if (next === 0 && onExpire) {
            onExpire();
          }
          return next;
        });
      }, 1000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [localSeconds, urgentThresholdSeconds, onUrgent, onExpire]);

  const isUrgent = localSeconds <= urgentThresholdSeconds;
  const mm = pad(Math.floor(localSeconds / 60));
  const ss = pad(localSeconds % 60);

  return (
    <div
      className={cn(
        'inline-flex items-center gap-1.5 transition-colors duration-500 font-mono select-none',
        isUrgent
          ? 'text-red-600 dark:text-red-400'
          : 'text-gray-700 dark:text-gray-200',
        className,
      )}
      {...props}
    >
      {showIcon && <Clock size={18} className="shrink-0" aria-hidden="true" />}
      <span className="text-base font-bold tracking-wider leading-none">
        {`${mm}:${ss}`}
      </span>
      {isUrgent && urgentLabel && (
        <span className="text-xs font-semibold opacity-85">
          {urgentLabel}
        </span>
      )}
    </div>
  );
};

TimerDisplay.displayName = 'TimerDisplay';
export default TimerDisplay;
