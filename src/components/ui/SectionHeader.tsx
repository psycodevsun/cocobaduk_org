import { memo } from 'react';
import { cn } from '@/utils/cn';
import type { SectionHeaderProps } from '@/types';

export const SectionHeader = memo<SectionHeaderProps>(function SectionHeader({
  id,
  title,
  titleHighlight,
  subtitle,
  centered = true,
  className,
}) {
  return (
    <div className={cn(centered && 'text-center', 'mb-12', className)}>
      <h2 id={id} className="text-3xl md:text-4xl tracking-title mb-2">
        {titleHighlight ? (
          <>
            {title} <span className="font-bold">{titleHighlight}</span>
          </>
        ) : (
          <span className="font-bold">{title}</span>
        )}
      </h2>
      {subtitle && (
        <p className="text-xl lg:text-lg text-normal tracking-tight">{subtitle}</p>
      )}
    </div>
  );
});
