import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  base: "/minutos-menores-liga-1-sub17-sub23-2025-futbol-peruano-tabla/",
  plugins: [react()],
});
