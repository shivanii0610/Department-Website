import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      // Allow serving files from the Administration images folder outside project root
      allow: [
        path.resolve(__dirname, '..'),
      ],
    },
  },
  resolve: {
    alias: {
      '@admin-photos': path.resolve(__dirname, '../Administration images'),
    },
  },
})
