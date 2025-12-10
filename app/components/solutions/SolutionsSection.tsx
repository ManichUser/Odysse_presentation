import React from 'react';
import { Section } from '../common/Section';
import { SectionHeader } from '../common/SectionHeader';
import { SolutionCard } from './SolutionCard';
import { SOLUTIONS_DATA } from '../../utils/constants';

export const SolutionsSection: React.FC = () => (
  <Section id="solutions" background="mixed">
    <SectionHeader
      title="Nos Solutions Innovantes"
      subtitle="Une approche complète pour accompagner chaque homme dans son évolution"
    />

    <div className="grid md:grid-cols-3 gap-8">
      {SOLUTIONS_DATA.map((solution, index) => (
        <SolutionCard key={index} {...solution} />
      ))}
    </div>
  </Section>
);
