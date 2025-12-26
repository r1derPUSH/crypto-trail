import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/crypto-trail/",
  plugins: [react()],
  server: {
    open: "/#/login-page-section",
  },
});
