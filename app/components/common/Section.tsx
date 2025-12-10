"use client"
import React, { ReactNode } from 'react';
import { SectionBackground } from '../../types';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  background?: SectionBackground;
}

export const Section: React.FC<SectionProps> = ({
  id,
  children,
  className = '',
  background = 'white'
}) => {
  const backgrounds: Record<SectionBackground, string> = {
    white: 'bg-white',
    gray: 'bg-gradient-to-br from-slate-50 to-slate-100',
    blue: 'bg-gradient-to-br from-blue-50 to-teal-50',
    mixed: 'bg-gradient-to-br from-slate-50 to-blue-50'
  };

  return (
    <section
      id={id}
      className={`py-16 px-4 ${backgrounds[background]} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};