import { Link } from "react-router-dom";
import { ArrowRight, Plus } from "lucide-react";
import type { Faq } from "../lib/schema";

/**
 * Accordion FAQ built on native <details>/<summary>: keyboard and
 * screen-reader accessible out of the box, works without JavaScript,
 * and every answer stays in the HTML for search and AI crawlers even
 * while collapsed. Pair with faqPageSchema() on the page's <Seo>.
 */
export default function FaqSection({
  faqs,
  title = "Frequently Asked Questions",
  intro,
}: {
  faqs: Faq[];
  title?: string;
  intro?: string;
}) {
  return (
    <section id="faq" className="scroll-mt-20 bg-white py-16 sm:py-20" aria-labelledby="faq-heading">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.8fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="inline-block h-1 w-14 rounded-full bg-brand-amber" />
          <h2
            id="faq-heading"
            className="mt-4 font-heading text-2xl font-semibold text-brand-navy sm:text-3xl"
          >
            {title}
          </h2>
          {intro && <p className="mt-3 max-w-md text-brand-charcoal/80">{intro}</p>}
          <Link
            to="/contact"
            className="mt-6 hidden items-center gap-1.5 font-heading text-sm font-semibold text-brand-blue hover:text-brand-navy lg:inline-flex"
          >
            Still have a question? Contact us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="divide-y divide-brand-sky/30 border-y border-brand-sky/30">
          {faqs.map((faq, index) => (
            <details key={faq.question} className="group" open={index === 0}>
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-left [&::-webkit-details-marker]:hidden">
                <h3 className="font-heading text-base font-semibold text-brand-navy group-open:text-brand-blue">
                  {faq.question}
                </h3>
                <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue transition-transform group-open:rotate-45">
                  <Plus className="h-4 w-4" aria-hidden="true" />
                </span>
              </summary>
              <p className="pb-5 pr-2 text-sm leading-relaxed text-brand-charcoal/85 sm:pr-10 sm:text-base">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-1.5 font-heading text-sm font-semibold text-brand-blue hover:text-brand-navy lg:hidden"
        >
          Still have a question? Contact us
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
