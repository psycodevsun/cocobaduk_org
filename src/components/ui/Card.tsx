import { memo } from 'react';
import { cn } from '@/utils/cn';
import type { CardProps } from '@/types';

const variantStyles: Record<string, string> = {
  default: 'bg-white',
  elevated: 'bg-white shadow-lg',
  bordered: 'bg-white border-2 border-gray-200',
};

const paddingStyles: Record<string, string> = {
  none: '',
  small: 'p-4',
  default: 'p-4 md:p-6',
  large: 'p-4 md:p-8',
};

export const Card = memo<CardProps>(function Card({
  variant = 'elevated',
  padding = 'default',
  hover = false,
  className,
  children,
}) {
  return (
    <div
      className={cn(
        'rounded-xl',
        variantStyles[variant],
        paddingStyles[padding],
        hover && 'hover:shadow-xl transition-shadow',
        className
      )}
    >
      {children}
    </div>
  );
});
