import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: '/fixture-liga-1-2025-peru-calendario-descarga-programacion-torneo-apertura-torneo-clausura-alianza-lima-universitario-cristal-y-mas-multimedia/',
  plugins: [react()],
})
