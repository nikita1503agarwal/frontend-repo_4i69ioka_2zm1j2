import React from 'react';
import { Blocks, ListChecks, Shield, Upload, Users, Download } from 'lucide-react';

const features = [
  {
    icon: Blocks,
    title: 'Drag & Drop Builder',
    desc: 'Design complex forms with text, email, selects, files, and more.'
  },
  {
    icon: ListChecks,
    title: 'Submission Management',
    desc: 'Filter, review, and export submissions to CSV with one click.'
  },
  { icon: Upload, title: 'File Uploads', desc: 'Secure uploads up to 10MB with type validation.' },
  { icon: Users, title: 'Roles & Permissions', desc: 'Admin, editor, and user roles with granular access.' },
  { icon: Shield, title: 'Security First', desc: 'JWT auth, rate limiting, CSRF, and robust validation.' },
  { icon: Download, title: 'Export & Integrations', desc: 'Export data and connect with external tools.' }
];

export default function FeatureGrid() {
  return (
    <section id="features" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Everything you need</h2>
          <p className="mt-3 text-slate-700">Powerful tools to build, publish, and manage forms across web and mobile.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <div className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 ring-1 ring-inset ring-indigo-200">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">{title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
