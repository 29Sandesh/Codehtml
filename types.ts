import React from 'react';

export enum ProjectType {
  WEB_APP = 'WEB_APP',
  MOBILE_APP = 'MOBILE_APP',
  ECOMMERCE = 'ECOMMERCE',
  LANDING_PAGE = 'LANDING_PAGE'
}

export interface AIResponse {
  stack: string[];
  features: string[];
  aesthetic: string;
  estimatedTime: string;
}

export interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  video?: string;
  size?: 'sm' | 'md' | 'lg';
  url?: string;
}

export interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
}