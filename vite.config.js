import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/public/',   // makes URLs start with /public/
  build: {
    outDir: 'dist/public'  // puts the final site into dist/public
  }
})


