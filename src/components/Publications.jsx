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
    <section id="publications" className="relative w-full bg-white text-slate-900">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Selected Publications</h2>
            <p className="mt-2 max-w-2xl text-slate-600">Representative work spanning thermo‑fluids, machine design, and intelligent maintenance.</p>
          </div>
          <span className="hidden rounded-full border border-yellow-300/70 bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-700 md:block">
            <span className="inline-flex items-center gap-2"><Award className="h-4 w-4" /> Best Paper Awards</span>
          </span>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {items.map((p, idx) => (
            <a key={idx} href={p.link} className="group flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
              <span className="mt-1 inline-flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                <FileText className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-semibold text-slate-900 group-hover:text-emerald-700">{p.title}</h3>
                <p className="text-sm text-slate-600">{p.venue}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
