"use client";

import { useEffect, useState } from "react";
import { identity } from "./portfolio-data";

type HeroProps = {
  onOpenTerminal?: () => void;
};

const TYPEWRITER_PHRASES = [
  "Full-Stack Engineer for Scalable SaaS & AI Applications",
  "Architecting AI Agent Pipelines (Groq & Gemini LLMs)",
  "Building Next.js 16, React Native & .NET Core Backend Systems",
  "Optimizing Large-Scale TanStack Tables & Real-Time Data Streams",
];

export function Hero({ onOpenTerminal }: HeroProps) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = TYPEWRITER_PHRASES[phraseIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting && typedText.length < currentPhrase.length) {
      timer = setTimeout(() => {
        setTypedText(currentPhrase.slice(0, typedText.length + 1));
      }, 35);
    } else if (!isDeleting && typedText.length === currentPhrase.length) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2400);
    } else if (isDeleting && typedText.length > 0) {
      timer = setTimeout(() => {
        setTypedText(currentPhrase.slice(0, typedText.length - 1));
      }, 18);
    } else if (isDeleting && typedText.length === 0) {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % TYPEWRITER_PHRASES.length);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, phraseIndex]);

  return (
    <section id="hero" className="relative min-h-[90vh] sm:min-h-screen overflow-hidden flex items-center pt-24 pb-16 sm:py-0">
      <div className="relative z-20 mx-auto flex w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="ml-auto w-full max-w-4xl text-right max-md:ml-0 max-md:text-left">
          
          {/* Retro CRT Telemetry HUD Bar */}
          <div
            data-reveal
            className="reveal mb-4 flex flex-wrap items-center justify-end gap-2 sm:gap-3 font-[var(--font-mono)] text-[0.68rem] sm:text-[0.72rem] uppercase tracking-[0.18em] text-[#b07800] max-md:justify-start"
          >
            <span className="border border-[#39ff14]/50 bg-[#39ff14]/10 px-2.5 py-1 text-[#39ff14] flex items-center gap-1.5 transition-all duration-200 hover:border-[#39ff14] hover:bg-[#39ff14]/20 hover:shadow-[0_0_12px_#39ff14] cursor-default">
              <span className="h-1.5 w-1.5 rounded-full bg-[#39ff14] animate-ping" />
              STATUS: ONLINE
            </span>
            <span className="border border-[#3a2a00] bg-[#0f0c00] px-2.5 py-1 transition-all duration-200 hover:border-[#b07800] hover:text-[#ffb000] cursor-default">
              LOC: {identity.location}
            </span>
            <span className="border border-[#ffb000]/40 bg-[#ffb000]/10 px-2.5 py-1 text-[#ffb000] transition-all duration-200 hover:border-[#ffb000] hover:bg-[#ffb000]/20 hover:shadow-[0_0_12px_rgba(255,176,0,0.4)] cursor-default">
              AVAILABILITY: OPEN FOR CONTRACTS / SAAS
            </span>
          </div>

          <p
            data-reveal
            className="reveal text-xs sm:text-sm font-[var(--font-mono)] uppercase tracking-[0.24em] text-[#39ff14] transition-all duration-700"
          >
            $ initialize --profile hassan_mughal
          </p>

          <h1
            data-reveal
            className="reveal my-3 sm:my-4 text-[clamp(2.4rem,7.5vw,6.5rem)] leading-[0.95] sm:leading-[0.88] tracking-[-0.03em] font-[var(--font-display)] text-[#ffb000] drop-shadow-[0_0_30px_rgba(255,208,64,0.5)] transition-all duration-700 break-words hover:drop-shadow-[0_0_40px_rgba(255,208,64,0.8)]"
          >
            {identity.name}
          </h1>

          <h2
            data-reveal
            className="reveal mt-2 sm:mt-3 text-[clamp(0.95rem,3vw,1.35rem)] font-[var(--font-mono)] uppercase tracking-[0.07em] text-[#b07800] transition-all duration-700 min-h-[2.5rem]"
          >
            {typedText} <span className="animate-pulse text-[#39ff14]">█</span>
          </h2>

          <p
            data-reveal
            className="reveal ml-auto mt-6 sm:mt-8 max-w-[660px] border-r-2 border-[#ffb000] pr-4 sm:pr-5 text-[0.92rem] sm:text-[1.02rem] leading-relaxed text-[#b07800] transition-all duration-700 max-md:ml-0 max-md:border-l-2 max-md:border-r-0 max-md:pl-4 max-md:pr-0 max-md:text-left"
          >
            {identity.summary}
          </p>

          {/* Action CTAs */}
          <div
            data-reveal
            className="reveal mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap justify-end gap-3 sm:gap-4 transition-all duration-700 max-md:justify-start font-[var(--font-mono)]"
          >
            <a
              className="btn-crt-shimmer inline-flex min-h-[44px] items-center justify-center border border-[#ffb000] bg-[#ffb000]/10 px-6 sm:px-8 py-3 text-[0.82rem] sm:text-[0.85rem] uppercase tracking-[0.12em] text-[#ffb000] no-underline transition-all duration-200 hover:scale-105 hover:bg-[#ffb000] hover:text-[#0a0800] hover:shadow-[0_0_25px_rgba(255,208,64,0.7)] active:scale-[0.97] cursor-pointer md:cursor-none"
              href="#projects"
            >
              [ VIEW 12+ PROJECTS ]
            </a>

            {onOpenTerminal && (
              <button
                onClick={onOpenTerminal}
                className="btn-crt-shimmer inline-flex min-h-[44px] items-center justify-center border border-[#39ff14] bg-[#39ff14]/10 px-6 sm:px-8 py-3 text-[0.82rem] sm:text-[0.85rem] uppercase tracking-[0.12em] text-[#39ff14] transition-all duration-200 hover:scale-105 hover:bg-[#39ff14] hover:text-[#0a0800] hover:shadow-[0_0_25px_rgba(57,255,20,0.7)] active:scale-[0.97] cursor-pointer md:cursor-none"
              >
                [ OPEN CLI TERMINAL &gt;_ ]
              </button>
            )}

            <a
              className="btn-crt-shimmer inline-flex min-h-[44px] items-center justify-center border border-[#b07800] px-6 sm:px-8 py-3 text-[0.82rem] sm:text-[0.85rem] uppercase tracking-[0.12em] text-[#b07800] no-underline transition-all duration-200 hover:scale-105 hover:border-[#ffb000] hover:bg-[#ffb000]/10 hover:text-[#ffb000] hover:shadow-[0_0_20px_rgba(255,176,0,0.4)] active:scale-[0.97] cursor-pointer md:cursor-none"
              href="#contact"
            >
              [ CONTACT ME ]
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 sm:bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 font-[var(--font-mono)] text-[0.68rem] uppercase tracking-[0.2em] text-[#b07800] z-20 pointer-events-none">
        scroll
        <span className="h-8 sm:h-10 w-px bg-gradient-to-b from-[#b07800] to-transparent" />
      </div>
    </section>
  );
}
