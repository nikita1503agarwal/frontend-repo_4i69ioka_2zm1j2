import React from 'react';
import { Rocket, Settings, Users, FileText } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 w-full backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-600 to-fuchsia-600 text-white shadow ring-1 ring-black/5">
              <Rocket className="h-5 w-5" />
            </div>
            <span className="text-lg font-semibold tracking-tight">FMS</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
            <a href="#features" className="hover:text-indigo-600 transition-colors inline-flex items-center gap-2">
              <FileText className="h-4 w-4" /> Forms
            </a>
            <a href="#admin" className="hover:text-indigo-600 transition-colors inline-flex items-center gap-2">
              <Settings className="h-4 w-4" /> Admin
            </a>
            <a href="#users" className="hover:text-indigo-600 transition-colors inline-flex items-center gap-2">
              <Users className="h-4 w-4" /> Users
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <button className="hidden sm:inline-flex items-center rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50">
              Sign in
            </button>
            <button className="inline-flex items-center rounded-lg bg-indigo-600 px-3.5 py-2 text-sm font-medium text-white shadow hover:bg-indigo-500">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
