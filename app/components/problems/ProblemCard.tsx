"use client"
import React from 'react';
import { Problem } from '../../types';

export const ProblemCard: React.FC<Problem> = ({
  title,
  description,
  imagePosition = 'right',
  gradient
}) => {
  const isRight = imagePosition === 'right';
  
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className={isRight ? 'order-1' : 'order-2 md:order-1'}>
        <h3 className="text-3xl font-bold text-slate-900 mb-4">
          {title}
        </h3>
        <p className="text-lg text-slate-600 leading-relaxed">
          {description}
        </p>
      </div>
      
      <div className={`
        ${gradient} rounded-3xl h-80 flex items-center justify-center shadow-xl
        ${isRight ? 'order-2' : 'order-1 md:order-2'}
      `}>
        <p className="text-slate-700">Illustration</p>
      </div>
    </div>
  );
};
