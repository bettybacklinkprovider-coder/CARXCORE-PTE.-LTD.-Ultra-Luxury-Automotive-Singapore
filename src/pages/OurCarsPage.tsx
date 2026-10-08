import React, { useState, useMemo } from 'react';
import { PageId, Vehicle, FilterState } from '../types';
import { LUXURY_VEHICLES, COMPANY_DETAILS } from '../data/cars';
import { Search, RotateCcw, ArrowUpRight, Gauge, Zap, Sparkles, Filter, ChevronDown, Check } from 'lucide-react';

interface OurCarsPageProps {
  onNavigate: (page: PageId) => void;
  onSelectVehicle: (vehicle: Vehicle) => void;
}

const INITIAL_FILTERS: FilterState = {
  brand: 'All',
  model: 'All',
  maxPrice: 3000000,
  year: 'All',
  bodyType: 'All',
  transmission: 'All',
  fuelType: 'All',
  searchQuery: '',
};

export const OurCarsPage: React.FC<OurCarsPageProps> = ({ onNavigate, onSelectVehicle }) => {
  const [filters, setFilters] = useState<FilterState>(INITIAL_FILTERS);
  const [showMobileFilterPanel, setShowMobileFilterPanel] = useState(false);

  // Extract unique filter options from car dataset
  const brands = useMemo(() => ['All', ...Array.from(new Set(LUXURY_VEHICLES.map(c => c.make)))], []);
  const bodyTypes = useMemo(() => ['All', ...Array.from(new Set(LUXURY_VEHICLES.map(c => c.bodyType)))], []);
  const years = useMemo(() => ['All', ...Array.from(new Set(LUXURY_VEHICLES.map(c => c.year.toString())))], []);
  const transmissions = useMemo(() => ['All', ...Array.from(new Set(LUXURY_VEHICLES.map(c => c.transmission)))], []);
  const fuelTypes = useMemo(() => ['All', ...Array.from(new Set(LUXURY_VEHICLES.map(c => c.fuelType)))], []);

  // Filter cars
  const filteredCars = useMemo(() => {
    return LUXURY_VEHICLES.filter(car => {
      if (filters.brand !== 'All' && car.make !== filters.brand) return false;
      if (filters.year !== 'All' && car.year.toString() !== filters.year) return false;
      if (filters.bodyType !== 'All' && car.bodyType !== filters.bodyType) return false;
      if (filters.transmission !== 'All' && car.transmission !== filters.transmission) return false;
      if (filters.fuelType !== 'All' && car.fuelType !== filters.fuelType) return false;
      if (car.priceNumeric > filters.maxPrice) return false;
      if (filters.searchQuery.trim() !== '') {
        const query = filters.searchQuery.toLowerCase();
        const text = `${car.make} ${car.model} ${car.series || ''} ${car.overview}`.toLowerCase();
        if (!text.includes(query)) return false;
      }
      return true;
    });
  }, [filters]);

  // Featured car for editorial section
  const featuredCar = LUXURY_VEHICLES.find(c => c.isFeatured) || LUXURY_VEHICLES[0];

  const handleResetFilters = () => {
    setFilters(INITIAL_FILTERS);
  };

  return (
    <div className="min-h-screen bg-[#040D0A] text-[#EFECE3] pt-20">
      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      <section className="relative py-24 sm:py-32 overflow-hidden border-b border-[#123328]">
        {/* Dramatic Luxury Vehicle Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/featured_luxury_grand_coupe_1791456163102.jpg"
            alt="The CARXCORE Collection"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-[#040D0A]/85 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040D0A] via-[#040D0A]/70 to-[#040D0A]/40" />
          <div className="absolute inset-0 ambient-emerald-glow opacity-60 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-[#E25822] font-semibold block">
            SINGAPORE SHOWROOM INVENTORY
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif-luxury font-bold text-[#F7F4EC] tracking-wider uppercase">
            THE COLLECTION
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#8DAFA0] font-light leading-relaxed">
            Exceptional automobiles, carefully selected for those who expect more.
          </p>
        </div>
      </section>

      {/* =========================================================================
          FEATURED VEHICLE (EDITORIAL SPOTLIGHT)
          ========================================================================= */}
      <section className="py-20 sm:py-24 bg-[#051410] border-b border-[#123328] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-xs uppercase tracking-[0.25em] text-[#E25822] font-semibold block mb-1">
              EXCLUSIVE SHOWCASE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif-luxury font-bold text-[#F7F4EC] tracking-wide">
              FEATURED AUTOMOBILE
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#030C09] border border-[#143E30] p-6 sm:p-8 lg:p-10 shadow-2xl">
            {/* Huge Vehicle Image (7 cols) */}
            <div className="lg:col-span-7 relative aspect-[16/10] overflow-hidden border border-[#123328]">
              <img
                src={featuredCar.primaryImage}
                alt={`${featuredCar.make} ${featuredCar.model}`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030C09]/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-4 left-4 bg-[#040D0A]/90 px-3 py-1.5 text-[11px] uppercase tracking-widest text-[#E25822] border border-[#E25822]/40 font-mono">
                FLAGSHIP COMMISSION
              </div>
            </div>

            {/* Specifications & Editorial Details (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#8DAFA0] mb-1">
                  {featuredCar.make} · {featuredCar.series}
                </p>
                <h3 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#F7F4EC] tracking-wide">
                  {featuredCar.model}
                </h3>
                <span className="text-2xl font-serif-luxury font-semibold text-[#E25822] mt-2 block">
                  {featuredCar.priceDisplay}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#8DAFA0] leading-relaxed font-light">
                {featuredCar.overview}
              </p>

              {/* Spec Highlights */}
              <div className="grid grid-cols-2 gap-3 text-xs border-t border-b border-[#0F2F24] py-4">
                <div>
                  <span className="text-[#8DAFA0] text-[11px] block">Acceleration</span>
                  <span className="text-[#F7F4EC] font-semibold">{featuredCar.acceleration}</span>
                </div>
                <div>
                  <span className="text-[#8DAFA0] text-[11px] block">Engine</span>
                  <span className="text-[#F7F4EC] font-semibold">{featuredCar.engine.split(' ')[0]} {featuredCar.engine.split(' ')[1]}</span>
                </div>
                <div>
                  <span className="text-[#8DAFA0] text-[11px] block">Mileage</span>
                  <span className="text-[#F7F4EC] font-semibold">{featuredCar.mileage.toLocaleString()} KM</span>
                </div>
                <div>
                  <span className="text-[#8DAFA0] text-[11px] block">Registration</span>
                  <span className="text-[#F7F4EC] font-semibold">{featuredCar.year} (Singapore COE)</span>
                </div>
              </div>

              <button
                onClick={() => onSelectVehicle(featuredCar)}
                className="w-full py-3.5 px-6 bg-[#E25822] hover:bg-[#F27A45] text-[#040D0A] font-semibold text-xs tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>DISCOVER THIS VEHICLE</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE FILTER BAR
          ========================================================================= */}
      <section className="bg-[#040F0C] border-b border-[#123328] sticky top-[60px] z-30 shadow-xl backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-[#8DAFA0] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="SEARCH VEHICLES (e.g. Bentley, Phantom, V12)..."
                value={filters.searchQuery}
                onChange={(e) => setFilters(prev => ({ ...prev, searchQuery: e.target.value }))}
                className="w-full pl-9 pr-4 py-2 bg-[#020A07] border border-[#143B2D] text-xs text-[#EFECE3] placeholder-[#8DAFA0]/60 focus:outline-none focus:border-[#E25822] tracking-wider uppercase"
              />
            </div>

            {/* Desktop Filters Dropdowns */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Brand Filter */}
              <div className="flex flex-col">
                <select
                  value={filters.brand}
                  onChange={(e) => setFilters(prev => ({ ...prev, brand: e.target.value }))}
                  className="bg-[#020A07] border border-[#143B2D] px-3 py-2 text-xs text-[#EFECE3] focus:border-[#E25822] focus:outline-none tracking-wider uppercase cursor-pointer"
                  aria-label="Filter by Brand"
                >
                  <option value="All">All Brands</option>
                  {brands.filter(b => b !== 'All').map(b => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>

              {/* Body Type */}
              <div className="flex flex-col">
                <select
                  value={filters.bodyType}
                  onChange={(e) => setFilters(prev => ({ ...prev, bodyType: e.target.value }))}
                  className="bg-[#020A07] border border-[#143B2D] px-3 py-2 text-xs text-[#EFECE3] focus:border-[#E25822] focus:outline-none tracking-wider uppercase cursor-pointer"
                  aria-label="Filter by Body Type"
                >
                  <option value="All">All Body Types</option>
                  {bodyTypes.filter(b => b !== 'All').map(b => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>

              {/* Year */}
              <div className="flex flex-col">
                <select
                  value={filters.year}
                  onChange={(e) => setFilters(prev => ({ ...prev, year: e.target.value }))}
                  className="bg-[#020A07] border border-[#143B2D] px-3 py-2 text-xs text-[#EFECE3] focus:border-[#E25822] focus:outline-none tracking-wider uppercase cursor-pointer"
                  aria-label="Filter by Year"
                >
                  <option value="All">All Years</option>
                  {years.filter(y => y !== 'All').map(y => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
              </div>

              {/* Fuel Type */}
              <div className="flex flex-col">
                <select
                  value={filters.fuelType}
                  onChange={(e) => setFilters(prev => ({ ...prev, fuelType: e.target.value }))}
                  className="bg-[#020A07] border border-[#143B2D] px-3 py-2 text-xs text-[#EFECE3] focus:border-[#E25822] focus:outline-none tracking-wider uppercase cursor-pointer"
                  aria-label="Filter by Fuel Type"
                >
                  <option value="All">All Powertrains</option>
                  {fuelTypes.filter(f => f !== 'All').map(f => (
                    <option key={f} value={f}>{f}</option>
                  ))}
                </select>
              </div>

              {/* Reset Filters */}
              <button
                onClick={handleResetFilters}
                className="px-3 py-2 bg-[#082218] hover:bg-[#123B2D] text-[#8DAFA0] hover:text-[#F7F4EC] border border-[#143B2D] text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
                title="Reset all filters"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>RESET</span>
              </button>
            </div>

            {/* Mobile Filter Toggle */}
            <div className="flex items-center justify-between lg:hidden">
              <span className="text-xs text-[#8DAFA0]">
                Showing {filteredCars.length} of {LUXURY_VEHICLES.length} vehicles
              </span>
              <button
                onClick={() => setShowMobileFilterPanel(!showMobileFilterPanel)}
                className="px-3.5 py-1.5 bg-[#082218] border border-[#143B2D] text-xs text-[#EFECE3] flex items-center gap-2"
              >
                <Filter className="w-3.5 h-3.5 text-[#E25822]" />
                <span>FILTERS ({filteredCars.length})</span>
              </button>
            </div>
          </div>

          {/* Mobile Filters Dropdown Expandable */}
          {showMobileFilterPanel && (
            <div className="lg:hidden pt-4 pb-2 border-t border-[#123328] mt-4 grid grid-cols-2 gap-3 text-xs">
              <div>
                <label className="text-[10px] uppercase text-[#8DAFA0] block mb-1">Brand</label>
                <select
                  value={filters.brand}
                  onChange={(e) => setFilters(prev => ({ ...prev, brand: e.target.value }))}
                  className="w-full bg-[#020A07] border border-[#143B2D] p-2 text-xs text-[#EFECE3]"
                >
                  <option value="All">All Brands</option>
                  {brands.filter(b => b !== 'All').map(b => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>

              <div>
                <label className="text-[10px] uppercase text-[#8DAFA0] block mb-1">Body Type</label>
                <select
                  value={filters.bodyType}
                  onChange={(e) => setFilters(prev => ({ ...prev, bodyType: e.target.value }))}
                  className="w-full bg-[#020A07] border border-[#143B2D] p-2 text-xs text-[#EFECE3]"
                >
                  <option value="All">All Types</option>
                  {bodyTypes.filter(b => b !== 'All').map(b => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>

              <div>
                <label className="text-[10px] uppercase text-[#8DAFA0] block mb-1">Year</label>
                <select
                  value={filters.year}
                  onChange={(e) => setFilters(prev => ({ ...prev, year: e.target.value }))}
                  className="w-full bg-[#020A07] border border-[#143B2D] p-2 text-xs text-[#EFECE3]"
                >
                  <option value="All">All Years</option>
                  {years.filter(y => y !== 'All').map(y => <option key={y} value={y}>{y}</option>)}
                </select>
              </div>

              <div className="flex items-end">
                <button
                  onClick={handleResetFilters}
                  className="w-full py-2 bg-[#082218] text-[#8DAFA0] border border-[#143B2D] text-xs uppercase"
                >
                  Reset Filters
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================================
          VEHICLE INVENTORY GRID
          ========================================================================= */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#103024]">
          <span className="text-xs uppercase tracking-[0.2em] text-[#8DAFA0]">
            AVAILABLE MOTORCARS · <strong className="text-[#F7F4EC] font-mono">{filteredCars.length}</strong> VEHICLES
          </span>
          <span className="text-xs text-[#8DAFA0] hidden sm:inline">
            All vehicles inspected &amp; ready for private viewing in Singapore
          </span>
        </div>

        {filteredCars.length === 0 ? (
          <div className="text-center py-24 bg-[#051410] border border-[#143B2D] p-8 space-y-4">
            <h3 className="text-xl font-serif-luxury text-[#F7F4EC]">No automobiles matched your criteria</h3>
            <p className="text-xs text-[#8DAFA0] max-w-md mx-auto">
              Our inventory rotates frequently. Allow our private concierge to source your specific motorcar.
            </p>
            <button
              onClick={handleResetFilters}
              className="px-6 py-2.5 bg-[#E25822] text-[#040D0A] text-xs font-semibold tracking-widest uppercase"
            >
              RESET FILTERS
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map((car) => (
              <div
                key={car.id}
                className="group bg-[#051410] border border-[#123328] hover:border-[#E25822]/60 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#E25822]/10"
              >
                {/* Vehicle Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#020805]">
                  <img
                    src={car.primaryImage}
                    alt={`${car.make} ${car.model}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#051410] via-transparent to-transparent opacity-50" />
                  <div className="absolute top-3 left-3 bg-[#040D0A]/90 px-2.5 py-1 text-[10px] uppercase tracking-widest text-[#8DAFA0] border border-[#143B2D]">
                    {car.year}
                  </div>
                  {car.isFeatured && (
                    <div className="absolute top-3 right-3 bg-[#E25822] text-[#040D0A] font-bold text-[9px] uppercase tracking-widest px-2 py-0.5">
                      FEATURED
                    </div>
                  )}
                </div>

                {/* Details Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div>
                    <span className="text-xs uppercase tracking-[0.25em] text-[#8DAFA0] block mb-1">
                      {car.make} {car.series ? `— ${car.series}` : ''}
                    </span>
                    <h3 className="text-xl font-serif-luxury font-bold text-[#F7F4EC] tracking-wide group-hover:text-[#E25822] transition-colors">
                      {car.model}
                    </h3>
                  </div>

                  {/* Clean unboxed metadata with separators */}
                  <div className="grid grid-cols-2 gap-y-2 text-xs text-[#8DAFA0] border-t border-b border-[#0E2C21] py-3">
                    <div>
                      <span className="text-[#8DAFA0]/70 text-[10px] block uppercase">Mileage</span>
                      <span className="text-[#EFECE3] font-mono">{car.mileage.toLocaleString()} KM</span>
                    </div>
                    <div>
                      <span className="text-[#8DAFA0]/70 text-[10px] block uppercase">Transmission</span>
                      <span className="text-[#EFECE3] truncate block">{car.transmission}</span>
                    </div>
                    <div>
                      <span className="text-[#8DAFA0]/70 text-[10px] block uppercase">Fuel Type</span>
                      <span className="text-[#EFECE3]">{car.fuelType}</span>
                    </div>
                    <div>
                      <span className="text-[#8DAFA0]/70 text-[10px] block uppercase">Body Type</span>
                      <span className="text-[#EFECE3]">{car.bodyType}</span>
                    </div>
                  </div>

                  {/* Price & Action */}
                  <div className="pt-2 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] tracking-widest uppercase text-[#8DAFA0] block">Singapore Price</span>
                      <span className="text-lg font-serif-luxury font-semibold text-[#E25822]">
                        {car.priceDisplay}
                      </span>
                    </div>
                    <button
                      onClick={() => onSelectVehicle(car)}
                      className="px-4 py-2.5 text-xs uppercase tracking-[0.18em] font-semibold text-[#F7F4EC] bg-[#0A261D] hover:bg-[#E25822] hover:text-[#040D0A] transition-colors border border-[#164235] cursor-pointer"
                    >
                      VIEW DETAILS
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* =========================================================================
          INVENTORY CTA
          ========================================================================= */}
      <section className="py-24 bg-[#051410] border-t border-[#123328]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs uppercase tracking-[0.3em] text-[#E25822] font-semibold block">
            BESPOKE ACQUISITION COMMISSION
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#F7F4EC] tracking-wide uppercase">
            LOOKING FOR SOMETHING SPECIFIC?
          </h2>
          <p className="text-sm sm:text-base text-[#8DAFA0] font-light leading-relaxed max-w-2xl mx-auto">
            Speak with our team and let us help you find the automobile that matches your requirements. Our private sourcing concierge connects to exclusive Singapore and international collector portfolios.
          </p>
          <div className="pt-4">
            <button
              onClick={() => onNavigate('contact-us')}
              className="px-8 py-4 bg-[#E25822] hover:bg-[#F27A45] text-[#040D0A] font-semibold text-xs tracking-[0.25em] uppercase transition-all duration-300 shadow-xl cursor-pointer"
            >
              CONTACT OUR TEAM
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
