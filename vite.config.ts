import fs from 'node:fs'
import path from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// `vite preview` falls back to dist/index.html for /about, /contact, …
// instead of the prerendered dist/about/index.html that the production
// host serves. Map clean URLs to their prerendered file so local preview
// behaves like production.
function servePrerenderedRoutes(): Plugin {
  return {
    name: 'serve-prerendered-routes',
    configurePreviewServer(server) {
      const outDir = path.resolve(server.config.root, server.config.build.outDir)
      server.middlewares.use((req, _res, next) => {
        const [pathname, query = ''] = (req.url ?? '/').split('?')
        if (pathname !== '/' && !path.extname(pathname)) {
          const candidate = path.join(outDir, pathname, 'index.html')
          if (candidate.startsWith(outDir) && fs.existsSync(candidate)) {
            req.url = `${pathname.replace(/\/$/, '')}/index.html${query ? `?${query}` : ''}`
          }
        }
        next()
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    servePrerenderedRoutes(),
  ],
})
