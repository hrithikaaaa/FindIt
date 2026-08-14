import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  MapPin,
  Calendar,
  Clock,
  Sparkles,
  ShieldCheck,
  Share2,
  Flag,
  MessageSquare,
  Gift,
  CheckCircle2,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  UserCheck,
  AlertTriangle,
  Lock,
  Layers
} from 'lucide-react';
import { Item } from '../../types';
import { useApp } from '../../context/AppContext';
import { findMatchesForItem } from '../../utils/matchingEngine';

export const ItemDetailModal: React.FC = () => {
  const {
    selectedItem,
    setSelectedItem,
    openClaimModal,
    openMatchModal,
    openReportPostModal,
    markItemReunited,
    currentUser,
    items,
    addToast,
    startOrOpenConversation,
    language,
    t,
    getCategoryLabel,
  } = useApp();

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!selectedItem) return null;

  const isOwner = selectedItem.reportedBy.id === currentUser.id;
  const isFound = selectedItem.type === 'found';
  const isReunited = selectedItem.status === 'reunited';

  // Find system matches
  const itemMatches = findMatchesForItem(selectedItem, items);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    addToast('success', language === 'kn' ? 'ಲಿಂಕ್ ನಕಲಿಸಲಾಗಿದೆ!' : 'Link Copied!', language === 'kn' ? 'ಹಂಚಿಕೊಳ್ಳಬಹುದಾದ ಲಿಂಕ್ ನಕಲಿಸಲಾಗಿದೆ.' : 'Shareable link copied to clipboard.');
  };

  const handleContactFinder = () => {
    startOrOpenConversation(selectedItem.reportedBy, selectedItem);
  };

  const formatDate = (dateStr: string) => {
    try {
      const d = new Date(dateStr);
      return d.toLocaleDateString(language === 'kn' ? 'kn-IN' : 'en-US', { weekday: 'short', month: 'long', day: 'numeric', year: 'numeric' });
    } catch {
      return dateStr;
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-4xl w-full max-h-[92vh] overflow-y-auto flex flex-col"
        >
          {/* Top Bar with Status and Actions */}
          <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-100 flex items-center justify-between z-20">
            <div className="flex items-center gap-3">
              {isReunited ? (
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-600 text-white shadow-xs flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" /> {t.statusReunited}
                </span>
              ) : isFound ? (
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-600 text-white shadow-xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-200 animate-ping" />
                  {t.badgeFound}
                </span>
              ) : (
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-rose-600 text-white shadow-xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-200 animate-ping" />
                  {t.badgeLost}
                </span>
              )}
              <span className="text-xs text-slate-500 font-medium">
                Ref #{selectedItem.id.replace('item_', '')}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                title="Share this listing"
                aria-label="Share"
              >
                <Share2 className="w-4 h-4" />
              </button>

              <button
                onClick={() => openReportPostModal(selectedItem)}
                className="p-2 rounded-xl text-slate-500 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                title="Report post"
                aria-label="Report"
              >
                <Flag className="w-4 h-4" />
              </button>

              <button
                onClick={() => setSelectedItem(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Content Grid */}
          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column: Image Gallery */}
            <div className="lg:col-span-6 space-y-4">
              
              {/* Main Image Display */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xs">
                <img
                  src={selectedItem.images[activeImageIndex] || selectedItem.images[0]}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />

                {/* Left/Right Navigation if multiple images */}
                {selectedItem.images.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        setActiveImageIndex((prev) =>
                          prev === 0 ? selectedItem.images.length - 1 : prev - 1
                        )
                      }
                      className="absolute left-2.5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white backdrop-blur-xs transition-colors"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() =>
                        setActiveImageIndex((prev) =>
                          prev === selectedItem.images.length - 1 ? 0 : prev + 1
                        )
                      }
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white backdrop-blur-xs transition-colors"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </>
                )}

                {/* Reward Banner */}
                {selectedItem.reward && !isReunited && (
                  <div className="absolute bottom-3 left-3 bg-amber-500 text-slate-950 font-bold text-xs px-3 py-1.5 rounded-xl shadow-lg flex items-center gap-1.5">
                    <Gift className="w-4 h-4" />
                    <span>{language === 'kn' ? 'ಬಹಮಾನ:' : 'Offered:'} {selectedItem.reward}</span>
                  </div>
                )}
              </div>

              {/* Thumbnails row */}
              {selectedItem.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {selectedItem.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-20 h-16 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all cursor-pointer ${
                        activeImageIndex === idx
                          ? 'border-emerald-500 ring-2 ring-emerald-500/20'
                          : 'border-slate-200 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="thumb" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Safe Custody / Storage Notice */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>{language === 'kn' ? 'ಸುರಕ್ಷಿತ ಪರಿಶೀಲನೆ ಗ್ಯಾರಂಟಿ' : 'Safe Verification Guarantee'}</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {language === 'kn' ? 'ಸುರಕ್ಷತೆಗಾಗಿ, ನಿಖರವಾದ ಸೀರಿಯಲ್ ಸಂಖ್ಯೆಗಳು ಮತ್ತು ರಹಸ್ಯ ಗುರುತುಗಳನ್ನು ಹಸ್ತಾಂತರಕ್ಕೆ ಮೊದಲು ಕ್ಲೈಮ್ ಮಾಡುವವರಿಂದ ದೃಢೀಕರಿಸಲಾಗುತ್ತದೆ.' : 'For security, exact serial numbers, wallpaper passwords, and secret identifiers must be confirmed by the claimant prior to physical handoff.'}
                </p>
              </div>
            </div>

            {/* Right Column: Information & Actions */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                {/* Category & Date */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">
                    {getCategoryLabel(selectedItem.category)}
                  </span>
                  <span className="text-xs text-slate-400">·</span>
                  <span className="text-xs text-slate-500">
                    {language === 'kn' ? 'ವರದಿ ದಿನಾಂಕ:' : 'Reported'} {new Date(selectedItem.createdAt).toLocaleDateString(language === 'kn' ? 'kn-IN' : 'en-US')}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug font-heading">
                  {selectedItem.title}
                </h2>

                {/* Location & Time info blocks */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-emerald-600" /> {t.itemLocation}
                    </span>
                    <p className="text-xs font-bold text-slate-900">{selectedItem.location.name}</p>
                    <p className="text-[11px] text-slate-500">{selectedItem.location.city}</p>
                    {selectedItem.location.specificSpot && (
                      <p className="text-[11px] text-slate-600 italic">“{selectedItem.location.specificSpot}”</p>
                    )}
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-sky-600" /> {t.itemDate}
                    </span>
                    <p className="text-xs font-bold text-slate-900">{formatDate(selectedItem.date)}</p>
                    <p className="text-[11px] text-slate-500">
                      {selectedItem.time ? `${language === 'kn' ? 'ಅಂದಾಜು ಸಮಯ:' : 'Approx.'} ${selectedItem.time}` : (language === 'kn' ? 'ನಿರ್ದಿಷ್ಟಪಡಿಸಿಲ್ಲ' : 'Not specified')}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    {t.itemDescription}
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line bg-slate-50/50 p-3.5 rounded-xl border border-slate-100">
                    {selectedItem.description}
                  </p>
                </div>

                {/* Identifying Marks */}
                {selectedItem.identifyingFeatures && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5 flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5 text-amber-500" /> {t.itemSecretProof}
                    </h4>
                    <p className="text-xs text-slate-600 bg-amber-50/60 border border-amber-200/80 p-3 rounded-xl">
                      {selectedItem.identifyingFeatures}
                    </p>
                  </div>
                )}

                {/* Reporter / Finder Profile card */}
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={selectedItem.reportedBy.avatar}
                      alt={selectedItem.reportedBy.name}
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-emerald-500/20"
                    />
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-bold text-slate-900">
                          {selectedItem.reportedBy.name}
                        </span>
                        {selectedItem.reportedBy.verified && (
                          <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
                        )}
                      </div>
                      <span className="text-[11px] text-slate-500">
                        {selectedItem.reportedBy.role || (language === 'kn' ? 'ಸಮುದಾಯ ಸದಸ್ಯ' : 'Community Member')} · {language === 'kn' ? 'ಪರಿಶೀಲಿತ ಬಳಕೆದಾರ' : 'Verified Identity'}
                      </span>
                    </div>
                  </div>

                  <span className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full">
                    {isFound ? (language === 'kn' ? 'ಹುಡುಕಿದವರು' : 'Finder') : (language === 'kn' ? 'ವರದಿದಾರರು' : 'Reporter')}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                {isReunited ? (
                  <div className="p-4 rounded-xl bg-purple-50 border border-purple-200 text-purple-900 text-center font-bold text-sm flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600" />
                    {language === 'kn' ? 'ಈ ವಸ್ತು ಯಶಸ್ವಿಯಾಗಿ ಅದರ ನಿಜವಾದ ಮಾಲೀಕರನ್ನು ತಲುಪಿದೆ!' : 'This item has been successfully reunited with its owner!'}
                  </div>
                ) : isOwner ? (
                  <div className="space-y-2">
                    <button
                      onClick={() => markItemReunited(selectedItem.id)}
                      className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>{t.markReunitedSuccess}</span>
                    </button>
                    <p className="text-[11px] text-slate-400 text-center">
                      {language === 'kn' ? 'ನೀವು ಈ ಪೋಸ್ಟ್‌ನ ಮಾಲೀಕರಾಗಿದ್ದೀರಿ.' : 'You are the author of this listing.'}
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {isFound ? (
                      <>
                        <button
                          id="btn-claim-ownership"
                          onClick={() => openClaimModal(selectedItem)}
                          className="py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs sm:text-sm shadow-md shadow-emerald-950/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <ShieldCheck className="w-4 h-4 text-emerald-200" />
                          <span>{t.btnClaimItem}</span>
                        </button>

                        <button
                          onClick={handleContactFinder}
                          className="py-3.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <MessageSquare className="w-4 h-4 text-slate-300" />
                          <span>{t.btnContactFinder}</span>
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          id="btn-found-this-item"
                          onClick={handleContactFinder}
                          className="py-3.5 px-4 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold text-xs sm:text-sm shadow-md shadow-rose-950/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <CheckCircle2 className="w-4 h-4 text-rose-200" />
                          <span>{language === 'kn' ? 'ನನಗೆ ಈ ವಸ್ತು ಸಿಕ್ಕಿದೆ' : 'I Found This Item'}</span>
                        </button>

                        <button
                          onClick={handleContactFinder}
                          className="py-3.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <MessageSquare className="w-4 h-4 text-slate-300" />
                          <span>{t.btnContactOwner}</span>
                        </button>
                      </>
                    )}
                  </div>
                )}
              </div>

            </div>
          </div>

          {/* Underneath: Possible Matches Section (if any detected) */}
          {itemMatches.length > 0 && !isReunited && (
            <div className="bg-slate-50 border-t border-slate-200/80 p-6 sm:p-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-500" />
                  <h3 className="text-base font-bold text-slate-900 font-heading">
                    {t.matchesDetected(itemMatches.length)}
                  </h3>
                </div>
                <span className="text-xs text-slate-500">
                  {language === 'kn' ? 'ಸ್ವಯಂಚಾಲಿತ ಸ್ಕ್ಯಾನ್' : 'Automated correlation scan'}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {itemMatches.slice(0, 3).map((match, idx) => {
                  const counterpart =
                    selectedItem.type === 'lost' ? match.foundItem : match.lostItem;
                  return (
                    <div
                      key={idx}
                      className="bg-white rounded-xl p-3.5 border border-slate-200 hover:border-amber-400/80 shadow-xs hover:shadow-md transition-all flex items-center gap-3"
                    >
                      <img
                        src={counterpart.images[0]}
                        alt={counterpart.title}
                        className="w-14 h-14 rounded-lg object-cover flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded">
                            {match.overallScore}% {language === 'kn' ? 'ಹೊಂದಾಣಿಕೆ' : 'Match'}
                          </span>
                          <span className="text-[10px] uppercase font-bold text-slate-400">
                            {counterpart.type === 'lost' ? t.badgeLost : t.badgeFound}
                          </span>
                        </div>
                        <p className="text-xs font-bold text-slate-900 truncate mt-1">
                          {counterpart.title}
                        </p>
                        <button
                          onClick={() => {
                            openMatchModal(match.lostItem, match.foundItem);
                          }}
                          className="text-[11px] font-bold text-emerald-600 hover:text-emerald-700 mt-1 flex items-center gap-1 cursor-pointer"
                        >
                          <span>{t.compareSideBySide}</span>
                          <ChevronRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
