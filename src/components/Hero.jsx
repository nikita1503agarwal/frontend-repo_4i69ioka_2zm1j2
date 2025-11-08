import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Q3m8uYh1pIBRz7Xo/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
            Form Management System
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            Create, publish, and manage forms with a beautiful admin dashboard, secure API, and multi-platform access.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#features" className="inline-flex items-center rounded-lg bg-indigo-600 px-4 py-2.5 text-white shadow hover:bg-indigo-500">
              Explore Features
            </a>
            <a href="#demo" className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-700 shadow-sm hover:bg-slate-50">
              Live Demo
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
