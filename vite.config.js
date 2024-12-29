import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/online-course/', // Add this line
  plugins: [react()],
  resolve: {
    alias: {
      // Remove the alias for slick-carousel as it's no longer needed
    },
  },
});
