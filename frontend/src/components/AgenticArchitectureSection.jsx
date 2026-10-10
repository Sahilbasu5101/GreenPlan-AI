import React from 'react';
import { Bot, Shield, CheckCircle, Cpu, Users, GitFork, Lock } from 'lucide-react';
import { projectData } from '../data/content';

export default function AgenticArchitectureSection({ id }) {
  return (
    <section
      id={id}
      className="min-h-screen flex flex-col items-center justify-center px-6 py-24 bg-slate-50/70 border-b border-slate-200/80"
    >
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-800 bg-teal-100/70 px-3 py-1 rounded-full border border-teal-200/70 mb-3 inline-block">
            Autonomous Specialist Agents & Safeguards
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Agentic AI Architecture
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            A coordinator agent directs bounded specialist agents with explicit tool access, deterministic calculation engines, and mandatory human approval gates.
          </p>
        </div>

        {/* The 7 Specialist Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {projectData.agents.map((agent, index) => (
            <div
              key={agent.name}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200/60">
                    {agent.role}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {agent.name}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {agent.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                <span>Deterministic Verification</span>
                <span className="text-emerald-700 font-semibold">Active ✓</span>
              </div>
            </div>
          ))}
        </div>

        {/* Agentic Loop & Guardrails Banner */}
        <div className="bg-slate-900 text-white rounded-2xl p-7 sm:p-9 shadow-xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-2">
                <Lock className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                  Strict Governance & Bounded Execution
                </span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold tracking-tight mb-2">
                The Agentic Loop: Observe → Investigate → Propose → Human Approval → Verify
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                LLMs are restricted to orchestration, evidence synthesis, and structured recommendations. All numerical formulas (canopy targets, soil pH suitability, distance buffers) are executed deterministically by code without hallucinations.
              </p>
            </div>

            <div className="flex flex-col gap-2 shrink-0">
              <div className="flex items-center gap-2 text-xs text-slate-300 bg-slate-800/80 px-3.5 py-2 rounded-xl border border-slate-700">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Role-based access & immutable audit trails</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300 bg-slate-800/80 px-3.5 py-2 rounded-xl border border-slate-700">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Human-in-the-loop signoff for municipal alerts</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
