"use client"

import React from 'react';
import { SecurityFeature } from "@/app/types/index";
import { Shield, Heart, Users, TrendingUp, LucideIcon } from "lucide-react";
import { SECURITY_DATA } from "@/app/utils/constants";

// Map pour convertir les noms d'icônes en composants
const iconMap: Record<string, LucideIcon> = {
  Shield,
  Heart,
  Users,
  TrendingUp
};

const SecurityCard: React.FC<SecurityFeature> = ({ iconName, title, description, gradient }) => {
  const Icon = iconMap[iconName];
  
  return (
    <div className={`${gradient} rounded-3xl p-8`}>
      <Icon className="w-12 h-12 mb-4" style={{ 
        color: gradient.includes('blue') ? '#059669' : 
               gradient.includes('blue') ? '#3b82f6' : 
               gradient.includes('purple') ? '#a855f7' : '#f59e0b' 
      }} />
      <h3 className="text-2xl font-bold text-slate-900 mb-3">
        {title}
      </h3>
      <p className="text-slate-700 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export const SecuritySection: React.FC = () => {
  return (
    <section id="sécurité" className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Sécurité & Confidentialité
          </h2>
          <p className="text-xl text-slate-600">
            Votre bien-être et votre vie privée sont nos priorités absolues
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {SECURITY_DATA.map((feature, idx) => (
            <SecurityCard key={idx} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};