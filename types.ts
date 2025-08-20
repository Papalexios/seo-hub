import React from 'react';

export interface LiveUrl {
  name: string;
  url: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  liveUrls?: LiveUrl[];
  icon: React.ReactElement;
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