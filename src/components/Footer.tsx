import React from 'react';
import { PageId } from '../types';
import { COMPANY_DETAILS } from '../data/cars';
import { Phone, MapPin, Mail, ArrowUp, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030907] border-t border-[#103024] relative overflow-hidden">
      {/* Subtle background ambient glow */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none opacity-40 ambient-emerald-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Column 1: Brand & Description */}
          <div className="space-y-5 lg:col-span-1">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-serif-luxury font-bold tracking-[0.2em] text-[#F7F4EC]">
                CARXCORE
              </span>
              <span className="text-xs tracking-[0.25em] text-[#8DAFA0] uppercase font-sans">
                PTE. LTD.
              </span>
            </div>
            <p className="text-sm text-[#8DAFA0]/90 leading-relaxed font-light">
              Singapore&apos;s sanctuary for extraordinary motorcars. Curating exemplary Rolls-Royce, Bentley, and bespoke collector automobiles with unmatched discretion, integrity, and client devotion.
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs text-[#8DAFA0]/80">
              <ShieldCheck className="w-4 h-4 text-[#E25822]" />
              <span>Registered Singapore Automotive Entity</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold tracking-[0.25em] uppercase text-[#EFECE3]/70">
              EXPLORATION
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="text-sm text-[#8DAFA0] hover:text-[#E25822] transition-colors focus:outline-none cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('our-cars')}
                  className="text-sm text-[#8DAFA0] hover:text-[#E25822] transition-colors focus:outline-none cursor-pointer"
                >
                  Our Cars (Inventory)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about-us')}
                  className="text-sm text-[#8DAFA0] hover:text-[#E25822] transition-colors focus:outline-none cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact-us')}
                  className="text-sm text-[#8DAFA0] hover:text-[#E25822] transition-colors focus:outline-none cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold tracking-[0.25em] uppercase text-[#EFECE3]/70">
              SHOWROOM &amp; PRIVATE CLIENTS
            </h4>
            <div className="space-y-3 text-sm text-[#8DAFA0]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#E25822] shrink-0 mt-0.5" />
                <p className="leading-snug">
                  {COMPANY_DETAILS.address}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#E25822] shrink-0" />
                <a
                  href={`tel:${COMPANY_DETAILS.phoneClean}`}
                  className="hover:text-[#F7F4EC] transition-colors tabular-nums text-white font-medium"
                >
                  {COMPANY_DETAILS.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#E25822] shrink-0" />
                <a
                  href={`mailto:${COMPANY_DETAILS.email}`}
                  className="hover:text-[#F7F4EC] transition-colors"
                >
                  {COMPANY_DETAILS.email}
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Private Consultation Schedule */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold tracking-[0.25em] uppercase text-[#EFECE3]/70">
              PRIVATE VIEWINGS
            </h4>
            <p className="text-xs text-[#8DAFA0]/90 leading-relaxed">
              Showroom consultations are coordinated by appointment to preserve complete privacy and personalized vehicular presentation.
            </p>
            <button
              onClick={() => handleNav('contact-us')}
              className="inline-flex items-center justify-center w-full py-2.5 px-4 bg-[#0A261D] hover:bg-[#E25822] text-[#F7F4EC] hover:text-[#040D0A] text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 border border-[#164235] hover:border-[#E25822]"
            >
              ARRANGE VIEWING
            </button>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 border-t border-[#0F2D22] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8DAFA0]/70">
          <p className="tracking-wider">
            &copy; {new Date().getFullYear()} CARXCORE PTE. LTD. All Rights Reserved. Singapore.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[#8DAFA0]/50">3 Soon Lee St, #05-30, Singapore 627606</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#8DAFA0] hover:text-[#E25822] transition-colors focus:outline-none cursor-pointer"
              aria-label="Scroll to top of page"
            >
              <span className="tracking-wider uppercase text-[11px]">Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
