import React, { useState, useEffect } from 'react';
import { PageId, Vehicle, EnquiryFormData } from '../types';
import { COMPANY_DETAILS, LUXURY_VEHICLES } from '../data/cars';
import { Phone, MapPin, Mail, Clock, Send, CheckCircle, Navigation, ExternalLink, Calendar, Car } from 'lucide-react';

interface ContactUsPageProps {
  onNavigate: (page: PageId) => void;
  preSelectedVehicle: Vehicle | null;
}

export const ContactUsPage: React.FC<ContactUsPageProps> = ({ onNavigate, preSelectedVehicle }) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    phoneNumber: '',
    email: '',
    vehicleOfInterest: preSelectedVehicle ? `${preSelectedVehicle.make} ${preSelectedVehicle.model} (${preSelectedVehicle.year})` : 'General Private Enquiry',
    preferredContactMethod: 'WhatsApp',
    message: preSelectedVehicle ? `I would like to arrange a private viewing and receive the complete dossier for the ${preSelectedVehicle.make} ${preSelectedVehicle.model}.` : '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  // Editable business hours state for customization
  const [businessHours, setBusinessHours] = useState({
    mondayToFriday: '10:00 AM – 7:00 PM',
    saturday: '10:00 AM – 6:00 PM',
    sundayAndPH: 'By Private Appointment Only',
    notes: 'Private salon viewings can be scheduled outside standard hours with 24 hours advance notice.'
  });

  useEffect(() => {
    if (preSelectedVehicle) {
      setFormData(prev => ({
        ...prev,
        vehicleOfInterest: `${preSelectedVehicle.make} ${preSelectedVehicle.model} (${preSelectedVehicle.year})`,
        message: `I would like to arrange a private viewing and receive the complete dossier for the ${preSelectedVehicle.make} ${preSelectedVehicle.model}.`
      }));
    }
  }, [preSelectedVehicle]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate luxury concierge dispatch
    setTimeout(() => {
      const generatedRef = `CXC-${Math.floor(100000 + Math.random() * 900000)}`;
      setReferenceId(generatedRef);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#040D0A] text-[#EFECE3] pt-20">
      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      <section className="relative py-28 sm:py-36 overflow-hidden border-b border-[#123328]">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/contact_vip_lounge_1791456206843.jpg"
            alt="CARXCORE VIP Private Salon"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-[#040D0A]/85 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040D0A] via-[#040D0A]/70 to-[#040D0A]/40" />
          <div className="absolute inset-0 ambient-emerald-glow opacity-80 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs uppercase tracking-[0.3em] text-[#E25822] font-semibold block">
            PRIVATE CONCIERGE &amp; SHOWROOM
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif-luxury font-bold text-[#F7F4EC] tracking-wide uppercase leading-tight">
            BEGIN YOUR NEXT JOURNEY
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#8DAFA0] font-light leading-relaxed">
            Our team is ready to help you discover your next exceptional automobile.
          </p>
        </div>
      </section>

      {/* =========================================================================
          MAIN CONTACT & FORM SECTION
          ========================================================================= */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Contact Info & Business Hours (5 cols) */}
          <div className="lg:col-span-5 space-y-10">
            {/* Business Information Card */}
            <div className="bg-[#051410] border border-[#143B2D] p-8 space-y-6 shadow-xl">
              <div>
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#E25822] font-semibold block mb-1">
                  OFFICIAL ENTITY
                </span>
                <h2 className="text-2xl font-serif-luxury font-bold text-[#F7F4EC] tracking-wide">
                  {COMPANY_DETAILS.name}
                </h2>
              </div>

              <div className="space-y-5 text-sm">
                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-none bg-[#092419] border border-[#143B2D] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-[#E25822]" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#8DAFA0] block">Direct Concierge</span>
                    <a
                      href={`tel:${COMPANY_DETAILS.phoneClean}`}
                      className="text-base text-[#F7F4EC] hover:text-[#E25822] transition-colors font-medium tabular-nums"
                    >
                      {COMPANY_DETAILS.phone}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-none bg-[#092419] border border-[#143B2D] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-[#E25822]" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#8DAFA0] block">Showroom Location</span>
                    <p className="text-[#F7F4EC] font-light leading-snug">
                      {COMPANY_DETAILS.address}
                    </p>
                    <span className="text-xs text-[#8DAFA0] block mt-1">
                      Jurong Industrial District, Singapore
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-none bg-[#092419] border border-[#143B2D] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-[#E25822]" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#8DAFA0] block">Electronic Correspondence</span>
                    <a
                      href={`mailto:${COMPANY_DETAILS.email}`}
                      className="text-[#F7F4EC] hover:text-[#E25822] transition-colors"
                    >
                      {COMPANY_DETAILS.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="bg-[#051410] border border-[#143B2D] p-8 space-y-5 shadow-xl">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#E25822]" />
                <h3 className="text-xs uppercase tracking-[0.25em] text-[#8DAFA0] font-semibold">
                  SALON &amp; VIEWING HOURS
                </h3>
              </div>

              <div className="space-y-3 text-xs border-t border-[#0F2F24] pt-4">
                <div className="flex justify-between py-1 border-b border-[#0C241C]">
                  <span className="text-[#8DAFA0]">Monday – Friday</span>
                  <span className="text-[#F7F4EC] font-medium font-mono">{businessHours.mondayToFriday}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#0C241C]">
                  <span className="text-[#8DAFA0]">Saturday</span>
                  <span className="text-[#F7F4EC] font-medium font-mono">{businessHours.saturday}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#0C241C]">
                  <span className="text-[#8DAFA0]">Sunday &amp; Public Holidays</span>
                  <span className="text-[#E25822] font-medium">{businessHours.sundayAndPH}</span>
                </div>
              </div>

              <p className="text-[11px] text-[#8DAFA0]/80 italic leading-relaxed pt-1">
                {businessHours.notes}
              </p>
            </div>
          </div>

          {/* Right: Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#051410] border border-[#143B2D] p-8 sm:p-10 shadow-2xl relative">
            <span className="text-xs uppercase tracking-[0.25em] text-[#E25822] font-semibold block mb-2">
              CONFIDENTIAL ENQUIRY
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#F7F4EC] tracking-wide mb-6">
              CONNECT WITH OUR SPECIALISTS
            </h2>

            {submitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 bg-[#08281D] border border-[#1D5E48] rounded-full flex items-center justify-center mx-auto text-[#E25822]">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-serif-luxury font-bold text-[#F7F4EC]">
                    Enquiry Successfully Dispatched
                  </h3>
                  <p className="text-xs uppercase tracking-widest text-[#8DAFA0]">
                    REFERENCE NUMBER: <span className="text-[#E25822] font-mono font-bold">{referenceId}</span>
                  </p>
                  <p className="text-sm text-[#8DAFA0] max-w-md mx-auto pt-2 font-light">
                    Thank you, <strong className="text-white">{formData.fullName}</strong>. A dedicated CARXCORE senior client advisor will review your specifications and contact you via {formData.preferredContactMethod} shortly.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: '',
                      phoneNumber: '',
                      email: '',
                      vehicleOfInterest: 'General Private Enquiry',
                      preferredContactMethod: 'WhatsApp',
                      message: ''
                    });
                  }}
                  className="px-6 py-2.5 bg-[#092419] hover:bg-[#E25822] text-[#F7F4EC] hover:text-[#040D0A] border border-[#143B2D] text-xs uppercase tracking-widest transition-colors cursor-pointer"
                >
                  SUBMIT ANOTHER INQUIRY
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 text-xs">
                {preSelectedVehicle && (
                  <div className="p-3.5 bg-[#082218] border border-[#E25822]/40 flex items-center gap-3">
                    <Car className="w-4 h-4 text-[#E25822] shrink-0" />
                    <div className="text-xs">
                      <span className="text-[#8DAFA0] block text-[10px] uppercase">Enquiring regarding:</span>
                      <strong className="text-[#F7F4EC] font-serif-luxury text-sm">
                        {preSelectedVehicle.make} {preSelectedVehicle.model} ({preSelectedVehicle.year})
                      </strong>
                    </div>
                  </div>
                )}

                {/* Full Name & Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#8DAFA0] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jonathan Lee"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 bg-[#030B08] border border-[#143B2D] focus:border-[#E25822] text-[#F7F4EC] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#8DAFA0] mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+65 9123 4567"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      className="w-full px-4 py-3 bg-[#030B08] border border-[#143B2D] focus:border-[#E25822] text-[#F7F4EC] focus:outline-none transition-colors font-mono"
                    />
                  </div>
                </div>

                {/* Email Address & Vehicle of Interest */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#8DAFA0] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="client@prestige.sg"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-[#030B08] border border-[#143B2D] focus:border-[#E25822] text-[#F7F4EC] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#8DAFA0] mb-2">
                      Vehicle of Interest
                    </label>
                    <select
                      value={formData.vehicleOfInterest}
                      onChange={(e) => setFormData({ ...formData, vehicleOfInterest: e.target.value })}
                      className="w-full px-4 py-3 bg-[#030B08] border border-[#143B2D] focus:border-[#E25822] text-[#F7F4EC] focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="General Private Enquiry">General Private Enquiry</option>
                      {LUXURY_VEHICLES.map(v => (
                        <option key={v.id} value={`${v.make} ${v.model} (${v.year})`}>
                          {v.make} {v.model} ({v.year})
                        </option>
                      ))}
                      <option value="Bespoke Sourcing Request">Bespoke Vehicle Sourcing Request</option>
                      <option value="Trade-In Valuation">Trade-In Valuation</option>
                    </select>
                  </div>
                </div>

                {/* Preferred Contact Method */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#8DAFA0] mb-2">
                    Preferred Contact Method
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {(['WhatsApp', 'Phone Call', 'Email'] as const).map(method => (
                      <button
                        type="button"
                        key={method}
                        onClick={() => setFormData({ ...formData, preferredContactMethod: method })}
                        className={`py-2.5 px-3 border text-center transition-all cursor-pointer ${
                          formData.preferredContactMethod === method
                            ? 'bg-[#E25822] text-[#040D0A] font-semibold border-[#E25822]'
                            : 'bg-[#030B08] text-[#8DAFA0] border-[#143B2D] hover:border-[#8DAFA0]'
                        }`}
                      >
                        {method}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#8DAFA0] mb-2">
                    Your Message / Desired Date of Visit
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Provide details regarding your timeline, specific questions, or vehicle trade-in..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-[#030B08] border border-[#143B2D] focus:border-[#E25822] text-[#F7F4EC] focus:outline-none transition-colors"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#E25822] hover:bg-[#F27A45] disabled:opacity-50 text-[#040D0A] font-semibold text-xs tracking-[0.25em] uppercase transition-all duration-300 shadow-xl flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'DISPATCHING TO CONCIERGE...' : 'SEND ENQUIRY'}</span>
                </button>

                <p className="text-[10px] text-[#8DAFA0]/70 text-center tracking-wider">
                  Discreet handling guaranteed. All client discussions are protected by strict privacy protocols.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================================
          VISIT OUR SHOWROOM (LARGE MAP / LOCATION PRESENTATION)
          ========================================================================= */}
      <section className="py-24 sm:py-32 bg-[#051410] border-t border-[#123328] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#E25822] font-semibold">
              DESTINATION &amp; TRANSIT
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif-luxury font-bold text-[#F7F4EC] tracking-wide">
              VISIT CARXCORE
            </h2>
            <p className="text-base font-serif-luxury text-[#EFECE3]">
              3 Soon Lee St, #05-30, Singapore 627606
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#030907] border border-[#143B2D] overflow-hidden">
            {/* Interactive Luxury Styled Map Representation (7 cols) */}
            <div className="lg:col-span-7 relative h-96 lg:h-[480px] bg-[#020705] border-b lg:border-b-0 lg:border-r border-[#123328] overflow-hidden flex flex-col justify-between p-6">
              {/* Styled Dark Topographical Grid Mockup */}
              <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#1B4F3E_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
              
              {/* Roads / Transit schematic styling */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-72 h-72 rounded-full border border-[#164235]/40 animate-ping opacity-20" />
                <div className="w-96 h-96 rounded-full border border-[#164235]/30" />
              </div>

              {/* Central Pin */}
              <div className="relative z-10 my-auto text-center space-y-3">
                <div className="w-14 h-14 bg-[#E25822] text-[#040D0A] mx-auto flex items-center justify-center shadow-2xl shadow-[#E25822]/50 border-2 border-white">
                  <MapPin className="w-7 h-7" />
                </div>
                <div className="bg-[#040D0A]/90 backdrop-blur-md px-4 py-2 border border-[#164235] inline-block">
                  <span className="text-xs font-serif-luxury font-bold text-white block">
                    CARXCORE PTE. LTD.
                  </span>
                  <span className="text-[10px] text-[#8DAFA0] uppercase tracking-wider">
                    Enterprise Hub, #05-30
                  </span>
                </div>
              </div>

              {/* Map Footer Action */}
              <div className="relative z-10 flex items-center justify-between pt-4 border-t border-[#103024]">
                <span className="text-[11px] text-[#8DAFA0]">GPS: 1.3324° N, 103.6987° E</span>
                <a
                  href="https://maps.google.com/?q=3+Soon+Lee+St,+%2305-30,+Singapore+627606"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#092419] hover:bg-[#E25822] text-[#F7F4EC] hover:text-[#040D0A] text-[11px] uppercase tracking-wider transition-colors border border-[#143B2D]"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Right: Arrival & Parking Guidance (5 cols) */}
            <div className="lg:col-span-5 p-8 sm:p-10 space-y-6">
              <h3 className="text-xl font-serif-luxury font-bold text-[#F7F4EC]">
                Arrival &amp; Accessibility
              </h3>

              <div className="space-y-4 text-xs">
                <div className="border-l-2 border-[#E25822] pl-3.5 space-y-1">
                  <strong className="text-[#F7F4EC] uppercase tracking-wide block">By Private Motorcar</strong>
                  <p className="text-[#8DAFA0] leading-relaxed">
                    Direct access via Pan Island Expressway (PIE Exit 38) and Ayer Rajah Expressway (AYE Exit 20). Seamless ramp access directly to Level 5.
                  </p>
                </div>

                <div className="border-l-2 border-[#E25822] pl-3.5 space-y-1">
                  <strong className="text-[#F7F4EC] uppercase tracking-wide block">Dedicated Client Parking</strong>
                  <p className="text-[#8DAFA0] leading-relaxed">
                    Reserved VIP sheltered parking lots situated directly adjacent to unit #05-30 for effortless vehicle inspection.
                  </p>
                </div>

                <div className="border-l-2 border-[#E25822] pl-3.5 space-y-1">
                  <strong className="text-[#F7F4EC] uppercase tracking-wide block">Mass Rapid Transit (MRT)</strong>
                  <p className="text-[#8DAFA0] leading-relaxed">
                    Pioneer MRT Station (EW28) and Boon Lay MRT Station (EW27) are within a short 5-minute commute.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`tel:${COMPANY_DETAILS.phoneClean}`}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#E25822] hover:text-white transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Call concierge for arrival gate assistance</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FINAL CONTACT CTA
          ========================================================================= */}
      <section className="py-24 sm:py-32 bg-[#040D0A] text-center border-t border-[#123328]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <span className="text-xs uppercase tracking-[0.3em] text-[#E25822] font-semibold block">
            CONFIDENTIAL ACQUISITION
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif-luxury font-bold text-[#F7F4EC] tracking-wide uppercase leading-tight">
            READY TO FIND YOUR NEXT AUTOMOBILE?
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4">
            <a
              href={`tel:${COMPANY_DETAILS.phoneClean}`}
              className="w-full sm:w-auto px-8 py-4 bg-[#E25822] hover:bg-[#F27A45] text-[#040D0A] font-semibold text-xs tracking-[0.25em] uppercase transition-all duration-300 shadow-xl flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>CALL {COMPANY_DETAILS.phone}</span>
            </a>

            <button
              onClick={() => {
                window.scrollTo({ top: 400, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-4 bg-[#0A261D] hover:bg-[#123B2D] text-[#F7F4EC] border border-[#164235] hover:border-[#E25822] font-semibold text-xs tracking-[0.25em] uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4 text-[#E25822]" />
              <span>SEND AN ENQUIRY</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
