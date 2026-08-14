import React, { createContext, useContext, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  Item,
  User,
  ClaimRequest,
  Conversation,
  Message,
  Notification,
  FilterState,
  ToastMessage,
  ItemType,
} from '../types';
import {
  CURRENT_USER,
  DEMO_USERS,
  INITIAL_ITEMS,
  INITIAL_CLAIMS,
  INITIAL_CONVERSATIONS,
  INITIAL_MESSAGES,
  INITIAL_NOTIFICATIONS,
} from '../data/mockData';
import { Language, Translations, translations, getCategoryTranslation } from '../i18n/translations';

export type AppView = 'home' | 'explore' | 'dashboard' | 'how-it-works' | 'safety';
export type DashboardTab = 'overview' | 'lost-items' | 'found-items' | 'matches' | 'messages' | 'claims' | 'notifications' | 'profile' | 'settings';

interface AppContextType {
  // Localization & Language
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  getCategoryLabel: (category: string) => string;

  // Navigation & Views
  currentView: AppView;
  setCurrentView: (view: AppView) => void;
  dashboardTab: DashboardTab;
  setDashboardTab: (tab: DashboardTab) => void;

  // Auth & User
  currentUser: User;
  isLoggedIn: boolean;
  login: (user?: User) => void;
  logout: () => void;
  registerUser: (name: string, email: string, role: User['role'], phone?: string) => void;
  switchUser: (userId: string) => void;
  allUsers: User[];

  // Items State & Operations
  items: Item[];
  addItem: (item: Omit<Item, 'id' | 'createdAt' | 'viewsCount' | 'reportedBy'> & { customUser?: User }) => Item;
  updateItem: (id: string, updates: Partial<Item>) => void;
  deleteItem: (id: string) => void;
  markItemReunited: (id: string) => void;
  selectedItem: Item | null;
  setSelectedItem: (item: Item | null) => void;
  openItemDetail: (item: Item) => void;

  // Filters & Discovery
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  resetFilters: () => void;

  // Modals & Wizards
  reportWizardOpen: boolean;
  reportWizardType: ItemType;
  openReportWizard: (type: ItemType) => void;
  closeReportWizard: () => void;

  authModalOpen: boolean;
  openAuthModal: (initialMode?: 'login' | 'register' | 'forgot') => void;
  closeAuthModal: () => void;
  authModalMode: 'login' | 'register' | 'forgot';
  setAuthModalMode: (mode: 'login' | 'register' | 'forgot') => void;

  claimModalOpen: boolean;
  claimTargetItem: Item | null;
  openClaimModal: (item: Item) => void;
  closeClaimModal: () => void;
  submitClaim: (data: { itemId: string; proofDescription: string; securityAnswer?: string; proofImages?: string[] }) => void;

  matchModalOpen: boolean;
  selectedMatchPair: { lostItem: Item; foundItem: Item } | null;
  openMatchModal: (lostItem: Item, foundItem: Item) => void;
  closeMatchModal: () => void;

  reportPostModalOpen: boolean;
  reportPostTargetItem: Item | null;
  openReportPostModal: (item: Item) => void;
  closeReportPostModal: () => void;
  submitPostReport: (itemId: string, reason: string, details: string) => void;

  // Claims & Management
  claims: ClaimRequest[];
  updateClaimStatus: (claimId: string, status: ClaimRequest['status'], handoffDetails?: string) => void;

  // Messages & Conversations
  conversations: Conversation[];
  activeConversation: Conversation | null;
  setActiveConversation: (conv: Conversation | null) => void;
  messages: Message[];
  sendMessage: (recipientId: string, text: string, relatedItemId?: string) => void;
  startOrOpenConversation: (participant: { id: string; name: string; avatar: string }, item: Item) => void;

  // Notifications
  notifications: Notification[];
  markNotificationAsRead: (id: string) => void;
  markAllNotificationsAsRead: () => void;
  unreadNotificationsCount: number;

  // Toast System
  toasts: ToastMessage[];
  addToast: (type: ToastMessage['type'], title: string, message?: string) => void;
  removeToast: (id: string) => void;

  // Utility actions
  triggerCelebration: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const STORAGE_KEYS = {
  ITEMS: 'findit_items_v1',
  CLAIMS: 'findit_claims_v1',
  CONVERSATIONS: 'findit_conversations_v1',
  MESSAGES: 'findit_messages_v1',
  NOTIFICATIONS: 'findit_notifications_v1',
  USER: 'findit_current_user_v1',
  LANG: 'findit_lang_v1',
};

const DEFAULT_FILTERS: FilterState = {
  searchQuery: '',
  type: 'all',
  category: 'all',
  city: '',
  status: 'all',
  dateRange: 'all',
  sortBy: 'newest',
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Language & Localization
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.LANG);
    return (saved === 'kn' || saved === 'en') ? saved : 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(STORAGE_KEYS.LANG, lang);
    addToast(
      'info',
      lang === 'kn' ? 'ಭಾಷೆಯನ್ನು ಕನ್ನಡಕ್ಕೆ ಬದಲಾಯಿಸಲಾಗಿದೆ' : 'Language changed to English',
      lang === 'kn' ? 'ವೆಬ್‌ಸೈಟ್ ಈಗ ಕನ್ನಡ ಭಾಷೆಯಲ್ಲಿ ಲಭ್ಯವಿದೆ.' : 'Website is now in English.'
    );
  };

  const t = translations[language];

  const getCategoryLabel = (category: string) => {
    return getCategoryTranslation(category, language);
  };

  // Navigation
  const [currentView, setCurrentView] = useState<AppView>('home');
  const [dashboardTab, setDashboardTab] = useState<DashboardTab>('overview');

  // User & Auth
  const [currentUser, setCurrentUser] = useState<User>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.USER);
    return saved ? JSON.parse(saved) : CURRENT_USER;
  });
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  const [allUsers, setAllUsers] = useState<User[]>(DEMO_USERS);

  // Items State
  const [items, setItems] = useState<Item[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.ITEMS);
    return saved ? JSON.parse(saved) : INITIAL_ITEMS;
  });

  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  // Filters
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);

  // Modals
  const [reportWizardOpen, setReportWizardOpen] = useState(false);
  const [reportWizardType, setReportWizardType] = useState<ItemType>('lost');

  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState<'login' | 'register' | 'forgot'>('login');

  const [claimModalOpen, setClaimModalOpen] = useState(false);
  const [claimTargetItem, setClaimTargetItem] = useState<Item | null>(null);

  const [matchModalOpen, setMatchModalOpen] = useState(false);
  const [selectedMatchPair, setSelectedMatchPair] = useState<{ lostItem: Item; foundItem: Item } | null>(null);

  const [reportPostModalOpen, setReportPostModalOpen] = useState(false);
  const [reportPostTargetItem, setReportPostTargetItem] = useState<Item | null>(null);

  // Claims
  const [claims, setClaims] = useState<ClaimRequest[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.CLAIMS);
    return saved ? JSON.parse(saved) : INITIAL_CLAIMS;
  });

  // Messages & Conversations
  const [conversations, setConversations] = useState<Conversation[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.CONVERSATIONS);
    return saved ? JSON.parse(saved) : INITIAL_CONVERSATIONS;
  });
  const [activeConversation, setActiveConversation] = useState<Conversation | null>(conversations[0] || null);

  const [messages, setMessages] = useState<Message[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.MESSAGES);
    return saved ? JSON.parse(saved) : INITIAL_MESSAGES;
  });

  // Notifications
  const [notifications, setNotifications] = useState<Notification[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.NOTIFICATIONS);
    return saved ? JSON.parse(saved) : INITIAL_NOTIFICATIONS;
  });

  // Toasts
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Sync to LocalStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.ITEMS, JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.CLAIMS, JSON.stringify(claims));
  }, [claims]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.CONVERSATIONS, JSON.stringify(conversations));
  }, [conversations]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.NOTIFICATIONS, JSON.stringify(notifications));
  }, [notifications]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(currentUser));
  }, [currentUser]);

  // Toast dispatch
  const addToast = (type: ToastMessage['type'], title: string, message?: string) => {
    const id = `toast_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`;
    setToasts((prev) => [...prev, { id, type, title, message }]);
    setTimeout(() => {
      removeToast(id);
    }, 4500);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const triggerCelebration = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#10b981', '#0284c7', '#6366f1', '#f59e0b'],
    });
  };

  // Auth Operations
  const login = (user?: User) => {
    const userToLogin = user || CURRENT_USER;
    setCurrentUser(userToLogin);
    setIsLoggedIn(true);
    setAuthModalOpen(false);
    addToast('success', `Welcome back, ${userToLogin.name}!`, 'You are now signed in to FindIt.');
  };

  const logout = () => {
    setIsLoggedIn(false);
    addToast('info', 'Signed Out', 'You have been logged out safely.');
  };

  const registerUser = (name: string, email: string, role: User['role'], phone?: string) => {
    const newUser: User = {
      id: `usr_${Date.now()}`,
      name,
      email,
      avatar: `https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80`,
      role,
      joinedDate: 'Today',
      phone: phone || '+1 (555) 000-0000',
      reputationPoints: 100,
      itemsReportedCount: 0,
      itemsReunitedCount: 0,
      isVerified: true,
    };
    setAllUsers((prev) => [newUser, ...prev]);
    setCurrentUser(newUser);
    setIsLoggedIn(true);
    setAuthModalOpen(false);
    addToast('success', `Welcome to FindIt, ${name}!`, 'Your community account is ready.');
  };

  const switchUser = (userId: string) => {
    const target = allUsers.find((u) => u.id === userId);
    if (target) {
      setCurrentUser(target);
      setIsLoggedIn(true);
      addToast('info', `Switched User Profile`, `Now browsing as ${target.name} (${target.role})`);
    }
  };

  // Item Operations
  const addItem = (
    itemData: Omit<Item, 'id' | 'createdAt' | 'viewsCount' | 'reportedBy'> & { customUser?: User }
  ) => {
    const newItem: Item = {
      ...itemData,
      id: `item_${Date.now()}`,
      createdAt: new Date().toISOString(),
      viewsCount: 1,
      reportedBy: {
        id: itemData.customUser ? itemData.customUser.id : currentUser.id,
        name: itemData.customUser ? itemData.customUser.name : currentUser.name,
        email: itemData.customUser ? itemData.customUser.email : currentUser.email,
        avatar: itemData.customUser ? itemData.customUser.avatar : currentUser.avatar,
        verified: true,
        role: itemData.customUser ? itemData.customUser.role : currentUser.role,
      },
    };

    setItems((prev) => [newItem, ...prev]);

    // Update user stats
    setCurrentUser((prev) => ({
      ...prev,
      itemsReportedCount: prev.itemsReportedCount + 1,
      reputationPoints: prev.reputationPoints + 50,
    }));

    // Trigger celebration & toast
    triggerCelebration();
    addToast(
      'success',
      newItem.type === 'lost' ? 'Lost Item Reported!' : 'Found Item Reported!',
      'Your item has been published to the FindIt community board.'
    );

    return newItem;
  };

  const updateItem = (id: string, updates: Partial<Item>) => {
    setItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, ...updates } : it))
    );
    if (selectedItem?.id === id) {
      setSelectedItem((prev) => (prev ? { ...prev, ...updates } : null));
    }
    addToast('success', 'Item Updated', 'The item details have been saved.');
  };

  const deleteItem = (id: string) => {
    setItems((prev) => prev.filter((it) => it.id !== id));
    if (selectedItem?.id === id) {
      setSelectedItem(null);
    }
    addToast('info', 'Item Removed', 'The report was deleted successfully.');
  };

  const markItemReunited = (id: string) => {
    setItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, status: 'reunited' } : it))
    );
    if (selectedItem?.id === id) {
      setSelectedItem((prev) => (prev ? { ...prev, status: 'reunited' } : null));
    }

    // Add celebration notification
    const newNotif: Notification = {
      id: `notif_${Date.now()}`,
      userId: currentUser.id,
      type: 'item_reunited',
      title: 'Belonging Successfully Reunited! 🎉',
      message: 'Item has been safely returned to its owner. +100 Community Reputation points awarded!',
      timestamp: 'Just now',
      isRead: false,
      relatedItemId: id,
    };
    setNotifications((prev) => [newNotif, ...prev]);

    // Increase user stats
    setCurrentUser((prev) => ({
      ...prev,
      itemsReunitedCount: prev.itemsReunitedCount + 1,
      reputationPoints: prev.reputationPoints + 100,
    }));

    triggerCelebration();
    addToast('success', 'Item Marked as Reunited!', 'Great work helping reconnect belongings in our community.');
  };

  const openItemDetail = (item: Item) => {
    setSelectedItem(item);
    // Increase view count locally
    setItems((prev) =>
      prev.map((it) => (it.id === item.id ? { ...it, viewsCount: it.viewsCount + 1 } : it))
    );
  };

  const resetFilters = () => {
    setFilters(DEFAULT_FILTERS);
  };

  // Modals
  const openReportWizard = (type: ItemType) => {
    setReportWizardType(type);
    setReportWizardOpen(true);
  };

  const closeReportWizard = () => {
    setReportWizardOpen(false);
  };

  const openAuthModal = (initialMode: 'login' | 'register' | 'forgot' = 'login') => {
    setAuthModalMode(initialMode);
    setAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setAuthModalOpen(false);
  };

  const openClaimModal = (item: Item) => {
    setClaimTargetItem(item);
    setClaimModalOpen(true);
  };

  const closeClaimModal = () => {
    setClaimModalOpen(false);
    setClaimTargetItem(null);
  };

  const submitClaim = (data: {
    itemId: string;
    proofDescription: string;
    securityAnswer?: string;
    proofImages?: string[];
  }) => {
    const targetItem = items.find((i) => i.id === data.itemId);
    if (!targetItem) return;

    const newClaim: ClaimRequest = {
      id: `claim_${Date.now()}`,
      itemId: targetItem.id,
      claimantId: currentUser.id,
      claimantName: currentUser.name,
      claimantAvatar: currentUser.avatar,
      claimantEmail: currentUser.email,
      proofDescription: data.proofDescription,
      securityAnswer: data.securityAnswer,
      proofImages: data.proofImages,
      status: 'pending',
      createdAt: new Date().toISOString(),
      itemTitle: targetItem.title,
      itemType: targetItem.type,
      itemImage: targetItem.images[0] || '',
    };

    setClaims((prev) => [newClaim, ...prev]);

    // Send a notification to the item poster
    const notif: Notification = {
      id: `notif_${Date.now()}`,
      userId: targetItem.reportedBy.id,
      type: 'claim_received',
      title: 'Ownership Claim Received',
      message: `${currentUser.name} submitted a claim verification for "${targetItem.title}".`,
      timestamp: 'Just now',
      isRead: false,
      relatedItemId: targetItem.id,
    };
    setNotifications((prev) => [notif, ...prev]);

    // Also auto create/update conversation between claimant and finder
    startOrOpenConversation(targetItem.reportedBy, targetItem);

    closeClaimModal();
    addToast('success', 'Verification Request Sent', 'The finder has been notified securely without exposing your email.');
  };

  const updateClaimStatus = (claimId: string, status: ClaimRequest['status'], handoffDetails?: string) => {
    setClaims((prev) =>
      prev.map((c) => (c.id === claimId ? { ...c, status, handoffDetails } : c))
    );

    const targetClaim = claims.find((c) => c.id === claimId);
    if (targetClaim) {
      if (status === 'approved') {
        addToast('success', 'Claim Approved!', 'You can now coordinate safe handoff via internal messages.');
        triggerCelebration();
        // Notify claimant
        const notif: Notification = {
          id: `notif_${Date.now()}`,
          userId: targetClaim.claimantId,
          type: 'claim_approved',
          title: 'Your Ownership Claim Was Approved! 🤝',
          message: `Your claim on "${targetClaim.itemTitle}" was verified. Check messages to coordinate handoff.`,
          timestamp: 'Just now',
          isRead: false,
          relatedItemId: targetClaim.itemId,
        };
        setNotifications((prev) => [notif, ...prev]);
      } else if (status === 'rejected') {
        addToast('info', 'Claim Declined', 'The claimant has been notified.');
      } else if (status === 'completed') {
        markItemReunited(targetClaim.itemId);
      }
    }
  };

  const openMatchModal = (lostItem: Item, foundItem: Item) => {
    setSelectedMatchPair({ lostItem, foundItem });
    setMatchModalOpen(true);
  };

  const closeMatchModal = () => {
    setMatchModalOpen(false);
    setSelectedMatchPair(null);
  };

  const openReportPostModal = (item: Item) => {
    setReportPostTargetItem(item);
    setReportPostModalOpen(true);
  };

  const closeReportPostModal = () => {
    setReportPostModalOpen(false);
    setReportPostTargetItem(null);
  };

  const submitPostReport = (itemId: string, reason: string, details: string) => {
    closeReportPostModal();
    addToast('success', 'Report Submitted for Review', 'Our community trust team will inspect this listing.');
  };

  // Messaging
  const startOrOpenConversation = (participant: { id: string; name: string; avatar: string }, item: Item) => {
    let existingConv = conversations.find(
      (c) => c.participantId === participant.id && c.relatedItemId === item.id
    );

    if (!existingConv) {
      existingConv = {
        id: `conv_${Date.now()}`,
        participantId: participant.id,
        participantName: participant.name,
        participantAvatar: participant.avatar,
        relatedItemId: item.id,
        relatedItemTitle: item.title,
        relatedItemType: item.type,
        relatedItemImage: item.images[0] || '',
        lastMessage: 'Conversation started',
        lastMessageTime: 'Just now',
        unreadCount: 0,
      };
      setConversations((prev) => [existingConv!, ...prev]);
    }

    setActiveConversation(existingConv);
    setCurrentView('dashboard');
    setDashboardTab('messages');
  };

  const sendMessage = (recipientId: string, text: string, relatedItemId?: string) => {
    if (!text.trim() || !activeConversation) return;

    const newMsg: Message = {
      id: `msg_${Date.now()}`,
      conversationId: activeConversation.id,
      senderId: currentUser.id,
      senderName: currentUser.name,
      senderAvatar: currentUser.avatar,
      recipientId,
      text: text.trim(),
      timestamp: new Date().toISOString(),
      isRead: false,
    };

    setMessages((prev) => [...prev, newMsg]);

    // Update conversation metadata
    setConversations((prev) =>
      prev.map((c) =>
        c.id === activeConversation.id
          ? {
              ...c,
              lastMessage: text.trim(),
              lastMessageTime: 'Just now',
            }
          : c
      )
    );
  };

  // Notifications
  const markNotificationAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, isRead: true } : n))
    );
  };

  const markAllNotificationsAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
    addToast('info', 'All Marked as Read', 'Notifications inbox cleared.');
  };

  const unreadNotificationsCount = notifications.filter((n) => !n.isRead).length;

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        t,
        getCategoryLabel,

        currentView,
        setCurrentView,
        dashboardTab,
        setDashboardTab,

        currentUser,
        isLoggedIn,
        login,
        logout,
        registerUser,
        switchUser,
        allUsers,

        items,
        addItem,
        updateItem,
        deleteItem,
        markItemReunited,
        selectedItem,
        setSelectedItem,
        openItemDetail,

        filters,
        setFilters,
        resetFilters,

        reportWizardOpen,
        reportWizardType,
        openReportWizard,
        closeReportWizard,

        authModalOpen,
        openAuthModal,
        closeAuthModal,
        authModalMode,
        setAuthModalMode,

        claimModalOpen,
        claimTargetItem,
        openClaimModal,
        closeClaimModal,
        submitClaim,

        matchModalOpen,
        selectedMatchPair,
        openMatchModal,
        closeMatchModal,

        reportPostModalOpen,
        reportPostTargetItem,
        openReportPostModal,
        closeReportPostModal,
        submitPostReport,

        claims,
        updateClaimStatus,

        conversations,
        activeConversation,
        setActiveConversation,
        messages,
        sendMessage,
        startOrOpenConversation,

        notifications,
        markNotificationAsRead,
        markAllNotificationsAsRead,
        unreadNotificationsCount,

        toasts,
        addToast,
        removeToast,

        triggerCelebration,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
