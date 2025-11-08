import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import CTA from './components/CTA';

function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-white py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} FMS. All rights reserved.</p>
          <div className="text-sm text-slate-600">
            Built for web, API, and Android — deployable to cPanel and ready for Replit.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-slate-50 text-slate-900">
      <Navbar />
      <Hero />
      <FeatureGrid />
      <CTA />
      <Footer />
    </div>
  );
}
