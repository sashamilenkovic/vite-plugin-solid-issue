import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";

import vue from "@vitejs/plugin-vue";

//import solid from "vite-plugin-solid";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), react()],
  ////plugins: [vue(), react(), solid()],
});
