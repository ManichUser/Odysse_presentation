"use client"
import React from 'react';
import { Section } from '../common/Section';
import { SectionHeader } from '../common/SectionHeader';
import { InteractiveGame } from './InteractiveGame';
import { ProblemCard } from './ProblemCard';
import { PROBLEMS_DATA } from '../../utils/constants';

export const ProblemsSection: React.FC = () => (
  <Section id="problèmes" background="white">
    <SectionHeader
      title="Qu'est-ce que la masculinité positive pour vous ?"
      subtitle="Participez à notre expérience interactive et découvrez la diversité des définitions"
    />

    <InteractiveGame />

    <div className="mt-20 space-y-16">
      {PROBLEMS_DATA.map((problem, index) => (
        <ProblemCard key={index} {...problem} />
      ))}
    </div>
  </Section>
);