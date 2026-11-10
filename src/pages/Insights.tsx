import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { insights } from "../data/insights";
import Seo from "../components/Seo";
import { breadcrumbSchema } from "../lib/schema";
 
export default function Insights() {
  return (
    <main className="bg-white font-body text-brand-charcoal">
      <Seo
        title="Insights"
        description="Thought leadership from Breinscope Consultants on water safety, climate resilience, capacity building, and development practice across Africa."
        path="/insights"
        jsonLd={breadcrumbSchema([{ name: "Insights", path: "/insights" }])}
        preloadImages={[insights[0].image]}
      />
      {/* ================= HERO ================= */}
      <section className="bg-brand-navy py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="font-heading text-sm font-semibold uppercase text-brand-amber">
            Insights
          </p>
          <h1 className="mt-3 font-heading text-4xl font-semibold text-white sm:text-5xl">
            Perspectives from Our Project Work
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-brand-sky">
            Reflections and practical lessons drawn from two decades of
            development consulting across East and Central Africa.
          </p>
        </div>
      </section>
 
      {/* ================= ARTICLE GRID ================= */}
      <section className="bg-brand-sky/15 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {insights.map((article) => (
              <Link
                key={article.slug}
                to={`/insights/${article.slug}`}
                className="group flex flex-col overflow-hidden rounded-xl border-t-4 border-brand-blue bg-white shadow-md transition-shadow hover:shadow-lg"
              >
                {/* Same source image as InsightDetail.tsx's cover,
                    just cropped shorter here for the card thumbnail. */}
                <img
                  src={article.image}
                  alt={article.title}
                  className="aspect-video w-full border-b border-brand-sky/20 object-cover"
                />
 
                <div className="flex flex-1 flex-col p-6">
                  <span className="inline-block w-fit rounded-full bg-brand-amber/15 px-2.5 py-0.5 font-heading text-[10px] font-semibold uppercase tracking-wide text-brand-amber">
                    {article.category}
                  </span>
                  <h3 className="mt-3 font-heading text-base font-semibold leading-snug text-brand-navy">
                    {article.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-charcoal/80">
                    {article.excerpt}
                  </p>
 
                  <div className="mt-4 flex items-center justify-between border-t border-brand-sky/20 pt-3 text-xs text-brand-charcoal/60">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {article.readTime}
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-brand-blue transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
 
      {/* ================= CTA BAND ================= */}
      <section className="bg-brand-amber">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-14 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-heading text-2xl font-semibold text-brand-navy">
              Have a project that could use our expertise?
            </h2>
            <p className="mt-2 text-brand-navy/80">
              Let's talk about how our experience applies to your context.
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