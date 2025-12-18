import React from 'react';
import { ArrowRight, Truck } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-larsens-dark overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://raw.githubusercontent.com/mlarsen084/larsens-plastic-welding/refs/heads/main/7.jpg"
          alt="Workshop welding environment"
        />
        <div className="absolute inset-0 bg-larsens-blue opacity-85 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto py-20 px-4 sm:py-28 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
          Expert Plastic Welding <br />
          <span className="text-blue-300">Invercargill & Southland</span>
        </h1>
        <p className="mt-6 text-xl text-gray-100 max-w-3xl">
          Anything plastic can be repaired. We fix car bumpers, agricultural tanks, calf feeders, motorbikes, household items, and more. 
          Bring your broken plastics to us, or we can come to your farm for on-site repairs. <strong className="text-white">Call Gary now on {COMPANY_INFO.phone}.</strong>
        </p>
        
        <div className="mt-8 flex items-center text-blue-200 gap-2">
            <Truck className="w-6 h-6" />
            <span className="font-semibold text-lg">Mobile Service Available for Farms & Large Items</span>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-larsens-blue bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10 shadow-xl transition-transform hover:scale-105"
          >
            Get a Free Quote
            <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
          </a>
          <a
            href="#gallery"
            className="inline-flex items-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white/10 md:py-4 md:text-lg md:px-10 transition-colors"
          >
            View Our Work
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;