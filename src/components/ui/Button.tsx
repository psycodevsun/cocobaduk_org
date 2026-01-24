import { memo, forwardRef } from 'react';
import { cn } from '@/utils/cn';
import type { ButtonProps } from '@/types';

const variantStyles: Record<string, string> = {
  primary: 'bg-primary text-primary-foreground hover:bg-primary-hover',
  secondary: 'bg-gray-100 text-gray-800 hover:bg-gray-200',
  ghost: 'bg-transparent text-ghost hover:text-ghost-hover',
  cta: 'bg-teal-600 text-white hover:bg-teal-700',
};

const sizeStyles: Record<string, string> = {
  small: 'px-4 py-2 text-sm',
  default: 'px-6 py-2',
  large: 'px-8 py-3 text-lg',
};

export const Button = memo(
  forwardRef<HTMLButtonElement, ButtonProps>(function Button(
    {
      variant = 'primary',
      size = 'default',
      fullWidth = false,
      asLink = false,
      href,
      className,
      children,
      ...props
    },
    ref
  ) {
    const baseStyles = cn(
      'rounded-lg font-bold tracking-button transition-colors cursor-pointer whitespace-nowrap',
      variantStyles[variant],
      sizeStyles[size],
      fullWidth && 'w-full',
      className
    );

    if (asLink && href) {
      return (
        <a href={href} className={cn('inline-block text-center', baseStyles)}>
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={baseStyles} {...props}>
        {children}
      </button>
    );
  })
);
