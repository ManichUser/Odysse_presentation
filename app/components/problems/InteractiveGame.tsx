"use client";

import React, { useState, ChangeEvent, useEffect } from 'react';
import { TextInput } from './TextInput';
import { KeywordSelector } from './KeywordSelector';
import { WordCloud } from './WordCloud';
import { useWordCloud } from '../../hooks/useWordCloud';
import { useKeywordSelection } from '../../hooks/useKeywordSelection';
import { extractKeywords } from '../../utils/textProcessing';
import { PREDEFINED_KEYWORDS, STOP_WORDS } from '../../utils/constants';
import { InputMode } from '../../types';

export const InteractiveGame: React.FC = () => {
  const [inputMode, setInputMode] = useState<InputMode>('text');
  const [textInput, setTextInput] = useState<string>('');

  const { addWords, getSortedWords, isEmpty } = useWordCloud();
  const { selectedKeywords, toggleKeyword, clearSelection } = useKeywordSelection(3);

  // Charger les mots stockés
  useEffect(() => {
    const fetchWords = async () => {
      const res = await fetch('/api/words');
      const data = await res.json();
      if (data.words) addWords(data.words);
    };
    fetchWords();
  }, []);

  // Sauvegarder les mots dans le fichier
  const saveWords = async (words: string[]) => {
    await fetch('/api/words', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ words })
    });
  };

  const handleTextSubmit = async (): Promise<void> => {
    if (textInput.trim()) {
      const keywords = extractKeywords(textInput, STOP_WORDS);
      addWords(keywords);
      await saveWords(keywords); // ← sauvegarde fichier
      setTextInput('');
    }
  };

  const handleKeywordsSubmit = async (): Promise<void> => {
    if (selectedKeywords.length > 0) {
      const words = selectedKeywords.map(k => k.toLowerCase());
      addWords(words);
      await saveWords(words); // ← sauvegarde fichier
      clearSelection();
    }
  };

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setTextInput(e.target.value);
  };

  return (
    <div className="max-w-4xl mx-auto bg-linear-to-br from-blue-50 to-teal-50 rounded-3xl p-8 shadow-xl">
      
      {/* Mode Selector */}
      <div className="flex justify-center space-x-4 mb-8">
        <button
          onClick={() => setInputMode('text')}
          className={`
            px-6 py-3 rounded-full font-semibold transition-all
            ${inputMode === 'text'
              ? 'bg-blue-600 text-white shadow-lg'
              : 'bg-white text-slate-700 hover:bg-slate-100'
            }
          `}
        >
          Écrire 3 mots cle qui representent la masculinité positive
        </button>

        <button
          onClick={() => setInputMode('keywords')}
          className={`
            px-6 py-3 rounded-full font-semibold transition-all
            ${inputMode === 'keywords'
              ? 'bg-blue-600 text-white shadow-lg'
              : 'bg-white text-slate-700 hover:bg-slate-100'
            }
          `}
        >
          Choisir 3 mots-clés
        </button>
      </div>

      {/* Input Components */}
      {inputMode === 'text' ? (
        <TextInput
          value={textInput}
          onChange={handleTextChange}
          onSubmit={handleTextSubmit}
        />
      ) : (
        <KeywordSelector
          keywords={PREDEFINED_KEYWORDS}
          selectedKeywords={selectedKeywords}
          onToggle={toggleKeyword}
          onSubmit={handleKeywordsSubmit}
        />
      )}

      {/* Word Cloud */}
      {!isEmpty && <WordCloud words={getSortedWords()} />}
    </div>
  );
};
