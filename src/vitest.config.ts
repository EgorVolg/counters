import react from '@vitejs/plugin-react';
import { defineConfig as defineVitestConfig } from 'vitest/config';

export default defineVitestConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
    exclude: ['./node_modules/', './dist/'],
    coverage: {
      reporter: ['text', 'lcov'],
    },
  },
});