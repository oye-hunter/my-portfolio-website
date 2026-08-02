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
      className="relative z-10 mx-auto max-w-7xl px-6 py-32 md:px-8 lg:px-12 scroll-mt-24"
    >
      <div className="mb-2 font-[var(--font-mono)] text-[0.75rem] uppercase tracking-[0.3em] text-[#b07800] before:content-['>_'] before:text-[#39ff14]">
        04 / Skills
      </div>
      <h2 className="mb-12 font-[var(--font-display)] text-[clamp(2.5rem,5vw,4rem)] leading-none tracking-[0.06em] text-[#ffb000] drop-shadow-[0_0_20px_rgba(255,208,64,0.5)]">
        TECH STACK
      </h2>
      <hr className="mb-12 border-t border-dashed border-[#3a2a00]" />

      <div className="grid gap-10 lg:grid-cols-2">
        {skills.map((group) => (
          <div key={group.title} data-skill-group data-reveal className="reveal">
            <h3 className="mb-6 border-b border-[#3a2a00] pb-2 font-[var(--font-mono)] text-[0.78rem] uppercase tracking-[0.25em] text-[#39ff14]">
              {`// ${group.title}`}
            </h3>
            {group.items.map((item) => {
              const itemKey = `${group.title}-${item.label}`;
              const currentVal = animatedLevels[itemKey] !== undefined ? animatedLevels[itemKey] : (hasAnimated ? item.level : 0);

              return (
                <div
                  key={itemKey}
                  className="group/skill mb-6 p-2 rounded-sm transition-colors duration-200 hover:bg-[#ffb000]/5"
                >
                  <div className="mb-2 flex justify-between font-[var(--font-mono)] text-[0.85rem] tracking-[0.06em] text-[#ffb000] group-hover/skill:text-[#39ff14]">
                    <span className="flex items-center gap-2">
                      <span className="text-[#3a2a00] group-hover/skill:text-[#39ff14] transition-colors">&gt;</span>
                      {item.label}
                    </span>
                    <span className="font-bold text-[#ffb000] group-hover/skill:text-[#39ff14] transition-colors">
                      {currentVal}%
                    </span>
                  </div>

                  {/* Skill Bar Container */}
                  <div className="relative h-2 overflow-hidden bg-[#3a2a00] border border-[#3a2a00] p-[1px]">
                    <div
                      data-skill-fill
                      data-width={`${item.level}%`}
                      style={{ width: `${currentVal}%` }}
                      className="relative h-full bg-[#ffb000] shadow-[0_0_10px_rgba(255,208,64,0.6)] transition-[width] duration-300 ease-out group-hover/skill:bg-[#39ff14] group-hover/skill:shadow-[0_0_12px_#39ff14]"
                    >
                      {/* Glowing Lead Head Indicator */}
                      <div className="absolute right-0 top-0 bottom-0 w-1 bg-[#ffffff] shadow-[0_0_8px_#ffffff]" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}
