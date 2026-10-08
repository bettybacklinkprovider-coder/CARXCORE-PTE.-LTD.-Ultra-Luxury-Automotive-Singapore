import React from 'react';
import { PageId, Vehicle } from '../types';
import { LUXURY_VEHICLES, COMPANY_DETAILS } from '../data/cars';
import { ArrowUpRight, Phone, Award, ShieldCheck, UserCheck, Sparkles, ChevronRight, Key, RefreshCw, Search, Calculator, Wrench } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onSelectVehicle: (vehicle: Vehicle) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSelectVehicle }) => {
  // 3-4 signature vehicles
  const signatureCars = LUXURY_VEHICLES.filter(v => v.isSignatureCollection).slice(0, 4);

  return (
    <div className="min-h-screen bg-[#040D0A] text-[#EFECE3] overflow-hidden">
      {/* =========================================================================
          SECTION 1 — CINEMATIC HERO
          ========================================================================= */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
        {/* Cinematic Backdrop with Subtle Ambient Lighting */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/hero_luxury_rolls_showroom_1791456148721.jpg"
            alt="CARXCORE Luxury Automotive Showroom"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          />
          {/* Multi-layered dark-green gradients and subtle amber rim glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#040D0A] via-[#040D0A]/70 to-[#040D0A]/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#040D0A]/90 via-[#040D0A]/40 to-[#040D0A]/90" />
          <div className="absolute inset-0 ambient-emerald-glow opacity-80 pointer-events-none" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 ambient-orange-accent pointer-events-none blur-3xl opacity-60" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-12">
          {/* Subtle Prestige Monogram Kicker */}
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-1.5 border border-[#143E30] bg-[#071F18]/60 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E25822] animate-pulse" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#A3C1AD] font-medium">
              SINGAPORE&apos;S PREMIER AUTOMOTIVE ATELIER
            </span>
          </div>

          {/* Large Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif-luxury font-bold tracking-[0.06em] text-[#F7F4EC] uppercase leading-[1.08] mb-6 drop-shadow-2xl">
            THE ART OF <span className="italic font-light text-[#EFECE3]">THE DRIVE</span>
          </h1>

          {/* Supporting Text */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-[#A3C1AD] font-light leading-relaxed mb-10 tracking-wide">
            Exceptional automobiles. Refined experiences. Discover your next extraordinary journey with CARXCORE.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <button
              onClick={() => onNavigate('our-cars')}
              className="w-full sm:w-auto px-8 py-4 bg-[#E25822] hover:bg-[#F27A45] text-[#040D0A] font-semibold text-xs tracking-[0.25em] uppercase transition-all duration-300 shadow-xl shadow-[#E25822]/20 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>EXPLORE OUR COLLECTION</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <button
              onClick={() => onNavigate('contact-us')}
              className="w-full sm:w-auto px-8 py-4 bg-[#071F18]/80 hover:bg-[#0C2E23] text-[#F7F4EC] border border-[#164235] hover:border-[#E25822]/80 font-semibold text-xs tracking-[0.25em] uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>CONTACT CARXCORE</span>
              <ChevronRight className="w-4 h-4 text-[#E25822]" />
            </button>
          </div>

          {/* Quick Trust Attributes at Bottom of Hero */}
          <div className="mt-16 pt-8 border-t border-[#123328]/60 grid grid-cols-2 md:grid-cols-4 gap-6 text-left max-w-4xl mx-auto">
            <div className="border-l border-[#E25822]/40 pl-3">
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#8DAFA0] block">Discreet Acquisition</span>
              <span className="text-xs font-serif-luxury text-[#F7F4EC] font-semibold">Private Client Salon</span>
            </div>
            <div className="border-l border-[#E25822]/40 pl-3">
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#8DAFA0] block">Provenance Check</span>
              <span className="text-xs font-serif-luxury text-[#F7F4EC] font-semibold">100% Certified Origin</span>
            </div>
            <div className="border-l border-[#E25822]/40 pl-3">
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#8DAFA0] block">Singapore Registered</span>
              <span className="text-xs font-serif-luxury text-[#F7F4EC] font-semibold">Ready COE &amp; Transfer</span>
            </div>
            <div className="border-l border-[#E25822]/40 pl-3">
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#8DAFA0] block">Personal Concierge</span>
              <span className="text-xs font-serif-luxury text-[#F7F4EC] font-semibold">Dedicated Advisor</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — SIGNATURE COLLECTION
          ========================================================================= */}
      <section className="py-24 sm:py-32 bg-[#051410] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#E25822] font-semibold mb-3">
                CURATED INVENTORY
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#F7F4EC] tracking-wide">
                A COLLECTION BEYOND ORDINARY
              </h2>
            </div>
            <button
              onClick={() => onNavigate('our-cars')}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#A3C1AD] hover:text-[#E25822] transition-colors group cursor-pointer self-start md:self-auto"
            >
              <span>VIEW COMPLETE SHOWROOM</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {signatureCars.map((car) => (
              <div
                key={car.id}
                className="group bg-[#040E0B] border border-[#123328] hover:border-[#E25822]/60 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#E25822]/10"
              >
                {/* Vehicle Image Container */}
                <div className="relative aspect-[16/11] overflow-hidden bg-[#020705]">
                  <img
                    src={car.primaryImage}
                    alt={`${car.make} ${car.model}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040E0B] via-transparent to-transparent opacity-60" />
                  <div className="absolute top-3 left-3 bg-[#040D0A]/90 px-2.5 py-1 text-[10px] uppercase tracking-widest text-[#8DAFA0] border border-[#143B2D]">
                    {car.year}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.2em] text-[#8DAFA0] block mb-1">
                      {car.make}
                    </span>
                    <h3 className="text-lg font-serif-luxury font-bold text-[#F7F4EC] tracking-wide group-hover:text-[#E25822] transition-colors">
                      {car.model}
                    </h3>
                  </div>

                  {/* Quick specs unboxed */}
                  <div className="flex items-center gap-2 text-xs text-[#8DAFA0]/90 border-t border-b border-[#0D261E] py-2.5">
                    <span className="tabular-nums">{car.mileage.toLocaleString()} KM</span>
                    <span aria-hidden="true" className="text-[#8DAFA0]/40">·</span>
                    <span className="truncate">{car.transmission.split(' ')[0]}</span>
                    <span aria-hidden="true" className="text-[#8DAFA0]/40">·</span>
                    <span className="truncate">{car.fuelType}</span>
                  </div>

                  {/* Price & Action */}
                  <div className="pt-2 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] tracking-widest uppercase text-[#8DAFA0] block">Price</span>
                      <span className="text-base font-serif-luxury font-semibold text-[#E25822]">
                        {car.priceDisplay}
                      </span>
                    </div>
                    <button
                      onClick={() => onSelectVehicle(car)}
                      className="px-3.5 py-2 text-[11px] uppercase tracking-[0.18em] font-semibold text-[#F7F4EC] bg-[#0A261D] hover:bg-[#E25822] hover:text-[#040D0A] transition-colors border border-[#143B2D] cursor-pointer"
                    >
                      VIEW VEHICLE
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3 — THE CARXCORE DIFFERENCE
          ========================================================================= */}
      <section className="py-24 sm:py-32 bg-[#040D0A] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Editorial Image with Luxury Frame */}
            <div className="relative">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden border border-[#164235] shadow-2xl">
                <img
                  src="/assets/images/about_showroom_atelier_1791456175649.jpg"
                  alt="CARXCORE Singapore Luxury Atelier"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040D0A]/70 via-transparent to-transparent" />
              </div>
              {/* Subtle metallic orange geometric outline offset */}
              <div className="hidden sm:block absolute -bottom-4 -right-4 w-full h-full border border-[#E25822]/20 -z-10 pointer-events-none" />
            </div>

            {/* Right: Editorial Content */}
            <div className="space-y-8">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#E25822] font-semibold mb-3">
                  THE CARXCORE DIFFERENCE
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#F7F4EC] tracking-wide leading-tight">
                  WHERE AUTOMOTIVE EXCELLENCE MEETS EXCEPTIONAL SERVICE
                </h2>
              </div>

              <p className="text-sm sm:text-base text-[#8DAFA0] leading-relaxed font-light">
                At CARXCORE PTE. LTD., acquiring an automobile is not merely a transaction; it is the curation of an experience. Located in Singapore, our boutique focuses on hand-selected motorcars of undeniable provenance, paired with discrete, white-glove representation tailored to discerning drivers.
              </p>

              {/* 4 Premium Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="border-l-2 border-[#E25822] pl-4 space-y-1.5">
                  <span className="text-xs font-mono font-semibold text-[#E25822]">01</span>
                  <h4 className="text-sm font-semibold tracking-wide text-[#F7F4EC] uppercase">
                    Curated Selection
                  </h4>
                  <p className="text-xs text-[#8DAFA0] leading-relaxed">
                    Carefully selected premium automobiles vetted for impeccable maintenance and history.
                  </p>
                </div>

                <div className="border-l-2 border-[#E25822] pl-4 space-y-1.5">
                  <span className="text-xs font-mono font-semibold text-[#E25822]">02</span>
                  <h4 className="text-sm font-semibold tracking-wide text-[#F7F4EC] uppercase">
                    Trusted Quality
                  </h4>
                  <p className="text-xs text-[#8DAFA0] leading-relaxed">
                    A commitment to unyielding quality, mechanical reliability, and total transparency.
                  </p>
                </div>

                <div className="border-l-2 border-[#E25822] pl-4 space-y-1.5">
                  <span className="text-xs font-mono font-semibold text-[#E25822]">03</span>
                  <h4 className="text-sm font-semibold tracking-wide text-[#F7F4EC] uppercase">
                    Personalised Service
                  </h4>
                  <p className="text-xs text-[#8DAFA0] leading-relaxed">
                    A customer experience tailored completely around individual timelines and requirements.
                  </p>
                </div>

                <div className="border-l-2 border-[#E25822] pl-4 space-y-1.5">
                  <span className="text-xs font-mono font-semibold text-[#E25822]">04</span>
                  <h4 className="text-sm font-semibold tracking-wide text-[#F7F4EC] uppercase">
                    Automotive Excellence
                  </h4>
                  <p className="text-xs text-[#8DAFA0] leading-relaxed">
                    A lifelong passion for exceptional engineering, rare coachwork, and exalted driving joy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4 — LUXURY EXPERIENCE
          ========================================================================= */}
      <section className="relative py-32 sm:py-44 bg-[#030B08] overflow-hidden flex items-center justify-center">
        {/* Full-width dramatic photography with slow parallax mood */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/luxury_experience_cinematic_1791456190174.jpg"
            alt="Luxury Night Drive Singapore"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover scale-105"
          />
          {/* Deep dark emerald and charcoal overlay scrim */}
          <div className="absolute inset-0 bg-[#040D0A]/75 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040D0A] via-transparent to-[#040D0A]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs uppercase tracking-[0.3em] text-[#E25822] font-semibold block">
            THE SENSATION
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif-luxury font-bold text-[#F7F4EC] tracking-wide uppercase leading-tight">
            MORE THAN A CAR. AN EXPERIENCE.
          </h2>
          <p className="text-base sm:text-lg text-[#EFECE3]/90 font-light leading-relaxed max-w-2xl mx-auto">
            To hold the wheel of an extraordinary motorcar is to alter the tempo of life. Every seam of hand-quilted hide, every acoustic modulation of a twin-turbocharged twelve-cylinder symphony, and every arrival carries an understated distinction that words alone cannot articulate.
          </p>
          <div className="pt-6">
            <button
              onClick={() => onNavigate('about-us')}
              className="px-8 py-3.5 bg-transparent hover:bg-[#E25822] text-[#F7F4EC] hover:text-[#040D0A] border border-[#E25822] text-xs font-semibold tracking-[0.25em] uppercase transition-all duration-300 cursor-pointer"
            >
              DISCOVER OUR STORY
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5 — PREMIUM SERVICES
          ========================================================================= */}
      <section className="py-24 sm:py-32 bg-[#051410] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <p className="text-xs uppercase tracking-[0.25em] text-[#E25822] font-semibold">
              BESPOKE CLIENT CAPABILITIES
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#F7F4EC] tracking-wide">
              COMPREHENSIVE AUTOMOTIVE SERVICES
            </h2>
            <p className="text-sm text-[#8DAFA0]">
              From private vehicle acquisition to tailored financing structures and bespoke global sourcing.
            </p>
          </div>

          {/* 5 Services Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service 1 */}
            <div className="group bg-[#040E0B] p-8 border border-[#123328] hover:border-[#E25822]/60 transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" style={{ backgroundImage: "url('/assets/images/service_sales_key_1791456794331.jpg')" }} />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-[#082218] border border-[#143B2D] flex items-center justify-center mb-6 group-hover:border-[#E25822] transition-colors">
                  <Key className="w-5 h-5 text-[#E25822]" />
                </div>
                <h3 className="text-lg font-serif-luxury font-bold text-[#F7F4EC] mb-2 tracking-wide">
                  Premium Vehicle Sales
                </h3>
                <p className="text-xs text-[#8DAFA0] leading-relaxed">
                  Direct access to an exclusive inventory of Singapore-registered ultra-luxury sedans, grand tourers, and exotic sports automobiles.
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="group bg-[#040E0B] p-8 border border-[#123328] hover:border-[#E25822]/60 transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" style={{ backgroundImage: "url('/assets/images/service_tradein_detailing_1791456813945.jpg')" }} />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-[#082218] border border-[#143B2D] flex items-center justify-center mb-6 group-hover:border-[#E25822] transition-colors">
                  <RefreshCw className="w-5 h-5 text-[#E25822]" />
                </div>
                <h3 className="text-lg font-serif-luxury font-bold text-[#F7F4EC] mb-2 tracking-wide">
                  Trade-In Assistance
                </h3>
                <p className="text-xs text-[#8DAFA0] leading-relaxed">
                  Transparent and equitable valuation for your existing luxury vehicle, ensuring a seamless and effortless trade-in transition.
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="group bg-[#040E0B] p-8 border border-[#123328] hover:border-[#E25822]/60 transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" style={{ backgroundImage: "url('/assets/images/service_sourcing_vintage_1791456829351.jpg')" }} />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-[#082218] border border-[#143B2D] flex items-center justify-center mb-6 group-hover:border-[#E25822] transition-colors">
                  <Search className="w-5 h-5 text-[#E25822]" />
                </div>
                <h3 className="text-lg font-serif-luxury font-bold text-[#F7F4EC] mb-2 tracking-wide">
                  Vehicle Sourcing
                </h3>
                <p className="text-xs text-[#8DAFA0] leading-relaxed">
                  Searching for a specific bespoke Mulliner, Mansory, or Paint to Sample commission? Our global network locates elusive collector models.
                </p>
              </div>
            </div>

            {/* Service 4 */}
            <div className="group bg-[#040E0B] p-8 border border-[#123328] hover:border-[#E25822]/60 transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" style={{ backgroundImage: "url('/assets/images/service_financing_contract_1791456844729.jpg')" }} />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-[#082218] border border-[#143B2D] flex items-center justify-center mb-6 group-hover:border-[#E25822] transition-colors">
                  <Calculator className="w-5 h-5 text-[#E25822]" />
                </div>
                <h3 className="text-lg font-serif-luxury font-bold text-[#F7F4EC] mb-2 tracking-wide">
                  Financing Assistance
                </h3>
                <p className="text-xs text-[#8DAFA0] leading-relaxed">
                  Competitive in-house and premier financial institutional packages tailored to corporate structures and private wealth requirements.
                </p>
              </div>
            </div>

            {/* Service 5 */}
            <div className="group bg-[#040E0B] p-8 border border-[#123328] hover:border-[#E25822]/60 transition-all duration-300 relative md:col-span-2 lg:col-span-1 overflow-hidden">
              <div className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" style={{ backgroundImage: "url('/assets/images/service_aftersales_engine_1791456857439.jpg')" }} />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-[#082218] border border-[#143B2D] flex items-center justify-center mb-6 group-hover:border-[#E25822] transition-colors">
                  <Wrench className="w-5 h-5 text-[#E25822]" />
                </div>
                <h3 className="text-lg font-serif-luxury font-bold text-[#F7F4EC] mb-2 tracking-wide">
                  After-Sales Support
                </h3>
                <p className="text-xs text-[#8DAFA0] leading-relaxed">
                  Complete warranty stewardship, COE renewals, specialized detailing preservation, and scheduled factory-grade service management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6 — FINAL CTA
          ========================================================================= */}
      <section className="relative py-28 sm:py-36 bg-[#040D0A] overflow-hidden border-t border-[#103024]">
        {/* Subtle dark-green and amber lighting atmosphere */}
        <div className="absolute inset-0 ambient-emerald-glow opacity-90 pointer-events-none" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 ambient-orange-accent opacity-50 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-[#E25822] font-semibold">
            THE PRIVATE CLIENT DESK
          </p>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif-luxury font-bold text-[#F7F4EC] tracking-wide uppercase leading-tight">
            YOUR NEXT EXTRAORDINARY DRIVE AWAITS.
          </h2>

          <p className="text-base sm:text-lg text-[#8DAFA0] font-light leading-relaxed max-w-2xl mx-auto">
            Explore the CARXCORE collection and discover a vehicle worthy of your journey.
          </p>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <button
              onClick={() => onNavigate('our-cars')}
              className="w-full sm:w-auto px-8 py-4 bg-[#E25822] hover:bg-[#F27A45] text-[#040D0A] font-semibold text-xs tracking-[0.25em] uppercase transition-all duration-300 shadow-xl shadow-[#E25822]/20 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>VIEW OUR CARS</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${COMPANY_DETAILS.phoneClean}`}
              className="w-full sm:w-auto px-8 py-4 bg-[#0A261D] hover:bg-[#123B2D] text-[#F7F4EC] border border-[#164235] hover:border-[#E25822] font-semibold text-xs tracking-[0.25em] uppercase transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#E25822]" />
              <span className="tabular-nums">CALL {COMPANY_DETAILS.phone}</span>
            </a>
          </div>

          <p className="text-[11px] text-[#8DAFA0]/70 pt-6 tracking-widest uppercase">
            {COMPANY_DETAILS.address}
          </p>
        </div>
      </section>
    </div>
  );
};
