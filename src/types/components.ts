import type { HTMLAttributes, ButtonHTMLAttributes, ImgHTMLAttributes } from 'react';
import type { WithChildren, WithClassName, WithId, BackgroundVariant } from './common';

// Section
export interface SectionProps extends WithClassName, WithId, HTMLAttributes<HTMLElement> {
  background?: BackgroundVariant;
  ariaLabelledby?: string;
}

// Container
export interface ContainerProps extends WithChildren, WithClassName {
  size?: 'default' | 'narrow' | 'wide';
}

// SectionHeader
export interface SectionHeaderProps extends WithClassName, WithId {
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  centered?: boolean;
}

// Card
export interface CardProps extends WithChildren, WithClassName {
  variant?: 'default' | 'elevated' | 'bordered';
  padding?: 'none' | 'small' | 'default' | 'large';
  hover?: boolean;
}

// Button
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, WithClassName {
  variant?: 'primary' | 'secondary' | 'ghost' | 'cta';
  size?: 'small' | 'default' | 'large';
  fullWidth?: boolean;
  asLink?: boolean;
  href?: string;
}

// Image
export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement>, WithClassName {
  rounded?: 'none' | 'default' | 'lg' | 'xl' | '2xl' | 'full';
  shadow?: boolean;
  objectFit?: 'cover' | 'contain' | 'fill';
}

// Icon
export interface IconProps extends WithClassName {
  name: string;
  size?: 'small' | 'default' | 'large' | 'xl';
  ariaHidden?: boolean;
}

// Grid
export interface GridProps extends WithChildren, WithClassName {
  cols?: 1 | 2 | 3 | 4;
  gap?: 'small' | 'default' | 'large';
  responsive?: boolean;
}
