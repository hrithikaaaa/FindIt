import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Info, AlertTriangle, XCircle, X } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useApp();

  return (
    <div
      id="toast-container"
      className="fixed bottom-5 right-5 z-50 flex flex-col space-y-2 pointer-events-none max-w-sm w-full"
    >
      <AnimatePresence>
        {toasts.map((toast) => {
          let Icon = CheckCircle2;
          let colorStyle = 'bg-slate-900 border-emerald-500/30 text-white';
          let iconColor = 'text-emerald-400';

          if (toast.type === 'info') {
            Icon = Info;
            colorStyle = 'bg-slate-900 border-sky-500/30 text-white';
            iconColor = 'text-sky-400';
          } else if (toast.type === 'warning') {
            Icon = AlertTriangle;
            colorStyle = 'bg-slate-900 border-amber-500/30 text-white';
            iconColor = 'text-amber-400';
          } else if (toast.type === 'error') {
            Icon = XCircle;
            colorStyle = 'bg-slate-900 border-rose-500/30 text-white';
            iconColor = 'text-rose-400';
          }

          return (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className={`pointer-events-auto flex items-start gap-3 p-4 rounded-xl border shadow-xl backdrop-blur-md ${colorStyle}`}
            >
              <Icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${iconColor}`} />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold leading-tight">{toast.title}</p>
                {toast.message && (
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">{toast.message}</p>
                )}
              </div>
              <button
                onClick={() => removeToast(toast.id)}
                className="text-slate-400 hover:text-white transition-colors p-1 -mr-1 -mt-1 rounded-md"
                aria-label="Close notification"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};
