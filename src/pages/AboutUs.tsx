import {
  ShieldCheck,
  Lightbulb,
  Leaf,
  Users,
  Handshake,
  GraduationCap,
  Target,
  Users2,
  Globe2,
  Wallet,
  Award,
  Cpu,
} from "lucide-react";
import Seo from "../components/Seo";
import { responsiveImage } from "../lib/images";
import { breadcrumbSchema } from "../lib/schema";
 
// ---------------------------------------------------------------------
// Content — sourced from the Breinscope Company Profile (2026 Edition)
// ---------------------------------------------------------------------
 
const coreValues = [
  {
    icon: ShieldCheck,
    title: "Integrity and Accountability",
    description:
      "We uphold the highest ethical standards, ensuring transparency, honesty, and responsibility in all our engagements.",
  },
  {
    icon: Lightbulb,
    title: "Innovation and Excellence",
    description:
      "We embrace creativity, research, and cutting-edge solutions to deliver world-class consultancy services that create lasting impact.",
  },
  {
    icon: Leaf,
    title: "Sustainability and Climate Responsibility",
    description:
      "We champion climate-smart practices and sustainable approaches that protect the environment and secure livelihoods for future generations.",
  },
  {
    icon: Users,
    title: "Inclusivity and Equity",
    description:
      "We value diversity, ensure gender and youth inclusion, and empower marginalized communities to thrive in every project we undertake.",
  },
  {
    icon: Handshake,
    title: "Partnership and Collaboration",
    description:
      "We believe in building strong, trusted partnerships with clients, stakeholders, and communities for shared success and long-term growth.",
  },
  {
    icon: GraduationCap,
    title: "Capacity Building and Empowerment",
    description:
      "We are committed to transferring knowledge, strengthening local skills, and enabling self-reliance among the communities and institutions we serve.",
  },
  {
    icon: Target,
    title: "Impact and Results Orientation",
    description:
      "We focus on measurable, transformative results that address real challenges and create meaningful change across Africa.",
  },
];
 
const competitiveAdvantages = [
  {
    icon: Users2,
    title: "Human Capital",
    description:
      "Our experienced in-house management and consultants respond flexibly to client requirements however simple or complex, within our domain industry sectors.",
  },
  {
    icon: Globe2,
    title: "Regional Reach",
    description:
      "Breinscope has footprints and representation across Africa — North, West, Central, East, and South — commanded from regional offices under our continental hub in Nairobi.",
  },
  {
    icon: Handshake,
    title: "Reliable Partnerships",
    description:
      "We are proud to have successful partnerships with leading consultancy firms for benchmarking and association locally, nationally, and globally.",
  },
  {
    icon: Wallet,
    title: "Financial Stability",
    description:
      "A financially viable and stable entity, with in-house finance experts headed by the CFO keeping close surveillance of books and financial activities.",
  },
  {
    icon: Award,
    title: "Service Excellence",
    description:
      "We pride ourselves on top-quality service throughout our portfolio, with a Quality Management System that adheres to ISO 9001/2008 principles.",
  },
  {
    icon: Cpu,
    title: "Technology",
    description:
      "We craft tailored solutions that leverage technology and digital innovation — from data analytics to agile project management — to deliver transformative results.",
  },
];
 
const registrationDetails = [
  { label: "Registration Certificate", value: "No. C.141065" },
  { label: "PIN Certificate", value: "No. P051205765G" },
  { label: "VAT Certificate", value: "No. 0174372Q" },
  { label: "Incorporated", value: "27 June 2007" },
];
 
const leadershipTeam = [
  {
    name: "Francis Ogot",
    role: "Executive Director & CEO",
    image: "/images/team/Francis-Ogot.webp",
  },
  {
    name: "Shadrack Oyier",
    role: "Community Development Associate",
    image: "/images/team/Shadrack-Oyier.webp",
  },
  {
    name: "Hagai Ongecha Oyaro",
    role: "Research Director",
    image: "/images/team/Hagai-Ongecha.webp",
  },
  {
    name: "Willis Odhiambo Okul",
    role: "Development Consultant",
    image: "/images/team/Willis-Odhiambo.webp",
  },
  {
    name: "Lynette Obare",
    role: "Gender Associate",
    image: "/images/team/Lynette-Obare.webp",
  },
  {
    name: "Vincent Tengeye Makokha",
    role: "Project Planning and Management Practitioner",
    image: "/images/team/Vincent-Tengeye.webp",
  },
];
 
export default function AboutUs() {
  return (
    <main className="bg-brand-offwhite font-body text-brand-charcoal">
      <Seo
        title="About Us"
        description="Breinscope Consultants is a Kenyan-owned development consultancy founded in 2002, delivering measurable impact across East and Central Africa for over 20 years."
        path="/about"
        jsonLd={breadcrumbSchema([{ name: "About Us", path: "/about" }])}
        preloadImages={["/images/banners/cities.webp"]}
      />
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-brand-navy">
        <img
          {...responsiveImage("/images/banners/cities.webp")}
          alt="Breinscope Consultants — who we are"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-navy/70" />
 
        <div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-32">
          <p className="font-heading text-sm font-semibold uppercase text-brand-amber">
            Who We Are
          </p>
          <h1 className="mt-3 font-heading text-4xl font-semibold text-white sm:text-5xl">
            Your Best Partner for Success
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-brand-sky">
            A Kenyan-owned consultancy delivering measurable development
            impact across East and Central Africa for more than two decades.
          </p>
        </div>
      </section>
 
      {/* ================= COMPANY HISTORY ================= */}
      {/* White section, but the text column sits on nothing while the
          image + badges get real weight (shadow, border, tint) so the
          two halves read as distinct layers rather than one flat block. */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-block h-1 w-14 rounded-full bg-brand-amber" />
              <h2 className="mt-4 font-heading text-3xl font-semibold text-brand-navy">
                Our Story
              </h2>
              <div className="mt-5 space-y-4 text-brand-charcoal/90 leading-relaxed">
                <p>
                  Breinscope Consultants Limited is a Kenyan-owned firm, first
                  registered in 2002 and transformed into a Limited Liability
                  Company on 27 June 2007. The company is headquartered in
                  Nairobi, the capital city of Kenya and the business hub of
                  the East Africa region, with a fully operational branch
                  office in the western lake region city of Kisumu.
                </p>
                <p>
                  Breinscope has grown organically since inception to service
                  other countries across the East African region, the Horn of
                  Africa, and beyond — with operational offices in Juba (South
                  Sudan), Mogadishu (Somalia), and Kigali (Rwanda), formed
                  through strong networks and joint-venture partnerships with
                  local reputable companies.
                </p>
                <p>
                  Over the last 20 years, we have built a strong reputation as
                  a leader in Research, Organization Development, Agriculture
                  and Livelihoods, Financial Management, Project Management,
                  Entrepreneurship Development, WASH, Peace &amp; Conflict
                  Management, and Business Management — working with
                  bilateral and multilateral agencies, national governments,
                  not-for-profit organizations, and private sector players
                  across the region.
                </p>
              </div>
 
              {/* Registration / compliance badges — rendered as clean text
                  badges rather than scanned certificate images, per the
                  data-privacy recommendation in the project proposal.
                  Sky-tinted background + shadow makes these read as a
                  distinct "proof" module, not just more body text. */}
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {registrationDetails.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-lg border border-brand-blue/20 bg-brand-sky/15 px-3 py-3 text-center shadow-sm"
                  >
                    <p className="font-heading text-xs font-semibold uppercase text-brand-blue">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm text-brand-charcoal">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
 
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img
                loading="lazy"
                decoding="async"
                src="/images/Nai_HQ.webp"
                alt="Breinscope Nairobi HQ"
                className="aspect-4/5 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
 
      {/* ================= MISSION & VISION ================= */}
      <section className="bg-brand-navy py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white/5 p-6 sm:p-8">
            <p className="font-heading text-sm font-semibold uppercase text-brand-amber">
              Our Mission
            </p>
            <p className="mt-4 text-xl leading-relaxed text-white">
              To deliver innovative, inclusive, and climate-smart consultancy
              solutions that empower communities, institutions, and
              enterprises across Africa to achieve sustainable livelihoods,
              resilience, and growth.
            </p>
          </div>
          <div className="rounded-2xl bg-white/5 p-6 sm:p-8">
            <p className="font-heading text-sm font-semibold uppercase text-brand-amber">
              Our Vision
            </p>
            <p className="mt-4 text-xl leading-relaxed text-white">
              To be the best consultancy firm in Africa, transforming
              Africa's development agenda to success.
            </p>
          </div>
        </div>
      </section>
 
      {/* ================= CORE VALUES ================= */}
      {/* Sky-tinted section background — clearly a step darker than the
          white cards sitting on it, so the cards read as distinct
          "tiles" rather than text floating on the same white as the
          section above. */}
      <section className="bg-brand-sky/15 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <span className="inline-block h-1 w-14 rounded-full bg-brand-amber" />
          <h2 className="mt-4 font-heading text-3xl font-semibold text-brand-navy">
            Core Values
          </h2>
          <p className="mt-3 max-w-2xl text-brand-charcoal/80">
            Seven principles that guide how we work with clients, communities,
            and partners.
          </p>
 
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="rounded-xl border-t-4 border-brand-blue bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
                >
                  <Icon className="h-7 w-7 text-brand-blue" strokeWidth={1.75} />
                  <h3 className="mt-4 font-heading text-lg font-semibold text-brand-navy">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-charcoal/80">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
 
      {/* ================= WHY BREINSCOPE ================= */}
      {/* Dark navy section — matches the Mission/Vision treatment above
          and gives the page a clear light/dark/light/dark rhythm instead
          of an unbroken run of pale backgrounds. */}
      <section className="bg-brand-navy py-20">
        <div className="mx-auto max-w-6xl px-6">
          <span className="inline-block h-1 w-14 rounded-full bg-brand-amber" />
          <h2 className="mt-4 font-heading text-3xl font-semibold text-white">
            Why Breinscope
          </h2>
          <p className="mt-3 max-w-2xl text-brand-sky">
            Six reasons institutional clients choose to work with us.
          </p>
 
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {competitiveAdvantages.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-amber/20">
                    <Icon
                      className="h-5 w-5 text-brand-amber"
                      strokeWidth={1.75}
                    />
                  </div>
                  <h3 className="mt-4 font-heading text-base font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-brand-sky/90">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
 
      {/* ================= LEADERSHIP ================= */}
      {/* Back to white, but every card now carries a shadow + colored
          top border so it lifts off the page — matching the Core Values
          treatment — instead of thin gray outlines that disappear on a
          bright screen. */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <span className="inline-block h-1 w-14 rounded-full bg-brand-amber" />
          <h2 className="mt-4 font-heading text-3xl font-semibold text-brand-navy">
            Leadership &amp; Organizational Structure
          </h2>
          <p className="mt-3 max-w-2xl text-brand-charcoal/80">
            Breinscope's organizational model is built around collaboration,
            technical excellence, and adaptive management — from the Board of
            Directors down through regional and functional teams.
          </p>
 
          {/* Leadership cards — real named team members, per client-
              provided list. Horizontal layout with a small/medium
              rectangular headshot on the left (not a large square),
              name + role stacked to the right. */}
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {leadershipTeam.map((person) => (
              <div
                key={person.name}
                className="flex items-center gap-4 overflow-hidden rounded-xl border-t-4 border-brand-amber bg-white p-4 shadow-md transition-shadow hover:shadow-lg"
              >
                <img
                  loading="lazy"
                  decoding="async"
                  src={person.image}
                  alt={person.name}
                  className="h-24 w-20 flex-none rounded-lg object-cover"
                />
                <div>
                  <p className="font-heading text-sm font-semibold text-brand-navy">
                    {person.name}
                  </p>
                  <p className="mt-1 text-sm text-brand-charcoal/70">
                    {person.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
 
          {/* IMAGE PLACEHOLDER: organizational chart graphic. Consider
              redrawing as a clean SVG rather than embedding the scanned
              chart from the profile PDF. Recommended: full-width, ~1200px
              wide. Navy-tinted background + shadow gives this real
              presence instead of a faint outline on white. */}
          
          <div className="mt-10 rounded-2xl border-t-4 border-brand-navy bg-brand-navy/5 p-5 shadow-inner sm:p-8">
            <h3 className="mb-8 text-center font-heading text-sm font-semibold uppercase tracking-wide text-brand-navy/70">
              Organizational Structure
            </h3>
 
            <div className="flex flex-col items-center">
              <div className="rounded-lg border-2 border-brand-navy bg-white px-6 py-3 text-center shadow-md">
                <p className="font-heading text-sm font-semibold text-brand-navy">
                  Francis Ogot
                </p>
                <p className="text-xs text-brand-charcoal/70">
                  Executive Director &amp; CEO
                </p>
              </div>
              <div className="h-8 w-px bg-brand-navy/30" />
            </div>
 
            <div className="border-t-2 border-brand-navy/20 pt-8">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 lg:grid-cols-5">
                {leadershipTeam
                  .filter((person) => person.name !== "Francis Ogot")
                  .map((person) => (
                    <div
                      key={person.name}
                      className="rounded-lg border border-brand-blue/30 bg-white px-4 py-3 text-center shadow-sm"
                    >
                      <p className="font-heading text-xs font-semibold text-brand-navy">
                        {person.name}
                      </p>
                      <p className="mt-1 text-[11px] leading-snug text-brand-charcoal/70">
                        {person.role}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
 
      {/* ================= CTA BAND ================= */}
      <section className="bg-brand-amber">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-14 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-heading text-2xl font-semibold text-brand-navy">
              Start a conversation with our team
            </h2>
            <p className="mt-2 text-brand-navy/80">
              Tell us about your programme, project, or partnership idea.
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