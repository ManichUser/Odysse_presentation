"use client"

import { useState } from 'react';
import { WordCloudData } from '../types';

interface UseWordCloudReturn {
  wordCloud: WordCloudData;
  addWords: (words: string[]) => void;
  clearWordCloud: () => void;
  getSortedWords: () => [string, number][];
  isEmpty: boolean;
}

export const useWordCloud = (): UseWordCloudReturn => {
  const [wordCloud, setWordCloud] = useState<WordCloudData>({});
  
  const addWords = (words: string[]): void => {
    setWordCloud(prev => {
      const newCloud = { ...prev };
      words.forEach(word => {
        newCloud[word] = (newCloud[word] || 0) + 1;
      });
      return newCloud;
    });
  };
  
  const clearWordCloud = (): void => {
    setWordCloud({});
  };
  
  const getSortedWords = (): [string, number][] => {
    return Object.entries(wordCloud).sort(([, a], [, b]) => b - a);
  };
  
  return {
    wordCloud,
    addWords,
    clearWordCloud,
    getSortedWords,
    isEmpty: Object.keys(wordCloud).length === 0
  };
};