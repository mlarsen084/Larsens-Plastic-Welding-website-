import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="bg-larsens-blue py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-white text-center mb-16 sm:text-4xl">
          Trusted by Locals
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="bg-white rounded-xl p-8 shadow-xl relative">
              {/* Quote icon styling */}
              <div className="absolute -top-4 -left-4 bg-yellow-400 rounded-full p-2 shadow-lg">
                 <span className="text-2xl font-serif font-bold text-white leading-none">"</span>
              </div>
              
              <div className="flex mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 text-lg italic mb-6">
                "{t.quote}"
              </p>
              <div className="border-t pt-4 border-gray-100">
                <p className="font-bold text-gray-900">{t.name}</p>
                <p className="text-sm text-gray-500">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;