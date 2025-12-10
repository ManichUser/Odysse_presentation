"use client"

import React from 'react';
import { calculateWordSize, calculateWordOpacity } from '../../utils/textProcessing';

interface WordCloudProps {
  words: [string, number][];
}

export const WordCloud: React.FC<WordCloudProps> = ({ words }) => {
  if (words.length === 0) return null;
  
  return (
    <div className="bg-white rounded-2xl p-8 shadow-inner">
      <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
        Nuage de mots collectifs
      </h3>
      <div className="flex flex-wrap justify-center items-center gap-4">
        {words.map(([word, count]) => {
          const size = calculateWordSize(count);
          const opacity = calculateWordOpacity(count);
          
          return (
            <span
              key={word}
              className="text-blue-600 font-bold transition-all hover:scale-110"
              style={{
                fontSize: `${size}px`,
                opacity: opacity,
                animation: 'fadeIn 0.5s ease-in'
              }}
            >
              {word}
            </span>
          );
        })}
      </div>
    </div>
  );
};