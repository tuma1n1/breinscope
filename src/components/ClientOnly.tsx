import { Suspense, useSyncExternalStore, type ReactNode } from "react";

const noopSubscribe = () => () => {};

/**
 * Renders `children` only in the browser, after the first client render.
 *
 * Used for Leaflet maps: Leaflet touches `window` the moment it's
 * imported, so it can't run during the build-time prerender (see
 * scripts/prerender.mjs). The prerendered HTML and the first client
 * render both show the `fallback`, so hydration matches, and the real
 * map swaps in right after. Pair it with React.lazy() so Leaflet is
 * also split out of the main JS bundle.
 */
export default function ClientOnly({
  children,
  fallback = null,
}: {
  children: ReactNode;
  fallback?: ReactNode;
}) {
  // false on the server and during hydration, true on the client after —
  // React re-renders with the client value once hydration completes.
  const mounted = useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );

  if (!mounted) return <>{fallback}</>;
  return <Suspense fallback={fallback}>{children}</Suspense>;
}
