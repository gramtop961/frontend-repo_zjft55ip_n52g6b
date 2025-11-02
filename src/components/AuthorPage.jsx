import React from 'react';
import { PenTool, Feather, FileText, Sparkles } from 'lucide-react';
import Publications from './Publications';

export default function AuthorPage() {
  return (
    <div className="bg-white text-slate-800">
      <section className="relative w-full overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex items-start gap-4">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500/10 text-pink-600">
              <PenTool className="h-6 w-6" />
            </span>
            <div>
              <h1 className="text-3xl font-bold md:text-4xl">Author & Communicator</h1>
              <p className="mt-2 max-w-2xl text-slate-600">Books, essays, and public writing that translate complex mechanical concepts into engaging stories.</p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="mb-2 inline-flex items-center gap-2 font-semibold text-slate-900"><Feather className="h-4 w-4 text-pink-600" /> Latest Book</h3>
              <p className="text-sm text-slate-600">Designing Motion: Principles of Efficient Machines — a practical guide to mechanisms, actuators, and control.</p>
              <a href="#" className="mt-3 inline-block text-sm font-semibold text-pink-600 hover:text-pink-700">Preview chapter →</a>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="mb-2 inline-flex items-center gap-2 font-semibold text-slate-900"><Sparkles className="h-4 w-4 text-pink-600" /> Newsletter</h3>
              <p className="text-sm text-slate-600">Monthly notes on engineering practice, research habits, and teaching with real-world constraints.</p>
              <a href="#" className="mt-3 inline-block text-sm font-semibold text-pink-600 hover:text-pink-700">Subscribe →</a>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="mb-2 inline-flex items-center gap-2 font-semibold text-slate-900"><FileText className="h-4 w-4 text-pink-600" /> Essays</h3>
              <p className="text-sm text-slate-600">On heat, force, and failure — long-form essays blending theory, field notes, and stories from the line.</p>
              <a href="#" className="mt-3 inline-block text-sm font-semibold text-pink-600 hover:text-pink-700">Read essays →</a>
            </div>
          </div>
        </div>
      </section>

      <Publications />

      <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-pink-50 to-emerald-50 p-6">
          <h3 className="text-xl font-semibold text-slate-900">Media & Speaking</h3>
          <p className="mt-2 max-w-2xl text-slate-700">I love talking about mechanical design, reliability, and how to teach engineering through real constraints. Invite me to your podcast, conference, or classroom.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href="mailto:hello@drhayes.dev" className="rounded-md bg-pink-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-pink-700">Book an interview</a>
            <a href="#" className="rounded-md border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50">Speaker kit</a>
          </div>
        </div>
      </section>
    </div>
  );
}
