"use client"
import React from 'react';
import { Heart } from 'lucide-react';

interface FooterProps {
  scrollToSection: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ scrollToSection }) => (
  <footer className="bg-slate-900 text-white py-12 px-4">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-4 gap-8 mb-8">
        {/* Brand */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Heart className="w-8 h-8 text-blue-500" />
            <span className="text-2xl font-bold">odysse</span>
          </div>
          <p className="text-slate-400">
            La plateforme de la masculinité positive et de l'engagement communautaire.
            pour la lutte contre les VBG
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-bold mb-4">Navigation</h4>
          <ul className="space-y-2 text-slate-400">
            {['accueil', 'problèmes', 'solutions', 'fonctionnalités'].map(item => (
              <li key={item}>
                <button onClick={() => scrollToSection(item)}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-bold mb-4">Ressources</h4>
          <ul className="space-y-2 text-slate-400">
            <li><a href="#">Blog</a></li>
            <li><a href="#">Centre d'aide</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Documentation</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold mb-4">Contact</h4>
          <ul className="space-y-2 text-slate-400">
            <li>contact@odysse.app</li>
            <li>+237 XXX XXX XXX</li>
            <li>Yaoundé, Cameroun</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-400">
        <p>© 2024 odysse. Tous droits réservés.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-blue-500">Mentions légales</a>
          <a href="#" className="hover:text-blue-500">Confidentialité</a>
          <a href="#" className="hover:text-blue-500">CGU</a>
        </div>
      </div>
    </div>
  </footer>
);