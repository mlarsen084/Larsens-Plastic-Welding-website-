import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import QuoteForm from './components/QuoteForm';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <Header />
      <main>
        <Hero />
        {/* Quote Form moved to top */}
        <QuoteForm />
        {/* Gallery moved to sit underneath Quote Form */}
        <Gallery />
        <Services />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;