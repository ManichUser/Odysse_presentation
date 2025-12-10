import React from 'react';
import { BookOpen, MessageCircle, Award, LucideIcon } from 'lucide-react';
import { Card } from '../common/Card';
import { Solution } from '../../types/index';

const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  MessageCircle,
  Award
};

export const SolutionCard: React.FC<Solution> = ({ title, description, gradient, iconName }) => {
  const Icon = iconMap[iconName];
  
  return (
    <Card hover>
      <div className={`${gradient} rounded-2xl h-48 flex items-center justify-center mb-6`}>
        <Icon className="w-16 h-16 text-white" />
      </div>
      <h3 className="text-2xl font-bold text-slate-900 mb-3">
        {title}
      </h3>
      <p className="text-slate-600 leading-relaxed">
        {description}
      </p>
    </Card>
  );
};
