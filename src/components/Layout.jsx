import React from 'react';
import { BookOpen, Home, Briefcase, PenTool } from 'lucide-react';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <header className="sticky top-0 z-20 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#/" className="flex items-center gap-2 font-semibold text-slate-900">
            <BookOpen className="h-5 w-5 text-emerald-600" /> Dr. Jordan Hayes
          </a>
          <nav className="flex items-center gap-1 text-sm font-medium">
            <a href="#/" className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100"><Home className="h-4 w-4" /> Home</a>
            <a href="#/author" className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100"><PenTool className="h-4 w-4" /> Author</a>
            <a href="#/work" className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100"><Briefcase className="h-4 w-4" /> Work</a>
            <a href="#/author#contact" className="ml-1 rounded-md bg-emerald-500 px-3 py-2 text-white hover:bg-emerald-600">Contact</a>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="mt-16 border-t border-slate-200 bg-white py-8 text-center text-slate-500">
        © {new Date().getFullYear()} Dr. Jordan Hayes — Professor, Author, and Engineering Lead
      </footer>
    </div>
  );
}
