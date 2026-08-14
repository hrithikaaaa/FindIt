import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, HeartHandshake, Users, Layers, ShieldCheck } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const StatsSection: React.FC = () => {
  const { language, t } = useApp();

  const stats = [
    {
      number: '2,450+',
      label: t.statsReported,
      sublabel: language === 'kn' ? 'ಕ್ಯಾಂಪಸ್ ಮತ್ತು ನಗರ ವಲಯಗಳಲ್ಲಿ' : 'Across campus & city zones',
      icon: Layers,
      color: 'text-sky-600',
      bg: 'bg-sky-50',
    },
    {
      number: '1,320+',
      label: t.statsFound,
      sublabel: language === 'kn' ? 'ನಾಗರಿಕರ ಸುರಕ್ಷಿತ ಸಂಗ್ರಹಣೆ' : 'Safely cataloged by good samaritans',
      icon: ShieldCheck,
      color: 'text-amber-600',
      bg: 'bg-amber-50',
    },
    {
      number: '860+',
      label: t.statsReunited,
      sublabel: language === 'kn' ? 'ಖಚಿತ ಮಾಲೀಕರ ಕೈಗೆ' : 'Verified owner returns',
      icon: HeartHandshake,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
    },
    {
      number: '5,000+',
      label: t.statsMembers,
      sublabel: language === 'kn' ? 'ಸಕ್ರಿಯ ವಿದ್ಯಾರ್ಥಿಗಳು & ನಿವಾಸಿಗಳು' : 'Active residents & students',
      icon: Users,
      color: 'text-indigo-600',
      bg: 'bg-indigo-50',
    },
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-slate-50/70 rounded-3xl p-6 border border-slate-200/80 flex flex-col justify-between hover:bg-white hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <Sparkles className="w-4 h-4 text-slate-300" />
                </div>

                <div>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
                    {stat.number}
                  </h3>
                  <p className="text-sm font-bold text-slate-800 mt-1">
                    {stat.label}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {stat.sublabel}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
