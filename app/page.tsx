"use client"

import { HeroSection } from "./Hero/HeroSection";
import { ProblemsSection } from "./components/problems/ProblemsSection";
import { SecuritySection } from "./components/security/SecuritySection";
import { SolutionsSection } from "./components/solutions/SolutionsSection";
import { TestimonialsSection } from "./components/testimonials/TestimonialsSection";
import { FeaturesSection } from "./components/features/FeaturesSection";
import { CTASection } from "./components/cta/CTASection";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { useNavigation } from "./hooks/useNavigation";

export default function Home() {
  const { menuOpen, toggleMenu, scrollToSection } = useNavigation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navbar 
        menuOpen={menuOpen}
        toggleMenu={toggleMenu}
        scrollToSection={scrollToSection}
      />
      <HeroSection />
      <ProblemsSection />
      <SolutionsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <SecuritySection />
      <CTASection />
      <Footer  scrollToSection={scrollToSection} />
    </div>
  );
}