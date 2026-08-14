import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Camera,
  MapPin,
  Calendar,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Upload,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Gift,
  HelpCircle,
  Lock,
  Layers,
  Image as ImageIcon,
  Tag
} from 'lucide-react';
import { ItemCategory, ItemType, Item } from '../../types';
import { CATEGORIES_LIST, SAMPLE_PRESET_IMAGES } from '../../data/mockData';
import { useApp } from '../../context/AppContext';

export const ReportWizardModal: React.FC = () => {
  const {
    reportWizardOpen,
    reportWizardType,
    closeReportWizard,
    addItem,
    openItemDetail,
    setCurrentView,
    openMatchModal,
    items,
    language,
    t,
    getCategoryLabel,
  } = useApp();

  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1); // 5 is success screen
  const [createdItem, setCreatedItem] = useState<Item | null>(null);

  // Form fields
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<ItemCategory>('Bags & Backpacks');
  const [description, setDescription] = useState('');
  const [identifyingFeatures, setIdentifyingFeatures] = useState('');

  const [locationName, setLocationName] = useState('');
  const [city, setCity] = useState('Mangaluru');
  const [specificSpot, setSpecificSpot] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState('14:00');

  const [images, setImages] = useState<string[]>([]);
  const [customImageUrl, setCustomImageUrl] = useState('');
  const [reward, setReward] = useState('');
  const [securityQuestion, setSecurityQuestion] = useState('');
  const [contactMethod, setContactMethod] = useState<'in_app' | 'campus_desk' | 'phone'>('in_app');
  const [tagInput, setTagInput] = useState('');
  const [tags, setTags] = useState<string[]>(['campus', 'item']);

  // Reset form when modal opens
  const resetForm = () => {
    setStep(1);
    setTitle('');
    setDescription('');
    setIdentifyingFeatures('');
    setLocationName('');
    setCity('Mangaluru');
    setSpecificSpot('');
    setImages([]);
    setReward('');
    setSecurityQuestion('');
    setCreatedItem(null);
  };

  const handleClose = () => {
    resetForm();
    closeReportWizard();
  };

  const handleAddPresetImage = (url: string) => {
    if (!images.includes(url)) {
      setImages((prev) => [...prev, url]);
    }
  };

  const handleAddCustomImage = (e: React.FormEvent) => {
    e.preventDefault();
    if (customImageUrl.trim() && !images.includes(customImageUrl.trim())) {
      setImages((prev) => [...prev, customImageUrl.trim()]);
      setCustomImageUrl('');
    }
  };

  const handleRemoveImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleAddTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim().toLowerCase())) {
      setTags((prev) => [...prev, tagInput.trim().toLowerCase()]);
      setTagInput('');
    }
  };

  const handleSubmit = () => {
    // Fallback image if none uploaded
    const finalImages =
      images.length > 0
        ? images
        : SAMPLE_PRESET_IMAGES[category] || [
            'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=80',
          ];

    const newItem = addItem({
      type: reportWizardType,
      title: title || `${category} (${reportWizardType.toUpperCase()})`,
      category,
      description: description || `Reported ${reportWizardType} item at ${locationName}.`,
      identifyingFeatures,
      location: {
        name: locationName || 'Central Community Area',
        city: city || 'Local Area',
        specificSpot,
      },
      date,
      time,
      images: finalImages,
      status: 'active',
      reward: reportWizardType === 'lost' && reward ? reward : undefined,
      securityQuestion: reportWizardType === 'found' && securityQuestion ? securityQuestion : undefined,
      tags: tags.length > 0 ? tags : [category.toLowerCase()],
    });

    setCreatedItem(newItem);
    setStep(5); // Move to success step
  };

  if (!reportWizardOpen) return null;

  const isLost = reportWizardType === 'lost';
  const stepsList = [
    { num: 1, label: 'Details' },
    { num: 2, label: 'Location' },
    { num: 3, label: 'Photos' },
    { num: 4, label: 'Contact' },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-2xl w-full max-h-[92vh] overflow-y-auto flex flex-col"
        >
          {/* Header */}
          <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-100 flex items-center justify-between z-20">
            <div className="flex items-center gap-2.5">
              <span
                className={`w-3 h-3 rounded-full ${
                  isLost ? 'bg-rose-500' : 'bg-emerald-500'
                }`}
              />
              <h2 className="text-lg font-bold text-slate-900 font-heading">
                {isLost ? 'Report a Lost Item' : 'Report a Found Item'}
              </h2>
            </div>

            <button
              onClick={handleClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Progress Indicator (if not on success step) */}
          {step < 5 && (
            <div className="px-6 pt-5 pb-2 bg-slate-50 border-b border-slate-100">
              <div className="flex items-center justify-between relative">
                {/* Connecting Line */}
                <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-0.5 bg-slate-200 z-0" />
                <div
                  className="absolute top-1/2 left-0 -translate-y-1/2 h-0.5 bg-emerald-500 transition-all duration-300 z-0"
                  style={{ width: `${((step - 1) / 3) * 100}%` }}
                />

                {stepsList.map((st) => {
                  const isCompleted = step > st.num;
                  const isCurrent = step === st.num;
                  return (
                    <div key={st.num} className="relative z-10 flex flex-col items-center">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                          isCompleted
                            ? 'bg-emerald-600 text-white shadow-xs'
                            : isCurrent
                            ? 'bg-slate-900 text-white ring-4 ring-slate-200'
                            : 'bg-slate-200 text-slate-500'
                        }`}
                      >
                        {isCompleted ? <CheckCircle2 className="w-4 h-4" /> : st.num}
                      </div>
                      <span
                        className={`text-[11px] font-semibold mt-1.5 ${
                          isCurrent ? 'text-slate-900 font-bold' : 'text-slate-400'
                        }`}
                      >
                        {st.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step Content */}
          <div className="p-6 sm:p-8 flex-1">
            {/* Step 1: Item Details */}
            {step === 1 && (
              <div className="space-y-5 animate-in fade-in slide-in-from-right-2 duration-200">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-slate-900 font-heading">
                    Step 1 — Item Details
                  </h3>
                  <p className="text-xs text-slate-500">
                    Provide basic details to help match this item in community searches.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Item Title / Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={
                      isLost
                        ? 'e.g., Black Aer Tech Backpack with laptop sleeve'
                        : 'e.g., Apple AirPods Pro in navy silicone case'
                    }
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Category <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as ItemCategory)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  >
                    {CATEGORIES_LIST.map((cat) => (
                      <option key={cat.name} value={cat.name}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Item Description <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Describe color, size, brand, model, condition, and any contents..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center justify-between">
                    <span>Identifying Characteristics (Optional)</span>
                    <span className="text-[10px] text-slate-400 font-normal">
                      Scratches, keychains, stickers, initial engravings
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Yellow carabiner clip on left strap, initial 'A.R.' monogram"
                    value={identifyingFeatures}
                    onChange={(e) => setIdentifyingFeatures(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>
            )}

            {/* Step 2: Location & Date */}
            {step === 2 && (
              <div className="space-y-5 animate-in fade-in slide-in-from-right-2 duration-200">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-slate-900 font-heading">
                    Step 2 — Location & Date
                  </h3>
                  <p className="text-xs text-slate-500">
                    Where and when was the item {isLost ? 'lost' : 'found'}?
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Venue / Building Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sahyadri College Campus, Central Library"
                      value={locationName}
                      onChange={(e) => setLocationName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      City / Area <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mangaluru, Seattle, Boston"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Specific Room / Bench / Spot (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 2nd Floor Quiet Study Desks #4, Cedar Bench outside Cafe"
                    value={specificSpot}
                    onChange={(e) => setSpecificSpot(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Date {isLost ? 'Lost' : 'Found'} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Approximate Time
                    </label>
                    <input
                      type="time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Photos & Verification Questions */}
            {step === 3 && (
              <div className="space-y-5 animate-in fade-in slide-in-from-right-2 duration-200">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-slate-900 font-heading">
                    Step 3 — Photos & Verification
                  </h3>
                  <p className="text-xs text-slate-500">
                    Upload images or choose a preset reference template.
                  </p>
                </div>

                {/* Upload Area */}
                <div className="border-2 border-dashed border-slate-200 hover:border-emerald-500 rounded-2xl p-6 text-center bg-slate-50/60 transition-colors">
                  <Camera className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                  <p className="text-xs font-bold text-slate-700">
                    Add photos for higher match accuracy
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Click a preset below or enter an image URL
                  </p>

                  <div className="mt-3 flex gap-2 max-w-md mx-auto">
                    <input
                      type="url"
                      placeholder="Paste image URL (https://...)"
                      value={customImageUrl}
                      onChange={(e) => setCustomImageUrl(e.target.value)}
                      className="flex-1 bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                    <button
                      type="button"
                      onClick={handleAddCustomImage}
                      className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-3 py-2 rounded-xl transition-colors"
                    >
                      Add Photo
                    </button>
                  </div>
                </div>

                {/* Preset Suggestions for Category */}
                <div>
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
                    Quick Sample Presets for {category}:
                  </span>
                  <div className="flex gap-2 overflow-x-auto pb-1">
                    {(SAMPLE_PRESET_IMAGES[category] || SAMPLE_PRESET_IMAGES['Electronics']).map((url, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleAddPresetImage(url)}
                        className={`relative w-20 h-16 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 cursor-pointer ${
                          images.includes(url)
                            ? 'border-emerald-500 ring-2 ring-emerald-500/20'
                            : 'border-slate-200 opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img src={url} alt="preset" className="w-full h-full object-cover" />
                        {images.includes(url) && (
                          <div className="absolute inset-0 bg-emerald-600/30 flex items-center justify-center">
                            <CheckCircle2 className="w-5 h-5 text-white" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Selected Images List */}
                {images.length > 0 && (
                  <div>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
                      Selected Photos ({images.length})
                    </span>
                    <div className="flex gap-2 flex-wrap">
                      {images.map((img, idx) => (
                        <div key={idx} className="relative w-20 h-20 rounded-xl overflow-hidden border border-slate-200 group">
                          <img src={img} alt="selected" className="w-full h-full object-cover" />
                          <button
                            type="button"
                            onClick={() => handleRemoveImage(idx)}
                            className="absolute top-1 right-1 p-1 rounded-full bg-slate-900/80 text-white hover:bg-rose-600 transition-colors"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Specific field for Found items: Security challenge question */}
                {!isLost ? (
                  <div className="pt-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Claim Verification Challenge (Recommended)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. What color is the keychain? / What brand notebook is inside?"
                      value={securityQuestion}
                      onChange={(e) => setSecurityQuestion(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                    />
                    <p className="text-[11px] text-slate-400 mt-1">
                      Claimants must answer this question before you approve the handoff.
                    </p>
                  </div>
                ) : (
                  <div className="pt-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <Gift className="w-3.5 h-3.5 text-amber-500" />
                      <span>Optional Reward for Finder</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. $40 Cash Reward / Coffee Gift Card"
                      value={reward}
                      onChange={(e) => setReward(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                    />
                  </div>
                )}
              </div>
            )}

            {/* Step 4: Contact & Review */}
            {step === 4 && (
              <div className="space-y-5 animate-in fade-in slide-in-from-right-2 duration-200">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-slate-900 font-heading">
                    Step 4 — Privacy & Confirmation
                  </h3>
                  <p className="text-xs text-slate-500">
                    Choose how you want to be contacted by community members.
                  </p>
                </div>

                {/* Privacy Options */}
                <div className="space-y-2.5">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Preferred Communication
                  </label>

                  <div
                    onClick={() => setContactMethod('in_app')}
                    className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex items-start gap-3.5 ${
                      contactMethod === 'in_app'
                        ? 'border-emerald-500 bg-emerald-50/30'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-slate-900">
                        Secure Internal Messaging (Recommended)
                      </p>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Your phone number and email remain private. Users chat directly through FindIt.
                      </p>
                    </div>
                  </div>

                  <div
                    onClick={() => setContactMethod('campus_desk')}
                    className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex items-start gap-3.5 ${
                      contactMethod === 'campus_desk'
                        ? 'border-emerald-500 bg-emerald-50/30'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <Layers className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-slate-900">
                        Campus / Community Security Desk Handoff
                      </p>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Deposit item at a verified lost & found desk (e.g. Library reception or Security).
                      </p>
                    </div>
                  </div>
                </div>

                {/* Summary Preview Box */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Listing Summary
                  </span>
                  <div className="text-xs text-slate-700 space-y-1">
                    <p><span className="font-semibold text-slate-900">Title:</span> {title || 'Untitled item'}</p>
                    <p><span className="font-semibold text-slate-900">Category:</span> {category}</p>
                    <p><span className="font-semibold text-slate-900">Location:</span> {locationName || 'Unspecified'}, {city}</p>
                    <p><span className="font-semibold text-slate-900">Date:</span> {date}</p>
                    {reward && <p><span className="font-semibold text-amber-700">Reward:</span> {reward}</p>}
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Success Screen */}
            {step === 5 && createdItem && (
              <div className="text-center py-6 space-y-6 animate-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-3xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md shadow-emerald-600/10 ring-8 ring-emerald-50">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2 max-w-md mx-auto">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                    Published to Community
                  </span>
                  <h3 className="text-2xl font-extrabold text-slate-900 font-heading">
                    {isLost ? 'Your Lost Report is Active!' : 'Your Found Item Has Been Posted!'}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    We have instantly added <strong className="text-slate-800">"{createdItem.title}"</strong> to the community database. Our system is now scanning for potential matches.
                  </p>
                </div>

                {/* Quick Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <button
                    onClick={() => {
                      closeReportWizard();
                      openItemDetail(createdItem);
                    }}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-md transition-colors cursor-pointer"
                  >
                    View Post Listing
                  </button>

                  <button
                    onClick={() => {
                      closeReportWizard();
                      setCurrentView('home');
                    }}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm transition-colors cursor-pointer"
                  >
                    Return to Home
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Footer Controls (if not success) */}
          {step < 5 && (
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep((prev) => (prev - 1) as any)}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-white text-slate-700 font-semibold text-xs transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
              ) : (
                <div />
              )}

              {step < 4 ? (
                <button
                  type="button"
                  disabled={step === 1 && !title.trim()}
                  onClick={() => setStep((prev) => (prev + 1) as any)}
                  className={`px-6 py-2.5 rounded-xl text-white font-bold text-xs sm:text-sm transition-all flex items-center gap-1.5 cursor-pointer shadow-md ${
                    step === 1 && !title.trim()
                      ? 'bg-slate-300 cursor-not-allowed opacity-70'
                      : isLost
                      ? 'bg-rose-600 hover:bg-rose-500'
                      : 'bg-emerald-600 hover:bg-emerald-500'
                  }`}
                >
                  <span>Continue</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className={`px-7 py-3 rounded-xl text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer ${
                    isLost
                      ? 'bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500'
                      : 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Submit & Publish</span>
                </button>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
