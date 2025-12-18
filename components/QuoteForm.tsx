import React, { useState, FormEvent, ChangeEvent } from 'react';
import { Send, Upload, Info } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const QuoteForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [fileName, setFileName] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Construct the mailto link
    const subject = encodeURIComponent(`Quote Request: ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Larsen's Plastic Welding,\n\nI would like a quote for a repair.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\n[Please find the image attached to this email]`
    );
    
    const mailtoLink = `mailto:${COMPANY_INFO.email}?subject=${subject}&body=${body}`;
    
    // Alert the user about the image
    if (fileName) {
      alert(`Because this is a direct email link, your browser will open your default email client now.\n\nIMPORTANT: Please remember to manually attach the photo ("${fileName}") to the email before sending!`);
    }
    
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
            Send us a message with details about your damage. Upload a photo so we can give you an accurate assessment.
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
                  value={formData.message}
                  onChange={handleChange}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-larsens-blue focus:border-larsens-blue border border-gray-300 rounded-md bg-white"
                />
              </div>
            </div>

            {/* File Upload Section */}
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Upload Image (JPG/PNG)
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:bg-gray-50 transition-colors bg-white">
                <div className="space-y-1 text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600 justify-center">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-larsens-blue hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-larsens-blue"
                    >
                      <span>Upload a file</span>
                      <input 
                        id="file-upload" 
                        name="file-upload" 
                        type="file" 
                        className="sr-only" 
                        accept="image/png, image/jpeg, image/jpg"
                        onChange={handleFileChange}
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    {fileName ? <span className="text-green-600 font-semibold">{fileName}</span> : "PNG, JPG up to 10MB"}
                  </p>
                </div>
              </div>
              <div className="mt-2 flex items-start gap-2 text-xs text-gray-500 bg-blue-50 p-2 rounded">
                 <Info className="w-4 h-4 flex-shrink-0 text-blue-600" />
                 <p>Clicking submit will open your email client. Please attach the selected photo to the email before sending.</p>
              </div>
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-larsens-blue hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-larsens-blue transition-colors"
              >
                Send Request
                <Send className="ml-2 h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuoteForm;