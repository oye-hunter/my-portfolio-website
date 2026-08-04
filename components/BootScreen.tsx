"use client";

import { useCallback, useEffect, useState } from "react";

type BootScreenProps = {
  onComplete: () => void;
};

const bootLogs = [
  "ROM BIOS v3.88 (C) 1984-2026 CRT DIGITAL SYSTEMS",
  "CPU: HASSAN-CORE v2.6 @ 4.20GHz",
  "CHECKING RAM... 640KB OK",
  "MOUNTING SYSTEM FILESYSTEM...",
  "  -> /app/hero ........ [LOADED]",
  "  -> /app/about ....... [LOADED]",
  "  -> /app/projects .... [LOADED]",
  "  -> /app/skills ...... [LOADED]",
  "INITIALIZING AMBER PHOSPHOR ENGINE...",
  "CONNECTING REALTIME MATRIX DATASTREAM...",
  "ALL SYSTEMS OPERATIONAL. SYSTEM READY.",
];

export function BootScreen({ onComplete }: BootScreenProps) {
  const [mounted, setMounted] = useState(false);
  const [lines, setLines] = useState<string[]>([]);
  const [isReady, setIsReady] = useState(false);
  const [isPoweringOff, setIsPoweringOff] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    let index = 0;
    const interval = setInterval(() => {
      if (index < bootLogs.length) {
        const nextLine = bootLogs[index];
        if (nextLine) {
          setLines((prev) => [...prev, nextLine]);
        }
        index++;
      } else {
        clearInterval(interval);
        setIsReady(true);
      }
    }, 380);

    return () => clearInterval(interval);
  }, [mounted]);

  const handleStart = useCallback(() => {
    setIsPoweringOff(true);
    setTimeout(() => {
      onComplete();
    }, 600);
  }, [onComplete]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault(); // Prevent page scroll on Spacebar keypress
        if (isReady) handleStart();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isReady, handleStart]);

  return (
    <div
      className={`fixed inset-0 z-[2000] flex flex-col justify-between bg-[#0a0800] p-4 sm:p-6 md:p-12 font-[var(--font-mono)] text-[#ffb000] cursor-pointer md:cursor-none transition-all duration-500 ${
        isPoweringOff ? "scale-y-0 opacity-0 brightness-200 blur-sm" : "opacity-100 scale-y-100"
      }`}
    >
      {/* Scanline & Flicker FX for Boot Screen */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[2001] bg-[linear-gradient(0deg,rgba(0,0,0,0.25)_0,rgba(0,0,0,0.25)_1px,transparent_1px,transparent_3px)]"
        style={{ animation: "scanMove 6s linear infinite" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[2002] bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.75)_100%)]"
        style={{ animation: "flicker 0.12s infinite" }}
      />

      {/* Boot Log Terminal Header */}
      <div className="relative z-[2003] max-w-4xl space-y-2">
        <div className="mb-4 sm:mb-6 flex items-center justify-between border-b border-[#3a2a00] pb-3 text-[0.68rem] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] text-[#39ff14]">
          <span>● ● ● CRT_SYSTEM_BOOT</span>
          <span className="animate-pulse">ONLINE</span>
        </div>

        <div className="space-y-1.5 sm:space-y-2 text-[0.78rem] sm:text-[0.88rem] leading-relaxed text-[#b07800]">
          {lines.filter(Boolean).map((line, idx) => (
            <p key={idx} className="flex items-center gap-2">
              <span className="text-[#39ff14]">&gt;</span>
              <span className={line && line.includes("READY") ? "text-[#ffb000] font-bold" : ""}>
                {line}
              </span>
            </p>
          ))}
          {!isReady && (
            <p className="flex items-center gap-2 text-[#39ff14]">
              <span>&gt;</span>
              <span className="animate-ping">█</span>
            </p>
          )}
        </div>
      </div>

      {/* Action Prompt / Power On Button */}
      <div className="relative z-[2003] my-4 sm:mt-8 flex flex-col items-center justify-center gap-4 text-center">
        {isReady ? (
          <div className="space-y-4 animate-[crtFadeIn_0.3s_ease-out]">
            <p className="text-[0.68rem] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#39ff14] animate-pulse">
              Press [ENTER] or Tap Button to Boot System Interface
            </p>
            <button
              onClick={handleStart}
              className="group relative inline-flex min-h-[48px] items-center gap-3 border-2 border-[#ffb000] bg-[#0f0c00] px-6 sm:px-8 py-3.5 sm:py-4 font-[var(--font-mono)] text-[0.85rem] sm:text-[0.95rem] uppercase tracking-[0.18em] text-[#ffb000] shadow-[0_0_25px_rgba(255,176,0,0.4)] transition-all duration-300 hover:scale-105 hover:bg-[#ffb000] hover:text-[#0a0800] hover:shadow-[0_0_40px_rgba(255,176,0,0.8)] active:scale-95 cursor-pointer md:cursor-none"
            >
              <span className="text-[#39ff14] group-hover:text-[#0a0800]">&gt;_</span>
              INITIALIZE PORTFOLIO
              <span className="animate-pulse text-[#39ff14] group-hover:text-[#0a0800]">█</span>
            </button>
          </div>
        ) : (
          <p className="text-[0.68rem] sm:text-xs uppercase tracking-[0.2em] text-[#3a2a00]">
            Booting system kernel... Please wait.
          </p>
        )}
      </div>

      <div className="relative z-[2003] flex justify-between text-[0.7rem] uppercase tracking-[0.15em] text-[#3a2a00]">
        <span>SYS_REV: 2026.8.2</span>
        <span>MUHAMMAD HASSAN MUGHAL PORTFOLIO</span>
      </div>
    </div>
  );
}
