import { useState, type FormEvent } from "react";
import { telHref } from "../lib/contact";
import { NavLink } from "react-router-dom";
import { Phone, Mail, MapPin, X, Send, Loader2, CheckCircle2 } from "lucide-react";
import { offices } from "../data/offices";
 
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xvkowgnz";
 
const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Expertise", href: "/expertise" },
  { label: "Projects & Impact", href: "/projects" },
  { label: "Clients & Partners", href: "/clients" },
  { label: "Where We Work", href: "/where-we-work" },
  { label: "Insights", href: "/insights" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];
 
type SubmitState = "idle" | "submitting" | "success" | "error";
 
export default function Footer() {
  const [modalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState<SubmitState>("idle");
 
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
 
    const form = event.currentTarget;
    const data = new FormData(form);
 
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
 
      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }
 
  function closeModal() {
    setModalOpen(false);
    // Reset status shortly after close so the form is fresh next time it opens
    setTimeout(() => setStatus("idle"), 300);
  }
 
  return (
    <>
      <footer className="bg-brand-navy text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_0.8fr_1.6fr]">
            {/* ---------------- Company + CTA ---------------- */}
            <div>
              <div className="flex items-center gap-3">
                <img
                  loading="lazy"
                  decoding="async"
                  src="/Breinscope-logo-xbg.png"
                  alt="Breinscope Consultants Limited"
                  className="h-10 w-auto"
                />
                <span className="font-heading text-lg font-semibold">Breinscope</span>
              </div>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-sky/90">
                Your Best Partner for Success — a Kenyan-owned consultancy
                delivering measurable development impact across East and
                Central Africa since 2002.
              </p>
 
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-brand-amber px-5 py-2.5 font-heading text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-amber/90"
              >
                <Send className="h-4 w-4" />
                Get in Touch
              </button>
            </div>
 
            {/* ---------------- Explore ---------------- */}
            <div>
              <p className="font-heading text-sm font-semibold uppercase tracking-wide text-brand-amber">
                Explore
              </p>
              <ul className="mt-4 space-y-2.5">
                {exploreLinks.map((link) => (
                  <li key={link.href}>
                    <NavLink
                      to={link.href}
                      className="text-sm text-brand-sky/90 transition-colors hover:text-white"
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
 
            {/* ---------------- Offices ---------------- */}
            <div>
              <p className="font-heading text-sm font-semibold uppercase tracking-wide text-brand-amber">
                Our Offices
              </p>
              <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {offices.map((office) => (
                  <div key={office.name}>
                    <p className="font-heading text-sm font-semibold text-white">
                      {office.name}
                    </p>
                    <div className="mt-2 flex gap-2 text-xs leading-relaxed text-brand-sky/90">
                      <MapPin className="mt-0.5 h-3.5 w-3.5 flex-none" />
                      <span>{office.address}</span>
                    </div>
                    {office.phones.map((phone) => (
                      <div
                        key={phone}
                        className="mt-1.5 flex items-center gap-2 text-xs text-brand-sky/90"
                      >
                        <Phone className="h-3.5 w-3.5 flex-none" />
                        <a href={telHref(phone)} className="hover:underline">{phone}</a>
                      </div>
                    ))}
                    {office.email && (
                      <div className="mt-1.5 flex items-center gap-2 text-xs text-brand-sky/90">
                        <Mail className="h-3.5 w-3.5 flex-none" />
                        <a href={`mailto:${office.email}`} className="break-all hover:underline">{office.email}</a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
 
        {/* ---------------- Bottom bar ---------------- */}
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-6 text-center text-xs text-brand-sky/70">
            © 2026 Breinscope Consultants Limited. All rights reserved.
          </div>
        </div>
      </footer>
 
      {/* ---------------- Glassy contact modal ---------------- */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="max-h-[calc(100dvh-2rem)] w-full max-w-md overflow-y-auto rounded-2xl border border-white/20 bg-brand-navy/80 p-5 shadow-2xl backdrop-blur-2xl sm:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-heading text-lg font-semibold text-white">
                  Let's talk
                </h3>
                <p className="mt-1 text-sm text-brand-sky/90">
                  Send us your details and we'll get back to you.
                </p>
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="text-white/60 transition-colors hover:text-white"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
 
            {status === "success" ? (
              <div className="mt-6 flex flex-col items-center gap-3 py-6 text-center">
                <CheckCircle2 className="h-10 w-10 text-brand-green" />
                <p className="text-sm text-white">
                  Thank you — your message has been sent. Our team will be in
                  touch shortly.
                </p>
                <button
                  type="button"
                  onClick={closeModal}
                  className="mt-2 rounded-lg bg-white/10 px-4 py-2 text-sm text-white transition-colors hover:bg-white/20"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label htmlFor="footer-name" className="text-xs text-brand-sky/90">
                    Full name
                  </label>
                  <input
                    id="footer-name"
                    name="name"
                    type="text"
                    required
                    className="mt-1 w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2.5 text-sm text-white placeholder-white/40 outline-none focus:border-brand-amber"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label htmlFor="footer-email" className="text-xs text-brand-sky/90">
                    Email address
                  </label>
                  <input
                    id="footer-email"
                    name="email"
                    type="email"
                    required
                    className="mt-1 w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2.5 text-sm text-white placeholder-white/40 outline-none focus:border-brand-amber"
                    placeholder="jane@organization.org"
                  />
                </div>
                <div>
                  <label htmlFor="footer-message" className="text-xs text-brand-sky/90">
                    Message
                  </label>
                  <textarea
                    id="footer-message"
                    name="message"
                    required
                    rows={3}
                    className="mt-1 w-full resize-none rounded-lg border border-white/20 bg-white/10 px-3 py-2.5 text-sm text-white placeholder-white/40 outline-none focus:border-brand-amber"
                    placeholder="Tell us briefly what you're looking for..."
                  />
                </div>
 
                {status === "error" && (
                  <p className="text-xs text-brand-coral">
                    Something went wrong sending your message. Please try
                    again, or email us directly.
                  </p>
                )}
 
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand-amber px-4 py-2.5 font-heading text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-amber/90 disabled:opacity-60"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}