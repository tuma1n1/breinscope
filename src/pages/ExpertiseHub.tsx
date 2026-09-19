import { Link } from "react-router-dom";
import { ArrowRight, Compass, ClipboardCheck, Settings2 } from "lucide-react";
import { expertiseAreas } from "../data/expertise";
import Seo from "../components/Seo";
 
const serviceMatrix = [
  {
    icon: Compass,
    title: "Project Management",
    items: [
      "Project Planning and Design",
      "Feasibility Surveys & Pre-Investment Studies",
      "Baseline Surveys",
      "Value Chain Analysis and Development",
      "Business Plan Development & Marketing Strategies",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Performance Reviews",
    items: [
      "Results Based Management",
      "Programme and Project Evaluations",
      "Institutional Assessments",
      "Monitoring, Operational Reviews & Third-Party Verifications",
      "Impact Evaluations",
    ],
  },
  {
    icon: Settings2,
    title: "Organization Development & Capacity Building",
    items: [
      "Strategic Planning",
      "Policy Formulations / Reviews",
      "Change Management / Organizational Re-engineering",
      "Public Relations & Marketing",
      "Job Evaluations & Staff Appraisals",
    ],
  },
];
 
export default function ExpertiseHub() {
  return (
    <main className="bg-white font-body text-brand-charcoal">
      <Seo
        title="Our Expertise"
        description="Eleven sectors of deep, practical expertise — from agriculture and climate change to digital development and governance — delivered across East and Central Africa."
        path="/expertise"
      />
      {/* ================= HERO ================= */}
      <section className="bg-brand-navy py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="font-heading text-sm font-semibold uppercase text-brand-amber">
            Our Expertise
          </p>
          <h1 className="mt-3 font-heading text-4xl font-semibold text-white sm:text-5xl">
            Eleven Sectors of Deep, Practical Expertise
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-brand-sky">
            Breinscope's multidisciplinary team of Sociologists, Economists,
            Engineers, Public Health specialists, and sector experts
            delivers across the full spectrum of Africa's development
            priorities — from agriculture to digital transformation.
          </p>
        </div>
      </section>
 
      {/* ================= SECTOR GRID ================= */}
      <section className="bg-brand-sky/15 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {expertiseAreas.map((area) => {
              const Icon = area.icon;
              return (
                <Link
                  key={area.slug}
                  to={`/expertise/${area.slug}`}
                  className="group flex flex-col rounded-xl border-t-4 border-brand-blue bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue/10 transition-colors group-hover:bg-brand-amber/15">
                    <Icon
                      className="h-6 w-6 text-brand-blue transition-colors group-hover:text-brand-amber"
                      strokeWidth={1.75}
                    />
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-semibold text-brand-navy">
                    {area.label}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-charcoal/80">
                    {area.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 font-heading text-sm font-semibold text-brand-blue group-hover:text-brand-navy">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
 
      {/* ================= SERVICE MATRIX (cross-cutting) ================= */}
      <section className="bg-brand-navy py-20">
        <div className="mx-auto max-w-6xl px-6">
          <span className="inline-block h-1 w-14 rounded-full bg-brand-amber" />
          <h2 className="mt-4 font-heading text-3xl font-semibold text-white">
            How We Work
          </h2>
          <p className="mt-3 max-w-2xl text-brand-sky">
            Across every sector above, our engagements draw on the same
            three core service capabilities.
          </p>
 
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {serviceMatrix.map((group) => {
              const Icon = group.icon;
              return (
                <div
                  key={group.title}
                  className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-amber/15">
                    <Icon className="h-5 w-5 text-brand-amber" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-4 font-heading text-base font-semibold text-white">
                    {group.title}
                  </h3>
                  <ul className="mt-3 space-y-1.5">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-sm leading-relaxed text-brand-sky/90"
                      >
                        <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-brand-amber" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
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
              Not sure which sector fits your project?
            </h2>
            <p className="mt-2 text-brand-navy/80">
              Talk to our team — we'll point you to the right expertise.
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