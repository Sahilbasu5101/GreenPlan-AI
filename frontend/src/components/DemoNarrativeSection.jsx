import React, { useState } from 'react';
import { Eye, Shield, TreePine, Award, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import { projectData } from '../data/content';

export default function DemoNarrativeSection({ id }) {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section
      id={id}
      className="min-h-screen flex flex-col items-center justify-center px-6 py-24 bg-slate-50/70 border-b border-slate-200/80"
    >
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-800 bg-teal-100/70 px-3 py-1 rounded-full border border-teal-200/70 mb-3 inline-block">
            Hackathon MVP Walkthrough
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            The 6-Stage Demo Narrative
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            One cohesive end-to-end mission around a single pilot ward and a real pollution episode, presented step-by-step to judges.
          </p>
        </div>

        {/* Interactive 6-Stage Stepper */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {projectData.demoNarrative.map((item, index) => {
            const isSelected = activeStage === index;
            return (
              <button
                key={item.stage}
                onClick={() => setActiveStage(index)}
                className={`text-left p-4 rounded-xl border transition-all duration-200 ${
                  isSelected
                    ? 'bg-teal-800 text-white border-teal-800 shadow-md scale-102'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-teal-400'
                }`}
              >
                <span className={`text-[11px] font-bold block mb-1 uppercase tracking-wider ${
                  isSelected ? 'text-teal-200' : 'text-teal-700'
                }`}>
                  Stage {index + 1}
                </span>
                <span className="text-xs font-bold leading-tight block">
                  {item.stage.replace(/^[0-9]+\.\s*/, '')}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Stage Showcase Panel */}
        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xs mb-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-2.5 py-1 rounded-md mb-2 inline-block">
                What Judges Witness in Demo · {projectData.demoNarrative[activeStage].stage}
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                {projectData.demoNarrative[activeStage].action}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {projectData.demoNarrative[activeStage].evidence}
              </p>
            </div>

            <div className="flex-shrink-0 flex items-center gap-3">
              <button
                onClick={() => setActiveStage((prev) => (prev + 1) % projectData.demoNarrative.length)}
                className="px-5 py-2.5 rounded-xl bg-teal-800 hover:bg-teal-900 text-white text-xs font-semibold flex items-center gap-2 shadow-xs transition-colors"
              >
                <span>Advance to Next Stage</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Uniqueness & Competitive Differentiation Table */}
        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xs">
          <h3 className="text-xl font-bold text-slate-900 mb-6">
            Competitive Differentiation Matrix
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-slate-400 font-semibold uppercase tracking-wider">
                  <th className="py-3 px-4">Differentiator</th>
                  <th className="py-3 px-4">Why It Matters in GreenPlan AI</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {projectData.differentiators.map((diff) => (
                  <tr key={diff.feature} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                        <span>{diff.feature}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 leading-relaxed text-slate-600">
                      {diff.whyItMatters}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
