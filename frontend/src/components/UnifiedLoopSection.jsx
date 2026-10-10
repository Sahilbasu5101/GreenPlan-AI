import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Search, ShieldAlert, TreePine, Award } from 'lucide-react';
import { projectData } from '../data/content';

export default function UnifiedLoopSection({ id }) {
  const [activeStep, setActiveStep] = useState(0);

  const stepIcons = [Search, ShieldAlert, TreePine, Award];

  return (
    <section
      id={id}
      className="min-h-screen flex flex-col items-center justify-center px-6 py-24 bg-white border-b border-slate-200/80"
    >
      <div className="max-w-5xl w-full">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-200/70 mb-3 inline-block">
            Cause → Exposure → Intervention → Verification
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            The Unified Closed Loop
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Unlike disjointed tools, GreenPlan AI links diagnosis directly to intervention and long-term verification.
          </p>
        </div>

        {/* 4 Step Cards in Connected Sequence */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {projectData.unifiedLoop.map((item, index) => {
            const Icon = stepIcons[index];
            const isSelected = activeStep === index;
            return (
              <div
                key={item.step}
                onClick={() => setActiveStep(index)}
                className={`cursor-pointer rounded-2xl p-6 transition-all duration-200 border ${
                  isSelected
                    ? 'bg-teal-50/80 border-teal-600 shadow-md ring-2 ring-teal-600/20'
                    : 'bg-slate-50/70 border-slate-200/80 hover:bg-slate-100/60'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-bold font-mono px-2 py-0.5 rounded ${
                    isSelected ? 'bg-teal-700 text-white' : 'bg-slate-200 text-slate-700'
                  }`}>
                    {item.step}
                  </span>
                  <Icon className={`w-5 h-5 ${isSelected ? 'text-teal-700' : 'text-slate-400'}`} />
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-[11px] font-semibold text-teal-800 uppercase tracking-wider mb-2.5">
                  {item.agent}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.role}
                </p>
              </div>
            );
          })}
        </div>

        {/* Dynamic Detail Viewer for Selected Step */}
        <div className="p-7 bg-slate-50 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-800">
                Stage {projectData.unifiedLoop[activeStep].step} Deep Dive
              </span>
              <span className="text-slate-300">·</span>
              <span className="text-xs font-semibold text-slate-600">
                Managed by {projectData.unifiedLoop[activeStep].agent}
              </span>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              {activeStep === 0 && 'Investigates why air quality is deteriorating. Rather than guessing, the agent correlates weather, traffic congestion and historical emission inventories to establish transparent hypotheses with confidence boundaries.'}
              {activeStep === 1 && 'Translates immediate pollution spikes into protective notifications for registered facilities (schools, hospitals, care homes) with human approval gates before dispatch.'}
              {activeStep === 2 && 'Shortlists viable public vacant land and road verges using satellite GIS layers, checks soil pH, root depth, drainage, and matches optimal resilient tree species within municipal budget.'}
              {activeStep === 3 && 'Generates unique Tree Passports with GPS tags, photo history, and scheduled inspections. Validates true survival cohorts rather than superficial sapling counters.'}
            </p>
          </div>

          <div className="flex-shrink-0 flex items-center gap-2">
            <button
              onClick={() => setActiveStep((prev) => (prev + 1) % 4)}
              className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold flex items-center gap-2 shadow-xs transition-colors"
            >
              <span>Next Loop Stage</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
