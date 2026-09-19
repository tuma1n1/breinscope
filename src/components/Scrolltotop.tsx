import { useEffect } from "react";
import { useLocation } from "react-router-dom";
 
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
 
  useEffect(() => {
    if (hash) {
      // Give the new page a moment to render before looking for the
      // target element — without this, elements that mount later
      // (behind data fetches, etc.) can be missed on the first try.
      const id = hash.replace("#", "");
      const scrollToElement = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          // Hash didn't match anything on the page (typo, renamed
          // section, etc.) — fall back to the top rather than leaving
          // the page stuck at whatever scroll position it was at.
          window.scrollTo(0, 0);
        }
      };
      const timeout = setTimeout(scrollToElement, 0);
      return () => clearTimeout(timeout);
    }
 
    // No hash — plain navigation to a new page, scroll to the top.
    window.scrollTo(0, 0);
  }, [pathname, hash]);
 
  return null;
}