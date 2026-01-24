import { memo } from 'react';
import { cn } from '@/utils/cn';
import type { IconProps } from '@/types';

const sizeStyles: Record<string, string> = {
  small: 'text-base',
  default: 'text-xl',
  large: 'text-2xl',
  xl: 'text-3xl',
};

export const Icon = memo<IconProps>(function Icon({
  name,
  size = 'default',
  ariaHidden = true,
  className,
}) {
  return (
    <i
      className={cn(name, sizeStyles[size], className)}
      aria-hidden={ariaHidden}
    />
  );
});
