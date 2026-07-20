import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-between">
      <header className="bg-slate-900 border-b border-slate-800 py-4 px-6 flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-tight text-emerald-400">GRID ESTIMATIONS</h1>
        <nav className="space-x-6 text-sm font-medium">
          <a href="#" className="hover:text-emerald-400 transition">Home</a>
          <a href="#" className="hover:text-emerald-400 transition">Services</a>
          <a href="#" className="hover:text-emerald-400 transition">Solar Docs</a>
          <a href="#" className="hover:text-emerald-400 transition">Our Trades</a>
          <a href="#" className="hover:text-emerald-400 transition">Contact</a>
        </nav>
      </header>
      <main className="flex-grow max-w-7xl mx-auto px-6 py-20 text-center">
        <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
          Construction & Solar Engineering
        </span>
        <h2 className="text-4xl md:text-6xl font-black mt-6 mb-6">
          Precision Estimation & <span className="text-emerald-400">Solar Documentation</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg mb-10">
          Professional material takeoffs, PE stamps, and AHJ compliance for contractors across North America.
        </p>
        <a href="#contact" className="bg-emerald-500 text-slate-950 font-bold px-8 py-4 rounded-xl hover:bg-emerald-400 transition shadow-lg inline-block">
          Get Estimate Now →
        </a>
      </main>
      <footer className="bg-slate-900 border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        &copy; 2026 Grid Estimations. All rights reserved.
      </footer>
    </div>
  );
}
