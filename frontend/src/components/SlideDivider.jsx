import React from 'react';

export default function SlideDivider({ partNumber, tag, title, subtitle, id }) {
  return (
    <section
      id={id}
      className="relative min-h-[50vh] sm:min-h-[60vh] flex flex-col items-center justify-center px-6 py-20 text-center bg-white border-b border-slate-100 overflow-hidden"
    >
      {/* Giant subtle watermark numeral in background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none -z-0">
        <span className="text-[120px] sm:text-[180px] md:text-[230px] font-black tracking-tighter text-slate-100/70">
          {partNumber}
        </span>
      </div>

      {/* Content over watermark */}
      <div className="relative z-10 max-w-3xl">
        <div className="mb-4">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-teal-800 bg-teal-50 border border-teal-200/80 px-4 py-1.5 rounded-full">
            {tag}
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
