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
  heroTitleLine1: string;
  heroTitleLine2: string;
  heroSubtitle: string;
  heroBtnLost: string;
  heroBtnFound: string;
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

  // Recently Reported Section
  recentHeading: string;
  recentSubtitle: string;
  tabAll: string;
  tabLost: string;
  tabFound: string;
  filterAllCategories: string;
  viewAllInExplore: string;
  noItemsFound: string;
  clearFilters: string;

  // Item Card
  badgeLost: string;
  badgeFound: string;
  badgeReunited: string;
  badgeActive: string;
  btnClaim: string;
  btnDetails: string;
  btnMatchFound: string;
  reportedAgo: string;
  rewardOffered: string;

  // How It Works
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
  optLostTitle: string;
  optLostDesc: string;
  optLostBtn: string;
  optFoundTitle: string;
  optFoundDesc: string;
  optFoundBtn: string;

  // Stats Section
  statsHeading: string;
  statTotalReports: string;
  statReunitedCount: string;
  statMatchAccuracy: string;
  statActiveUsers: string;

  // Trust & Safety
  trustHeading: string;
  trustSubtitle: string;
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
  searchFilterKeyword: string;
  searchFilterCategory: string;
  searchFilterCity: string;
  searchFilterStatus: string;
  searchFilterDate: string;
  sortByLabel: string;
  sortNewest: string;
  sortOldest: string;
  sortTitle: string;
  showingResults: string;
  statusAll: string;
  statusActive: string;
  statusReunited: string;
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
  footerSubscribeTitle: string;
  footerSubscribeBtn: string;
  footerSubscribedSuccess: string;
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
    heroTitleLine1: 'Lost Something?',
    heroTitleLine2: 'Let’s Help You Find It.',
    heroSubtitle: 'A trusted community platform to report lost and found items and reunite people with what matters to them. Fast reports, automated match alerts, and verified handoffs.',
    heroBtnLost: 'Report Lost Item',
    heroBtnFound: 'Report Found Item',
    heroSearchPlaceholder: 'Search backpack, AirPods, keys, wallet, college library...',
    heroSearchBtn: 'Search',
    heroPopular: 'Popular:',
    heroReunitedToday: 'Reunited Today',
    heroMatchScore: 'Match',
    heroPossibleMatch: 'Possible Match',
    heroCompareDetails: 'Compare Details',
    heroVerifiedSafe: 'Verified Safe',
    heroPrivateClaims: 'Private Claims',
    heroCommunityQuote: '“Helping communities reconnect with lost belongings.”',

    // Recently Reported Section
    recentHeading: 'Recent Lost & Found Reports',
    recentSubtitle: 'Browse recent items reported across campuses, transit stations, and local neighborhoods.',
    tabAll: 'All Items',
    tabLost: 'Lost Items',
    tabFound: 'Found Items',
    filterAllCategories: 'All Categories',
    viewAllInExplore: 'View All in Search & Explore →',
    noItemsFound: 'No items match the selected criteria.',
    clearFilters: 'Clear All Filters',

    // Item Card
    badgeLost: 'LOST',
    badgeFound: 'FOUND',
    badgeReunited: 'REUNITED 🎉',
    badgeActive: 'Active Search',
    btnClaim: 'Claim Ownership',
    btnDetails: 'View Details',
    btnMatchFound: 'Match Detected',
    reportedAgo: 'Reported',
    rewardOffered: 'Reward Offered',

    // How It Works
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
    optLostTitle: 'I Lost Something',
    optLostDesc: 'Create a report with photos, location, and optional reward. Our community and match engine will alert you instantly.',
    optLostBtn: 'Report Lost Belonging',
    optFoundTitle: 'I Found Something',
    optFoundDesc: 'Post the item safely with partial details. Help return it to its rightful owner through secure verification questions.',
    optFoundBtn: 'Report Found Belonging',

    // Stats Section
    statsHeading: 'Community Impact & Trust',
    statTotalReports: 'Items Reported',
    statReunitedCount: 'Successfully Reunited',
    statMatchAccuracy: 'Smart Match Rate',
    statActiveUsers: 'Active Neighbors',

    // Trust & Safety
    trustHeading: 'Built with Trust & Privacy at Core',
    trustSubtitle: 'We safeguard your personal information while maximizing the chances of successful returns.',
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
    exploreTitle: 'Search & Explore Items',
    exploreSubtitle: 'Filter through active lost and found reports by location, category, date, and keywords.',
    searchFilterKeyword: 'Search keywords, brands, items...',
    searchFilterCategory: 'Select Category',
    searchFilterCity: 'City / Campus',
    searchFilterStatus: 'Item Status',
    searchFilterDate: 'Date Range',
    sortByLabel: 'Sort By:',
    sortNewest: 'Newest First',
    sortOldest: 'Oldest First',
    sortTitle: 'Alphabetical',
    showingResults: 'Showing items',
    statusAll: 'All Statuses',
    statusActive: 'Active Only',
    statusReunited: 'Reunited Only',
    dateAll: 'All Time',
    dateToday: 'Today',
    dateThisWeek: 'This Week',
    dateThisMonth: 'This Month',
    resetAllFilters: 'Reset Filters',
    gridView: 'Grid View',
    listView: 'List View',

    // User Dashboard
    dashTitle: 'Member Dashboard',
    dashOverview: 'Overview',
    dashMyLost: 'My Lost Items',
    dashMyFound: 'My Found Items',
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
    footerSubscribeTitle: 'Get local lost & found alerts in your neighborhood',
    footerSubscribeBtn: 'Subscribe',
    footerSubscribedSuccess: 'Subscribed to Community Alerts!',
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
    heroTitleLine1: 'ಏನಾದರೂ ಕಳೆದುಹೋಗಿದೆಯೇ?',
    heroTitleLine2: 'ಅದನ್ನು ಹುಡುಕಲು ನಾವು ಸಹಾಯ ಮಾಡುತ್ತೇವೆ.',
    heroSubtitle: 'ಕಳೆದುಹೋದ ಮತ್ತು ಸಿಕ್ಕ ವಸ್ತುಗಳನ್ನು ವರದಿ ಮಾಡಲು ಹಾಗೂ ಅವುಗಳನ್ನು ಸರಿಯಾದ ಮಾಲೀಕರಿಗೆ ಮರಳಿಸಲು ನಂಬಿಕಸ್ಥ ಸಮುದಾಯ ವೇದಿಕೆ. ವೇಗದ ವರದಿಗಳು, ಸ್ವಯಂಚಾಲಿತ ಹೊಂದಾಣಿಕೆ ಮತ್ತು ಸುರಕ್ಷಿತ ಪರಿಶೀಲನೆ.',
    heroBtnLost: 'ಕಳೆದುಹೋದ ವರದಿ ಸಲ್ಲಿಸಿ',
    heroBtnFound: 'ಸಿಕ್ಕ ವಸ್ತು ವರದಿ ಸಲ್ಲಿಸಿ',
    heroSearchPlaceholder: 'ಬ್ಯಾಕ್‌ಪ್ಯಾಕ್, ಏರ್‌ಪಾಡ್ಸ್, ಕೀಗಳು, ವಾಲೆಟ್, ಕಾಲೇಜು ಗ್ರಂಥಾಲಯ ಹುಡುಕಿ...',
    heroSearchBtn: 'ಹುಡುಕಿ',
    heroPopular: 'ಜನಪ್ರಿಯ:',
    heroReunitedToday: 'ಇಂದು ಮರಳಿಸಲಾಗಿದೆ',
    heroMatchScore: 'ಹೊಂದಾಣಿಕೆ',
    heroPossibleMatch: 'ಸಂಭಾವ್ಯ ಹೊಂದಾಣಿಕೆ',
    heroCompareDetails: 'ವಿವರ ಹೋಲಿಸಿ',
    heroVerifiedSafe: 'ಸುರಕ್ಷಿತ ಪರಿಶೀಲನೆ',
    heroPrivateClaims: 'ಖಾಸಗಿ ಹಕ್ಕು ಕೋರಿಕೆ',
    heroCommunityQuote: '“ಜನರ ಕಳೆದುಹೋದ ಪ್ರಮುಖ ವಸ್ತುಗಳನ್ನು ಮರಳಿ ತಲುಪಿಸುವ ಸಮುದಾಯ ಸೇವೆ.”',

    // Recently Reported Section
    recentHeading: 'ಇತ್ತೀಚಿನ ಕಳೆದುಹೋದ & ಸಿಕ್ಕ ವಸ್ತುಗಳ ವರದಿಗಳು',
    recentSubtitle: 'ಕಾಲೇಜು ಕ್ಯಾಂಪಸ್‌ಗಳು, ಸಾರಿಗೆ ನಿಲ್ದಾಣಗಳು ಮತ್ತು ಸುತ್ತಮುತ್ತಲಿನ ಪ್ರದೇಶಗಳಲ್ಲಿ ವರದಿಯಾದ ಇತ್ತೀಚಿನ ವಸ್ತುಗಳನ್ನು ನೋಡಿ.',
    tabAll: 'ಎಲ್ಲಾ ವಸ್ತುಗಳು',
    tabLost: 'ಕಳೆದುಹೋದ ವಸ್ತುಗಳು',
    tabFound: 'ಸಿಕ್ಕ ವಸ್ತುಗಳು',
    filterAllCategories: 'ಎಲ್ಲಾ ವಿಭಾಗಗಳು',
    viewAllInExplore: 'ಹುಡುಕಾಟ ಪುಟದಲ್ಲಿ ಎಲ್ಲವನ್ನೂ ನೋಡಿ →',
    noItemsFound: 'ಆಯ್ಕೆಮಾಡಿದ ಮಾನದಂಡಗಳಿಗೆ ಯಾವುದೇ ವಸ್ತುಗಳು ಹೊಂದಾಣಿಕೆಯಾಗುತ್ತಿಲ್ಲ.',
    clearFilters: 'ಫಿಲ್ಟರ್‌ಗಳನ್ನು ತೆರವುಗೊಳಿಸಿ',

    // Item Card
    badgeLost: 'ಕಳೆದುಹೋಗಿದೆ',
    badgeFound: 'ಸಿಕ್ಕಿದೆ',
    badgeReunited: 'ಮರಳಿಸಲಾಗಿದೆ 🎉',
    badgeActive: 'ಸಕ್ರಿಯ ಹುಡುಕಾಟ',
    btnClaim: 'ಸ್ವಾಮ್ಯ ಹಕ್ಕು ಪಡೆಯಿರಿ',
    btnDetails: 'ವಿವರ ನೋಡಿ',
    btnMatchFound: 'ಹೊಂದಾಣಿಕೆ ಪತ್ತೆಯಾಗಿದೆ',
    reportedAgo: 'ವರದಿ ದಿನಾಂಕ',
    rewardOffered: 'ಬಹುಮಾನ ನಿಗದಿಯಾಗಿದೆ',

    // How It Works
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
    optLostTitle: 'ನಾನು ಕಳೆದುಕೊಂಡಿದ್ದೇನೆ',
    optLostDesc: 'ಫೋಟೋಗಳು ಮತ್ತು ಸ್ಥಳದ ವಿವರಗಳೊಂದಿಗೆ ವರದಿ ರಚಿಸಿ. ಹೊಂದಾಣಿಕೆ ಕಂಡುಬಂದಾಗ ನಮ್ಮ ವ್ಯವಸ್ಥೆಯು ನಿಮಗೆ ತಕ್ಷಣ ಮಾಹಿತಿ ನೀಡುತ್ತದೆ.',
    optLostBtn: 'ಕಳೆದುಹೋದ ವಸ್ತು ವರದಿ ಮಾಡಿ',
    optFoundTitle: 'ನನಗೆ ವಸ್ತು ಸಿಕ್ಕಿದೆ',
    optFoundDesc: 'ಸಿಕ್ಕ ವಸ್ತುವಿನ ವಿವರಗಳನ್ನು ಸುರಕ್ಷಿತವಾಗಿ ಪ್ರಕಟಿಸಿ. ಮಾಲೀಕತ್ವದ ಪ್ರಶ್ನೆಗಳ ಮೂಲಕ ಸರಿಯಾದ ವ್ಯಕ್ತಿಗೆ ಅದನ್ನು ತಲುಪಿಸಲು ಸಹಾಯ ಮಾಡಿ.',
    optFoundBtn: 'ಸಿಕ್ಕ ವಸ್ತು ವರದಿ ಮಾಡಿ',

    // Stats Section
    statsHeading: 'ಸಮುದಾಯದ ಪ್ರಭಾವ ಮತ್ತು ಸಾಧನೆ',
    statTotalReports: 'ದಾಖಲಾದ ವರದಿಗಳು',
    statReunitedCount: 'ಯಶಸ್ವಿಯಾಗಿ ಮರಳಿಸಿದ ವಸ್ತುಗಳು',
    statMatchAccuracy: 'ಸ್ಮಾರ್ಟ್ ಹೊಂದಾಣಿಕೆ ದರ',
    statActiveUsers: 'ಸಕ್ರಿಯ ಬಳಕೆದಾರರು',

    // Trust & Safety
    trustHeading: 'ಗರಿಷ್ಠ ಗೌಪ್ಯತೆ ಮತ್ತು ಸುರಕ್ಷತೆಯೊಂದಿಗೆ ವಿನ್ಯಾಸ',
    trustSubtitle: 'ವಸ್ತುಗಳು ಮರಳುವ ಸಾಧ್ಯತೆಯನ್ನು ಹೆಚ್ಚಿಸುತ್ತಲೇ ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಮಾಹಿತಿಯನ್ನು ನಾವು ಸಂಪೂರ್ಣ ರಕ್ಷಿಸುತ್ತೇವೆ.',
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
    exploreTitle: 'ವಸ್ತುಗಳನ್ನು ಹುಡುಕಿ & ಅನ್ವೇಷಿಸಿ',
    exploreSubtitle: 'ಸ್ಥಳ, ವಿಭಾಗ, ದಿನಾಂಕ ಮತ್ತು ಕೀವರ್ಡ್‌ಗಳ ಮೂಲಕ ಕಳೆದುಹೋದ ಹಾಗೂ ಸಿಕ್ಕ ವಸ್ತುಗಳನ್ನು ಫಿಲ್ಟರ್ ಮಾಡಿ.',
    searchFilterKeyword: 'ಕೀವರ್ಡ್, ಬ್ರ್ಯಾಂಡ್ ಅಥವಾ ವಸ್ತು ಹುಡುಕಿ...',
    searchFilterCategory: 'ವಿಭಾಗ ಆಯ್ಕೆಮಾಡಿ',
    searchFilterCity: 'ನಗರ / ಕ್ಯಾಂಪಸ್',
    searchFilterStatus: 'ವಸ್ತುವಿನ ಸ್ಥಿತಿ',
    searchFilterDate: 'ದಿನಾಂಕ ಶ್ರೇಣಿ',
    sortByLabel: 'ವಿಂಗಡಿಸಿ:',
    sortNewest: 'ಹೊಸದು ಮೊದಲು',
    sortOldest: 'ಹಳೆಯದು ಮೊದಲು',
    sortTitle: 'ಅಕ್ಷರಾನುಕ್ರಮ',
    showingResults: 'ವಸ್ತುಗಳು ಪ್ರದರ್ಶನಗೊಳ್ಳುತ್ತಿವೆ',
    statusAll: 'ಎಲ್ಲಾ ಸ್ಥಿತಿಗಳು',
    statusActive: 'ಸಕ್ರಿಯ ಮಾತ್ರ',
    statusReunited: 'ಮರಳಿಸಿದವು ಮಾತ್ರ',
    dateAll: 'ಎಲ್ಲಾ ಸಮಯ',
    dateToday: 'ಇಂದು',
    dateThisWeek: 'ಈ ವಾರ',
    dateThisMonth: 'ಈ ತಿಂಗಳು',
    resetAllFilters: 'ಫಿಲ್ಟರ್‌ಗಳನ್ನು ಮರುಹೊಂದಿಸಿ',
    gridView: 'ಗ್ರಿಡ್ ನೋಟ',
    listView: 'ಪಟ್ಟಿ ನೋಟ',

    // User Dashboard
    dashTitle: 'ಬಳಕೆದಾರರ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್',
    dashOverview: 'ಅವಲೋಕನ',
    dashMyLost: 'ನನ್ನ ಕಳೆದುಹೋದ ವಸ್ತುಗಳು',
    dashMyFound: 'ನನ್ನ ಸಿಕ್ಕ ವಸ್ತುಗಳು',
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
    footerSubscribeTitle: 'ನಿಮ್ಮ ಪ್ರದೇಶದ ಕಳೆದುಹೋದ & ಸಿಕ್ಕ ವಸ್ತುಗಳ ಎಚ್ಚರಿಕೆಗಳನ್ನು ಪಡೆಯಿರಿ',
    footerSubscribeBtn: 'ಚಂದಾದಾರರಾಗಿ',
    footerSubscribedSuccess: 'ಸ್ಥಳೀಯ ಎಚ್ಚರಿಕೆಗಳಿಗೆ ಯಶಸ್ವಿಯಾಗಿ ನೋಂದಾಯಿಸಲಾಗಿದೆ!',
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
  const t = translations[lang];
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
