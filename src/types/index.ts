export type Language = 'en' | 'kn';

export type ItemType = 'lost' | 'found';

export type ItemCategory = 
  | 'Electronics'
  | 'Wallets & Cards'
  | 'Keys'
  | 'Bags & Backpacks'
  | 'Jewelry & Watches'
  | 'Clothing & Accessories'
  | 'Documents & IDs'
  | 'Pets'
  | 'Books & Stationary'
  | 'Other';

export type ItemStatus = 'active' | 'in_verification' | 'reunited' | 'archived';

export interface Item {
  id: string;
  type: ItemType;
  title: string;
  category: ItemCategory;
  description: string;
  identifyingFeatures?: string;
  location: {
    name: string;
    city: string;
    specificSpot?: string;
    coordinates?: { lat: number; lng: number };
  };
  date: string; // YYYY-MM-DD
  time?: string;
  images: string[];
  status: ItemStatus;
  reportedBy: {
    id: string;
    name: string;
    email: string;
    avatar: string;
    verified: boolean;
    role?: 'Student' | 'Resident' | 'Staff' | 'Community Member';
  };
  createdAt: string;
  matchedItemId?: string;
  reward?: string;
  securityQuestion?: string; // For found items to verify claimants
  tags: string[];
  viewsCount: number;
}

export interface MatchScore {
  lostItem: Item;
  foundItem: Item;
  overallScore: number; // 0 - 100
  breakdown: {
    categoryMatch: boolean;
    titleSimilarity: number; // 0 - 100
    locationProximityScore: number; // 0 - 100
    dateScore: number; // 0 - 100
    colorFeatureScore: number; // 0 - 100
  };
  commonKeywords: string[];
}

export interface ClaimRequest {
  id: string;
  itemId: string;
  claimantId: string;
  claimantName: string;
  claimantAvatar: string;
  claimantEmail: string;
  proofDescription: string;
  proofImages?: string[];
  securityAnswer?: string;
  status: 'pending' | 'approved' | 'rejected' | 'completed';
  createdAt: string;
  itemTitle: string;
  itemType: ItemType;
  itemImage: string;
  handoffDetails?: string;
}

export interface Message {
  id: string;
  conversationId: string;
  senderId: string;
  senderName: string;
  senderAvatar: string;
  recipientId: string;
  text: string;
  timestamp: string;
  isRead: boolean;
}

export interface Conversation {
  id: string;
  participantId: string;
  participantName: string;
  participantAvatar: string;
  relatedItemId: string;
  relatedItemTitle: string;
  relatedItemType: ItemType;
  relatedItemImage: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
}

export interface Notification {
  id: string;
  userId: string;
  type: 'match_found' | 'claim_received' | 'claim_approved' | 'claim_rejected' | 'message_received' | 'item_reunited';
  title: string;
  message: string;
  timestamp: string;
  isRead: boolean;
  relatedItemId?: string;
  relatedMatchId?: string;
  actionUrl?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: 'Student' | 'Resident' | 'Staff' | 'Community Member';
  joinedDate: string;
  phone?: string;
  reputationPoints: number;
  itemsReportedCount: number;
  itemsReunitedCount: number;
  isVerified: boolean;
}

export interface FilterState {
  searchQuery: string;
  type: 'all' | 'lost' | 'found';
  category: 'all' | ItemCategory;
  city: string;
  status: 'all' | 'active' | 'reunited';
  dateRange: 'all' | 'today' | 'this_week' | 'this_month';
  sortBy: 'newest' | 'oldest' | 'title';
}

export interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'warning' | 'error';
  title: string;
  message?: string;
}
