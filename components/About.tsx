"use client";

import { useState } from "react";
import { identity } from "./portfolio-data";

export function About() {
  const [activeTab, setActiveTab] = useState<"profile" | "stack" | "metrics">("profile");

  return (
    <section id="about" className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 md:px-8 lg:px-12 scroll-mt-20 font-[var(--font-mono)]">
      <div className="mb-2 text-[0.72rem] sm:text-[0.75rem] uppercase tracking-[0.3em] text-[#b07800] before:content-['>_'] before:text-[#39ff14]">
        01 / About
      </div>
      <h2 className="mb-8 sm:mb-12 font-[var(--font-display)] text-[clamp(2.2rem,6vw,4rem)] leading-none tracking-[0.06em] text-[#ffb000] drop-shadow-[0_0_20px_rgba(255,208,64,0.5)]">
        WHO AM I?
      </h2>
      <hr className="mb-8 sm:mb-12 border-t border-dashed border-[#3a2a00]" />

      {/* 3 Key Metric Counter Cards */}
      <div data-reveal className="reveal mb-10 sm:mb-14 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="border border-[#3a2a00] bg-[#0f0c00] p-4 sm:p-5 text-center transition-all duration-300 hover:border-[#ffb000] hover:shadow-[0_0_20px_rgba(255,176,0,0.2)]">
          <div className="font-[var(--font-display)] text-3xl sm:text-4xl text-[#ffb000] drop-shadow-[0_0_10px_rgba(255,176,0,0.5)]">
            09+
          </div>
          <div className="mt-1.5 text-[0.72rem] sm:text-[0.78rem] uppercase tracking-wider text-[#39ff14]">
            // Production Projects Shipped
          </div>
        </div>

        <div className="border border-[#3a2a00] bg-[#0f0c00] p-4 sm:p-5 text-center transition-all duration-300 hover:border-[#ffb000] hover:shadow-[0_0_20px_rgba(255,176,0,0.2)]">
          <div className="font-[var(--font-display)] text-3xl sm:text-4xl text-[#ffb000] drop-shadow-[0_0_10px_rgba(255,176,0,0.5)]">
            02+ Yrs
          </div>
          <div className="mt-1.5 text-[0.72rem] sm:text-[0.78rem] uppercase tracking-wider text-[#39ff14]">
            // Full-Stack Industry Experience
          </div>
        </div>

        <div className="border border-[#3a2a00] bg-[#0f0c00] p-4 sm:p-5 text-center transition-all duration-300 hover:border-[#ffb000] hover:shadow-[0_0_20px_rgba(255,176,0,0.2)]">
          <div className="font-[var(--font-display)] text-3xl sm:text-4xl text-[#39ff14] drop-shadow-[0_0_10px_rgba(57,255,20,0.5)]">
            100%
          </div>
          <div className="mt-1.5 text-[0.72rem] sm:text-[0.78rem] uppercase tracking-wider text-[#b07800]">
            // Type-Safe & Tested Codebases
          </div>
        </div>
      </div>

      <div data-reveal className="reveal grid gap-8 sm:gap-12 lg:grid-cols-2 items-start">
        {/* Narrative Biography */}
        <div className="space-y-4 sm:space-y-5 text-[0.95rem] sm:text-[1rem] leading-relaxed text-[#b07800]">
          <p>
            I am <strong className="text-[#ffb000]">{identity.name}</strong>, a full-stack developer based in{" "}
            <strong className="text-[#ffb000]">{identity.location}</strong>, focused on building SaaS products,
            real-time systems, and cross-platform mobile applications.
          </p>
          <p>
            Currently working as a <strong className="text-[#39ff14]">Software Developer @ Komatsu Pak Soft</strong>, I engineer backend microservices and full-stack modules with .NET Core, Next.js, and cloud data stores.
          </p>
          <p>
            My engineering philosophy centers on predictable architecture, testable contracts, sub-second API latencies, and rapid shipping speed for high-growth startups and product teams.
          </p>
        </div>

        {/* Interactive Multi-Tab Terminal Inspector */}
        <div className="border-2 border-[#b07800] bg-[#0f0c00] p-4 sm:p-6 shadow-[0_0_30px_rgba(255,176,0,0.2)]">
          {/* Header & Tabs */}
          <div className="mb-4 flex flex-wrap items-center justify-between border-b border-[#3a2a00] pb-3 gap-2">
            <div className="text-[0.68rem] sm:text-xs tracking-[0.2em] text-[#39ff14]">
              ● ● ● SYSTEM_INSPECTOR
            </div>
            <div className="flex gap-1.5">
              {(["profile", "stack", "metrics"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`border px-2.5 py-1 text-[0.68rem] uppercase tracking-wider transition-all min-h-[36px] cursor-pointer md:cursor-none ${
                    activeTab === tab
                      ? "border-[#ffb000] bg-[#ffb000]/15 text-[#ffb000] font-bold"
                      : "border-[#3a2a00] text-[#b07800] hover:text-[#ffb000]"
                  }`}
                >
                  [{tab}.json]
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content Box */}
          <div className="crt-scrollbar max-h-[320px] overflow-x-auto text-[0.78rem] sm:text-[0.84rem] text-[#b07800] space-y-1">
            {activeTab === "profile" && (
              <div>
                <div><span className="text-[#39ff14]">$ cat</span> profile.json</div>
                <div>&nbsp;</div>
                <div><span className="text-[#ffb000]">{'{'}</span></div>
                <div>&nbsp;&nbsp;<span className="text-[#39ff14]">&quot;name&quot;</span>: <span className="text-[#ffb000]">&quot;{identity.name}&quot;</span>,</div>
                <div>&nbsp;&nbsp;<span className="text-[#39ff14]">&quot;role&quot;</span>: <span className="text-[#ffb000]">&quot;{identity.role}&quot;</span>,</div>
                <div>&nbsp;&nbsp;<span className="text-[#39ff14]">&quot;specialization&quot;</span>: <span className="text-[#ffb000]">&quot;{identity.specialization}&quot;</span>,</div>
                <div>&nbsp;&nbsp;<span className="text-[#39ff14]">&quot;location&quot;</span>: <span className="text-[#ffb000]">&quot;{identity.location}&quot;</span>,</div>
                <div>&nbsp;&nbsp;<span className="text-[#39ff14]">&quot;experience&quot;</span>: <span className="text-[#ffb000]">&quot;{identity.experience}&quot;</span>,</div>
                <div>&nbsp;&nbsp;<span className="text-[#39ff14]">&quot;availability&quot;</span>: <span className="text-[#39ff14]">&quot;{identity.availability}&quot;</span></div>
                <div><span className="text-[#ffb000]">{'}'}</span></div>
              </div>
            )}

            {activeTab === "stack" && (
              <div>
                <div><span className="text-[#39ff14]">$ cat</span> stack.config.json</div>
                <div>&nbsp;</div>
                <div><span className="text-[#ffb000]">{'{'}</span></div>
                <div>&nbsp;&nbsp;<span className="text-[#39ff14]">&quot;frontend&quot;</span>: [<span className="text-[#ffb000]">&quot;Next.js 16&quot;</span>, <span className="text-[#ffb000]">&quot;React 19&quot;</span>, <span className="text-[#ffb000]">&quot;TypeScript&quot;</span>, <span className="text-[#ffb000]">&quot;Tailwind v4&quot;</span>],</div>
                <div>&nbsp;&nbsp;<span className="text-[#39ff14]">&quot;backend&quot;</span>: [<span className="text-[#ffb000]">&quot;Node.js / Express&quot;</span>, <span className="text-[#ffb000]">&quot;.NET Core&quot;</span>, <span className="text-[#ffb000]">&quot;GraphQL&quot;</span>],</div>
                <div>&nbsp;&nbsp;<span className="text-[#39ff14]">&quot;databases&quot;</span>: [<span className="text-[#ffb000]">&quot;PostgreSQL&quot;</span>, <span className="text-[#ffb000]">&quot;Supabase&quot;</span>, <span className="text-[#ffb000]">&quot;NeonDB&quot;</span>, <span className="text-[#ffb000]">&quot;MongoDB&quot;</span>],</div>
                <div>&nbsp;&nbsp;<span className="text-[#39ff14]">&quot;mobile&quot;</span>: [<span className="text-[#ffb000]">&quot;React Native (Expo)&quot;</span>, <span className="text-[#ffb000]">&quot;Flutter&quot;</span>]</div>
                <div><span className="text-[#ffb000]">{'}'}</span></div>
              </div>
            )}

            {activeTab === "metrics" && (
              <div>
                <div><span className="text-[#39ff14]">$ cat</span> metrics.log</div>
                <div>&nbsp;</div>
                <div className="text-[#39ff14]">// SYSTEM DIAGNOSTIC METRICS</div>
                <div>[INFO] Average API Latency: &lt; 45ms</div>
                <div>[INFO] Optimistic UI Response: Sub-50ms</div>
                <div>[INFO] Code Quality: 100% Strict Type Safety</div>
                <div>[INFO] Architecture Pattern: Feature-driven Modular Specs</div>
                <div>[STATUS] Ready for Next.js / SaaS Contracts</div>
              </div>
            )}

            <div className="pt-2">
              <span className="text-[#39ff14]">$ _</span> <span className="animate-pulse text-[#ffb000]">█</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
