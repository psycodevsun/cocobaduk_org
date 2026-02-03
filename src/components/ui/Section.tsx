import { memo } from 'react';
import { cn } from '@/utils/cn';
import type { SectionProps } from '@/types';

const bgStyles: Record<string, string> = {
  white: 'bg-white',
  gray: 'bg-gray-50',
  warm: 'bg-surface-warm',
  primary: 'bg-primary-surface',
  gradient: 'bg-gradient-to-br from-slate-50 to-slate-100',
};

export const Section = memo<SectionProps>(function Section({
  id,
  background = 'white',
  className,
  ariaLabelledby,
  children,
  ...props
}) {
  return (
    <section
      id={id}
      className={cn('py-24', bgStyles[background], className)}
      aria-labelledby={ariaLabelledby}
      {...props}
    >
      {children}
    </section>
  );
});
