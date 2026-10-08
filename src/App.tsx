import React, { useState, useEffect, useCallback } from 'react';
import { PageId, Vehicle } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { VehicleModal } from './components/VehicleModal';
import { HomePage } from './pages/HomePage';
import { OurCarsPage } from './pages/OurCarsPage';
import { AboutUsPage } from './pages/AboutUsPage';
import { ContactUsPage } from './pages/ContactUsPage';

export default function App() {
  // Parse initial page from browser path
  const getPageFromPath = (): PageId => {
    const path = window.location.pathname.toLowerCase();
    if (path.includes('our-cars') || path.includes('cars') || path.includes('collection')) {
      return 'our-cars';
    }
    if (path.includes('about-us') || path.includes('about')) {
      return 'about-us';
    }
    if (path.includes('contact-us') || path.includes('contact')) {
      return 'contact-us';
    }
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<PageId>(getPageFromPath);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [preSelectedVehicleForContact, setPreSelectedVehicleForContact] = useState<Vehicle | null>(null);

  // Sync state when browser back/forward buttons are pressed
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getPageFromPath());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update browser URL and title when page changes
  const navigateTo = useCallback((page: PageId) => {
    setCurrentPage(page);
    const path = page === 'home' ? '/' : `/${page}`;
    if (window.location.pathname !== path) {
      window.history.pushState({ page }, '', path);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Update document title for luxury feel
    const pageTitles: Record<PageId, string> = {
      'home': 'CARXCORE PTE. LTD. | The Art of the Drive',
      'our-cars': 'The Collection | CARXCORE Luxury Automotive Singapore',
      'about-us': 'About Us | CARXCORE PTE. LTD. Singapore',
      'contact-us': 'Contact Us & Showroom | CARXCORE Singapore',
    };
    document.title = pageTitles[page];
  }, []);

  // Handle vehicle enquiry from modal
  const handleEnquireVehicle = (vehicle: Vehicle) => {
    setPreSelectedVehicleForContact(vehicle);
    navigateTo('contact-us');
  };

  return (
    <div className="min-h-screen bg-[#040D0A] text-[#EFECE3] flex flex-col font-sans selection:bg-[#E25822] selection:text-white">
      {/* Sticky Luxury Header */}
      <Header currentPage={currentPage} onNavigate={navigateTo} />

      {/* Main Content Area — Dedicated Page Rendering */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onSelectVehicle={(vehicle) => setSelectedVehicle(vehicle)}
          />
        )}

        {currentPage === 'our-cars' && (
          <OurCarsPage
            onNavigate={navigateTo}
            onSelectVehicle={(vehicle) => setSelectedVehicle(vehicle)}
          />
        )}

        {currentPage === 'about-us' && (
          <AboutUsPage
            onNavigate={navigateTo}
          />
        )}

        {currentPage === 'contact-us' && (
          <ContactUsPage
            onNavigate={navigateTo}
            preSelectedVehicle={preSelectedVehicleForContact}
          />
        )}
      </main>

      {/* Luxury Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Dedicated Vehicle Dossier Modal */}
      <VehicleModal
        vehicle={selectedVehicle}
        onClose={() => setSelectedVehicle(null)}
        onEnquire={handleEnquireVehicle}
      />
    </div>
  );
}
