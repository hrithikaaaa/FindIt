import React from 'react';
import { motion } from 'motion/react';
import { Camera, Sparkles, HeartHandshake, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const HowItWorks: React.FC = () => {
  const { openReportWizard, language, t } = useApp();

  const steps = [
    {
      number: '01',
      title: language === 'kn' ? 'ವರದಿ' : 'Report',
      tagline: t.hiwStep1Title,
      description: t.hiwStep1Desc,
      icon: Camera,
      badgeColor: 'bg-rose-50 text-rose-700 border-rose-200',
      iconBg: 'from-rose-500 to-red-600',
      highlight: language === 'kn' ? 'ಬಹು ಫೋಟೋ ಅಪ್ಲೋಡ್ & ರಹಸ್ಯ ಪರಿಶೀಲನೆ ಪ್ರಶ್ನೆ' : 'Multi-image upload & secret verification challenge',
    },
    {
      number: '02',
      title: language === 'kn' ? 'ಹುಡುಕಾಟ' : 'Discover',
      tagline: t.hiwStep2Title,
      description: t.hiwStep2Desc,
      icon: Sparkles,
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
      iconBg: 'from-amber-500 to-yellow-600',
      highlight: language === 'kn' ? 'ನಿಖರ ಹೊಂದಾಣಿಕೆ ಸ್ಕೋರ್ & ಹೋಲಿಕೆ' : 'Confidence scoring & side-by-side comparison',
    },
    {
      number: '03',
      title: language === 'kn' ? 'ಮರಳಿ ಪಡೆಯಿರಿ' : 'Reunite',
      tagline: t.hiwStep3Title,
      description: t.hiwStep3Desc,
      icon: HeartHandshake,
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      iconBg: 'from-emerald-500 to-teal-600',
      highlight: language === 'kn' ? 'ಶೂನ್ಯ ಸಾರ್ವಜನಿಕ ಖಾಸಗಿ ಮಾಹಿತಿ & ವಿಶ್ವಾಸಾರ್ಹ ರಿಟರ್ನ್' : 'Zero public PII & verified community karma',
    },
  ];

  return (
    <section id="how-it-works-section" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider">
            <span>{t.hiwBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            {t.hiwTitle}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            {t.hiwSubtitle}
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group relative bg-slate-50/70 hover:bg-white rounded-3xl p-8 border border-slate-200/80 hover:border-slate-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Step Number & Icon Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <span className="text-3xl font-black text-slate-300 group-hover:text-slate-900 transition-colors font-heading">
                        {step.number}
                      </span>
                      <span className="text-slate-300 font-bold">—</span>
                      <span className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                        {step.title}
                      </span>
                    </div>

                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${step.iconBg} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Tagline & Description */}
                  <h3 className="text-xl font-bold text-slate-900 mb-2 font-heading">
                    {step.tagline}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Highlight Pill */}
                <div className="pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>{step.highlight}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                {language === 'kn' ? 'ನಿಮಗೆ ಇತ್ತೀಚೆಗೆ ಕ್ಯಾಂಪಸ್ ಅಥವಾ ನಗರದಲ್ಲಿ ಯಾವುದೇ ವಸ್ತು ಸಿಕ್ಕಿದೆಯೇ?' : 'Have you recently found an item on campus or in town?'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                {language === 'kn' ? 'ವರದಿ ಸಲ್ಲಿಸಲು ಮತ್ತು ಯಾರಿಗಾದರೂ ಅವರ ಅಮೂಲ್ಯ ವಸ್ತು ಮರಳಿ ಪಡೆಯಲು 60 ಸೆಕೆಂಡ್‌ಗಿಂತ ಕಡಿಮೆ ಸಮಯ ತೆಗೆದುಕೊಳ್ಳುತ್ತದೆ.' : 'It takes less than 60 seconds to file a report and help someone retrieve their valuables.'}
              </p>
            </div>
          </div>

          <button
            onClick={() => openReportWizard('found')}
            className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl transition-all shadow-md flex items-center gap-2 flex-shrink-0 cursor-pointer"
          >
            <span>{t.heroReportFound}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
