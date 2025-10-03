import React from 'react';

// --- New Theme Context ---
export type Theme = 'light' | 'dark' | 'black';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined);
// -------------------------


export interface LiveUrl {
  name: string;
  url: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  liveUrls?: LiveUrl[];
  // FIX: Updated the type for `icon` to be more specific. The previous `React.ReactElement` type was too generic and caused a type error when trying to clone the element with new props in `App.tsx`. This new type correctly reflects that the icon is an SVG element and accepts SVG props.
  icon: React.ReactElement<React.ComponentProps<'svg'>>;
  isFeatured?: boolean;
}

export interface Feature {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  title: string;
  avatarUrl: string;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  url: string;
  icon: React.ReactNode;
}
