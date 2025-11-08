import React from 'react';

export default function CTA() {
  return (
    <section id="demo" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-tr from-indigo-600 to-fuchsia-600 p-1 shadow-lg ring-1 ring-black/5">
          <div className="rounded-2xl bg-white p-8 sm:p-12">
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <h3 className="text-2xl font-semibold tracking-tight text-slate-900">Ready to build your first form?</h3>
                <p className="mt-2 max-w-prose text-slate-700">The admin dashboard and public renderer are wired for API integration. Swap the base URL and you can connect to any backend.</p>
              </div>
              <div className="flex gap-3 w-full sm:w-auto">
                <button className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 text-white shadow hover:bg-indigo-500 w-full sm:w-auto">Open Admin</button>
                <button className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-slate-700 shadow-sm hover:bg-slate-50 w-full sm:w-auto">Try a Form</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
