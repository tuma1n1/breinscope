import { Link } from "react-router-dom";
import { ArrowRight, Home, Mail } from "lucide-react";
import Seo from "../components/Seo";
 
const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Our Expertise", href: "/expertise" },
  { label: "Projects & Impact", href: "/projects" },
  { label: "Contact Us", href: "/contact" },
];
 
export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center bg-brand-navy px-6 py-24 text-center font-body">
      <Seo
        title="Page Not Found"
        description="The page you're looking for doesn't exist."
        path="/404"
        noindex
      />
      <p className="font-heading text-8xl font-bold text-white/10 sm:text-9xl">
        404
      </p>
      <h1 className="-mt-6 font-heading text-2xl font-semibold text-white sm:text-3xl">
        Page not found
      </h1>
      <p className="mx-auto mt-3 max-w-md text-brand-sky">
        The page you're looking for may have been moved, renamed, or
        doesn't exist. Here are a few places to start instead.
      </p>
 
      <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-lg bg-brand-amber px-6 py-3 font-heading text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-amber/90"
        >
          <Home className="h-4 w-4" />
          Back to Home
        </Link>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/5 px-6 py-3 font-heading text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
        >
          <Mail className="h-4 w-4" />
          Contact Us
        </Link>
      </div>
 
      <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
        {quickLinks.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className="inline-flex items-center gap-1 text-sm text-brand-sky/80 transition-colors hover:text-white"
          >
            {link.label}
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        ))}
      </div>
    </main>
  );
}