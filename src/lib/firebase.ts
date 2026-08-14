import { initializeApp, getApps, getApp } from 'firebase/app';
import { 
  getFirestore, 
  collection, 
  doc, 
  setDoc, 
  getDoc, 
  getDocs, 
  updateDoc, 
  deleteDoc, 
  onSnapshot, 
  query, 
  orderBy, 
  writeBatch
} from 'firebase/firestore';
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  User as FirebaseUser
} from 'firebase/auth';
import firebaseConfigData from '../../firebase-applet-config.json';
import { Item, ClaimRequest, Conversation, Message, Notification, User } from '../types';
import { INITIAL_ITEMS, INITIAL_CLAIMS, INITIAL_CONVERSATIONS, INITIAL_MESSAGES, INITIAL_NOTIFICATIONS, DEMO_USERS } from '../data/mockData';

const firebaseConfig = {
  projectId: firebaseConfigData.projectId,
  appId: firebaseConfigData.appId,
  apiKey: firebaseConfigData.apiKey,
  authDomain: firebaseConfigData.authDomain,
  storageBucket: firebaseConfigData.storageBucket,
  messagingSenderId: firebaseConfigData.messagingSenderId,
};

// Initialize Firebase App
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Firestore (with databaseId if specified)
const firestoreDbId = firebaseConfigData.firestoreDatabaseId;
export const db = firestoreDbId && firestoreDbId !== '(default)'
  ? getFirestore(app, firestoreDbId)
  : getFirestore(app);

// Initialize Firebase Auth
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// ==================== AUTH METHODS ====================

export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error('Google Sign-In Error:', error);
    throw error;
  }
};

export const loginWithEmail = async (email: string, pass: string) => {
  return await signInWithEmailAndPassword(auth, email, pass);
};

export const registerWithEmail = async (email: string, pass: string) => {
  return await createUserWithEmailAndPassword(auth, email, pass);
};

export const logoutUser = async () => {
  return await signOut(auth);
};

// ==================== FIRESTORE SYNC & SEEDING ====================

export const syncUserProfileToFirestore = async (user: User) => {
  try {
    const userRef = doc(db, 'users', user.id);
    await setDoc(userRef, user, { merge: true });
  } catch (err) {
    console.warn('Could not sync user profile to Firestore:', err);
  }
};

export const seedDatabaseIfEmpty = async () => {
  try {
    const itemsSnapshot = await getDocs(collection(db, 'items'));
    if (itemsSnapshot.empty) {
      console.log('Seeding initial community listings to Firestore...');
      const batch = writeBatch(db);

      // Seed Items
      INITIAL_ITEMS.forEach((item) => {
        const ref = doc(db, 'items', item.id);
        batch.set(ref, item);
      });

      // Seed Claims
      INITIAL_CLAIMS.forEach((claim) => {
        const ref = doc(db, 'claims', claim.id);
        batch.set(ref, claim);
      });

      // Seed Conversations
      INITIAL_CONVERSATIONS.forEach((conv) => {
        const ref = doc(db, 'conversations', conv.id);
        batch.set(ref, conv);
      });

      // Seed Messages
      INITIAL_MESSAGES.forEach((msg) => {
        const ref = doc(db, 'messages', msg.id);
        batch.set(ref, msg);
      });

      // Seed Notifications
      INITIAL_NOTIFICATIONS.forEach((notif) => {
        const ref = doc(db, 'notifications', notif.id);
        batch.set(ref, notif);
      });

      // Seed Demo Users
      DEMO_USERS.forEach((u) => {
        const ref = doc(db, 'users', u.id);
        batch.set(ref, u);
      });

      await batch.commit();
      console.log('Database seeded successfully.');
    }
  } catch (err) {
    console.warn('Firestore seeding check/fallback:', err);
  }
};

// ==================== FIRESTORE ITEM METHODS ====================

export const firestoreAddItem = async (item: Item) => {
  try {
    const ref = doc(db, 'items', item.id);
    await setDoc(ref, item);
  } catch (error) {
    console.error('Error saving item to Firestore:', error);
    throw error;
  }
};

export const firestoreUpdateItem = async (itemId: string, updates: Partial<Item>) => {
  try {
    const ref = doc(db, 'items', itemId);
    await updateDoc(ref, updates);
  } catch (error) {
    console.error('Error updating item in Firestore:', error);
    throw error;
  }
};

export const firestoreDeleteItem = async (itemId: string) => {
  try {
    const ref = doc(db, 'items', itemId);
    await deleteDoc(ref);
  } catch (error) {
    console.error('Error deleting item from Firestore:', error);
    throw error;
  }
};

// ==================== FIRESTORE CLAIM METHODS ====================

export const firestoreAddClaim = async (claim: ClaimRequest) => {
  try {
    const ref = doc(db, 'claims', claim.id);
    await setDoc(ref, claim);
  } catch (error) {
    console.error('Error adding claim to Firestore:', error);
    throw error;
  }
};

export const firestoreUpdateClaim = async (claimId: string, updates: Partial<ClaimRequest>) => {
  try {
    const ref = doc(db, 'claims', claimId);
    await updateDoc(ref, updates);
  } catch (error) {
    console.error('Error updating claim in Firestore:', error);
    throw error;
  }
};

// ==================== FIRESTORE CONVERSATION & MESSAGE METHODS ====================

export const firestoreSaveConversation = async (conversation: Conversation) => {
  try {
    const ref = doc(db, 'conversations', conversation.id);
    await setDoc(ref, conversation, { merge: true });
  } catch (error) {
    console.error('Error saving conversation to Firestore:', error);
  }
};

export const firestoreSendMessage = async (message: Message) => {
  try {
    const ref = doc(db, 'messages', message.id);
    await setDoc(ref, message);
  } catch (error) {
    console.error('Error sending message to Firestore:', error);
    throw error;
  }
};

// ==================== FIRESTORE NOTIFICATION METHODS ====================

export const firestoreAddNotification = async (notification: Notification) => {
  try {
    const ref = doc(db, 'notifications', notification.id);
    await setDoc(ref, notification);
  } catch (error) {
    console.error('Error adding notification to Firestore:', error);
  }
};

export const firestoreUpdateNotification = async (notifId: string, updates: Partial<Notification>) => {
  try {
    const ref = doc(db, 'notifications', notifId);
    await updateDoc(ref, updates);
  } catch (error) {
    console.error('Error updating notification in Firestore:', error);
  }
};
