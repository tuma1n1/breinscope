import { lazy, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Cpu,
  Globe2,
  Award,
  CalendarDays,
} from "lucide-react";
import { offices } from "../data/offices";
import { partners } from "../data/partners";
import { expertiseAreas } from "../data/expertise";
import { homeFaqs } from "../data/faqs";
import Seo from "../components/Seo";
import { responsiveImage } from "../lib/images";
import ClientOnly from "../components/ClientOnly";
import FaqSection from "../components/FaqSection";
import { faqPageSchema } from "../lib/schema";

const OfficesMap = lazy(() => import("../components/maps/OfficesMap"));
 
const stats = [
  { value: "200+", label: "Projects Delivered" },
  { value: "20", label: "Years of Experience" },
  { value: "12+", label: "Key Sectors" },
  { value: "100+", label: "Consultant-Years" },
];
 
// Curated subset of the full partner list in `partners.ts` — the most
// recognizable names, kept short for a clean marquee. The full ~30-name
// list lives on the Clients & Partners page. Pulling from the shared
// array (rather than a separate hand-typed list) means there's only one
// place to fix a name/typo, and both lists stay in sync automatically.
const trustLogosNames = [
  "World Bank",
  "IFC",
  "USAID",
  "KfW",
  "UNICEF",
  "GIZ",
  "IFAD",
  "African Development Bank",
  "UNDP",
  "Save the Children",
  "CARE Kenya",
  "World Vision",
];
const trustLogos = partners.filter((partner) => trustLogosNames.includes(partner.name));

const whyBreinscope = [
  {
    icon: Globe2,
    title: "Regional Reach",
    description:
      "Footprints across East, Central, and the Horn of Africa, commanded from our continental hub in Nairobi.",
  },
  {
    icon: Award,
    title: "Service Excellence",
    description:
      "A Quality Management System that adheres to ISO 9001/2008 principles, backing every engagement we deliver.",
  },
  {
    icon: Cpu,
    title: "Technology-Driven",
    description:
      "Data analytics, agile project management, and digital tools built into how we design and deliver programs.",
  },
];
 
// Hero slideshow captions — deliberately generic/thematic rather than
// tied to a specific named client project, matching the four hero
// background themes (Water/WASH, Agriculture/Climate, Governance/
// Capacity Building, Climate/Environment). Decoupled from
// `featuredProjects` below so the hero never implies a specific real
// client engagement is depicted in a stock/AI-edited image.
const heroSlideContent = [
  {
    title: "Clean Water, Lasting Impact",
    tagline: "Expanding access to safe water across East Africa's communities.",
    image: "/images/hero/water-pump.webp",
  },
  {
    title: "Climate-Smart Agriculture",
    tagline: "Empowering farmers with resilient, sustainable practices.",
    image: "/images/hero/farmer-irrigation-field.webp",
  },
  {
    title: "Strengthening Institutions",
    tagline: "Building capacity for effective, accountable governance.",
    image: "/images/hero/workshop-meeting.webp",
  },
  {
    title: "Restoring Our Landscapes",
    tagline: "Partnering with communities to protect natural resources.",
    image: "/images/hero/tree-planting.webp",
  },
];
 
const featuredProjects = [
  {
    client: "Kibwezi Makindu Water & Sanitation Co. (KIBMAWASCO)",
    work: "Water Safety Plan development under the Sustainable Access to Safe Water (SA-SaWa) program, funded by the Coca-Cola Foundation via Millennium Water Alliance Kenya.",
    date: "August 2025",
    image: "/images/home/KIBMAWASCO.webp",
  },
  {
    client: "Africa Capacity Building Foundation (ACBF)",
    work: "Gender-Responsive Capacity Needs Assessments across five countries (Lesotho, Namibia, Senegal, Côte d'Ivoire, Rwanda) under the AU-GRAP Project.",
    date: "June 2025",
    image: "/images/home/ACBF.webp",
  },
  {
    client: "Inclusive Climate Change Adaptation for a Sustainable Africa (ICCASA)",
    work: "Development of a gender-transformative and inclusive strategic plan (2024–2029).",
    date: "March 2025",
    image: "/images/home/ICCASA.webp",
  },
  {
    client: "CARE Kenya",
    work: "Domestication and operationalization of the MIWASCO Water Safety Plan.",
    date: "January 2024",
    image: "/images/home/CARE.webp",
  },
];
 
export default function Home() {
  const mapCenter: [number, number] = [-0.2, 35.5];

  // Hero slideshow — uses its own heroSlideContent data (thematic
  // captions, decoupled from featuredProjects below). Background image
  // crossfades on a timer; the headline/CTA text above it stays fixed,
  // per the chosen design.
  const [currentSlide, setCurrentSlide] = useState(0);
 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlideContent.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);
 
  return (
    <main className="bg-white font-body text-brand-charcoal">
      <Seo
        title="Development Consultants in Kenya & East Africa"
        description="Kenyan-owned development consultancy since 2002: research, M&E, capacity building and programme design across 11 sectors for the World Bank, USAID, UNICEF and governments."
        path="/"
        preloadImages={[heroSlideContent[0].image]}
        jsonLd={faqPageSchema(homeFaqs)}
      />
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-brand-navy">
        {/* Hero slideshow — crossfading background images, one per
            heroSlideContent entry (src paths defined above). */}
        {heroSlideContent.map((slide, index) => (
          <img
            key={slide.title}
            {...responsiveImage(slide.image)}
            alt={slide.title}
            // Only the first slide is needed for first paint; the others
            // fade in 6s+ later, so don't let them compete for bandwidth.
            loading={index === 0 ? "eager" : "lazy"}
            fetchPriority={index === 0 ? "high" : "low"}
            decoding="async"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-brand-navy/75" />
 
        {/* Soft gradient fade at the base of the hero, blending into the
            white Trust Marquee section directly below instead of a hard
            navy-to-white cut. */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-28 bg-linear-to-b from-transparent to-white" />
 
        <div className="relative mx-auto max-w-4xl px-4 pb-16 pt-16 text-center sm:px-6 sm:pt-32">
          <p className="font-heading text-sm font-semibold uppercase tracking-wide text-brand-amber">
            Development Consultancy · Est. 2002
          </p>
          <h1 className="mt-4 font-heading text-3xl font-semibold leading-tight text-white min-[375px]:text-4xl sm:text-5xl lg:text-6xl">
            Turning Africa's Development Challenges Into Measurable Success
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-brand-sky">
            For over 20 years, Breinscope Consultants has partnered with
            governments, multilateral agencies, and NGOs to design and
            deliver high-impact programs across East and Central Africa.
          </p>
 
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/expertise"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-amber px-7 py-3.5 font-heading text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-amber/90"
            >
              Explore Our Expertise
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/5 px-7 py-3.5 font-heading text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15"
            >
              Start a Conversation
            </Link>
          </div>
 
          {/* Current-slide caption — small, unobtrusive, identifies the
              theme behind the current background photo. Updates in
              sync with the crossfade; the main headline above never
              changes. Deliberately generic/thematic, not tied to a
              specific named client project — see heroSlideContent
              above. */}
          <div className="mx-auto mt-10 inline-flex max-w-md items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 flex-none rounded-full bg-brand-amber" />
            <p className="truncate text-xs text-brand-sky">
              <span className="font-semibold text-white">
                {heroSlideContent[currentSlide].title}
              </span>{" "}
              — {heroSlideContent[currentSlide].tagline}
            </p>
          </div>
 
          {/* Slide indicator dots */}
          <div className="mt-4 flex items-center justify-center gap-2">
            {heroSlideContent.map((slide, index) => (
              <button
                key={slide.title}
                type="button"
                onClick={() => setCurrentSlide(index)}
                aria-label={`Show slide ${index + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  index === currentSlide
                    ? "w-6 bg-brand-amber"
                    : "w-1.5 bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
 
        {/* Stat counters, anchored to the base of the hero */}
        <div className="relative mx-auto grid max-w-4xl grid-cols-2 gap-6 px-6 pb-20 pt-4 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading text-3xl font-bold text-brand-green sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-brand-sky/90 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>
 
      {/* ================= TRUST MARQUEE ================= */}
      <section className="border-y border-brand-sky/20 bg-white py-8">
        <p className="text-center font-heading text-xs font-semibold uppercase tracking-wide text-brand-charcoal/50">
          Trusted by leading institutions across Africa
        </p>
        <div className="relative mt-5 overflow-hidden">
          <div className="flex w-max animate-marquee gap-12">
            {[...trustLogos, ...trustLogos].map((partner, index) => (
              <img
                loading="lazy"
                decoding="async"
                key={`${partner.name}-${index}`}
                src={partner.image}
                alt={partner.name}
                className="h-10 w-auto flex-none object-contain opacity-70"
              />
            ))}
          </div>
        </div>
      </section>
 
      {/* ================= EXPERTISE SNAPSHOT ================= */}
      <section className="bg-brand-sky/15 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="inline-block h-1 w-14 rounded-full bg-brand-amber" />
              <h2 className="mt-4 font-heading text-3xl font-semibold text-brand-navy">
                Our Areas of Expertise
              </h2>
              <p className="mt-3 max-w-xl text-brand-charcoal/80">
                Eleven sectors of deep, cross-disciplinary experience —
                explore how we can support your organization.
              </p>
            </div>
            <Link
              to="/expertise"
              className="hidden items-center gap-1.5 font-heading text-sm font-semibold text-brand-blue hover:text-brand-navy sm:flex"
            >
              View all expertise
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
 
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {expertiseAreas.map((area) => {
              const Icon = area.icon;
              return (
                <Link
                  key={area.slug}
                  to={`/expertise/${area.slug}`}
                  className="group flex items-center gap-4 rounded-xl border-t-4 border-brand-blue bg-white p-5 shadow-md transition-shadow hover:shadow-lg"
                >
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-brand-blue/10">
                    <Icon className="h-5 w-5 text-brand-blue" strokeWidth={1.75} />
                  </div>
                  <div className="flex flex-1 items-center justify-between gap-2">
                    <span className="font-heading text-sm font-semibold text-brand-navy">
                      {area.label}
                    </span>
                    <ArrowRight className="h-4 w-4 flex-none text-brand-charcoal/30 transition-transform group-hover:translate-x-1 group-hover:text-brand-blue" />
                  </div>
                </Link>
              );
            })}
          </div>
 
          <Link
            to="/expertise"
            className="mt-8 flex items-center justify-center gap-1.5 font-heading text-sm font-semibold text-brand-blue hover:text-brand-navy sm:hidden"
          >
            View all expertise
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
 
      {/* ================= WHY BREINSCOPE TEASER ================= */}
      <section className="bg-brand-navy py-20">
        <div className="mx-auto max-w-6xl px-6">
          <span className="inline-block h-1 w-14 rounded-full bg-brand-amber" />
          <h2 className="mt-4 font-heading text-3xl font-semibold text-white">
            Why Institutional Clients Choose Breinscope
          </h2>
          <p className="mt-3 max-w-2xl text-brand-sky">
            Twenty years of partnership, backed by financial stability,
            technical depth, and a reputation for delivering results.
          </p>
 
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {whyBreinscope.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-amber/20">
                    <Icon className="h-5 w-5 text-brand-amber" strokeWidth={1.75} />
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
 
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-1.5 font-heading text-sm font-semibold text-brand-amber hover:text-white"
          >
            More about Breinscope
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
 
      {/* ================= FEATURED PROJECTS ================= */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="inline-block h-1 w-14 rounded-full bg-brand-amber" />
              <h2 className="mt-4 font-heading text-3xl font-semibold text-brand-navy">
                Featured Projects
              </h2>
              <p className="mt-3 max-w-xl text-brand-charcoal/80">
                A glimpse of our recent work with institutional partners
                across the region.
              </p>
            </div>
            <Link
              to="/projects"
              className="hidden items-center gap-1.5 font-heading text-sm font-semibold text-brand-blue hover:text-brand-navy sm:flex"
            >
              View all projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
 
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {featuredProjects.map((project) => (
              <div
                key={project.client}
                className="flex flex-col rounded-xl border-t-4 border-brand-amber bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
              >
                <div className="mb-5 overflow-hidden rounded-lg">
                  <img
                    loading="lazy"
                    decoding="async"
                    src={project.image}
                    alt={project.client}
                    className="aspect-video w-full object-cover"
                  />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-medium text-brand-charcoal/60">
                  <CalendarDays className="h-3.5 w-3.5" />
                  {project.date}
                </div>
                <h3 className="mt-2 font-heading text-base font-semibold text-brand-navy">
                  {project.client}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-charcoal/80">
                  {project.work}
                </p>
              </div>
            ))}
          </div>
 
          <Link
            to="/projects"
            className="mt-8 flex items-center justify-center gap-1.5 font-heading text-sm font-semibold text-brand-blue hover:text-brand-navy sm:hidden"
          >
            View all projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
 
      {/* ================= REGIONAL FOOTPRINT TEASER ================= */}
      <section className="bg-brand-sky/15 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <span className="inline-block h-1 w-14 rounded-full bg-brand-amber" />
              <h2 className="mt-4 font-heading text-3xl font-semibold text-brand-navy">
                A Regional Footprint Across Africa
              </h2>
              <p className="mt-3 text-brand-charcoal/80">
                Five country offices supporting delivery across East and
                Central Africa, from our continental hub in Nairobi.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-brand-charcoal/80">
                <li>🇰🇪 Kenya — Nairobi (HQ) &amp; Kisumu</li>
                <li>🇸🇴 Somalia — Mogadishu</li>
                <li>🇷🇼 Rwanda — Kigali</li>
                <li>🇸🇸 South Sudan — Juba (via partner entity)</li>
              </ul>
              <Link
                to="/where-we-work"
                className="mt-6 inline-flex items-center gap-1.5 font-heading text-sm font-semibold text-brand-blue hover:text-brand-navy"
              >
                Explore our regional footprint
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
 
            {/* Decorative, non-interactive mini map — dragging and zoom
                disabled since this is a teaser, not the full map (that
                lives on the Where We Work page). */}
            <div className="relative isolate h-64 overflow-hidden rounded-2xl border border-brand-sky/30 bg-brand-sky/20 shadow-xl sm:h-85">
              <ClientOnly>
                <OfficesMap
                  offices={offices}
                  center={mapCenter}
                  zoom={4}
                  interactive={false}
                  showPopups={false}
                  showAttribution={false}
                />
              </ClientOnly>
            </div>
          </div>
        </div>
      </section>
 
      {/* ================= FAQ ================= */}
      {/* Visible FAQ + matching FAQPage JSON-LD (see Seo above), both
          fed from src/data/faqs.ts. */}
      <FaqSection
        faqs={homeFaqs}
        intro="Quick answers about who we are, where we work, and how to engage our team."
      />

      {/* ================= FINAL CTA ================= */}
      <section className="bg-brand-amber">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-16 text-center">
          <h2 className="font-heading text-3xl font-semibold text-brand-navy sm:text-4xl">
            Let's build something that lasts
          </h2>
          <p className="max-w-xl text-brand-navy/80">
            Whether you're a government agency, a donor, or an NGO, our
            team is ready to discuss your next programme.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-navy px-8 py-3.5 font-heading text-sm font-semibold text-white transition-colors hover:bg-brand-navy/90"
          >
            Start a Conversation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}