import React from 'react';
import Projects from './Projects';

export default function WorkPage() {
  return (
    <div className="bg-white text-slate-800">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-3xl font-bold md:text-4xl">Engineering Work</h1>
        <p className="mt-2 max-w-2xl text-slate-600">From R&D to production — selected projects, systems, and deployments crafted in industry.</p>
      </section>
      <Projects />
    </div>
  );
}
