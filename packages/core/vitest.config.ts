import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      provider: "v8",

      // Measure coverage for the source code
      include: ["src/algorithms/pathfinding.ts"],

      // Reports
      reporter: ["text", "html"],

      // CI fails if coverage drops below 80%
      thresholds: {
        lines: 80
      }
    }
  }
});