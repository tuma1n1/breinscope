import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
 
const expertiseLinks = [
  { label: "Agriculture & Rural Development", href: "/expertise/agriculture-rural-development" },
  { label: "Climate Change, Environment & NRM", href: "/expertise/climate-change-environment" },
  { label: "Energy and Power Systems", href: "/expertise/energy-power-systems" },
  { label: "Water and Sewerage", href: "/expertise/water-sewerage" },
  { label: "Rural and Urban Infrastructure", href: "/expertise/rural-urban-infrastructure" },
  { label: "Road and Transportation", href: "/expertise/road-transportation" },
  { label: "Education and Skill Development", href: "/expertise/education-skills-development" },
  { label: "Digital Development", href: "/expertise/digital-development" },
  { label: "Human Capital Consulting", href: "/expertise/human-capital-consulting" },
  { label: "Global Health and WASH", href: "/expertise/global-health-wash" },
  { label: "Governance, Social & Economic Development", href: "/expertise/governance-social-economic-development" },
];
 
const primaryLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Clients", href: "/clients" },
  { label: "Where We Work", href: "/where-we-work" },
  { label: "Insights", href: "/insights" },
];
 
function navLinkClasses({ isActive }: { isActive: boolean }) {
  return [
    "text-sm font-medium transition-colors",
    isActive ? "text-brand-amber" : "text-white/90 hover:text-brand-amber",
  ].join(" ");
}
 
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expertiseOpen, setExpertiseOpen] = useState(false);
  const [mobileExpertiseOpen, setMobileExpertiseOpen] = useState(false);
 
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-navy/70 shadow-lg shadow-brand-navy/20 backdrop-blur-xl">
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 py-3">
        {/* ---------------- Logo ---------------- */}
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src="/Breinscope-logo-xbg.png"
            alt="Breinscope Consultants Limited"
            className="h-10 w-auto"
          />
          <span className="font-heading text-lg font-semibold tracking-tight text-white">
            Breinscope
          </span>
        </NavLink>
 
        {/* ---------------- Desktop links ---------------- */}
        <div className="hidden items-center gap-8 lg:flex">
          <NavLink to="/" end className={navLinkClasses}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClasses}>
            About
          </NavLink>
 
          {/* Expertise dropdown — the label text and the chevron are
              two separate clickable elements. Previously this was a
              single button that only ever toggled the dropdown, so
              clicking "Expertise" itself could never navigate to the
              hub page. Now the label is a real NavLink (click = go to
              /expertise) and the chevron is a separate toggle (click =
              open/close the dropdown without navigating). Hovering
              anywhere in this wrapper still opens the dropdown on
              desktop, same as before. */}
          <div
            className="relative flex items-center"
            onMouseEnter={() => setExpertiseOpen(true)}
            onMouseLeave={() => setExpertiseOpen(false)}
          >
            <NavLink to="/expertise" className={navLinkClasses}>
              Expertise
            </NavLink>
            <button
              type="button"
              className="ml-1 flex items-center text-white/90 transition-colors hover:text-brand-amber"
              onClick={() => setExpertiseOpen((prev) => !prev)}
              aria-expanded={expertiseOpen}
              aria-label="Toggle expertise submenu"
            >
              <ChevronDown
                className={`h-4 w-4 transition-transform ${expertiseOpen ? "rotate-180" : ""}`}
              />
            </button>
 
            {expertiseOpen && (
              <div className="absolute left-1/2 top-full w-80 -translate-x-1/2 pt-3">
                {/* The pt-3 above (padding, not margin) keeps the gap
                    between the button and the panel INSIDE this
                    element's hoverable box, so moving the cursor down
                    through it no longer counts as leaving the dropdown
                    — that's what was causing the menu to vanish before
                    it could be clicked. */}
                <div className="rounded-xl border border-white/10 bg-brand-navy/95 p-2 shadow-2xl backdrop-blur-xl">
                  {expertiseLinks.map((item) => (
                    <NavLink
                      key={item.href}
                      to={item.href}
                      className="block rounded-lg px-3 py-2 text-sm text-white/85 transition-colors hover:bg-white/10 hover:text-brand-amber"
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            )}
          </div>
 
          {primaryLinks.slice(2).map((link) => (
            <NavLink key={link.href} to={link.href} className={navLinkClasses}>
              {link.label}
            </NavLink>
          ))}
        </div>
 
        {/* ---------------- Desktop CTA ---------------- */}
        <NavLink
          to="/contact"
          className="hidden rounded-lg bg-brand-amber px-5 py-2.5 font-heading text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-amber/90 lg:inline-block"
        >
          Contact Us
        </NavLink>
 
        {/* ---------------- Mobile toggle ---------------- */}
        <button
          type="button"
          className="text-white lg:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
 
      {/* ---------------- Mobile menu ---------------- */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-brand-navy/95 backdrop-blur-xl lg:hidden">
          <div className="space-y-1 px-6 py-4">
            <NavLink
              to="/"
              end
              onClick={() => setMobileOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-white/90 hover:bg-white/10"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setMobileOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-white/90 hover:bg-white/10"
            >
              About
            </NavLink>
 
            <div className="flex items-center justify-between rounded-lg pr-1 hover:bg-white/10">
              <NavLink
                to="/expertise"
                onClick={() => setMobileOpen(false)}
                className="flex-1 px-3 py-2.5 text-sm font-medium text-white/90"
              >
                Expertise
              </NavLink>
              <button
                type="button"
                className="p-2 text-white/90"
                onClick={() => setMobileExpertiseOpen((prev) => !prev)}
                aria-expanded={mobileExpertiseOpen}
                aria-label="Toggle expertise submenu"
              >
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${mobileExpertiseOpen ? "rotate-180" : ""}`}
                />
              </button>
            </div>
            {mobileExpertiseOpen && (
              <div className="ml-3 space-y-1 border-l border-white/10 pl-3">
                {expertiseLinks.map((item) => (
                  <NavLink
                    key={item.href}
                    to={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm text-white/75 hover:bg-white/10 hover:text-brand-amber"
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            )}
 
            {primaryLinks.slice(2).map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-white/90 hover:bg-white/10"
              >
                {link.label}
              </NavLink>
            ))}
 
            <NavLink
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 block rounded-lg bg-brand-amber px-3 py-2.5 text-center font-heading text-sm font-semibold text-brand-navy"
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}