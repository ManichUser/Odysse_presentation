"use client"

import React from 'react';
import { Heart, Menu, X } from 'lucide-react';
import { Button } from '../common/Button';
import { NAVIGATION_ITEMS } from '../../utils/constants';

interface NavbarProps {
  menuOpen: boolean;
  toggleMenu: () => void;
  scrollToSection: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ menuOpen, toggleMenu, scrollToSection }) => {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            {/* <Heart className="w-8 h-8 text-blue-600" /> */}
            <span className="text-blue-500 text-4xl">✨</span>

            <span className="text-2xl font-bold text-slate-800">ODYSSE</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {NAVIGATION_ITEMS.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-slate-700 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button onClick={() => {}} size="sm">Télécharger</Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            {NAVIGATION_ITEMS.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-2 text-slate-700"
              >
                {item.label}
              </button>
            ))}
            <Button onClick={() => {}} size="sm" className="w-full">Télécharger</Button>
          </div>
        </div>
      )}
    </nav>
  );
};