import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* Subtle gradient overlay to improve text contrast; doesn't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent" />

      <div className="relative mx-auto flex min-h-[80vh] max-w-6xl flex-col items-start justify-center px-6 py-20">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-slate-200 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Available for speaking, research collaboration, and consulting
        </span>
        <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
          Dr. Jordan Hayes
        </h1>
        <p className="mt-3 max-w-2xl text-base text-slate-200 md:text-lg">
          Mechanical Professor and Engineering Lead bridging academia and industry. I design efficient systems, publish peer‑reviewed research, and deliver products at scale.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a href="#contact" className="rounded-md bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-emerald-400">
            Get in touch
          </a>
          <a href="#publications" className="rounded-md border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10">
            View publications
          </a>
        </div>
      </div>
    </section>
  );
}
