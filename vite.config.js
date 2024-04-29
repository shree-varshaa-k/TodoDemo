import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

server: {
  proxy: {
    '/api': {
      target: '',
      changeOrigin: true,
      
    },
  }
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
