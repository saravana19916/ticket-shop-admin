import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(
{
  plugins: [react()],
  build: {
  chunkSizeWarningLimit: 50000,
  },
  define: {
    'process.env': {}
  },
  server: {
    host: true,
  },
  base: '/',
})
