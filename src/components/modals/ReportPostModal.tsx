import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Flag, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const ReportPostModal: React.FC = () => {
  const { flagModalOpen, flagTargetItem, closeFlagModal, addToast } = useApp();

  const [reason, setReason] = useState('Suspicious / Fake Listing');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!flagModalOpen || !flagTargetItem) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setDetails('');
      closeFlagModal();
      addToast('info', 'Report Received', 'Thank you for keeping our community safe. Our moderation team is reviewing this post.');
    }, 1500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-md w-full p-6 sm:p-8 space-y-5"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center">
                <Flag className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-bold text-slate-900 font-heading">
                Report Suspicious Listing
              </h2>
            </div>

            <button
              onClick={closeFlagModal}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {submitted ? (
            <div className="py-6 text-center space-y-2">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <p className="text-sm font-bold text-slate-900">Report Submitted</p>
              <p className="text-xs text-slate-500">Our moderators have queued this listing for inspection.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-slate-600">
                Reporting: <strong className="text-slate-900">{flagTargetItem.title}</strong>
              </p>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Reason for Flagging
                </label>
                <select
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-rose-500"
                >
                  <option value="Suspicious / Fake Listing">Suspicious or fake listing</option>
                  <option value="Inappropriate / Offensive Content">Inappropriate content or offensive photos</option>
                  <option value="Duplicate Report">Duplicate report</option>
                  <option value="Item Already Claimed">Item has already been retrieved</option>
                  <option value="Privacy Violation">Contains exposed personal phone/email info</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Additional Details (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Provide any context to help moderators evaluate..."
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 focus:bg-white focus:outline-none focus:ring-1 focus:ring-rose-500"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={closeFlagModal}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs shadow-md transition-colors"
                >
                  Submit Flag
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
