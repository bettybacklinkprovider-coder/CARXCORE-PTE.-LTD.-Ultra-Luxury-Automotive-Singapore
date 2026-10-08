import React from 'react';
import { PageId } from '../types';
import { COMPANY_DETAILS } from '../data/cars';
import { ArrowUpRight, Award, Compass, Shield, Users, Sparkles, CheckCircle2 } from 'lucide-react';

interface AboutUsPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#040D0A] text-[#EFECE3] pt-20">
      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      <section className="relative py-28 sm:py-36 overflow-hidden border-b border-[#123328]">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/about_showroom_atelier_1791456175649.jpg"
            alt="CARXCORE Singapore Luxury Atelier"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-[#040D0A]/85 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040D0A] via-[#040D0A]/70 to-[#040D0A]/40" />
          <div className="absolute inset-0 ambient-emerald-glow opacity-70 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs uppercase tracking-[0.3em] text-[#E25822] font-semibold block">
            ABOUT CARXCORE PTE. LTD.
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-serif-luxury font-bold text-[#F7F4EC] tracking-wide uppercase leading-tight">
            DRIVEN BY PASSION. <br />
            <span className="italic font-light text-[#EFECE3]">DEFINED BY EXCELLENCE.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#8DAFA0] font-light leading-relaxed tracking-wide">
            CARXCORE PTE. LTD. represents a refined approach to premium automotive retail in Singapore.
          </p>
        </div>
      </section>

      {/* =========================================================================
          OUR STORY (EDITORIAL SECTION)
          ========================================================================= */}
      <section className="py-24 sm:py-36 bg-[#051410] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Editorial Heading Column */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] text-[#E25822] font-semibold block">
                HERITAGE &amp; PURPOSE
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif-luxury font-bold text-[#F7F4EC] tracking-wide leading-tight">
                THE CARXCORE STORY
              </h2>
              <div className="w-16 h-0.5 bg-[#E25822]" />
            </div>

            {/* Editorial Prose Column */}
            <div className="lg:col-span-7 space-y-6 text-[#8DAFA0] font-light text-base sm:text-lg leading-relaxed">
              <p>
                Founded in the vibrant automotive landscape of Singapore, <strong className="text-[#F7F4EC] font-normal">CARXCORE PTE. LTD.</strong> was conceived with a single, resolute objective: to establish an elevated standard of luxury vehicular stewardship rooted in discretion, unimpeachable provenance, and personalized client relationships.
              </p>
              <p>
                In a market frequently defined by transactional haste, we cultivate long-term advisory trust. Every automobile admitted into our collection undergoes rigorous technical authentication, cosmetic detailing to concours standards, and meticulous documentation verification.
              </p>
              <p className="text-[#EFECE3]/90 italic font-serif-luxury text-xl sm:text-2xl pt-2 border-l-2 border-[#E25822] pl-6">
                &ldquo;We view our automobiles not as commodities, but as kinetic sculptures engineered by the world&apos;s finest master craftspeople.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          OUR PHILOSOPHY
          ========================================================================= */}
      <section className="py-24 sm:py-36 bg-[#040D0A] relative border-t border-[#123328]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#E25822] font-semibold">
              OUR GUIDING PRINCIPLES
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif-luxury font-bold text-[#F7F4EC] tracking-wide">
              EVERY DETAIL MATTERS.
            </h2>
            <p className="text-sm text-[#8DAFA0]">
              The core tenets that guide our consultation, presentation, and vehicular acquisitions.
            </p>
          </div>

          {/* 3 Premium Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* QUALITY */}
            <div className="bg-[#051410] border border-[#143B2D] p-8 sm:p-10 space-y-4 hover:border-[#E25822]/60 transition-all duration-300">
              <div className="text-xs font-mono tracking-widest text-[#E25822] uppercase">
                PILLAR I
              </div>
              <h3 className="text-2xl font-serif-luxury font-bold text-[#F7F4EC] tracking-wide">
                QUALITY
              </h3>
              <p className="text-sm text-[#8DAFA0] leading-relaxed font-light">
                Every vehicle should meet high standards of presentation and quality. We accept only automobiles that reflect immaculate mechanical condition, authentic mileage, and flawless aesthetic preservation.
              </p>
            </div>

            {/* TRUST */}
            <div className="bg-[#051410] border border-[#143B2D] p-8 sm:p-10 space-y-4 hover:border-[#E25822]/60 transition-all duration-300">
              <div className="text-xs font-mono tracking-widest text-[#E25822] uppercase">
                PILLAR II
              </div>
              <h3 className="text-2xl font-serif-luxury font-bold text-[#F7F4EC] tracking-wide">
                TRUST
              </h3>
              <p className="text-sm text-[#8DAFA0] leading-relaxed font-light">
                Every customer interaction should be transparent and professional. Complete clarity on Singapore OMV valuations, COE history, ownership records, and straightforward financial terms.
              </p>
            </div>

            {/* EXPERIENCE */}
            <div className="bg-[#051410] border border-[#143B2D] p-8 sm:p-10 space-y-4 hover:border-[#E25822]/60 transition-all duration-300">
              <div className="text-xs font-mono tracking-widest text-[#E25822] uppercase">
                PILLAR III
              </div>
              <h3 className="text-2xl font-serif-luxury font-bold text-[#F7F4EC] tracking-wide">
                EXPERIENCE
              </h3>
              <p className="text-sm text-[#8DAFA0] leading-relaxed font-light">
                Every visit should feel refined, effortless and memorable. From the calm ambiance of our private consultation suite to after-delivery care, we orchestrate a frictionless automotive journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          WHY CARXCORE (4 NUMBERED SECTIONS)
          ========================================================================= */}
      <section className="py-24 sm:py-36 bg-[#051410] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-[#E25822] font-semibold block mb-2">
              DISTINCTIVE ADVANTAGES
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif-luxury font-bold text-[#F7F4EC] tracking-wide">
              WHY CARXCORE
            </h2>
          </div>

          {/* 4 Large Numbered Rows */}
          <div className="divide-y divide-[#103024]">
            {/* 01 */}
            <div className="py-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline group">
              <div className="md:col-span-3">
                <span className="text-4xl sm:text-6xl font-serif-luxury font-light text-[#E25822] block font-mono">
                  01
                </span>
              </div>
              <div className="md:col-span-4">
                <h3 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#F7F4EC] tracking-wide group-hover:text-[#E25822] transition-colors">
                  Exceptional Selection
                </h3>
              </div>
              <div className="md:col-span-5">
                <p className="text-sm sm:text-base text-[#8DAFA0] leading-relaxed font-light">
                  A tightly filtered portfolio focused on flagship Rolls-Royce, Bentley, Maybach, and limited-edition supercars. No generic mass market vehicles; only items of true automotive distinction.
                </p>
              </div>
            </div>

            {/* 02 */}
            <div className="py-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline group">
              <div className="md:col-span-3">
                <span className="text-4xl sm:text-6xl font-serif-luxury font-light text-[#E25822] block font-mono">
                  02
                </span>
              </div>
              <div className="md:col-span-4">
                <h3 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#F7F4EC] tracking-wide group-hover:text-[#E25822] transition-colors">
                  Professional Guidance
                </h3>
              </div>
              <div className="md:col-span-5">
                <p className="text-sm sm:text-base text-[#8DAFA0] leading-relaxed font-light">
                  Direct consultations with seasoned automotive specialists with deep knowledge of COE market cycles, OMV depreciation, tax optimization structures, and global valuation trajectories.
                </p>
              </div>
            </div>

            {/* 03 */}
            <div className="py-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline group">
              <div className="md:col-span-3">
                <span className="text-4xl sm:text-6xl font-serif-luxury font-light text-[#E25822] block font-mono">
                  03
                </span>
              </div>
              <div className="md:col-span-4">
                <h3 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#F7F4EC] tracking-wide group-hover:text-[#E25822] transition-colors">
                  Transparent Service
                </h3>
              </div>
              <div className="md:col-span-5">
                <p className="text-sm sm:text-base text-[#8DAFA0] leading-relaxed font-light">
                  Honest disclosures regarding every vehicle&apos;s history, past servicing records, and pre-purchase inspection reports. Zero hidden administrative surcharges or ambiguous fees.
                </p>
              </div>
            </div>

            {/* 04 */}
            <div className="py-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline group">
              <div className="md:col-span-3">
                <span className="text-4xl sm:text-6xl font-serif-luxury font-light text-[#E25822] block font-mono">
                  04
                </span>
              </div>
              <div className="md:col-span-4">
                <h3 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#F7F4EC] tracking-wide group-hover:text-[#E25822] transition-colors">
                  Customer First
                </h3>
              </div>
              <div className="md:col-span-5">
                <p className="text-sm sm:text-base text-[#8DAFA0] leading-relaxed font-light">
                  Your requirements dictate our agenda. We accommodate private after-hours viewings, discreet home deliveries, bespoke test drives, and personalized financial structures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          BRAND STATEMENT (FULL WIDTH DARK-GREEN SECTION)
          ========================================================================= */}
      <section className="py-28 sm:py-36 bg-[#030907] relative overflow-hidden border-t border-b border-[#123328]">
        <div className="absolute inset-0 ambient-emerald-glow opacity-80 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs uppercase tracking-[0.3em] text-[#E25822] font-semibold block mb-6">
            THE CARXCORE CREED
          </span>
          <blockquote className="text-2xl sm:text-4xl md:text-5xl font-serif-luxury font-medium text-[#F7F4EC] tracking-wide uppercase leading-tight">
            &ldquo;WE DON&apos;T SIMPLY SELL AUTOMOBILES. <br />
            WE CONNECT PEOPLE WITH EXCEPTIONAL DRIVING EXPERIENCES.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* =========================================================================
          FINAL CTA
          ========================================================================= */}
      <section className="py-24 sm:py-32 bg-[#040D0A] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <span className="text-xs uppercase tracking-[0.25em] text-[#8DAFA0]">
            EXPERIENCE IT IN PERSON
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif-luxury font-bold text-[#F7F4EC] tracking-wide uppercase">
            DISCOVER THE CARXCORE STANDARD
          </h2>
          <div>
            <button
              onClick={() => onNavigate('our-cars')}
              className="px-8 py-4 bg-[#E25822] hover:bg-[#F27A45] text-[#040D0A] font-semibold text-xs tracking-[0.25em] uppercase transition-all duration-300 shadow-xl cursor-pointer"
            >
              EXPLORE OUR CARS
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
