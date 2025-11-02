import React from 'react';
import Hero from './components/Hero';
import DualProfile from './components/DualProfile';
import Publications from './components/Publications';
import Projects from './components/Projects';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero with interactive Spline */}
      <Hero />

      {/* Split identity section */}
      <DualProfile />

      {/* Academic output */}
      <Publications />

      {/* Industry work + contact */}
      <Projects />

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950/80 py-8 text-center text-slate-400">
        <p>
          © {new Date().getFullYear()} Dr. Jordan Hayes — Mechanical Professor & Engineering Lead
        </p>
      </footer>
    </div>
  );
}

export default App;
