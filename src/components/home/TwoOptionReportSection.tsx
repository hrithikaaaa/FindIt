import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Search, HeartHandshake, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const TwoOptionReportSection: React.FC = () => {
  const { openReportWizard, language, t } = useApp();

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            {language === 'kn' ? 'ಇಂದೇ ಕ್ರಮ ಕೈಗೊಳ್ಳಿ' : 'Take Action Today'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            {language === 'kn' ? 'ವಸ್ತು ವಿವರ ವರದಿ ಮಾಡಿ' : 'Report an Item'}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            {language === 'kn'
              ? 'ಒಂದು ನಿಮಿಷದಲ್ಲಿ ಪರಿಶೀಲಿಸಿದ ಪಟ್ಟಿಯನ್ನು ಪ್ರಾರಂಭಿಸಲು ಕೆಳಗಿನ ಆಯ್ಕೆಯನ್ನು ಆರಿಸಿ.'
              : 'Select an option below to start a verified listing in under a minute.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: I Lost Something */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            {/* Top decorative badge */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-rose-50 rounded-bl-full -z-0 group-hover:scale-110 transition-transform" />

            <div className="relative z-10 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center shadow-inner">
                <Search className="w-7 h-7" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
                  {language === 'kn' ? 'ಕಳೆದುಹೋದ ವಸ್ತು' : 'Missing Belonging'}
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 mt-1 font-heading">
                  {t.reportLostTitle}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mt-2">
                  {language === 'kn'
                    ? 'ನೀವು ಹುಡುಕುತ್ತಿರುವ ವಸ್ತುವಿನ ವಿವರಗಳನ್ನು ಪೋಸ್ಟ್ ಮಾಡಿ, ಫೋಟೋ ಅಪ್ಲೋಡ್ ಮಾಡಿ, ಸರಿಹೊಂದುವ ವಸ್ತು ಪತ್ತೆಯಾದ ತಕ್ಷಣ ಸೂಚನೆ ಪಡೆಯಿರಿ.'
                    : 'Tell the community what you’re looking for. Post details, upload reference photos, and get notified immediately when a matching item is found.'}
                </p>
              </div>

              <ul className="space-y-2 text-xs text-slate-600 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>{language === 'kn' ? 'ಎಲ್ಲಾ ದೊರೆತ ವಸ್ತುಗಳಲ್ಲಿ ತಕ್ಷಣ ಸ್ವಯಂಚಾಲಿತ ಸಾಮ್ಯತೆ ಸ್ಕ್ಯಾನ್' : 'Instant automated similarity scan across all found items'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>{language === 'kn' ? 'ಸುರಕ್ಷಿತ ಖಾಸಗಿ ಆಂತರಿಕ ಸಂದೇಶ ವ್ಯವಸ್ಥೆ' : 'Private internal communication channel'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>{language === 'kn' ? 'ಐಚ್ಛಿಕ ನಗದು ಬಹುಮಾನ ಕೊಡುಗೆ' : 'Optional finder reward offer'}</span>
                </li>
              </ul>
            </div>

            <div className="relative z-10 pt-8 mt-4 border-t border-slate-100">
              <button
                id="btn-report-lost-card"
                onClick={() => openReportWizard('lost')}
                className="w-full py-3.5 px-6 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-sm shadow-md shadow-rose-900/20 transition-all flex items-center justify-center gap-2 cursor-pointer group-hover:gap-3"
              >
                <span>{t.heroReportLost}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Card 2: I Found Something */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            {/* Top decorative badge */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-50 rounded-bl-full -z-0 group-hover:scale-110 transition-transform" />

            <div className="relative z-10 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-inner">
                <HeartHandshake className="w-7 h-7" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                  {language === 'kn' ? 'ಉತ್ತಮ ನಾಗರಿಕ ಸಹಾಯ' : 'Good Samaritan'}
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 mt-1 font-heading">
                  {t.reportFoundTitle}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mt-2">
                  {language === 'kn'
                    ? 'ಯಾರೋ ಕಳೆದುಕೊಂಡ ವಸ್ತುವನ್ನು ಮರಳಿ ನೀಡಲು ಸಹಾಯ ಮಾಡಿ. ಫೋಟೋಗಳನ್ನು ಪೋಸ್ಟ್ ಮಾಡಿ, ಮಾಲೀಕರನ್ನು ಪರಿಶೀಲಿಸಲು ಪ್ರಶ್ನೆಗಳನ್ನು ಹೊಂದಿಸಿ.'
                    : 'Help someone get their belongings back. Post photos, set an optional verification question, or coordinate handoff via a campus security desk.'}
                </p>
              </div>

              <ul className="space-y-2 text-xs text-slate-600 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>{language === 'kn' ? 'ನೈಜ ಮಾಲೀಕರನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಲು ಪರಿಶೀಲನಾ ಪ್ರಶ್ನೆ ಕೇಳಿ' : 'Ask verification questions to verify true owner'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>{language === 'kn' ? 'ಸಮುದಾಯದ ವಿಶ್ವಾಸಾರ್ಹತೆ ಅಂಕಗಳು ಮತ್ತು ಬ್ಯಾಡ್ಜ್‌ಗಳನ್ನು ಗಳಿಸಿ' : 'Earn community reputation points and badges'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>{language === 'kn' ? 'ಕ್ಯಾಂಪಸ್ ಅಥವಾ ಕಚೇರಿ ಸುರಕ್ಷಿತ ಹಸ್ತಾಂತರ ಆಯ್ಕೆಗಳು' : 'Secure handoff coordinate options'}</span>
                </li>
              </ul>
            </div>

            <div className="relative z-10 pt-8 mt-4 border-t border-slate-100">
              <button
                id="btn-report-found-card"
                onClick={() => openReportWizard('found')}
                className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md shadow-emerald-950/20 transition-all flex items-center justify-center gap-2 cursor-pointer group-hover:gap-3"
              >
                <span>{t.heroReportFound}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
