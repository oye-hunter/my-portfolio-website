"use client";

import { FormEvent, useState } from "react";
import { contact } from "./portfolio-data";

const initialFormState = {
  name: "",
  email: "",
  message: "",
};

export function Contact() {
  const [form, setForm] = useState(initialFormState);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio Inquiry from ${form.name || "Website Visitor"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`,
    );

    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:px-8 lg:px-12">
      <div className="mb-2 font-[var(--font-mono)] text-[0.75rem] uppercase tracking-[0.3em] text-[#b07800] before:content-['>_'] before:text-[#39ff14]">
        05 / Contact
      </div>
      <h2 className="mb-12 font-[var(--font-display)] text-[clamp(2.5rem,5vw,4rem)] leading-none tracking-[0.06em] text-[#ffb000] drop-shadow-[0_0_20px_rgba(255,208,64,0.5)]">
        PING ME
      </h2>
      <hr className="mb-12 border-t border-dashed border-[#3a2a00]" />

      <div className="grid gap-12 lg:grid-cols-2">
        <div data-reveal className="reveal">
          <p className="mb-8 text-[1rem] text-[#b07800]">
            If you are building a SaaS product, validating an MVP, or scaling an existing system, I can
            contribute across architecture, implementation, and delivery.
          </p>

          <div className="flex flex-col gap-3">
            <a
              className="flex items-center gap-3 border border-transparent px-4 py-3 font-[var(--font-mono)] text-[0.85rem] tracking-[0.08em] text-[#b07800] transition-colors duration-200 hover:border-[#3a2a00] hover:text-[#ffb000]"
              href={`mailto:${contact.email}`}
            >
              <span className="w-5 text-center text-[1.1rem] text-[#39ff14]">@</span> {contact.email}
            </a>
            <a
              className="flex items-center gap-3 border border-transparent px-4 py-3 font-[var(--font-mono)] text-[0.85rem] tracking-[0.08em] text-[#b07800] transition-colors duration-200 hover:border-[#3a2a00] hover:text-[#ffb000]"
              href={contact.github}
              target="_blank"
              rel="noreferrer"
            >
              <span className="w-5 text-center text-[1.1rem] text-[#39ff14]">/</span> github.com/oye-hunter
            </a>
            <a
              className="flex items-center gap-3 border border-transparent px-4 py-3 font-[var(--font-mono)] text-[0.85rem] tracking-[0.08em] text-[#b07800] transition-colors duration-200 hover:border-[#3a2a00] hover:text-[#ffb000]"
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <span className="w-5 text-center text-[1.1rem] text-[#39ff14]">in</span> linkedin.com/in/hassan814
            </a>
            <a
              className="flex items-center gap-3 border border-transparent px-4 py-3 font-[var(--font-mono)] text-[0.85rem] tracking-[0.08em] text-[#b07800] transition-colors duration-200 hover:border-[#3a2a00] hover:text-[#ffb000]"
              href={contact.resume}
              download
            >
              <span className="w-5 text-center text-[1.1rem] text-[#39ff14]">↓</span> Download Resume
            </a>
          </div>
        </div>

        <form data-reveal className="reveal flex flex-col gap-5" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label className="font-[var(--font-mono)] text-[0.72rem] uppercase tracking-[0.2em] text-[#b07800] before:content-['>_'] before:text-[#39ff14]" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
              placeholder="Your name"
              required
              className="border border-[#3a2a00] bg-[#0f0c00] px-4 py-3 font-[var(--font-body)] text-[0.95rem] text-[#ffb000] outline-none transition-colors duration-200 placeholder:text-[#b07800] focus:border-[#b07800] focus:shadow-[0_0_12px_rgba(255,176,0,0.1)]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-[var(--font-mono)] text-[0.72rem] uppercase tracking-[0.2em] text-[#b07800] before:content-['>_'] before:text-[#39ff14]" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
              placeholder="you@company.com"
              required
              className="border border-[#3a2a00] bg-[#0f0c00] px-4 py-3 font-[var(--font-body)] text-[0.95rem] text-[#ffb000] outline-none transition-colors duration-200 placeholder:text-[#b07800] focus:border-[#b07800] focus:shadow-[0_0_12px_rgba(255,176,0,0.1)]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-[var(--font-mono)] text-[0.72rem] uppercase tracking-[0.2em] text-[#b07800] before:content-['>_'] before:text-[#39ff14]" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
              placeholder="Tell me about your product, scope, and timeline"
              required
              className="min-h-[130px] border border-[#3a2a00] bg-[#0f0c00] px-4 py-3 font-[var(--font-body)] text-[0.95rem] text-[#ffb000] outline-none transition-colors duration-200 placeholder:text-[#b07800] focus:border-[#b07800] focus:shadow-[0_0_12px_rgba(255,176,0,0.1)]"
            />
          </div>

          <button
            className="mt-2 inline-flex w-fit items-center justify-center border border-[#ffb000] px-8 py-3 font-[var(--font-mono)] text-[0.85rem] uppercase tracking-[0.15em] text-[#ffb000] transition-colors duration-200 hover:bg-[#ffb000] hover:text-[#0a0800] hover:shadow-[0_0_20px_rgba(255,208,64,0.5)]"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
