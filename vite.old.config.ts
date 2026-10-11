import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

/**
 * The pre-redesign site, kept online as "v1".
 *
 * Source lives untouched in backup/. It is served under /v1/ and built into
 * dist/v1/ as the second step of `npm run build`, so it deploys with the
 * current site and the footer link to it always works.
 *
 *   npm run dev:old   →  http://localhost:5180/v1/   (v1 on its own)
 *   npm run dev       →  http://localhost:5173/v1/   (proxied to the above)
 */
export default defineConfig({
  root: path.resolve(__dirname, 'backup'),
  publicDir: path.resolve(__dirname, 'public'),
  base: '/v1/',
  plugins: [react(), tailwindcss()],
  server: { port: 5180, strictPort: true },
  preview: { port: 4180, strictPort: true },
  build: { outDir: path.resolve(__dirname, 'dist/v1'), emptyOutDir: true },
  assetsInclude: ['**/*.pdf'],
})
