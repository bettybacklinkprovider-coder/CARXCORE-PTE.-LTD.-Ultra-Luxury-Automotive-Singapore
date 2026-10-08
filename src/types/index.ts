export type PageId = 'home' | 'our-cars' | 'about-us' | 'contact-us';

export interface Vehicle {
  id: string;
  make: string;
  model: string;
  series?: string;
  year: number;
  mileage: number; // in km
  transmission: string;
  fuelType: 'Petrol' | 'Hybrid' | 'Electric' | 'Twin-Turbo V8' | 'Twin-Turbo V12';
  bodyType: 'Coupe' | 'Sedan / Limousine' | 'SUV' | 'Grand Tourer' | 'Sports Car';
  priceDisplay: string;
  priceNumeric: number; // in SGD
  isEnquireOnly?: boolean;
  engine: string;
  power: string;
  torque: string;
  acceleration: string; // 0-100 km/h
  topSpeed: string;
  exteriorColor: string;
  interiorColor: string;
  primaryImage: string;
  galleryImages: string[];
  features: string[];
  overview: string;
  omv?: string;
  coeExpiry?: string;
  isFeatured?: boolean;
  isSignatureCollection?: boolean;
}

export interface FilterState {
  brand: string;
  model: string;
  maxPrice: number;
  year: string;
  bodyType: string;
  transmission: string;
  fuelType: string;
  searchQuery: string;
}

export interface EnquiryFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  vehicleOfInterest: string;
  preferredContactMethod: 'WhatsApp' | 'Phone Call' | 'Email';
  message: string;
}
