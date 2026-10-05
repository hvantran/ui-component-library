import { default as React } from '../../../../node_modules/react';
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
/**
 * Molecule — TimerDisplay
 *
 * Shows MM:SS countdown. Changes color and displays warning text when ≤ threshold seconds remain.
 * Used for exam countdowns, session timeouts, and timed workflows.
 */
export declare const TimerDisplay: React.FC<TimerDisplayProps>;
export default TimerDisplay;
