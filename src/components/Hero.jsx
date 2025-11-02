import React, { useEffect, useMemo, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  // Motion state driven by scroll and pointer
  const [scrollY, setScrollY] = useState(0);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const rafRef = useRef(0);
  const lastScrollRef = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      lastScrollRef.current = window.scrollY || window.pageYOffset || 0;
      if (!rafRef.current) {
        rafRef.current = window.requestAnimationFrame(() => {
          setScrollY(lastScrollRef.current);
          rafRef.current = 0;
        });
      }
    };

    const onPointerMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const nx = (e.clientX / innerWidth) * 2 - 1; // -1 .. 1
      const ny = (e.clientY / innerHeight) * 2 - 1; // -1 .. 1
      setPointer({ x: nx, y: ny });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('mousemove', onPointerMove);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onPointerMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Compute subtle parallax + tilt from state
  const transformStyle = useMemo(() => {
    const maxParallax = 60; // px translateY
    const maxScaleBoost = 0.06; // up to +6%
    const scrollProgress = Math.min(scrollY / 600, 1);
    const translateY = scrollProgress * maxParallax;
    const scale = 1 + scrollProgress * maxScaleBoost;

    // Pointer-based tilt (subtle)
    const tiltX = -pointer.y * 4; // deg
    const tiltY = pointer.x * 4; // deg

    return {
      transform: `translateY(${translateY}px) scale(${scale}) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
      transformStyle: 'preserve-3d',
      willChange: 'transform',
      transition: 'transform 60ms linear',
    } as React.CSSProperties;
  }, [scrollY, pointer.x, pointer.y]);

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-white text-slate-900">
      {/* 3D Scene Container with motion */}
      <div className="absolute inset-0 origin-center" style={transformStyle}>
        <Spline
          scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays for contrast; pointer-events disabled to keep scene interactive */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/60" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[90vh] max-w-6xl flex-col items-start justify-center px-6 py-24">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium tracking-wide text-emerald-700">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Professor • Author • Engineering Lead
        </span>
        <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
          Dr. Jordan Hayes
        </h1>
        <p className="mt-3 max-w-2xl text-base text-slate-700 md:text-lg">
          A dynamic blend of research and product engineering. Exploring systems, design, and the future of human‑centered technology.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="#/author#contact"
            className="rounded-md bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
          >
            Get in touch
          </a>
          <a
            href="#/work"
            className="rounded-md border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50"
          >
            Explore work
          </a>
        </div>
      </div>
    </section>
  );
}
