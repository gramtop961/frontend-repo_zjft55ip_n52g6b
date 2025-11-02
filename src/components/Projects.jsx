import React from 'react';
import { Cog, Wrench, Cpu, Award } from 'lucide-react';

const projects = [
  {
    icon: Cog,
    title: 'Automated Valve Test Rig',
    summary: 'Designed a modular test platform reducing calibration time by 38% across product lines.',
  },
  {
    icon: Wrench,
    title: 'Predictive Maintenance Rollout',
    summary: 'Deployed sensor suite and analytics that cut unplanned downtime by 22% in year one.',
  },
  {
    icon: Cpu,
    title: 'Embedded Control for Energy Recovery',
    summary: 'Led firmware and control loop design for a high‑efficiency recovery system.',
  },
  {
    icon: Award,
    title: 'Patent: Thermal Management Module',
    summary: 'Filed IP for compact heat‑exchange architecture used in next‑gen actuators.',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-white text-slate-900">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold md:text-4xl">Industry Highlights</h2>
          <p className="mt-2 max-w-2xl text-slate-600">Selected work from the engineering company side — turning research into shipped systems.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, idx) => (
            <div key={idx} className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                <p.icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-semibold text-slate-900">{p.title}</h3>
                <p className="text-slate-600">{p.summary}</p>
              </div>
            </div>
          ))}
        </div>

        <div id="contact" className="mt-12 rounded-2xl border border-slate-200 bg-gradient-to-br from-emerald-50 to-cyan-50 p-6 text-slate-900">
          <h3 className="text-xl font-semibold">Let’s collaborate</h3>
          <p className="mt-1 text-slate-700">I partner with teams on complex mechanical systems, research, and technology transfer.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href="mailto:hello@drhayes.dev" className="rounded-md bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700">Email me</a>
            <a href="#" className="rounded-md border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50">Download CV</a>
          </div>
        </div>
      </div>
    </section>
  );
}
