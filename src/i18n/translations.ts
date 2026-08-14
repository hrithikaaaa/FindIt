export type Language = 'en' | 'kn';

export interface Translations {
  // Brand & Slogan
  appName: string;
  tagline: string;
  communitySubtitle: string;

  // Navigation
  navHome: string;
  navLostItems: string;
  navFoundItems: string;
  navExplore: string;
  navHowItWorks: string;
  navSafety: string;
  navReportItem: string;
  navSignIn: string;
  navSignOut: string;
  navDashboard: string;
  navNotifications: string;
  navSwitchPersona: string;
  navLanguage: string;

  // Hero Section
  heroBadge: string;
  heroTitle: string;
  heroSubtitle: string;
  heroDesc: string;
  heroTitleLine1: string;
  heroTitleLine2: string;
  heroBtnLost: string;
  heroBtnFound: string;
  heroReportLost: string;
  heroReportFound: string;
  heroSearchPlaceholder: string;
  heroSearchBtn: string;
  heroPopular: string;
  heroReunitedToday: string;
  heroMatchScore: string;
  heroPossibleMatch: string;
  heroCompareDetails: string;
  heroVerifiedSafe: string;
  heroPrivateClaims: string;
  heroCommunityQuote: string;

  // Recently Reported Section / Live Feed
  feedBadge: string;
  feedTitle: string;
  feedSubtitle: string;
  feedExploreAll: string;
  recentHeading: string;
  recentSubtitle: string;
  tabAll: string;
  tabLost: string;
  tabFound: string;
  tabAllItems: string;
  tabLostItems: string;
  tabFoundItems: string;
  categoryAll: string;
  filterAllCategories: string;
  viewAllInExplore: string;
  noItemsFound: string;
  clearFilters: string;

  // Item Card & Details
  badgeLost: string;
  badgeFound: string;
  badgeReunited: string;
  badgeActive: string;
  badgeZeroPII: string;
  statusReunited: string;
  btnClaim: string;
  btnDetails: string;
  cardViewDetails: string;
  btnMatchFound: string;
  btnClaimItem: string;
  btnContactFinder: string;
  btnContactOwner: string;
  markReunitedSuccess: string;
  itemLocation: string;
  itemDate: string;
  itemDescription: string;
  itemSecretProof: string;
  reportedAgo: string;
  rewardOffered: string;
  matchesDetected: (count: number) => string;
  compareSideBySide: string;

  // How It Works
  hiwBadge: string;
  hiwTitle: string;
  hiwSubtitle: string;
  hiwStep1Title: string;
  hiwStep1Desc: string;
  hiwStep2Title: string;
  hiwStep2Desc: string;
  hiwStep3Title: string;
  hiwStep3Desc: string;
  howHeading: string;
  howSubtitle: string;
  howStep1Title: string;
  howStep1Desc: string;
  howStep2Title: string;
  howStep2Desc: string;
  howStep3Title: string;
  howStep3Desc: string;
  howLearnMore: string;

  // Two Option Report
  twoOptionHeading: string;
  twoOptionSubtitle: string;
  reportLostTitle: string;
  reportFoundTitle: string;
  optLostTitle: string;
  optLostDesc: string;
  optLostBtn: string;
  optFoundTitle: string;
  optFoundDesc: string;
  optFoundBtn: string;

  // Stats Section
  statsHeading: string;
  statsReported: string;
  statsFound: string;
  statsReunited: string;
  statsMembers: string;
  statTotalReports: string;
  statReunitedCount: string;
  statMatchAccuracy: string;
  statActiveUsers: string;

  // Trust & Safety
  safetyBadge: string;
  safetyTitle: string;
  safetySubtitle: string;
  trustHeading: string;
  trustSubtitle: string;
  secZeroPIITitle: string;
  secZeroPIIDesc: string;
  secOwnershipTitle: string;
  secOwnershipDesc: string;
  secSafeHandoffTitle: string;
  secSafeHandoffDesc: string;
  secCommunityTrustTitle: string;
  secCommunityTrustDesc: string;
  trustPillar1Title: string;
  trustPillar1Desc: string;
  trustPillar2Title: string;
  trustPillar2Desc: string;
  trustPillar3Title: string;
  trustPillar3Desc: string;
  trustPillar4Title: string;
  trustPillar4Desc: string;
  trustExploreGuidelines: string;

  // Explore & Search Page
  exploreTitle: string;
  exploreSubtitle: string;
  exploreSearchPlaceholder: string;
  searchFilterKeyword: string;
  searchFilterCategory: string;
  searchFilterCity: string;
  searchFilterStatus: string;
  searchFilterDate: string;
  filterReportType: string;
  filterAllTypes: string;
  filterCategory: string;
  filterCity: string;
  filterAllCities: string;
  filterDateRange: string;
  filterAnyTime: string;
  filterPast24h: string;
  filterPast7d: string;
  filterPast30d: string;
  filterStatus: string;
  filterAllStatuses: string;
  filterActiveUnresolved: string;
  showingListingsCount: (count: number) => string;
  sortBy: string;
  sortByLabel: string;
  sortNewest: string;
  sortOldest: string;
  sortTitle: string;
  showingResults: string;
  statusAll: string;
  statusActive: string;
  dateAll: string;
  dateToday: string;
  dateThisWeek: string;
  dateThisMonth: string;
  resetAllFilters: string;
  gridView: string;
  listView: string;

  // User Dashboard
  dashTitle: string;
  dashOverview: string;
  dashMyLost: string;
  dashMyFound: string;
  dashMatches: string;
  dashMessages: string;
  dashClaims: string;
  dashNotifications: string;
  dashSettings: string;
  dashPoints: string;
  dashRank: string;
  dashQuickReportLost: string;
  dashQuickReportFound: string;
  dashRecentActivity: string;
  dashNoMessages: string;
  dashSendMessage: string;
  dashTypeMessage: string;
  dashApproveClaim: string;
  dashRejectClaim: string;
  dashMarkCompleted: string;

  // Modals & Forms
  matchModalTitle: string;
  matchModalSubtitle: string;
  matchConfidence: string;
  modalItemDetails: string;
  modalClose: string;
  modalLocation: string;
  modalDateFound: string;
  modalDateLost: string;
  modalDescription: string;
  modalIdentifyingFeatures: string;
  modalSecurityQuestion: string;
  modalReportedBy: string;
  modalContactReporter: string;
  modalReportSuspicious: string;
  modalMatchSimilarity: string;
  modalCompareItems: string;
  modalClaimTitle: string;
  modalClaimSubtitle: string;
  modalProofDesc: string;
  modalProofPlaceholder: string;
  modalAnswerSecurity: string;
  modalSubmitClaim: string;
  modalSubmitting: string;

  // Report Wizard Steps
  wizardTitleLost: string;
  wizardTitleFound: string;
  wizardStep1: string;
  wizardStep2: string;
  wizardStep3: string;
  wizardStep4: string;
  wizardItemTitle: string;
  wizardItemCategory: string;
  wizardItemDesc: string;
  wizardLocationName: string;
  wizardCity: string;
  wizardSpecificSpot: string;
  wizardDate: string;
  wizardTime: string;
  wizardImageUrls: string;
  wizardReward: string;
  wizardSecurityQuestion: string;
  wizardNext: string;
  wizardBack: string;
  wizardSubmit: string;
  wizardSuccessHeading: string;
  wizardSuccessDesc: string;

  // Categories
  catElectronics: string;
  catWalletsCards: string;
  catKeys: string;
  catBagsBackpacks: string;
  catJewelryWatches: string;
  catClothingAccessories: string;
  catDocumentsIDs: string;
  catPets: string;
  catBooksStationary: string;
  catOther: string;

  // Footer
  footerAbout: string;
  footerDesc: string;
  footerAlertsLabel: string;
  footerEmailPlaceholder: string;
  footerSubscribeTitle: string;
  footerSubscribeBtn: string;
  footerSubscribedSuccess: string;
  footerColExplore: string;
  footerColAction: string;
  footerColTrust: string;
  footerSupport: string;
  footerCopyright: string;
  footerQuickNav: string;
  footerTakeAction: string;
  footerTrustLegal: string;
  footerSafetyGuidelines: string;
  footerPrivacyPolicy: string;
  footerTermsService: string;
  footerContactSupport: string;
  footerRights: string;
  languageSelectPrompt: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    // Brand & Slogan
    appName: 'FindIt',
    tagline: 'Community Lost & Found',
    communitySubtitle: 'Helping communities reconnect with what matters.',

    // Navigation
    navHome: 'Home',
    navLostItems: 'Lost Items',
    navFoundItems: 'Found Items',
    navExplore: 'Search & Explore',
    navHowItWorks: 'How It Works',
    navSafety: 'Safety & Trust',
    navReportItem: 'Report Item',
    navSignIn: 'Sign In',
    navSignOut: 'Sign Out',
    navDashboard: 'Dashboard',
    navNotifications: 'Notifications',
    navSwitchPersona: 'Switch Persona',
    navLanguage: 'Language',

    // Hero Section
    heroBadge: 'Smart Match Detection Engine & Verified Returns',
    heroTitle: 'Lost Something?',
    heroSubtitle: 'Let’s Help You Find It.',
    heroDesc: 'A trusted community platform to report lost and found items and reunite people with what matters to them. Fast reports, automated match alerts, and verified handoffs.',
    heroTitleLine1: 'Lost Something?',
    heroTitleLine2: 'Let’s Help You Find It.',
    heroBtnLost: 'Report Lost Item',
    heroBtnFound: 'Report Found Item',
    heroReportLost: 'Report Lost Item',
    heroReportFound: 'Report Found Item',
    heroSearchPlaceholder: 'Search backpack, AirPods, keys, wallet, college library...',
    heroSearchBtn: 'Search',
    heroPopular: 'Popular',
    heroReunitedToday: 'Reunited Today',
    heroMatchScore: 'Match',
    heroPossibleMatch: 'Possible Match',
    heroCompareDetails: 'Compare Details',
    heroVerifiedSafe: 'Verified Safe',
    heroPrivateClaims: 'Private Claims',
    heroCommunityQuote: '“Helping communities reconnect with lost belongings.”',

    // Recently Reported Section / Live Feed
    feedBadge: 'Live Community Feed',
    feedTitle: 'Recently Reported',
    feedSubtitle: 'Browse recently lost and found items in your local area. Filter by status or category to help reconnect.',
    feedExploreAll: 'Explore All Community Listings',
    recentHeading: 'Recent Lost & Found Reports',
    recentSubtitle: 'Browse recent items reported across campuses, transit stations, and local neighborhoods.',
    tabAll: 'All Items',
    tabLost: 'Lost Items',
    tabFound: 'Found Items',
    tabAllItems: 'All Items',
    tabLostItems: 'Lost Items',
    tabFoundItems: 'Found Items',
    categoryAll: 'All Categories',
    filterAllCategories: 'All Categories',
    viewAllInExplore: 'View All in Search & Explore →',
    noItemsFound: 'No matching items found.',
    clearFilters: 'Clear All Filters',

    // Item Card & Details
    badgeLost: 'LOST',
    badgeFound: 'FOUND',
    badgeReunited: 'REUNITED 🎉',
    badgeActive: 'Active Search',
    badgeZeroPII: 'Zero Public PII',
    statusReunited: 'Reunited',
    btnClaim: 'Claim Ownership',
    btnDetails: 'View Details',
    cardViewDetails: 'View Details',
    btnMatchFound: 'Match Detected',
    btnClaimItem: 'I Think This Is Mine',
    btnContactFinder: 'Contact Finder',
    btnContactOwner: 'Message Owner',
    markReunitedSuccess: 'Mark as Successfully Reunited 🎉',
    itemLocation: 'Location',
    itemDate: 'Date & Time',
    itemDescription: 'Description',
    itemSecretProof: 'Identifying Characteristics',
    reportedAgo: 'Reported',
    rewardOffered: 'Reward Offered',
    matchesDetected: (count: number) => `Possible Matches Detected (${count})`,
    compareSideBySide: 'Compare Side-by-Side',

    // How It Works
    hiwBadge: 'Simple 3-Step Process',
    hiwTitle: 'How FindIt Reconnects Communities',
    hiwSubtitle: 'Designed for speed, clarity, and safety. Every step is built to eliminate friction and ensure items return to their true owners.',
    hiwStep1Title: 'Quick & Structured Listing',
    hiwStep1Desc: 'Upload photos, pin the location, and describe key identifying marks or characteristics through our intuitive wizard.',
    hiwStep2Title: 'Smart Match Intelligence',
    hiwStep2Desc: 'Our automated matching algorithm instantly cross-references dates, categories, keywords, and locations to find potential matches.',
    hiwStep3Title: 'Safe & Verified Handoff',
    hiwStep3Desc: 'Send secure ownership verification requests without publicly exposing personal phone numbers or email addresses.',
    howHeading: 'How FindIt Works',
    howSubtitle: 'A straightforward, secure three-step process built to safely reconnect people with lost items.',
    howStep1Title: '1. Report & Catalog',
    howStep1Desc: 'Post clear photos, timestamps, location markers, and custom verification questions in seconds.',
    howStep2Title: '2. Smart Match Detection',
    howStep2Desc: 'Our engine analyzes keywords, timeframes, and geo-proximity to automatically highlight potential matches.',
    howStep3Title: '3. Verified Handoff',
    howStep3Desc: 'Claimants provide proof of ownership privately. Coordinate safe meetups without exposing personal phone numbers.',
    howLearnMore: 'Learn More About Verification Safety',

    // Two Option Report
    twoOptionHeading: 'Ready to take action?',
    twoOptionSubtitle: 'Whether you lost a cherished possession or found an item someone is looking for, every report matters.',
    reportLostTitle: 'I Lost Something',
    reportFoundTitle: 'I Found Something',
    optLostTitle: 'I Lost Something',
    optLostDesc: 'Create a report with photos, location, and optional reward. Our community and match engine will alert you instantly.',
    optLostBtn: 'Report Lost Belonging',
    optFoundTitle: 'I Found Something',
    optFoundDesc: 'Post the item safely with partial details. Help return it to its rightful owner through secure verification questions.',
    optFoundBtn: 'Report Found Belonging',

    // Stats Section
    statsHeading: 'Community Impact & Trust',
    statsReported: 'Items Reported',
    statsFound: 'Items Found',
    statsReunited: 'Items Reunited',
    statsMembers: 'Community Members',
    statTotalReports: 'Items Reported',
    statReunitedCount: 'Successfully Reunited',
    statMatchAccuracy: 'Smart Match Rate',
    statActiveUsers: 'Active Neighbors',

    // Trust & Safety
    safetyBadge: 'Community Standards & Protection',
    safetyTitle: 'Built for Safe & Responsible Returns.',
    safetySubtitle: 'We put community safety first. Advanced verification tools and zero public contact details ensure you can reunite with lost property securely.',
    trustHeading: 'Built with Trust & Privacy at Core',
    trustSubtitle: 'We safeguard your personal information while maximizing the chances of successful returns.',
    secZeroPIITitle: 'Private Contact Information',
    secZeroPIIDesc: 'Your personal phone numbers and private email addresses are never shown publicly on listings. All communications occur through our secure in-app messaging channel.',
    secOwnershipTitle: 'Verified Ownership',
    secOwnershipDesc: 'Finders can ask specific verification questions (hidden engravings, wallpaper descriptions, serial parts) before releasing custody of high-value items.',
    secSafeHandoffTitle: 'Safe Handoff Guidelines',
    secSafeHandoffDesc: 'Community members and moderators can immediately flag inappropriate, suspicious, or duplicate claims to safeguard student and resident belongings.',
    secCommunityTrustTitle: 'Community Driven Trust',
    secCommunityTrustDesc: 'Members earn reputation score points for reporting found items, prompt handoffs, and honest returns, creating an accountable and helpful network.',
    trustPillar1Title: 'Zero Public Contact Info',
    trustPillar1Desc: 'Never expose your phone number or email publicly. Communicate safely through built-in anonymous messaging.',
    trustPillar2Title: 'Proof of Ownership',
    trustPillar2Desc: 'Finders can set security questions or require claimants to provide unique distinguishing marks.',
    trustPillar3Title: 'Designated Safe Spots',
    trustPillar3Desc: 'Recommended verified public meeting points like campus security offices, police stations, and cafe desks.',
    trustPillar4Title: 'Community Moderation',
    trustPillar4Desc: 'Fast flagging and community moderation to prevent spam, fraudulent claims, and invalid listings.',
    trustExploreGuidelines: 'Read Full Safety & Verification Guidelines →',

    // Explore & Search Page
    exploreTitle: 'Search & Discovery',
    exploreSubtitle: 'Browse community reports, apply targeted filters, or search specific campus spots.',
    exploreSearchPlaceholder: 'Search lost or found items by keyword, serial, color, landmark...',
    searchFilterKeyword: 'Search keywords, brands, items...',
    searchFilterCategory: 'Select Category',
    searchFilterCity: 'City / Campus',
    searchFilterStatus: 'Item Status',
    searchFilterDate: 'Date Range',
    filterReportType: 'Report Type',
    filterAllTypes: 'All (Lost & Found)',
    filterCategory: 'Category',
    filterCity: 'City / Region',
    filterAllCities: 'All Cities',
    filterDateRange: 'Date Range',
    filterAnyTime: 'Any Time',
    filterPast24h: 'Past 24 Hours',
    filterPast7d: 'Past 7 Days',
    filterPast30d: 'Past 30 Days',
    filterStatus: 'Status',
    filterAllStatuses: 'All Statuses',
    filterActiveUnresolved: 'Active (Unresolved)',
    showingListingsCount: (count: number) => `Showing ${count} listings`,
    sortBy: 'Sort by',
    sortByLabel: 'Sort By:',
    sortNewest: 'Newest First',
    sortOldest: 'Oldest First',
    sortTitle: 'Title (A-Z)',
    showingResults: 'Showing items',
    statusAll: 'All Statuses',
    statusActive: 'Active Only',
    dateAll: 'All Time',
    dateToday: 'Today',
    dateThisWeek: 'This Week',
    dateThisMonth: 'This Month',
    resetAllFilters: 'Reset all filters',
    gridView: 'Grid View',
    listView: 'List View',

    // User Dashboard
    dashTitle: 'Member Dashboard',
    dashOverview: 'Overview',
    dashMyLost: 'My Lost Reports',
    dashMyFound: 'My Found Posts',
    dashMatches: 'Possible Matches',
    dashMessages: 'Messages & Handoffs',
    dashClaims: 'Ownership Claims',
    dashNotifications: 'Notifications',
    dashSettings: 'Settings',
    dashPoints: 'Reputation Points',
    dashRank: 'Community Rank',
    dashQuickReportLost: '+ Report Lost Item',
    dashQuickReportFound: '+ Report Found Item',
    dashRecentActivity: 'Recent Activity Timeline',
    dashNoMessages: 'No active conversations. Click "Contact Reporter" on any item to initiate a safe chat.',
    dashSendMessage: 'Send Message',
    dashTypeMessage: 'Type a message regarding handoff or verification...',
    dashApproveClaim: 'Approve Claim & Coordinate Handoff',
    dashRejectClaim: 'Decline Claim',
    dashMarkCompleted: 'Mark as Successfully Reunited 🎉',

    // Modals & Forms
    matchModalTitle: 'Possible Match Found',
    matchModalSubtitle: 'Our system detected significant correlation between these two listings.',
    matchConfidence: 'Match Confidence',
    modalItemDetails: 'Item Details',
    modalClose: 'Close',
    modalLocation: 'Location',
    modalDateFound: 'Date Found',
    modalDateLost: 'Date Lost',
    modalDescription: 'Description',
    modalIdentifyingFeatures: 'Distinguishing Marks / Details',
    modalSecurityQuestion: 'Security Verification Challenge',
    modalReportedBy: 'Reported by',
    modalContactReporter: 'Message Reporter',
    modalReportSuspicious: 'Report Suspicious Listing',
    modalMatchSimilarity: 'Similarity Confidence',
    modalCompareItems: 'Side-by-Side Comparison',
    modalClaimTitle: 'Claim Ownership',
    modalClaimSubtitle: 'Provide proof to the finder that this item belongs to you.',
    modalProofDesc: 'Describe specific details only the owner would know (e.g. serial numbers, screen wallpapers, contents):',
    modalProofPlaceholder: 'e.g. The wallet contains my student ID card and a blue receipt inside the cash pouch...',
    modalAnswerSecurity: 'Answer the Security Question:',
    modalSubmitClaim: 'Submit Claim Verification',
    modalSubmitting: 'Submitting Verification...',

    // Report Wizard Steps
    wizardTitleLost: 'Report a Lost Item',
    wizardTitleFound: 'Report a Found Item',
    wizardStep1: '1. Item Details',
    wizardStep2: '2. Location & Date',
    wizardStep3: '3. Photos & Proof',
    wizardStep4: '4. Review & Publish',
    wizardItemTitle: 'Item Title / Name',
    wizardItemCategory: 'Category',
    wizardItemDesc: 'Description',
    wizardLocationName: 'Location / Landmark',
    wizardCity: 'City / Campus',
    wizardSpecificSpot: 'Specific Spot (e.g. 2nd Floor Library Desk)',
    wizardDate: 'Date',
    wizardTime: 'Time (Approximate)',
    wizardImageUrls: 'Photo / Image URL',
    wizardReward: 'Optional Finder Reward (e.g. $25 or ₹500)',
    wizardSecurityQuestion: 'Custom Verification Question for Claimants',
    wizardNext: 'Continue Next Step →',
    wizardBack: '← Back',
    wizardSubmit: 'Publish Report to Community',
    wizardSuccessHeading: 'Report Successfully Published!',
    wizardSuccessDesc: 'Your listing is live. We will monitor new reports and notify you if a matching item is found.',

    // Categories
    catElectronics: 'Electronics',
    catWalletsCards: 'Wallets & Cards',
    catKeys: 'Keys',
    catBagsBackpacks: 'Bags & Backpacks',
    catJewelryWatches: 'Jewelry & Watches',
    catClothingAccessories: 'Clothing & Accessories',
    catDocumentsIDs: 'Documents & IDs',
    catPets: 'Pets',
    catBooksStationary: 'Books & Stationary',
    catOther: 'Other',

    // Footer
    footerAbout: 'FindIt Community Network',
    footerDesc: 'Helping communities reconnect with what matters. A secure, modern platform powered by automated match detection, verified ownership protection, and neighbor-to-neighbor trust.',
    footerAlertsLabel: 'Get local lost & found alerts in your neighborhood',
    footerEmailPlaceholder: 'Enter your email address',
    footerSubscribeTitle: 'Get local lost & found alerts in your neighborhood',
    footerSubscribeBtn: 'Subscribe',
    footerSubscribedSuccess: 'Subscribed to Community Alerts!',
    footerColExplore: 'Explore Community',
    footerColAction: 'Take Action',
    footerColTrust: 'Trust & Legal',
    footerSupport: 'Contact Support',
    footerCopyright: `© ${new Date().getFullYear()} FindIt Community Network. Built for safe and responsible returns.`,
    footerQuickNav: 'Explore Community',
    footerTakeAction: 'Take Action',
    footerTrustLegal: 'Trust & Legal',
    footerSafetyGuidelines: 'Safety Guidelines',
    footerPrivacyPolicy: 'Privacy & Anonymity',
    footerTermsService: 'Terms of Service',
    footerContactSupport: 'Contact Support',
    footerRights: 'FindIt Community Network. Built for safe and responsible returns.',
    languageSelectPrompt: 'Change Language / ಭಾಷೆ ಬದಲಾಯಿಸಿ',
  },
  kn: {
    // Brand & Slogan
    appName: 'ಫೈಂಡ್‌ಇಟ್ (FindIt)',
    tagline: 'ಸಮುದಾಯ ಕಳೆದುಹೋದ & ಸಿಕ್ಕ ವಸ್ತುಗಳ ವೇದಿಕೆ',
    communitySubtitle: 'ಜನರಿಗೆ ಅವರ ಪ್ರಮುಖ ವಸ್ತುಗಳನ್ನು ಮರಳಿ ಪಡೆಯಲು ಸಹಾಯ ಮಾಡುವ ನಂಬಿಕಸ್ಥ ವೇದಿಕೆ.',

    // Navigation
    navHome: 'ಮುಖಪುಟ',
    navLostItems: 'ಕಳೆದುಹೋದ ವಸ್ತುಗಳು',
    navFoundItems: 'ಸಿಕ್ಕ ವಸ್ತುಗಳು',
    navExplore: 'ಹುಡುಕಿ & ಅನ್ವೇಷಿಸಿ',
    navHowItWorks: 'ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ',
    navSafety: 'ಸುರಕ್ಷತೆ & ನಂಬಿಕೆ',
    navReportItem: 'ವಸ್ತು ವರದಿ ಮಾಡಿ',
    navSignIn: 'ಸೈನ್ ಇನ್',
    navSignOut: 'ಸೈನ್ ಔಟ್',
    navDashboard: 'ಡ್ಯಾಶ್‌ಬೋರ್ಡ್',
    navNotifications: 'ಅಧಿಸೂಚನೆಗಳು',
    navSwitchPersona: 'ಪ್ರೊಫೈಲ್ ಬದಲಿಸಿ',
    navLanguage: 'ಭಾಷೆ (Language)',

    // Hero Section
    heroBadge: 'ಸ್ಮಾರ್ಟ್ ಮ್ಯಾಚ್ ಡಿಟೆಕ್ಷನ್ ಎಂಜಿನ್ & ಪರಿಶೀಲಿಸಿದ ಹಸ್ತಾಂತರ',
    heroTitle: 'ಏನಾದರೂ ಕಳೆದುಹೋಗಿದೆಯೇ?',
    heroSubtitle: 'ಅದನ್ನು ಹುಡುಕಲು ನಾವು ಸಹಾಯ ಮಾಡುತ್ತೇವೆ.',
    heroDesc: 'ಕಳೆದುಹೋದ ಮತ್ತು ಸಿಕ್ಕ ವಸ್ತುಗಳನ್ನು ವರದಿ ಮಾಡಲು ಹಾಗೂ ಅವುಗಳನ್ನು ಸರಿಯಾದ ಮಾಲೀಕರಿಗೆ ಮರಳಿಸಲು ನಂಬಿಕಸ್ಥ ಸಮುದಾಯ ವೇದಿಕೆ. ವೇಗದ ವರದಿಗಳು, ಸ್ವಯಂಚಾಲಿತ ಹೊಂದಾಣಿಕೆ ಮತ್ತು ಸುರಕ್ಷಿತ ಪರಿಶೀಲನೆ.',
    heroTitleLine1: 'ಏನಾದರೂ ಕಳೆದುಹೋಗಿದೆಯೇ?',
    heroTitleLine2: 'ಅದನ್ನು ಹುಡುಕಲು ನಾವು ಸಹಾಯ ಮಾಡುತ್ತೇವೆ.',
    heroBtnLost: 'ಕಳೆದುಹೋದ ವರದಿ ಸಲ್ಲಿಸಿ',
    heroBtnFound: 'ಸಿಕ್ಕ ವಸ್ತು ವರದಿ ಸಲ್ಲಿಸಿ',
    heroReportLost: 'ಕಳೆದುಹೋದ ವಸ್ತು ವರದಿ ಮಾಡಿ',
    heroReportFound: 'ಸಿಕ್ಕ ವಸ್ತು ವರದಿ ಮಾಡಿ',
    heroSearchPlaceholder: 'ಬ್ಯಾಕ್‌ಪ್ಯಾಕ್, ಏರ್‌ಪಾಡ್ಸ್, ಕೀಗಳು, ವಾಲೆಟ್, ಕಾಲೇಜು ಗ್ರಂಥಾಲಯ ಹುಡುಕಿ...',
    heroSearchBtn: 'ಹುಡುಕಿ',
    heroPopular: 'ಜನಪ್ರಿಯ',
    heroReunitedToday: 'ಇಂದು ಮರಳಿಸಲಾಗಿದೆ',
    heroMatchScore: 'ಹೊಂದಾಣಿಕೆ',
    heroPossibleMatch: 'ಸಂಭಾವ್ಯ ಹೊಂದಾಣಿಕೆ',
    heroCompareDetails: 'ವಿವರ ಹೋಲಿಸಿ',
    heroVerifiedSafe: 'ಸುರಕ್ಷಿತ ಪರಿಶೀಲನೆ',
    heroPrivateClaims: 'ಖಾಸಗಿ ಹಕ್ಕು ಕೋರಿಕೆ',
    heroCommunityQuote: '“ಜನರ ಕಳೆದುಹೋದ ಪ್ರಮುಖ ವಸ್ತುಗಳನ್ನು ಮರಳಿ ತಲುಪಿಸುವ ಸಮುದಾಯ ಸೇವೆ.”',

    // Recently Reported Section / Live Feed
    feedBadge: 'ಲೈವ್ ಸಮುದಾಯ ಫೀಡ್',
    feedTitle: 'ಇತ್ತೀಚಿನ ವರದಿಗಳು',
    feedSubtitle: 'ನಿಮ್ಮ ಸುತ್ತಮುತ್ತಲಿನ ಇತ್ತೀಚಿನ ಕಳೆದುಹೋದ ಮತ್ತು ದೊರೆತ ವಸ್ತುಗಳನ್ನು ಬ್ರೌಸ್ ಮಾಡಿ.',
    feedExploreAll: 'ಎಲ್ಲಾ ಸಮುದಾಯ ಪಟ್ಟಿಗಳನ್ನು ನೋಡಿ',
    recentHeading: 'ಇತ್ತೀಚಿನ ಕಳೆದುಹೋದ & ಸಿಕ್ಕ ವಸ್ತುಗಳ ವರದಿಗಳು',
    recentSubtitle: 'ಕಾಲೇಜು ಕ್ಯಾಂಪಸ್‌ಗಳು, ಸಾರಿಗೆ ನಿಲ್ದಾಣಗಳು ಮತ್ತು ಸುತ್ತಮುತ್ತಲಿನ ಪ್ರದೇಶಗಳಲ್ಲಿ ವರದಿಯಾದ ಇತ್ತೀಚಿನ ವಸ್ತುಗಳನ್ನು ನೋಡಿ.',
    tabAll: 'ಎಲ್ಲಾ ವಸ್ತುಗಳು',
    tabLost: 'ಕಳೆದುಹೋದ ವಸ್ತುಗಳು',
    tabFound: 'ಸಿಕ್ಕ ವಸ್ತುಗಳು',
    tabAllItems: 'ಎಲ್ಲಾ ವಸ್ತುಗಳು',
    tabLostItems: 'ಕಳೆದುಹೋದ ವಸ್ತುಗಳು',
    tabFoundItems: 'ಸಿಕ್ಕ ವಸ್ತುಗಳು',
    categoryAll: 'ಎಲ್ಲಾ ವಿಭಾಗಗಳು',
    filterAllCategories: 'ಎಲ್ಲಾ ವಿಭಾಗಗಳು',
    viewAllInExplore: 'ಹುಡುಕಾಟ ಪುಟದಲ್ಲಿ ಎಲ್ಲವನ್ನೂ ನೋಡಿ →',
    noItemsFound: 'ಯಾವುದೇ ವಸ್ತುಗಳು ಹೊಂದಾಣಿಕೆಯಾಗುತ್ತಿಲ್ಲ.',
    clearFilters: 'ಫಿಲ್ಟರ್‌ಗಳನ್ನು ತೆರವುಗೊಳಿಸಿ',

    // Item Card & Details
    badgeLost: 'ಕಳೆದುಹೋಗಿದೆ',
    badgeFound: 'ಸಿಕ್ಕಿದೆ',
    badgeReunited: 'ಮರಳಿಸಲಾಗಿದೆ 🎉',
    badgeActive: 'ಸಕ್ರಿಯ ಹುಡುಕಾಟ',
    badgeZeroPII: 'ಶೂನ್ಯ ಸಾರ್ವಜನಿಕ ಮಾಹಿತಿ',
    statusReunited: 'ಮರಳಿಸಲಾಗಿದೆ',
    btnClaim: 'ಸ್ವಾಮ್ಯ ಹಕ್ಕು ಪಡೆಯಿರಿ',
    btnDetails: 'ವಿವರ ನೋಡಿ',
    cardViewDetails: 'ವಿವರ ನೋಡಿ',
    btnMatchFound: 'ಹೊಂದಾಣಿಕೆ ಪತ್ತೆಯಾಗಿದೆ',
    btnClaimItem: 'ಇದು ನನ್ನದೇ ವಸ್ತು',
    btnContactFinder: 'ಹುಡುಕಿದವರನ್ನು ಸಂಪರ್ಕಿಸಿ',
    btnContactOwner: 'ಮಾಲೀಕರಿಗೆ ಸಂದೇಶ ಕಳುಹಿಸಿ',
    markReunitedSuccess: 'ಯಶಸ್ವಿಯಾಗಿ ಮರಳಿಸಲಾಗಿದೆ ಎಂದು ಗುರುತಿಸಿ 🎉',
    itemLocation: 'ಸ್ಥಳ',
    itemDate: 'ದಿನಾಂಕ & ಸಮಯ',
    itemDescription: 'ವಿವರಣೆ',
    itemSecretProof: 'ಗುರುತುಗಳು & ರಹಸ್ಯ ಲಕ್ಷಣಗಳು',
    reportedAgo: 'ವರದಿ ದಿನಾಂಕ',
    rewardOffered: 'ಬಹುಮಾನ ನಿಗದಿಯಾಗಿದೆ',
    matchesDetected: (count: number) => `ಪತ್ತೆಯಾದ ಹೊಂದಾಣಿಕೆಗಳು (${count})`,
    compareSideBySide: 'ಪಕ್ಕ-ಪಕ್ಕದಲ್ಲಿ ವಿವರ ಹೋಲಿಸಿ',

    // How It Works
    hiwBadge: '೩ ಸುಲಭ ಹಂತಗಳ ಪ್ರಕ್ರಿಯೆ',
    hiwTitle: 'ಫೈಂಡ್‌ಇಟ್ ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ?',
    hiwSubtitle: 'ವೇಗ, ಸ್ಪಷ್ಟತೆ ಮತ್ತು ಸುರಕ್ಷತೆಗಾಗಿ ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ. ವಸ್ತುಗಳು ತಮ್ಮ ನಿಜವಾದ ಮಾಲೀಕರನ್ನು ತಲುಪುವುದನ್ನು ಖಚಿತಪಡಿಸುತ್ತದೆ.',
    hiwStep1Title: 'ತ್ವರಿತ & ರಚನಾತ್ಮಕ ವರದಿ',
    hiwStep1Desc: 'ಫೋಟೋಗಳನ್ನು ಅಪ್ಲೋಡ್ ಮಾಡಿ, ಸ್ಥಳವನ್ನು ಪಿನ್ ಮಾಡಿ ಮತ್ತು ಪ್ರಮುಖ ಗುರುತುಗಳನ್ನು ನಮ್ಮ ಸುಲಭ ವಿಜಾರ್ಡ್ ಮೂಲಕ ದಾಖಲಿಸಿ.',
    hiwStep2Title: 'ಸ್ಮಾರ್ಟ್ ಹೊಂದಾಣಿಕೆ ಜ್ಞಾನ',
    hiwStep2Desc: 'ನಮ್ಮ ಹೊಂದಾಣಿಕೆ ಆಲ್ಗಾರಿದಮ್ ದಿನಾಂಕಗಳು, ವಿಭಾಗಗಳು, ಕೀವರ್ಡ್‌ಗಳು ಮತ್ತು ಸ್ಥಳಗಳನ್ನು ವಿಶ್ಲೇಷಿಸಿ ಹೊಂದಾಣಿಕೆಗಳನ್ನು ಹುಡುಕುತ್ತದೆ.',
    hiwStep3Title: 'ಸುರಕ್ಷಿತ & ಪರಿಶೀಲಿಸಿದ ಹಸ್ತಾಂತರ',
    hiwStep3Desc: 'ವೈಯಕ್ತಿಕ ಫೋನ್ ಸಂಖ್ಯೆಗಳನ್ನು ಬಹಿರಂಗಪಡಿಸದೆ ಸುರಕ್ಷಿತ ಮಾಲೀಕತ್ವ ಪರಿಶೀಲನೆ ವಿನಂತಿಗಳನ್ನು ಕಳುಹಿಸಿ.',
    howHeading: 'ಫೈಂಡ್‌ಇಟ್ ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ?',
    howSubtitle: 'ಕಳೆದುಹೋದ ವಸ್ತುಗಳನ್ನು ಅವುಗಳ ಮಾಲೀಕರಿಗೆ ಸುರಕ್ಷಿತವಾಗಿ ಮರಳಿಸಲು ರೂಪಿಸಲಾದ 3 ಸುಲಭ ಹಂತಗಳು.',
    howStep1Title: '೧. ವರದಿ & ನೋಂದಣಿ',
    howStep1Desc: 'ಸ್ಪಷ್ಟ ಫೋಟೋಗಳು, ಸಮಯ, ಸ್ಥಳದ ವಿವರ ಮತ್ತು ಭದ್ರತಾ ಪ್ರಶ್ನೆಯೊಂದಿಗೆ ಕೆಲವೇ ಕ್ಷಣಗಳಲ್ಲಿ ವರದಿ ಪ್ರಕಟಿಸಿ.',
    howStep2Title: '೨. ಸ್ಮಾರ್ಟ್ ಹೊಂದಾಣಿಕೆ ಪತ್ತೆ',
    howStep2Desc: 'ನಮ್ಮ ಆಲ್ಗಾರಿದಮ್ ಸ್ಥಳ, ಸಮಯ ಮತ್ತು ಪ್ರಮುಖ ವಿವರಗಳನ್ನು ವಿಶ್ಲೇಷಿಸಿ ಹೊಂದಾಣಿಕೆಯಾಗುವ ವಸ್ತುಗಳನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಸೂಚಿಸುತ್ತದೆ.',
    howStep3Title: '೩. ಪರಿಶೀಲಿಸಿದ ಸುರಕ್ಷಿತ ಹಸ್ತಾಂತರ',
    howStep3Desc: 'ಮಾಲೀಕರು ತಮ್ಮ ಸ್ವಾಮ್ಯದ ಪುರಾವೆಯನ್ನು ಖಾಸಗಿಯಾಗಿ ಒದಗಿಸುತ್ತಾರೆ. ಫೋನ್ ಸಂಖ್ಯೆ ಬಹಿರಂಗಪಡಿಸದೆ ಸುರಕ್ಷಿತವಾಗಿ ಹಸ್ತಾಂತರಿಸಿ.',
    howLearnMore: 'ಸುರಕ್ಷತಾ ಮಾರ್ಗಸೂಚಿಗಳ ಬಗ್ಗೆ ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ',

    // Two Option Report
    twoOptionHeading: 'ವರದಿ ಮಾಡಲು ಸಿದ್ಧರಿದ್ದೀರಾ?',
    twoOptionSubtitle: 'ನೀವು ಯಾವುದೇ ಬೆಲೆಬಾಳುವ ವಸ್ತುವನ್ನು ಕಳೆದುಕೊಂಡಿರಲಿ ಅಥವಾ ಬೇರೆಯವರ ವಸ್ತು ನಿಮಗೆ ಸಿಕ್ಕಿರಲಿ, ನಿಮ್ಮ ಪ್ರತಿ ವರದಿಯೂ ಮುಖ್ಯವಾಗಿದೆ.',
    reportLostTitle: 'ನಾನು ಕಳೆದುಕೊಂಡಿದ್ದೇನೆ',
    reportFoundTitle: 'ನನಗೆ ವಸ್ತು ಸಿಕ್ಕಿದೆ',
    optLostTitle: 'ನಾನು ಕಳೆದುಕೊಂಡಿದ್ದೇನೆ',
    optLostDesc: 'ಫೋಟೋಗಳು ಮತ್ತು ಸ್ಥಳದ ವಿವರಗಳೊಂದಿಗೆ ವರದಿ ರಚಿಸಿ. ಹೊಂದಾಣಿಕೆ ಕಂಡುಬಂದಾಗ ನಮ್ಮ ವ್ಯವಸ್ಥೆಯು ನಿಮಗೆ ತಕ್ಷಣ ಮಾಹಿತಿ ನೀಡುತ್ತದೆ.',
    optLostBtn: 'ಕಳೆದುಹೋದ ವಸ್ತು ವರದಿ ಮಾಡಿ',
    optFoundTitle: 'ನನಗೆ ವಸ್ತು ಸಿಕ್ಕಿದೆ',
    optFoundDesc: 'ಸಿಕ್ಕ ವಸ್ತುವಿನ ವಿವರಗಳನ್ನು ಸುರಕ್ಷಿತವಾಗಿ ಪ್ರಕಟಿಸಿ. ಮಾಲೀಕತ್ವದ ಪ್ರಶ್ನೆಗಳ ಮೂಲಕ ಸರಿಯಾದ ವ್ಯಕ್ತಿಗೆ ಅದನ್ನು ತಲುಪಿಸಲು ಸಹಾಯ ಮಾಡಿ.',
    optFoundBtn: 'ಸಿಕ್ಕ ವಸ್ತು ವರದಿ ಮಾಡಿ',

    // Stats Section
    statsHeading: 'ಸಮುದಾಯದ ಪ್ರಭಾವ ಮತ್ತು ಸಾಧನೆ',
    statsReported: 'ದಾಖಲಾದ ವರದಿಗಳು',
    statsFound: 'ದೊರೆತ ವಸ್ತುಗಳು',
    statsReunited: 'ಮರಳಿಸಿದ ವಸ್ತುಗಳು',
    statsMembers: 'ಸಮುದಾಯ ಸದಸ್ಯರು',
    statTotalReports: 'ದಾಖಲಾದ ವರದಿಗಳು',
    statReunitedCount: 'ಯಶಸ್ವಿಯಾಗಿ ಮರಳಿಸಿದ ವಸ್ತುಗಳು',
    statMatchAccuracy: 'ಸ್ಮಾರ್ಟ್ ಹೊಂದಾಣಿಕೆ ದರ',
    statActiveUsers: 'ಸಕ್ರಿಯ ಬಳಕೆದಾರರು',

    // Trust & Safety
    safetyBadge: 'ಸಮುದಾಯ ಸುರಕ್ಷತಾ ಮಾನದಂಡಗಳು',
    safetyTitle: 'ಸುರಕ್ಷಿತ ಮತ್ತು ಜವಾಬ್ದಾರಿಯುತ ಮರಳಿಸುವಿಕೆಗಾಗಿ ನಿರ್ಮಿಸಲಾಗಿದೆ.',
    safetySubtitle: 'ನಾವು ಸಮುದಾಯದ ಸುರಕ್ಷತೆಗೆ ಪ್ರಥಮ ಆದ್ಯತೆ ನೀಡುತ್ತೇವೆ. ಸುಧಾರಿತ ಪರಿಶೀಲನಾ ಸಾಧನಗಳು ನಿಮ್ಮ ವಸ್ತುಗಳನ್ನು ಸುರಕ್ಷಿತವಾಗಿ ಮರಳಿ ಪಡೆಯಲು ನೆರವಾಗುತ್ತವೆ.',
    trustHeading: 'ಗರಿಷ್ಠ ಗೌಪ್ಯತೆ ಮತ್ತು ಸುರಕ್ಷತೆಯೊಂದಿಗೆ ವಿನ್ಯಾಸ',
    trustSubtitle: 'ವಸ್ತುಗಳು ಮರಳುವ ಸಾಧ್ಯತೆಯನ್ನು ಹೆಚ್ಚಿಸುತ್ತಲೇ ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಮಾಹಿತಿಯನ್ನು ನಾವು ಸಂಪೂರ್ಣ ರಕ್ಷಿಸುತ್ತೇವೆ.',
    secZeroPIITitle: 'ಖಾಸಗಿ ಸಂಪರ್ಕ ಮಾಹಿತಿ',
    secZeroPIIDesc: 'ನಿಮ್ಮ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ ಅಥವಾ ಇಮೇಲ್ ಸಾರ್ವಜನಿಕವಾಗಿ ಬಹಿರಂಗವಾಗುವುದಿಲ್ಲ. ಎಲ್ಲಾ ಸಂಭಾಷಣೆಗಳು ಆ್ಯಪ್ ಒಳಗಿನ ಸುರಕ್ಷಿತ ಸಂದೇಶಗಳ ಮೂಲಕವೇ ನಡೆಯುತ್ತವೆ.',
    secOwnershipTitle: 'ಸ್ವಾಮ್ಯತೆಯ ಪುರಾವೆ ಪರಿಶೀಲನೆ',
    secOwnershipDesc: 'ವಸ್ತು ಸಿಕ್ಕವರು ಗೌಪ್ಯ ಗುರುತುಗಳು ಅಥವಾ ರಹಸ್ಯ ಪ್ರಶ್ನೆಗಳ ಮೂಲಕ ನಿಜವಾದ ಮಾಲೀಕರನ್ನು ಪರಿಶೀಲಿಸಬಹುದು.',
    secSafeHandoffTitle: 'ಸುರಕ್ಷಿತ ಹಸ್ತಾಂತರ ಮಾರ್ಗಸೂಚಿಗಳು',
    secSafeHandoffDesc: 'ಅನುಮಾನಾಸ್ಪದ ಅಥವಾ ನಕಲಿ ಕ್ಲೈಮ್‌ಗಳನ್ನು ತಕ್ಷಣವೇ ಫ್ಲ್ಯಾಗ್ ಮಾಡಿ ಸಮುದಾಯದ ರಕ್ಷಣೆಯನ್ನು ಕಾಪಾಡಬಹುದು.',
    secCommunityTrustTitle: 'ಸಮುದಾಯ ವಿಶ್ವಾಸಾರ್ಹತೆ',
    secCommunityTrustDesc: 'ಪ್ರಾಮಾಣಿಕವಾಗಿ ವಸ್ತುಗಳನ್ನು ಮರಳಿಸಿದವರಿಗೆ ಸಮುದಾಯದಲ್ಲಿ ಪ್ರತಿಷ್ಠೆಯ ಅಂಕಗಳನ್ನು ನೀಡಲಾಗುತ್ತದೆ.',
    trustPillar1Title: 'ಸಾರ್ವಜನಿಕ ಸಂಪರ್ಕ ಸಂಖ್ಯೆ ಮುಕ್ತವಲ್ಲ',
    trustPillar1Desc: 'ನಿಮ್ಮ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ ಅಥವಾ ಇಮೇಲ್ ಸಾರ್ವಜನಿಕವಾಗಿ ಬಹಿರಂಗವಾಗುವುದಿಲ್ಲ. ಆ್ಯಪ್ ಒಳಗಿನ ಸುರಕ್ಷಿತ ಚಾಟ್ ಮೂಲಕ ಸಂವಹನ ನಡೆಸಿ.',
    trustPillar2Title: 'ಸ್ವಾಮ್ಯತೆಯ ಪುರಾವೆ ಪರಿಶೀಲನೆ',
    trustPillar2Desc: 'ವಸ್ತು ಸಿಕ್ಕವರು ಗೌಪ್ಯ ಗುರುತುಗಳು ಅಥವಾ ರಹಸ್ಯ ಪ್ರಶ್ನೆಗಳ ಮೂಲಕ ನಿಜವಾದ ಮಾಲೀಕರನ್ನು ಪರಿಶೀಲಿಸಬಹುದು.',
    trustPillar3Title: 'ಸುರಕ್ಷಿತ ಭೇಟಿಯ ಸಾರ್ವಜನಿಕ ಸ್ಥಳಗಳು',
    trustPillar3Desc: 'ಕಾಲೇಜು ಭದ್ರತಾ ಕೊಠಡಿಗಳು, ಪೊಲೀಸ್ ಠಾಣೆಗಳು ಮತ್ತು ಪ್ರಸಿದ್ಧ ಸಾರ್ವಜನಿಕ ಕೇಂದ್ರಗಳಲ್ಲಿ ಹಸ್ತಾಂತರ ನಡೆಸಲು ಶಿಫಾರಸು ಮಾಡುತ್ತೇವೆ.',
    trustPillar4Title: 'ಸಮುದಾಯ ಪರಿಶೀಲನೆ & ವರದಿ',
    trustPillar4Desc: 'ನಕಲಿ ವರದಿಗಳು ಮತ್ತು ಅನುಮಾನಾಸ್ಪದ ಚಟುವಟಿಕೆಗಳನ್ನು ತಡೆಗಟ್ಟಲು ತ್ವರಿತ ಫ್ಲ್ಯಾಗಿಂಗ್ ವ್ಯವಸ್ಥೆ.',
    trustExploreGuidelines: 'ಸಂಪೂರ್ಣ ಸುರಕ್ಷತಾ ಮಾರ್ಗಸೂಚಿಗಳನ್ನು ಓದಿ →',

    // Explore & Search Page
    exploreTitle: 'ಹುಡುಕಾಟ & ಅನ್ವೇಷಣೆ',
    exploreSubtitle: 'ಸಮುದಾಯದ ವರದಿಗಳನ್ನು ಬ್ರೌಸ್ ಮಾಡಿ, ಫಿಲ್ಟರ್‌ಗಳನ್ನು ಅನ್ವಯಿಸಿ ಅಥವಾ ನಿರ್ದಿಷ್ಟ ಸ್ಥಳಗಳನ್ನು ಹುಡುಕಿ.',
    exploreSearchPlaceholder: 'ಕೀವರ್ಡ್, ಸೀರಿಯಲ್ ನಂಬರ್, ಬಣ್ಣ, ಸ್ಥಳದ ಮೂಲಕ ಕಳೆದುಹೋದ ಅಥವಾ ದೊರೆತ ವಸ್ತುಗಳನ್ನು ಹುಡುಕಿ...',
    searchFilterKeyword: 'ಕೀವರ್ಡ್, ಬ್ರ್ಯಾಂಡ್ ಅಥವಾ ವಸ್ತು ಹುಡುಕಿ...',
    searchFilterCategory: 'ವಿಭಾಗ ಆಯ್ಕೆಮಾಡಿ',
    searchFilterCity: 'ನಗರ / ಕ್ಯಾಂಪಸ್',
    searchFilterStatus: 'ವಸ್ತುವಿನ ಸ್ಥಿತಿ',
    searchFilterDate: 'ದಿನಾಂಕ ಶ್ರೇಣಿ',
    filterReportType: 'ವರದಿ ಪ್ರಕಾರ',
    filterAllTypes: 'ಎಲ್ಲಾ (ಕಳೆದುಹೋದ & ದೊರೆತ)',
    filterCategory: 'ವಿಭಾಗ',
    filterCity: 'ನಗರ / ಪ್ರದೇಶ',
    filterAllCities: 'ಎಲ್ಲಾ ನಗರಗಳು',
    filterDateRange: 'ದಿನಾಂಕ ಶ್ರೇಣಿ',
    filterAnyTime: 'ಎಲ್ಲಾ ಸಮಯ',
    filterPast24h: 'ಕಳೆದ 24 ಗಂಟೆಗಳು',
    filterPast7d: 'ಕಳೆದ 7 ದಿನಗಳು',
    filterPast30d: 'ಕಳೆದ 30 ದಿನಗಳು',
    filterStatus: 'ಸ್ಥಿತಿ',
    filterAllStatuses: 'ಎಲ್ಲಾ ಸ್ಥಿತಿಗಳು',
    filterActiveUnresolved: 'ಸಕ್ರಿಯ (ಇನ್ನೂ ಸಿಕ್ಕಿಲ್ಲ)',
    showingListingsCount: (count: number) => `${count} ಪಟ್ಟಿಗಳನ್ನು ತೋರಿಸಲಾಗುತ್ತಿದೆ`,
    sortBy: 'ವಿಂಗಡಿಸಿ',
    sortByLabel: 'ವಿಂಗಡಿಸಿ:',
    sortNewest: 'ಹೊಸದು ಮೊದಲು',
    sortOldest: 'ಹಳೆಯದು ಮೊದಲು',
    sortTitle: 'ಶೀರ್ಷಿಕೆ (A-Z)',
    showingResults: 'ವಸ್ತುಗಳು ಪ್ರದರ್ಶನಗೊಳ್ಳುತ್ತಿವೆ',
    statusAll: 'ಎಲ್ಲಾ ಸ್ಥಿತಿಗಳು',
    statusActive: 'ಸಕ್ರಿಯ ಮಾತ್ರ',
    dateAll: 'ಎಲ್ಲಾ ಸಮಯ',
    dateToday: 'ಇಂದು',
    dateThisWeek: 'ಈ ವಾರ',
    dateThisMonth: 'ಈ ತಿಂಗಳು',
    resetAllFilters: 'ಎಲ್ಲಾ ಫಿಲ್ಟರ್‌ಗಳನ್ನು ಮರುಹೊಂದಿಸಿ',
    gridView: 'ಗ್ರಿಡ್ ನೋಟ',
    listView: 'ಪಟ್ಟಿ ನೋಟ',

    // User Dashboard
    dashTitle: 'ಬಳಕೆದಾರರ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್',
    dashOverview: 'ಅವಲೋಕನ',
    dashMyLost: 'ನನ್ನ ಕಳೆದುಹೋದ ವರದಿಗಳು',
    dashMyFound: 'ನನ್ನ ದೊರೆತ ಪೋಸ್ಟ್‌ಗಳು',
    dashMatches: 'ಸಂಭಾವ್ಯ ಹೊಂದಾಣಿಕೆಗಳು',
    dashMessages: 'ಸಂದೇಶಗಳು & ಹಸ್ತಾಂತರ',
    dashClaims: 'ಮಾಲೀಕತ್ವದ ಹಕ್ಕು ಕೋರಿಕೆಗಳು',
    dashNotifications: 'ಅಧಿಸೂಚನೆಗಳು',
    dashSettings: 'ಸೆಟ್ಟಿಂಗ್‌ಗಳು',
    dashPoints: 'ಪ್ರತಿಷ್ಠೆಯ ಅಂಕಗಳು',
    dashRank: 'ಸಮುದಾಯ ಶ್ರೇಣಿ',
    dashQuickReportLost: '+ ಕಳೆದುಹೋದ ವಸ್ತು ವರದಿ',
    dashQuickReportFound: '+ ಸಿಕ್ಕ ವಸ್ತು ವರದಿ',
    dashRecentActivity: 'ಇತ್ತೀಚಿನ ಚಟುವಟಿಕೆಗಳ ಟೈಮ್‌ಲೈನ್',
    dashNoMessages: 'ಯಾವುದೇ ಸಕ್ರಿಯ ಸಂಭಾಷಣೆಗಳಿಲ್ಲ. ಸುರಕ್ಷಿತ ಚಾಟ್ ಆರಂಭಿಸಲು ವಸ್ತುವಿನ ವಿವರದಲ್ಲಿ "ಸಂದೇಶ ಕಳುಹಿಸಿ" ಕ್ಲಿಕ್ ಮಾಡಿ.',
    dashSendMessage: 'ಸಂದೇಶ ಕಳುಹಿಸಿ',
    dashTypeMessage: 'ಹಸ್ತಾಂತರ ಅಥವಾ ಪರಿಶೀಲನೆಗೆ ಸಂಬಂಧಿಸಿದಂತೆ ಸಂದೇಶ ಬರೆಯಿರಿ...',
    dashApproveClaim: 'ಹಕ್ಕು ಕೋರಿಕೆ ಅನುಮೋದಿಸಿ & ಹಸ್ತಾಂತರಿಸಿ',
    dashRejectClaim: 'ಹಕ್ಕು ಕೋರಿಕೆ ತಿರಸ್ಕರಿಸಿ',
    dashMarkCompleted: 'ಯಶಸ್ವಿಯಾಗಿ ಮರಳಿಸಲಾಗಿದೆ ಎಂದು ಗುರುತಿಸಿ 🎉',

    // Modals & Forms
    matchModalTitle: 'ಸಂಭಾವ್ಯ ಹೊಂದಾಣಿಕೆ ಕಂಡುಬಂದಿದೆ',
    matchModalSubtitle: 'ನಮ್ಮ ವ್ಯವಸ್ಥೆಯು ಈ ಎರಡು ಪಟ್ಟಿಗಳ ನಡುವೆ ಹೆಚ್ಚಿನ ಹೊಂದಾಣಿಕೆಯನ್ನು ಪತ್ತೆಹಚ್ಚಿದೆ.',
    matchConfidence: 'ಹೊಂದಾಣಿಕೆ ನಿಖರತೆ',
    modalItemDetails: 'ವಸ್ತುವಿನ ಪೂರ್ಣ ವಿವರಗಳು',
    modalClose: 'ಮುಚ್ಚಿ',
    modalLocation: 'ಸ್ಥಳ',
    modalDateFound: 'ಸಿಕ್ಕ ದಿನಾಂಕ',
    modalDateLost: 'ಕಳೆದುಹೋದ ದಿನಾಂಕ',
    modalDescription: 'ವಿವರಣೆ',
    modalIdentifyingFeatures: 'ವಿಶೇಷ ಗುರುತುಗಳು / ಲಕ್ಷಣಗಳು',
    modalSecurityQuestion: 'ಭದ್ರತಾ ಪರಿಶೀಲನಾ ಸವಾಲು',
    modalReportedBy: 'ವರದಿ ಮಾಡಿದವರು',
    modalContactReporter: 'ವರದಿದಾರರಿಗೆ ಸಂದೇಶ ಕಳುಹಿಸಿ',
    modalReportSuspicious: 'ಅನುಮಾನಾಸ್ಪದ ಪೋಸ್ಟ್ ವರದಿ ಮಾಡಿ',
    modalMatchSimilarity: 'ಹೊಂದಾಣಿಕೆಯ ಶೇಕಡಾವಾರು',
    modalCompareItems: 'ಪಕ್ಕ-ಪಕ್ಕದಲ್ಲಿ ವಿವರ ಹೋಲಿಕೆ',
    modalClaimTitle: 'ಸ್ವಾಮ್ಯ ಹಕ್ಕು ಪಡೆಯಿರಿ',
    modalClaimSubtitle: 'ಈ ವಸ್ತು ನಿಮ್ಮದೇ ಎಂದು ಸಾಬೀತುಪಡಿಸಲು ಪುರಾವೆ ಒದಗಿಸಿ.',
    modalProofDesc: 'ಕೇವಲ ಮಾಲೀಕರಿಗೆ ಮಾತ್ರ ತಿಳಿದಿರುವ ನಿರ್ದಿಷ್ಟ ವಿವರಗಳನ್ನು ಬರೆಯಿರಿ (ಉದಾ: ಸೀರಿಯಲ್ ನಂಬರ್, ವಾಲ್‌ಪೇಪರ್, ಒಳಗಿರುವ ವಸ್ತುಗಳು):',
    modalProofPlaceholder: 'ಉದಾ: ವಾಲೆಟ್ ಒಳಗೆ ನನ್ನ ವಿದ್ಯಾರ್ಥಿ ಗುರುತಿನ ಚೀಟಿ ಮತ್ತು ನೀಲಿ ಬಣ್ಣದ ರಸೀದಿ ಇದೆ...',
    modalAnswerSecurity: 'ಭದ್ರತಾ ಪ್ರಶ್ನೆಗೆ ಉತ್ತರಿಸಿ:',
    modalSubmitClaim: 'ಪರಿಶೀಲನಾ ಹಕ್ಕು ಸಲ್ಲಿಸಿ',
    modalSubmitting: 'ಸಲ್ಲಿಸಲಾಗುತ್ತಿದೆ...',

    // Report Wizard Steps
    wizardTitleLost: 'ಕಳೆದುಹೋದ ವಸ್ತುವಿನ ವರದಿ',
    wizardTitleFound: 'ಸಿಕ್ಕ ವಸ್ತುವಿನ ವರದಿ',
    wizardStep1: '೧. ವಸ್ತುವಿನ ವಿವರಗಳು',
    wizardStep2: '೨. ಸ್ಥಳ ಮತ್ತು ದಿನಾಂಕ',
    wizardStep3: '೩. ಫೋಟೋಗಳು & ಪುರಾವೆ',
    wizardStep4: '೪. ಪರಿಶೀಲನೆ & ಪ್ರಕಟಣೆ',
    wizardItemTitle: 'ವಸ್ತುವಿನ ಹೆಸರು / ಶೀರ್ಷಿಕೆ',
    wizardItemCategory: 'ವಿಭಾಗ',
    wizardItemDesc: 'ವಿವರಣೆ',
    wizardLocationName: 'ಸ್ಥಳ / ಗುರುತು',
    wizardCity: 'ನಗರ / ಕ್ಯಾಂಪಸ್',
    wizardSpecificSpot: 'ನಿರ್ದಿಷ್ಟ ಸ್ಥಳ (ಉದಾ: ೨ನೇ ಮಹಡಿ ಗ್ರಂಥಾಲಯ)',
    wizardDate: 'ದಿನಾಂಕ',
    wizardTime: 'ಅಂದಾಜು ಸಮಯ',
    wizardImageUrls: 'ಫೋಟೋ / ಚಿತ್ರದ ಲಿಂಕ್ (URL)',
    wizardReward: 'ಕಂಡುಹಿಡಿದವರಿಗೆ ಬಹುಮಾನ (ಐಚ್ಛಿಕ - ಉದಾ: ₹500)',
    wizardSecurityQuestion: 'ಹಕ್ಕು ಪಡೆಯುವವರಿಗಾಗಿ ಭದ್ರತಾ ಪ್ರಶ್ನೆ',
    wizardNext: 'ಮುಂದಿನ ಹಂತ →',
    wizardBack: '← ಹಿಂದಕ್ಕೆ',
    wizardSubmit: 'ವರದಿಯನ್ನು ಪ್ರಕಟಿಸಿ',
    wizardSuccessHeading: 'ವರದಿಯನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಪ್ರಕಟಿಸಲಾಗಿದೆ!',
    wizardSuccessDesc: 'ನಿಮ್ಮ ವರದಿ ನೇರಪ್ರಸಾರವಾಗಿದೆ. ಹೊಂದಾಣಿಕೆಯಾಗುವ ವಸ್ತು ಪತ್ತೆಯಾದಾಗ ನಿಮಗೆ ತಕ್ಷಣ ಅಧಿಸೂಚನೆ ನೀಡಲಾಗುವುದು.',

    // Categories
    catElectronics: 'ಎಲೆಕ್ಟ್ರಾನಿಕ್ಸ್ (Electronics)',
    catWalletsCards: 'ವಾಲೆಟ್‌ಗಳು & ಕಾರ್ಡ್‌ಗಳು (Wallets & Cards)',
    catKeys: 'ಕೀಗಳು (Keys)',
    catBagsBackpacks: 'ಬ್ಯಾಗ್‌ಗಳು & ಬೆನ್ನುಚೀಲಗಳು (Bags & Backpacks)',
    catJewelryWatches: 'ಆಭರಣಗಳು & ಕೈಗಡಿಯಾರಗಳು (Jewelry & Watches)',
    catClothingAccessories: 'ಬಟ್ಟೆ & ಪರಿಕರಗಳು (Clothing & Accessories)',
    catDocumentsIDs: 'ದಾಖಲೆಗಳು & ಐಡಿಗಳು (Documents & IDs)',
    catPets: 'ಸಾಕುಪ್ರಾಣಿಗಳು (Pets)',
    catBooksStationary: 'ಪುಸ್ತಕಗಳು & ಸಾಮಗ್ರಿಗಳು (Books & Stationary)',
    catOther: 'ಇತರೆ (Other)',

    // Footer
    footerAbout: 'ಫೈಂಡ್‌ಇಟ್ ಸಮುದಾಯ ನೆಟ್‌ವರ್ಕ್',
    footerDesc: 'ಜನರಿಗೆ ಅವರ ಪ್ರಮುಖ ವಸ್ತುಗಳನ್ನು ಮರಳಿ ಪಡೆಯಲು ಸಹಾಯ ಮಾಡುವ ನಂಬಿಕಸ್ಥ ವೇದಿಕೆ. ಸ್ವಯಂಚಾಲಿತ ಹೊಂದಾಣಿಕೆ ಮತ್ತು ಸುರಕ್ಷಿತ ಪರಿಶೀಲನೆಯೊಂದಿಗೆ.',
    footerAlertsLabel: 'ನಿಮ್ಮ ಪ್ರದೇಶದ ಕಳೆದುಹೋದ & ಸಿಕ್ಕ ವಸ್ತುಗಳ ಎಚ್ಚರಿಕೆಗಳನ್ನು ಪಡೆಯಿರಿ',
    footerEmailPlaceholder: 'ನಿಮ್ಮ ಇಮೇಲ್ ವಿಳಾಸ ನಮೂದಿಸಿ',
    footerSubscribeTitle: 'ನಿಮ್ಮ ಪ್ರದೇಶದ ಕಳೆದುಹೋದ & ಸಿಕ್ಕ ವಸ್ತುಗಳ ಎಚ್ಚರಿಕೆಗಳನ್ನು ಪಡೆಯಿರಿ',
    footerSubscribeBtn: 'ಚಂದಾದಾರರಾಗಿ',
    footerSubscribedSuccess: 'ಸ್ಥಳೀಯ ಎಚ್ಚರಿಕೆಗಳಿಗೆ ಯಶಸ್ವಿಯಾಗಿ ನೋಂದಾಯಿಸಲಾಗಿದೆ!',
    footerColExplore: 'ಸಮುದಾಯ ಅನ್ವೇಷಣೆ',
    footerColAction: 'ಕ್ರಮ ಕೈಗೊಳ್ಳಿ',
    footerColTrust: 'ನಂಬಿಕೆ & ಕಾನೂನು',
    footerSupport: 'ಬೆಂಬಲ ಸಹಾಯವಾಣಿ',
    footerCopyright: `© ${new Date().getFullYear()} ಫೈಂಡ್‌ಇಟ್ ಸಮುದಾಯ ನೆಟ್‌ವರ್ಕ್. ಸುರಕ್ಷಿತ ಹಾಗೂ ಜವಾಬ್ದಾರಿಯುತ ಮರಳಿಸುವಿಕೆಗಾಗಿ ನಿರ್ಮಿಸಲಾಗಿದೆ.`,
    footerQuickNav: 'ಸಮುದಾಯ ಅನ್ವೇಷಣೆ',
    footerTakeAction: 'ಕ್ರಮ ಕೈಗೊಳ್ಳಿ',
    footerTrustLegal: 'ನಂಬಿಕೆ & ಕಾನೂನು',
    footerSafetyGuidelines: 'ಸುರಕ್ಷತಾ ನಿಯಮಗಳು',
    footerPrivacyPolicy: 'ಗೌಪ್ಯತೆ & ಅನಾಮಧೇಯತೆ',
    footerTermsService: 'ಸೇವಾ ನಿಯಮಗಳು',
    footerContactSupport: 'ಬೆಂಬಲ ಸಹಾಯವಾಣಿ',
    footerRights: 'ಫೈಂಡ್‌ಇಟ್ ಸಮುದಾಯ ನೆಟ್‌ವರ್ಕ್. ಸುರಕ್ಷಿತ ಹಾಗೂ ಜವಾಬ್ದಾರಿಯುತ ಮರಳಿಸುವಿಕೆಗಾಗಿ ನಿರ್ಮಿಸಲಾಗಿದೆ.',
    languageSelectPrompt: 'ಭಾಷೆ ಆಯ್ಕೆಮಾಡಿ / Select Language',
  },
};

export const getCategoryTranslation = (category: string, lang: Language): string => {
  const t = translations[lang] || translations.en;
  switch (category) {
    case 'Electronics':
      return t.catElectronics;
    case 'Wallets & Cards':
      return t.catWalletsCards;
    case 'Keys':
      return t.catKeys;
    case 'Bags & Backpacks':
      return t.catBagsBackpacks;
    case 'Jewelry & Watches':
      return t.catJewelryWatches;
    case 'Clothing & Accessories':
      return t.catClothingAccessories;
    case 'Documents & IDs':
      return t.catDocumentsIDs;
    case 'Pets':
      return t.catPets;
    case 'Books & Stationary':
      return t.catBooksStationary;
    case 'Other':
      return t.catOther;
    default:
      return category;
  }
};
