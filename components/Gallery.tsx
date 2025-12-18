import React from 'react';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  return (
    <div id="gallery" className="bg-white py-16 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our Work
          </h2>
          <p className="mt-4 text-lg text-gray-500">
             Examples of plastic welding repairs on tanks, industrial equipment, and automotive parts in Invercargill.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((img, idx) => (
            <div key={idx} className="relative group overflow-hidden rounded-lg shadow-lg aspect-[4/3]">
              <img 
                src={img.src} 
                alt={`${img.title} - Plastic Repair Example`}
                loading="lazy"
                width="800"
                height="600"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                   <span className="text-white font-bold text-lg block">{img.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;