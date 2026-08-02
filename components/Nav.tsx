"use client";

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
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-[1000] border-b border-[#b07800]/70 bg-[#0a0800]/92 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-3 md:px-8 lg:px-12">
        <a
          className="font-[var(--font-display)] text-[1.6rem] tracking-[0.1em] text-[#ffb000] no-underline drop-shadow-[0_0_10px_rgba(255,176,0,0.55)] cursor-none"
          href="#hero"
          onClick={(e) => handleNavClick(e, "hero")}
          aria-label="Go to top"
        >
          HASSAN<span className="text-[#39ff14]">.</span>DEV
        </a>
        <div className="flex items-center gap-4 sm:gap-6">
          <ul className="flex flex-wrap items-center justify-end gap-x-6 gap-y-2">
            {navItems.map((item) => (
              <li key={item.section}>
                <a
                  className={`font-[var(--font-mono)] text-[0.78rem] uppercase tracking-[0.11em] no-underline transition-colors duration-200 cursor-none ${
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
                className="hidden md:inline-flex items-center border border-[#b07800] px-2.5 py-1 font-[var(--font-mono)] text-[0.7rem] uppercase tracking-widest text-[#b07800] transition-colors duration-200 hover:border-[#ffb000] hover:text-[#ffb000] cursor-none"
                title="Replay BIOS boot sequence"
              >
                [ BOOT ]
              </button>
            )}
            {onOpenTerminal && (
              <button
                onClick={onOpenTerminal}
                className="hidden sm:inline-flex items-center border border-[#39ff14] px-3 py-1 font-[var(--font-mono)] text-[0.72rem] uppercase tracking-widest text-[#39ff14] transition-colors duration-200 hover:bg-[#39ff14] hover:text-[#0a0800] shadow-[0_0_10px_rgba(57,255,20,0.2)] cursor-none"
              >
                [ &gt;_ CLI ]
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
