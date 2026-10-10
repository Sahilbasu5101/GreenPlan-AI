import React from 'react';
import { ArrowDown, Leaf, Sparkles, ArrowRight } from 'lucide-react';

export default function HeroSection({ onExplore, onOpenDrawer, onNavigate }) {
  return (
    <section
      id="section-0"
      className="relative min-h-screen flex flex-col justify-between px-6 sm:px-12 lg:px-20 py-6 sm:py-8 bg-cover bg-right lg:bg-center overflow-hidden"
      style={{
        backgroundImage: `url('/hero-bg.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Top Navbar Header */}
      <header className="relative z-20 w-full flex items-center justify-between py-2">
        {/* Logo */}
        <div 
          className="flex items-center gap-2.5 cursor-pointer select-none" 
          onClick={() => onNavigate && onNavigate(0)}
        >
          <div className="w-9 h-9 rounded-full bg-emerald-700 flex items-center justify-center text-white shadow-xs">
            <Leaf className="w-5 h-5 fill-white/20 stroke-white stroke-[2.2]" />
          </div>
          <div className="flex items-center text-2xl font-black tracking-tight">
            <span className="text-slate-900">GreenPlan</span>
            <span className="text-emerald-700 ml-1">AI</span>
          </div>
        </div>

        {/* Center Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
          <button
            onClick={() => onNavigate && onNavigate(0)}
            className="text-slate-900 font-semibold relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2.5px] after:bg-emerald-600 after:rounded-full"
          >
            Home
          </button>
          <button
            onClick={() => onNavigate && onNavigate(2)}
            className="hover:text-slate-900 transition-colors py-1 cursor-pointer"
          >
            Features
          </button>
          <button
            onClick={() => onNavigate && onNavigate(4)}
            className="hover:text-slate-900 transition-colors py-1 cursor-pointer"
          >
            How It Works
          </button>
          <button
            onClick={() => onNavigate && onNavigate(8)}
            className="hover:text-slate-900 transition-colors py-1 cursor-pointer"
          >
            MERN Stack
          </button>
          <button
            onClick={() => onNavigate && onNavigate(10)}
            className="hover:text-slate-900 transition-colors py-1 cursor-pointer"
          >
            About
          </button>
        </nav>

        {/* Right CTA Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenDrawer}
            className="flex items-center gap-1.5 text-xs font-semibold text-emerald-950 bg-white/90 hover:bg-white border border-emerald-200/80 px-4 py-2 rounded-full shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer backdrop-blur-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Live Inspector</span>
          </button>
        </div>
      </header>

      {/* Main Hero Left Content */}
      <div className="relative z-10 max-w-2xl my-auto py-10 sm:py-16">
        
        {/* Pill Badge Tag: Cleaner Air • Greener Cities • Healthier Communities */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/85 border border-emerald-200/80 text-emerald-900 text-xs sm:text-[13px] font-medium shadow-2xs backdrop-blur-md mb-6 sm:mb-7">
          <Leaf className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
          <span>Cleaner Air</span>
          <span className="text-emerald-400">•</span>
          <span>Greener Cities</span>
          <span className="text-emerald-400">•</span>
          <span>Healthier Communities</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.08] mb-6">
          Plan Greener Cities <br />
          for a <span className="text-emerald-700">Healthier</span> <br />
          <span className="text-emerald-700">Tomorrow</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-slate-700 font-normal leading-relaxed mb-8 max-w-xl">
          GreenPlan AI uses environmental data and AI to plan urban greening, protect vulnerable communities, and understand pollution — for cleaner air and more resilient cities.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3.5 mb-8">
          <button
            onClick={onExplore}
            className="px-6 py-3.5 text-sm font-semibold text-white bg-emerald-800 hover:bg-emerald-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2 group cursor-pointer"
          >
            <span>Explore Solution & Architecture</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={onOpenDrawer}
            className="px-6 py-3.5 text-sm font-semibold text-emerald-950 bg-white/95 hover:bg-white border border-emerald-200 rounded-xl shadow-xs hover:shadow-md transition-all duration-200 flex items-center gap-2 cursor-pointer backdrop-blur-xs"
          >
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>Open Tree & Alert Inspector</span>
          </button>
        </div>

        {/* Tech Badges */}
        <div className="flex flex-wrap items-center gap-2.5 text-xs text-slate-600 font-medium">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/90 border border-slate-200/90 shadow-2xs backdrop-blur-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span>MERN Stack</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/90 border border-slate-200/90 shadow-2xs backdrop-blur-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
            <span>Bounded Agentic AI</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/90 border border-slate-200/90 shadow-2xs backdrop-blur-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
            <span>Deterministic Geospatial GIS</span>
          </span>
        </div>

      </div>

      {/* Bottom Scroll Prompt */}
      <div className="relative z-20 flex items-center justify-between text-xs text-slate-700 pt-3 pb-1 border-t border-slate-900/10">
        <div className="flex items-center gap-2 font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
          <span className="text-slate-800 font-semibold">Cause → Exposure → Intervention → Verification</span>
        </div>
        <button
          onClick={onExplore}
          className="flex items-center gap-1.5 text-slate-800 hover:text-emerald-900 transition-colors font-semibold cursor-pointer"
        >
          <span>Scroll to explore</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-emerald-700" />
        </button>
      </div>

      {/* Atmospheric Soft Blur & Smooth Gradient Transition to White */}
      <div
        className="absolute inset-x-0 bottom-0 h-36 sm:h-48 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 20%, rgba(255,255,255,0.65) 60%, rgba(255,255,255,0.95) 90%, #ffffff 100%)',
          backdropFilter: 'blur(4px)',
          WebkitBackdropFilter: 'blur(4px)',
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 50%, black 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 50%, black 100%)'
        }}
      />
    </section>
  );
}
