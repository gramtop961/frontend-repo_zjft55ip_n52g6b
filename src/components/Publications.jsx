import React from 'react';
import { FileText, Award } from 'lucide-react';

const items = [
  {
    title: 'Hybrid Cooling Strategies for High‑Power Density Systems',
    venue: 'Journal of Mechanical Systems, 2024',
    link: '#',
  },
  {
    title: 'Topology Optimization in Lightweight Actuator Housings',
    venue: 'International Conference on Design Engineering, 2023',
    link: '#',
  },
  {
    title: 'Data‑Driven Fault Detection for Rotating Machinery',
    venue: 'Mechanical Intelligence Letters, 2022',
    link: '#',
  },
];

export default function Publications() {
  return (
    <section id="publications" className="relative w-full bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Selected Publications</h2>
            <p className="mt-2 max-w-2xl text-slate-300">Representative work spanning thermo‑fluids, machine design, and intelligent maintenance.</p>
          </div>
          <span className="hidden rounded-full border border-yellow-400/20 bg-yellow-500/10 px-3 py-1 text-sm font-medium text-yellow-300 md:block">
            <span className="inline-flex items-center gap-2"><Award className="h-4 w-4" /> Best Paper Awards</span>
          </span>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {items.map((p, idx) => (
            <a key={idx} href={p.link} className="group flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-emerald-400/40">
              <span className="mt-1 inline-flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
                <FileText className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-semibold text-white group-hover:text-emerald-300">{p.title}</h3>
                <p className="text-sm text-slate-300">{p.venue}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
