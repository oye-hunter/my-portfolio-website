"use client";

import { useEffect, useRef, useState } from "react";
import { skills } from "./portfolio-data";

export function Skills() {
  const [animatedLevels, setAnimatedLevels] = useState<{ [key: string]: number }>({});
  const sectionRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate percentage numbers smoothly upwards from 0 to actual level
          const duration = 1200;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            const nextLevels: { [key: string]: number } = {};
            skills.forEach((group) => {
              group.items.forEach((item) => {
                const key = `${group.title}-${item.label}`;
                nextLevels[key] = Math.floor(item.level * progress);
              });
            });

            setAnimatedLevels(nextLevels);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.25 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 md:px-8 lg:px-12 scroll-mt-20"
    >
      <div className="mb-2 font-[var(--font-mono)] text-[0.72rem] sm:text-[0.75rem] uppercase tracking-[0.3em] text-[#b07800] before:content-['>_'] before:text-[#39ff14]">
        04 / Skills
      </div>
      <h2 className="mb-8 sm:mb-12 font-[var(--font-display)] text-[clamp(2.2rem,6vw,4rem)] leading-none tracking-[0.06em] text-[#ffb000] drop-shadow-[0_0_20px_rgba(255,208,64,0.5)]">
        TECH STACK
      </h2>
      <hr className="mb-8 sm:mb-12 border-t border-dashed border-[#3a2a00]" />

      <div className="grid gap-8 sm:gap-10 lg:grid-cols-2">
        {skills.map((group) => (
          <div key={group.title} data-skill-group data-reveal className="reveal border border-[#3a2a00] bg-[#0f0c00]/60 p-5 sm:p-7 transition-all duration-300 hover:border-[#b07800] hover:shadow-[0_0_25px_rgba(255,176,0,0.15)]">
            <h3 className="mb-4 sm:mb-6 border-b border-[#3a2a00] pb-2 font-[var(--font-mono)] text-[0.75rem] sm:text-[0.78rem] uppercase tracking-[0.25em] text-[#39ff14] flex items-center justify-between">
              <span>{`// ${group.title}`}</span>
              <span className="text-[0.68rem] text-[#b07800] tracking-widest">[ONLINE]</span>
            </h3>
            <div className="space-y-4">
              {group.items.map((item) => {
                const itemKey = `${group.title}-${item.label}`;
                const currentVal = animatedLevels[itemKey] !== undefined ? animatedLevels[itemKey] : (hasAnimated ? item.level : 0);

                return (
                  <div
                    key={itemKey}
                    className="group relative p-3 border border-transparent rounded-sm transition-all duration-200 hover:border-[#ffb000] hover:bg-[#ffb000]/10 hover:shadow-[0_0_20px_rgba(255,176,0,0.2)] hover:-translate-y-0.5 cursor-pointer md:cursor-none"
                  >
                    <div className="mb-2 flex justify-between font-[var(--font-mono)] text-[0.85rem] tracking-[0.06em] text-[#ffb000] transition-colors duration-200 group-hover:text-[#39ff14]">
                      <span className="flex items-center gap-2">
                        <span className="text-[#3a2a00] transition-colors duration-200 group-hover:text-[#39ff14]">&gt;</span>
                        <span className="font-semibold">{item.label}</span>
                      </span>
                      <span className="font-bold text-[#ffb000] transition-colors duration-200 group-hover:text-[#39ff14]">
                        {currentVal}%
                      </span>
                    </div>

                    {/* Skill Bar Container */}
                    <div className="relative h-2 overflow-hidden bg-[#0a0800] border border-[#3a2a00] p-[1px] transition-colors duration-200 group-hover:border-[#39ff14]">
                      <div
                        data-skill-fill
                        data-width={`${item.level}%`}
                        style={{ width: `${currentVal}%` }}
                        className="relative h-full bg-[#ffb000] shadow-[0_0_10px_rgba(255,208,64,0.6)] transition-[width,background-color,box-shadow] duration-300 ease-out group-hover:bg-[#39ff14] group-hover:shadow-[0_0_14px_#39ff14]"
                      >
                        {/* Glowing Lead Head Indicator */}
                        <div className="absolute right-0 top-0 bottom-0 w-1 bg-[#ffffff] shadow-[0_0_8px_#ffffff]" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
