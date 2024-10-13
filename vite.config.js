import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { configDefaults } from 'vitest/config'; // Import configDefaults

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js', // Add this line if you have a setup file
    exclude: [...configDefaults.exclude, 'e2e/*'] // Use configDefaults.exclude
  }
});