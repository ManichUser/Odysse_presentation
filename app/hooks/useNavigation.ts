"use client"

import { useState } from 'react';

interface UseNavigationReturn {
  menuOpen: boolean;
  toggleMenu: () => void;
  scrollToSection: (id: string) => void;
}

export const useNavigation = (): UseNavigationReturn => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  
  const scrollToSection = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };
  
  const toggleMenu = (): void => {
    setMenuOpen(prev => !prev);
  };
  
  return { menuOpen, toggleMenu, scrollToSection };
};