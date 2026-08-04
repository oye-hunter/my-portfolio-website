"use client";

import { useState } from "react";

type NavProps = {
  activeSection: string;
  onOpenTerminal?: () => void;
  onReboot?: () => void;
};

const navItems = [
  { label: "About", href: "#about", section: "about" },
  { label: "Projects", href: "#projects", section: "projects" },
  { label: "Experience", href: "#experience", section: "experience" },
  { label: "Skills", href: "#skills", section: "skills" },
  { label: "Contact", href: "#contact", section: "contact" },
];

export function Nav({ activeSection, onOpenTerminal, onReboot }: NavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setIsOpen(false);
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-[1000] border-b border-[#b07800]/70 bg-[#0a0800]/95 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 md:px-8 lg:px-12">
        <a
          className="font-[var(--font-display)] text-[1.4rem] sm:text-[1.6rem] tracking-[0.1em] text-[#ffb000] no-underline drop-shadow-[0_0_10px_rgba(255,176,0,0.55)] cursor-pointer md:cursor-none min-h-[44px] flex items-center"
          href="#hero"
          onClick={(e) => handleNavClick(e, "hero")}
          aria-label="Go to top"
        >
          HASSAN<span className="text-[#39ff14]">.</span>DEV
        </a>

        {/* Desktop Links (md+) */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.section}>
                <a
                  className={`font-[var(--font-mono)] text-[0.78rem] uppercase tracking-[0.11em] no-underline transition-colors duration-200 cursor-none min-h-[44px] inline-flex items-center ${
                    activeSection === item.section
                      ? "text-[#ffb000] drop-shadow-[0_0_8px_rgba(255,176,0,0.65)]"
                      : "text-[#b07800] hover:text-[#ffb000] hover:drop-shadow-[0_0_8px_rgba(255,176,0,0.65)]"
                  }`}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.section)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            {onReboot && (
              <button
                onClick={onReboot}
                className="inline-flex min-h-[38px] items-center border border-[#b07800] px-3 py-1 font-[var(--font-mono)] text-[0.7rem] uppercase tracking-widest text-[#b07800] transition-colors duration-200 hover:border-[#ffb000] hover:text-[#ffb000] cursor-none"
                title="Replay BIOS boot sequence"
              >
                [ BOOT ]
              </button>
            )}
            {onOpenTerminal && (
              <button
                onClick={onOpenTerminal}
                className="inline-flex min-h-[38px] items-center border border-[#39ff14] px-3 py-1 font-[var(--font-mono)] text-[0.72rem] uppercase tracking-widest text-[#39ff14] transition-colors duration-200 hover:bg-[#39ff14] hover:text-[#0a0800] shadow-[0_0_10px_rgba(57,255,20,0.2)] cursor-none"
              >
                [ &gt;_ CLI ]
              </button>
            )}
          </div>
        </div>

        {/* Mobile Header Controls (< md) */}
        <div className="flex md:hidden items-center gap-2">
          {onOpenTerminal && (
            <button
              onClick={onOpenTerminal}
              className="inline-flex min-h-[44px] items-center border border-[#39ff14] px-2.5 py-1 font-[var(--font-mono)] text-[0.7rem] uppercase tracking-widest text-[#39ff14] active:bg-[#39ff14] active:text-[#0a0800]"
              aria-label="Open CLI Terminal"
            >
              [&gt;_]
            </button>
          )}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center border border-[#ffb000] bg-[#0f0c00] px-3 py-2 font-[var(--font-mono)] text-[0.75rem] uppercase tracking-widest text-[#ffb000] shadow-[0_0_10px_rgba(255,176,0,0.3)] active:bg-[#ffb000] active:text-[#0a0800]"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? "[ X ]" : "[ MENU ]"}
          </button>
        </div>
      </div>

      {/* Mobile CRT Drawer Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-[#3a2a00] bg-[#0a0800]/98 px-6 py-6 font-[var(--font-mono)] animate-[crtFadeIn_0.2s_ease-out]">
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => (
              <li key={item.section}>
                <a
                  className={`flex min-h-[48px] items-center border-b border-[#3a2a00]/50 text-[0.9rem] uppercase tracking-[0.14em] transition-colors ${
                    activeSection === item.section
                      ? "text-[#ffb000] font-bold"
                      : "text-[#b07800] active:text-[#ffb000]"
                  }`}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.section)}
                >
                  <span className="mr-3 text-[#39ff14]">&gt;</span> {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-3 pt-2">
            {onOpenTerminal && (
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenTerminal();
                }}
                className="flex min-h-[48px] w-full items-center justify-center border border-[#39ff14] bg-[#39ff14]/10 text-[0.8rem] uppercase tracking-widest text-[#39ff14] active:bg-[#39ff14] active:text-[#0a0800]"
              >
                [ &gt;_ LAUNCH INTERACTIVE TERMINAL ]
              </button>
            )}
            {onReboot && (
              <button
                onClick={() => {
                  setIsOpen(false);
                  onReboot();
                }}
                className="flex min-h-[48px] w-full items-center justify-center border border-[#b07800] bg-[#0f0c00] text-[0.8rem] uppercase tracking-widest text-[#b07800] active:bg-[#b07800] active:text-[#0a0800]"
              >
                [ REBOOT BIOS SEQUENCE ]
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
