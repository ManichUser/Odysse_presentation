"use client"


import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  gradient?: string | false;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  gradient = false,
  hover = false
}) => {
  const baseStyles = 'rounded-3xl p-8';
  const hoverStyles = hover ? 'hover:shadow-xl transition-all' : '';
  const bgStyles = gradient ? gradient : 'bg-white shadow-lg';

  return (
    <div className={`${baseStyles} ${bgStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
};
