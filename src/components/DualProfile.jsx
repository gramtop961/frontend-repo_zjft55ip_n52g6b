import React from 'react';
import { BookOpen, Briefcase, Beaker, Cog } from 'lucide-react';

export default function DualProfile() {
  return (
    <section id="about" className="relative w-full bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10">
          <h2 className="text-3xl font-bold md:text-4xl">Two Worlds, One Mission</h2>
          <p className="mt-2 max-w-2xl text-slate-300">
            I split my time between the classroom and the factory floor—advancing theory while shipping real products.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Academic card */}
          <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:border-emerald-400/40">
            <div className="mb-4 flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
                <BookOpen className="h-5 w-5" />
              </span>
              <h3 className="text-xl font-semibold">Academic</h3>
            </div>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-3"><Beaker className="mt-1 h-5 w-5 text-emerald-400" /> Thermo‑fluids and machine design research</li>
              <li className="flex items-start gap-3"><BookOpen className="mt-1 h-5 w-5 text-emerald-400" /> 40+ peer‑reviewed papers and invited talks</li>
              <li className="flex items-start gap-3"><Cog className="mt-1 h-5 w-5 text-emerald-400" /> Curriculum designer for advanced manufacturing</li>
            </ul>
          </div>

          {/* Industry card */}
          <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:border-emerald-400/40">
            <div className="mb-4 flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
                <Briefcase className="h-5 w-5" />
              </span>
              <h3 className="text-xl font-semibold">Industry</h3>
            </div>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-3"><Cog className="mt-1 h-5 w-5 text-emerald-400" /> Engineering lead at a high‑growth manufacturing firm</li>
              <li className="flex items-start gap-3"><Briefcase className="mt-1 h-5 w-5 text-emerald-400" /> Patents in energy systems and automation</li>
              <li className="flex items-start gap-3"><Beaker className="mt-1 h-5 w-5 text-emerald-400" /> Bridging R&D to production with rigorous validation</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
