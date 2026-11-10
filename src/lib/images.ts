// Full-width hero and banner photos ship in two sizes: `name.webp`
// (up to 1600px, for desktops) and `name-800.webp` (for phones). Spread
// responsiveImage(src) onto an <img> and the browser picks the smaller
// file on narrow screens: an iPhone downloads ~50 KB instead of ~150 KB.
//
// When adding a new hero/banner image, create both files, e.g. with
// https://squoosh.app (WebP, quality ~62, widths 1600 and 800).

const HAS_MOBILE_VARIANT = /^\/images\/(hero|banners)\/[^/]+\.webp$/;

export function hasMobileVariant(src: string): boolean {
  return HAS_MOBILE_VARIANT.test(src);
}

/** srcSet/sizes props for a full-width image, or just src if it has no variant. */
export function responsiveImage(src: string) {
  if (!hasMobileVariant(src)) return { src };
  return {
    src,
    srcSet: `${src.replace(/\.webp$/, "-800.webp")} 800w, ${src} 1600w`,
    sizes: "100vw",
  };
}
