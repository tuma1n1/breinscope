import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Search, X, Globe2, Layers, CalendarRange, Building2 } from "lucide-react";
import {
  projects,
  sectorOptions,
  clientTypeOptions,
  type ClientType,
} from "../data/projects";
import Seo from "../components/Seo";
import { breadcrumbSchema } from "../lib/schema";
 
const ALL = "All";
 
export default function Projects() {
  const [search, setSearch] = useState("");
  const [sector, setSector] = useState<string>(ALL);
  const [country, setCountry] = useState<string>(ALL);
  const [clientType, setClientType] = useState<ClientType | typeof ALL>(ALL);
  const [year, setYear] = useState<string>(ALL);
 
  const countryOptions = useMemo(
    () => Array.from(new Set(projects.map((p) => p.country))).sort(),
    []
  );
  const yearOptions = useMemo(
    () => Array.from(new Set(projects.map((p) => p.year))).sort((a, b) => b - a),
    []
  );
 
  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    return projects.filter((p) => {
      if (sector !== ALL && p.sector !== sector) return false;
      if (country !== ALL && p.country !== country) return false;
      if (clientType !== ALL && p.clientType !== clientType) return false;
      if (year !== ALL && p.year !== Number(year)) return false;
      if (
        query &&
        !p.client.toLowerCase().includes(query) &&
        !p.title.toLowerCase().includes(query)
      ) {
        return false;
      }
      return true;
    });
  }, [search, sector, country, clientType, year]);
 
  const activeFilterCount = [sector, country, clientType, year].filter(
    (v) => v !== ALL
  ).length;
 
  function resetFilters() {
    setSearch("");
    setSector(ALL);
    setCountry(ALL);
    setClientType(ALL);
    setYear(ALL);
  }
 
  const impactStats = [
    { icon: Layers, value: `${projects.length}+`, label: "Completed Assignments" },
    { icon: Globe2, value: `${countryOptions.length}`, label: "Countries Served" },
    { icon: Building2, value: `${sectorOptions.length}`, label: "Sectors Covered" },
    { icon: CalendarRange, value: "2011–2025", label: "Years of Assignments Shown" },
  ];
 
  return (
    <main className="bg-white font-body text-brand-charcoal">
      <Seo
        title="Projects & Impact"
        description="Browse 60+ completed assignments since 2011 across agriculture, water, climate, governance, and health — filterable by sector, country, and client type."
        path="/projects"
        jsonLd={breadcrumbSchema([{ name: "Projects & Impact", path: "/projects" }])}
      />
      {/* ================= HERO ================= */}
      <section className="bg-brand-navy py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="font-heading text-sm font-semibold uppercase text-brand-amber">
            Projects &amp; Impact
          </p>
          <h1 className="mt-3 font-heading text-4xl font-semibold text-white sm:text-5xl">
            Two Decades of Measurable Impact
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-brand-sky">
            Explore a selection of our completed assignments across
            sectors, countries, and client types since 2011.
          </p>
        </div>
 
        {/* Impact metrics dashboard */}
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-6 px-6 sm:grid-cols-4">
          {impactStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="text-center">
                <Icon className="mx-auto h-5 w-5 text-brand-amber" strokeWidth={1.75} />
                <p className="mt-2 font-heading text-2xl font-bold text-brand-green sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-brand-sky/90">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </section>
 
      {/* ================= FILTERS + RESULTS ================= */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          {/* Search */}
          <div className="relative">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-charcoal/40" />
            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search by client or project title..."
              className="w-full rounded-lg border border-brand-sky/40 bg-white py-3 pl-10 pr-4 text-sm text-brand-charcoal outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
            />
          </div>
 
          {/* Filter dropdowns */}
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <select
              value={sector}
              onChange={(event) => setSector(event.target.value)}
              className="rounded-lg border border-brand-sky/40 bg-white px-3 py-2.5 text-sm text-brand-charcoal outline-none focus:border-brand-blue"
            >
              <option value={ALL}>All Sectors</option>
              {sectorOptions.map((s) => (
                <option key={s.slug} value={s.slug}>
                  {s.label}
                </option>
              ))}
            </select>
 
            <select
              value={country}
              onChange={(event) => setCountry(event.target.value)}
              className="rounded-lg border border-brand-sky/40 bg-white px-3 py-2.5 text-sm text-brand-charcoal outline-none focus:border-brand-blue"
            >
              <option value={ALL}>All Countries</option>
              {countryOptions.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
 
            <select
              value={clientType}
              onChange={(event) => setClientType(event.target.value as ClientType | typeof ALL)}
              className="rounded-lg border border-brand-sky/40 bg-white px-3 py-2.5 text-sm text-brand-charcoal outline-none focus:border-brand-blue"
            >
              <option value={ALL}>All Client Types</option>
              {clientTypeOptions.map((ct) => (
                <option key={ct} value={ct}>
                  {ct}
                </option>
              ))}
            </select>
 
            <select
              value={year}
              onChange={(event) => setYear(event.target.value)}
              className="rounded-lg border border-brand-sky/40 bg-white px-3 py-2.5 text-sm text-brand-charcoal outline-none focus:border-brand-blue"
            >
              <option value={ALL}>All Years</option>
              {yearOptions.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>
 
          {/* Active filter summary */}
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-brand-charcoal/70">
              Showing <span className="font-semibold text-brand-navy">{filtered.length}</span>{" "}
              of {projects.length} projects
            </p>
            {(activeFilterCount > 0 || search) && (
              <button
                type="button"
                onClick={resetFilters}
                className="inline-flex items-center gap-1 text-sm font-medium text-brand-blue hover:text-brand-navy"
              >
                <X className="h-3.5 w-3.5" />
                Clear filters
              </button>
            )}
          </div>
 
          {/* Results grid */}
          {filtered.length === 0 ? (
            <div className="mt-10 rounded-xl border border-dashed border-brand-sky/40 bg-brand-sky/10 p-6 text-center sm:p-12">
              <p className="font-heading text-sm font-semibold text-brand-navy">
                No projects match these filters
              </p>
              <p className="mt-1 text-sm text-brand-charcoal/70">
                Try clearing a filter or searching a different term.
              </p>
            </div>
          ) : (
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((project) => (
                <div
                  key={project.id}
                  className="flex flex-col rounded-xl border-t-4 border-brand-blue bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <Link
                      to={`/expertise/${project.sector}`}
                      className="rounded-full bg-brand-blue/10 px-2.5 py-0.5 font-heading text-[10px] font-semibold uppercase tracking-wide text-brand-blue hover:bg-brand-blue/20"
                    >
                      {project.sectorLabel}
                    </Link>
                    <span className="rounded-full bg-brand-green/10 px-2.5 py-0.5 font-heading text-[10px] font-semibold uppercase tracking-wide text-brand-green">
                      {project.status}
                    </span>
                  </div>
 
                  <h3 className="mt-3 font-heading text-base font-semibold leading-snug text-brand-navy">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-brand-charcoal/70">{project.client}</p>
 
                  <div className="mt-4 flex flex-1 flex-col justify-end gap-1.5 border-t border-brand-sky/20 pt-3 text-xs text-brand-charcoal/60">
                    <div className="flex items-center gap-1.5">
                      <Globe2 className="h-3.5 w-3.5 text-brand-blue" />
                      {project.country}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CalendarRange className="h-3.5 w-3.5 text-brand-blue" />
                      {project.date}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Building2 className="h-3.5 w-3.5 text-brand-blue" />
                      {project.clientType}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
 
      {/* ================= CTA BAND ================= */}
      <section className="bg-brand-amber">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-14 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-heading text-2xl font-semibold text-brand-navy">
              Have a project in mind?
            </h2>
            <p className="mt-2 text-brand-navy/80">
              Let's discuss how our track record can support your programme.
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