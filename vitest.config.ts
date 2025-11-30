import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,     // Permite usar "test" e "expect" sem importar
    environment: "node"
  }
});
