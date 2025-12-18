import React from 'react';
import { SERVICES } from '../constants';
import { CheckCircle } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div id="services" className="py-24 bg-gray-50 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-larsens-blue font-semibold tracking-wide uppercase">Services</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Southland Plastic Welding Services
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            We specialize in professional plastic repairs to save you money. Our welds restore the integrity of your equipment using advanced polyethylene welding techniques.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, index) => (
              <div
                key={service.title}
                className={`relative group p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-larsens-blue rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ${index === 0 ? 'bg-larsens-blue text-white ring-4 ring-blue-100 transform md:-translate-y-2' : 'bg-white text-gray-900'}`}
              >
                <div>
                  <span className={`rounded-lg inline-flex p-3 ring-4 ring-white transition-colors duration-300 ${index === 0 ? 'bg-white text-larsens-blue' : 'bg-blue-50 text-larsens-blue group-hover:bg-larsens-blue group-hover:text-white'}`}>
                    <service.icon className="h-8 w-8" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-8">
                  <h3 className={`text-xl font-bold ${index === 0 ? 'text-white' : 'text-gray-900'}`}>
                    <span className="absolute inset-0" aria-hidden="true" />
                    {service.title}
                  </h3>
                  <p className={`mt-2 text-base ${index === 0 ? 'text-blue-100' : 'text-gray-500'}`}>
                    {service.description}
                  </p>
                </div>
                {index === 0 && (
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white text-larsens-blue">
                      Top Rated
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-20 border-t border-gray-200 pt-16">
            <h3 className="text-2xl font-bold text-center mb-10 text-gray-900">Why Use Professional Plastic Welding?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                    <div className="bg-green-100 p-3 rounded-full mb-4">
                        <CheckCircle className="text-green-600 w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-lg">Massive Cost Savings</h4>
                    <p className="text-gray-500 mt-2">Professional repairs cost significantly less than expensive replacement parts.</p>
                </div>
                <div className="flex flex-col items-center">
                     <div className="bg-green-100 p-3 rounded-full mb-4">
                        <CheckCircle className="text-green-600 w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-lg">Environmental Impact</h4>
                    <p className="text-gray-500 mt-2">Help the planet by repairing and reusing instead of contributing to landfill waste.</p>
                </div>
                <div className="flex flex-col items-center">
                     <div className="bg-green-100 p-3 rounded-full mb-4">
                        <CheckCircle className="text-green-600 w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-lg">Structural Strength</h4>
                    <p className="text-gray-500 mt-2">Gary's welding techniques fuse the plastic back together, creating a permanent, watertight bond.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Services;