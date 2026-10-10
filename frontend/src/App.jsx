import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import SlideDivider from './components/SlideDivider';
import ThreePillarsSection from './components/ThreePillarsSection';
import UnifiedLoopSection from './components/UnifiedLoopSection';
import AgenticArchitectureSection from './components/AgenticArchitectureSection';
import TechStackSection from './components/TechStackSection';
import DemoNarrativeSection from './components/DemoNarrativeSection';
import FooterSection from './components/FooterSection';
import InteractiveDrawerModal from './components/InteractiveDrawerModal';

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerPillar, setDrawerPillar] = useState('greening');

  const sectionTitles = [
    'Overview',
    'Part 1: Pillars',
    'Three Features',
    'Part 2: Closed Loop',
    'The Unified Loop',
    'Part 3: Agents',
    'Agentic AI',
    'Part 4: MERN Stack',
    'MERN Architecture',
    '6-Stage Demo',
    'Pitch & Mission'
  ];

  // Scroll listener to update active section index
  useEffect(() => {
    const handleScroll = () => {
      const sections = sectionTitles.map((_, i) => document.getElementById(`section-${i}`));
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPosition) {
          setActiveIndex(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionTitles.length]);

  // Keyboard navigation support (ArrowDown, ArrowUp, PageDown, PageUp)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isDrawerOpen) return;
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        scrollToSection(Math.min(activeIndex + 1, sectionTitles.length - 1));
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        scrollToSection(Math.max(activeIndex - 1, 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, isDrawerOpen, sectionTitles.length]);

  const scrollToSection = (index) => {
    const target = document.getElementById(`section-${index}`);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInspectPillar = (pillarId) => {
    setDrawerPillar(pillarId);
    setIsDrawerOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-teal-100 selection:text-teal-900">
      {/* Top bar, Progress line & Right Dot Nav */}
      <Navigation
        activeIndex={activeIndex}
        totalSections={sectionTitles.length}
        sectionTitles={sectionTitles}
        onSelectSection={scrollToSection}
        onOpenDrawer={() => setIsDrawerOpen(true)}
      />

      <main>
        {/* Section 0: Hero */}
        <HeroSection
          onExplore={() => scrollToSection(1)}
          onOpenDrawer={() => setIsDrawerOpen(true)}
          onNavigate={scrollToSection}
        />

        {/* Section 1: Divider Part 1 */}
        <SlideDivider
          id="section-1"
          partNumber="01"
          tag="PART 1 · CORE FOUNDATION"
          title="The Three Interconnected Features"
          subtitle="How GreenPlan AI unifies urban greening, institutional health protection, and pollution root-cause analysis."
        />

        {/* Section 2: Three Pillars */}
        <ThreePillarsSection
          id="section-2"
          onInspectPillar={handleInspectPillar}
        />

        {/* Section 3: Divider Part 2 */}
        <SlideDivider
          id="section-3"
          partNumber="02"
          tag="PART 2 · SYSTEM DYNAMICS"
          title="From Diagnosis to Long-Term Impact"
          subtitle="Moving beyond isolated dashboards into an evidence-led closed loop."
        />

        {/* Section 4: Unified Closed Loop */}
        <UnifiedLoopSection id="section-4" />

        {/* Section 5: Divider Part 3 */}
        <SlideDivider
          id="section-5"
          partNumber="03"
          tag="PART 3 · AGENTIC WORKFLOW"
          title="Specialist AI Agents with Guardrails"
          subtitle="Bounded tools, deterministic math engines, and human authorization for consequential municipal tasks."
        />

        {/* Section 6: Agentic Architecture */}
        <AgenticArchitectureSection id="section-6" />

        {/* Section 7: Divider Part 4 */}
        <SlideDivider
          id="section-7"
          partNumber="04"
          tag="PART 4 · ENGINEERING"
          title="The MERN Stack & Evidence Strategy"
          subtitle="Production architecture: React 19 + Vite, Express REST API, Node.js, and MongoDB 2dsphere indexing."
        />

        {/* Section 8: MERN Stack & Evidence Quality */}
        <div id="section-8">
          <TechStackSection id="section-8" />
        </div>

        {/* Section 9: 6-Stage Demo Narrative & Differentiation */}
        <div id="section-9">
          <DemoNarrativeSection id="section-9" />
        </div>

        {/* Section 10: Footer & Pitch */}
        <div id="section-10">
          <FooterSection
            onScrollToTop={() => scrollToSection(0)}
            onOpenDrawer={() => setIsDrawerOpen(true)}
          />
        </div>
      </main>

      {/* Interactive Inspector Modal (Styled after Screenshot 1) */}
      <InteractiveDrawerModal
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        initialPillar={drawerPillar}
      />
    </div>
  );
}
