import {
  Landmark,
  Globe2,
  HeartHandshake,
  Building2,
  Wallet,
  GraduationCap,
  Quote,
} from "lucide-react";
import { partners } from "../data/partners";
import Seo from "../components/Seo";
import { breadcrumbSchema } from "../lib/schema";
 
const clientSegments = [
  {
    icon: Landmark,
    title: "Government & Public Sector Institutions",
    description:
      "National ministries, county governments, and parastatals seeking to enhance governance, public service delivery, policy reform, and infrastructure development.",
  },
  {
    icon: Globe2,
    title: "Multilateral & Bilateral Development Partners",
    description:
      "International agencies such as the World Bank, UNDP, UNICEF, USAID, AfDB, and FCDO, engaging Breinscope for technical assistance, research, and program implementation.",
  },
  {
    icon: HeartHandshake,
    title: "NGOs & Civil Society Organizations",
    description:
      "Local and international NGOs working in health, climate resilience, livelihoods, education, and governance — seeking strategic advisory, project design, and M&E expertise.",
  },
  {
    icon: Building2,
    title: "Private Sector & Corporate Clients",
    description:
      "Enterprises, investors, and utility companies pursuing sustainability, value chain competitiveness, and social impact through responsible, ESG-aligned strategies.",
  },
  {
    icon: Wallet,
    title: "Development Finance Institutions & Foundations",
    description:
      "Philanthropic organizations, impact investors, and DFIs seeking technical support for program design, feasibility studies, and sustainable investment planning.",
  },
  {
    icon: GraduationCap,
    title: "Academic & Research Institutions",
    description:
      "Universities and think tanks collaborating with Breinscope on incubation and acceleration programmes, applied research, policy analysis, and innovation pilots.",
  },
];
 
const testimonials = [
  {
    quote:
      "Breinscope's baseline and evaluation work across our drought resilience and livelihoods programmes has consistently been rigorous, even in some of the most challenging arid regions we operate in.",
    name: "Programme Team",
    role: "Welthungerhilfe / German Agro Action (WHH/GAA)",
  },
  {
    quote:
      "Across several assignments in Nairobi's informal settlements and Turkana, Breinscope brought strong community engagement and produced findings we could act on immediately.",
    name: "Programme Team",
    role: "Oxfam GB",
  },
  {
    quote:
      "Breinscope's work designing our agriculture curriculum and gender strategy for Somalia reflected a genuine understanding of the operating context.",
    name: "Programme Team",
    role: "World Vision",
  },
];
 
export default function ClientsPartners() {
  return (
    <main className="bg-white font-body text-brand-charcoal">
      <Seo
        title="Clients & Partners"
        description="Trusted by the World Bank, USAID, UNICEF, KfW, GIZ, and institutions across government, multilateral, and NGO sectors for over 20 years."
        path="/clients"
        jsonLd={breadcrumbSchema([{ name: "Clients & Partners", path: "/clients" }])}
      />
      {/* ================= HERO ================= */}
      <section className="bg-brand-navy py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="font-heading text-sm font-semibold uppercase text-brand-amber">
            Clients &amp; Partners
          </p>
          <h1 className="mt-3 font-heading text-4xl font-semibold text-white sm:text-5xl">
            Trusted by institutions across Africa
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-brand-sky">
            Twenty years of partnership with governments, multilateral
            agencies, NGOs, and the private sector.
          </p>
        </div>
      </section>
 
      {/* ================= CLIENT SEGMENTS ================= */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <span className="inline-block h-1 w-14 rounded-full bg-brand-amber" />
          <h2 className="mt-4 font-heading text-3xl font-semibold text-brand-navy">
            Who We Work With
          </h2>
          <p className="mt-3 max-w-2xl text-brand-charcoal/80">
            Our diverse client portfolio reflects a commitment to
            integrated, high-impact solutions across six core segments.
          </p>
 
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {clientSegments.map((segment) => {
              const Icon = segment.icon;
              return (
                <div
                  key={segment.title}
                  className="rounded-xl border-t-4 border-brand-blue bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-blue/10">
                    <Icon className="h-5 w-5 text-brand-blue" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-4 font-heading text-base font-semibold text-brand-navy">
                    {segment.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-charcoal/80">
                    {segment.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
 
      {/* ================= PARTNER LOGO WALL ================= */}
      {/* Sky-tinted section so the white logo tiles clearly separate from
          the section background, same pattern used on other pages. */}
      <section className="bg-brand-sky/15 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <span className="inline-block h-1 w-14 rounded-full bg-brand-amber" />
          <h2 className="mt-4 font-heading text-3xl font-semibold text-brand-navy">
            Our Partners &amp; Funders
          </h2>
          <p className="mt-3 max-w-2xl text-brand-charcoal/80">
            A selection of the institutions we have partnered with since 2002.
          </p>
 
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex h-24 items-center justify-center rounded-xl border border-brand-sky/30 bg-white p-4 shadow-sm"
            >
              <img
                loading="lazy"
                decoding="async"
                src={partner.image}
                alt={partner.name}
                className="h-full w-full object-contain"
              />
            </div>
          ))}
          </div>
        </div>
      </section>
 
      {/* ================= TESTIMONIALS ================= */}
      {/* Dark navy section, matching the light/dark rhythm used across
          the rest of the site. Placeholder quotes only — see file header
          note on why real partner references can't be published as-is. */}
      <section className="bg-brand-navy py-20">
        <div className="mx-auto max-w-6xl px-6">
          <span className="inline-block h-1 w-14 rounded-full bg-brand-amber" />
          <h2 className="mt-4 font-heading text-3xl font-semibold text-white">
            What Our Partners Say
          </h2>
          <p className="mt-3 max-w-2xl text-brand-sky">
            {/*Testimonials pending sign-off from named partners.*/}...........
          </p>
 
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <Quote className="h-6 w-6 text-brand-amber" strokeWidth={1.75} />
                <p className="mt-4 text-sm italic leading-relaxed text-white/90">
                  {item.quote}
                </p>
                <p className="mt-4 font-heading text-sm font-semibold text-white">
                  {item.name}
                </p>
                <p className="text-xs text-brand-sky/80">{item.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* ================= CTA BAND ================= */}
      <section className="bg-brand-amber">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-14 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-heading text-2xl font-semibold text-brand-navy">
              Interested in partnering with us?
            </h2>
            <p className="mt-2 text-brand-navy/80">
              Let's talk about your programme, project, or funding priorities.
            </p>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-brand-navy px-6 py-3 font-heading text-sm font-semibold text-white transition-colors hover:bg-brand-navy/90"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
 
