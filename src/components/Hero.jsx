import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-white text-slate-900">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* Subtle gradient overlay to improve text contrast; doesn't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent" />

      <div className="relative mx-auto flex min-h-[80vh] max-w-6xl flex-col items-start justify-center px-6 py-20">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium tracking-wide text-emerald-700">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Professor • Author • Engineering Lead
        </span>
        <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
          Dr. Jordan Hayes
        </h1>
        <p className="mt-3 max-w-2xl text-base text-slate-700 md:text-lg">
          Bridging academia and industry with clear writing and practical engineering. I design efficient systems, publish peer‑reviewed research, and ship products at scale.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a href="#/author#contact" className="rounded-md bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700">
            Get in touch
          </a>
          <a href="#/author" className="rounded-md border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50">
            Explore writing
          </a>
        </div>
      </div>
    </section>
  );
}
