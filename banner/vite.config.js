import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "banner",
      filename: "remoteEntry.js",
      exposes: {
        "./Banner": "./src/Banner.tsx",
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
  preview: { port: 5003 },
});
