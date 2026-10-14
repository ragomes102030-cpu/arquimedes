import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

// GitHub Pages publica sites de projeto em /<repo>/. VITE_BASE='/' para raiz de domínio.
//
// Duas entradas: a landing (index.html) e o guia (guia/index.html). São páginas com
// objetivos opostos — uma convence rápido, a outra ensina devagar — e não devem
// dividir a mesma rolagem.
export default defineConfig({
  base: process.env.VITE_BASE ?? '/arquimedes/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        guia: resolve(__dirname, 'guia/index.html'),
      },
    },
  },
})
