import React from 'react';
import { motion } from 'motion/react';
import { Lock, ShieldCheck, Flag, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const TrustSafetySection: React.FC = () => {
  const { language, t } = useApp();

  const pillars = [
    {
      icon: Lock,
      title: t.secZeroPIITitle,
      description: t.secZeroPIIDesc,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      badge: t.badgeZeroPII,
    },
    {
      icon: ShieldCheck,
      title: t.secOwnershipTitle,
      description: t.secOwnershipDesc,
      color: 'text-sky-600',
      bgColor: 'bg-sky-50',
      badge: language === 'kn' ? 'ವಂಚನೆ ತಡೆ ರಕ್ಷಣೆ' : 'Anti-Fraud Shield',
    },
    {
      icon: Flag,
      title: t.secSafeHandoffTitle,
      description: t.secSafeHandoffDesc,
      color: 'text-rose-600',
      bgColor: 'bg-rose-50',
      badge: language === 'kn' ? '24/7 ಮೇಲ್ವಿಚಾರಣೆ' : 'Moderated 24/7',
    },
    {
      icon: Users,
      title: t.secCommunityTrustTitle,
      description: t.secCommunityTrustDesc,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      badge: language === 'kn' ? 'ಕರ್ಮ ಅಂಕಗಳು' : 'Karma System',
    },
  ];

  return (
    <section id="trust-safety-section" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{t.safetyBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            {t.safetyTitle}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {t.safetySubtitle}
          </p>
        </div>

        {/* 4 Pillar Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-slate-800/80 rounded-3xl p-8 border border-slate-700/80 hover:border-slate-600 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl ${pillar.bgColor} ${pillar.color} flex items-center justify-center shadow-inner`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-300 bg-slate-700/70 border border-slate-600/50 px-3 py-1 rounded-full">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white font-heading mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-700/60 flex items-center gap-2 text-xs font-semibold text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{language === 'kn' ? 'ಎಲ್ಲಾ ಸಮುದಾಯ ವರದಿಗಳಲ್ಲಿ ಕಡ್ಡಾಯವಾಗಿ ಅನ್ವಯಿಸುತ್ತದೆ' : 'Enforced across all community reports'}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
