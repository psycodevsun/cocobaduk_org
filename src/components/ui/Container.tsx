import { memo } from 'react';
import { cn } from '@/utils/cn';
import type { ContainerProps } from '@/types';

const sizeStyles: Record<string, string> = {
  default: 'max-w-7xl',
  narrow: 'max-w-5xl',
  wide: 'max-w-full',
};

export const Container = memo<ContainerProps>(function Container({
  size = 'default',
  className,
  children,
}) {
  return (
    <div className={cn(sizeStyles[size], 'mx-auto px-6', className)}>
      {children}
    </div>
  );
});
