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
    <section id="projects" className="relative w-full bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold md:text-4xl">Industry Highlights</h2>
          <p className="mt-2 max-w-2xl text-slate-300">Selected work from the engineering company side—turning research into shipped systems.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, idx) => (
            <div key={idx} className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
                <p.icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-semibold text-white">{p.title}</h3>
                <p className="text-slate-300">{p.summary}</p>
              </div>
            </div>
          ))}
        </div>

        <div id="contact" className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 p-6 text-slate-100">
          <h3 className="text-xl font-semibold">Let’s collaborate</h3>
          <p className="mt-1 text-slate-200">I partner with teams on complex mechanical systems, research, and technology transfer.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href="mailto:hello@drhayes.dev" className="rounded-md bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-emerald-400">Email me</a>
            <a href="#" className="rounded-md border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10">Download CV</a>
          </div>
        </div>
      </div>
    </section>
  );
}
