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
    <nav className="siteNav">
      <a className="navLogo" href="#hero" aria-label="Go to top">
        DEV<span className="navLogoDot">.</span>FOLIO
      </a>
      <ul className="navList">
        {navItems.map((item) => (
          <li key={item.section}>
            <a
              className={`navLink ${activeSection === item.section ? "navLinkActive" : ""}`}
              href={item.href}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
