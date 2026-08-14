import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Filter, Search } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { ItemCard } from '../items/ItemCard';
import { CATEGORIES_LIST } from '../../data/mockData';
import { ItemCategory } from '../../types';

export const RecentlyReportedSection: React.FC = () => {
  const { items, setCurrentView, setFilters, language, t, getCategoryLabel } = useApp();
  const [activeTab, setActiveTab] = useState<'all' | 'lost' | 'found'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredItems = items
    .filter((item) => {
      if (activeTab !== 'all' && item.type !== activeTab) return false;
      if (selectedCategory !== 'all' && item.category !== selectedCategory) return false;
      return true;
    })
    .slice(0, 6);

  const handleViewAll = () => {
    setFilters((prev) => ({
      ...prev,
      type: activeTab,
      category: selectedCategory as any,
    }));
    setCurrentView('explore');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="recently-reported-section" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.feedBadge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              {t.feedTitle}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl">
              {t.feedSubtitle}
            </p>
          </div>

          {/* Lost / Found / All Tabs */}
          <div className="flex items-center bg-white p-1.5 rounded-2xl border border-slate-200 shadow-xs self-start md:self-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {t.tabAllItems}
            </button>
            <button
              id="tab-lost-items"
              onClick={() => setActiveTab('lost')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'lost'
                  ? 'bg-rose-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-rose-600 hover:bg-rose-50/50'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-rose-400" />
              {t.tabLostItems}
            </button>
            <button
              id="tab-found-items"
              onClick={() => setActiveTab('found')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'found'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-emerald-600 hover:bg-emerald-50/50'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              {t.tabFoundItems}
            </button>
          </div>
        </div>

        {/* Category Pills Slider */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-8 text-xs scrollbar-none">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl font-semibold flex-shrink-0 transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-100'
            }`}
          >
            {t.categoryAll}
          </button>
          {CATEGORIES_LIST.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              className={`px-3.5 py-2 rounded-xl font-semibold flex-shrink-0 transition-all cursor-pointer ${
                selectedCategory === cat.name
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-100'
              }`}
            >
              {getCategoryLabel(cat.name as ItemCategory)}
            </button>
          ))}
        </div>

        {/* Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-3">
            <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">{t.noItemsFound}</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              {language === 'kn' ? 'ಬೇರೆ ವರ್ಗವನ್ನು ಆರಿಸಿ ಅಥವಾ ಕಳೆದುಹೋದ/ದೊರೆತ ಟ್ಯಾಬ್ ಬದಲಿಸಿ ನೋಡಿ.' : 'Try choosing a different category or switch between Lost and Found tabs.'}
            </p>
            <button
              onClick={() => {
                setActiveTab('all');
                setSelectedCategory('all');
              }}
              className="mt-2 text-xs font-bold text-emerald-600 hover:text-emerald-700"
            >
              {language === 'kn' ? 'ಫಿಲ್ಟರ್ ಮರುಹೊಂದಿಸಿ' : 'Reset Filters'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        )}

        {/* View All Button */}
        <div className="mt-12 text-center">
          <button
            onClick={handleViewAll}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm border border-slate-200 shadow-sm hover:shadow-md transition-all cursor-pointer group"
          >
            <span>{t.feedExploreAll}</span>
            <ArrowRight className="w-4 h-4 text-slate-500 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
