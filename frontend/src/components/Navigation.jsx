import React, { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

export default function Navigation({ activeIndex, totalSections, sectionTitles, onSelectSection, onOpenDrawer }) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const formattedCount = String(activeIndex + 1).padStart(2, '0');
  const formattedTotal = String(totalSections).padStart(2, '0');

  return (
    <>
      {/* 4-colour strip, fixed on very top */}
      <div className="fixed inset-x-0 top-0 h-[3.5px] z-50 flex pointer-events-none">
        <div className="flex-1 bg-[#3b82f6]"></div>
        <div className="flex-1 bg-[#ef4444]"></div>
        <div className="flex-1 bg-[#f59e0b]"></div>
        <div className="flex-1 bg-[#10b981]"></div>
      </div>

      {/* Dynamic Scroll Progress Bar */}
      <div className="fixed top-[3.5px] inset-x-0 h-[2px] z-40 bg-transparent pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-400 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Header Badges - ONLY appear when scrolled past hero (activeIndex > 0) to prevent double headers */}
      {activeIndex > 0 && (
        <div className="fixed top-4 right-6 z-40 flex items-center gap-2.5 transition-all duration-300 animate-in fade-in">
          <button
            onClick={onOpenDrawer}
            className="hidden md:flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-teal-900 bg-white/95 hover:bg-teal-50 border border-teal-200/80 px-3.5 py-1.5 rounded-full shadow-sm transition-all duration-200 hover:scale-[1.02]"
          >
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>Interactive Preview</span>
          </button>

          <span className="text-[11px] font-bold uppercase tracking-widest text-teal-900 bg-teal-50/95 border border-teal-200/80 px-3.5 py-1.5 rounded-full shadow-sm">
            GreenPlan AI
          </span>

          <span className="text-[11px] font-bold tabular-nums text-slate-600 bg-white/95 border border-slate-200 px-3 py-1.5 rounded-full shadow-sm">
            {formattedCount} / {formattedTotal}
          </span>
        </div>
      )}

      {/* Right-Side Vertical Dot Navigation */}
      <div className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3 py-3 px-1.5 rounded-full bg-white/50 backdrop-blur-[2px] border border-slate-200/40">
        {sectionTitles.map((title, idx) => {
          const isActive = activeIndex === idx;
          return (
            <button
              key={idx}
              onClick={() => onSelectSection(idx)}
              aria-label={`Scroll to ${title}`}
              className="group relative flex items-center justify-end"
            >
              {/* Tooltip on hover */}
              <span className="absolute right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap text-[11px] font-medium text-white bg-slate-900 px-2.5 py-1 rounded-md shadow-md">
                {title}
              </span>

              {/* Dot */}
              <span
                className={`block rounded-full transition-all duration-300 ${
                  isActive
                    ? 'w-3 h-3 bg-emerald-700 ring-4 ring-emerald-600/25 scale-125'
                    : 'w-2 h-2 bg-slate-300 group-hover:bg-slate-400 group-hover:scale-125'
                }`}
              />
            </button>
          );
        })}
      </div>
    </>
  );
}
