import { memo } from 'react';
import { cn } from '@/utils/cn';
import type { GridProps } from '@/types';

const colStyles: Record<number, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-2 lg:grid-cols-4',
};

const gapStyles: Record<string, string> = {
  small: 'gap-4',
  default: 'gap-6',
  large: 'gap-8',
};

export const Grid = memo<GridProps>(function Grid({
  cols = 3,
  gap = 'default',
  className,
  children,
}) {
  return (
    <div className={cn('grid', colStyles[cols], gapStyles[gap], className)}>
      {children}
    </div>
  );
});
