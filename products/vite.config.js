import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "products",
      filename: "remoteEntry.js",
      exposes: {
        "./ProductList": "./src/ProductList.tsx", // компонент который экспортируем
      },
      shared: {
        react: {
          singleton: true,
          eager: true,
          strictVersion: true,
          requiredVersion: "18.2.0",
          version: "18.2.0",
        },
        "react-dom": {
          singleton: true,
          eager: true,
          strictVersion: true,
          requiredVersion: "18.2.0",
          version: "18.2.0",
        },
      },
    }),
  ],
  build: { target: "esnext", minify: false },
  preview: { port: 5001 },
});
