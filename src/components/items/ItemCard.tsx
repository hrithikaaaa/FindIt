import React from 'react';
import { motion } from 'motion/react';
import {
  MapPin,
  Calendar,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Eye,
  Tag,
  CheckCircle2,
  Gift
} from 'lucide-react';
import { Item } from '../../types';
import { useApp } from '../../context/AppContext';
import { findMatchesForItem } from '../../utils/matchingEngine';

interface ItemCardProps {
  item: Item;
  onOpenDetail?: (item: Item) => void;
}

export const ItemCard: React.FC<ItemCardProps> = ({ item, onOpenDetail }) => {
  const { openItemDetail, openMatchModal, items, language, t, getCategoryLabel } = useApp();

  const handleOpen = () => {
    if (onOpenDetail) {
      onOpenDetail(item);
    } else {
      openItemDetail(item);
    }
  };

  // Check if there are possible matches in the system
  const possibleMatches = findMatchesForItem(item, items);
  const topMatch = possibleMatches.length > 0 ? possibleMatches[0] : null;
  const hasHighConfidenceMatch = topMatch && topMatch.overallScore >= 70;

  const isFound = item.type === 'found';
  const isReunited = item.status === 'reunited';

  // Format date nicely
  const formatDate = (dateStr: string) => {
    try {
      const d = new Date(dateStr);
      return d.toLocaleDateString(language === 'kn' ? 'kn-IN' : 'en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    } catch {
      return dateStr;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="group bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
    >
      <div>
        {/* Image Container with Zoom Effect & Badges */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 cursor-pointer" onClick={handleOpen}>
          <img
            src={item.images[0] || 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&auto=format&fit=crop&q=80'}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

          {/* Top Status & Category Badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
            {/* Status Badge */}
            {isReunited ? (
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-purple-600 text-white shadow-md flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> {t.statusReunited}
              </span>
            ) : isFound ? (
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-600 text-white shadow-md flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-200 animate-ping" />
                {t.badgeFound}
              </span>
            ) : (
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-rose-600 text-white shadow-md flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-200 animate-ping" />
                {t.badgeLost}
              </span>
            )}

            {/* Category Pill */}
            <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white/95 text-slate-800 shadow-sm backdrop-blur-sm border border-slate-200">
              {getCategoryLabel(item.category)}
            </span>
          </div>

          {/* Reward Badge (if applicable) */}
          {item.reward && !isReunited && (
            <div className="absolute bottom-3 left-3 bg-amber-500 text-slate-950 font-bold text-xs px-2.5 py-1 rounded-lg shadow-md flex items-center gap-1">
              <Gift className="w-3 h-3" />
              <span>{item.reward}</span>
            </div>
          )}

          {/* Photos Count Indicator */}
          {item.images.length > 1 && (
            <div className="absolute bottom-3 right-3 bg-slate-900/80 text-white text-[10px] font-semibold px-2 py-0.5 rounded-md backdrop-blur-xs">
              +{item.images.length - 1} {language === 'kn' ? 'ಫೋಟೋಗಳು' : 'photos'}
            </div>
          )}
        </div>

        {/* Card Body */}
        <div className="p-5 space-y-3">
          
          {/* Possible Match Banner when applicable */}
          {hasHighConfidenceMatch && !isReunited && (
            <div
              onClick={(e) => {
                e.stopPropagation();
                if (topMatch) {
                  openMatchModal(topMatch.lostItem, topMatch.foundItem);
                }
              }}
              className="bg-amber-50 hover:bg-amber-100/90 border border-amber-200/80 rounded-xl px-3 py-2 flex items-center justify-between cursor-pointer transition-colors"
            >
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>{language === 'kn' ? 'ಹೊಂದಾಣಿಕೆ ಸಾಧ್ಯತೆ' : 'Possible Match'} ({topMatch.overallScore}%)</span>
              </div>
              <span className="text-[11px] font-semibold text-amber-700 underline underline-offset-2">
                {language === 'kn' ? 'ಹೋಲಿಕೆ' : 'Compare'}
              </span>
            </div>
          )}

          {/* Title */}
          <div>
            <h3
              onClick={handleOpen}
              className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-1 cursor-pointer font-heading"
            >
              {item.title}
            </h3>
            <p className="text-xs text-slate-500 line-clamp-2 mt-1 leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Metadata: Location and Date */}
          <div className="space-y-1 text-xs text-slate-500 pt-1">
            <div className="flex items-center gap-1.5 truncate">
              <MapPin className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
              <span className="truncate font-medium text-slate-600">
                {item.location.name}, {item.location.city}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
              <span>{formatDate(item.date)}</span>
              {item.time && <span className="text-slate-400">· {item.time}</span>}
            </div>
          </div>
        </div>
      </div>

      {/* Card Footer: Reporter info & View Details button */}
      <div className="px-5 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <img
            src={item.reportedBy.avatar}
            alt={item.reportedBy.name}
            className="w-6 h-6 rounded-full object-cover ring-1 ring-slate-200"
          />
          <span className="text-xs text-slate-500 truncate">
            {item.reportedBy.name.split(' ')[0]} ({item.reportedBy.role || 'Member'})
          </span>
        </div>

        <button
          onClick={handleOpen}
          className="text-xs font-bold text-slate-900 group-hover:text-emerald-600 flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-emerald-50 transition-colors cursor-pointer flex-shrink-0"
        >
          <span>{t.cardViewDetails}</span>
          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};
