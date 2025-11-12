"use client";

import React from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-500 ease-in-out">
      
      {/* ---------- HEADER ---------- */}
      <header className="sticky top-0 z-50 glass-effect border-b border-slate-200 dark:border-slate-700 shadow-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <h1 className="text-4xl font-bold gradient-text">📊 Sales Dashboard</h1>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Track and analyze sales performance across years
            </p>
          </div>

          <div className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold text-sm shadow-soft cursor-default">
            ⚡ Real-time Analytics
          </div>
        </div>
      </header>

      {/* ---------- MAIN CONTENT ---------- */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animation-fade-in">
        {children}
      </main>

      {/* ---------- FOOTER ---------- */}
      <footer className="border-t border-slate-200 dark:border-slate-700 bg-gradient-to-r from-slate-100/60 to-blue-50/60 dark:from-slate-900/70 dark:to-slate-800/70 backdrop-blur-md mt-16 transition-smooth">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">
            
            <div>
              <h4 className="font-bold text-lg mb-3">Product</h4>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li><a href="#" className="hover:text-sky-500 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-sky-500 transition-colors">Pricing</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li><a href="#" className="hover:text-sky-500 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-sky-500 transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-3">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li><a href="#" className="hover:text-sky-500 transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-sky-500 transition-colors">Terms</a></li>
              </ul>
            </div>

          </div>

          <div className="border-t border-slate-200 dark:border-slate-700 pt-6 text-center text-sm text-slate-600 dark:text-slate-400">
            <p>
              © 2024 <span className="font-semibold">Sales Dashboard</span>. Built with{" "}
              <span className="font-semibold">Next.js 15</span>,{" "}
              <span className="font-semibold">TypeScript</span>, and{" "}
              <span className="font-semibold">Tailwind CSS</span>.
            </p>
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-500">
              Atomic Design Architecture | Real-time Data Analytics
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
