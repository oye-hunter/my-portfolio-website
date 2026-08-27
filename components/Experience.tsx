"use client";

import { useEffect, useRef, useState } from "react";
import { experience } from "./portfolio-data";

export function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineTrackRef = useRef<HTMLDivElement>(null);
  const laserRef = useRef<HTMLDivElement>(null);
  const [activeIndices, setActiveIndices] = useState<number[]>([]);

  useEffect(() => {
    let ticking = false;

    const updateTimeline = () => {
      if (!timelineTrackRef.current) {
        ticking = false;
        return;
      }

      const rect = timelineTrackRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      const triggerStart = viewportHeight * 0.75;
      const totalDistance = rect.height;
      const currentScroll = triggerStart - rect.top;
      
      const rawFraction = currentScroll / totalDistance;
      const clampedFraction = Math.min(Math.max(rawFraction, 0), 1);
      
      // Direct GPU-accelerated DOM mutation (60fps/120fps smooth)
      if (laserRef.current) {
        laserRef.current.style.transform = `scaleY(${clampedFraction})`;
      }

      // Calculate active nodes and update React state ONLY when indices array changes
      const newActive: number[] = [];
      const step = 1 / experience.length;
      experience.forEach((_, idx) => {
        if (clampedFraction >= idx * step * 0.85) {
          newActive.push(idx);
        }
      });

      setActiveIndices((prev) => {
        if (prev.length === newActive.length && prev.every((val, i) => val === newActive[i])) {
          return prev; // Skip state re-render if active nodes haven't changed
        }
        return newActive;
      });

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateTimeline);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateTimeline(); // Initial evaluation

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 md:px-8 lg:px-12 scroll-mt-20 font-[var(--font-mono)]"
    >
      <div className="mb-2 text-[0.72rem] sm:text-[0.75rem] uppercase tracking-[0.3em] text-[#b07800] before:content-['>_'] before:text-[#39ff14]">
        03 / Experience
      </div>
      <h2 className="mb-8 sm:mb-12 font-[var(--font-display)] text-[clamp(2.2rem,6vw,4rem)] leading-none tracking-[0.06em] text-[#ffb000] drop-shadow-[0_0_20px_rgba(255,208,64,0.5)]">
        PROFESSIONAL TIMELINE
      </h2>

      <hr className="mb-10 sm:mb-14 border-t border-dashed border-[#3a2a00]" />

      {/* Relative Timeline Container */}
      <div ref={timelineTrackRef} className="relative pl-8 sm:pl-12">
        {/* Background Track Line */}
        <div
          aria-hidden="true"
          className="absolute left-2.5 sm:left-4 top-2 bottom-2 w-[2px] bg-[#3a2a00]"
        />

        {/* GPU-Accelerated Phosphor Laser Growth Line */}
        <div
          ref={laserRef}
          aria-hidden="true"
          className="timeline-laser absolute left-2.5 sm:left-4 top-2 bottom-2 w-[2px]"
          style={{ transform: "scaleY(0)" }}
        />

        {/* Timeline Items */}
        <div className="space-y-8 sm:space-y-12">
          {experience.map((item, idx) => {
            const isActive = activeIndices.includes(idx);
            const nodeNum = String(idx + 1).padStart(2, "0");

            return (
              <div key={`${item.duration}-${item.company}`} className="relative group/item">
                {/* Illuminated Node Indicator */}
                <div className="absolute -left-8 sm:-left-12 top-1.5 flex items-center justify-center">
                  <div
                    className={`relative z-10 flex h-6 sm:h-7 w-6 sm:w-7 items-center justify-center border text-[0.65rem] font-bold transition-all duration-300 group-hover/item:scale-125 ${
                      isActive
                        ? "border-[#39ff14] bg-[#39ff14] text-[#0a0800] shadow-[0_0_15px_#39ff14]"
                        : "border-[#3a2a00] bg-[#0f0c00] text-[#b07800] group-hover/item:border-[#ffb000] group-hover/item:text-[#ffb000]"
                    }`}
                  >
                    {nodeNum}
                    {isActive && (
                      <span className="absolute inset-0 animate-ping border border-[#39ff14] opacity-75" />
                    )}
                  </div>
                </div>

                {/* Animated Experience Card with Interactive Hover */}
                <article
                  className={`timeline-card border bg-[#0f0c00] p-5 sm:p-7 transition-all duration-300 hover:scale-[1.01] hover:-translate-y-1 hover:border-[#ffb000] hover:bg-[#ffb000]/5 hover:shadow-[0_0_30px_rgba(255,176,0,0.3)] cursor-pointer md:cursor-none ${
                    isActive ? "is-active" : "border-[#3a2a00]"
                  }`}
                >
                  <div className="mb-3 flex flex-wrap items-center justify-between gap-2 border-b border-[#3a2a00] pb-3">
                    <span className="text-[0.72rem] sm:text-[0.78rem] uppercase tracking-[0.15em] text-[#39ff14] flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#39ff14]" />
                      {item.duration}
                    </span>
                    <span className="border border-[#3a2a00] bg-[#0a0800] px-2.5 py-0.5 text-[0.68rem] text-[#b07800] transition-colors duration-200 hover:border-[#39ff14] hover:text-[#39ff14]">
                      {item.company}
                    </span>
                  </div>

                  <h3 className="mb-3 text-[1.05rem] sm:text-[1.2rem] font-bold uppercase tracking-[0.06em] text-[#ffb000] drop-shadow-[0_0_8px_rgba(255,176,0,0.3)]">
                    {item.role}
                  </h3>

                  <p className="text-[0.88rem] sm:text-[0.92rem] leading-relaxed text-[#b07800] mb-3">
                    {item.summary}
                  </p>

                  {item.bullets && item.bullets.length > 0 && (
                    <ul className="space-y-1.5 border-t border-[#3a2a00]/50 pt-3 text-[0.82rem] text-[#b07800]">
                      {item.bullets.slice(0, 3).map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <span className="text-[#39ff14] mt-0.5">&gt;</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
