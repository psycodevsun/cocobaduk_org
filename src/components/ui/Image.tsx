import { memo } from 'react';
import { cn } from '@/utils/cn';
import type { ImageProps } from '@/types';

const roundedStyles: Record<string, string> = {
  none: '',
  default: 'rounded',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  '2xl': 'rounded-2xl',
  full: 'rounded-full',
};

const objectFitStyles: Record<string, string> = {
  cover: 'object-cover',
  contain: 'object-contain',
  fill: 'object-fill',
};

export const Image = memo<ImageProps>(function Image({
  rounded = 'xl',
  shadow = false,
  objectFit = 'cover',
  className,
  alt,
  loading = 'lazy',
  ...props
}) {
  return (
    <img
      alt={alt}
      loading={loading}
      className={cn(
        'w-full',
        roundedStyles[rounded],
        objectFitStyles[objectFit],
        shadow && 'shadow-lg',
        className
      )}
      {...props}
    />
  );
});
