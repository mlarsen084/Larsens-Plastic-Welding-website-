import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand */}
          <div className="space-y-4">
             <div className="flex flex-col items-start group">
                <span className="text-2xl font-black italic tracking-tighter text-white transform -skew-x-12">
                  Larsens
                </span>
                <span className="text-lg font-bold text-gray-300 uppercase tracking-widest leading-none -mt-1">
                  Plastic Welding
                </span>
              </div>
            <p className="text-gray-400 text-sm max-w-xs">
              Providing top-quality plastic repair services to Invercargill and the Southland region. Professional, reliable, and cost-effective.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-wider uppercase text-gray-200">Contact Us</h3>
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

          {/* Hours/Map Placeholder */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold tracking-wider uppercase text-gray-200">Find Us</h3>
            <div className="bg-gray-800 h-40 rounded-lg flex items-center justify-center text-gray-500 overflow-hidden relative group">
               {/* Embed a static map image or link */}
               <img 
                 src="https://maps.googleapis.com/maps/api/staticmap?center=-46.413,168.353&zoom=15&size=400x200&sensor=false&key=YOUR_API_KEY_HERE" 
                 alt="Map Location" 
                 className="w-full h-full object-cover opacity-50 group-hover:opacity-75 transition-opacity"
                 onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x200?text=124+Joseph+St,+Invercargill';
                 }}
               />
               <a href={COMPANY_INFO.mapLink} target="_blank" rel="noopener noreferrer" className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full hover:bg-white/20 transition-all">
                     Open in Maps
                  </button>
               </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Larsen's Plastic Welding. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;