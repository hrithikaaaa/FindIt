# 🔎 FindIt – Lost & Found Community

A community-driven Lost & Found platform that helps people report, discover, and recover lost belongings.

Users can upload images and details of lost or found items, search through community listings, and submit ownership claims to help reunite items with their rightful owners.

The platform also supports **English and Kannada**, making it accessible to a wider community.

---

## 🌐 Live Demo

🚀 **FindIt is now live!**

👉 **[Visit FindIt – Lost & Found Community](https://findit-lost-found-community.ai.studio)**

**Status:** 🟢 Published & Ready

The application is deployed through **Google AI Studio** and uses **Firebase** for authentication, database persistence, image storage, and security.

---

## ✨ Features

### 🔐 User Authentication
- Email & password registration
- Email & password login
- Google Sign-In
- Secure logout
- Persistent authentication state

### 📦 Lost & Found Listings
- Report lost items
- Report found items
- Upload item images
- Add item description and category
- Specify location and date
- View item details
- Edit and delete your own posts
- Mark items as reunited

### 🔎 Search & Discovery
- Search lost and found items
- Filter by category
- Filter by location/city
- Filter by item type
- Filter by status

### 🤖 AI-Powered Matching
- Uses Gemini AI to assist in identifying possible matches
- Compares item descriptions and relevant details
- Helps users discover potentially matching lost and found items

### 🤝 Ownership Verification
- Submit ownership claims
- Provide verification information
- Upload proof/images when required
- Original reporter can review claims
- Helps prevent incorrect item handovers

### 💬 Communication
- User-to-user messaging
- Ownership-related conversations
- Notifications for important activities

### 🌐 Bilingual Support
- 🇬🇧 English
- 🇮🇳 Kannada

### 📱 Responsive Design
- Desktop
- Tablet
- Mobile

---

## 🛠️ Tech Stack

### Frontend
- React
- TypeScript
- Vite
- Tailwind CSS
- Lucide React
- Motion

### Backend / Cloud Services
- Firebase Authentication
- Cloud Firestore
- Firebase Storage
- Firebase Security Rules

### AI
- Google Gemini API

---

## 🏗️ System Architecture

```text
                    🌐 FindIt Web App
                           │
                           ▼
                 React + TypeScript
                           │
          ┌────────────────┼────────────────┐
          │                │                │
          ▼                ▼                ▼
     Firebase Auth     Firestore       Firebase Storage
          │                │                │
          ▼                ▼                ▼
       Users          Lost/Found        Item Images
                     Listings
                     Claims
                     Messages
                     Notifications
                           │
                           ▼
                     Gemini AI
                           │
                           ▼
                 Possible Item Matching
