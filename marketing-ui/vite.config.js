import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dns from 'dns';

dns.setDefaultResultOrder('verbatim');

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setupTest.js",
    isolate: false,
  }
})
