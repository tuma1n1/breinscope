// Server entry used ONLY at build time by scripts/prerender.mjs to turn
// each route into static HTML. Never shipped to the browser.
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.tsx'
import { expertiseAreas } from './data/expertise'
import { insights } from './data/insights'

/** Every indexable route on the site. The sitemap must list exactly these. */
export const routes: string[] = [
  '/',
  '/about',
  '/expertise',
  ...expertiseAreas.map((area) => `/expertise/${area.slug}`),
  '/projects',
  '/clients',
  '/where-we-work',
  '/insights',
  ...insights.map((article) => `/insights/${article.slug}`),
  '/contact',
  '/privacy-policy',
]

export function render(url: string): string {
  return renderToString(
    <StrictMode>
      <HelmetProvider>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </HelmetProvider>
    </StrictMode>,
  )
}
