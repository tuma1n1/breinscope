// ---------------------------------------------------------------------
// Schema.org JSON-LD builders.
//
// Structured data helps Google show rich results (FAQ answers, breadcrumbs,
// article info) and gives AI answer engines (ChatGPT, Perplexity, Gemini,
// Claude) unambiguous facts about the company to cite. The site-wide
// Organization schema lives in index.html; these builders cover the
// page-specific schemas, rendered via the `jsonLd` prop on <Seo>.
// ---------------------------------------------------------------------

export const SITE_URL = "https://breinscope.co.ke";
export const SITE_NAME = "Breinscope Consultants Limited";
export const ORG_ID = `${SITE_URL}/#organization`;

export interface Faq {
  question: string;
  answer: string;
}

export function faqPageSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

/** Pass the trail AFTER Home, e.g. [{ name: "Expertise", path: "/expertise" }]. */
export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  const items = [{ name: "Home", path: "/" }, ...trail];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function serviceSchema(service: {
  name: string;
  description: string;
  path: string;
  serviceTypes: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: `${SITE_URL}${service.path}`,
    serviceType: service.serviceTypes,
    provider: { "@id": ORG_ID },
    areaServed: ["Kenya", "Somalia", "Rwanda", "South Sudan", "Africa"],
  };
}

const MONTHS = [
  "january", "february", "march", "april", "may", "june",
  "july", "august", "september", "october", "november", "december",
];

/** "September 2026" -> "2026-09-01" (schema.org wants ISO 8601 dates). */
export function monthYearToIso(value: string): string | undefined {
  const match = value.trim().toLowerCase().match(/^([a-z]+)\s+(\d{4})$/);
  if (!match) return undefined;
  const month = MONTHS.indexOf(match[1]);
  if (month === -1) return undefined;
  return `${match[2]}-${String(month + 1).padStart(2, "0")}-01`;
}

export function articleSchema(article: {
  title: string;
  description: string;
  path: string;
  image: string;
  date: string;
  author: string;
  category: string;
}) {
  const published = monthYearToIso(article.date);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: [`${SITE_URL}${article.image}`],
    ...(published && { datePublished: published, dateModified: published }),
    articleSection: article.category,
    author: { "@type": "Organization", name: article.author, url: SITE_URL },
    publisher: { "@id": ORG_ID },
    mainEntityOfPage: `${SITE_URL}${article.path}`,
  };
}
