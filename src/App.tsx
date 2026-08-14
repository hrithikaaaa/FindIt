/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ToastContainer } from './components/ui/Toast';

// Home Sections
import { HeroSection } from './components/home/HeroSection';
import { RecentlyReportedSection } from './components/home/RecentlyReportedSection';
import { HowItWorks } from './components/home/HowItWorks';
import { TwoOptionReportSection } from './components/home/TwoOptionReportSection';
import { StatsSection } from './components/home/StatsSection';
import { TrustSafetySection } from './components/home/TrustSafetySection';

// Page Views
import { ExplorePage } from './components/explore/ExplorePage';
import { UserDashboard } from './components/dashboard/UserDashboard';
import { SafetyPage } from './components/safety/SafetyPage';

// Modals
import { ItemDetailModal } from './components/items/ItemDetailModal';
import { PossibleMatchModal } from './components/items/PossibleMatchModal';
import { ReportWizardModal } from './components/forms/ReportWizardModal';
import { ClaimVerificationModal } from './components/modals/ClaimVerificationModal';
import { AuthModal } from './components/modals/AuthModal';
import { ReportPostModal } from './components/modals/ReportPostModal';

const AppContent: React.FC = () => {
  const { currentView } = useApp();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-emerald-500 selection:text-white font-sans antialiased">
      {/* Toast Notifications Provider */}
      <ToastContainer />

      {/* Top Fixed Navigation */}
      <Navbar />

      {/* Main View Router */}
      <main className="flex-1">
        {currentView === 'home' && (
          <>
            <HeroSection />
            <RecentlyReportedSection />
            <HowItWorks />
            <TwoOptionReportSection />
            <StatsSection />
            <TrustSafetySection />
          </>
        )}

        {currentView === 'explore' && <ExplorePage />}

        {currentView === 'dashboard' && <UserDashboard />}

        {currentView === 'safety' && <SafetyPage />}
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Global Modals & Overlays */}
      <ItemDetailModal />
      <PossibleMatchModal />
      <ReportWizardModal />
      <ClaimVerificationModal />
      <AuthModal />
      <ReportPostModal />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
