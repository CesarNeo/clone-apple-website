import { sentryVitePlugin } from '@sentry/vite-plugin'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    react(),
    sentryVitePlugin({
      org: 'cesar-dy',
      project: 'javascript-react',
    }),
  ],

  build: {
    sourcemap: true,
  },
})
