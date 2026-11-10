import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.tsx'

const app = (
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
)

const container = document.getElementById('root')!

// Every route is prerendered to static HTML at build time (see
// scripts/prerender.mjs) so search engines and AI crawlers get real
// content without running JavaScript. If the HTML on the page was
// prerendered for THIS path, hydrate it; otherwise (e.g. the 404 page
// served for an unknown URL) render from scratch.
const normalize = (path: string) => path.replace(/\/+$/, '') || '/'
const prerenderedFor = container.dataset.prerenderedPath

// Prerendered <title>/<meta>/<link> tags were placed in <head> for
// crawlers. React re-creates them from <Seo> on the client, so remove
// the static copies first to avoid duplicates and stale titles.
document.head.querySelectorAll('[data-prerender]').forEach((el) => el.remove())

if (prerenderedFor !== undefined && normalize(prerenderedFor) === normalize(window.location.pathname)) {
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}
