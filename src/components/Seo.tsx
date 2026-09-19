import { Helmet } from "react-helmet-async";
 
const SITE_NAME = "Breinscope Consultants Limited";
const BASE_URL = "https://breinscope.co.ke"; // TODO: confirm final production domain
const DEFAULT_DESCRIPTION =
  "Breinscope Consultants Limited is a Kenyan-owned development consultancy delivering measurable impact across 11 sectors in East and Central Africa since 2002.";
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-default.jpg`; // TODO: add a real 1200x630 social share image to /public
 
interface SeoProps {
  /** Page-specific title. The site name is appended automatically. */
  title: string;
  /** 1–2 sentence page description, ideally under ~160 characters. */
  description?: string;
  /** Path only, starting with "/", e.g. "/about" or "/expertise/water-sewerage". */
  path: string;
  /** Absolute URL to a page-specific share image, if different from the default. */
  image?: string;
  /** Set true on pages that should NOT be indexed (rarely needed). */
  noindex?: boolean;
  /**
   * URLs of above-the-fold image(s) to preload for this page — e.g. the
   * current hero slide, a banner, or the first few grid thumbnails.
   * Keep this short (1–3 images); preloading too much defeats the point.
   */
  preloadImages?: string[];
}
 
export default function Seo({
  title,
  description = DEFAULT_DESCRIPTION,
  path,
  image = DEFAULT_OG_IMAGE,
  noindex = false,
  preloadImages = [],
}: SeoProps) {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const canonicalUrl = `${BASE_URL}${path}`;
 
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
 
      {/* Open Graph — used by WhatsApp, LinkedIn, Facebook link previews */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
 
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
 
      {/* Above-the-fold image preloading, per page */}
      {preloadImages.map((src) => (
        <link key={src} rel="preload" as="image" href={src} />
      ))}
    </Helmet>
  );
}