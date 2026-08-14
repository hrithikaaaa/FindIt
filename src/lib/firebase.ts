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
import {
  getStorage,
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
  deleteObject
} from 'firebase/storage';
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

// Initialize Firebase Storage
export const storage = getStorage(app);

// ==================== FIREBASE STORAGE METHODS ====================

/**
 * Upload an image file to Firebase Storage and return its public download URL.
 * Includes automatic local base64 fallback for robust offline/preview resilience.
 */
export const uploadItemImage = async (file: File | Blob, folder = 'items'): Promise<string> => {
  try {
    const timestamp = Date.now();
    const safeName = (file instanceof File && file.name) ? file.name.replace(/[^a-zA-Z0-9.]/g, '_') : 'image.jpg';
    const filePath = `${folder}/${timestamp}_${safeName}`;
    const imageRef = storageRef(storage, filePath);
    
    // Upload bytes to Firebase Storage bucket
    const uploadResult = await uploadBytes(imageRef, file, {
      contentType: file.type || 'image/jpeg',
    });
    
    // Get downloadable URL
    const downloadUrl = await getDownloadURL(uploadResult.ref);
    return downloadUrl;
  } catch (error) {
    console.warn('Firebase Storage upload notice, using client data URL fallback:', error);
    // Fallback: convert to readable Data URL so the user's action always succeeds in preview
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (e) => reject(e);
      reader.readAsDataURL(file);
    });
  }
};

/**
 * Upload multiple files in parallel to Firebase Storage
 */
export const uploadItemImages = async (files: File[], folder = 'items'): Promise<string[]> => {
  const uploadPromises = files.map((file) => uploadItemImage(file, folder));
  return Promise.all(uploadPromises);
};

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

// ==================== FIRESTORE DATA SANITIZATION ====================

/**
 * Recursively remove `undefined` fields from objects to prevent Firestore
 * "Unsupported field value: undefined" runtime errors.
 */
export const sanitizeForFirestore = <T>(obj: T): T => {
  if (obj === null || obj === undefined) {
    return null as any;
  }
  if (Array.isArray(obj)) {
    return obj
      .filter((item) => item !== undefined)
      .map((item) => sanitizeForFirestore(item)) as any;
  }
  if (typeof obj === 'object' && !(obj instanceof Date)) {
    const cleaned: Record<string, any> = {};
    for (const [key, value] of Object.entries(obj)) {
      if (value !== undefined) {
        cleaned[key] = sanitizeForFirestore(value);
      }
    }
    return cleaned as T;
  }
  return obj;
};

// ==================== FIRESTORE SYNC & SEEDING ====================

export const syncUserProfileToFirestore = async (user: User) => {
  try {
    const sanitized = sanitizeForFirestore(user);
    const userRef = doc(db, 'users', user.id);
    await setDoc(userRef, sanitized, { merge: true });
    console.log(`[Firestore] Synced user profile for: ${user.id}`);
  } catch (err) {
    console.error('[Firestore] Could not sync user profile to Firestore:', err);
  }
};

export const seedDatabaseIfEmpty = async () => {
  try {
    const itemsSnapshot = await getDocs(collection(db, 'items'));
    if (itemsSnapshot.empty) {
      console.log('[Firestore] Database is empty. Seeding initial community listings to Firestore...');
      const batch = writeBatch(db);

      // Seed Items
      INITIAL_ITEMS.forEach((item) => {
        const ref = doc(db, 'items', item.id);
        batch.set(ref, sanitizeForFirestore(item));
      });

      // Seed Claims
      INITIAL_CLAIMS.forEach((claim) => {
        const ref = doc(db, 'claims', claim.id);
        batch.set(ref, sanitizeForFirestore(claim));
      });

      // Seed Conversations
      INITIAL_CONVERSATIONS.forEach((conv) => {
        const ref = doc(db, 'conversations', conv.id);
        batch.set(ref, sanitizeForFirestore(conv));
      });

      // Seed Messages
      INITIAL_MESSAGES.forEach((msg) => {
        const ref = doc(db, 'messages', msg.id);
        batch.set(ref, sanitizeForFirestore(msg));
      });

      // Seed Notifications
      INITIAL_NOTIFICATIONS.forEach((notif) => {
        const ref = doc(db, 'notifications', notif.id);
        batch.set(ref, sanitizeForFirestore(notif));
      });

      // Seed Demo Users
      DEMO_USERS.forEach((u) => {
        const ref = doc(db, 'users', u.id);
        batch.set(ref, sanitizeForFirestore(u));
      });

      await batch.commit();
      console.log('[Firestore] Initial database seeded successfully in collection "items".');
    } else {
      console.log(`[Firestore] Found ${itemsSnapshot.docs.length} existing items in Firestore collection.`);
    }
  } catch (err) {
    console.error('[Firestore] Seeding check/execution error:', err);
  }
};

// ==================== FIRESTORE ITEM METHODS ====================

export const firestoreAddItem = async (item: Item): Promise<void> => {
  try {
    const sanitized = sanitizeForFirestore(item);
    const ref = doc(db, 'items', item.id);
    await setDoc(ref, sanitized);
    console.log(`[Firestore] Successfully persisted item "${item.id}" (type: ${item.type}) to collection "items"`);
  } catch (error) {
    console.error(`[Firestore] FAILED to write item "${item.id}" to collection "items":`, error);
    throw error;
  }
};

export const firestoreUpdateItem = async (itemId: string, updates: Partial<Item>): Promise<void> => {
  try {
    const sanitized = sanitizeForFirestore(updates);
    const ref = doc(db, 'items', itemId);
    await updateDoc(ref, sanitized);
    console.log(`[Firestore] Successfully updated item "${itemId}" in collection "items"`);
  } catch (error) {
    console.error(`[Firestore] Error updating item "${itemId}":`, error);
    throw error;
  }
};

export const firestoreDeleteItem = async (itemId: string): Promise<void> => {
  try {
    const ref = doc(db, 'items', itemId);
    await deleteDoc(ref);
    console.log(`[Firestore] Successfully deleted item "${itemId}" from collection "items"`);
  } catch (error) {
    console.error(`[Firestore] Error deleting item "${itemId}":`, error);
    throw error;
  }
};

// ==================== FIRESTORE CLAIM METHODS ====================

export const firestoreAddClaim = async (claim: ClaimRequest): Promise<void> => {
  try {
    const sanitized = sanitizeForFirestore(claim);
    const ref = doc(db, 'claims', claim.id);
    await setDoc(ref, sanitized);
    console.log(`[Firestore] Successfully persisted claim "${claim.id}" to collection "claims"`);
  } catch (error) {
    console.error(`[Firestore] Error adding claim "${claim.id}":`, error);
    throw error;
  }
};

export const firestoreUpdateClaim = async (claimId: string, updates: Partial<ClaimRequest>): Promise<void> => {
  try {
    const sanitized = sanitizeForFirestore(updates);
    const ref = doc(db, 'claims', claimId);
    await updateDoc(ref, sanitized);
    console.log(`[Firestore] Successfully updated claim "${claimId}" in collection "claims"`);
  } catch (error) {
    console.error(`[Firestore] Error updating claim "${claimId}":`, error);
    throw error;
  }
};

// ==================== FIRESTORE CONVERSATION & MESSAGE METHODS ====================

export const firestoreSaveConversation = async (conversation: Conversation): Promise<void> => {
  try {
    const sanitized = sanitizeForFirestore(conversation);
    const ref = doc(db, 'conversations', conversation.id);
    await setDoc(ref, sanitized, { merge: true });
  } catch (error) {
    console.error('[Firestore] Error saving conversation to Firestore:', error);
    throw error;
  }
};

export const firestoreSendMessage = async (message: Message): Promise<void> => {
  try {
    const sanitized = sanitizeForFirestore(message);
    const ref = doc(db, 'messages', message.id);
    await setDoc(ref, sanitized);
  } catch (error) {
    console.error('[Firestore] Error sending message to Firestore:', error);
    throw error;
  }
};

// ==================== FIRESTORE NOTIFICATION METHODS ====================

export const firestoreAddNotification = async (notification: Notification): Promise<void> => {
  try {
    const sanitized = sanitizeForFirestore(notification);
    const ref = doc(db, 'notifications', notification.id);
    await setDoc(ref, sanitized);
  } catch (error) {
    console.error('[Firestore] Error adding notification to Firestore:', error);
    throw error;
  }
};

export const firestoreUpdateNotification = async (notifId: string, updates: Partial<Notification>): Promise<void> => {
  try {
    const sanitized = sanitizeForFirestore(updates);
    const ref = doc(db, 'notifications', notifId);
    await updateDoc(ref, sanitized);
  } catch (error) {
    console.error('[Firestore] Error updating notification in Firestore:', error);
    throw error;
  }
};
