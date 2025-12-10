export const extractKeywords = (text: string, stopWords: string[]): string[] => {
    const words = text
      .toLowerCase()
      .replace(/[^\w\sàâäéèêëïîôùûüÿæœç]/g, '')
      .split(/\s+/)
      .filter(word => word.length > 3 && !stopWords.includes(word));
    
    return words;
  };
  
  export const calculateWordSize = (
    count: number,
    minSize: number = 12,
    increment: number = 4,
    maxSize: number = 48
  ): number => {
    return Math.min(minSize + count * increment, maxSize);
  };
  
  export const calculateWordOpacity = (
    count: number,
    minOpacity: number = 0.5,
    increment: number = 0.1,
    maxOpacity: number = 1
  ): number => {
    return Math.min(minOpacity + count * increment, maxOpacity);
  };