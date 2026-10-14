import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

// GitHub Pages publica sites de projeto em /<repo>/. VITE_BASE='/' para raiz de domínio.
//
// Três entradas: landing (index.html), guia (guia/index.html) e demonstração
// (demo/index.html). Cada uma com um objetivo — convencer, ensinar, mostrar — e
// nenhuma deve dividir a rolagem com as outras.
export default defineConfig({
  base: process.env.VITE_BASE ?? '/arquimedes/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        guia: resolve(__dirname, 'guia/index.html'),
        demo: resolve(__dirname, 'demo/index.html'),
      },
    },
  },
})
