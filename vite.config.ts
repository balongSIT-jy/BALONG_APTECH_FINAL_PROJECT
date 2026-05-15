import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  base: '/BALONG_APTECH_FINAL_PROJECT/',
   build: {
    cssMinify: 'esbuild' // Add this line
  }
})
