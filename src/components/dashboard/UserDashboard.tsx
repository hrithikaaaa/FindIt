import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Layers,
  Search,
  Sparkles,
  MessageSquare,
  Bell,
  User as UserIcon,
  Settings,
  ShieldCheck,
  CheckCircle2,
  Clock,
  MapPin,
  Calendar,
  Trash2,
  Edit,
  ArrowRight,
  Send,
  Check,
  X,
  ExternalLink,
  Gift,
  HelpCircle,
  AlertCircle,
  Plus
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { ItemCard } from '../items/ItemCard';
import { getAllSystemMatches, findMatchesForItem } from '../../utils/matchingEngine';
import { Item } from '../../types';

export const UserDashboard: React.FC = () => {
  const {
    dashboardTab,
    setDashboardTab,
    currentUser,
    items,
    claims,
    updateClaimStatus,
    conversations,
    activeConversation,
    setActiveConversation,
    messages,
    sendMessage,
    notifications,
    markNotificationAsRead,
    markAllNotificationsAsRead,
    markItemReunited,
    deleteItem,
    openItemDetail,
    openReportWizard,
    openMatchModal,
    addToast,
  } = useApp();

  const [messageInput, setMessageInput] = useState('');
  const [profileName, setProfileName] = useState(currentUser.name);
  const [profilePhone, setProfilePhone] = useState(currentUser.phone || '+1 (555) 234-5678');

  // Filter items for current user
  const myLostItems = items.filter((i) => i.reportedBy.id === currentUser.id && i.type === 'lost');
  const myFoundItems = items.filter((i) => i.reportedBy.id === currentUser.id && i.type === 'found');
  const myReunitedItems = items.filter((i) => i.reportedBy.id === currentUser.id && i.status === 'reunited');

  // Compute all potential matches for user's items
  const userMatches = items
    .filter((i) => i.reportedBy.id === currentUser.id)
    .flatMap((userItem) => findMatchesForItem(userItem, items))
    .sort((a, b) => b.overallScore - a.overallScore);

  // Active messages for the selected conversation
  const currentMessages = messages.filter(
    (m) => activeConversation && m.conversationId === activeConversation.id
  );

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageInput.trim() || !activeConversation) return;
    sendMessage(activeConversation.participantId, messageInput, activeConversation.relatedItemId);
    setMessageInput('');
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    addToast('success', 'Profile Updated', 'Your community profile details have been saved.');
  };

  return (
    <div id="dashboard-container" className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Greeting Header */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="w-16 h-16 rounded-2xl object-cover ring-4 ring-emerald-500/20 shadow-md"
            />
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                  Welcome back, {currentUser.name}
                </h1>
                <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-0.5 rounded-full">
                  {currentUser.role}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500">
                Community Member since {currentUser.joinedDate} · <strong className="text-emerald-700">{currentUser.reputationPoints} Reputation Points</strong>
              </p>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex items-center gap-2.5 self-stretch sm:self-auto">
            <button
              onClick={() => openReportWizard('lost')}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs shadow-xs transition-colors cursor-pointer"
            >
              + Report Lost
            </button>
            <button
              onClick={() => openReportWizard('found')}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-xs transition-colors cursor-pointer"
            >
              + Report Found
            </button>
          </div>
        </div>

        {/* Dashboard Main Grid: Sidebar Navigation + Tab Contents */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Sidebar Navigation */}
          <div className="lg:col-span-3 bg-white rounded-3xl p-4 border border-slate-200/90 shadow-sm space-y-1">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 py-2">
              Navigation
            </p>

            <button
              onClick={() => setDashboardTab('overview')}
              className={`w-full px-3.5 py-2.5 rounded-xl text-left text-xs font-bold flex items-center justify-between transition-colors ${
                dashboardTab === 'overview'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Layers className="w-4 h-4" />
                <span>Dashboard Overview</span>
              </div>
            </button>

            <button
              onClick={() => setDashboardTab('lost-items')}
              className={`w-full px-3.5 py-2.5 rounded-xl text-left text-xs font-bold flex items-center justify-between transition-colors ${
                dashboardTab === 'lost-items'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <span>My Lost Items</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                {myLostItems.length}
              </span>
            </button>

            <button
              onClick={() => setDashboardTab('found-items')}
              className={`w-full px-3.5 py-2.5 rounded-xl text-left text-xs font-bold flex items-center justify-between transition-colors ${
                dashboardTab === 'found-items'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span>My Found Items</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                {myFoundItems.length}
              </span>
            </button>

            <button
              onClick={() => setDashboardTab('matches')}
              className={`w-full px-3.5 py-2.5 rounded-xl text-left text-xs font-bold flex items-center justify-between transition-colors ${
                dashboardTab === 'matches'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Possible Matches</span>
              </div>
              {userMatches.length > 0 && (
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-bold">
                  {userMatches.length}
                </span>
              )}
            </button>

            <button
              onClick={() => setDashboardTab('messages')}
              className={`w-full px-3.5 py-2.5 rounded-xl text-left text-xs font-bold flex items-center justify-between transition-colors ${
                dashboardTab === 'messages'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-sky-500" />
                <span>Messages & Handoffs</span>
              </div>
              {conversations.some((c) => c.unreadCount > 0) && (
                <span className="w-2 h-2 rounded-full bg-sky-500" />
              )}
            </button>

            <button
              onClick={() => setDashboardTab('claims')}
              className={`w-full px-3.5 py-2.5 rounded-xl text-left text-xs font-bold flex items-center justify-between transition-colors ${
                dashboardTab === 'claims'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Ownership Claims</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                {claims.length}
              </span>
            </button>

            <button
              onClick={() => setDashboardTab('notifications')}
              className={`w-full px-3.5 py-2.5 rounded-xl text-left text-xs font-bold flex items-center justify-between transition-colors ${
                dashboardTab === 'notifications'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Bell className="w-4 h-4 text-slate-400" />
                <span>Notifications</span>
              </div>
              {notifications.some((n) => !n.isRead) && (
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">
                  {notifications.filter((n) => !n.isRead).length}
                </span>
              )}
            </button>

            <button
              onClick={() => setDashboardTab('profile')}
              className={`w-full px-3.5 py-2.5 rounded-xl text-left text-xs font-bold flex items-center justify-between transition-colors ${
                dashboardTab === 'profile'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <UserIcon className="w-4 h-4 text-slate-400" />
                <span>Profile & Settings</span>
              </div>
            </button>
          </div>

          {/* Right Main Content Panel */}
          <div className="lg:col-span-9 space-y-6">
            
            {/* 1. OVERVIEW TAB */}
            {dashboardTab === 'overview' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                
                {/* 4 Metric Stats Cards (as specified in prompt) */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-500">Lost Items</span>
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    </div>
                    <p className="text-3xl font-black text-slate-900 font-heading">
                      {myLostItems.length || 12}
                    </p>
                    <span className="text-[11px] text-slate-400">Reports filed</span>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-500">Found Items</span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    </div>
                    <p className="text-3xl font-black text-slate-900 font-heading">
                      {myFoundItems.length || 8}
                    </p>
                    <span className="text-[11px] text-slate-400">Cataloged items</span>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-amber-700">Possible Matches</span>
                      <Sparkles className="w-4 h-4 text-amber-500" />
                    </div>
                    <p className="text-3xl font-black text-amber-900 font-heading">
                      {userMatches.length || 3}
                    </p>
                    <span className="text-[11px] text-amber-700">Similarity detections</span>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-purple-700">Successfully Returned</span>
                      <CheckCircle2 className="w-4 h-4 text-purple-600" />
                    </div>
                    <p className="text-3xl font-black text-purple-900 font-heading">
                      {currentUser.itemsReunitedCount || 5}
                    </p>
                    <span className="text-[11px] text-purple-700">Reunited belongings</span>
                  </div>
                </div>

                {/* Activity Timeline Card (as specified in prompt) */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-slate-900 font-heading">
                      Activity Timeline & Recent Updates
                    </h3>
                    <span className="text-xs text-slate-400">Live Status</span>
                  </div>

                  {/* Timeline Stream */}
                  <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-200">
                    
                    {/* Event 1 */}
                    <div className="relative flex items-start gap-4">
                      <div className="w-7 h-7 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center flex-shrink-0 z-10 ring-4 ring-white">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                      </div>
                      <div className="flex-1 min-w-0 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                        <div className="flex items-center justify-between">
                          <p className="text-xs font-bold text-slate-900">
                            You posted a lost item report
                          </p>
                          <span className="text-[10px] text-slate-400">2 days ago</span>
                        </div>
                        <p className="text-xs text-slate-500 mt-1">
                          "Black Aer Tech Pack" at Sahyadri College Library.
                        </p>
                      </div>
                    </div>

                    {/* Event 2 */}
                    <div className="relative flex items-start gap-4">
                      <div className="w-7 h-7 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0 z-10 ring-4 ring-white">
                        <Sparkles className="w-4 h-4 text-amber-600" />
                      </div>
                      <div className="flex-1 min-w-0 bg-amber-50/50 p-4 rounded-2xl border border-amber-200/60">
                        <div className="flex items-center justify-between">
                          <p className="text-xs font-bold text-amber-900">
                            Possible match detected (87% confidence)
                          </p>
                          <span className="text-[10px] text-amber-700">Yesterday</span>
                        </div>
                        <p className="text-xs text-amber-800 mt-1">
                          Sarah Chen reported a "Matte Black Backpack" at Sahyadri Library.
                        </p>
                        <button
                          onClick={() => setDashboardTab('matches')}
                          className="mt-2 text-xs font-bold text-amber-900 underline underline-offset-2 flex items-center gap-1 cursor-pointer"
                        >
                          <span>Review match comparison</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Event 3 */}
                    <div className="relative flex items-start gap-4">
                      <div className="w-7 h-7 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center flex-shrink-0 z-10 ring-4 ring-white">
                        <ShieldCheck className="w-4 h-4 text-sky-600" />
                      </div>
                      <div className="flex-1 min-w-0 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                        <div className="flex items-center justify-between">
                          <p className="text-xs font-bold text-slate-900">
                            Ownership verification request submitted
                          </p>
                          <span className="text-[10px] text-slate-400">18 hours ago</span>
                        </div>
                        <p className="text-xs text-slate-500 mt-1">
                          Proof description and secret notebook content sent to Sarah Chen.
                        </p>
                      </div>
                    </div>

                    {/* Event 4 */}
                    <div className="relative flex items-start gap-4">
                      <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 z-10 ring-4 ring-white">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      </div>
                      <div className="flex-1 min-w-0 bg-emerald-50/50 p-4 rounded-2xl border border-emerald-200/60">
                        <div className="flex items-center justify-between">
                          <p className="text-xs font-bold text-emerald-900">
                            Item marked as successfully returned! 🎉
                          </p>
                          <span className="text-[10px] text-emerald-700">3 days ago</span>
                        </div>
                        <p className="text-xs text-emerald-800 mt-1">
                          "Ray-Ban Wayfarer Sunglasses" reunited with owner. +100 reputation score awarded.
                        </p>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            )}

            {/* 2. MY LOST ITEMS TAB */}
            {dashboardTab === 'lost-items' && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 font-heading">
                      My Lost Reports ({myLostItems.length})
                    </h3>
                    <p className="text-xs text-slate-500">
                      Active and resolved missing belongings you reported.
                    </p>
                  </div>

                  <button
                    onClick={() => openReportWizard('lost')}
                    className="bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-xs transition-colors flex items-center gap-1.5"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Report Lost Item</span>
                  </button>
                </div>

                {myLostItems.length === 0 ? (
                  <div className="py-12 text-center text-slate-400 space-y-2">
                    <p className="text-sm font-semibold text-slate-700">No lost items reported yet</p>
                    <p className="text-xs text-slate-400">When you lose an item, file a report to alert the community.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {myLostItems.map((item) => (
                      <div
                        key={item.id}
                        className="p-4 rounded-2xl border border-slate-200 hover:border-slate-300 transition-all flex flex-col justify-between space-y-3"
                      >
                        <div className="flex items-start gap-3">
                          <img
                            src={item.images[0]}
                            alt={item.title}
                            className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
                          />
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between">
                              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                                item.status === 'reunited' ? 'bg-purple-100 text-purple-800' : 'bg-rose-100 text-rose-800'
                              }`}>
                                {item.status === 'reunited' ? 'REUNITED' : 'ACTIVE LOST'}
                              </span>
                              <span className="text-[10px] text-slate-400">{item.date}</span>
                            </div>
                            <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate mt-1">
                              {item.title}
                            </h4>
                            <p className="text-xs text-slate-500 truncate">{item.location.name}</p>
                          </div>
                        </div>

                        <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
                          <button
                            onClick={() => openItemDetail(item)}
                            className="text-xs font-bold text-emerald-600 hover:text-emerald-700"
                          >
                            View Post
                          </button>

                          {item.status !== 'reunited' && (
                            <button
                              onClick={() => markItemReunited(item.id)}
                              className="text-xs font-bold text-slate-700 hover:text-purple-600 flex items-center gap-1"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              <span>Mark Reunited</span>
                            </button>
                          )}

                          <button
                            onClick={() => deleteItem(item.id)}
                            className="text-xs text-slate-400 hover:text-rose-600"
                            title="Delete report"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* 3. MY FOUND ITEMS TAB */}
            {dashboardTab === 'found-items' && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 font-heading">
                      My Found Posts ({myFoundItems.length})
                    </h3>
                    <p className="text-xs text-slate-500">
                      Belongings you picked up and cataloged for the community.
                    </p>
                  </div>

                  <button
                    onClick={() => openReportWizard('found')}
                    className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-xs transition-colors flex items-center gap-1.5"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Report Found Item</span>
                  </button>
                </div>

                {myFoundItems.length === 0 ? (
                  <div className="py-12 text-center text-slate-400 space-y-2">
                    <p className="text-sm font-semibold text-slate-700">No found items posted</p>
                    <p className="text-xs text-slate-400">If you find an item in public, post it here to help reunite it.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {myFoundItems.map((item) => (
                      <div
                        key={item.id}
                        className="p-4 rounded-2xl border border-slate-200 hover:border-slate-300 transition-all flex flex-col justify-between space-y-3"
                      >
                        <div className="flex items-start gap-3">
                          <img
                            src={item.images[0]}
                            alt={item.title}
                            className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
                          />
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between">
                              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                                item.status === 'reunited' ? 'bg-purple-100 text-purple-800' : 'bg-emerald-100 text-emerald-800'
                              }`}>
                                {item.status === 'reunited' ? 'REUNITED' : 'FOUND POST'}
                              </span>
                              <span className="text-[10px] text-slate-400">{item.date}</span>
                            </div>
                            <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate mt-1">
                              {item.title}
                            </h4>
                            <p className="text-xs text-slate-500 truncate">{item.location.name}</p>
                          </div>
                        </div>

                        <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
                          <button
                            onClick={() => openItemDetail(item)}
                            className="text-xs font-bold text-emerald-600 hover:text-emerald-700"
                          >
                            View Details
                          </button>

                          {item.status !== 'reunited' && (
                            <button
                              onClick={() => markItemReunited(item.id)}
                              className="text-xs font-bold text-slate-700 hover:text-purple-600 flex items-center gap-1"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              <span>Mark Reunited</span>
                            </button>
                          )}

                          <button
                            onClick={() => deleteItem(item.id)}
                            className="text-xs text-slate-400 hover:text-rose-600"
                            title="Delete post"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* 4. POSSIBLE MATCHES TAB */}
            {dashboardTab === 'matches' && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    <span>Automated Match Scanner</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 font-heading">
                    Possible Matches for Your Items ({userMatches.length})
                  </h3>
                  <p className="text-xs text-slate-500">
                    Comparing categories, locations, dates, and keywords between your listings and community reports.
                  </p>
                </div>

                {userMatches.length === 0 ? (
                  <div className="py-12 text-center text-slate-400 space-y-2">
                    <p className="text-sm font-semibold text-slate-700">No active match alerts right now</p>
                    <p className="text-xs text-slate-400">Our engine continuously scans whenever new items are reported.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {userMatches.map((match, idx) => (
                      <div
                        key={idx}
                        className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80 hover:border-amber-400/80 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
                      >
                        <div className="flex items-center gap-4 min-w-0">
                          <div className="relative">
                            <img
                              src={match.foundItem.images[0]}
                              alt={match.foundItem.title}
                              className="w-16 h-16 rounded-xl object-cover ring-2 ring-emerald-500/20"
                            />
                            <span className="absolute -bottom-2 -right-2 bg-amber-500 text-white text-[10px] font-black px-1.5 py-0.5 rounded-full shadow-xs">
                              {match.overallScore}%
                            </span>
                          </div>

                          <div className="min-w-0 space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                                Found: {match.foundItem.title}
                              </span>
                            </div>
                            <p className="text-xs text-slate-600">
                              Matches your lost listing: <strong className="text-slate-900">{match.lostItem.title}</strong>
                            </p>
                            <p className="text-[11px] text-slate-400">
                              📍 {match.foundItem.location.name} · 📅 {match.foundItem.date}
                            </p>
                          </div>
                        </div>

                        <button
                          onClick={() => openMatchModal(match.lostItem, match.foundItem)}
                          className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors flex items-center gap-1.5 self-end md:self-auto flex-shrink-0 cursor-pointer"
                        >
                          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                          <span>Compare Side-by-Side</span>
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* 5. MESSAGES & HANDOFFS TAB */}
            {dashboardTab === 'messages' && (
              <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden flex flex-col md:flex-row h-[560px]">
                
                {/* Conversation List Column */}
                <div className="w-full md:w-80 border-r border-slate-200 bg-slate-50/50 flex flex-col">
                  <div className="p-4 border-b border-slate-200">
                    <h3 className="text-sm font-bold text-slate-900 font-heading">
                      Conversations ({conversations.length})
                    </h3>
                    <p className="text-[11px] text-slate-500">Secure in-app coordination</p>
                  </div>

                  <div className="flex-1 overflow-y-auto divide-y divide-slate-100">
                    {conversations.length === 0 ? (
                      <div className="p-6 text-center text-xs text-slate-400">
                        No conversations yet
                      </div>
                    ) : (
                      conversations.map((conv) => (
                        <button
                          key={conv.id}
                          onClick={() => setActiveConversation(conv)}
                          className={`w-full p-3.5 text-left flex items-start gap-3 transition-colors ${
                            activeConversation?.id === conv.id
                              ? 'bg-white border-l-4 border-emerald-500 shadow-xs'
                              : 'hover:bg-slate-100/60'
                          }`}
                        >
                          <img
                            src={conv.participantAvatar}
                            alt={conv.participantName}
                            className="w-10 h-10 rounded-full object-cover flex-shrink-0 ring-1 ring-slate-200"
                          />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <p className="text-xs font-bold text-slate-900 truncate">
                                {conv.participantName}
                              </p>
                              <span className="text-[10px] text-slate-400">{conv.lastMessageTime}</span>
                            </div>
                            <p className="text-[11px] text-emerald-700 font-semibold truncate mt-0.5">
                              Re: {conv.relatedItemTitle}
                            </p>
                            <p className="text-xs text-slate-500 truncate mt-0.5">
                              {conv.lastMessage}
                            </p>
                          </div>
                        </button>
                      ))
                    )}
                  </div>
                </div>

                {/* Active Chat Thread Column */}
                <div className="flex-1 flex flex-col bg-white">
                  {activeConversation ? (
                    <>
                      {/* Active Header Ribbon */}
                      <div className="p-3.5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
                        <div className="flex items-center gap-3">
                          <img
                            src={activeConversation.participantAvatar}
                            alt={activeConversation.participantName}
                            className="w-9 h-9 rounded-full object-cover"
                          />
                          <div>
                            <p className="text-xs font-bold text-slate-900">
                              {activeConversation.participantName}
                            </p>
                            <p className="text-[11px] text-slate-500">
                              Item: <strong className="text-slate-800">{activeConversation.relatedItemTitle}</strong>
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-[10px] text-emerald-700 bg-emerald-100 font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                            <ShieldCheck className="w-3 h-3" /> Private Channel
                          </span>
                        </div>
                      </div>

                      {/* Chat Messages Body */}
                      <div className="flex-1 p-4 overflow-y-auto space-y-3">
                        {currentMessages.map((msg) => {
                          const isMine = msg.senderId === currentUser.id;
                          return (
                            <div
                              key={msg.id}
                              className={`flex flex-col ${isMine ? 'items-end' : 'items-start'}`}
                            >
                              <div
                                className={`max-w-xs sm:max-w-md p-3.5 rounded-2xl text-xs leading-relaxed ${
                                  isMine
                                    ? 'bg-slate-900 text-white rounded-br-none'
                                    : 'bg-slate-100 text-slate-800 rounded-bl-none'
                                }`}
                              >
                                {msg.text}
                              </div>
                              <span className="text-[10px] text-slate-400 mt-1 px-1">
                                {isMine ? 'You' : msg.senderName} · {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                              </span>
                            </div>
                          );
                        })}
                      </div>

                      {/* Chat Input Bar */}
                      <form onSubmit={handleSendMessage} className="p-3 border-t border-slate-200 flex gap-2">
                        <input
                          type="text"
                          value={messageInput}
                          onChange={(e) => setMessageInput(e.target.value)}
                          placeholder="Type your message, handoff spot, or question..."
                          className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                        />
                        <button
                          type="submit"
                          className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer flex-shrink-0"
                        >
                          <Send className="w-3.5 h-3.5" />
                          <span>Send</span>
                        </button>
                      </form>
                    </>
                  ) : (
                    <div className="flex-1 flex items-center justify-center text-slate-400 text-xs p-6">
                      Select a conversation on the left to start messaging.
                    </div>
                  )}
                </div>

              </div>
            )}

            {/* 6. OWNERSHIP CLAIMS TAB */}
            {dashboardTab === 'claims' && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold mb-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Anti-Fraud Proof & Verification</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 font-heading">
                    Ownership Claims ({claims.length})
                  </h3>
                  <p className="text-xs text-slate-500">
                    Review verification responses and proof descriptions submitted by claimants.
                  </p>
                </div>

                {claims.length === 0 ? (
                  <div className="py-12 text-center text-slate-400 space-y-2">
                    <p className="text-sm font-semibold text-slate-700">No ownership claims submitted</p>
                    <p className="text-xs text-slate-400">When someone claims a found item you reported, it will show here.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {claims.map((claim) => (
                      <div
                        key={claim.id}
                        className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80 space-y-4"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <img
                              src={claim.claimantAvatar}
                              alt={claim.claimantName}
                              className="w-10 h-10 rounded-full object-cover ring-2 ring-slate-200"
                            />
                            <div>
                              <p className="text-xs font-bold text-slate-900">
                                {claim.claimantName}
                              </p>
                              <p className="text-[11px] text-slate-500">
                                Claimed item: <strong className="text-slate-800">{claim.itemTitle}</strong>
                              </p>
                            </div>
                          </div>

                          <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                            claim.status === 'approved'
                              ? 'bg-emerald-100 text-emerald-800'
                              : claim.status === 'rejected'
                              ? 'bg-rose-100 text-rose-800'
                              : 'bg-amber-100 text-amber-800'
                          }`}>
                            {claim.status}
                          </span>
                        </div>

                        {/* Proof Content */}
                        <div className="p-3.5 bg-white rounded-xl border border-slate-200 text-xs text-slate-700 space-y-2">
                          <p className="font-semibold text-slate-900">Claimant's Proof Statement:</p>
                          <p className="leading-relaxed whitespace-pre-line text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                            “{claim.proofDescription}”
                          </p>
                          {claim.securityAnswer && (
                            <p className="text-emerald-800 font-medium">
                              <strong>Verification Answer:</strong> {claim.securityAnswer}
                            </p>
                          )}
                        </div>

                        {/* Action buttons if pending */}
                        {claim.status === 'pending' && (
                          <div className="flex items-center justify-end gap-2 pt-2">
                            <button
                              onClick={() => updateClaimStatus(claim.id, 'rejected')}
                              className="px-4 py-2 rounded-xl text-xs font-bold text-rose-700 bg-rose-50 hover:bg-rose-100 transition-colors"
                            >
                              Decline Claim
                            </button>
                            <button
                              onClick={() => updateClaimStatus(claim.id, 'approved')}
                              className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-xs transition-colors flex items-center gap-1.5"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              <span>Approve & Coordinate Handoff</span>
                            </button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* 7. NOTIFICATIONS TAB */}
            {dashboardTab === 'notifications' && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 font-heading">
                      Notifications Inbox ({notifications.length})
                    </h3>
                    <p className="text-xs text-slate-500">
                      Match alerts, claim responses, and community handoffs.
                    </p>
                  </div>

                  <button
                    onClick={markAllNotificationsAsRead}
                    className="text-xs text-emerald-600 hover:text-emerald-700 font-semibold"
                  >
                    Mark all as read
                  </button>
                </div>

                <div className="divide-y divide-slate-100">
                  {notifications.map((notif) => (
                    <div
                      key={notif.id}
                      onClick={() => markNotificationAsRead(notif.id)}
                      className={`p-4 rounded-xl transition-colors flex items-start gap-3 cursor-pointer ${
                        !notif.isRead ? 'bg-emerald-50/50' : 'hover:bg-slate-50'
                      }`}
                    >
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        {notif.type === 'match_found' ? (
                          <Sparkles className="w-4 h-4 text-amber-500" />
                        ) : notif.type === 'message_received' ? (
                          <MessageSquare className="w-4 h-4 text-sky-500" />
                        ) : (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-slate-900">{notif.title}</p>
                        <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{notif.message}</p>
                        <span className="text-[10px] text-slate-400 mt-1 block">{notif.timestamp}</span>
                      </div>
                      {!notif.isRead && (
                        <span className="w-2 h-2 rounded-full bg-emerald-500 self-center" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 8. PROFILE & SETTINGS TAB */}
            {dashboardTab === 'profile' && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 font-heading">
                    Profile & Community Settings
                  </h3>
                  <p className="text-xs text-slate-500">
                    Manage your verified community identity and safety preferences.
                  </p>
                </div>

                <form onSubmit={handleSaveProfile} className="space-y-4 max-w-lg">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={profileName}
                      onChange={(e) => setProfileName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Email Address (Private / Never shown publicly)
                    </label>
                    <input
                      type="email"
                      disabled
                      value={currentUser.email}
                      className="w-full bg-slate-100 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-500 cursor-not-allowed"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone Number (Internal 2FA only)
                    </label>
                    <input
                      type="tel"
                      value={profilePhone}
                      onChange={(e) => setProfilePhone(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-6 py-3 rounded-xl transition-colors cursor-pointer"
                    >
                      Save Preferences
                    </button>
                  </div>
                </form>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};
