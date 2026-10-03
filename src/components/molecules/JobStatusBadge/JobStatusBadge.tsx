import {
  AlertCircle,
  Ban,
  CheckCircle2,
  Clock,
  Loader2,
  XCircle,
} from 'lucide-react';
import React from 'react';
import { cn } from '../../../utils/cn';
import { Tooltip } from '../../atoms/Tooltip';

export type JobStatusType =
  | 'SUCCESS'
  | 'FAILURE'
  | 'FAILED'
  | 'RUNNING'
  | 'PROCESSING'
  | 'PENDING'
  | 'CANCELLED';

export interface JobStatusBadgeProps {
  status: JobStatusType;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  label?: string;
  tooltip?: boolean | string;
  className?: string;
}

interface StatusConfig {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  iconClass: string;
  badgeClass: string;
  spin?: boolean;
}

const statusConfigs: Record<JobStatusType, StatusConfig> = {
  SUCCESS: {
    label: 'Success',
    icon: CheckCircle2,
    iconClass: 'text-green-600 dark:text-green-400',
    badgeClass:
      'bg-green-50 text-green-700 border-green-200 dark:bg-green-950/40 dark:text-green-300 dark:border-green-800',
  },
  FAILURE: {
    label: 'Failed',
    icon: XCircle,
    iconClass: 'text-red-600 dark:text-red-400',
    badgeClass:
      'bg-red-50 text-red-700 border-red-200 dark:bg-red-950/40 dark:text-red-300 dark:border-red-800',
  },
  FAILED: {
    label: 'Failed',
    icon: AlertCircle,
    iconClass: 'text-red-600 dark:text-red-400',
    badgeClass:
      'bg-red-50 text-red-700 border-red-200 dark:bg-red-950/40 dark:text-red-300 dark:border-red-800',
  },
  RUNNING: {
    label: 'Running',
    icon: Loader2,
    iconClass: 'text-blue-600 dark:text-blue-400 animate-spin',
    badgeClass:
      'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800',
    spin: true,
  },
  PROCESSING: {
    label: 'Processing',
    icon: Loader2,
    iconClass: 'text-blue-600 dark:text-blue-400 animate-spin',
    badgeClass:
      'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800',
    spin: true,
  },
  PENDING: {
    label: 'Pending',
    icon: Clock,
    iconClass: 'text-amber-600 dark:text-amber-400',
    badgeClass:
      'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800',
  },
  CANCELLED: {
    label: 'Cancelled',
    icon: Ban,
    iconClass: 'text-secondary-500 dark:text-secondary-400',
    badgeClass:
      'bg-secondary-50 text-secondary-700 border-secondary-200 dark:bg-secondary-900/40 dark:text-secondary-300 dark:border-secondary-800',
  },
};

const sizeClasses = {
  sm: {
    badge: 'px-2 py-0.5 text-xs gap-1',
    icon: 'w-3.5 h-3.5',
  },
  md: {
    badge: 'px-2.5 py-1 text-xs gap-1.5',
    icon: 'w-4 h-4',
  },
  lg: {
    badge: 'px-3 py-1.5 text-sm gap-2',
    icon: 'w-4.5 h-4.5',
  },
};

export const JobStatusBadge: React.FC<JobStatusBadgeProps> = ({
  status,
  size = 'md',
  showLabel = true,
  label,
  tooltip = true,
  className,
}) => {
  const normalizedStatus = (status?.toUpperCase() || 'PENDING') as JobStatusType;
  const config = statusConfigs[normalizedStatus] || statusConfigs.PENDING;
  const IconComponent = config.icon;
  const displayLabel = label || config.label;
  const tooltipText = typeof tooltip === 'string' ? tooltip : displayLabel;

  const content = (
    <span
      data-testid="job-status-badge"
      data-status={normalizedStatus}
      className={cn(
        'inline-flex items-center font-medium rounded-full border whitespace-nowrap transition-colors shrink-0',
        sizeClasses[size].badge,
        config.badgeClass,
        className
      )}
    >
      <IconComponent
        aria-hidden="true"
        className={cn(sizeClasses[size].icon, config.iconClass)}
      />
      {showLabel && <span>{displayLabel}</span>}
    </span>
  );

  if (tooltip) {
    return <Tooltip content={tooltipText}>{content}</Tooltip>;
  }

  return content;
};

JobStatusBadge.displayName = 'JobStatusBadge';
export default JobStatusBadge;
