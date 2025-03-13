import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: '/goleadores-liga-1-especial-dt/',
  plugins: [react()],
})
