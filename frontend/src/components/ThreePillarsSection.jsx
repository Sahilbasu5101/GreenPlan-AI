import React from 'react';
import { TreePine, ShieldAlert, Wind, ArrowRight, Check } from 'lucide-react';
import { projectData } from '../data/content';

export default function ThreePillarsSection({ id, onInspectPillar }) {
  const icons = {
    greening: TreePine,
    health: ShieldAlert,
    pollution: Wind
  };

  const borderAccents = {
    greening: 'border-t-teal-700 hover:border-teal-700',
    health: 'border-t-amber-500 hover:border-amber-500',
    pollution: 'border-t-sky-600 hover:border-sky-600'
  };

  const badgeColors = {
    greening: 'text-teal-800 bg-teal-50',
    health: 'text-amber-800 bg-amber-50',
    pollution: 'text-sky-800 bg-sky-50'
  };

  const bulletRingColors = {
    greening: 'border-teal-500 text-teal-600',
    health: 'border-amber-500 text-amber-600',
    pollution: 'border-sky-500 text-sky-600'
  };

  return (
    <section
      id={id}
      className="min-h-screen flex flex-col items-center justify-center px-6 py-24 bg-slate-50/70 border-b border-slate-200/80"
    >
      <div className="max-w-6xl w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-800 bg-teal-100/60 px-3 py-1 rounded-full border border-teal-200/60 mb-3 inline-block">
            Connected Environmental Decision-Support
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            One platform, three views of the truth
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            GreenPlan AI connects diagnostic root cause analysis, institutional human protection, and verifiable urban greening into an integrated MERN web platform.
          </p>
        </div>

        {/* 3 Pillar Cards (Styled after Screenshot 3) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {projectData.pillars.map((pillar) => {
            const IconComponent = icons[pillar.id] || TreePine;
            return (
              <div
                key={pillar.id}
                className={`bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/80 border-t-[4px] ${borderAccents[pillar.id]} shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group`}
              >
                <div>
                  {/* Top Category Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${badgeColors[pillar.id]}`}>
                      {pillar.badge}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-1.5">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-medium text-slate-500 mb-6 uppercase tracking-wider">
                    {pillar.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Clean Bullet Points with circular ring indicators */}
                  <ul className="space-y-3 mb-8">
                    {pillar.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700 leading-normal">
                        <span className={`mt-0.5 flex-shrink-0 w-3.5 h-3.5 rounded-full border-2 ${bulletRingColors[pillar.id]} flex items-center justify-center`} />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Inspect Action */}
                <button
                  onClick={() => onInspectPillar(pillar.id)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100/80 hover:bg-teal-50 hover:text-teal-800 border border-transparent hover:border-teal-200 flex items-center justify-center gap-1.5 transition-all duration-200 group-hover:border-slate-300"
                >
                  <span>Inspect Live Data Mockup</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
