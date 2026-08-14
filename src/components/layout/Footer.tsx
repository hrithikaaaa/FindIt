import React from 'react';
import { Compass, ShieldCheck, Heart, Sparkles, Send, Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const Footer: React.FC = () => {
  const { setCurrentView, setFilters, openReportWizard, addToast, language, t } = useApp();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    addToast(
      'success',
      language === 'kn' ? 'ಎಚ್ಚರಿಕೆಗಳಿಗೆ ಚಂದಾದಾರರಾಗಿದ್ದೀರಿ!' : 'Subscribed to Alerts!',
      language === 'kn' ? 'ನೀವು ಸಾಪ್ತಾಹಿಕ ಕಳೆದುಹೋದ/ದೊರೆತ ವಸ್ತುಗಳ ಅಪ್ಡೇಟ್ ಪಡೆಯುತ್ತೀರಿ.' : 'You will receive weekly community lost & found summaries.'
    );
  };

  const navigateToExplore = (type: 'all' | 'lost' | 'found') => {
    setFilters((prev) => ({ ...prev, type }));
    setCurrentView('explore');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="app-footer" className="bg-slate-950 text-slate-300 border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-900">
          
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center shadow-lg shadow-emerald-900/40">
                <Compass className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white font-heading">
                Find<span className="text-emerald-400">It</span>
              </span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              {t.footerDesc}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-3 py-1.5 rounded-full font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {language === 'kn' ? 'ಸಮುದಾಯ ಸುರಕ್ಷತೆ ಸಕ್ರಿಯವಾಗಿದೆ' : 'Community Safety Active'}
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-400 bg-slate-900 px-3 py-1.5 rounded-full border border-slate-800">
                <ShieldCheck className="w-3.5 h-3.5 text-slate-300" />
                {t.badgeZeroPII}
              </div>
            </div>

            {/* Newsletter / Area Alerts */}
            <form onSubmit={handleSubscribe} className="pt-2">
              <label className="block text-xs font-semibold text-slate-300 mb-2">
                {t.footerAlertsLabel}
              </label>
              <div className="flex gap-2 max-w-md">
                <input
                  type="email"
                  required
                  placeholder={t.footerEmailPlaceholder}
                  className="bg-slate-900 border border-slate-800 text-slate-200 text-xs rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-emerald-500 flex-1 placeholder:text-slate-500"
                />
                <button
                  type="submit"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer flex-shrink-0"
                >
                  <Send className="w-3.5 h-3.5" />
                  {t.footerSubscribeBtn}
                </button>
              </div>
            </form>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              {t.footerColExplore}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => {
                    setCurrentView('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {t.navHome}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToExplore('lost')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {t.navLostItems}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToExplore('found')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {t.navFoundItems}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToExplore('all')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {t.navExplore}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentView('how-it-works');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {t.navHowItWorks}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Action & Reporting */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              {t.footerColAction}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => openReportWizard('lost')}
                  className="text-slate-400 hover:text-rose-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                  {t.heroReportLost}
                </button>
              </li>
              <li>
                <button
                  onClick={() => openReportWizard('found')}
                  className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  {t.heroReportFound}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentView('dashboard');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {t.navDashboard}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setCurrentView('safety');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {t.navSafety}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Trust, Safety & Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              {t.footerColTrust}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => {
                    setCurrentView('safety');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {language === 'kn' ? 'ಸುರಕ್ಷತಾ ಮಾರ್ಗಸೂಚಿಗಳು' : 'Safety Guidelines'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => addToast('info', language === 'kn' ? 'ಗೌಪ್ಯತೆ ನೀತಿ' : 'Privacy Policy', language === 'kn' ? 'FindIt ನಿಮ್ಮ ಸಂಪರ್ಕ ಮಾಹಿತಿಯನ್ನು ಸುರಕ್ಷಿತವಾಗಿರಿಸುತ್ತದೆ.' : 'FindIt safeguards your contact information and never sells your data.')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {language === 'kn' ? 'ಗೌಪ್ಯತೆ & ಅನಾಮಧೇಯತೆ' : 'Privacy & Anonymity'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => addToast('info', language === 'kn' ? 'ಬಳಕೆಯ ನಿಯಮಗಳು' : 'Terms of Service', language === 'kn' ? 'FindIt ಬಳಸುವ ಮೂಲಕ ಪ್ರಾಮಾಣಿಕ ನಡವಳಿಕೆಗೆ ಒಪ್ಪಿಕೊಳ್ಳುತ್ತೀರಿ.' : 'By using FindIt, members agree to honest, respectful community conduct.')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {language === 'kn' ? 'ಬಳಕೆಯ ನಿಯಮಗಳು' : 'Terms of Service'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => addToast('info', language === 'kn' ? 'ಬೆಂಬಲ ಸಹಾಯ' : 'Community Support', 'support@findit-community.org')}
                  className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  {t.footerSupport}
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>{t.footerCopyright}</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400 transition-colors cursor-pointer flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> Match Engine v2.4
            </span>
            <span>·</span>
            <span className="hover:text-slate-400 transition-colors cursor-pointer">
              SSL Encrypted
            </span>
            <span>·</span>
            <span className="hover:text-slate-400 transition-colors cursor-pointer">
              {language === 'kn' ? 'ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ' : 'All Rights Reserved'}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
