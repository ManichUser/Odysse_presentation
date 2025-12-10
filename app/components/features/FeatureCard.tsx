"use client"
import React from 'react';
import { Feature } from '../../types';

export const FeatureCard: React.FC<Feature> = ({ icon, title, desc }) => (
  <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 hover:shadow-lg transition-all">
    <div className="flex items-start space-x-4">
      <span className="text-4xl">{icon}</span>
      <div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">
          {title}
        </h3>
        <p className="text-slate-600">
          {desc}
        </p>
      </div>
    </div>
  </div>
);