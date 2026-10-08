import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { COMPANY_DETAILS } from '../data/cars';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'HOME' },
    { id: 'our-cars', label: 'OUR CARS' },
    { id: 'about-us', label: 'ABOUT US' },
    { id: 'contact-us', label: 'CONTACT US' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#040D0A]/95 backdrop-blur-md border-b border-[#123328]/80 py-3.5 shadow-2xl shadow-black/50'
          : 'bg-gradient-to-b from-[#040D0A]/90 via-[#040D0A]/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Zone */}
        <button
          onClick={() => handleNavClick('home')}
          className="group flex items-baseline gap-2 text-left focus:outline-none cursor-pointer"
        >
          <span className="text-xl sm:text-2xl font-serif-luxury font-semibold tracking-[0.18em] text-[#F7F4EC] group-hover:text-[#E25822] transition-colors">
            CARXCORE
          </span>
          <span className="text-[10px] tracking-[0.25em] text-[#8DAFA0] uppercase font-sans font-medium">
            PTE. LTD.
          </span>
        </button>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-xs uppercase tracking-[0.2em] font-medium transition-all duration-200 relative py-1 focus:outline-none cursor-pointer ${
                  isActive
                    ? 'text-[#F7F4EC]'
                    : 'text-[#8DAFA0] hover:text-[#F7F4EC]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#E25822]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Action */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href={`tel:${COMPANY_DETAILS.phoneClean}`}
            className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#F7F4EC] hover:text-[#E25822] transition-colors px-3 py-1.5 border border-[#164235] hover:border-[#E25822]/60 rounded-none bg-[#071F18]/40"
          >
            <Phone className="w-3.5 h-3.5 text-[#E25822]" />
            <span className="whitespace-nowrap tabular-nums">{COMPANY_DETAILS.phone}</span>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#8DAFA0] hover:text-[#F7F4EC] focus:outline-none cursor-pointer"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] bg-[#040D0A]/98 border-b border-[#123328] backdrop-blur-xl px-6 py-8 shadow-2xl transition-all">
          <div className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left text-sm uppercase tracking-[0.25em] py-2 font-medium transition-colors ${
                  currentPage === item.id
                    ? 'text-[#E25822] border-l-2 border-[#E25822] pl-3'
                    : 'text-[#8DAFA0] hover:text-[#F7F4EC]'
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="pt-6 border-t border-[#123328] flex flex-col space-y-4">
              <a
                href={`tel:${COMPANY_DETAILS.phoneClean}`}
                className="flex items-center justify-center gap-2 w-full py-3 bg-[#0B2B22] border border-[#164235] text-xs font-semibold tracking-widest text-[#F7F4EC]"
              >
                <Phone className="w-4 h-4 text-[#E25822]" />
                <span className="tabular-nums">{COMPANY_DETAILS.phone}</span>
              </a>
              <button
                onClick={() => handleNavClick('contact-us')}
                className="flex items-center justify-center gap-2 w-full py-3 bg-[#E25822] text-[#040D0A] font-semibold text-xs tracking-[0.2em] uppercase hover:bg-[#F27A45] transition-colors"
              >
                <span>REQUEST PRIVATE VIEWING</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
