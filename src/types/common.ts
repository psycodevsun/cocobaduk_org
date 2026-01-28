import type { ReactNode } from 'react';

export interface WithChildren {
  children: ReactNode;
}

export interface WithClassName {
  className?: string;
}

export interface WithId {
  id?: string;
}

export type BackgroundVariant = 'white' | 'gray' | 'warm' | 'primary' | 'gradient';
