import React, { useState } from 'react';
import { X, CheckCircle, AlertTriangle, TreePine, ShieldAlert, Wind, MapPin, Eye, Clock, FileText, Check, Share2, Sparkles, User, Tag, ShieldCheck } from 'lucide-react';
import { projectData } from '../data/content';

export default function InteractiveDrawerModal({ isOpen, onClose, initialPillar = 'greening' }) {
  const [selectedTab, setSelectedTab] = useState(initialPillar);
  const [alertAcknowledged, setAlertAcknowledged] = useState(false);
  const [treeWatered, setTreeWatered] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-200">
      {/* Modal / Slide-Over Window Container (Reference Screenshot 1 style) */}
      <div className="bg-white w-full max-w-5xl max-h-[92vh] rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Top bar with breadcrumb & actions */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50/60">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              GreenPlan AI Audit Console
            </span>
            <span className="text-slate-300">/</span>
            <span className="text-xs font-bold text-teal-800 bg-teal-100/70 px-2.5 py-0.5 rounded-md">
              MERN Live Decision Object
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Tab switchers inside modal */}
            <div className="hidden sm:flex items-center bg-slate-200/60 p-0.5 rounded-lg text-xs font-semibold">
              <button
                onClick={() => setSelectedTab('greening')}
                className={`px-3 py-1 rounded-md transition-all ${
                  selectedTab === 'greening' ? 'bg-white text-teal-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Tree Passport
              </button>
              <button
                onClick={() => setSelectedTab('health')}
                className={`px-3 py-1 rounded-md transition-all ${
                  selectedTab === 'health' ? 'bg-white text-amber-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Facility Alert
              </button>
              <button
                onClick={() => setSelectedTab('pollution')}
                className={`px-3 py-1 rounded-md transition-all ${
                  selectedTab === 'pollution' ? 'bg-white text-sky-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Pollution Diagnosis
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Main Content: Split into Left Details & Right Metadata Panel (Exact Reference Screenshot 1 layout) */}
        <div className="flex-1 overflow-y-auto grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
          
          {/* Left Column (8 cols): Title, Problem Statement, Evidence Chain, Action Log */}
          <div className="lg:col-span-8 p-6 sm:p-8">
            {selectedTab === 'greening' && (
              <div>
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                  <TreePine className="w-4 h-4 text-teal-600" />
                  <span>Tree Intelligence · Passport ID: GP-TREE-DEL-0419</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
                  Azadirachta indica (Neem) — Candidate Site Ward 4
                </h3>

                {/* Key Details Section */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Site Suitability & Constraints
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                    Satellite and GIS discovery shortlisted 420m road verge along School Perimeter Zone B. Soil testing confirmed neutral pH (7.1), adequate drainage, and root expansion zone clear of subsurface utilities. Water access verified via ward recycled supply line.
                  </p>
                </div>

                {/* Evidence & Health AI Analysis */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Vision-AI Stress Screening & Health History
                  </h4>
                  <div className="space-y-2.5">
                    <div className="flex items-start gap-3 p-3 bg-emerald-50/60 rounded-xl border border-emerald-200/70 text-xs text-emerald-950">
                      <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                      <div>
                        <span className="font-semibold">Recent Field Photo Screen (Yesterday 07:30 AM):</span> Canopy density 14.2 m², no chlorosis or leaf curling detected. Health index rated Vigorous.
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700">
                      <Clock className="w-4 h-4 text-slate-500 mt-0.5 shrink-0" />
                      <div>
                        <span className="font-semibold">Deterministic Survival Model:</span> 88% 3-year survival projection based on species resilience, soil moisture, and active ward cohort monitoring.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Taken / Log Task */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Verified Maintenance Action
                  </h4>
                  <div className="flex items-center justify-between p-4 bg-teal-50/50 rounded-xl border border-teal-200">
                    <div className="text-xs text-teal-900">
                      <p className="font-semibold">Routine Bi-Weekly Deep Root Watering</p>
                      <p className="text-teal-700">Managed by Tree Guardian Agent & Ward Ground Team</p>
                    </div>
                    <button
                      onClick={() => setTreeWatered(!treeWatered)}
                      className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                        treeWatered
                          ? 'bg-emerald-600 text-white'
                          : 'bg-teal-700 text-white hover:bg-teal-800'
                      }`}
                    >
                      {treeWatered ? 'Logged in MongoDB ✓' : 'Mark Watering Complete'}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {selectedTab === 'health' && (
              <div>
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                  <ShieldAlert className="w-4 h-4 text-amber-600" />
                  <span>Facility Exposure Alert · ALT-FAC-2026-992</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
                  Kendriya Vidyalaya Public School — Outdoor Exposure Advisory
                </h3>

                {/* Exposure Situation */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Exposure Threshold Breach
                  </h4>
                  <div className="bg-amber-50/70 p-4 rounded-xl border border-amber-200 text-sm text-amber-950 leading-relaxed">
                    Local monitoring station recorded 1-hr average PM2.5 of <strong>184 µg/m³</strong>, exceeding the facility's safety threshold (150 µg/m³). Micro-forecast predicts stagnant inversion conditions persisting for at least 3 hours.
                  </div>
                </div>

                {/* Recommended Protective Actions */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Authoritative Recommended Actions
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-700">
                    <li className="flex items-center gap-2 p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                      <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                      <span>Relocate morning outdoor physical education and assemblies indoors.</span>
                    </li>
                    <li className="flex items-center gap-2 p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                      <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                      <span>Switch classroom mechanical ventilation units to recirculate + HEPA filtration.</span>
                    </li>
                    <li className="flex items-center gap-2 p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                      <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                      <span>Notify parents of students with registered respiratory vulnerabilities.</span>
                    </li>
                  </ul>
                </div>

                {/* Human-in-the-Loop Approval Action */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Human Authorization Gate
                  </h4>
                  <div className="flex items-center justify-between p-4 bg-slate-100 rounded-xl border border-slate-200">
                    <div className="text-xs text-slate-700">
                      <p className="font-semibold">School Administration Acknowledgment</p>
                      <p className="text-slate-500">Required before automated facility notices are dispatched.</p>
                    </div>
                    <button
                      onClick={() => setAlertAcknowledged(!alertAcknowledged)}
                      className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                        alertAcknowledged
                          ? 'bg-emerald-600 text-white'
                          : 'bg-amber-600 text-white hover:bg-amber-700'
                      }`}
                    >
                      {alertAcknowledged ? 'Authorized & Dispatched ✓' : 'Acknowledge & Dispatch'}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {selectedTab === 'pollution' && (
              <div>
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                  <Wind className="w-4 h-4 text-sky-600" />
                  <span>Pollution Intelligence · Episode INV-EPISODE-104</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
                  Evidence-Chain Root Cause Investigation
                </h3>

                {/* Root Cause Hypothesis */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Evidence-Backed Hypotheses
                  </h4>
                  <div className="bg-sky-50/70 p-4 rounded-xl border border-sky-200 text-sm text-sky-950 leading-relaxed mb-3">
                    Correlation analysis between wind vectors (NW @ 12.4 km/h), surface temperature lapse rate, and traffic congestion counters indicates a dual-source pollution episode trapped under a 220m boundary layer inversion.
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <p className="text-slate-500 mb-1">Arterial Freight</p>
                      <p className="font-bold text-slate-900">~45% Share</p>
                      <p className="text-[10px] text-teal-600">High Confidence</p>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <p className="text-slate-500 mb-1">Biomass / Crop</p>
                      <p className="font-bold text-slate-900">~35% Share</p>
                      <p className="text-[10px] text-amber-600">Medium Confidence</p>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <p className="text-slate-500 mb-1">Road Dust</p>
                      <p className="font-bold text-slate-900">~20% Share</p>
                      <p className="text-[10px] text-teal-600">Ground Verified</p>
                    </div>
                  </div>
                </div>

                {/* Audit & Uncertainty Statement */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Evidence Integrity & Missing Data Audit
                  </h4>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1.5">
                    <p><strong>Caveat:</strong> Source shares are evidence-based hypotheses derived from meteorological dispersion, not quantitative chemical speciation.</p>
                    <p><strong>Missing Data:</strong> Sector 9 VOC analyzer temporarily offline; regional satellite optical depth interpolation applied.</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column (4 cols): Metadata Inspector (Exact Reference Screenshot 1 Sidebar) */}
          <div className="lg:col-span-4 p-6 bg-slate-50/70 flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Status Badge */}
              <div>
                <label className="text-[11px] font-bold uppercase text-slate-400 tracking-wider block mb-2">
                  Lifecycle Status
                </label>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-100 text-teal-900 text-xs font-bold border border-teal-200">
                  <span className="w-2 h-2 rounded-full bg-teal-600"></span>
                  <span>{selectedTab === 'greening' ? 'Active In MongoDB' : selectedTab === 'health' ? (alertAcknowledged ? 'Resolved / Logged' : 'Pending Review') : 'Hypothesis Verified'}</span>
                </div>
              </div>

              {/* Inspector Attributes List */}
              <div className="space-y-3.5 text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5" /> Specialist Agent
                  </span>
                  <span className="font-semibold text-slate-900">
                    {selectedTab === 'greening' ? 'Tree Guardian' : selectedTab === 'health' ? 'Exposure & Alert' : 'Pollution Investigator'}
                  </span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" /> Pilot Ward
                  </span>
                  <span className="font-semibold text-slate-900">Ward 04, Pilot Area A</span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5" /> MERN Labels
                  </span>
                  <div className="flex gap-1">
                    <span className="px-1.5 py-0.5 rounded-md bg-slate-200 text-[10px] font-medium text-slate-700">GeoJSON</span>
                    <span className="px-1.5 py-0.5 rounded-md bg-slate-200 text-[10px] font-medium text-slate-700">2dsphere</span>
                    <span className="px-1.5 py-0.5 rounded-md bg-slate-200 text-[10px] font-medium text-slate-700">AuditLog</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" /> Human Approval Gate
                  </span>
                  <span className="font-semibold text-emerald-700">Enforced</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" /> Data Freshness
                  </span>
                  <span className="font-mono text-slate-700">Updated 4m ago</span>
                </div>
              </div>

              {/* MERN Architecture Note */}
              <div className="p-3.5 bg-white rounded-xl border border-slate-200 text-xs text-slate-600">
                <span className="font-bold text-slate-900 block mb-1">MERN Stack Backend Binding:</span>
                This object synchronizes with Express API <code className="bg-slate-100 px-1 py-0.5 rounded text-[11px] text-teal-800">/api/v1/{selectedTab}</code> and persists in MongoDB with geospatial indices.
              </div>
            </div>

            <button
              onClick={onClose}
              className="mt-6 w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 transition-colors text-center"
            >
              Close Inspector Window
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
