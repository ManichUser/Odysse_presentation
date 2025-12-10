// types/index.ts

export interface NavigationItem {
    label: string;
    id: string;
  }
  
  export interface Keyword {
    id: string;
    label: string;
  }
  
  export interface WordCloudData {
    [word: string]: number;
  }
  
  export interface Feature {
    title: string;
    desc: string;
    icon: string;
  }
  
  export interface Testimonial {
    quote: string;
    author: string;
    level: string;
  }
  
  export interface Stat {
    number: string;
    label: string;
  }
  
  export interface Solution {
    title: string;
    description: string;
    gradient: string;
    iconName: 'BookOpen' | 'MessageCircle' | 'Award';
  }
  
  export interface SecurityFeature {
    title: string;
    description: string;
    gradient: string;
    iconName: 'Shield' | 'Heart' | 'Users' | 'TrendingUp';
  }
  
  export interface Problem {
    title: string;
    description: string;
    imagePosition: 'left' | 'right';
    gradient: string;
  }
  
  export type ButtonVariant = 'primary' | 'secondary' | 'outline';
  export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';
  export type SectionBackground = 'white' | 'gray' | 'blue' | 'mixed';
  export type InputMode = 'text' | 'keywords';
  