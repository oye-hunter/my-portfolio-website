"use client";

import { useEffect, useState } from "react";
import { Project } from "./portfolio-data";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "architecture" | "engineering">("overview");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && project) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const caseStudy = project.caseStudy;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Case Study - ${project.name}`}
      className="fixed inset-0 z-[1100] flex items-center justify-center bg-[#0a0800]/90 backdrop-blur-md p-3 sm:p-6 animate-[crtFadeIn_0.2s_ease-out]"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl border-2 border-[#ffb000] bg-[#0f0c00] p-5 sm:p-8 shadow-[0_0_40px_rgba(255,176,0,0.35)] font-[var(--font-mono)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="mb-5 flex items-start justify-between border-b border-[#3a2a00] pb-4">
          <div>
            <div className="text-[0.7rem] sm:text-xs uppercase tracking-[0.25em] text-[#39ff14]">
              CASE STUDY // PROJECT_{project.id}
            </div>
            <h2 className="mt-1 font-[var(--font-display)] text-2xl sm:text-4xl text-[#ffb000] drop-shadow-[0_0_15px_rgba(255,176,0,0.5)]">
              {project.name}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close Case Study"
            className="border border-[#b07800] px-3 py-1.5 text-xs uppercase tracking-widest text-[#b07800] transition-colors hover:border-[#ffb000] hover:text-[#ffb000] min-h-[44px] cursor-pointer md:cursor-none"
          >
            [ ESC / CLOSE ]
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="mb-5 flex overflow-x-auto crt-scrollbar gap-2 border-b border-[#3a2a00] pb-2">
          {(["overview", "architecture", "engineering"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`border px-4 py-2 text-xs uppercase tracking-wider transition-all min-h-[44px] shrink-0 cursor-pointer md:cursor-none ${
                activeTab === tab
                  ? "border-[#39ff14] bg-[#39ff14]/15 text-[#39ff14] font-bold shadow-[0_0_12px_rgba(57,255,20,0.3)]"
                  : "border-[#3a2a00] text-[#b07800] hover:text-[#ffb000]"
              }`}
            >
              [{tab}]
            </button>
          ))}
        </div>

        {/* Modal Body */}
        <div className="crt-scrollbar max-h-[55vh] overflow-y-auto pr-2 sm:pr-3 space-y-5 text-sm text-[#b07800]">
          {activeTab === "overview" && (
            <div className="space-y-4">
              <p className="text-[0.92rem] sm:text-[0.98rem] leading-relaxed text-[#ffb000]">
                {caseStudy?.overview || project.summary}
              </p>
              
              {caseStudy?.keyFeatures && caseStudy.keyFeatures.length > 0 && (
                <div>
                  <h3 className="mb-2.5 text-xs uppercase tracking-widest text-[#39ff14]">{`// Key Capabilities`}</h3>
                  <ul className="space-y-2 text-[0.88rem]">
                    {caseStudy.keyFeatures.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#39ff14]">&gt;</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {caseStudy?.impactMetrics && caseStudy.impactMetrics.length > 0 && (
                <div className="pt-2">
                  <h3 className="mb-2 text-xs uppercase tracking-widest text-[#39ff14]">{`// Highlights & Impact`}</h3>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.impactMetrics.map((metric, i) => (
                      <span key={i} className="border border-[#39ff14]/40 bg-[#39ff14]/10 px-3 py-1 text-xs text-[#39ff14]">
                        ✓ {metric}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === "architecture" && (
            <div className="space-y-4">
              <h3 className="text-xs uppercase tracking-widest text-[#39ff14]">{`// System Architecture`}</h3>
              <p className="leading-relaxed text-[0.9rem]">
                {caseStudy?.architectureDetails || "Engineered with modular, type-safe components and optimized server rendering."}
              </p>
              <div className="mt-4 border border-[#3a2a00] bg-[#0a0800] p-4">
                <div className="text-xs text-[#ffb000] font-bold mb-2.5">{`// Integrated Stack`}</div>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <span key={s} className="border border-[#b07800] px-2.5 py-1 text-xs text-[#39ff14]">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "engineering" && (
            <div className="space-y-4">
              <h3 className="text-xs uppercase tracking-widest text-[#39ff14]">{`// Engineering Challenges & Solutions`}</h3>
              {caseStudy?.challengesAndSolutions && caseStudy.challengesAndSolutions.length > 0 ? (
                caseStudy.challengesAndSolutions.map((cs, idx) => (
                  <div key={idx} className="border-l-2 border-[#ffb000] pl-4 py-1 space-y-1 bg-[#0a0800]/50">
                    <p className="text-[#ffb000] font-bold text-[0.9rem]">Challenge: {cs.challenge}</p>
                    <p className="text-[#b07800] text-[0.88rem]">Solution: {cs.solution}</p>
                  </div>
                ))
              ) : (
                <p className="text-[0.88rem] text-[#b07800]">Production-tested architecture focusing on sub-second latency and zero data-loss workflows.</p>
              )}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[#3a2a00] pt-4">
          <div className="flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-crt-shimmer border border-[#39ff14] bg-[#39ff14]/10 px-4 py-2 text-xs uppercase tracking-widest text-[#39ff14] min-h-[44px] inline-flex items-center cursor-pointer md:cursor-none hover:bg-[#39ff14] hover:text-[#0a0800]"
              >
                [ LIVE SITE ]
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-crt-shimmer border border-[#ffb000] px-4 py-2 text-xs uppercase tracking-widest text-[#ffb000] min-h-[44px] inline-flex items-center cursor-pointer md:cursor-none hover:border-[#39ff14] hover:text-[#39ff14]"
              >
                [ GITHUB REPO ]
              </a>
            )}
          </div>
          <button
            onClick={onClose}
            className="border border-[#3a2a00] px-4 py-2 text-xs uppercase tracking-widest text-[#b07800] hover:text-[#ffb000] min-h-[44px] cursor-pointer md:cursor-none"
          >
            [ CLOSE WINDOW ]
          </button>
        </div>
      </div>
    </div>
  );
}
