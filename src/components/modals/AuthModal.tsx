import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Lock, Mail, User as UserIcon, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { DEMO_USERS } from '../../data/mockData';

export const AuthModal: React.FC = () => {
  const { authModalOpen, authMode, closeAuthModal, setAuthMode, setCurrentUser, addToast } = useApp();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  if (!authModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (authMode === 'forgot') {
      addToast('info', 'Reset Link Sent', `Password reset instructions sent to ${email || 'your email'}.`);
      closeAuthModal();
      return;
    }

    // Default mock login/register
    const newUser = {
      id: `user-${Date.now()}`,
      name: name || email.split('@')[0] || 'Community Member',
      email: email || 'user@findit.community',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80',
      role: 'Student' as const,
      joinedDate: 'August 2026',
      reputationPoints: 120,
    };

    setCurrentUser(newUser);
    addToast('success', authMode === 'login' ? 'Signed In' : 'Account Created', `Welcome, ${newUser.name}!`);
    closeAuthModal();
  };

  const handleSelectDemo = (user: typeof DEMO_USERS[0]) => {
    setCurrentUser(user);
    addToast('success', 'Demo Switched', `Logged in as ${user.name} (${user.role}).`);
    closeAuthModal();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-md w-full p-6 sm:p-8 space-y-6"
        >
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold">
                F
              </div>
              <h2 className="text-xl font-bold text-slate-900 font-heading">
                {authMode === 'login' && 'Sign in to FindIt'}
                {authMode === 'register' && 'Create your account'}
                {authMode === 'forgot' && 'Reset your password'}
              </h2>
            </div>

            <button
              onClick={closeAuthModal}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Demo Switcher Strip */}
          <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 space-y-1.5">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
              1-Click Demo Profiles:
            </span>
            <div className="grid grid-cols-3 gap-2">
              {DEMO_USERS.map((user) => (
                <button
                  key={user.id}
                  type="button"
                  onClick={() => handleSelectDemo(user)}
                  className="p-2 rounded-xl bg-white hover:bg-emerald-50 border border-slate-200 text-left transition-colors cursor-pointer"
                >
                  <p className="text-[11px] font-bold text-slate-900 truncate">{user.name.split(' ')[0]}</p>
                  <p className="text-[10px] text-emerald-700">{user.role}</p>
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {authMode === 'register' && (
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Full Name
                </label>
                <div className="relative">
                  <UserIcon className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="Alex Morgan"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  placeholder="name@university.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
              </div>
            </div>

            {authMode !== 'forgot' && (
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Password
                  </label>
                  {authMode === 'login' && (
                    <button
                      type="button"
                      onClick={() => setAuthMode('forgot')}
                      className="text-xs text-emerald-600 hover:underline"
                    >
                      Forgot?
                    </button>
                  )}
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                </div>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md transition-colors flex items-center justify-center gap-1.5 cursor-pointer mt-2"
            >
              <span>
                {authMode === 'login' && 'Sign In'}
                {authMode === 'register' && 'Create Account'}
                {authMode === 'forgot' && 'Send Reset Link'}
              </span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>

          {/* Footer toggle */}
          <div className="pt-2 text-center text-xs text-slate-500 border-t border-slate-100">
            {authMode === 'login' && (
              <p>
                Don't have an account?{' '}
                <button
                  type="button"
                  onClick={() => setAuthMode('register')}
                  className="font-bold text-emerald-600 hover:underline"
                >
                  Sign up
                </button>
              </p>
            )}
            {authMode === 'register' && (
              <p>
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={() => setAuthMode('login')}
                  className="font-bold text-emerald-600 hover:underline"
                >
                  Sign in
                </button>
              </p>
            )}
            {authMode === 'forgot' && (
              <p>
                Remembered password?{' '}
                <button
                  type="button"
                  onClick={() => setAuthMode('login')}
                  className="font-bold text-emerald-600 hover:underline"
                >
                  Back to Sign in
                </button>
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
