"use client"
import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => (
  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold text-slate-900 mb-4">{title}</h2>
    {subtitle && (
      <p className="text-xl text-slate-600">{subtitle}</p>
    )}
  </div>
);