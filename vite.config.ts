// const path = require("path");
// const { defineConfig } = require("vite");
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      // Define aliases for your asset paths
      '@images': '/alpe/assets',
      '@styles': '/alpe/styles',
      // Add more aliases as needed
    },
  },
  plugins: [
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "MermaidPlugin",
      fileName: (format: string) =>
        format == "es"
          ? `vitepress-plugin-mermaid.${format}.mjs`
          : `vitepress-plugin-mermaid.${format}.js`,
    },
  },
});