import React, { useState } from 'react';
import { Vehicle } from '../types';
import { COMPANY_DETAILS } from '../data/cars';
import { X, Phone, MessageSquare, Check, Shield, Gauge, Zap, Calendar, Sparkles } from 'lucide-react';

interface VehicleModalProps {
  vehicle: Vehicle | null;
  onClose: () => void;
  onEnquire: (vehicle: Vehicle) => void;
}

export const VehicleModal: React.FC<VehicleModalProps> = ({ vehicle, onClose, onEnquire }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [loanTenureYears, setLoanTenureYears] = useState(5);
  const [downpaymentPercent, setDownpaymentPercent] = useState(40);
  const [interestRate, setInterestRate] = useState(2.78);

  if (!vehicle) return null;

  // Monthly installment calculation
  const carPrice = vehicle.priceNumeric;
  const downpaymentAmount = (carPrice * downpaymentPercent) / 100;
  const loanAmount = Math.max(0, carPrice - downpaymentAmount);
  const totalInterest = loanAmount * (interestRate / 100) * loanTenureYears;
  const totalRepayment = loanAmount + totalInterest;
  const monthlyInstallment = Math.round(totalRepayment / (loanTenureYears * 12));

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 lg:p-8 animate-fadeIn">
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative bg-[#051410] border border-[#164235] w-full max-w-5xl my-auto z-10 shadow-2xl shadow-black overflow-hidden">
        {/* Top bar with close button */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#123328] bg-[#030D0A]">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-[0.25em] text-[#8DAFA0]">
              Automobile Dossier
            </span>
            <span className="text-[#8DAFA0]/40">·</span>
            <span className="text-xs tracking-wider text-[#E25822] font-mono">
              REF #{vehicle.id.toUpperCase().slice(0, 10)}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#8DAFA0] hover:text-[#F7F4EC] hover:bg-[#0E2F24] transition-colors focus:outline-none cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="max-h-[85vh] overflow-y-auto p-6 lg:p-8 space-y-8">
          {/* Header Title Section */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#103024] pb-6">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#8DAFA0] mb-1">
                {vehicle.make} {vehicle.series ? `— ${vehicle.series}` : ''}
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif-luxury font-bold text-[#F7F4EC] tracking-wide">
                {vehicle.model}
              </h2>
            </div>
            <div className="md:text-right">
              <span className="text-xs uppercase tracking-[0.2em] text-[#8DAFA0] block mb-0.5">
                Acquisition Value
              </span>
              <span className="text-2xl sm:text-3xl font-serif-luxury font-semibold text-[#E25822] tracking-wide">
                {vehicle.priceDisplay}
              </span>
            </div>
          </div>

          {/* Media Showcase */}
          <div className="space-y-3">
            <div className="relative aspect-[16/9] w-full bg-[#020A07] overflow-hidden border border-[#164235]">
              <img
                src={vehicle.galleryImages[activeImageIndex] || vehicle.primaryImage}
                alt={`${vehicle.make} ${vehicle.model}`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040D0A]/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 bg-[#040D0A]/80 backdrop-blur-md px-3 py-1 border border-[#164235] text-[11px] uppercase tracking-widest text-[#EFECE3]">
                {vehicle.year} · {vehicle.mileage.toLocaleString()} KM · {vehicle.fuelType}
              </div>
            </div>

            {/* Gallery Thumbnails */}
            {vehicle.galleryImages.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1">
                {vehicle.galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-14 shrink-0 overflow-hidden border transition-all cursor-pointer ${
                      activeImageIndex === idx
                        ? 'border-[#E25822] opacity-100'
                        : 'border-[#123328] opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt="Thumbnail"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Overview Prose */}
          <div className="bg-[#071B14] p-5 border-l-2 border-[#E25822]">
            <p className="text-sm text-[#EFECE3]/90 leading-relaxed font-light">
              {vehicle.overview}
            </p>
          </div>

          {/* Specifications Grid */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-[#8DAFA0] mb-4 flex items-center gap-2">
              <Gauge className="w-4 h-4 text-[#E25822]" />
              <span>Technical &amp; Provenance Specifications</span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-xs">
              <div className="bg-[#071913] p-3.5 border border-[#103024]">
                <span className="text-[#8DAFA0] block text-[11px] mb-1">Engine</span>
                <span className="text-[#F7F4EC] font-medium">{vehicle.engine}</span>
              </div>
              <div className="bg-[#071913] p-3.5 border border-[#103024]">
                <span className="text-[#8DAFA0] block text-[11px] mb-1">Power Output</span>
                <span className="text-[#F7F4EC] font-medium">{vehicle.power}</span>
              </div>
              <div className="bg-[#071913] p-3.5 border border-[#103024]">
                <span className="text-[#8DAFA0] block text-[11px] mb-1">Torque</span>
                <span className="text-[#F7F4EC] font-medium">{vehicle.torque}</span>
              </div>
              <div className="bg-[#071913] p-3.5 border border-[#103024]">
                <span className="text-[#8DAFA0] block text-[11px] mb-1">0–100 km/h</span>
                <span className="text-[#E25822] font-semibold">{vehicle.acceleration}</span>
              </div>
              <div className="bg-[#071913] p-3.5 border border-[#103024]">
                <span className="text-[#8DAFA0] block text-[11px] mb-1">Transmission</span>
                <span className="text-[#F7F4EC] font-medium">{vehicle.transmission}</span>
              </div>
              <div className="bg-[#071913] p-3.5 border border-[#103024]">
                <span className="text-[#8DAFA0] block text-[11px] mb-1">Top Speed</span>
                <span className="text-[#F7F4EC] font-medium">{vehicle.topSpeed}</span>
              </div>
              <div className="bg-[#071913] p-3.5 border border-[#103024]">
                <span className="text-[#8DAFA0] block text-[11px] mb-1">Singapore OMV</span>
                <span className="text-[#F7F4EC] font-medium">{vehicle.omv || 'Available upon request'}</span>
              </div>
              <div className="bg-[#071913] p-3.5 border border-[#103024]">
                <span className="text-[#8DAFA0] block text-[11px] mb-1">COE Expiry</span>
                <span className="text-[#F7F4EC] font-medium">{vehicle.coeExpiry || '10-Year Valid'}</span>
              </div>
            </div>
          </div>

          {/* Bespoke Equipment Highlights */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-[#8DAFA0] mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#E25822]" />
              <span>Commissioned Highlights &amp; Equipment</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {vehicle.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-[#EFECE3]/90 bg-[#071913]/60 p-3 border border-[#103024]">
                  <Check className="w-4 h-4 text-[#E25822] shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Financing Estimator */}
          {!vehicle.isEnquireOnly && (
            <div className="bg-[#061812] border border-[#143B2D] p-5 sm:p-6 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#123328] pb-3">
                <div>
                  <h4 className="text-sm font-semibold tracking-wide text-[#F7F4EC] uppercase">
                    Indicative Financing Estimator (SGD)
                  </h4>
                  <p className="text-xs text-[#8DAFA0]">
                    Configurable based on standard Singapore Monetary Authority financing guidelines
                  </p>
                </div>
                <div className="sm:text-right">
                  <span className="text-xs text-[#8DAFA0] block">Est. Monthly Installment</span>
                  <span className="text-xl font-bold text-[#E25822] font-mono">
                    S$ {monthlyInstallment.toLocaleString()} / mo
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-2 text-xs">
                <div>
                  <div className="flex justify-between mb-1.5 text-[#8DAFA0]">
                    <span>Downpayment</span>
                    <span className="text-[#F7F4EC] font-mono">{downpaymentPercent}% (S$ {Math.round(downpaymentAmount).toLocaleString()})</span>
                  </div>
                  <input
                    type="range"
                    min="30"
                    max="60"
                    step="5"
                    value={downpaymentPercent}
                    onChange={(e) => setDownpaymentPercent(Number(e.target.value))}
                    className="w-full accent-[#E25822] cursor-pointer bg-[#0A261D]"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-1.5 text-[#8DAFA0]">
                    <span>Loan Tenure</span>
                    <span className="text-[#F7F4EC] font-mono">{loanTenureYears} Years</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="7"
                    step="1"
                    value={loanTenureYears}
                    onChange={(e) => setLoanTenureYears(Number(e.target.value))}
                    className="w-full accent-[#E25822] cursor-pointer bg-[#0A261D]"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-1.5 text-[#8DAFA0]">
                    <span>Interest Rate</span>
                    <span className="text-[#F7F4EC] font-mono">{interestRate}% p.a.</span>
                  </div>
                  <input
                    type="range"
                    min="2.0"
                    max="4.0"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full accent-[#E25822] cursor-pointer bg-[#0A261D]"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Action CTAs */}
          <div className="pt-4 border-t border-[#123328] flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                onClose();
                onEnquire(vehicle);
              }}
              className="flex-1 py-3.5 px-6 bg-[#E25822] hover:bg-[#F27A45] text-[#040D0A] font-semibold text-xs tracking-[0.2em] uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>ENQUIRE ABOUT THIS VEHICLE</span>
            </button>

            <a
              href={`tel:${COMPANY_DETAILS.phoneClean}`}
              className="py-3.5 px-6 bg-[#0A261D] hover:bg-[#123B2D] text-[#F7F4EC] border border-[#164235] font-semibold text-xs tracking-[0.2em] uppercase transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#E25822]" />
              <span>CALL {COMPANY_DETAILS.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
