import React, { useState } from 'react';
import { Menu, X, Phone, Facebook } from 'lucide-react';
import { COMPANY_INFO, LOGO_URL } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Get Quote', href: '#contact' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
  ];

  return (
    <nav className="bg-larsens-blue shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <a href="#" className="flex items-center gap-3 group">
                <img 
                  src={LOGO_URL} 
                  alt="Larsen's Plastic Welding - Invercargill & Southland" 
                  className="h-16 w-auto object-contain"
                />
              </a>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-blue-200 px-2 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href={COMPANY_INFO.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-200 transition-colors"
              aria-label="Visit our Facebook page"
            >
              <Facebook size={24} fill="currentColor" />
            </a>
            <a 
              href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}
              className="bg-white text-larsens-blue px-4 py-2 rounded-full flex items-center gap-2 hover:bg-gray-100 transition-colors shadow-lg font-bold"
            >
              <Phone size={16} />
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-200 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-larsens-blue border-t border-blue-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-white hover:text-blue-200 hover:bg-blue-800 px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </a>
            ))}
            <div className="flex justify-center py-4">
              <a 
                href={COMPANY_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-200"
              >
                <Facebook size={32} fill="currentColor" />
              </a>
            </div>
            <a 
              href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}
              className="w-full mt-4 bg-white text-larsens-blue px-4 py-3 rounded-md flex items-center justify-center gap-2 hover:bg-gray-100 font-bold"
            >
              <Phone size={20} />
              <span>Call {COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;