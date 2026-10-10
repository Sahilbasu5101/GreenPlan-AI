import React, { useState } from 'react';
import { 
  Leaf, LogOut, ShieldAlert, TreePine, Wind, Activity, 
  MapPin, CheckCircle2, AlertTriangle, ArrowUpRight, 
  Clock, RefreshCw, Eye, Sparkles, Filter, Droplets, Check, Bot
} from 'lucide-react';
import { projectData } from '../data/content';

export default function Dashboard({ onLogout }) {
  const [activeTab, setActiveTab] = useState('health');
  
  // Interactive state for human-in-the-loop alert authorization
  const [alertAuthorized, setAlertAuthorized] = useState(false);
  const [treeWatered, setTreeWatered] = useState(false);
  const [greeningApproved, setGreeningApproved] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased flex flex-col">
      
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-2xs px-4 sm:px-8 py-3.5 flex items-center justify-between">
        
        {/* Left: Brand & Ward Badge */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-emerald-700 flex items-center justify-center text-white shadow-2xs">
              <Leaf className="w-4 h-4 fill-white/20 stroke-white stroke-[2.2]" />
            </div>
            <div className="flex items-center text-xl font-black tracking-tight">
              <span className="text-slate-900">GreenPlan</span>
              <span className="text-emerald-700 ml-0.5">AI</span>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-2 pl-3 border-l border-slate-200">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-bold text-slate-700">Ward 04 · Pilot Area A</span>
            <span className="text-slate-300">·</span>
            <span className="text-[11px] text-slate-500 font-medium">MERN Decision System</span>
          </div>
        </div>

        {/* Center / Right: Live Status & Logout */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 text-xs font-medium text-slate-600">
            <Wind className="w-3.5 h-3.5 text-sky-600" />
            <span>NW Wind @ 12.4 km/h</span>
            <span className="text-slate-300">|</span>
            <span>Inversion: 220m</span>
          </div>

          <div className="flex items-center gap-2 pl-2">
            <div className="hidden sm:block text-right">
              <p className="text-xs font-bold text-slate-800 leading-tight">Admin Officer</p>
              <p className="text-[10px] text-emerald-700 font-semibold">Ward Environmental Lead</p>
            </div>
            <button
              onClick={onLogout}
              className="p-2 sm:px-3 sm:py-1.5 rounded-xl border border-slate-200 hover:bg-rose-50 hover:text-rose-700 hover:border-rose-200 text-xs font-semibold text-slate-600 transition-all flex items-center gap-1.5 cursor-pointer"
              title="Logout to landing page"
            >
              <LogOut className="w-4 h-4 text-slate-500" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>

      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 space-y-6">
        
        {/* Top 4 KPI Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Card 1: AQI / PM2.5 */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Ward Station PM2.5
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-rose-100 text-rose-800">
                Unhealthy
              </span>
            </div>
            <div className="my-1">
              <span className="text-3xl font-extrabold text-slate-900 tracking-tight">184</span>
              <span className="text-xs font-semibold text-slate-500 ml-1.5">µg/m³</span>
            </div>
            <p className="text-[11px] text-slate-500 flex items-center gap-1">
              <Clock className="w-3 h-3 text-slate-400" />
              <span>1-hr continuous avg · Rising +12%</span>
            </p>
          </div>

          {/* Card 2: Sensitive Facilities */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Protected Facilities
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-800">
                Alert Active
              </span>
            </div>
            <div className="my-1">
              <span className="text-3xl font-extrabold text-slate-900 tracking-tight">5 Sites</span>
            </div>
            <p className="text-[11px] text-slate-500 flex items-center gap-1">
              <ShieldAlert className="w-3 h-3 text-amber-500" />
              <span>3 Schools, 2 Care Facilities registered</span>
            </p>
          </div>

          {/* Card 3: Urban Greening */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Candidate Planting Sites
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800">
                Verified
              </span>
            </div>
            <div className="my-1">
              <span className="text-3xl font-extrabold text-slate-900 tracking-tight">420 m</span>
              <span className="text-xs font-semibold text-slate-500 ml-1.5">Verge Length</span>
            </div>
            <p className="text-[11px] text-slate-500 flex items-center gap-1">
              <TreePine className="w-3 h-3 text-emerald-600" />
              <span>45 Neem trees proposed in budget</span>
            </p>
          </div>

          {/* Card 4: Tree Survival Rate */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Tree Passports Cohort
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-teal-100 text-teal-800">
                MongoDB Synced
              </span>
            </div>
            <div className="my-1">
              <span className="text-3xl font-extrabold text-slate-900 tracking-tight">88.4%</span>
              <span className="text-xs font-semibold text-slate-500 ml-1.5">3-Yr Survival</span>
            </div>
            <p className="text-[11px] text-slate-500 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-teal-600" />
              <span>1,240 Passports tracked with GPS</span>
            </p>
          </div>

        </div>

        {/* Dashboard Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-slate-200 pb-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('health')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'health'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <ShieldAlert className="w-4 h-4 text-amber-400" />
            <span>Air Health & Facility Alerts</span>
          </button>

          <button
            onClick={() => setActiveTab('greening')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'greening'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <TreePine className="w-4 h-4 text-emerald-400" />
            <span>Urban Greening & Tree Passports</span>
          </button>

          <button
            onClick={() => setActiveTab('pollution')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'pollution'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Wind className="w-4 h-4 text-sky-400" />
            <span>Pollution Intelligence & Inversion</span>
          </button>

          <button
            onClick={() => setActiveTab('agents')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'agents'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Bot className="w-4 h-4 text-teal-400" />
            <span>Specialist Agents Audit Logs</span>
          </button>
        </div>

        {/* Tab 1: Air Health & Safety Content */}
        {activeTab === 'health' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Urgent Alert Banner with Human Authorization Gate */}
            <div className={`p-6 rounded-2xl border transition-all ${
              alertAuthorized
                ? 'bg-emerald-50/80 border-emerald-200 text-emerald-950'
                : 'bg-amber-50/90 border-amber-300 text-amber-950 shadow-xs'
            }`}>
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${
                      alertAuthorized ? 'bg-emerald-200 text-emerald-800' : 'bg-amber-200 text-amber-900'
                    }`}>
                      {alertAuthorized ? 'Dispatched & Logged' : 'Action Required: Human Authorization Gate'}
                    </span>
                    <span className="text-xs text-slate-500">Alert Ref #ALT-FAC-2026-992</span>
                  </div>
                  <h3 className="text-lg font-bold">
                    Kendriya Vidyalaya School · Outdoor Exposure Advisory
                  </h3>
                  <p className="text-xs text-slate-700 max-w-3xl leading-relaxed">
                    Station PM2.5 (184 µg/m³) has exceeded the school's configured threshold (150 µg/m³). Inversion forecast indicates high stagnation for 3 hours. 
                    Recommended protocol: Relocate outdoor PE indoors and switch ventilation to recirculated HEPA filtration.
                  </p>
                </div>

                <div className="shrink-0 flex items-center gap-2">
                  <button
                    onClick={() => setAlertAuthorized(!alertAuthorized)}
                    className={`px-5 py-2.5 rounded-xl text-xs font-bold shadow-xs transition-all flex items-center gap-2 cursor-pointer ${
                      alertAuthorized
                        ? 'bg-emerald-700 text-white hover:bg-emerald-800'
                        : 'bg-amber-600 text-white hover:bg-amber-700'
                    }`}
                  >
                    {alertAuthorized ? (
                      <>
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Advisory Dispatched ✓</span>
                      </>
                    ) : (
                      <>
                        <ShieldAlert className="w-4 h-4" />
                        <span>Authorize & Dispatch Alert</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Registered Facilities Table */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs">
              <div className="p-5 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900">Ward 04 Sensitive Facilities</h3>
                  <p className="text-xs text-slate-500">Continuous location-relevant exposure calculations</p>
                </div>
                <span className="text-xs font-semibold text-slate-500">5 Registered Entities</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase font-semibold">
                      <th className="py-3 px-5">Facility Name</th>
                      <th className="py-3 px-5">Category</th>
                      <th className="py-3 px-5">Outdoor PM2.5</th>
                      <th className="py-3 px-5">Configured Threshold</th>
                      <th className="py-3 px-5">Advisory Status</th>
                      <th className="py-3 px-5 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    <tr className="hover:bg-slate-50/70">
                      <td className="py-3.5 px-5 font-bold text-slate-900">Kendriya Vidyalaya School</td>
                      <td className="py-3.5 px-5">Primary & Secondary School</td>
                      <td className="py-3.5 px-5 font-semibold text-rose-600">184 µg/m³</td>
                      <td className="py-3.5 px-5 text-slate-500">150 µg/m³</td>
                      <td className="py-3.5 px-5">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          alertAuthorized ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                        }`}>
                          {alertAuthorized ? 'Notified (Indoor Mode)' : 'Breach Flagged'}
                        </span>
                      </td>
                      <td className="py-3.5 px-5 text-right">
                        <span className="text-emerald-700 font-semibold cursor-pointer hover:underline">View Log</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/70">
                      <td className="py-3.5 px-5 font-bold text-slate-900">City Civil Maternity Hospital</td>
                      <td className="py-3.5 px-5">Healthcare / ICU Zone</td>
                      <td className="py-3.5 px-5 font-semibold text-rose-600">178 µg/m³</td>
                      <td className="py-3.5 px-5 text-slate-500">100 µg/m³</td>
                      <td className="py-3.5 px-5">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                          Air Filtration Verified
                        </span>
                      </td>
                      <td className="py-3.5 px-5 text-right">
                        <span className="text-emerald-700 font-semibold cursor-pointer hover:underline">View Log</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/70">
                      <td className="py-3.5 px-5 font-bold text-slate-900">Sunshine Elders Daycare</td>
                      <td className="py-3.5 px-5">Vulnerable Seniors</td>
                      <td className="py-3.5 px-5 font-semibold text-amber-600">142 µg/m³</td>
                      <td className="py-3.5 px-5 text-slate-500">120 µg/m³</td>
                      <td className="py-3.5 px-5">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700">
                          Precautionary Review
                        </span>
                      </td>
                      <td className="py-3.5 px-5 text-right">
                        <span className="text-emerald-700 font-semibold cursor-pointer hover:underline">View Log</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Urban Greening & Tree Intelligence */}
        {activeTab === 'greening' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Left Column: Tree Passport Showcase */}
              <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-xs">
                      <TreePine className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900">Tree Passport: #GP-TREE-DEL-0419</h3>
                      <p className="text-[11px] text-slate-500">Azadirachta indica (Neem) · Ward 4 School Verge</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                    Healthy / Low Stress
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 mb-6 text-xs">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-slate-500 block mb-1">GPS Coordinates</span>
                    <span className="font-mono font-bold text-slate-900">28.6139° N, 77.2090° E</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-slate-500 block mb-1">Soil Suitability</span>
                    <span className="font-bold text-emerald-700">pH 7.1 · Optimal</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-slate-500 block mb-1">Canopy Projection</span>
                    <span className="font-bold text-slate-900">14.2 m² @ 3 Yrs</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-slate-500 block mb-1">Root Clearance</span>
                    <span className="font-bold text-emerald-700">Utilities Clear ✓</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-slate-500 block mb-1">Water Access</span>
                    <span className="font-bold text-slate-900">Recycled Line Zone B</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-slate-500 block mb-1">Survival Probability</span>
                    <span className="font-bold text-teal-700">88% (Validated Cohort)</span>
                  </div>
                </div>

                <div className="p-4 bg-teal-50/60 rounded-xl border border-teal-200 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-teal-950 block">Tree Guardian Maintenance Schedule</span>
                    <span className="text-teal-800 text-[11px]">Next routine check scheduled for Oct 14, 2026</span>
                  </div>
                  <button
                    onClick={() => setTreeWatered(!treeWatered)}
                    className={`px-3.5 py-2 rounded-lg font-bold text-xs transition-colors cursor-pointer ${
                      treeWatered
                        ? 'bg-emerald-600 text-white'
                        : 'bg-teal-700 text-white hover:bg-teal-800'
                    }`}
                  >
                    {treeWatered ? 'Watering Logged in MongoDB ✓' : 'Mark Watering Complete'}
                  </button>
                </div>
              </div>

              {/* Right Column: GeoScout Candidate Parcel Plan */}
              <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                    <h3 className="text-base font-bold text-slate-900">GeoScout Greening Proposal</h3>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-2 py-0.5 rounded">
                      GIS Optimized
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                    Satellite and GIS analysis identified a <strong>420-meter linear vacant verge</strong> along School Perimeter Zone B with elevated surface temperature (+3.8°C above ward baseline).
                  </p>

                  <div className="space-y-2.5 text-xs">
                    <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-lg">
                      <span className="text-slate-600">Recommended Species</span>
                      <span className="font-bold text-slate-900">45 Azadirachta indica (Neem)</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-lg">
                      <span className="text-slate-600">Spacing Constraint</span>
                      <span className="font-bold text-slate-900">8.5m Interval (Optimal canopy)</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-lg">
                      <span className="text-slate-600">Budget Estimate</span>
                      <span className="font-bold text-slate-900">₹42,500 (Saplings + 1yr care)</span>
                    </div>
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-100">
                  <button
                    onClick={() => setGreeningApproved(!greeningApproved)}
                    className={`w-full py-2.5 rounded-xl font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer ${
                      greeningApproved
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}
                  >
                    {greeningApproved ? 'Work Order Approved & Registered ✓' : 'Approve Greening Work Order'}
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Tab 3: Pollution Intelligence */}
        {activeTab === 'pollution' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-2xs">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded">
                    Episode Diagnosis · INV-EPISODE-104
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 mt-1">
                    Morning Peak Thermal Inversion & Plume Transport
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-slate-500 block">Overall Confidence</span>
                  <span className="text-base font-extrabold text-emerald-700">78% (Evidence-backed)</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                  <span className="text-xs text-slate-500 font-medium block mb-1">Arterial Freight & Traffic</span>
                  <div className="text-2xl font-black text-slate-900 mb-1">~45%</div>
                  <p className="text-[11px] text-teal-700 font-semibold">High confidence · Congestion loop counters verified</p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                  <span className="text-xs text-slate-500 font-medium block mb-1">Regional Biomass / Burning</span>
                  <div className="text-2xl font-black text-slate-900 mb-1">~35%</div>
                  <p className="text-[11px] text-amber-700 font-semibold">Medium confidence · Upwind trajectory aligns</p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                  <span className="text-xs text-slate-500 font-medium block mb-1">Local Road Dust & Construction</span>
                  <div className="text-2xl font-black text-slate-900 mb-1">~20%</div>
                  <p className="text-[11px] text-teal-700 font-semibold">Ground inspection verified at Sector 4</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-100/70 border border-slate-200 text-xs text-slate-600 space-y-1">
                <p><strong>Atmospheric Boundary Trap:</strong> Surface inversion layer trapped at 220 meters prevents vertical dispersal until noon solar heating.</p>
                <p><strong>Missing Data Flag:</strong> Sector 9 VOC analyzer is currently offline; satellite optical depth applied with uncertainty bounds.</p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Specialist Agents Audit Logs */}
        {activeTab === 'agents' && (
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs animate-in fade-in duration-200">
            <div className="p-5 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900">Bounded Multi-Agent Execution Log</h3>
                <p className="text-xs text-slate-500">Immutable mission state records stored in MongoDB</p>
              </div>
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                All Guardrails Enforced ✓
              </span>
            </div>

            <div className="divide-y divide-slate-100 text-xs">
              <div className="p-4 flex items-start gap-3.5 hover:bg-slate-50/60">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs shrink-0">
                  CO
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="font-bold text-slate-900">Coordinator Agent</span>
                    <span className="text-slate-400 font-mono text-[11px]">Just now</span>
                  </div>
                  <p className="text-slate-600">Delegated exposure verification to Exposure & Alert Agent. Received human signoff gate acknowledgment.</p>
                </div>
              </div>

              <div className="p-4 flex items-start gap-3.5 hover:bg-slate-50/60">
                <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-800 flex items-center justify-center font-bold text-xs shrink-0">
                  PI
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="font-bold text-slate-900">Pollution Investigation Agent</span>
                    <span className="text-slate-400 font-mono text-[11px]">12m ago</span>
                  </div>
                  <p className="text-slate-600">Computed wind vector dispersion model. Tagged freight emissions at 45% with explicit caveat flag.</p>
                </div>
              </div>

              <div className="p-4 flex items-start gap-3.5 hover:bg-slate-50/60">
                <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-xs shrink-0">
                  GS
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="font-bold text-slate-900">GeoScout / Greening Agent</span>
                    <span className="text-slate-400 font-mono text-[11px]">34m ago</span>
                  </div>
                  <p className="text-slate-600">Shortlisted 420m road verge. Validated neutral soil pH 7.1 and matched 45 Neem saplings within budget limits.</p>
                </div>
              </div>

              <div className="p-4 flex items-start gap-3.5 hover:bg-slate-50/60">
                <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-800 flex items-center justify-center font-bold text-xs shrink-0">
                  IA
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="font-bold text-slate-900">Impact Auditor Agent</span>
                    <span className="text-slate-400 font-mono text-[11px]">1h ago</span>
                  </div>
                  <p className="text-slate-600">Reconciled survival cohort records. Confirmed 88.4% survival rate across 1,240 registered tree passports.</p>
                </div>
              </div>
            </div>
          </div>
        )}

      </main>

    </div>
  );
}
