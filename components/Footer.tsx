import React from 'react';
import { MapPin, Phone, Mail, Facebook, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="space-y-4 md:col-span-2">
             <div className="flex flex-col items-start group">
                <span className="text-2xl font-black italic tracking-tighter text-white transform -skew-x-12">
                  Larsens
                </span>
                <span className="text-lg font-bold text-gray-300 uppercase tracking-widest leading-none -mt-1">
                  Plastic Welding
                </span>
              </div>
            <p className="text-gray-400 text-sm max-w-sm">
              Larsen's Plastic Welding provides high-quality <strong>plastic welding repairs in Invercargill</strong> and across the Southland region. Professional, reliable, and cost-effective solutions for automotive, agricultural, and industrial plastics.
            </p>
            <div className="pt-2">
              <a 
                href={COMPANY_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Facebook size={20} fill="currentColor" />
                <span>Follow us on Facebook</span>
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-wider uppercase text-gray-200">Contact Gary</h3>
            <ul className="space-y-3">
              <li>
                <a href={COMPANY_INFO.mapLink} target="_blank" rel="noopener noreferrer" className="flex items-start text-gray-400 hover:text-white transition-colors">
                  <MapPin className="h-6 w-6 mr-3 text-larsens-blue flex-shrink-0" />
                  <span>{COMPANY_INFO.address}</span>
                </a>
              </li>
              <li>
                <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`} className="flex items-center text-gray-400 hover:text-white transition-colors">
                  <Phone className="h-6 w-6 mr-3 text-larsens-blue flex-shrink-0" />
                  <span>{COMPANY_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center text-gray-400 hover:text-white transition-colors">
                  <Mail className="h-6 w-6 mr-3 text-larsens-blue flex-shrink-0" />
                  <span>{COMPANY_INFO.email}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Location/Internal Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-wider uppercase text-gray-200">Our Location</h3>
            <div className="bg-gray-800 h-32 rounded-lg flex items-center justify-center text-gray-500 overflow-hidden relative group">
               <img 
                 src="https://maps.googleapis.com/maps/api/staticmap?center=-46.413,168.353&zoom=14&size=300x150&sensor=false&key=YOUR_API_KEY_HERE" 
                 alt="Map showing 124 Joseph St, Invercargill" 
                 className="w-full h-full object-cover opacity-50 group-hover:opacity-75 transition-opacity"
                 onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/300x150?text=Invercargill+Location';
                 }}
               />
               <a href={COMPANY_INFO.mapLink} target="_blank" rel="noopener noreferrer" className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-3 py-1 text-sm rounded-full hover:bg-white/20 transition-all">
                     View on Google Maps
                  </button>
               </a>
            </div>
            <div className="pt-2">
              <a href="#" className="text-gray-500 hover:text-white text-xs flex items-center gap-1 transition-colors">
                <ArrowUp size={12} /> Back to top
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm gap-4">
          <p>&copy; {new Date().getFullYear()} Larsen's Plastic Welding. Invercargill, New Zealand.</p>
          <div className="flex gap-6">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#gallery" className="hover:text-white transition-colors">Repair Gallery</a>
            <a href="#contact" className="hover:text-white transition-colors">Free Quote</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;