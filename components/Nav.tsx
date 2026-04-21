type NavProps = {
  activeSection: string;
};

const navItems = [
  { label: "About", href: "#about", section: "about" },
  { label: "Projects", href: "#projects", section: "projects" },
  { label: "Experience", href: "#experience", section: "experience" },
  { label: "Skills", href: "#skills", section: "skills" },
  { label: "Contact", href: "#contact", section: "contact" },
];

export function Nav({ activeSection }: NavProps) {
  return (
    <nav className="fixed inset-x-0 top-0 z-[1000] border-b border-[#b07800]/70 bg-[#0a0800]/92 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-3 md:px-8 lg:px-12">
        <a
          className="font-[var(--font-display)] text-[1.6rem] tracking-[0.1em] text-[#ffb000] no-underline drop-shadow-[0_0_10px_rgba(255,176,0,0.55)]"
          href="#hero"
          aria-label="Go to top"
        >
          DEV<span className="text-[#39ff14]">.</span>FOLIO
        </a>
        <ul className="flex flex-wrap items-center justify-end gap-x-6 gap-y-2">
        {navItems.map((item) => (
          <li key={item.section}>
            <a
              className={`font-[var(--font-mono)] text-[0.78rem] uppercase tracking-[0.11em] no-underline transition-colors duration-200 ${activeSection === item.section ? "text-[#ffb000] drop-shadow-[0_0_8px_rgba(255,176,0,0.65)]" : "text-[#b07800] hover:text-[#ffb000] hover:drop-shadow-[0_0_8px_rgba(255,176,0,0.65)]"}`}
              href={item.href}
            >
              {item.label}
            </a>
          </li>
        ))}
        </ul>
      </div>
    </nav>
  );
}
