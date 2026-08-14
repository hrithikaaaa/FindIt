import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  MapPin,
  Calendar,
  Layers,
  FileCheck,
  Percent
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { calculateMatchScore } from '../../utils/matchingEngine';

export const PossibleMatchModal: React.FC = () => {
  const {
    matchModalOpen,
    closeMatchModal,
    selectedMatchPair,
    openClaimModal,
    setSelectedItem,
    language,
    t,
    getCategoryLabel,
  } = useApp();

  if (!matchModalOpen || !selectedMatchPair) return null;

  const { lostItem, foundItem } = selectedMatchPair;
  const matchResult = calculateMatchScore(lostItem, foundItem);
  const { overallScore, breakdown, commonKeywords } = matchResult;

  const handleStartVerification = () => {
    closeMatchModal();
    openClaimModal(foundItem);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-4xl w-full max-h-[92vh] overflow-y-auto flex flex-col"
        >
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-950 text-white px-6 py-6 rounded-t-3xl border-b border-slate-700/60 relative">
            <button
              onClick={closeMatchModal}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pr-10">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{language === 'kn' ? 'ಸ್ಮಾರ್ಟ್ ಮ್ಯಾಚಿಂಗ್ ಸಿಸ್ಟಮ್' : 'Smart Matching System'}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                  🔎 {t.matchModalTitle}
                </h2>
                <p className="text-xs sm:text-sm text-slate-300">
                  {t.matchModalSubtitle}
                </p>
              </div>

              {/* Match Score Meter */}
              <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/20 text-center flex-shrink-0">
                <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-300 block">
                  {t.matchConfidence}
                </span>
                <span className="text-3xl font-black text-white font-heading">
                  {overallScore}%
                </span>
              </div>
            </div>
          </div>

          {/* Comparison Body */}
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Side by Side Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Lost Item Column */}
              <div className="rounded-2xl border-2 border-rose-200/80 bg-rose-50/20 p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-rose-600 text-white">
                    🔴 {t.badgeLost}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {language === 'kn' ? 'ವರದಿದಾರರು:' : 'Reported by'} {lostItem.reportedBy.name}
                  </span>
                </div>

                <div className="aspect-[16/10] rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                  <img
                    src={lostItem.images[0]}
                    alt={lostItem.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 font-heading">{lostItem.title}</h3>
                  <p className="text-xs text-slate-600 mt-1 line-clamp-2">{lostItem.description}</p>
                </div>

                <div className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-rose-100">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{lostItem.location.name}, {lostItem.location.city}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{t.itemDate}: {lostItem.date} {lostItem.time ? `(${lostItem.time})` : ''}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-slate-400" />
                    <span>{t.filterCategory}: {getCategoryLabel(lostItem.category)}</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    closeMatchModal();
                    setSelectedItem(lostItem);
                  }}
                  className="w-full py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-800 text-xs font-bold border border-slate-200 transition-colors"
                >
                  {language === 'kn' ? 'ಸಂಪೂರ್ಣ ಕಳೆದುಹೋದ ಪೋಸ್ಟ್ ವೀಕ್ಷಿಸಿ' : 'View Full Lost Listing'}
                </button>
              </div>

              {/* Found Item Column */}
              <div className="rounded-2xl border-2 border-emerald-200/80 bg-emerald-50/20 p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-600 text-white">
                    🟢 {t.badgeFound}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {language === 'kn' ? 'ಹುಡುಕಿದವರು:' : 'Found by'} {foundItem.reportedBy.name}
                  </span>
                </div>

                <div className="aspect-[16/10] rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                  <img
                    src={foundItem.images[0]}
                    alt={foundItem.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 font-heading">{foundItem.title}</h3>
                  <p className="text-xs text-slate-600 mt-1 line-clamp-2">{foundItem.description}</p>
                </div>

                <div className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-emerald-100">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{foundItem.location.name}, {foundItem.location.city}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{t.itemDate}: {foundItem.date} {foundItem.time ? `(${foundItem.time})` : ''}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-slate-400" />
                    <span>{t.filterCategory}: {getCategoryLabel(foundItem.category)}</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    closeMatchModal();
                    setSelectedItem(foundItem);
                  }}
                  className="w-full py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-800 text-xs font-bold border border-slate-200 transition-colors"
                >
                  {language === 'kn' ? 'ಸಂಪೂರ್ಣ ದೊರೆತ ಪೋಸ್ಟ್ ವೀಕ್ಷಿಸಿ' : 'View Full Found Listing'}
                </button>
              </div>

            </div>

            {/* Comparison Factors Breakdown */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                {language === 'kn' ? 'ಹೋಲಿಕೆ ಅಂಶಗಳ ವಿಶ್ಲೇಷಣೆ' : 'Similarity Breakdown'}
              </h4>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-white p-3 rounded-xl border border-slate-200/80">
                  <span className="text-[11px] text-slate-500 block">{t.filterCategory}</span>
                  <div className="flex items-center gap-1 mt-1 font-bold text-xs text-slate-900">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>{language === 'kn' ? 'ನಿಖರ ಹೊಂದಾಣಿಕೆ' : 'Exact Match'}</span>
                  </div>
                </div>

                <div className="bg-white p-3 rounded-xl border border-slate-200/80">
                  <span className="text-[11px] text-slate-500 block">{t.itemLocation}</span>
                  <div className="flex items-center gap-1 mt-1 font-bold text-xs text-slate-900">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>{lostItem.location.city} ({breakdown.locationProximityScore}/20)</span>
                  </div>
                </div>

                <div className="bg-white p-3 rounded-xl border border-slate-200/80">
                  <span className="text-[11px] text-slate-500 block">{t.itemDate}</span>
                  <div className="flex items-center gap-1 mt-1 font-bold text-xs text-slate-900">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>{language === 'kn' ? 'ಸಮೀಪದ ದಿನ' : 'Close Window'}</span>
                  </div>
                </div>

                <div className="bg-white p-3 rounded-xl border border-slate-200/80">
                  <span className="text-[11px] text-slate-500 block">{language === 'kn' ? 'ಪದಗಳ ಹೊಂದಾಣಿಕೆ' : 'Text Overlap'}</span>
                  <div className="flex items-center gap-1 mt-1 font-bold text-xs text-slate-900">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>{breakdown.titleSimilarity} {language === 'kn' ? 'ಅಂಕಗಳು' : 'Pts'}</span>
                  </div>
                </div>
              </div>

              {/* Matched Keywords */}
              {commonKeywords.length > 0 && (
                <div className="pt-2 flex flex-wrap items-center gap-1.5 text-xs">
                  <span className="text-slate-500 font-medium">{language === 'kn' ? 'ಹೊಂದಾಣಿಕೆಯಾದ ಪದಗಳು:' : 'Common terms:'}</span>
                  {commonKeywords.map((word) => (
                    <span
                      key={word}
                      className="px-2.5 py-0.5 rounded-md bg-emerald-100/70 text-emerald-800 font-semibold text-[11px]"
                    >
                      {word}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Verification Notice & Primary Action */}
            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div className="text-xs text-slate-700 leading-relaxed">
                <p className="font-bold text-amber-900 mb-0.5">{language === 'kn' ? 'ಪರಿಶೀಲನೆ ಅಗತ್ಯವಿದೆ' : 'Verification Required'}</p>
                {language === 'kn' ? 'FindIt ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಮಾಲೀಕತ್ವವನ್ನು ದೃಢೀಕರಿಸುವುದಿಲ್ಲ. ಸಮುದಾಯ ಸದಸ್ಯರನ್ನು ರಕ್ಷಿಸಲು, ದಯವಿಟ್ಟು ನಿಖರ ಪುರಾವೆಗಳೊಂದಿಗೆ ಪರಿಶೀಲನೆ ವಿನಂತಿಯನ್ನು ಕಳುಹಿಸಿ.' : 'FindIt does not automatically assume ownership. To protect community members, please submit a formal verification request with specific proof details.'}
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-end gap-3">
              <button
                onClick={closeMatchModal}
                className="w-full sm:w-auto px-5 py-3 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 font-semibold text-xs transition-colors cursor-pointer"
              >
                {language === 'kn' ? 'ಮುಚ್ಚಿ' : 'Dismiss Comparison'}
              </button>

              <button
                id="btn-request-match-verification"
                onClick={handleStartVerification}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-200" />
                <span>{language === 'kn' ? 'ಮಾಲೀಕತ್ವ ಪರಿಶೀಲನೆ ಕೋರಿ' : 'Request Ownership Verification'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
