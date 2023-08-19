import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import linaria from "@linaria/vite";

export default defineConfig({
  plugins: [react(), linaria()],
});
