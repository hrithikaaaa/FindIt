import React, { useState, useRef, useEffect } from 'react';
import {
  Compass,
  Search,
  Bell,
  Plus,
  User as UserIcon,
  LogOut,
  ChevronDown,
  Menu,
  X,
  Shield,
  Layers,
  Sparkles,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  FolderHeart,
  Users,
  Globe,
  Languages
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const Navbar: React.FC = () => {
  const {
    currentView,
    setCurrentView,
    setDashboardTab,
    currentUser,
    isLoggedIn,
    logout,
    openAuthModal,
    openReportWizard,
    unreadNotificationsCount,
    notifications,
    markNotificationAsRead,
    markAllNotificationsAsRead,
    setFilters,
    allUsers,
    switchUser,
    language,
    setLanguage,
    t,
  } = useApp();

  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [notifMenuOpen, setNotifMenuOpen] = useState(false);
  const [reportMenuOpen, setReportMenuOpen] = useState(false);
  const [demoMenuOpen, setDemoMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const userMenuRef = useRef<HTMLDivElement>(null);
  const notifMenuRef = useRef<HTMLDivElement>(null);
  const reportMenuRef = useRef<HTMLDivElement>(null);
  const demoMenuRef = useRef<HTMLDivElement>(null);
  const langMenuRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setUserMenuOpen(false);
      }
      if (notifMenuRef.current && !notifMenuRef.current.contains(event.target as Node)) {
        setNotifMenuOpen(false);
      }
      if (reportMenuRef.current && !reportMenuRef.current.contains(event.target as Node)) {
        setReportMenuOpen(false);
      }
      if (demoMenuRef.current && !demoMenuRef.current.contains(event.target as Node)) {
        setDemoMenuOpen(false);
      }
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setLangMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navigateToExplore = (type: 'all' | 'lost' | 'found') => {
    setFilters((prev) => ({ ...prev, type }));
    setCurrentView('explore');
    setMobileMenuOpen(false);
  };

  const navigateToDashboard = (tab: any) => {
    setDashboardTab(tab);
    setCurrentView('dashboard');
    setUserMenuOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-navbar"
      className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all shadow-xs"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          
          {/* Left: Brand Logo & Desktop Navigation */}
          <div className="flex items-center gap-8">
            <button
              id="brand-logo-btn"
              onClick={() => {
                setCurrentView('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2.5 group cursor-pointer text-left"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 flex items-center justify-center shadow-md shadow-emerald-950/20 group-hover:scale-105 transition-transform">
                <div className="relative">
                  <Compass className="w-5 h-5 text-emerald-400 stroke-[2.2]" />
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-400 rounded-full animate-ping opacity-75" />
                </div>
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-slate-900 flex items-center gap-1 font-heading">
                  Find<span className="text-emerald-600">It</span>
                </span>
                <span className="block text-[10px] font-medium uppercase tracking-widest text-slate-400">
                  {language === 'kn' ? 'ಕನ್ನಡ ಆವೃತ್ತಿ · Lost & Found' : t.tagline}
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-slate-600">
              <button
                id="nav-home"
                onClick={() => setCurrentView('home')}
                className={`px-3.5 py-2 rounded-lg transition-colors ${
                  currentView === 'home'
                    ? 'text-slate-900 bg-slate-100 font-semibold'
                    : 'hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {t.navHome}
              </button>
              <button
                id="nav-lost-items"
                onClick={() => navigateToExplore('lost')}
                className="px-3.5 py-2 rounded-lg hover:text-slate-900 hover:bg-slate-50 transition-colors flex items-center gap-1.5"
              >
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                {t.navLostItems}
              </button>
              <button
                id="nav-found-items"
                onClick={() => navigateToExplore('found')}
                className="px-3.5 py-2 rounded-lg hover:text-slate-900 hover:bg-slate-50 transition-colors flex items-center gap-1.5"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                {t.navFoundItems}
              </button>
              <button
                id="nav-explore"
                onClick={() => navigateToExplore('all')}
                className={`px-3.5 py-2 rounded-lg transition-colors ${
                  currentView === 'explore'
                    ? 'text-slate-900 bg-slate-100 font-semibold'
                    : 'hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {t.navExplore}
              </button>
              <button
                id="nav-how-it-works"
                onClick={() => setCurrentView('how-it-works')}
                className={`px-3.5 py-2 rounded-lg transition-colors ${
                  currentView === 'how-it-works'
                    ? 'text-slate-900 bg-slate-100 font-semibold'
                    : 'hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {t.navHowItWorks}
              </button>
              <button
                id="nav-safety"
                onClick={() => setCurrentView('safety')}
                className={`px-3.5 py-2 rounded-lg transition-colors ${
                  currentView === 'safety'
                    ? 'text-slate-900 bg-slate-100 font-semibold'
                    : 'hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {t.navSafety}
              </button>
            </nav>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            
            {/* Language Selector Dropdown (English / ಕನ್ನಡ) */}
            <div className="relative" ref={langMenuRef}>
              <button
                id="language-switcher-btn"
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className={`px-2.5 py-1.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                  language === 'kn'
                    ? 'bg-amber-500/10 border-amber-500/30 text-amber-900 font-bold hover:bg-amber-500/20'
                    : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
                title={t.languageSelectPrompt}
                aria-label="Select Language"
              >
                <Globe className={`w-3.5 h-3.5 ${language === 'kn' ? 'text-amber-700' : 'text-slate-500'}`} />
                <span className="font-medium">
                  {language === 'kn' ? 'ಕನ್ನಡ' : 'English'}
                </span>
                <span className="text-[10px] px-1 py-0.2 rounded bg-slate-100 text-slate-600 uppercase font-mono">
                  {language}
                </span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-52 bg-white rounded-2xl shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="px-3.5 py-1.5 border-b border-slate-100">
                    <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      {language === 'kn' ? 'ಭಾಷೆ ಆಯ್ಕೆಮಾಡಿ' : 'Select Language'}
                    </p>
                  </div>
                  
                  <div className="py-1">
                    <button
                      id="lang-option-en"
                      onClick={() => {
                        setLanguage('en');
                        setLangMenuOpen(false);
                      }}
                      className={`w-full px-3.5 py-2.5 text-left text-xs sm:text-sm flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer ${
                        language === 'en' ? 'bg-emerald-50 text-emerald-900 font-bold' : 'text-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-base">🇬🇧</span>
                        <div>
                          <p className="font-semibold leading-none">English</p>
                          <p className="text-[10px] text-slate-400 mt-0.5">Default English (Global)</p>
                        </div>
                      </div>
                      {language === 'en' && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                    </button>

                    <button
                      id="lang-option-kn"
                      onClick={() => {
                        setLanguage('kn');
                        setLangMenuOpen(false);
                      }}
                      className={`w-full px-3.5 py-2.5 text-left text-xs sm:text-sm flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer ${
                        language === 'kn' ? 'bg-amber-50 text-amber-950 font-bold' : 'text-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-base">🇮🇳</span>
                        <div>
                          <p className="font-semibold leading-none">ಕನ್ನಡ (Kannada)</p>
                          <p className="text-[10px] text-amber-700/80 mt-0.5">ಕರ್ನಾಟಕ & ಸಮುದಾಯ ಬಳಕೆ</p>
                        </div>
                      </div>
                      {language === 'kn' && <CheckCircle2 className="w-4 h-4 text-amber-600" />}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Demo Persona Switcher */}
            <div className="relative hidden lg:block" ref={demoMenuRef}>
              <button
                id="demo-user-picker-btn"
                onClick={() => setDemoMenuOpen(!demoMenuOpen)}
                className="px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs font-medium text-slate-600 hover:bg-slate-50 transition-colors flex items-center gap-1.5"
                title="Switch Demo Persona"
              >
                <Users className="w-3.5 h-3.5 text-slate-500" />
                <span className="truncate max-w-[90px]">{currentUser.name.split(' ')[0]}</span>
                <span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-semibold">
                  {currentUser.role}
                </span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {demoMenuOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="px-3.5 py-2 border-b border-slate-100">
                    <p className="text-xs font-semibold text-slate-700">{t.navSwitchPersona}</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">Test as different community roles</p>
                  </div>
                  <div className="py-1">
                    {allUsers.map((u) => (
                      <button
                        key={u.id}
                        onClick={() => {
                          switchUser(u.id);
                          setDemoMenuOpen(false);
                        }}
                        className={`w-full px-3.5 py-2 text-left text-xs flex items-center gap-2.5 hover:bg-slate-50 transition-colors ${
                          u.id === currentUser.id ? 'bg-emerald-50/70 text-emerald-900 font-medium' : 'text-slate-700'
                        }`}
                      >
                        <img src={u.avatar} alt={u.name} className="w-6 h-6 rounded-full object-cover" />
                        <div className="flex-1 min-w-0">
                          <p className="font-medium truncate">{u.name}</p>
                          <p className="text-[10px] text-slate-400">{u.role} · {u.reputationPoints} pts</p>
                        </div>
                        {u.id === currentUser.id && (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Notifications Dropdown */}
            {isLoggedIn && (
              <div className="relative" ref={notifMenuRef}>
                <button
                  id="notifications-btn"
                  onClick={() => setNotifMenuOpen(!notifMenuOpen)}
                  className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors relative"
                  aria-label="Notifications"
                >
                  <Bell className="w-5 h-5" />
                  {unreadNotificationsCount > 0 && (
                    <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-emerald-500 text-white rounded-full text-[10px] font-bold flex items-center justify-center ring-2 ring-white">
                      {unreadNotificationsCount}
                    </span>
                  )}
                </button>

                {notifMenuOpen && (
                  <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200/90 py-3 z-50">
                    <div className="px-4 py-2 flex items-center justify-between border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-bold text-slate-900">{t.navNotifications}</h4>
                        {unreadNotificationsCount > 0 && (
                          <span className="bg-emerald-100 text-emerald-800 text-[11px] font-semibold px-2 py-0.5 rounded-full">
                            {unreadNotificationsCount} new
                          </span>
                        )}
                      </div>
                      {unreadNotificationsCount > 0 && (
                        <button
                          onClick={() => markAllNotificationsAsRead()}
                          className="text-xs text-emerald-600 hover:text-emerald-700 font-medium cursor-pointer"
                        >
                          Mark all as read
                        </button>
                      )}
                    </div>

                    <div className="max-h-80 overflow-y-auto divide-y divide-slate-100">
                      {notifications.length === 0 ? (
                        <div className="py-8 text-center text-slate-400 text-xs">
                          No notifications yet
                        </div>
                      ) : (
                        notifications.slice(0, 5).map((notif) => (
                          <div
                            key={notif.id}
                            onClick={() => {
                              markNotificationAsRead(notif.id);
                              if (notif.type === 'match_found') {
                                navigateToDashboard('matches');
                              } else if (notif.type === 'message_received') {
                                navigateToDashboard('messages');
                              } else if (notif.type === 'claim_received' || notif.type === 'claim_approved') {
                                navigateToDashboard('claims');
                              }
                              setNotifMenuOpen(false);
                            }}
                            className={`p-3.5 hover:bg-slate-50 cursor-pointer transition-colors flex gap-3 ${
                              !notif.isRead ? 'bg-emerald-50/40' : ''
                            }`}
                          >
                            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                              {notif.type === 'match_found' ? (
                                <Sparkles className="w-4 h-4 text-amber-500" />
                              ) : notif.type === 'message_received' ? (
                                <MessageSquare className="w-4 h-4 text-sky-500" />
                              ) : notif.type === 'item_reunited' ? (
                                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                              ) : (
                                <AlertCircle className="w-4 h-4 text-indigo-500" />
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-semibold text-slate-900">{notif.title}</p>
                              <p className="text-xs text-slate-600 mt-0.5 line-clamp-2 leading-relaxed">
                                {notif.message}
                              </p>
                              <span className="text-[10px] text-slate-400 mt-1 block">
                                {notif.timestamp}
                              </span>
                            </div>
                            {!notif.isRead && (
                              <span className="w-2 h-2 rounded-full bg-emerald-500 self-center flex-shrink-0" />
                            )}
                          </div>
                        ))
                      )}
                    </div>

                    <div className="px-4 pt-2 border-t border-slate-100 text-center">
                      <button
                        onClick={() => {
                          navigateToDashboard('notifications');
                          setNotifMenuOpen(false);
                        }}
                        className="text-xs text-slate-600 hover:text-slate-900 font-medium py-1"
                      >
                        View all in Dashboard →
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Report Item Dropdown Button */}
            <div className="relative" ref={reportMenuRef}>
              <button
                id="report-item-dropdown-btn"
                onClick={() => setReportMenuOpen(!reportMenuOpen)}
                className="bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold px-3 sm:px-3.5 py-2.5 rounded-xl transition-all shadow-sm hover:shadow-md flex items-center gap-1.5 cursor-pointer"
              >
                <Plus className="w-4 h-4 text-emerald-400 stroke-[2.5]" />
                <span>{t.navReportItem}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {reportMenuOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-200/90 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    {t.navReportItem}
                  </div>
                  <button
                    id="menu-report-lost"
                    onClick={() => {
                      openReportWizard('lost');
                      setReportMenuOpen(false);
                    }}
                    className="w-full px-4 py-2.5 text-left text-xs sm:text-sm text-slate-700 hover:bg-rose-50 hover:text-rose-900 flex items-center gap-2.5 transition-colors cursor-pointer"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <div>
                      <p className="font-semibold text-slate-900">{t.optLostTitle}</p>
                      <p className="text-[11px] text-slate-500">{language === 'kn' ? 'ಸಹಾಯ ಕೇಳಿ ವರದಿ ಮಾಡಿ' : 'Ask community to help find it'}</p>
                    </div>
                  </button>

                  <button
                    id="menu-report-found"
                    onClick={() => {
                      openReportWizard('found');
                      setReportMenuOpen(false);
                    }}
                    className="w-full px-4 py-2.5 text-left text-xs sm:text-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-900 flex items-center gap-2.5 transition-colors cursor-pointer"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <div>
                      <p className="font-semibold text-slate-900">{t.optFoundTitle}</p>
                      <p className="text-[11px] text-slate-500">{language === 'kn' ? 'ಮಾಲೀಕರಿಗೆ ತಲುಪಿಸಲು ನೆರವಾಗಿ' : 'Help return it to rightful owner'}</p>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* User Account / Profile */}
            {isLoggedIn ? (
              <div className="relative" ref={userMenuRef}>
                <button
                  id="user-profile-menu-btn"
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  <img
                    src={currentUser.avatar}
                    alt={currentUser.name}
                    className="w-8 h-8 rounded-xl object-cover ring-2 ring-emerald-500/30"
                  />
                  <div className="hidden sm:block text-left">
                    <p className="text-xs font-semibold text-slate-900 leading-tight">
                      {currentUser.name}
                    </p>
                    <p className="text-[10px] text-emerald-600 font-medium">
                      {currentUser.reputationPoints} pts
                    </p>
                  </div>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 hidden sm:block" />
                </button>

                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-slate-200/90 py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                    <div className="px-4 py-3 border-b border-slate-100">
                      <p className="text-sm font-bold text-slate-900">{currentUser.name}</p>
                      <p className="text-xs text-slate-500 truncate">{currentUser.email}</p>
                      <div className="mt-2 flex items-center justify-between text-xs bg-slate-50 p-2 rounded-lg">
                        <span className="text-slate-600">{t.dashRank}:</span>
                        <span className="font-semibold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-full text-[11px]">
                          {currentUser.role}
                        </span>
                      </div>
                    </div>

                    <div className="py-1">
                      <button
                        id="menu-dashboard"
                        onClick={() => navigateToDashboard('overview')}
                        className="w-full px-4 py-2 text-left text-xs sm:text-sm text-slate-700 hover:bg-slate-50 flex items-center gap-2.5"
                      >
                        <Layers className="w-4 h-4 text-slate-400" />
                        {t.dashOverview}
                      </button>
                      <button
                        id="menu-my-lost"
                        onClick={() => navigateToDashboard('lost-items')}
                        className="w-full px-4 py-2 text-left text-xs sm:text-sm text-slate-700 hover:bg-slate-50 flex items-center gap-2.5"
                      >
                        <span className="w-2 h-2 rounded-full bg-rose-500" />
                        {t.dashMyLost}
                      </button>
                      <button
                        id="menu-my-found"
                        onClick={() => navigateToDashboard('found-items')}
                        className="w-full px-4 py-2 text-left text-xs sm:text-sm text-slate-700 hover:bg-slate-50 flex items-center gap-2.5"
                      >
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        {t.dashMyFound}
                      </button>
                      <button
                        id="menu-matches"
                        onClick={() => navigateToDashboard('matches')}
                        className="w-full px-4 py-2 text-left text-xs sm:text-sm text-slate-700 hover:bg-slate-50 flex items-center gap-2.5"
                      >
                        <Sparkles className="w-4 h-4 text-amber-500" />
                        {t.dashMatches}
                      </button>
                      <button
                        id="menu-messages"
                        onClick={() => navigateToDashboard('messages')}
                        className="w-full px-4 py-2 text-left text-xs sm:text-sm text-slate-700 hover:bg-slate-50 flex items-center gap-2.5"
                      >
                        <MessageSquare className="w-4 h-4 text-sky-500" />
                        {t.dashMessages}
                      </button>
                      <button
                        id="menu-claims"
                        onClick={() => navigateToDashboard('claims')}
                        className="w-full px-4 py-2 text-left text-xs sm:text-sm text-slate-700 hover:bg-slate-50 flex items-center gap-2.5"
                      >
                        <Shield className="w-4 h-4 text-emerald-600" />
                        {t.dashClaims}
                      </button>
                    </div>

                    <div className="pt-1 border-t border-slate-100">
                      <button
                        id="menu-logout"
                        onClick={() => {
                          logout();
                          setUserMenuOpen(false);
                        }}
                        className="w-full px-4 py-2 text-left text-xs sm:text-sm text-rose-600 hover:bg-rose-50 flex items-center gap-2.5"
                      >
                        <LogOut className="w-4 h-4" />
                        {t.navSignOut}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <button
                id="navbar-signin-btn"
                onClick={() => openAuthModal('login')}
                className="text-xs sm:text-sm font-semibold text-slate-700 hover:text-slate-900 px-3 py-2 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
              >
                {t.navSignIn}
              </button>
            )}

            {/* Mobile menu hamburger */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-3 shadow-xl">
          {/* Mobile Language Switcher */}
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
              <Globe className="w-4 h-4 text-emerald-600" />
              <span>{t.navLanguage}</span>
            </div>
            <div className="flex gap-1.5">
              <button
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                  language === 'en'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white text-slate-700 border border-slate-200'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage('kn')}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                  language === 'kn'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'bg-white text-slate-700 border border-slate-200'
                }`}
              >
                ಕನ್ನಡ
              </button>
            </div>
          </div>

          <div className="flex flex-col space-y-1">
            <button
              onClick={() => {
                setCurrentView('home');
                setMobileMenuOpen(false);
              }}
              className="px-3 py-2.5 text-left text-sm font-semibold text-slate-800 rounded-lg hover:bg-slate-50"
            >
              {t.navHome}
            </button>
            <button
              onClick={() => navigateToExplore('lost')}
              className="px-3 py-2.5 text-left text-sm font-semibold text-rose-700 rounded-lg hover:bg-rose-50 flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-rose-500" />
              {t.navLostItems}
            </button>
            <button
              onClick={() => navigateToExplore('found')}
              className="px-3 py-2.5 text-left text-sm font-semibold text-emerald-700 rounded-lg hover:bg-emerald-50 flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              {t.navFoundItems}
            </button>
            <button
              onClick={() => navigateToExplore('all')}
              className="px-3 py-2.5 text-left text-sm font-semibold text-slate-800 rounded-lg hover:bg-slate-50"
            >
              {t.navExplore}
            </button>
            <button
              onClick={() => {
                setCurrentView('how-it-works');
                setMobileMenuOpen(false);
              }}
              className="px-3 py-2.5 text-left text-sm font-semibold text-slate-800 rounded-lg hover:bg-slate-50"
            >
              {t.navHowItWorks}
            </button>
            <button
              onClick={() => {
                setCurrentView('safety');
                setMobileMenuOpen(false);
              }}
              className="px-3 py-2.5 text-left text-sm font-semibold text-slate-800 rounded-lg hover:bg-slate-50"
            >
              {t.navSafety}
            </button>
          </div>

          <div className="pt-3 border-t border-slate-100 flex gap-2">
            <button
              onClick={() => {
                openReportWizard('lost');
                setMobileMenuOpen(false);
              }}
              className="flex-1 bg-rose-600 text-white text-xs font-semibold py-2.5 rounded-xl shadow-xs text-center"
            >
              {t.optLostBtn}
            </button>
            <button
              onClick={() => {
                openReportWizard('found');
                setMobileMenuOpen(false);
              }}
              className="flex-1 bg-emerald-600 text-white text-xs font-semibold py-2.5 rounded-xl shadow-xs text-center"
            >
              {t.optFoundBtn}
            </button>
          </div>

          {/* Switch persona quick in mobile */}
          <div className="pt-2 border-t border-slate-100">
            <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-2">
              {t.navSwitchPersona}
            </p>
            <div className="grid grid-cols-2 gap-2">
              {allUsers.map((u) => (
                <button
                  key={u.id}
                  onClick={() => {
                    switchUser(u.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`p-2 rounded-xl text-left border text-xs flex items-center gap-2 ${
                    u.id === currentUser.id ? 'border-emerald-500 bg-emerald-50/50' : 'border-slate-200'
                  }`}
                >
                  <img src={u.avatar} alt={u.name} className="w-5 h-5 rounded-full object-cover" />
                  <span className="truncate font-medium">{u.name.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

