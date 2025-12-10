"use client"
import React from 'react';
import { Section } from '../common/Section';
import { SectionHeader } from '../common/SectionHeader';
import { FeatureCard } from './FeatureCard';
import { FEATURES_DATA } from '../../utils/constants';

export const FeaturesSection: React.FC = () => (
  <Section id="fonctionnalités" background="white">
    <SectionHeader
      title="Fonctionnalités Principales"
      subtitle="Tout ce dont vous avez besoin pour votre transformation personnelle"
    />

    <div className="grid md:grid-cols-2 gap-6">
      {FEATURES_DATA.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </div>
  </Section>
);