import React from 'react';
import { Leaf, ArrowUp, Github, Sparkles, CheckCircle } from 'lucide-react';

export default function FooterSection({ onScrollToTop, onOpenDrawer }) {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-12 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* One-Minute Pitch Card */}
        <div className="bg-slate-800/80 rounded-2xl p-8 sm:p-10 border border-slate-700/80 mb-16 shadow-xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-400 bg-teal-950/80 border border-teal-800/80 px-3 py-1 rounded-full">
              The One-Minute Pitch
            </span>
          </div>
          
          <blockquote className="text-base sm:text-xl font-medium text-slate-100 leading-relaxed mb-6 italic">
            “GreenPlan AI is an agentic environmental intelligence platform that helps cities understand why their air is polluted, protect people who may be most exposed, and plan long-term urban greening interventions. By combining geospatial data, evidence-based pollution analysis, facility-level alerts, tree-site optimization and tree-health monitoring, GreenPlan AI connects diagnosis to action and verifies progress over time.”
          </blockquote>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-700 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-slate-300 font-medium">Concept Proposal · Hackathon MVP Architecture</span>
            </div>
            
            <button
              onClick={onOpenDrawer}
              className="px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Launch Live Inspector Drawer</span>
            </button>
          </div>
        </div>

        {/* Bottom Credits & Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-slate-800 text-xs text-slate-400">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-md bg-teal-600 flex items-center justify-center text-white">
              <Leaf className="w-3.5 h-3.5" />
            </div>
            <span className="font-bold text-slate-200">GreenPlan AI</span>
            <span>·</span>
            <span>MERN Stack Environmental Intelligence</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-slate-200 transition-colors">
              Built for Clean Air & Resilient Cities
            </span>
            <button
              onClick={onScrollToTop}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
