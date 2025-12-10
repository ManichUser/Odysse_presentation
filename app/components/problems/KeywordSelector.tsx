"use client"
import React from 'react';
import { Send } from 'lucide-react';
import { Button } from '../common/Button';

interface KeywordSelectorProps {
  keywords: string[];
  selectedKeywords: string[];
  onToggle: (keyword: string) => void;
  onSubmit: () => void;
  maxKeywords?: number;
}

export const KeywordSelector: React.FC<KeywordSelectorProps> = ({
  keywords,
  selectedKeywords,
  onToggle,
  onSubmit,
  maxKeywords = 3
}) => (
  <div className="mb-8">
    <p className="text-slate-700 mb-4 font-semibold">
      Sélectionnez {maxKeywords} mots qui résonnent avec vous :
    </p>
    
    <div className="flex flex-wrap gap-3 mb-4">
      {keywords.map(keyword => {
        const isSelected = selectedKeywords.includes(keyword);
        const isDisabled = !isSelected && selectedKeywords.length >= maxKeywords;
        
        return (
          <button
            key={keyword}
            onClick={() => onToggle(keyword)}
            disabled={isDisabled}
            className={`
              px-4 py-2 rounded-full font-medium transition-all
              ${isSelected
                ? 'bg-blue-600 text-white shadow-lg scale-110'
                : 'bg-white text-slate-700 hover:bg-slate-100'
              }
              ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}
            `}
          >
            {keyword}
          </button>
        );
      })}
    </div>
    
    <p className="text-sm text-slate-600 mb-4">
      {selectedKeywords.length}/{maxKeywords} mots sélectionnés
    </p>
    
    <Button
      onClick={onSubmit}
      disabled={selectedKeywords.length === 0}
      icon={Send}
    >
      Soumettre
    </Button>
  </div>
);
