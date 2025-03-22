import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {}, // ✅ Ensures `process` is available globally
  },
  server: {
    host: true, // ✅ Allows access from local network
  },
  base: '/',
  resolve: {
    alias: {
      '@': '/src', // ✅ Enables cleaner imports (e.g., `@/components/MyComponent`)
    },
  },
})
