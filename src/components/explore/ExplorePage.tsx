import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Search,
  Filter,
  MapPin,
  Calendar,
  Layers,
  Sparkles,
  Grid,
  List,
  RotateCcw,
  Plus,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Tag
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { ItemCard } from '../items/ItemCard';
import { CATEGORIES_LIST } from '../../data/mockData';
import { ItemCategory } from '../../types';

export const ExplorePage: React.FC = () => {
  const { items, filters, setFilters, resetFilters, openReportWizard, openItemDetail, language, t, getCategoryLabel } = useApp();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredItems = items
    .filter((item) => {
      // 1. Search Query
      if (filters.searchQuery.trim()) {
        const query = filters.searchQuery.toLowerCase().trim();
        const matchesTitle = item.title.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesLoc = item.location.name.toLowerCase().includes(query) || item.location.city.toLowerCase().includes(query);
        const matchesTags = item.tags.some((t) => t.toLowerCase().includes(query));
        const matchesFeatures = item.identifyingFeatures?.toLowerCase().includes(query);
        if (!matchesTitle && !matchesDesc && !matchesLoc && !matchesTags && !matchesFeatures) {
          return false;
        }
      }

      // 2. Type Filter (lost / found)
      if (filters.type !== 'all' && item.type !== filters.type) {
        return false;
      }

      // 3. Category Filter
      if (filters.category !== 'all' && item.category !== filters.category) {
        return false;
      }

      // 4. City Filter
      if (filters.city.trim() && !item.location.city.toLowerCase().includes(filters.city.toLowerCase().trim())) {
        return false;
      }

      // 5. Status Filter
      if (filters.status !== 'all') {
        if (filters.status === 'active' && item.status !== 'active') return false;
        if (filters.status === 'reunited' && item.status !== 'reunited') return false;
      }

      // 6. Date range
      if (filters.dateRange !== 'all') {
        const itemDate = new Date(item.date).getTime();
        const now = new Date().getTime();
        const diffDays = (now - itemDate) / (1000 * 60 * 60 * 24);

        if (filters.dateRange === 'today' && diffDays > 1) return false;
        if (filters.dateRange === 'this_week' && diffDays > 7) return false;
        if (filters.dateRange === 'this_month' && diffDays > 30) return false;
      }

      return true;
    })
    .sort((a, b) => {
      if (filters.sortBy === 'newest') {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      }
      if (filters.sortBy === 'oldest') {
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      }
      if (filters.sortBy === 'title') {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });

  const citiesList = Array.from(new Set(items.map((i) => i.location.city))).filter(Boolean);

  const hasActiveFilters =
    Boolean(filters.searchQuery) ||
    filters.type !== 'all' ||
    filters.category !== 'all' ||
    Boolean(filters.city) ||
    filters.status !== 'all' ||
    filters.dateRange !== 'all';

  return (
    <div id="explore-page-container" className="min-h-screen bg-slate-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Page Title & Quick Action */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              {t.exploreTitle}
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              {t.exploreSubtitle}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => openReportWizard('lost')}
              className="bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              {t.heroReportLost}
            </button>
            <button
              onClick={() => openReportWizard('found')}
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              {t.heroReportFound}
            </button>
          </div>
        </div>

        {/* Search & Filter Control Bar */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm space-y-5">
          
          {/* Main Search Input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              value={filters.searchQuery}
              onChange={(e) => setFilters((prev) => ({ ...prev, searchQuery: e.target.value }))}
              placeholder={t.exploreSearchPlaceholder}
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-12 pr-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
            />
            {filters.searchQuery && (
              <button
                onClick={() => setFilters((prev) => ({ ...prev, searchQuery: '' }))}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-xs font-semibold text-slate-400 hover:text-slate-700"
              >
                {language === 'kn' ? 'ತೆರವುಗೊಳಿಸಿ' : 'Clear'}
              </button>
            )}
          </div>

          {/* Filter Dropdowns Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 pt-1">
            
            {/* 1. Item Type */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                {t.filterReportType}
              </label>
              <select
                value={filters.type}
                onChange={(e) => setFilters((prev) => ({ ...prev, type: e.target.value as any }))}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
              >
                <option value="all">{t.filterAllTypes}</option>
                <option value="lost">🔴 {t.badgeLost}</option>
                <option value="found">🟢 {t.badgeFound}</option>
              </select>
            </div>

            {/* 2. Category */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                {t.filterCategory}
              </label>
              <select
                value={filters.category}
                onChange={(e) => setFilters((prev) => ({ ...prev, category: e.target.value as any }))}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
              >
                <option value="all">{t.categoryAll}</option>
                {CATEGORIES_LIST.map((cat) => (
                  <option key={cat.name} value={cat.name}>
                    {getCategoryLabel(cat.name as ItemCategory)}
                  </option>
                ))}
              </select>
            </div>

            {/* 3. City / Location */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                {t.filterCity}
              </label>
              <select
                value={filters.city}
                onChange={(e) => setFilters((prev) => ({ ...prev, city: e.target.value }))}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
              >
                <option value="">{t.filterAllCities}</option>
                {citiesList.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            {/* 4. Date Range */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                {t.filterDateRange}
              </label>
              <select
                value={filters.dateRange}
                onChange={(e) => setFilters((prev) => ({ ...prev, dateRange: e.target.value as any }))}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
              >
                <option value="all">{t.filterAnyTime}</option>
                <option value="today">{t.filterPast24h}</option>
                <option value="this_week">{t.filterPast7d}</option>
                <option value="this_month">{t.filterPast30d}</option>
              </select>
            </div>

            {/* 5. Status */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                {t.filterStatus}
              </label>
              <select
                value={filters.status}
                onChange={(e) => setFilters((prev) => ({ ...prev, status: e.target.value as any }))}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
              >
                <option value="all">{t.filterAllStatuses}</option>
                <option value="active">{t.filterActiveUnresolved}</option>
                <option value="reunited">🟣 {t.statusReunited}</option>
              </select>
            </div>

          </div>

          {/* Active Chips & Reset Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100 text-xs">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-600">
                {t.showingListingsCount(filteredItems.length)}
              </span>
              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="text-xs text-rose-600 hover:text-rose-700 font-semibold flex items-center gap-1 cursor-pointer ml-2"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  {t.resetAllFilters}
                </button>
              )}
            </div>

            {/* Sort and View Toggle */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <span>{t.sortBy}:</span>
                <select
                  value={filters.sortBy}
                  onChange={(e) => setFilters((prev) => ({ ...prev, sortBy: e.target.value as any }))}
                  className="bg-slate-50 border border-slate-200 rounded-lg px-2 py-1 text-xs text-slate-800 font-medium focus:outline-none"
                >
                  <option value="newest">{t.sortNewest}</option>
                  <option value="oldest">{t.sortOldest}</option>
                  <option value="title">{t.sortTitle}</option>
                </select>
              </div>

              <div className="flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded-md transition-colors ${
                    viewMode === 'grid' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-400 hover:text-slate-700'
                  }`}
                  aria-label="Grid view"
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-1.5 rounded-md transition-colors ${
                    viewMode === 'list' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-400 hover:text-slate-700'
                  }`}
                  aria-label="List view"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Results Grid / List */}
        {filteredItems.length === 0 ? (
          <div className="bg-white rounded-3xl p-16 text-center border border-slate-200 space-y-4 max-w-xl mx-auto shadow-sm">
            <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
              <Search className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-slate-900 font-heading">
                {t.noItemsFound}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 max-w-sm mx-auto">
                {language === 'kn' ? 'ವಿಶಾಲವಾದ ಹುಡುಕಾಟ ಪದಗಳನ್ನು ಪ್ರಯತ್ನಿಸಿ ಅಥವಾ ಸಕ್ರಿಯ ಫಿಲ್ಟರ್‌ಗಳನ್ನು ತೆರವುಗೊಳಿಸಿ.' : 'Try widening your search terms, changing the city, or clearing active filters.'}
              </p>
            </div>
            <div className="pt-2 flex justify-center gap-3">
              <button
                onClick={resetFilters}
                className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors cursor-pointer"
              >
                {t.resetAllFilters}
              </button>
              <button
                onClick={() => openReportWizard('lost')}
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors cursor-pointer"
              >
                {t.heroReportLost}
              </button>
            </div>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          /* List View */
          <div className="space-y-4">
            {filteredItems.map((item) => {
              const isFound = item.type === 'found';
              const isReunited = item.status === 'reunited';
              return (
                <div
                  key={item.id}
                  onClick={() => openItemDetail(item)}
                  className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 cursor-pointer group"
                >
                  <div className="flex items-start sm:items-center gap-4 min-w-0">
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="w-16 h-16 rounded-xl object-cover flex-shrink-0 group-hover:scale-105 transition-transform"
                    />
                    <div className="space-y-1 min-w-0">
                      <div className="flex items-center gap-2">
                        {isReunited ? (
                          <span className="text-[10px] font-bold bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">
                            {t.statusReunited}
                          </span>
                        ) : isFound ? (
                          <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                            {t.badgeFound}
                          </span>
                        ) : (
                          <span className="text-[10px] font-bold bg-rose-100 text-rose-800 px-2 py-0.5 rounded-full">
                            {t.badgeLost}
                          </span>
                        )}
                        <span className="text-xs font-semibold text-slate-500">
                          {getCategoryLabel(item.category)}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-emerald-600 transition-colors truncate">
                        {item.title}
                      </h4>
                      <div className="flex items-center gap-3 text-xs text-slate-400">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-slate-400" />
                          {item.location.name}, {item.location.city}
                        </span>
                        <span>·</span>
                        <span>{item.date}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openItemDetail(item);
                    }}
                    className="text-xs font-bold text-slate-900 group-hover:text-emerald-600 flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-50 group-hover:bg-emerald-50 transition-colors self-end sm:self-auto flex-shrink-0"
                  >
                    <span>{t.cardViewDetails}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
};
