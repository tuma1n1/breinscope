import { Link, useParams } from "react-router-dom";
import { ArrowRight, ArrowLeft, CheckCircle2, Briefcase } from "lucide-react";
import { expertiseAreas } from "../data/expertise";
import { sectorContent } from "../data/sectorContent";
import { projects } from "../data/projects";
import Seo from "../components/Seo";
import { responsiveImage } from "../lib/images";
import { breadcrumbSchema, serviceSchema } from "../lib/schema";
 
export default function ExpertiseSector() {
  const { slug } = useParams<{ slug: string }>();
  const area = expertiseAreas.find((item) => item.slug === slug);
  const content = slug ? sectorContent[slug] : undefined;
 
  // Not-found state — covers a mistyped/removed slug rather than a
  // blank page or router crash.
  if (!area || !content) {
    return (
      <main className="bg-white py-24 text-center font-body text-brand-charcoal">
        <Seo
          title="Sector Not Found"
          description="This sector page may have been moved or no longer exists."
          path={`/expertise/${slug ?? ""}`}
          noindex
        />
        <p className="font-heading text-sm font-semibold uppercase text-brand-amber">
          Our Expertise
        </p>
        <h1 className="mt-3 font-heading text-2xl font-semibold text-brand-navy">
          Sector not found
        </h1>
        <p className="mx-auto mt-3 max-w-md text-brand-charcoal/70">
          This sector page may have been moved or no longer exists.
        </p>
        <Link
          to="/expertise"
          className="mt-6 inline-flex items-center gap-1.5 font-heading text-sm font-semibold text-brand-blue hover:text-brand-navy"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Our Expertise
        </Link>
      </main>
    );
  }
 
  const Icon = area.icon;
  const relatedProjects = projects
    .filter((project) => project.sector === slug)
    .sort((a, b) => b.year - a.year)
    .slice(0, 6);
 
  const relatedClients = Array.from(
    new Set(projects.filter((project) => project.sector === slug).map((p) => p.client))
  ).slice(0, 8);
 
  const otherAreas = expertiseAreas.filter((item) => item.slug !== slug).slice(0, 3);
 
  return (
    <main className="bg-white font-body text-brand-charcoal">
      <Seo
        title={area.label}
        description={area.description}
        path={`/expertise/${area.slug}`}
        preloadImages={[area.image]}
        jsonLd={[
          serviceSchema({
            name: area.label,
            description: area.description,
            path: `/expertise/${area.slug}`,
            serviceTypes: sectorContent[area.slug]?.focusAreas ?? [],
          }),
          breadcrumbSchema([
            { name: "Our Expertise", path: "/expertise" },
            { name: area.label, path: `/expertise/${area.slug}` },
          ]),
        ]}
      />
      {/* ================= HERO / BANNER ================= */}
      <section className="relative overflow-hidden bg-brand-navy">
        {/* Sector banner — filename matches area.slug directly, e.g.
            /images/banners/water-sewerage.jpg. If your actual files use
            a different naming pattern, rename them to match the slug
            (see expertise.ts) rather than editing this line per sector. */}
        <img
          {...responsiveImage(area.image)}
          alt={area.label}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-navy/75" />
 
        <div className="relative mx-auto max-w-4xl px-6 py-20 text-center">
          <Link
            to="/expertise"
            className="inline-flex items-center gap-1.5 text-sm text-brand-sky hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Our Expertise
          </Link>
 
          <div className="mx-auto mt-6 flex h-14 w-14 items-center justify-center rounded-full bg-brand-amber/15">
            <Icon className="h-7 w-7 text-brand-amber" strokeWidth={1.75} />
          </div>
          <h1 className="mt-5 font-heading text-3xl font-semibold text-white sm:text-4xl">
            {area.label}
          </h1>
        </div>
      </section>
 
      {/* ================= INTRO + FOCUS AREAS ================= */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="inline-block h-1 w-14 rounded-full bg-brand-amber" />
              <h2 className="mt-4 font-heading text-2xl font-semibold text-brand-navy">
                Overview
              </h2>
              <p className="mt-4 text-base leading-relaxed text-brand-charcoal/90">
                {content.intro}
              </p>
 
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand-navy px-6 py-3 font-heading text-sm font-semibold text-white transition-colors hover:bg-brand-navy/90"
              >
                Talk to Our Team
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
 
            <div className="rounded-2xl border-t-4 border-brand-blue bg-brand-sky/10 p-6 shadow-sm">
              <h3 className="font-heading text-lg font-semibold text-brand-navy">
                Key Focus Areas
              </h3>
              <ul className="mt-4 space-y-2.5">
                {content.focusAreas.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm text-brand-charcoal/85">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-brand-blue" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
 
      {/* ================= RELATED PROJECTS ================= */}
      {relatedProjects.length > 0 && (
        <section className="bg-brand-sky/15 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <span className="inline-block h-1 w-14 rounded-full bg-brand-amber" />
                <h2 className="mt-4 font-heading text-2xl font-semibold text-brand-navy">
                  Related Projects
                </h2>
                <p className="mt-2 text-brand-charcoal/80">
                  A sample of our recent work in {area.label}.
                </p>
              </div>
              <Link
                to="/projects"
                className="inline-flex items-center gap-1.5 whitespace-nowrap font-heading text-sm font-semibold text-brand-blue hover:text-brand-navy"
              >
                View all projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
 
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.map((project) => (
                <div
                  key={project.id}
                  className="rounded-xl border-t-4 border-brand-blue bg-white p-6 shadow-md"
                >
                  <p className="font-heading text-xs font-semibold uppercase tracking-wide text-brand-amber">
                    {project.date}
                  </p>
                  <h3 className="mt-2 font-heading text-base font-semibold leading-snug text-brand-navy">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-brand-charcoal/70">{project.client}</p>
                  <p className="mt-3 text-xs text-brand-charcoal/50">{project.country}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
 
      {/* ================= RELATED CLIENTS ================= */}
      {relatedClients.length > 0 && (
        <section className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-brand-blue" />
              <h2 className="font-heading text-2xl font-semibold text-brand-navy">
                Clients We've Worked With in This Sector
              </h2>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {relatedClients.map((client) => (
                <span
                  key={client}
                  className="rounded-full border border-brand-sky/40 bg-brand-sky/10 px-4 py-2 text-sm font-medium text-brand-navy"
                >
                  {client}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}
 
      {/* ================= OTHER SECTORS ================= */}
      <section className="bg-brand-sky/15 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-heading text-xl font-semibold text-brand-navy">
            Explore Other Sectors
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {otherAreas.map((item) => {
              const OtherIcon = item.icon;
              return (
                <Link
                  key={item.slug}
                  to={`/expertise/${item.slug}`}
                  className="group flex items-center gap-3 rounded-xl border border-brand-sky/30 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-brand-blue/10">
                    <OtherIcon className="h-4 w-4 text-brand-blue" strokeWidth={1.75} />
                  </div>
                  <span className="text-sm font-medium text-brand-navy group-hover:text-brand-blue">
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
 
      {/* ================= CTA BAND ================= */}
      <section className="bg-brand-amber">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-14 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-heading text-2xl font-semibold text-brand-navy">
              Ready to discuss your next project?
            </h2>
            <p className="mt-2 text-brand-navy/80">
              Our team is ready to help you achieve measurable impact.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-brand-navy px-6 py-3 font-heading text-sm font-semibold text-white transition-colors hover:bg-brand-navy/90"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}