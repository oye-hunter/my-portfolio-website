"use client";

import { useState } from "react";
import { education, identity } from "./portfolio-data";

export function About() {
  const [activeTab, setActiveTab] = useState<"profile" | "stack" | "education" | "metrics">("profile");

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
        <div className="group border border-[#3a2a00] bg-[#0f0c00] p-4 sm:p-5 text-center transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 hover:border-[#ffb000] hover:bg-[#ffb000]/10 hover:shadow-[0_0_25px_rgba(255,176,0,0.35)] cursor-pointer md:cursor-none">
          <div className="font-[var(--font-display)] text-3xl sm:text-4xl text-[#ffb000] drop-shadow-[0_0_10px_rgba(255,176,0,0.5)] transition-transform duration-200 group-hover:scale-110">
            12+
          </div>
          <div className="mt-1.5 text-[0.72rem] sm:text-[0.78rem] uppercase tracking-wider text-[#39ff14] transition-colors duration-200 group-hover:text-[#ffffff]">
            // Production Projects Shipped
          </div>
        </div>

        <div className="group border border-[#3a2a00] bg-[#0f0c00] p-4 sm:p-5 text-center transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 hover:border-[#ffb000] hover:bg-[#ffb000]/10 hover:shadow-[0_0_25px_rgba(255,176,0,0.35)] cursor-pointer md:cursor-none">
          <div className="font-[var(--font-display)] text-3xl sm:text-4xl text-[#ffb000] drop-shadow-[0_0_10px_rgba(255,176,0,0.5)] transition-transform duration-200 group-hover:scale-110">
            02+ Yrs
          </div>
          <div className="mt-1.5 text-[0.72rem] sm:text-[0.78rem] uppercase tracking-wider text-[#39ff14] transition-colors duration-200 group-hover:text-[#ffffff]">
            // Full-Stack Industry Experience
          </div>
        </div>

        <div className="group border border-[#3a2a00] bg-[#0f0c00] p-4 sm:p-5 text-center transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 hover:border-[#39ff14] hover:bg-[#39ff14]/10 hover:shadow-[0_0_25px_rgba(57,255,20,0.35)] cursor-pointer md:cursor-none">
          <div className="font-[var(--font-display)] text-3xl sm:text-4xl text-[#39ff14] drop-shadow-[0_0_10px_rgba(57,255,20,0.5)] transition-transform duration-200 group-hover:scale-110">
            1,000+
          </div>
          <div className="mt-1.5 text-[0.72rem] sm:text-[0.78rem] uppercase tracking-wider text-[#b07800] transition-colors duration-200 group-hover:text-[#39ff14]">
            // Monthly Users on Shipped SaaS
          </div>
        </div>
      </div>

      <div data-reveal className="reveal grid gap-8 sm:gap-12 lg:grid-cols-2 items-start">
        {/* Narrative Biography */}
        <div className="space-y-4 sm:space-y-5 text-[0.95rem] sm:text-[1rem] leading-relaxed text-[#b07800]">
          <p>
            I am <strong className="text-[#ffb000]">{identity.name}</strong>, a full-stack developer based in{" "}
            <strong className="text-[#ffb000]">{identity.location}</strong>, specializing in scalable SaaS platforms, AI agent pipelines (Groq AI & Gemini LLM), and real-time mobile apps.
          </p>
          <p>
            Currently working as a <strong className="text-[#39ff14]">Software Developer L1 @ Komatsu Pakistan Soft</strong>, I optimize large-scale data table rendering performance with TanStack Table, standardize modern form UI architectures, and build robust .NET Core backend API modules.
          </p>
          <p>
            My engineering expertise spans scheduling systems with GoHighLevel APIs, AI customer risk engines (Parakh), multilingual voice/text dispatch pipelines (Servis AI), and escrow marketplace platforms with Stripe & Supabase Realtime.
          </p>
        </div>

        {/* Interactive Multi-Tab Terminal Inspector */}
        <div className="border-2 border-[#b07800] bg-[#0f0c00] p-4 sm:p-6 shadow-[0_0_30px_rgba(255,176,0,0.2)] transition-all duration-300 hover:border-[#ffb000] hover:shadow-[0_0_35px_rgba(255,176,0,0.35)]">
          {/* Header & Tabs */}
          <div className="mb-4 flex flex-wrap items-center justify-between border-b border-[#3a2a00] pb-3 gap-2">
            <div className="text-[0.68rem] sm:text-xs tracking-[0.2em] text-[#39ff14]">
              ● ● ● SYSTEM_INSPECTOR
            </div>
            <div className="flex flex-wrap gap-1.5">
              {(["profile", "stack", "education", "metrics"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`border px-2.5 py-1 text-[0.68rem] uppercase tracking-wider transition-all min-h-[36px] cursor-pointer md:cursor-none ${
                    activeTab === tab
                      ? "border-[#ffb000] bg-[#ffb000]/20 text-[#ffb000] font-bold shadow-[0_0_14px_rgba(255,176,0,0.45)] scale-105"
                      : "border-[#3a2a00] text-[#b07800] hover:border-[#ffb000] hover:bg-[#ffb000]/10 hover:text-[#ffb000] hover:shadow-[0_0_10px_rgba(255,176,0,0.2)]"
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
                <div>&nbsp;&nbsp;<span className="text-[#39ff14]">&quot;currentRole&quot;</span>: <span className="text-[#ffb000]">&quot;{identity.currentRole}&quot;</span>,</div>
                <div>&nbsp;&nbsp;<span className="text-[#39ff14]">&quot;location&quot;</span>: <span className="text-[#ffb000]">&quot;{identity.location}&quot;</span>,</div>
                <div>&nbsp;&nbsp;<span className="text-[#39ff14]">&quot;phone&quot;</span>: <span className="text-[#ffb000]">&quot;{identity.phone}&quot;</span>,</div>
                <div>&nbsp;&nbsp;<span className="text-[#39ff14]">&quot;availability&quot;</span>: <span className="text-[#39ff14]">&quot;{identity.availability}&quot;</span></div>
                <div><span className="text-[#ffb000]">{'}'}</span></div>
              </div>
            )}

            {activeTab === "stack" && (
              <div>
                <div><span className="text-[#39ff14]">$ cat</span> stack.config.json</div>
                <div>&nbsp;</div>
                <div><span className="text-[#ffb000]">{'{'}</span></div>
                <div>&nbsp;&nbsp;<span className="text-[#39ff14]">&quot;frontend&quot;</span>: [<span className="text-[#ffb000]">&quot;Next.js 16&quot;</span>, <span className="text-[#ffb000]">&quot;React 19&quot;</span>, <span className="text-[#ffb000]">&quot;React Native (Expo)&quot;</span>, <span className="text-[#ffb000]">&quot;TanStack Table & Query&quot;</span>, <span className="text-[#ffb000]">&quot;Zustand&quot;</span>],</div>
                <div>&nbsp;&nbsp;<span className="text-[#39ff14]">&quot;backend&quot;</span>: [<span className="text-[#ffb000]">&quot;Node.js / Express&quot;</span>, <span className="text-[#ffb000]">&quot;.NET Core&quot;</span>, <span className="text-[#ffb000]">&quot;GraphQL&quot;</span>, <span className="text-[#ffb000]">&quot;Better Auth&quot;</span>],</div>
                <div>&nbsp;&nbsp;<span className="text-[#39ff14]">&quot;databases&quot;</span>: [<span className="text-[#ffb000]">&quot;PostgreSQL&quot;</span>, <span className="text-[#ffb000]">&quot;NeonDB&quot;</span>, <span className="text-[#ffb000]">&quot;Supabase (RLS)&quot;</span>, <span className="text-[#ffb000]">&quot;Drizzle ORM&quot;</span>, <span className="text-[#ffb000]">&quot;Firebase&quot;</span>],</div>
                <div>&nbsp;&nbsp;<span className="text-[#39ff14]">&quot;ai_agents&quot;</span>: [<span className="text-[#ffb000]">&quot;Groq AI&quot;</span>, <span className="text-[#ffb000]">&quot;Gemini LLM&quot;</span>, <span className="text-[#ffb000]">&quot;OpenAI&quot;</span>, <span className="text-[#ffb000]">&quot;WhatsApp Cloud API&quot;</span>, <span className="text-[#ffb000]">&quot;Stripe Escrow&quot;</span>]</div>
                <div><span className="text-[#ffb000]">{'}'}</span></div>
              </div>
            )}

            {activeTab === "education" && (
              <div>
                <div><span className="text-[#39ff14]">$ cat</span> education.json</div>
                <div>&nbsp;</div>
                <div><span className="text-[#ffb000]">{'{'}</span></div>
                <div>&nbsp;&nbsp;<span className="text-[#39ff14]">&quot;institution&quot;</span>: <span className="text-[#ffb000]">&quot;{education.institution}&quot;</span>,</div>
                <div>&nbsp;&nbsp;<span className="text-[#39ff14]">&quot;degree&quot;</span>: <span className="text-[#ffb000]">&quot;{education.degree}&quot;</span>,</div>
                <div>&nbsp;&nbsp;<span className="text-[#39ff14]">&quot;location&quot;</span>: <span className="text-[#ffb000]">&quot;{education.location}&quot;</span>,</div>
                <div>&nbsp;&nbsp;<span className="text-[#39ff14]">&quot;duration&quot;</span>: <span className="text-[#39ff14]">&quot;{education.duration}&quot;</span></div>
                <div><span className="text-[#ffb000]">{'}'}</span></div>
              </div>
            )}

            {activeTab === "metrics" && (
              <div>
                <div><span className="text-[#39ff14]">$ cat</span> metrics.log</div>
                <div>&nbsp;</div>
                <div className="text-[#39ff14]">// PRODUCTION DIAGNOSTIC METRICS</div>
                <div>[INFO] Monthly SaaS Users: 1,000+ Active</div>
                <div>[INFO] Groq AI Risk Latency: Sub-400ms</div>
                <div>[INFO] TanStack Query Cache Hit: 60%+ query reduction</div>
                <div>[INFO] Table Optimization: Zero row-update render thrashing</div>
                <div>[INFO] Architecture Pattern: Modular Clean Specs & Monorepos</div>
                <div>[STATUS] Ready for High-Scale Full-Stack & AI Contracts</div>
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
