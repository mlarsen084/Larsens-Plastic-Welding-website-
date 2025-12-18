import React, { useState, FormEvent, ChangeEvent } from 'react';
import { Send, Camera, Info } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const QuoteForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Construct the mailto link
    const subject = encodeURIComponent(`Quote Request: ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Larsen's Plastic Welding,\n\nI would like a quote for a repair.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\n[Note: I will attach photos to this email manually]`
    );
    
    const mailtoLink = `mailto:${COMPANY_INFO.email}?subject=${subject}&body=${body}`;
    
    // Alert the user about the photos
    alert(`Your email client will now open.\n\nIMPORTANT: Please remember to attach photos of the damage to the email so we can give you an accurate quote!`);
    
    window.location.href = mailtoLink;
  };

  return (
    <div id="contact" className="bg-gray-100 py-24 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24 scroll-mt-28">
      <div className="relative max-w-xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Request a Quote
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            Send Gary a message with details about your repair. We'll get back to you as soon as possible.
          </p>
        </div>
        <div className="mt-12">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div className="sm:col-span-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-larsens-blue focus:border-larsens-blue border border-gray-300 rounded-md bg-white"
                />
              </div>
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <div className="mt-1">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-larsens-blue focus:border-larsens-blue border border-gray-300 rounded-md bg-white"
                />
              </div>
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email (Optional)
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-larsens-blue focus:border-larsens-blue border border-gray-300 rounded-md bg-white"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message / Damage Description
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell us what needs fixing (e.g. car bumper crack, leaking water tank...)"
                  value={formData.message}
                  onChange={handleChange}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-larsens-blue focus:border-larsens-blue border border-gray-300 rounded-md bg-white"
                />
              </div>
            </div>

            {/* Disclaimer Section */}
            <div className="sm:col-span-2">
              <div className="bg-blue-50 border-l-4 border-larsens-blue p-4 rounded-r-md">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <Camera className="h-5 w-5 text-larsens-blue" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-blue-700 font-medium">
                      Want a faster quote?
                    </p>
                    <p className="text-sm text-blue-600 mt-1">
                      Please <strong>attach photos</strong> of the damage to your email after clicking the button below. Seeing the crack or break helps Gary provide an accurate price!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-4 border border-transparent rounded-md shadow-lg text-lg font-bold text-white bg-larsens-blue hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-larsens-blue transition-all transform hover:scale-[1.02]"
              >
                Send Quote Request
                <Send className="ml-2 h-5 w-5" />
              </button>
              <p className="mt-2 text-center text-xs text-gray-500 flex items-center justify-center gap-1">
                <Info size={12} /> This will open your default email app
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuoteForm;