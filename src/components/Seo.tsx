import { Helmet } from "react-helmet-async";
import { SITE_NAME, SITE_URL } from "../lib/schema";
import { responsiveImage } from "../lib/images";

const DEFAULT_DESCRIPTION =
  "Breinscope Consultants Limited is a Kenyan-owned development consultancy delivering measurable impact across 11 sectors in East and Central Africa since 2002.";
// 1200x630 social share image, generated from the brand colours/logo.
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.jpg`;

interface SeoProps {
  /** Page-specific title. The site name is appended automatically. */
  title: string;
  /** 1–2 sentence page description, ideally 120–160 characters. */
  description?: string;
  /** Path only, starting with "/", e.g. "/about" or "/expertise/water-sewerage". */
  path: string;
  /** Page-specific share image: absolute URL or a site path like "/images/x.jpg". */
  image?: string;
  /** "article" for insight posts; "website" for everything else. */
  type?: "website" | "article";
  /** Set true on pages that should NOT be indexed (rarely needed). */
  noindex?: boolean;
  /**
   * URLs of above-the-fold image(s) to preload for this page — e.g. the
   * current hero slide, a banner, or the first few grid thumbnails.
   * Keep this short (1–3 images); preloading too much defeats the point.
   */
  preloadImages?: string[];
  /** Schema.org JSON-LD object(s) for this page — see src/lib/schema.ts. */
  jsonLd?: object | object[];
}

export default function Seo({
  title,
  description = DEFAULT_DESCRIPTION,
  path,
  image = DEFAULT_OG_IMAGE,
  type = "website",
  noindex = false,
  preloadImages = [],
  jsonLd,
}: SeoProps) {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const canonicalUrl = `${SITE_URL}${path}`;
  const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;
  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <>
      <Helmet>
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta
          name="robots"
          content={
            noindex
              ? "noindex, nofollow"
              : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          }
        />

        {/* Open Graph — used by WhatsApp, LinkedIn, Facebook link previews */}
        <meta property="og:type" content={type} />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:locale" content="en_KE" />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:alt" content={title} />

        {/* Twitter / X card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />

        {/* Above-the-fold image preloading, per page */}
        {preloadImages.map((src) => {
          const { srcSet, sizes } = responsiveImage(src);
          return (
            <link
              key={src}
              rel="preload"
              as="image"
              href={src}
              imageSrcSet={srcSet}
              imageSizes={sizes}
              fetchPriority="high"
            />
          );
        })}
      </Helmet>

      {/* JSON-LD lives in the body (fully supported by Google) rather
          than inside <Helmet>, so it prerenders and hydrates as-is. */}
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
        />
      ))}
    </>
  );
}
