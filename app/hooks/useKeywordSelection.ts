"use client"

import { useState } from 'react';

interface UseKeywordSelectionReturn {
  selectedKeywords: string[];
  toggleKeyword: (keyword: string) => void;
  clearSelection: () => void;
  isSelected: (keyword: string) => boolean;
  isMaxReached: boolean;
  count: number;
}

export const useKeywordSelection = (maxKeywords: number = 3): UseKeywordSelectionReturn => {
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);
  
  const toggleKeyword = (keyword: string): void => {
    if (selectedKeywords.includes(keyword)) {
      setSelectedKeywords(prev => prev.filter(k => k !== keyword));
    } else if (selectedKeywords.length < maxKeywords) {
      setSelectedKeywords(prev => [...prev, keyword]);
    }
  };
  
  const clearSelection = (): void => {
    setSelectedKeywords([]);
  };
  
  const isSelected = (keyword: string): boolean => selectedKeywords.includes(keyword);
  const isMaxReached = selectedKeywords.length >= maxKeywords;
  
  return {
    selectedKeywords,
    toggleKeyword,
    clearSelection,
    isSelected,
    isMaxReached,
    count: selectedKeywords.length
  };
};