'use client';

import { cn } from '@src/lib/utils';
import { Badge as ShadcnBadge } from '@src/components/ui/badge';
import { ReactNode } from 'react';
import type { Variant } from './types';

type Size = 'sm' | 'md' | 'lg';

type Props = {
  text: string;
  variant?: Variant;
  size?: Size;
  outlined?: boolean;
  icon?: ReactNode;
  className?: string;
};

const variantStyles: Record<Variant, string> = {
  success: 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400 border-green-300 dark:border-green-500',
  error: 'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400 border-red-300 dark:border-red-500',
  warning: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400 border-yellow-300 dark:border-yellow-500',
  info: 'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400 border-blue-300 dark:border-blue-500',
  default: 'bg-muted text-muted-foreground border-border',
  secondary: 'bg-secondary text-secondary-foreground border-border',
};

const outlineStyles: Record<Variant, string> = {
  success: 'text-green-700 dark:text-green-400 border border-green-300 dark:border-green-500',
  error: 'text-red-700 dark:text-red-400 border border-red-300 dark:border-red-500',
  warning: 'text-yellow-700 dark:text-yellow-400 border border-yellow-300 dark:border-yellow-500',
  info: 'text-blue-700 dark:text-blue-400 border border-blue-300 dark:border-blue-500',
  default: 'text-muted-foreground border border-border',
  secondary: 'text-secondary-foreground border border-border',
};


const sizeStyles: Record<Size, string> = {
  sm: 'px-1.5 py-0.5 text-xs',
  md: 'px-2 py-0.5 text-sm',
  lg: 'px-2.5 py-0.5 text-base',
};

export default function Badge({
  text,
  variant = 'default',
  size = 'md',
  outlined = false,
  icon,
  className,
}: Props) {
  return (
    <ShadcnBadge
      variant="outline"
      className={cn(
        outlined ? outlineStyles[variant] : variantStyles[variant],
        sizeStyles[size],
        'inline-flex items-center justify-center gap-1 font-medium min-w-[80px] text-center rounded-md',
        className
      )}
    >
      {icon && <span className="w-4 h-4">{icon}</span>}
      <span className="truncate">{text}</span>
    </ShadcnBadge>
  );
}

export type { Variant };
