import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages publica sites de projeto em /<repo>/. VITE_BASE='/' para raiz de domínio.
export default defineConfig({
  base: process.env.VITE_BASE ?? '/arquimedes/',
  plugins: [react()],
})
