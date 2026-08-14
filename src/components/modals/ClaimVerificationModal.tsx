import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  ShieldCheck,
  Lock,
  Camera,
  CheckCircle2,
  AlertCircle,
  FileCheck,
  Send,
  MapPin,
  Upload,
  Loader2
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { uploadItemImage } from '../../lib/firebase';

export const ClaimVerificationModal: React.FC = () => {
  const {
    claimModalOpen,
    claimTargetItem,
    closeClaimModal,
    submitClaim,
  } = useApp();

  const [proofDescription, setProofDescription] = useState('');
  const [securityAnswer, setSecurityAnswer] = useState('');
  const [proofPhotos, setProofPhotos] = useState<string[]>([]);
  const [isUploadingPhoto, setIsUploadingPhoto] = useState(false);
  const [handoffPreference, setHandoffPreference] = useState('Security / Help Desk');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!claimModalOpen || !claimTargetItem) return null;

  const handlePhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setIsUploadingPhoto(true);
    try {
      const fileArray: File[] = Array.from(files);
      for (const file of fileArray) {
        const url = await uploadItemImage(file, 'claims');
        if (url) {
          setProofPhotos((prev) => [...prev, url]);
        }
      }
    } catch (err) {
      console.warn('Proof upload error:', err);
    } finally {
      setIsUploadingPhoto(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleRemovePhoto = (index: number) => {
    setProofPhotos((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!proofDescription.trim()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      await submitClaim({
        itemId: claimTargetItem.id,
        proofDescription: proofDescription.trim(),
        securityAnswer: securityAnswer.trim() || undefined,
        proofImages: proofPhotos,
      });

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setProofDescription('');
        setSecurityAnswer('');
        setProofPhotos([]);
        closeClaimModal();
      }, 1800);
    } catch (err: any) {
      console.error('[FindIt] Claim submission error:', err);
      setSubmitError(err?.message || 'Failed to submit claim verification.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-xl w-full p-6 sm:p-8 space-y-6"
        >
          {/* Header */}
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 font-heading">
                  Submit Ownership Verification
                </h2>
                <p className="text-xs text-slate-500">
                  Claiming: <strong className="text-slate-800">{claimTargetItem.title}</strong>
                </p>
              </div>
            </div>

            <button
              onClick={closeClaimModal}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {isSubmitted ? (
            <div className="text-center py-8 space-y-3">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Verification Sent!</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                The finder has received your proof details. Once reviewed, you will be notified to coordinate a safe handoff.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 leading-relaxed flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <span>
                  Please describe private identifying marks (wallpaper, inner pockets, serial number, receipts, stickers) not visible in public photos.
                </span>
              </div>

              {/* Founder's Security Challenge if present */}
              {claimTargetItem.securityQuestion && (
                <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-900">
                    <Lock className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Founder's Verification Challenge:</span>
                  </div>
                  <p className="text-xs text-emerald-800 font-medium">
                    "{claimTargetItem.securityQuestion}"
                  </p>
                  <input
                    type="text"
                    required
                    placeholder="Your answer to this challenge..."
                    value={securityAnswer}
                    onChange={(e) => setSecurityAnswer(e.target.value)}
                    className="w-full bg-white border border-emerald-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              )}

              {/* Description of Proof */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Proof of Ownership & Details <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Describe unique marks, serial number, exact contents, receipts, or previous photos you have..."
                  value={proofDescription}
                  onChange={(e) => setProofDescription(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-xs text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                />
              </div>

              {/* Upload Proof Images to Firebase Storage */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Attach Receipts or Previous Photos (Optional)
                </label>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handlePhotoUpload}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={isUploadingPhoto}
                  className="w-full py-2.5 px-3 border border-dashed border-slate-300 hover:border-emerald-500 rounded-xl bg-slate-50 hover:bg-emerald-50/40 text-xs text-slate-600 font-medium transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isUploadingPhoto ? (
                    <>
                      <Loader2 className="w-4 h-4 text-emerald-600 animate-spin" />
                      <span>Uploading to Firebase Storage...</span>
                    </>
                  ) : (
                    <>
                      <Upload className="w-4 h-4 text-slate-500" />
                      <span>Upload Proof Photos / Receipts</span>
                    </>
                  )}
                </button>

                {proofPhotos.length > 0 && (
                  <div className="mt-2.5 flex gap-2 flex-wrap">
                    {proofPhotos.map((photo, idx) => (
                      <div key={idx} className="relative w-16 h-16 rounded-xl overflow-hidden border border-slate-200 group">
                        <img src={photo} alt="proof" className="w-full h-full object-cover" />
                        <button
                          type="button"
                          onClick={() => handleRemovePhoto(idx)}
                          className="absolute top-1 right-1 p-0.5 rounded-full bg-slate-900/80 text-white hover:bg-rose-600 transition-colors"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Handoff Preference */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Safe Handoff Preference
                </label>
                <select
                  value={handoffPreference}
                  onChange={(e) => setHandoffPreference(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                >
                  <option value="Security / Help Desk">Campus / Building Security Help Desk</option>
                  <option value="Main Library Reception">Main Library Reception Desk</option>
                  <option value="Well-lit Public Plaza">Well-lit Public Campus Plaza</option>
                </select>
              </div>

              {/* Error Banner if submission fails */}
              {submitError && (
                <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs space-y-1">
                  <div className="flex items-center gap-1.5 font-bold">
                    <AlertCircle className="w-4 h-4 text-rose-600" />
                    <span>Submission Error</span>
                  </div>
                  <p className="text-rose-700 font-mono text-[11px]">{submitError}</p>
                </div>
              )}

              {/* Submit Buttons */}
              <div className="pt-3 flex items-center justify-end gap-3 border-t border-slate-100">
                <button
                  type="button"
                  disabled={isSubmitting}
                  onClick={closeClaimModal}
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-colors flex items-center gap-1.5 cursor-pointer disabled:opacity-60 disabled:cursor-wait"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Submitting to Firebase...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Verification Request</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
