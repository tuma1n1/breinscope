import { Link, useParams } from "react-router-dom";
import { ArrowRight, ArrowLeft, Calendar, Clock, FileText } from "lucide-react";
import { insights } from "../data/insights";
import { projects } from "../data/projects";
import Seo from "../components/Seo";
 
export default function InsightDetail() {
  const { slug } = useParams<{ slug: string }>();
  const article = insights.find((item) => item.slug === slug);
 
  // Not-found state — a mistyped or removed slug shouldn't be a blank
  // page or a router crash.
  if (!article) {
    return (
      <main className="bg-white py-24 text-center font-body text-brand-charcoal">
        <Seo
          title="Article Not Found"
          description="This article may have been moved or no longer exists."
          path={`/insights/${slug ?? ""}`}
          noindex
        />
        <p className="font-heading text-sm font-semibold uppercase text-brand-amber">
          Insights
        </p>
        <h1 className="mt-3 font-heading text-2xl font-semibold text-brand-navy">
          Article not found
        </h1>
        <p className="mx-auto mt-3 max-w-md text-brand-charcoal/70">
          This article may have been moved or no longer exists.
        </p>
        <Link
          to="/insights"
          className="mt-6 inline-flex items-center gap-1.5 font-heading text-sm font-semibold text-brand-blue hover:text-brand-navy"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Insights
        </Link>
      </main>
    );
  }
 
  const relatedProjects = projects.filter((project) =>
    article.relatedProjectIds.includes(project.id)
  );
 
  const otherArticles = insights
    .filter((item) => item.slug !== article.slug)
    .slice(0, 3);
 
  return (
    <main className="bg-white font-body text-brand-charcoal">
      <Seo
        title={article.title}
        description={article.excerpt}
        path={`/insights/${article.slug}`}
      />
      {/* ================= HEADER ================= */}
      <section className="bg-brand-navy py-20">
        <div className="mx-auto max-w-3xl px-6">
          <Link
            to="/insights"
            className="inline-flex items-center gap-1.5 text-sm text-brand-sky hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Insights
          </Link>
 
          <span className="mt-6 inline-block rounded-full bg-brand-amber/15 px-2.5 py-0.5 font-heading text-[10px] font-semibold uppercase tracking-wide text-brand-amber">
            {article.category}
          </span>
          <h1 className="mt-4 font-heading text-3xl font-semibold leading-tight text-white sm:text-4xl">
            {article.title}
          </h1>
 
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-brand-sky">
            <span>{article.author}</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {article.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {article.readTime}
            </span>
          </div>
        </div>
      </section>
 
      {/* ================= COVER IMAGE ================= */}
      {/* Filename matches article.slug directly — same image reused at
          card-thumbnail size on the Insights listing page. */}
      <div className="mx-auto -mt-10 max-w-4xl px-6">
        <div className="overflow-hidden rounded-2xl shadow-xl">
          <img
            src={article.image}
            alt={article.title}
            className="aspect-2/1 w-full object-cover"
          />
        </div>
      </div>
 
      {/* ================= ARTICLE BODY ================= */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          <div className="space-y-5">
            {article.body.map((paragraph, index) => (
              <p
                key={index}
                className="text-base leading-relaxed text-brand-charcoal/90"
              >
                {paragraph}
              </p>
            ))}
          </div>
 
          {/* ---------------- Related projects ---------------- */}
          {relatedProjects.length > 0 && (
            <div className="mt-12 rounded-xl border-t-4 border-brand-blue bg-brand-sky/10 p-6 shadow-sm">
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-brand-blue" />
                <p className="font-heading text-sm font-semibold uppercase tracking-wide text-brand-navy">
                  Related Assignments
                </p>
              </div>
              <ul className="mt-4 space-y-3">
                {relatedProjects.map((project) => (
                  <li key={project.id} className="text-sm">
                    <p className="font-heading font-semibold text-brand-navy">
                      {project.title}
                    </p>
                    <p className="mt-0.5 text-brand-charcoal/70">
                      {project.client} · {project.date}
                    </p>
                  </li>
                ))}
              </ul>
              <Link
                to="/projects"
                className="mt-4 inline-flex items-center gap-1.5 font-heading text-sm font-semibold text-brand-blue hover:text-brand-navy"
              >
                View all projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )}
        </div>
      </section>
 
      {/* ================= MORE INSIGHTS ================= */}
      {otherArticles.length > 0 && (
        <section className="bg-brand-sky/15 py-16">
          <div className="mx-auto max-w-6xl px-6">
            <span className="inline-block h-1 w-14 rounded-full bg-brand-amber" />
            <h2 className="mt-4 font-heading text-2xl font-semibold text-brand-navy">
              More Insights
            </h2>
 
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {otherArticles.map((item) => (
                <Link
                  key={item.slug}
                  to={`/insights/${item.slug}`}
                  className="group flex flex-col rounded-xl border-t-4 border-brand-blue bg-white p-5 shadow-md transition-shadow hover:shadow-lg"
                >
                  <span className="inline-block w-fit rounded-full bg-brand-amber/15 px-2 py-0.5 font-heading text-[10px] font-semibold uppercase tracking-wide text-brand-amber">
                    {item.category}
                  </span>
                  <h3 className="mt-3 font-heading text-sm font-semibold leading-snug text-brand-navy">
                    {item.title}
                  </h3>
                  <span className="mt-3 inline-flex items-center gap-1 font-heading text-xs font-semibold text-brand-blue group-hover:text-brand-navy">
                    Read more
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
 
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