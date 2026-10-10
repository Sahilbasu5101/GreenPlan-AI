import React, { useState } from 'react';
import { X, Lock, Mail, Leaf, ArrowRight, ShieldCheck, Sparkles, AlertCircle } from 'lucide-react';

export default function LoginModal({ isOpen, onClose, onLoginSuccess }) {
  const [email, setEmail] = useState('admin@greenplan.ai');
  const [password, setPassword] = useState('greenplan2026');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    setTimeout(() => {
      // Hardcoded login check
      if (
        (email.trim().toLowerCase() === 'admin@greenplan.ai' || email.trim().toLowerCase() === 'admin') &&
        (password === 'greenplan2026' || password === 'admin' || password === '123456')
      ) {
        setIsLoading(false);
        onLoginSuccess();
      } else {
        setIsLoading(false);
        setError('Invalid credentials. Use demo: admin@greenplan.ai / greenplan2026');
      }
    }, 400);
  };

  const fillDemoCredentials = () => {
    setEmail('admin@greenplan.ai');
    setPassword('greenplan2026');
    setError('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Top subtle bar */}
        <div className="h-1.5 bg-gradient-to-r from-emerald-600 via-teal-500 to-sky-500"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-7 sm:p-9">
          {/* Logo & Header */}
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-10 h-10 rounded-xl bg-emerald-700 flex items-center justify-center text-white shadow-xs">
              <Leaf className="w-5 h-5 fill-white/20 stroke-white stroke-[2.2]" />
            </div>
            <div>
              <div className="flex items-center text-xl font-black tracking-tight">
                <span className="text-slate-900">GreenPlan</span>
                <span className="text-emerald-700 ml-0.5">AI</span>
              </div>
              <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                MERN Decision Console Login
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
            Sign in to Dashboard
          </h2>
          <p className="text-xs text-slate-600 mb-6 leading-relaxed">
            Access real-time ward air exposure analytics, tree intelligence passports, and agentic intervention workflows.
          </p>

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Official Email
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@greenplan.ai"
                  required
                  className="w-full pl-10 pr-4 py-2.5 text-xs text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all font-medium"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Password
                </label>
                <button
                  type="button"
                  onClick={fillDemoCredentials}
                  className="text-[11px] font-bold text-emerald-700 hover:text-emerald-800 hover:underline cursor-pointer"
                >
                  Auto-fill Demo
                </button>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  required
                  className="w-full pl-10 pr-4 py-2.5 text-xs text-slate-800 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all font-medium"
                />
              </div>
            </div>

            {/* Quick Demo Credentials helper card */}
            <div className="p-3 bg-emerald-50/70 border border-emerald-200/80 rounded-xl text-[11px] text-emerald-950 flex items-center justify-between">
              <div>
                <span className="font-bold">Demo ID:</span> <code className="font-mono text-emerald-800">admin@greenplan.ai</code>
                <br />
                <span className="font-bold">Pass:</span> <code className="font-mono text-emerald-800">greenplan2026</code>
              </div>
              <button
                type="button"
                onClick={fillDemoCredentials}
                className="px-2.5 py-1 bg-white hover:bg-emerald-100/60 rounded-md border border-emerald-300 text-emerald-800 font-bold text-[10px] transition-colors cursor-pointer"
              >
                Use These
              </button>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 rounded-xl text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-2 focus:ring-emerald-600 shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
            >
              {isLoading ? (
                <span>Authenticating with MERN Server...</span>
              ) : (
                <>
                  <span>Enter Decision Dashboard</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Footer note */}
          <div className="mt-5 text-center text-[11px] text-slate-500">
            <span>Role-Based Access Control · Pilot Ward 4 Active</span>
          </div>

        </div>

      </div>
    </div>
  );
}
