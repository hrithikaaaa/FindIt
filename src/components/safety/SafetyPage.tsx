import React from 'react';
import { motion } from 'motion/react';
import {
  ShieldCheck,
  Lock,
  MapPin,
  Clock,
  Phone,
  AlertTriangle,
  CheckCircle2,
  HelpCircle,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const SafetyPage: React.FC = () => {
  const { openReportWizard } = useApp();

  const officialDesks = [
    {
      name: 'Main Campus Security & Lost-Desk',
      location: 'Ground Floor, Administrative Block Gate #1',
      hours: 'Open 24/7 (Mon - Sun)',
      phone: '+91 (824) 227-7222',
      badge: 'Official Campus Hub',
    },
    {
      name: 'Central Library Help Desk',
      location: '2nd Floor Information Counter',
      hours: '8:00 AM – 10:00 PM',
      phone: '+91 (824) 227-7345',
      badge: 'Academic Zone Hub',
    },
    {
      name: 'Student Activities Center (SAC)',
      location: 'Room 104, Recreation Complex',
      hours: '9:00 AM – 8:00 PM',
      phone: '+91 (824) 227-7890',
      badge: 'Student Union Hub',
    },
  ];

  return (
    <div id="safety-page-container" className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Community Trust & Guidelines</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Safety & Verification Guidelines
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            FindIt was built to make reconnecting with lost belongings effortless, secure, and stress-free. Follow these core safety standards.
          </p>
        </div>

        {/* 4 Guidelines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-heading">
              1. Keep Contact Information In-App
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Never share bank account details, UPI PINs, or national ID passwords. Use FindIt’s encrypted internal messaging to negotiate details without releasing private phone numbers.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-heading">
              2. Always Meet in Well-Lit Public Areas
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              When scheduling an in-person handoff, meet in broad daylight at high-traffic hubs like the Library Reception, Campus Cafeteria, or City Security Desks.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-heading">
              3. Verify Proof Before Releasing Property
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Finders should request hidden identifiers: unlock screen test for phones, lock code on luggage, or description of items in deep zippered pockets.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-heading">
              4. Watch for Suspicious Demands
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Beware of anyone demanding "shipping fees" upfront or wire transfers before showing proof of the item. Report suspicious users immediately using the Flag button.
            </p>
          </div>

        </div>

        {/* Verified Campus Desks Directory */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 space-y-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-emerald-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Official Physical Handoff Points</span>
            </div>
            <h2 className="text-2xl font-extrabold text-white font-heading">
              Designated Lost & Found Campus Desks
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Prefer an intermediary? You can deposit any found item with verified staff at these registered counters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            {officialDesks.map((desk) => (
              <div
                key={desk.name}
                className="bg-slate-800/80 rounded-2xl p-5 border border-slate-700/80 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold text-emerald-300 bg-emerald-500/20 px-2.5 py-0.5 rounded-full inline-block">
                    {desk.badge}
                  </span>
                  <h4 className="text-sm font-bold text-white">{desk.name}</h4>
                  <p className="text-xs text-slate-300 flex items-center gap-1.5 pt-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                    <span>{desk.location}</span>
                  </p>
                  <p className="text-xs text-slate-300 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                    <span>{desk.hours}</span>
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-700/60 text-xs text-emerald-400 font-semibold flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5" />
                  <span>{desk.phone}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
