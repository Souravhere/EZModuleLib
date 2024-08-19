import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.js', // Entry file for your library
      name: 'EZModules', // Global variable name for UMD build
      formats: ['es', 'umd'], // Build both ES module and UMD
      fileName: (format) => `ezmodules.${format}.js`,
    },
    rollupOptions: {
      // Ensure to externalize deps that shouldn't be bundled
      external: ['react', 'react-dom', 'react-router-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  plugins: [react()],
});
