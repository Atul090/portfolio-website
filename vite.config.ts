import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    // In development, /v1/ is served by the v1 dev server (`npm run dev:old`).
    // In production it is a static folder, dist/v1/, built by `npm run build`.
    proxy: {
      '/v1': { target: 'http://localhost:5180', ws: true },
    },
  },
  // `vite preview` serves dist/ directly, including dist/v1/, so no proxy there.
  preview: { proxy: {} },
  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv', '**/*.pdf'],
})
