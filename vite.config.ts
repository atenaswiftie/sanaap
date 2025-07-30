/// <reference types="vitest" />

import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), TanStackRouterVite()],
  preview: {
    port: 4173,
  },
  server: {
    port: 6030,
    open: true,
    hmr: true,
  },
  define: {
    "process.env": process.env,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    mockReset: true,
    coverage: {
      provider: "v8",
      reportsDirectory: "./coverage",
      reporter: ["text", "html"],
      include: ["src"],
      exclude: [
        "src/apis",
        "src/assets",
        "src/components",
        "src/apis",
        "src/icons",
        "src/routes",
        "src/styles",
        "src/utils",
        "src/main.tsx",
        "src/routeTree.gen.ts",
      ],
    },
    reporters: [
      "default",
      [
        "junit",
        {
          outputFile: "./coverage/junit.xml",
        },
      ],
    ],
  },
});
