import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Search,
  Sparkles,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Users,
  Compass,
  Zap,
  Tag
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const HeroSection: React.FC = () => {
  const { openReportWizard, setCurrentView, setFilters, items, openMatchModal, language, t } = useApp();
  const [quickQuery, setQuickQuery] = useState('');

  const handleQuickSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setFilters((prev) => ({ ...prev, searchQuery: quickQuery }));
    setCurrentView('explore');
  };

  // Find sample backpack items for the floating card match
  const backpackLost = items.find((i) => i.id === 'item_02') || items[1];
  const backpackFound = items.find((i) => i.id === 'item_01') || items[0];

  const popularTags = language === 'kn'
    ? ['ಕಪ್ಪು ಬ್ಯಾಗ್', 'ಏರ್‌ಪಾಡ್ಸ್', 'ಪರ್ಸ್', 'ಕೀಗಳು', 'ಸಹ್ಯಾದ್ರಿ ಕಾಲೇಜು', 'ಮಂಗಳೂರು']
    : ['Black Backpack', 'AirPods Pro', 'Brown Wallet', 'Car Keys', 'Sahyadri College'];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white pt-12 pb-20 sm:pb-28">
      
      {/* Background Subtle Gradient & Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-emerald-600/30 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-sky-600/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Subtitle, CTAs & Quick Search */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Top Pill / Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-semibold backdrop-blur-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t.heroBadge}</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading leading-[1.15] text-white"
            >
              {t.heroTitle} <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400 bg-clip-text text-transparent">
                {t.heroSubtitle}
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal"
            >
              {t.heroDesc}
            </motion.p>

            {/* Two Prominent CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-1"
            >
              <button
                id="hero-cta-lost-btn"
                onClick={() => openReportWizard('lost')}
                className="group px-6 py-3.5 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-bold text-sm sm:text-base shadow-lg shadow-rose-900/30 hover:shadow-rose-800/50 transition-all flex items-center gap-2.5 cursor-pointer transform hover:-translate-y-0.5"
              >
                <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                <span>{t.heroReportLost}</span>
                <ArrowRight className="w-4 h-4 text-rose-200 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-cta-found-btn"
                onClick={() => openReportWizard('found')}
                className="group px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-950/40 hover:shadow-emerald-800/50 transition-all flex items-center gap-2.5 cursor-pointer transform hover:-translate-y-0.5"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-100" />
                <span>{t.heroReportFound}</span>
                <ArrowRight className="w-4 h-4 text-emerald-200 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            {/* Quick Search Bar */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              onSubmit={handleQuickSearch}
              className="relative max-w-xl"
            >
              <div className="flex items-center bg-slate-800/90 backdrop-blur-md rounded-2xl border border-slate-700/80 p-1.5 shadow-xl">
                <div className="pl-3.5 text-slate-400">
                  <Search className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  value={quickQuery}
                  onChange={(e) => setQuickQuery(e.target.value)}
                  placeholder={t.heroSearchPlaceholder}
                  className="w-full bg-transparent px-3 py-2.5 text-xs sm:text-sm text-white placeholder:text-slate-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-slate-700 hover:bg-slate-600 text-white font-semibold text-xs sm:text-sm px-4 py-2.5 rounded-xl transition-colors flex items-center gap-1.5 flex-shrink-0 cursor-pointer"
                >
                  <span>{t.heroSearchBtn}</span>
                </button>
              </div>

              {/* Popular Search Tags */}
              <div className="flex flex-wrap items-center gap-1.5 pt-3 text-xs text-slate-400">
                <span className="text-[11px] font-semibold text-slate-400 flex items-center gap-1">
                  <Tag className="w-3 h-3 text-slate-400" /> {t.heroPopular}:
                </span>
                {popularTags.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => {
                      setFilters((prev) => ({ ...prev, searchQuery: tag }));
                      setCurrentView('explore');
                    }}
                    className="px-2.5 py-0.5 rounded-full bg-slate-800/70 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/50 transition-colors text-[11px]"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </motion.form>

            {/* Small Trust Indicator Below */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-2 flex items-center gap-3 text-xs text-slate-400"
            >
              <div className="flex -space-x-2">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80"
                  alt="Member"
                  className="w-7 h-7 rounded-full border-2 border-slate-900 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&auto=format&fit=crop&q=80"
                  alt="Member"
                  className="w-7 h-7 rounded-full border-2 border-slate-900 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80"
                  alt="Member"
                  className="w-7 h-7 rounded-full border-2 border-slate-900 object-cover"
                />
              </div>
              <span className="font-medium text-slate-300">
                {language === 'kn'
                  ? '“ಕಳೆದುಹೋದ ವಸ್ತುಗಳನ್ನು ಮತ್ತೆ ಪಡೆದುಕೊಳ್ಳಲು ಸಮುದಾಯದ ಸಹಯೋಗ.”'
                  : '“Helping communities reconnect with lost belongings.”'}
              </span>
            </motion.div>
          </div>

          {/* Right Column: High-Impact Visual Hero & Floating UI Card */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Main Visual Image Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-700/60 bg-slate-800 group">
                <img
                  src="https://images.unsplash.com/photo-1577495508048-b635879837f1?w=900&auto=format&fit=crop&q=80"
                  alt="Community members reuniting with lost belongings"
                  className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/90 text-white text-[11px] font-bold uppercase tracking-wider mb-1.5">
                    <Sparkles className="w-3 h-3" /> {language === 'kn' ? 'ಇಂದು ಮರಳಿ ಸಿಕ್ಕಿದೆ' : 'Reunited Today'}
                  </span>
                  <p className="text-white text-sm font-semibold">
                    {language === 'kn'
                      ? '“ಕೇವಲ 3 ಗಂಟೆಗಳಲ್ಲಿ ವಿದ್ಯಾರ್ಥಿಯ ಲ್ಯಾಪ್‌ಟಾಪ್ ಬ್ಯಾಗ್ ಸುರಕ್ಷಿತವಾಗಿ ಮರಳಿತು!”'
                      : '“Reconnected a student with their laptop backpack in under 3 hours!”'}
                  </p>
                </div>
              </div>

              {/* Floating UI Card (As requested in prompt) */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: -10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-6 -left-6 sm:-left-10 bg-white text-slate-900 rounded-2xl p-4 shadow-2xl border border-slate-100 max-w-xs sm:max-w-sm w-full z-20 backdrop-blur-xl"
              >
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 overflow-hidden flex-shrink-0 relative border border-slate-200">
                    <img
                      src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&auto=format&fit=crop&q=80"
                      alt="Backpack Found"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-0 inset-x-0 bg-emerald-600 text-white text-[8px] font-bold text-center uppercase py-0.5">
                      {language === 'kn' ? 'ದೊರೆತಿದೆ' : 'FOUND'}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                        🎒 {language === 'kn' ? 'ಕಪ್ಪು ಬ್ಯಾಗ್ ದೊರೆತಿದೆ' : 'Black Backpack Found'}
                      </h4>
                      <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0 animate-pulse">
                        87% Match
                      </span>
                    </div>

                    <div className="mt-1 space-y-0.5 text-[11px] text-slate-500">
                      <p className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-400 flex-shrink-0" />
                        <span className="truncate">{language === 'kn' ? 'ಸಹ್ಯಾದ್ರಿ ಕಾಲೇಜು ಲೈಬ್ರರಿ ಬಳಿ' : 'Near Sahyadri College Library'}</span>
                      </p>
                      <p className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-400 flex-shrink-0" />
                        <span>{language === 'kn' ? '2 ಗಂಟೆಗಳ ಹಿಂದೆ' : '2 hours ago'}</span>
                      </p>
                    </div>

                    <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                        {language === 'kn' ? 'ಹೊಂದಾಣಿಕೆ ಸಾಧ್ಯತೆ' : 'Possible Match'}
                      </span>
                      <button
                        onClick={() => {
                          if (backpackLost && backpackFound) {
                            openMatchModal(backpackLost, backpackFound);
                          }
                        }}
                        className="text-[11px] font-bold text-slate-900 hover:text-emerald-600 flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        <span>{language === 'kn' ? 'ಹೋಲಿಕೆ ನೋಡಿ' : 'Compare Details'}</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Shield Status Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -top-4 -right-4 bg-slate-900/90 text-white px-3.5 py-2 rounded-xl shadow-xl border border-slate-700/80 flex items-center gap-2 backdrop-blur-md"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">{t.secSafeHandoffTitle}</p>
                  <p className="text-xs font-bold text-white">{language === 'kn' ? 'ಖಾಸಗಿ ಕ್ಲೈಮ್' : 'Private Claims'}</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

