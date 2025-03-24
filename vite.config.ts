import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: '/liga-femenina-peru-2025/',
  plugins: [react()],
})
