import React from 'react';
import { Database, Server, Layout, Cpu, ShieldCheck, Check } from 'lucide-react';
import { projectData } from '../data/content';

export default function TechStackSection({ id }) {
  const stackIcons = [Layout, Server, Database, Cpu];

  return (
    <section
      id={id}
      className="min-h-screen flex flex-col items-center justify-center px-6 py-24 bg-white border-b border-slate-200/80"
    >
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-200/70 mb-3 inline-block">
            Engineering Architecture & Data Strategy
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Built on the MERN Stack
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            A production-ready stack combining React geospatial interfaces with an Express/Node.js API and MongoDB 2dsphere spatial indexing.
          </p>
        </div>

        {/* 4 MERN Architecture Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {projectData.techStack.map((item, index) => {
            const Icon = stackIcons[index];
            return (
              <div
                key={item.layer}
                className="bg-slate-50/70 rounded-2xl p-6 border border-slate-200/80 hover:bg-white hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-800 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700 block mb-1">
                    {item.layer}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {item.tech}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
                  <Check className="w-3.5 h-3.5" />
                  <span>Production Ready</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Data Strategy & Evidence Quality Grid */}
        <div className="bg-teal-50/60 rounded-2xl p-8 border border-teal-200/80">
          <div className="max-w-2xl mb-6">
            <h4 className="text-xl font-bold text-teal-950 mb-1">
              Data Strategy & Evidence Quality Guardrails
            </h4>
            <p className="text-xs sm:text-sm text-teal-800 leading-relaxed">
              To avoid hallucinations and false claims, GreenPlan AI separates data types with strict provenance tags.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs text-slate-700">
            <div className="p-4 bg-white rounded-xl border border-teal-200/60 shadow-2xs">
              <span className="font-bold text-slate-900 block mb-1">Strict Data Provenance</span>
              Stores source, timestamp, units, spatial resolution, and coverage gaps for every dataset.
            </div>
            <div className="p-4 bg-white rounded-xl border border-teal-200/60 shadow-2xs">
              <span className="font-bold text-slate-900 block mb-1">Observation Separation</span>
              Distinguishes measured station data from satellite products, atmospheric models, and demo data.
            </div>
            <div className="p-4 bg-white rounded-xl border border-teal-200/60 shadow-2xs">
              <span className="font-bold text-slate-900 block mb-1">Deterministic Optimization</span>
              Canopy calculations use explicit formulas for spacing and budget—never unsupported LLM guesses.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
